"use client";

import CountUp from "react-countup";
import {stats} from "@/lib/constants";
import SectionReveal from "@/components/shared/section-reveal";

export function StatsSection() {
  return (
    <section
      id="home-stats"
      className="section-space border-y border-slate-200 bg-white pt-6"
    >
      <div className="container-main">
        <SectionReveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Proven coaching outcomes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
              Built to convert visitors into serious inquiries.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <SectionReveal
              key={stat.label}
              delay={index * 0.08}
              className="glass-card p-8"
            >
              <div className="text-4xl font-semibold text-charcoal md:text-5xl">
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>

              <p className="mt-4 text-base font-medium text-charcoal">
                {stat.label}
              </p>

              {"description" in stat && stat.description ? (
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {stat.description}
                </p>
              ) : (
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Replace with a real stat description for stronger social proof.
                </p>
              )}
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}