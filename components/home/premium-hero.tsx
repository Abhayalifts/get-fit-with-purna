"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

// Explicitly typing as Variants allows the use of cubic-bezier arrays in 'ease'
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PremiumHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb]">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute right-[-6%] top-[15%] h-80 w-80 rounded-full bg-slate-300/40 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-slate-900/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            {/* Tagline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 backdrop-blur"
            >
              Get Fit With Purna
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-8xl"
            >
              Build a body
              <span className="block text-slate-500">that performs</span>
              <span className="block">and lasts.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Premium personal training and transformation coaching designed
              for fat loss, strength, confidence, and long-term consistency.
              Train with structure. Eat with clarity. Progress with purpose.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.45}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/transformations"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400"
              >
                View Transformations
                <Play size={16} />
              </Link>
            </motion.div>

            {/* Quick Stats/Features */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-600"
            >
              <div>
                <p className="font-semibold text-slate-900">1:1 Coaching</p>
                <p>Personal attention and real accountability</p>
              </div>
              <div className="hidden h-10 w-px bg-slate-300 sm:block" />
              <div>
                <p className="font-semibold text-slate-900">Nutrition Guidance</p>
                <p>Simple strategies you can actually follow</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Card Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-slate-900 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_35%),linear-gradient(135deg,#0f172a_0%,#1e293b_45%,#111827_100%)] p-8 sm:p-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />

                <div className="relative">
                  <div className="mb-14 flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80">
                      Elite Coaching
                    </span>
                    <span className="text-sm text-white/70">Kathmandu / Online</span>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/50">Focus</p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        Fat loss • Muscle gain • Sustainable results
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/50">Method</p>
                        <p className="mt-3 text-lg font-medium text-white">
                          Training plans built around your real lifestyle
                        </p>
                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/50">Outcome</p>
                        <p className="mt-3 text-lg font-medium text-white">
                          Stronger body, better energy, more confidence
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Start now</p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Build momentum with coaching that feels structured,
                        premium, and personal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#home-stats"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-sm font-medium text-slate-500 lg:inline-flex"
      >
        Scroll to explore
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}