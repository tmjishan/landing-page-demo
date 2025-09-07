import React from "react";

export type HeroImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export interface HeroProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  images?: HeroImage[];
}

const DEFAULT_IMAGES: HeroImage[] = [
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/6810860b99424eb97a92c7ec_JV-Hero-Infinite-Carousel-Loop-Image-01.jpg",
    alt: "Coffee can packaging design",
  },
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/681086e9663811fd013eb4b0_JV-Hero-Infinite-Carousel-Loop-Image-02.jpg",
    alt: "Cannabis packaging design",
  },
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/681086ea8fd3e43891a0b0aa_JV-Hero-Infinite-Carousel-Loop-Image-03.jpg",
    alt: "Business card design",
  },
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/681086e88fd3e43891a0afd2_JV-Hero-Infinite-Carousel-Loop-Image-04.jpg",
    alt: "Disposable vape packaging design",
  },
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/681086e9549001334c57d942_JV-Hero-Infinite-Carousel-Loop-Image-05.jpg",
    alt: "Clothing tag design",
  },
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/681086e9c71e654b679622b4_JV-Hero-Infinite-Carousel-Loop-Image-06.jpg",
    alt: "Tequila hard seltzer packaging design",
  },
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/681086e9b24f447145f286fa_JV-Hero-Infinite-Carousel-Loop-Image-07.jpg",
    alt: "Loading page design",
  },
  {
    src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/681086ea2f76a0a1fa554954_JV-Hero-Infinite-Carousel-Loop-Image-JV-Hero-Infinite-Carousel-Loop-Image-10.jpg",
    alt: "Hard seltzer packaging design",
  },
];

const Hero: React.FC<HeroProps> = ({
  title = "A Full-Stack Brand Identity Designer",
  description = "I’m H M Tanvir Mehedi, a Web Developer specializing in brand identity design for packaging businesses. I help brands succeed with effective design and smart marketing.",
  ctaText = "Let's Work",
  ctaHref = "#contact",
  images = DEFAULT_IMAGES,
}) => {
  // Duplicate the images to create a seamless infinite loop
  const loopImages = [...images, ...images];

  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden  text-white"
      style={{
        backgroundImage:
          "url(https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/636f61f73fb9a5740bafaa3e_Dark-Background-Pattern.svg)",
        backgroundSize: "80px",
        backgroundPosition: "0 0",
      }}
    >
      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#161616]/40 via-[#161616]/0 to-[#161616]" />

      <div className="relative  max-w-7xl mx-auto px-6 py-24 sm:py-28 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-center">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg text-center font-bold">
            {description}
          </p>
          <div className="mt-8 text-center">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-2xl bg-[#e95241] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e95241]/30 transition hover:bg-[#cc483a] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e95241] focus-visible:ring-offset-[#161616]"
            >
              {ctaText}
            </a>
          </div>
        </div>

        {/* Image Marquee */}
        <div className="mt-16 select-none">
          <div className="relative mask-fade">
            <div className="marquee" aria-hidden>
              {loopImages.map((img, idx) => (
                <div
                  key={idx}
                  className="mx-2 inline-flex h-[180px] w-auto items-center justify-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles for marquee and edge fade mask */}
      <style jsx global>{`
        .mask-fade {
          --edge: 80px;
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black var(--edge),
            black calc(100% - var(--edge)),
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black var(--edge),
            black calc(100% - var(--edge)),
            transparent 100%
          );
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          will-change: transform;
          animation: hero-marquee 40s linear infinite;
        }
        @keyframes hero-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .marquee {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
