"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function InstagramFloat() {
  return (
    <motion.a
      href={siteConfig.instagram}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.04 }}
      className="fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal text-white shadow-premium"
      aria-label="Instagram"
    >
      <Instagram className="size-5" />
    </motion.a>
  );
}
