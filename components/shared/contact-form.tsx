"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  goal: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  goal: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Inquiry submitted successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Submission failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name">
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Your phone number"
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email">
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Your email address"
          />
        </Field>
        <Field label="Fitness goal">
          <input
            value={form.goal}
            onChange={(event) => setForm({ ...form, goal: event.target.value })}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="Fat loss, muscle gain, consistency..."
          />
        </Field>
      </div>

      <Field label="Message">
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-accent"
          placeholder="Tell us about your current situation and what result you want."
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex rounded-full bg-charcoal px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Submit inquiry"}
      </button>

      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  );
}
