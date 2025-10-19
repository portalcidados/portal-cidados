"use client";

import { getStoriesForHome, type Story } from "@/lib/data/stories";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export function StoriesSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [swiperRef, setSwiperRef] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{
    [key: string]: number;
  }>({});
  const [hoveredStoryId, setHoveredStoryId] = useState<string | null>(null);
  const stories = getStoriesForHome();
  const sectionRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const updateCursorPosition = (clientX: number, clientY: number) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setCursorPos({ x: clientX, y: clientY });
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (sectionRef.current?.contains(e.target as Node)) {
        setIsDragging(true);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    // Usar tanto pointer quanto mouse events para máxima compatibilidade
    document.addEventListener("pointermove", handlePointerMove, true);
    document.addEventListener("mousemove", handleMouseMove, true);
    document.addEventListener("pointerdown", handlePointerDown, true);
    document.addEventListener("pointerup", handlePointerUp, true);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove, true);
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("pointerdown", handlePointerDown, true);
      document.removeEventListener("pointerup", handlePointerUp, true);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Effect para gerenciar a animação de imagens no hover
  useEffect(() => {
    if (!hoveredStoryId) return;

    const story = stories.find((s) => s.id === hoveredStoryId);
    if (!story || story.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndexes((prev) => {
        const currentIndex = prev[hoveredStoryId] || 0;
        const nextIndex = (currentIndex + 1) % story.images.length;
        return { ...prev, [hoveredStoryId]: nextIndex };
      });
    }, 500); // Troca a imagem a cada 500ms

    return () => clearInterval(interval);
  }, [hoveredStoryId, stories]);

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

  const handleStoryMouseEnter = (storyId: string) => {
    setHoveredStoryId(storyId);
    // Inicializa o índice da imagem se ainda não existir
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [storyId]: prev[storyId] || 0,
    }));
  };

  const handleStoryMouseLeave = (storyId: string) => {
    setHoveredStoryId(null);
    // Reseta o índice da imagem para 0 quando o mouse sair
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [storyId]: 0,
    }));
  };

  const getCurrentImage = (story: Story) => {
    const index = currentImageIndexes[story.id] || 0;
    return story.images[index] || story.image;
  };

  return (
    <>
      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none transition-opacity duration-200 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          willChange: "transform",
        }}
      >
        <div
          className={`bg-black text-white rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-100 ${
            isDragging ? "scale-90" : "scale-100"
          }`}
        >
          <span className="text-xs font-medium select-none">Arraste</span>
        </div>
      </div>

      <section className="py-8 pb-16 mx-auto bg-background">
        <div className="mx-auto px-4 md:px-8 lg:px-12">
          {/* Navigation arrows */}
          <div className="flex justify-end mb-6 gap-0">
            <button
              type="button"
              onClick={slidePrev}
              className="p-1"
              aria-label="Slide anterior"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={slideNext}
              className="p-1 font-t"
              aria-label="Próximo slide"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Stories Horizontal Scroll */}
          <section
            ref={sectionRef}
            className="pb-4 overflow-x-hidden select-none"
            style={{
              cursor: "none",
              touchAction: "pan-x",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setIsDragging(false);
            }}
            onPointerEnter={() => setIsHovering(true)}
            onPointerLeave={() => {
              setIsHovering(false);
              setIsDragging(false);
            }}
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
              style={{ cursor: "none" }}
            >
              {stories.map((story) => (
                <SwiperSlide
                  key={story.id}
                  className="!w-[270px] md:!w-[380px] group relative"
                  style={{ cursor: "none" }}
                >
                  {story.href ? (
                    <Link
                      href={story.href}
                      className="block"
                      style={{ cursor: "none" }}
                      onMouseEnter={() => handleStoryMouseEnter(story.id)}
                      onMouseLeave={() => handleStoryMouseLeave(story.id)}
                    >
                      {/* Story Card */}
                      <div
                        className="relative overflow-hidden h-[270px] w-[270px] md:h-[380px] md:w-[380px]"
                        style={{ cursor: "none" }}
                      >
                        <Image
                          src={getCurrentImage(story)}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{
                            cursor: "none",
                            pointerEvents: "none",
                            userSelect: "none",
                          }}
                          draggable={false}
                        />
                      </div>
                    </Link>
                  ) : (
                    /* Story Card without link */
                    <div
                      className="relative overflow-hidden h-[200px] w-[300px] md:h-[250px] md:w-[400px]"
                      style={{ cursor: "none" }}
                      onMouseEnter={() => handleStoryMouseEnter(story.id)}
                      onMouseLeave={() => handleStoryMouseLeave(story.id)}
                      role="img"
                      aria-label={story.title}
                    >
                      <Image
                        src={getCurrentImage(story)}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                          cursor: "none",
                          pointerEvents: "none",
                          userSelect: "none",
                        }}
                        draggable={false}
                      />
                    </div>
                  )}

                  {/* Story Info - Outside the card */}
                  <div className="mt-4 text-left" style={{ cursor: "none" }}>
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
