import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="container-main">
        <div className="dark-panel p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Get Fit With Purna</p>
              <h3 className="mt-4 text-2xl font-semibold">Premium fitness coaching built for real results.</h3>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Navigate</p>
              <div className="mt-4 grid gap-3 text-white/80">
                {siteConfig.navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Contact</p>
              <div className="mt-4 space-y-3 text-white/80">
                <p className="flex items-center gap-3"><Phone className="size-4" /> {siteConfig.phone}</p>
                <p className="flex items-center gap-3"><Mail className="size-4" /> {siteConfig.email}</p>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                  <Instagram className="size-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
            © {new Date().getFullYear()} Get Fit With Purna. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
