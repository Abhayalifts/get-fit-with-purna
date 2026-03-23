import Link from "next/link";
import { ContactSection } from "@/components/shared/contact-section";
import SectionReveal from "@/components/shared/section-reveal";

export function CtaSection() {
  return (
    <>
      <section className="section-space pb-8">
        <div className="container-main">
          <div className="dark-panel p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Ready to begin?</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-balance md:text-5xl">
              Build a website that turns fitness interest into serious coaching leads.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/80 leading-8">
              This CTA can be used to push users toward consultations, WhatsApp inquiries, or premium coaching applications.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-charcoal">
                Contact now
              </Link>
              <Link href="/services" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
