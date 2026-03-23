"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] pt-8 md:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="absolute right-[-6%] top-[15%] h-80 w-80 rounded-full bg-slate-300/40 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-charcoal/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container-main relative z-10 flex min-h-[88vh] items-center pb-16 pt-10 md:pt-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={revealFade}
              className="inline-flex rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent backdrop-blur"
            >
              Premium fitness coaching
            </motion.p>

            <div className="mt-6 space-y-1">
              <div className="overflow-hidden">
                <motion.h1
                  variants={revealUp}
                  className="text-5xl font-semibold tracking-tight text-charcoal md:text-7xl xl:text-8xl"
                >
                  Build a stronger
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  variants={revealUp}
                  className="text-5xl font-semibold tracking-tight text-slate-500 md:text-7xl xl:text-8xl"
                >
                  body and lifestyle
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  variants={revealUp}
                  className="text-5xl font-semibold tracking-tight text-charcoal md:text-7xl xl:text-8xl"
                >
                  that lasts.
                </motion.h1>
              </div>
            </div>

            <motion.p
              variants={revealFade}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              Get Fit With Purna helps clients transform through structured
              training, realistic nutrition guidance, and high-accountability
              support that fits real life.
            </motion.p>

            <motion.div variants={revealFade} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Book consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/transformations"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-charcoal transition hover:-translate-y-0.5 hover:border-charcoal"
              >
                View transformations
                <Play size={16} />
              </Link>
            </motion.div>

            <motion.div
              variants={revealFade}
              className="mt-8 grid max-w-xl gap-3 text-sm text-slate-600 sm:grid-cols-3"
            >
              <div className="rounded-2xl bg-white px-4 py-3 shadow-premium">
                Personal training
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-premium">
                Online coaching
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-premium">
                Body transformation
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -2, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-slate-900/10 blur-3xl" />

            <div className="glass-card relative overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/videos/hero-workout.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/20 bg-black/45 px-5 py-4 text-white backdrop-blur-md"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Coach promise
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Real strategy. Real accountability. Real results.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#home-stats"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.7 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-sm font-medium text-slate-500 lg:inline-flex"
      >
        Scroll to explore
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}