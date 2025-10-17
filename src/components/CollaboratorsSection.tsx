"use client";

import { getCollaborators } from "@/lib/data/collaborators";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export function CollaboratorsSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const collaborators = getCollaborators();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

      <section className="py-0 pb-16 mx-auto bg-background">
        <div className="mx-auto ">
          {/* Section Title */}
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-foreground font-gt-ultra-fine">
              Quem faz o projeto acontecer
            </h2>
          </div>

          {/* Collaborators Horizontal Scroll */}
          <section
            className="pb-4 overflow-x-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label="Colaboradores em carrossel"
          >
            <Swiper
              slidesPerView="auto"
              spaceBetween={8}
              freeMode={true}
              grabCursor={false}
              modules={[FreeMode]}
              className="!overflow-visible"
              onSwiper={setSwiperRef}
            >
              {collaborators.map((collaborator) => (
                <SwiperSlide
                  key={collaborator.id}
                  className="!w-[250px] group relative"
                >
                  {/* Collaborator Card */}
                  <div className="relative overflow-hidden h-[350px] w-[250px] mb-4">
                    <Image
                      src={collaborator.image}
                      alt={collaborator.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback para imagem não encontrada
                        const target = e.target as HTMLImageElement;
                        target.src = "/portal_cidados_icon.png";
                      }}
                    />
                  </div>

                  {/* Collaborator Info */}
                  <div className="text-left">
                    <h3 className="text-md font-bold text-foreground mb-1 font-gt-ultra-fine leading-tight">
                      {collaborator.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1 font-gt-ultra-fine">
                      {collaborator.function}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* What We Do Section */}
          <section className="mt-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
              {/* Section Title */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-foreground font-gt-ultra-fine mb-8">
                  O que fazemos
                </h2>
              </div>

              {/* Content Blocks */}
              <div className="lg:w-1/2 space-y-6">
                {/* Data Storytelling Block */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-foreground font-gt-ultra-fine mb-2">
                    Data storytelling
                  </h3>
                  <p className="text-muted-foreground font-gt-ultra-fine leading-relaxed">
                    Narrativas visuais baseadas em pesquisas do Insper, que
                    combinam dados, design e storytelling para explicar
                    fenômenos urbanos de forma clara e envolvente.
                  </p>
                </div>

                {/* Data Catalog Block */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-foreground font-gt-ultra-fine mb-2">
                    Catálogo de dados
                  </h3>
                  <p className="text-muted-foreground font-gt-ultra-fine leading-relaxed">
                    Um GeoPortal interativo que permite explorar espacialmente
                    os dados apresentados nas histórias e em outros estudos,
                    tornando visíveis desigualdades e dinâmicas urbanas.
                  </p>
                </div>

                {/* GeoPortal Block */}
                <div className="pb-6">
                  <h3 className="text-lg font-bold text-foreground font-gt-ultra-fine mb-2">
                    GeoPortal
                  </h3>
                  <p className="text-muted-foreground font-gt-ultra-fine leading-relaxed">
                    Um catálogo de conjuntos de dados urbanos que disponibiliza
                    informações abertas e estruturadas para consulta e
                    reutilização.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pesquisadores Section */}
          <section className="mt-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
              {/* Section Title */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-foreground font-gt-ultra-fine">
                  Quem teve suas histórias contadas
                </h2>
                <p className="text-sm text-muted-foreground font-gt-ultra-fine">
                  {" "}
                  Pesquisadores
                </p>
              </div>

              {/* Quem teve suas histórias contadas */}
              <div className="lg:w-1/2 space-y-8">
                {/* Research Project 1 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-foreground font-gt-ultra-fine mb-3 flex items-center gap-2">
                    Retrato das Desigualdades em Saúde: Riscos de Mortalidade e
                    Determinantes Socioeconômicos no Município de São Paulo
                  </h3>
                  <p className="text-muted-foreground font-gt-ultra-fine">
                    Paulo H. Nascimento Saldiva, Lígia Vizeu Barrozo, Cátia
                    Martinez Minto, Sara Lopes de Moraes, Paulo Afonso de André
                  </p>
                </div>

                {/* Research Project 2 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-foreground font-gt-ultra-fine mb-3">
                    Para o bem ou para o mal: análise da capacidade que o
                    governo tem de controlar a densidade habitacional
                  </h3>
                  <p className="text-muted-foreground font-gt-ultra-fine">
                    Gustado Theil
                  </p>
                </div>

                {/* Research Project 3 */}
                <div className="pb-6">
                  <h3 className="text-lg font-bold text-foreground font-gt-ultra-fine mb-3">
                    Diagnóstico sobre ilhas de calor e qualidade do ar nas 16
                    favelas da Maré
                  </h3>
                  <p className="text-muted-foreground font-gt-ultra-fine">
                    Carolina Dias, Luna Arouca, Rian de Queiroz, Shyrlei
                    Rosendo, Otavio Ranzani, Carolina Hartmann Galeazzi,
                    Fernando Bozza, Soraida Aguilar, Bianca de Lima Teixeira,
                    Luis Carlos Soares da Costa, Marcela Santos de Melo, Maria
                    Eduarda Souza Neves, Ygor Fabregas da Silva, Diana de Souza
                    Beserra, Robert dos Santos da Silva
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Quem nos apoia com logo/imagem a direita do texto quem nos apoia*/}
          <section className="mt-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
              {/* Section Title */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-foreground font-gt-ultra-fine">
                  Quem nos apoia
                </h2>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/insper_logo_2.png"
                  alt="Quem nos apoia"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
