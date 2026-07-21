import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

function allFiles(directory) {
  const absolute = path.join(root, directory);
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(directory, entry.name);
    return entry.isDirectory() ? allFiles(relative) : [relative];
  });
}

test("public route surface is present", () => {
  for (const file of [
    "src/app/page.tsx",
    "src/app/en/page.tsx",
    "src/app/demo-buchen/page.tsx",
    "src/app/en/book-demo/page.tsx",
    "src/app/datenschutz/page.tsx",
    "src/app/en/privacy/page.tsx",
    "src/app/impressum/page.tsx",
    "src/app/en/legal-notice/page.tsx",
    "src/app/sitemap.ts",
    "src/app/robots.ts"
  ]) {
    assert.equal(fs.existsSync(path.join(root, file)), true, `${file} fehlt`);
  }
});

test("protected app and auth code are absent", () => {
  const sourceFiles = allFiles("src");
  assert.equal(sourceFiles.some((file) => file.includes("(protected)")), false);
  assert.equal(sourceFiles.some((file) => file.includes("(auth)")), false);
  assert.equal(sourceFiles.some((file) => file.includes("supabase")), false);
  assert.equal(sourceFiles.some((file) => file.includes("consultation")), false);

  const source = sourceFiles.filter((file) => /\.(ts|tsx|js|jsx)$/.test(file)).map(read).join("\n");
  for (const forbidden of ["SUPABASE_SERVICE_ROLE_KEY", "OPENAI_API_KEY", "@supabase/", "@/server/"]) {
    assert.equal(source.includes(forbidden), false, `verbotener interner Bezug: ${forbidden}`);
  }
});

test("public package excludes clinical runtime dependencies", () => {
  const pkg = JSON.parse(read("package.json"));
  for (const dependency of ["@supabase/supabase-js", "@supabase/ssr", "openai", "pdf-lib", "@sentry/nextjs"]) {
    assert.equal(Boolean(pkg.dependencies?.[dependency]), false, `${dependency} darf nicht im Public Web liegen`);
  }
});

test("login crosses the repository and domain boundary explicitly", () => {
  const header = read("src/components/layout/site-header.tsx");
  const config = read("src/lib/public-config.ts");
  assert.match(header, /publicConfig\.loginUrl/);
  assert.doesNotMatch(header, /href=["']\/dashboard/);
  assert.match(config, /https:\/\/app\.quinnhealth\.de/);
});

test("marketing forms use narrow server-side proxy routes without app secrets", () => {
  const demoRoute = read("src/app/api/demo-requests/route.ts");
  const newsletterRoute = read("src/app/api/newsletter/route.ts");
  const proxy = read("src/lib/marketing-proxy.ts");
  assert.match(demoRoute, /demoRequestSchema/);
  assert.match(newsletterRoute, /newsletterSignupSchema/);
  assert.match(proxy, /QUINN_APP_URL/);
  assert.doesNotMatch(proxy, /SERVICE_ROLE|SUPABASE|OPENAI/);
});
