"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type GalleryItem = {
  src: string;
  title: string;
  description: string;
};

type AboutMediaGalleryProps = {
  title: string;
  description: string;
  items: GalleryItem[];
  cardClassName?: string;
  badgeStyle?: boolean;
};

export function AboutMediaGallery({
  title,
  description,
  items,
  cardClassName = "",
  badgeStyle = false,
}: AboutMediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className={cardClassName}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Gallery
        </p>
        <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group overflow-hidden rounded-[28px] text-left transition hover:-translate-y-1 ${
                badgeStyle
                  ? "border border-slate-200 bg-white shadow-sm"
                  : "bg-slate-50"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>

              <div className="p-5">
                {badgeStyle && (
                  <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Certified
                  </span>
                )}

                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-[30px] bg-white shadow-2xl">
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src={items[selectedIndex].src}
                alt={items[selectedIndex].title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                {items[selectedIndex].title}
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                {items[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}