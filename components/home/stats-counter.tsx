"use client";

import {useEffect, useRef, useState} from "react";
import SectionReveal from "../shared/section-reveal";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
};

const stats: StatItem[] = [
  {
    label: "Clients Trained",
    value: 150,
    suffix: "+",
    description: "Placeholder stat for social proof and credibility.",
  },
  {
    label: "Transformations",
    value: 90,
    suffix: "+",
    description: "Show visible results and build trust instantly.",
  },
  {
    label: "Years of Experience",
    value: 5,
    suffix: "+",
    description: "Communicates consistency and coaching background.",
  },
  {
    label: "Client Satisfaction",
    value: 95,
    suffix: "%",
    description: "Strong performance signal for conversions.",
  },
];

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let start = 0;
        const duration = 1600;
        const startTime = performance.now();

        const update = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(start + (value - start) * eased);
          setCount(current);

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(update);
      },
      {threshold: 0.4}
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section
      id="home-stats"
      className="border-y border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Proven coaching outcomes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Built to convert visitors into serious inquiries.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <SectionReveal key={stat.label} delay={index * 0.1}>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-slate-900">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {stat.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}