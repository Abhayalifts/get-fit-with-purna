"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants";
import SectionReveal from "@/components/shared/section-reveal";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, index) => (
        <SectionReveal
          key={service.title}
          delay={index * 0.08}
          className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* subtle glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition group-hover:opacity-100" />

          {/* header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold text-charcoal">
              {service.title}
            </h3>

            <div className="rounded-full bg-accent/10 p-2 text-accent transition group-hover:scale-110">
              <ArrowUpRight className="size-5" />
            </div>
          </div>

          {/* description */}
          <p className="mt-4 leading-7 text-slate-600">
            {service.description}
          </p>

          {/* points */}
          <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
            {service.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2"
              >
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>

          {/* hover CTA */}
          <div className="mt-8 text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100">
            Learn more →
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}