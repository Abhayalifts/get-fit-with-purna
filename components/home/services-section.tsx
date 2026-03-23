import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServicesGrid } from "@/components/shared/services-grid";
import SectionReveal from "@/components/shared/section-reveal";

export function ServicesSection() {
  return (
    <section className="section-space">
      <div className="container-main">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Coaching offers built to convert visitors into serious leads."
            description="Clear, premium service positioning increases trust and makes the next step obvious."
          />
          <Link href="/services" className="text-sm font-semibold text-accent">
            View all services
          </Link>
        </div>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}
