import Image from "next/image";
import { Instagram } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import SectionReveal from "@/components/shared/section-reveal";
import { instagramPosts, siteConfig, socialProof } from "@/lib/constants";

export function InstagramSection() {
  return (
    <section className="section-space">
      <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="Social proof"
            title="Turn Instagram activity into trust-building proof on the website."
            description="This section can later be upgraded to a live Instagram feed or embedded Reels previews."
          />

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3 font-semibold text-white"
          >
            <Instagram className="size-5" />
            Visit Instagram
          </a>

          <div className="mt-8 grid gap-4">
            {socialProof.map((item, index) => (
              <SectionReveal key={item} delay={index * 0.06} className="glass-card p-6">
                <p className="text-lg text-slate-700">{item}</p>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-4">
          {instagramPosts.map((item, index) => (
            <SectionReveal
              key={item.image}
              delay={index * 0.08}
              className="glass-card overflow-hidden p-3"
            >
              <div className="relative aspect-square overflow-hidden rounded-[22px]">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <p className="mt-4 line-clamp-2 text-sm text-slate-600">{item.caption}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}