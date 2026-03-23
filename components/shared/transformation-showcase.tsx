"use client";

import { transformations } from "@/lib/constants";
import BeforeAfterSlider from "@/components/shared/before-after-slider";
import SectionReveal from "@/components/shared/section-reveal";

export function TransformationShowcase() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {transformations.map((item, index) => (
        <SectionReveal
          key={item.name}
          delay={index * 0.08}
          className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-6"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

          <BeforeAfterSlider before={item.before} after={item.after} />

          <div className="px-2 pb-2 pt-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold text-charcoal">
                {item.name}
              </h3>

              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {item.metric}
              </span>
            </div>

            <p className="mt-2 text-slate-600">{item.timeline}</p>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Goal
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  {item.goal}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Result
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  {item.result}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Focus
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  {item.focus}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
              View transformation →
            </p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}