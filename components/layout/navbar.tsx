"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-main pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all md:px-6",
            scrolled
              ? "border-white/60 bg-white/80 shadow-premium backdrop-blur-xl"
              : "border-white/30 bg-white/60 backdrop-blur-md"
          )}
        >
          <Link href="/" className="text-sm font-semibold tracking-[0.25em] text-charcoal uppercase">
            Get Fit With Purna
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-charcoal">
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </nav>

          <button className="lg:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-premium backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {siteConfig.navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-charcoal px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
