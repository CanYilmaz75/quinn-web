import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const root = new URL('../', import.meta.url);
const compile = (path) => ts.transpileModule(readFileSync(new URL(path, root), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
const segmentModule = { exports: {} };
vm.runInNewContext(compile('src/app/demo-buchen/demo-segment.ts'), { exports: segmentModule.exports, module: segmentModule });
const { parseDemoSegment } = segmentModule.exports;
test('audience query allows exactly care/medicine; absent, general, unknown and repeated values stay general', () => {
  assert.equal(parseDemoSegment('care'), 'care');
  assert.equal(parseDemoSegment('medicine'), 'medicine');
  for (const value of [undefined, '', 'general', 'GENERAL', 'Care', 'unknown', ['care', 'medicine']]) assert.equal(parseDemoSegment(value), '');
});
function harness(route, exportName, response) {
  const state = []; let cursor = 0; const requests = []; const events = [];
  const mocks = {
    react: {
      useState(initial) { const i = cursor++; if (!(i in state)) state[i] = typeof initial === 'function' ? initial() : initial; return [state[i], (v) => { state[i] = typeof v === 'function' ? v(state[i]) : v; }]; },
      useRef(initial) { const i = cursor++; if (!(i in state)) state[i] = { current: initial }; return state[i]; }
    },
    '@/app/demo-buchen/demo-segment': { parseDemoSegment },
    '@/lib/consent-aware-events': { trackPublicConversion: (name, data) => events.push({ name, data }) },
    '@/components/ui/button': { Button: 'button' },
    '@/components/ui/input': { Input: 'input' },
    'next/link': { default: 'a' },
    'lucide-react': { ArrowRight: 'svg', Check: 'svg', ChevronDown: 'svg' }
  };
  const compiledModule = { exports: {} };
  vm.runInNewContext(compile(`src/app/${route}/demo-booking-tool.tsx`), {
    exports: compiledModule.exports, module: compiledModule,
    require: (id) => id in mocks ? mocks[id] : require(id),
    fetch: async (url, options) => { requests.push({ url, body: JSON.parse(options.body) }); return response; }
  });
  return { render(props) { cursor = 0; return compiledModule.exports[exportName](props); }, requests, events };
}
function nodes(element) {
  if (!element || typeof element !== 'object') return [];
  return [element, ...[element.props?.children].flat(Infinity).flatMap(nodes)];
}
for (const [route, locale, exportName] of [['demo-buchen', 'de', 'DemoBookingTool'], ['en/book-demo', 'en', 'EnglishDemoBookingTool']]) {
  for (const initialSegment of ['care', 'medicine', '']) {
    test(`${locale}: ${initialSegment || 'general'} editable selection, POST metadata and verified success`, async () => {
      const h = harness(route, exportName, { ok: true, json: async () => ({ ok: true }) });
      const props = { initialSegment };
      let tree = h.render(props);
      const select = nodes(tree).find(n => n.type === 'select' && n.props.name === 'segment');
      assert.equal(select.props.value, initialSegment);
      assert.equal(select.props.required, undefined);
      const chosen = initialSegment === 'care' ? 'medicine' : initialSegment === 'medicine' ? 'care' : '';
      select.props.onChange({ target: { value: chosen } });
      tree = h.render(props);
      const inputs = nodes(tree).filter(n => n.type === 'input');
      const values = ['Synthetic', 'Test', 'test@example.invalid', 'Synthetic organisation'];
      for (const [i, input] of inputs.filter(n => n.props.type !== 'checkbox').entries()) input.props.onChange({ target: { value: values[i] } });
      const interest = nodes(tree).find(n => n.type === 'select' && !n.props.name);
      interest.props.onChange({ target: { value: locale === 'de' ? 'Pilot und Preisrahmen' : 'Pilot and pricing range' } });
      inputs.find(n => n.props.type === 'checkbox').props.onChange({ target: { checked: true } });
      tree = h.render(props);
      await nodes(tree).find(n => n.type === 'form').props.onSubmit({ preventDefault() {} });
      assert.equal(h.requests.length, 1);
      assert.equal(h.requests[0].url, '/api/demo-requests');
      assert.equal(h.requests[0].body.segment, chosen || 'general');
      assert.equal(h.requests[0].body.locale, locale);
      assert.equal(h.requests[0].body.interest.includes(chosen === 'care' ? '[Pflege / Care]' : '[Medizin / Medicine]'), Boolean(chosen));
      assert.equal(h.requests[0].body.email, 'test@example.invalid');
      assert.ok(h.events.some(e => e.name === 'demo_form_submitted'));
      assert.ok(!JSON.stringify(h.events).includes('@example.invalid'));
      assert.ok(!nodes(h.render(props)).some(n => n.type === 'form'));
    });
  }
  for (const [name, response] of [
    ['HTTP failure', { ok: false, json: async () => ({ ok: false }) }],
    ['unverified 200', { ok: true, json: async () => ({}) }],
    ['staging response', { ok: true, json: async () => ({ ok: true, staging: true }) }],
    ['invalid JSON', { ok: true, json: async () => { throw new Error('Invalid JSON'); } }]
  ]) {
    test(`${locale}: ${name} is not a fake success`, async () => {
      const h = harness(route, exportName, response);
      const props = { initialInterest: 'Synthetic workflow' };
      let tree = h.render(props);
      for (const input of nodes(tree).filter(n => n.type === 'input')) input.props.onChange({ target: { value: input.props.type === 'email' ? 'test@example.invalid' : 'Synthetic', checked: true } });
      tree = h.render(props);
      await nodes(tree).find(n => n.type === 'form').props.onSubmit({ preventDefault() {} });
      assert.equal(h.requests.length, 1);
      assert.ok(nodes(h.render(props)).some(n => n.props?.role === 'alert'));
      assert.ok(!h.events.some(e => e.name === 'demo_form_submitted'));
    });
  }
}
