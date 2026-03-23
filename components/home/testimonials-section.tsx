import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialGrid } from "@/components/shared/testimonial-grid";
import SectionReveal from "@/components/shared/section-reveal";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="container-main">
        <SectionReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Client words that support the transformation proof."
            description="This section combines credibility, emotion, and conversion-focused trust building."
          />
        </SectionReveal>

        <SectionReveal delay={0.08} className="mt-10">
          <TestimonialGrid />
        </SectionReveal>

        <SectionReveal delay={0.12} className="mt-8">
          <Link href="/testimonials" className="text-sm font-semibold text-accent">
            View more feedback
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}