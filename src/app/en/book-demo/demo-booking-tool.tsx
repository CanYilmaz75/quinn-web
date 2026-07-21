"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type DemoForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  teamSize: string;
  country: string;
  interest: string;
  consent: boolean;
};

const initialForm: DemoForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organisation: "",
  teamSize: "",
  country: "Germany",
  interest: "",
  consent: false
};

const teamMembers = ["MS", "AK", "JL", "TR"];

export function EnglishDemoBookingTool() {
  const [form, setForm] = useState<DemoForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const canSubmit = Boolean(
    form.firstName &&
      form.lastName &&
      form.email &&
      form.phone &&
      form.organisation &&
      form.teamSize &&
      form.country &&
      form.interest &&
      form.consent
  );

  function updateForm<T extends keyof DemoForm>(field: T, value: DemoForm[T]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitDemo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || status === "submitting") {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          locale: "en",
          source: "book-demo",
          website: ""
        })
      });

      if (!response.ok) {
        throw new Error("Demo request failed");
      }

      setSubmitted(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  if (submitted) {
    return (
    <div className="rounded-[20px] border border-[#D7D2CC] bg-white p-6 shadow-[0_18px_48px_rgba(10,10,15,0.06)] sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F4F4F6]">
          <Check className="h-5 w-5 text-[#1E6B72]" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold leading-tight text-foreground">Request noted.</h2>
        <p className="mt-4 text-sm leading-7 text-secondary-foreground">
          Thank you, {form.firstName}. We have saved your demo request for {form.organisation} and will follow up with
          a fitting next step.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setStatus("idle");
            setForm(initialForm);
          }}
        >
          Start a new request
        </Button>
      </div>
    );
  }

  return (
    <div className="justify-self-end rounded-[20px] border border-[#D7D2CC] bg-white px-5 py-6 shadow-[0_18px_48px_rgba(10,10,15,0.06)] sm:px-7 sm:py-7 lg:max-w-[560px] lg:px-8 lg:py-8">
      <h2 className="mx-auto max-w-xl text-center font-serif text-[24px] font-semibold leading-[1.08] text-foreground sm:text-[28px] lg:text-[30px]">
        Discover Quinn together with our team.
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-secondary-foreground">
        See how Quinn works in everyday care and healthcare workflows.
      </p>

      <div className="mt-4 flex justify-center -space-x-2">
        {teamMembers.map((member, index) => (
          <div
            key={member}
            className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-[#E8E8EC] text-[10px] font-semibold text-foreground shadow-sm"
            style={{ backgroundColor: ["#E8E8EC", "#D8E7E9", "#F4F4F6", "#E2E0DC"][index] }}
          >
            {member}
          </div>
        ))}
      </div>

      <form className="mt-8 space-y-4" onSubmit={submitDemo}>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            First name
            <Input className="h-11 rounded-[10px] border-[#D7D2CC] bg-white px-3 text-sm placeholder:text-[#A9A29D]" value={form.firstName} onChange={(event) => updateForm("firstName", event.target.value)} placeholder="e.g. Maya" required />
          </label>
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            Last name
            <Input className="h-11 rounded-[10px] border-[#D7D2CC] bg-white px-3 text-sm placeholder:text-[#A9A29D]" value={form.lastName} onChange={(event) => updateForm("lastName", event.target.value)} placeholder="e.g. Thompson" required />
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            Email
            <Input className="h-11 rounded-[10px] border-[#D7D2CC] bg-white px-3 text-sm placeholder:text-[#A9A29D]" value={form.email} onChange={(event) => updateForm("email", event.target.value)} type="email" placeholder="name@organisation.com" required />
          </label>
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            Phone number
            <Input className="h-11 rounded-[10px] border-[#D7D2CC] bg-white px-3 text-sm placeholder:text-[#A9A29D]" value={form.phone} onChange={(event) => updateForm("phone", event.target.value)} type="tel" placeholder="+49 170 1234567" required />
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-secondary-foreground">
          Practice, clinic or facility
          <Input className="h-11 rounded-[10px] border-[#D7D2CC] bg-white px-3 text-sm placeholder:text-[#A9A29D]" value={form.organisation} onChange={(event) => updateForm("organisation", event.target.value)} placeholder="Sunrise Health Group" required />
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            Employees
            <span className="relative block">
              <select value={form.teamSize} onChange={(event) => updateForm("teamSize", event.target.value)} className="h-11 w-full appearance-none rounded-[10px] border border-[#D7D2CC] bg-white px-3 pr-9 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                <option value="">Number of employees...</option>
                <option>1-5</option>
                <option>6-20</option>
                <option>21-50</option>
                <option>50+</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-foreground" />
            </span>
          </label>
          <label className="space-y-2 text-sm font-medium text-secondary-foreground">
            Country of operation
            <span className="relative block">
              <select value={form.country} onChange={(event) => updateForm("country", event.target.value)} className="h-11 w-full appearance-none rounded-[10px] border border-[#D7D2CC] bg-white px-3 pr-9 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                <option>Germany</option>
                <option>Austria</option>
                <option>Switzerland</option>
                <option>Other country</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-foreground" />
            </span>
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-secondary-foreground">
          Your interest in Quinn
          <Textarea className="min-h-24 rounded-[10px] border-[#D7D2CC] bg-white px-3 py-3 text-sm placeholder:text-[#A9A29D]" value={form.interest} onChange={(event) => updateForm("interest", event.target.value)} placeholder="What interests you about Quinn..." required />
        </label>

        <label className="flex items-start gap-3 text-[11px] leading-5 text-secondary-foreground">
          <input type="checkbox" checked={form.consent} onChange={(event) => updateForm("consent", event.target.checked)} className="mt-1 h-4 w-4 rounded border-border accent-[#1E6B72]" required />
          <span>
            I agree that Quinn may contact me. We process your personal data according to our{" "}
            <Link href="/en/privacy" className="font-medium text-foreground underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {status === "error" ? (
          <p className="rounded-xl border border-[#F2C4C4] bg-[#FFF7F7] px-3 py-2 text-xs font-medium leading-5 text-[#9F1D1D]">
            The request could not be saved right now. Please try again or contact us directly.
          </p>
        ) : null}

        <Button type="submit" size="lg" className="h-11 w-full justify-between px-4 text-sm" disabled={!canSubmit || status === "submitting"}>
          {status === "submitting" ? "Saving request..." : "Request demo"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
