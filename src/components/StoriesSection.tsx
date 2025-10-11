"use client";

import { getStoriesForHome } from "@/lib/data/stories";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export function StoriesSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [swiperRef, setSwiperRef] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const stories = getStoriesForHome();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const slideNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  return (
    <>
      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-200 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
        <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-xs font-medium">Arraste</span>
        </div>
      </div>

      <section className="py-8 pb-16 mx-auto bg-white">
        <div className="mx-auto max-w-7xl px-4">
          {/* Navigation arrows */}
          <div className="flex justify-end mb-6 gap-2">
            <button
              type="button"
              onClick={slidePrev}
              className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={slideNext}
              className="p-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Stories Horizontal Scroll */}
          <section
            className="pb-4 overflow-x-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label="Histórias em carrossel"
          >
            <Swiper
              slidesPerView="auto"
              spaceBetween={6}
              freeMode={true}
              grabCursor={false}
              modules={[FreeMode]}
              className="!overflow-visible"
              onSwiper={setSwiperRef}
            >
              {stories.map((story) => (
                <SwiperSlide
                  key={story.id}
                  className="!w-[270px] md:!w-[380px] group relative"
                >
                  {story.href ? (
                    <Link href={story.href} className="block">
                      {/* Story Card */}
                      <div className="relative overflow-hidden h-[270px] w-[270px] md:h-[380px] md:w-[380px]">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  ) : (
                    /* Story Card without link */
                    <div className="relative overflow-hidden h-[200px] w-[300px] md:h-[250px] md:w-[400px]">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Story Info - Outside the card */}
                  <div className="mt-4 text-left">
                    <h3 className="text-md font-medium text-foreground mb-2 font-gt-ultra-fine leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-gt-ultra-fine">
                      {story.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </section>
    </>
  );
}
