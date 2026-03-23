import { ContactForm } from "@/components/shared/contact-form";
import SectionReveal from "@/components/shared/section-reveal";
import { siteConfig } from "@/lib/constants";

export function ContactSection({ compact = true }: { compact?: boolean }) {
  return (
    <section className={compact ? "section-space" : "section-space pt-0"}>
      <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal className="dark-panel p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Let’s build your results</p>
          <h2 className="mt-4 text-3xl font-semibold text-balance md:text-5xl">Ready to start coaching?</h2>
          <p className="mt-5 text-white/80 leading-8">
            This is the main lead capture area. Replace the placeholder contact details with real information and connect
            WhatsApp, email, and location if needed.
          </p>
          <div className="mt-8 space-y-4 text-white/80">
            <p>Email: {siteConfig.email}</p>
            <p>Phone: {siteConfig.phone}</p>
            <p>Instagram: @getfitwithpurna</p>
          </div>
        </SectionReveal>
        <SectionReveal className="glass-card p-8 md:p-10">
          <h3 className="text-2xl font-semibold">Send an inquiry</h3>
          <p className="mt-3 text-slate-600">Every form submission is stored in the Supabase inquiries table.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
