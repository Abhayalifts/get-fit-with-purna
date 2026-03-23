import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import SectionReveal from "@/components/shared/section-reveal";

export function AboutPreview() {
  return (
    <section className="section-space">
      <div className="container-main grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">

        {/* LEFT IMAGE + TEXT CARD */}
        <SectionReveal className="dark-panel overflow-hidden p-0">
          <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">

            {/* IMAGE */}
            <div className="relative min-h-[320px] md:min-h-full">
              <Image
                src="/images/purna.png"
                alt="Fitness Coach Purna"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>

            {/* TEXT */}
            <div className="relative p-8 md:p-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                About Purna
              </p>

              <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
                Coaching that balances performance, aesthetics, and consistency.
              </h3>

              <p className="mt-5 leading-8 text-white/80">
                Replace this placeholder text with Purna’s real origin story,
                training philosophy, certifications, and what makes his coaching
                different in the local market.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-charcoal hover:opacity-90"
              >
                Learn more
              </Link>
            </div>
          </div>
        </SectionReveal>

        {/* RIGHT TRUST SECTION */}
        <SectionReveal className="glass-card p-8 md:p-10">
          <SectionHeading
            eyebrow="Coach positioning"
            title="Premium trainer brand with clarity, trust, and visible proof."
            description="This section works as a trust-building bridge between the hero and service offer."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Tailored programming</h4>
              <p className="mt-3 text-slate-600">
                Plans designed around client level, goals, and schedule.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Lifestyle-based nutrition</h4>
              <p className="mt-3 text-slate-600">
                Simple guidance that clients can actually sustain.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Accountability system</h4>
              <p className="mt-3 text-slate-600">
                Check-ins, tracking, and support that keep momentum high.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h4 className="font-semibold">Transformation focus</h4>
              <p className="mt-3 text-slate-600">
                Visible changes backed by better habits and stronger performance.
              </p>
            </div>

          </div>
        </SectionReveal>

      </div>
    </section>
  );
}