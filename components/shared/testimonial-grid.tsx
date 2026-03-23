import Image from "next/image";
import { testimonials } from "@/lib/constants";
import SectionReveal from "@/components/shared/section-reveal";

export function TestimonialGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((item, index) => (
        <SectionReveal key={item.name} delay={index * 0.06} className="glass-card p-8">

          {/* Client Image */}
          <div className="flex items-center gap-4 mb-5">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          </div>

          {/* Quote */}
          <p className="text-lg leading-8 text-slate-700">
            “{item.quote}”
          </p>

          {/* Result Badge */}
          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              {item.result}
            </p>
          </div>

        </SectionReveal>
      ))}
    </div>
  );
}