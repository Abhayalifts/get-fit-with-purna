import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { TransformationShowcase } from "@/components/shared/transformation-showcase";
import SectionReveal from "@/components/shared/section-reveal";

const proofPoints = [
  {
    title: "Visible progress",
    description:
      "Show real client changes with before-and-after visuals that build trust immediately.",
  },
  {
    title: "Measurable outcomes",
    description:
      "Highlight timelines, fat loss, strength gains, confidence, and sustainable improvements.",
  },
  {
    title: "Coaching credibility",
    description:
      "Transformation stories give visitors proof that the coaching system actually works.",
  },
];

export const metadata = {
  title: "Transformations",
};

export default function TransformationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Transformation stories that build trust instantly."
        description="Use real client images and measurable outcomes here. The sliders below are ready for before and after transformation proof."
      />

      <section className="section-space pt-0">
        <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="dark-panel p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Transformation proof
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Real stories create confidence before the first inquiry.
            </h2>

            <p className="mt-5 leading-8 text-white/80">
              This page should showcase visible results, realistic timelines,
              and the kind of progress clients can trust. Before-and-after proof
              is one of the strongest conversion tools for a fitness coach.
            </p>

            <div className="mt-8 space-y-4">
              {proofPoints.map((item) => (
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
              Start your transformation
            </Link>
          </SectionReveal>

          <SectionReveal className="glass-card p-6 md:p-8">
            <TransformationShowcase />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-main">
          <SectionReveal className="glass-card p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Results that matter
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-charcoal md:text-4xl">
              Transformation is not just about looking different.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              The best results combine better body composition, stronger habits,
              more confidence, improved performance, and a process clients can
              maintain long term.
            </p>

            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex rounded-full bg-charcoal px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                Explore coaching services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}