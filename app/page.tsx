import { AboutPreview } from "@/components/home/about-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TransformationsSection } from "@/components/home/transformations-section";
import SectionReveal from "@/components/shared/section-reveal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <TransformationsSection />
      <TestimonialsSection />
      <BlogPreview />
      <InstagramSection />
      <CtaSection />
    </>
  );
}
