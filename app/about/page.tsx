import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import SectionReveal from "@/components/shared/section-reveal";
import { AboutMediaGallery } from "@/components/shared/about-media-gallery";

export const metadata = {
  title: "About",
};

const achievements = [
  "250+ client transformations guided",
  "1000+ coaching sessions delivered",
  "7+ years of fitness experience",
  "Experience with fat loss, muscle gain, and body recomposition",
];

const principles = [
  "Clear structure and measurable progress",
  "Simple nutrition guidance without extreme restriction",
  "High-accountability support and realistic coaching",
  "Technique-first programming that builds confidence",
];

const journeyItems = [
  {
    year: "Start",
    title: "Where the journey began",
    description:
      "Fitness started as a personal commitment to becoming stronger, healthier, and more disciplined. What began as self-improvement eventually became a deeper passion for transformation and performance.",
  },
  {
    year: "Growth",
    title: "From training to coaching",
    description:
      "Over time, that personal journey grew into a purpose: helping others build confidence, strength, and structure through realistic coaching methods that actually fit real life.",
  },
  {
    year: "Today",
    title: "Coaching with structure and sustainability",
    description:
      "Today, the focus is not just on visible transformation, but on building systems, habits, and discipline that help clients create long-term results they can maintain.",
  },
];

const journeyPhotos = [
  {
    src: "/images/journey/journey1.jpg",
    title: "Personal training session",
    description: "Hands-on coaching focused on technique, effort, and confidence.",
  },
  {
    src: "/images/journey/journey2.jpg",
    title: "Gym floor coaching",
    description: "Helping clients train with structure, clarity, and proper execution.",
  },
  {
    src: "/images/journey/journey3.jpg",
    title: "Strength and discipline",
    description: "Training built around progress, consistency, and performance.",
  },
  {
    src: "/images/journey/journey4.jpg",
    title: "Transformation in action",
    description: "Real work, real accountability, and sustainable change.",
  },
];

const certifications = [
  {
    title: "Certified Personal Trainer",
    description:
      "Professional certification supporting safe, effective, and structured coaching.",
    image: "/images/certifications/cert1.jpg",
  },
  {
    title: "Nutrition Coaching Certification",
    description:
      "Practical nutrition guidance focused on realistic habits and sustainable results.",
    image: "/images/certifications/cert2.jpg",
  },
  {
    title: "Strength Training Workshop",
    description:
      "Applied learning around performance, programming, and movement quality.",
    image: "/images/certifications/cert3.jpg",
  },
  {
    title: "Functional Training / Mobility Workshop",
    description:
      "Training development focused on movement efficiency, mobility, and resilience.",
    image: "/images/certifications/cert4.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About coach"
        title="A coaching approach built on results, structure, and sustainability."
        description="Discover Purna’s journey, coaching philosophy, achievements, and certifications."
      />

      <section className="section-space">
        <div className="container-main grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">My journey</h2>

            <p className="mt-4 leading-7 text-slate-600">
              Fitness started as a personal commitment to becoming stronger,
              healthier, and more disciplined. What began as self-improvement
              eventually grew into a passion for transformation, performance,
              and coaching others toward real results.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Over time, I realized that the biggest changes do not come from
              extreme methods. They come from structure, consistency, proper
              guidance, and a system that fits real life. That belief now shapes
              the way I coach every client.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              My goal is to help people build bodies they feel proud of, while
              also creating habits, confidence, and discipline that last beyond
              the gym.
            </p>
          </SectionReveal>

          <SectionReveal className="dark-panel p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Why clients stay</h2>

            <div className="mt-6 space-y-4 text-white/80">
              {principles.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-charcoal transition hover:-translate-y-0.5"
            >
              Work with Purna
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="glass-card p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Journey timeline
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              The path behind the coaching approach
            </h2>

            <div className="mt-8 space-y-8">
              {journeyItems.map((item, index) => (
                <div key={item.title} className="relative pl-8">
                  <div className="absolute left-0 top-1 h-full w-px bg-slate-200" />
                  <div className="absolute left-[-6px] top-1 h-3.5 w-3.5 rounded-full bg-accent" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                  {index !== journeyItems.length - 1 && (
                    <div className="mt-8 border-b border-slate-100" />
                  )}
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal>
            <AboutMediaGallery
              title="Journey in action"
              description="A visual look at coaching, training, and the work behind the transformation process."
              items={journeyPhotos}
              cardClassName="glass-card p-6 md:p-8"
            />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <SectionReveal className="glass-card p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Achievements
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Proof of consistency and coaching experience
            </h2>

            <div className="mt-8 grid gap-4">
              {achievements.map((item) => (
                <div key={item} className="rounded-3xl bg-slate-50 p-5">
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal>
            <AboutMediaGallery
              title="Certifications and development"
              description="Credentials, workshops, and professional development that support the coaching system."
              items={certifications.map((item) => ({
                src: item.image,
                title: item.title,
                description: item.description,
              }))}
              cardClassName="glass-card p-6 md:p-8"
              badgeStyle
            />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-main">
          <SectionReveal className="dark-panel p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Coaching philosophy
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              The best coaching is realistic, structured, and sustainable.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/80">
              My approach is built around helping clients not only look better,
              but move better, feel stronger, and build a lifestyle they can
              maintain long term. Real transformation happens when training,
              nutrition, and accountability work together.
            </p>

            <div className="mt-8">
              <Link
                href="/transformations"
                className="inline-flex rounded-full bg-white px-5 py-3 font-semibold text-charcoal transition hover:-translate-y-0.5"
              >
                View transformations
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}