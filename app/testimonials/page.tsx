import { PageHero } from "@/components/shared/page-hero";
import { TestimonialGrid } from "@/components/shared/testimonial-grid";

export const metadata = {
  title: "Testimonials"
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client feedback"
        title="Real experiences from coaching clients."
        description="Show proof through written feedback, short video testimonials, and transformation outcomes."
      />
      <section className="section-space pt-0">
        <div className="container-main">
          <TestimonialGrid />
        </div>
      </section>
    </>
  );
}
