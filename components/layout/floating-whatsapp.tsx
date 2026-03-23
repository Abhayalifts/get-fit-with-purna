"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export function FloatingWhatsApp() {
  const message = encodeURIComponent("Hi Purna, I want to book a consultation.");

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-premium"
    >
      <MessageCircle className="size-5" />
      WhatsApp
    </motion.a>
  );
}
