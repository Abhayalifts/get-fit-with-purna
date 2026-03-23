"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Props = {
  before: string;
  after: string;
};

export default function BeforeAfterSlider({ before, after }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSlider(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
    >
      <Image
        src={after}
        alt="After transformation"
        fill
        className="object-cover"
      />

      <div
        className="absolute left-0 top-0 h-full overflow-hidden"
        style={{ width: `${slider}%` }}
      >
        <div className="relative h-full w-[800px] max-w-none">
          <Image
            src={before}
            alt="Before transformation"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="absolute top-0 h-full w-[2px] bg-white"
        style={{ left: `${slider}%` }}
      />

      <div
        className="absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-white bg-white shadow-lg"
        style={{ left: `calc(${slider}% - 20px)` }}
      />
    </div>
  );
}