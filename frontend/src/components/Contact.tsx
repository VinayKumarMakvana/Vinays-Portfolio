"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  business: string;
  website: string;
  email: string;
  challenge: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  business: "",
  website: "",
  email: "",
  challenge: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    if (!form.name.trim() || !form.business.trim() || !form.challenge.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, business name, and biggest challenge.");
      return;
    }
    
    if (!isValidEmail(form.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      // YAHAN DIRECT API CALL HO RAHI HAI, KOI MAIL APP NAHI KHULEGA
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bbf19e0d-c21c-40af-b8d6-42f88259a2ee", // <--- Apni Web3Forms Access Key yahan daalo
          subject: `New Audit Request from ${form.name.trim()}`,
          name: form.name.trim(),
          email: form.email.trim(),
          business: form.business.trim(),
          website: form.website || "No website provided",
          challenge: form.challenge.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data?.message ?? "Something went wrong. Please try again.");
      }

      // Success hone par ye chalega
      setStatus("success");
      setForm(INITIAL_STATE);
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="border-t border-surface-border">
      <div className="section-shell grid gap-14 py-24 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Start a Project</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
            Get a free audit of your current site.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-secondary">
            Tell us about your business and where your site is falling
            short. You&apos;ll hear back directly from Vinay — not a sales
            team — with a clear read on what&apos;s holding your bookings back.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-surface-border bg-surface/50 p-4">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" strokeWidth={1.75} />
            <p className="text-sm text-ink-secondary">
              Based in Kota, Rajasthan, India — working with clinics, salons,
              and home service brands in New York, London, Dubai, India & Entire World Wide.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-surface-border bg-surface/60 p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="form-input w-full rounded-md border p-2"
                  placeholder="Jordan Lee"
                />
              </Field>
              <Field label="Business Name" htmlFor="business">
                <input
                  id="business"
                  name="business"
                  type="text"
                  value={form.business}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="form-input w-full rounded-md border p-2"
                  placeholder="Lee Family Dental"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Website URL" htmlFor="website" required={false}>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={form.website}
                  onChange={handleChange}
                  autoComplete="url"
                  className="form-input w-full rounded-md border p-2"
                  placeholder="yourbusiness.com"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="form-input w-full rounded-md border p-2"
                  placeholder="jordan@leefamilydental.com"
                />
              </Field>
            </div>

            <Field label="Biggest digital challenge" htmlFor="challenge">
              <textarea
                id="challenge"
                name="challenge"
                value={form.challenge}
                onChange={handleChange}
                rows={4}
                className="form-input w-full resize-none rounded-md border p-2"
                placeholder="Our site looks outdated and we're not getting online bookings..."
              />
            </Field>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-teal-600 px-4 py-3 font-bold text-white transition-colors hover:bg-teal-700 disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Request a Free Website Audit"}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-teal-bright">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks — your audit request is in. Expect a reply within one
                  business day.
                </p>
              )}
              {status === "error" && errorMessage && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required = true,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink-primary">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children}
    </div>
  );
}