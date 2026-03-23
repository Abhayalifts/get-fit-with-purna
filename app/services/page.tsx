import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { ServicesGrid } from "@/components/shared/services-grid";
import SectionReveal from "@/components/shared/section-reveal";

export const metadata = {
  title: "Services",
};

const serviceHighlights = [
  {
    title: "Structured coaching",
    description:
      "Every program is built with clarity, progression, and a clear outcome in mind.",
  },
  {
    title: "Accountability system",
    description:
      "Check-ins, progress tracking, and support that keep clients consistent.",
  },
  {
    title: "Sustainable results",
    description:
      "The goal is not quick fixes, but a physique and lifestyle clients can maintain.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Coaching offers designed for real transformations."
        description="Every offer is built to help clients get results with clarity, accountability, and a premium coaching experience."
      />

      <section className="section-space pt-0">
        <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="dark-panel p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Coaching approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Built for clients who want more than random workouts.
            </h2>

            <p className="mt-5 leading-8 text-white/80">
              Each service is designed to help clients train with structure,
              improve confidence, and create visible progress without relying on
              unrealistic methods. The experience is premium, practical, and
              built around real life.
            </p>

            <div className="mt-8 space-y-4">
              {serviceHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-charcoal transition hover:-translate-y-0.5"
            >
              Book consultation
            </Link>
          </SectionReveal>

          <SectionReveal className="glass-card p-6 md:p-8">
            <ServicesGrid />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-main">
          <SectionReveal className="glass-card p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Premium support
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-charcoal md:text-4xl">
              Coaching that combines strategy, support, and accountability.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              Whether the goal is fat loss, muscle gain, confidence, or long-term
              body recomposition, the coaching system is designed to make
              progress clear, realistic, and sustainable.
            </p>

            <div className="mt-8">
              <Link
                href="/transformations"
                className="inline-flex rounded-full bg-charcoal px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                View transformations
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
} 