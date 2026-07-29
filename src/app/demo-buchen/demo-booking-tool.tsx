"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackPublicConversion } from "@/lib/consent-aware-events";

type DemoForm = {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  interest: string;
  consent: boolean;
};

function createInitialForm(initialInterest = ""): DemoForm {
  return {
  firstName: "",
  lastName: "",
  email: "",
  organisation: "",
  interest: initialInterest,
  consent: false
  };
}

const workflows = [
  "Pflegeaufnahme und SIS",
  "Pflege- oder Beratungsdokumentation",
  "Übergabe und fachliche Prüfung",
  "Medizinischer Dokumentationsworkflow",
  "Pilot und Preisrahmen",
  "Standortangebot und Einführung",
  "Träger- oder Verbundlösung",
  "Anderer dokumentationsnaher Workflow"
];

export function DemoBookingTool({ initialInterest = "", heading = "Demo direkt mit dem Gründer klären." }: { initialInterest?: string; heading?: string }) {
  const [form, setForm] = useState<DemoForm>(() => createInitialForm(initialInterest));
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const hasTrackedStart = useRef(false);
  const hasTrackedValidationError = useRef(false);

  const canSubmit = Boolean(
    form.firstName && form.lastName && form.email && form.organisation && form.interest.trim().length >= 5 && form.consent
  );

  function updateForm<T extends keyof DemoForm>(field: T, value: DemoForm[T]) {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackPublicConversion("demo_form_started", { locale: "de", source: "demo-buchen" });
    }
    hasTrackedValidationError.current = false;
    setForm((current) => ({ ...current, [field]: value }));
  }

  function trackValidationError() {
    if (hasTrackedValidationError.current) return;
    hasTrackedValidationError.current = true;
    trackPublicConversion("demo_form_validation_error", { locale: "de", source: "demo-buchen" });
  }

  async function submitDemo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || status === "submitting") return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, locale: "de", source: "demo-buchen", website: "" })
      });
      if (!response.ok) throw new Error("Demo request failed");
      trackPublicConversion("demo_form_submitted", { locale: "de", source: "demo-buchen" });
      setSubmitted(true);
      setStatus("idle");
    } catch {
      trackPublicConversion("demo_form_failed", { locale: "de", source: "demo-buchen" });
      setStatus("error");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-[#D7D2CC] bg-white p-6 shadow-[0_18px_48px_rgba(10,10,15,0.06)] sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E7F1EE]">
          <Check className="h-5 w-5 text-[#1E6B72]" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold leading-tight text-foreground">Anfrage angekommen.</h2>
        <p className="mt-4 text-sm leading-7 text-secondary-foreground">
          Danke, {form.firstName}. Can prüft Ihre Anfrage für {form.organisation} persönlich und meldet sich mit einem passenden nächsten Schritt.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => { setSubmitted(false); setStatus("idle"); setForm(createInitialForm(initialInterest)); hasTrackedStart.current = false; hasTrackedValidationError.current = false; }}>
          Neue Anfrage starten
        </Button>
      </div>
    );
  }

  return (
    <div className="min-w-0 w-full justify-self-end rounded-[20px] border border-[#D7D2CC] bg-white px-5 py-6 shadow-[0_18px_48px_rgba(10,10,15,0.06)] sm:px-7 sm:py-7 lg:max-w-[560px] lg:px-8 lg:py-8">
      <div className="flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F1EE] text-xs font-semibold text-[#1E6B72]">CY</div>
        <div>
          <p className="text-sm font-semibold text-foreground">Can Yilmaz</p>
          <p className="text-xs text-secondary-foreground">Gründer von Quinn Health</p>
        </div>
      </div>
      <h2 className="mx-auto mt-5 max-w-xl text-center font-serif text-[24px] font-semibold leading-[1.08] text-foreground sm:text-[28px] lg:text-[30px]">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-secondary-foreground">
        In 15 Minuten sehen Sie einen fiktiven Produktfluss und klären, ob Quinn zu Ihrem Workflow passt.
      </p>
      <p className="mx-auto mt-2 max-w-lg text-center text-xs leading-5 text-muted-foreground">
        Bitte keine echten Bewohner-, Patienten- oder Gesundheitsdaten eintragen. Ziel: persönliche Rückmeldung innerhalb von zwei Werktagen.
      </p>

      <form className="mt-7 space-y-4" onSubmit={submitDemo} onInvalidCapture={trackValidationError}>
        <p className="text-right text-xs text-muted-foreground">* Pflichtfelder</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            Vorname <span aria-hidden="true">*</span>
            <Input value={form.firstName} onChange={(event) => updateForm("firstName", event.target.value)} placeholder="z. B. Maya" autoComplete="given-name" required />
          </label>
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            Nachname <span aria-hidden="true">*</span>
            <Input value={form.lastName} onChange={(event) => updateForm("lastName", event.target.value)} placeholder="z. B. Weber" autoComplete="family-name" required />
          </label>
        </div>
        <label className="space-y-2 text-sm font-medium text-secondary-foreground">
          Geschäftliche E-Mail <span aria-hidden="true">*</span>
          <Input value={form.email} onChange={(event) => updateForm("email", event.target.value)} type="email" placeholder="name@organisation.de" autoComplete="email" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-secondary-foreground">
          Organisation <span aria-hidden="true">*</span>
          <Input value={form.organisation} onChange={(event) => updateForm("organisation", event.target.value)} placeholder="Pflegeeinrichtung oder Praxis" autoComplete="organization" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-secondary-foreground">
          Welchen Workflow möchten Sie ansehen? <span aria-hidden="true">*</span>
          <span className="relative block">
            <select value={form.interest} onChange={(event) => updateForm("interest", event.target.value)} className="h-11 w-full appearance-none rounded-[10px] border border-[#D7D2CC] bg-white px-3 pr-9 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
              <option value="">Workflow auswählen</option>
              {workflows.map((workflow) => <option key={workflow}>{workflow}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-foreground" />
          </span>
        </label>
        <label className="flex items-start gap-3 text-[11px] leading-5 text-secondary-foreground">
          <input type="checkbox" checked={form.consent} onChange={(event) => updateForm("consent", event.target.checked)} className="mt-1 h-4 w-4 rounded border-border accent-[#1E6B72]" required />
          <span>
            Ich bin damit einverstanden, dass Quinn mich zu dieser Demo-Anfrage kontaktiert. Die Verarbeitung erfolgt gemäß der <Link href="/datenschutz" className="font-medium text-foreground underline underline-offset-4">Datenschutzerklärung</Link>.
          </span>
        </label>
        {status === "error" ? (
          <p className="rounded-xl border border-[#F2C4C4] bg-[#FFF7F7] px-3 py-2 text-xs font-medium leading-5 text-[#9F1D1D]">
            Die Anfrage konnte gerade nicht gespeichert werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
          </p>
        ) : null}
        <Button type="submit" size="lg" className="h-11 w-full justify-between px-4 text-sm" disabled={status === "submitting"}>
          {status === "submitting" ? "Anfrage wird gesendet …" : "15-minütige Demo anfragen"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
