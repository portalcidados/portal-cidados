"use client";

import { getCollaborators } from "@/lib/data/collaborators";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export function CollaboratorsSection() {
  const collaborators = getCollaborators();
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
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

      <section className="py-0 pb-16 mx-auto bg-background">
        <div className="mx-auto">
          {/* Section Title */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-foreground">
              Quem faz o projeto acontecer
            </h2>
          </div>

          {/* Collaborators Horizontal Scroll */}
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
            aria-label="Colaboradores em carrossel"
          >
            <div style={{ cursor: "none" }}>
              <Swiper
                slidesPerView="auto"
                spaceBetween={8}
                freeMode={true}
                grabCursor={false}
                modules={[FreeMode]}
                className="!overflow-visible"
                style={{ cursor: "none" }}
              >
                {collaborators.map((collaborator) => (
                  <SwiperSlide
                    key={collaborator.id}
                    className="!w-[250px] group relative"
                    style={{ cursor: "none" }}
                  >
                    {/* Collaborator Card */}
                    <div
                      className="relative overflow-hidden h-[350px] w-[250px] mb-4 bg-border"
                      style={{ cursor: "none" }}
                    >
                      <Image
                        src={collaborator.image}
                        alt={collaborator.name}
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

                    {/* Collaborator Info */}
                    <div className="text-left" style={{ cursor: "none" }}>
                      <h3 className="text-md font-bold text-foreground mb-1 leading-tight">
                        {collaborator.name}
                      </h3>
                      <p className="text-sm text-foreground/50 mb-1">
                        {collaborator.function}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="mt-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  O que fazemos
                </h2>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div className="border-b border-border pb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Data storytelling
                  </h3>
                  <p className="text-foreground/50 leading-relaxed">
                    Narrativas visuais baseadas em pesquisas do Insper, que
                    combinam dados, design e storytelling para explicar
                    fenômenos urbanos de forma clara e envolvente.
                  </p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Catálogo de dados
                  </h3>
                  <p className="text-foreground/50 leading-relaxed">
                    Um GeoPortal interativo que permite explorar espacialmente
                    os dados apresentados nas histórias e em outros estudos,
                    tornando visíveis desigualdades e dinâmicas urbanas.
                  </p>
                </div>

                <div className="pb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    GeoPortal
                  </h3>
                  <p className="text-foreground/50 leading-relaxed">
                    Um catálogo de conjuntos de dados urbanos que disponibiliza
                    informações abertas e estruturadas para consulta e
                    reutilização.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default CollaboratorsSection;
