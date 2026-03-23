import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { InstagramFloat } from "@/components/layout/instagram-float";
import ScrollProgressBar from "@/components/shared/scroll-progress-bar";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Fitness Coaching`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        {/* Scroll progress indicator */}
        <ScrollProgressBar />

        <Navbar />

        <main className="min-h-screen pt-24">
          {children}
        </main>

        <Footer />

        {/* Floating social buttons */}
        <InstagramFloat />
        <FloatingWhatsApp />

      </body>
    </html>
  );
}