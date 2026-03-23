import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { TransformationShowcase } from "@/components/shared/transformation-showcase";
import BeforeAfterSlider from "@/components/shared/before-after-slider";
import SectionReveal from "@/components/shared/section-reveal";
export function TransformationsSection() {
  return (
    <section className="section-space">
      <div className="container-main">
        <SectionHeading
          eyebrow="Transformations"
          title="Before and after proof that builds instant credibility."
          description="Swap the placeholder images with your real clients and keep the same slider component."
        />
        <div className="mt-10">
          <TransformationShowcase />
        </div>
        <div className="mt-8">
          <Link href="/transformations" className="text-sm font-semibold text-accent">
            See all transformations
          </Link>
        </div>
      </div>
    </section>
  );
}
