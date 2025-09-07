"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { EmblaCarouselType } from "embla-carousel";

type CarouselItem = {
  src: string;
  alt: string;
  title?: string;
};

type Props = {
  items: CarouselItem[];
  className?: string;
};

export default function ProductCarousel({ items, className }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // ✅ No parameter here; use the closed-over emblaApi
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // init snaps + selected index
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    // subscribe to events
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });

    // optional: clean up
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* track */}
        <div className="flex gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="rounded-xl bg-gray-100 p-4 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 25vw"
                    priority={idx < 4}
                  />
                </div>
                {item.title && (
                  <p className="mt-3 text-center text-sm font-medium text-gray-700">
                    {item.title}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous"
        disabled={!emblaApi}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white disabled:opacity-50"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next"
        disabled={!emblaApi}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white disabled:opacity-50"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      {/* dots */}
      <div className="mt-4 flex w-full items-center justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full transition ${
              selectedIndex === i
                ? "bg-gray-800"
                : "bg-gray-400/70 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
