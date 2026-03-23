import SectionReveal from "@/components/shared/section-reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-52 w-52 rounded-full bg-slate-300/30 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="container-main relative z-10">
        <SectionReveal className="glass-card p-8 md:p-12 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-charcoal md:text-6xl text-balance">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}