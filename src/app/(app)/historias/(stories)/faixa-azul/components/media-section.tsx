"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  brandColor,
  faixaChartImage,
  fechadaFaixaVideo,
  velocidadeVideo,
} from "../constants";

gsap.registerPlugin(ScrollTrigger);

function CardBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full max-w-xl rounded-xl p-6 text-sm leading-normal shadow-lg backdrop-blur-sm md:p-8 md:text-base lg:p-9"
      style={{ color: brandColor, backgroundColor: "#F0F0F0" }}
    >
      {children}
    </div>
  );
}

interface ScrollCardProps {
  children: React.ReactNode;
  cardRef: React.RefObject<HTMLDivElement | null>;
  minHeight?: string;
  contentDelayVh?: number;
  wrapContent?: boolean;
}

function ScrollCard({
  children,
  cardRef,
  minHeight = "130vh",
  contentDelayVh = 0,
  wrapContent = true,
}: ScrollCardProps) {
  return (
    <div
      ref={cardRef}
      className={`flex justify-center px-6 md:px-8 ${contentDelayVh > 0 ? "items-end" : "items-center"}`}
      style={{
        minHeight,
        position: "relative",
        zIndex: 1,
        ...(contentDelayVh > 0 ? { paddingBottom: `${contentDelayVh}vh` } : {}),
      }}
    >
      {wrapContent ? <CardBox>{children}</CardBox> : children}
    </div>
  );
}

const MEDIA_LAYERS = [
  { type: "image" as const, src: faixaChartImage },
  { type: "video" as const, src: fechadaFaixaVideo },
  { type: "video" as const, src: velocidadeVideo },
];

export default function MediaSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scopeRef = useRef<HTMLDivElement>(null);

  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useLayoutEffect(() => {
    const cards = [card0Ref, card1Ref, card2Ref];
    let triggers: ScrollTrigger[] = [];

    const create = () => {
      if (!cards.every((ref) => ref.current)) return;
      for (const t of triggers) t.kill();
      triggers = [];

      cards.forEach((ref, i) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: ref.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
            onLeaveBack: () => setActiveIndex(Math.max(0, i - 1)),
          }),
        );
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    requestAnimationFrame(create);

    const handleResize = () => create();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      for (const t of triggers) t.kill();
      triggers = [];
    };
  }, []);

  useGSAP(
    () => {
      const layers = layerRefs.current;

      layers.forEach((layer, i) => {
        if (!layer) return;
        const isActive = i === activeIndex;

        gsap.to(layer, {
          opacity: isActive ? 1 : 0,
          duration: 0.9,
          ease: "power2.inOut",
          overwrite: "auto",
        });

        if (isActive) {
          gsap.fromTo(
            layer,
            { scale: MEDIA_LAYERS[i].type === "video" ? 1.06 : 1.03 },
            {
              scale: 1,
              duration: 1.1,
              ease: "power2.out",
              overwrite: "auto",
            },
          );
        }
      });

      videoRefs.current.forEach((video, videoIdx) => {
        if (!video) return;
        const layerIndex = videoIdx + 1;
        if (layerIndex === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { scope: scopeRef, dependencies: [activeIndex] },
  );

  return (
    <section className="w-full bg-white">
      <div
        ref={scopeRef}
        className="relative h-screen w-full overflow-hidden"
        style={{ position: "sticky", top: 0, zIndex: 0 }}
      >
        {MEDIA_LAYERS.map((media, i) => (
          <div
            key={media.src}
            ref={(el) => {
              layerRefs.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            {media.type === "image" ? (
              <img
                src={media.src}
                alt="Gráfico comparativo das faixas de trânsito"
                className="h-auto w-full max-w-6xl px-6 object-contain"
              />
            ) : (
              <video
                ref={(el) => {
                  const videoIdx = i - 1;
                  videoRefs.current[videoIdx] = el;
                }}
                src={media.src}
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div>
        <ScrollCard cardRef={card0Ref}>
          <p>
            A Faixa Azul demarca uma faixa preferencial, mas não exclusiva e de
            uso facultativo, para motociclistas. Em São Paulo, ela costuma ser
            implantada entre as duas faixas mais à esquerda da via. Sinalização
            por meio de placas também acompanham a intervenção. Veja a seguir
            alguns prós e contras dessa intervenção:
          </p>
        </ScrollCard>

        <ScrollCard cardRef={card1Ref} contentDelayVh={20}>
          <p>
            A Faixa Azul contribui para organizar o fluxo de motocicletas ao
            criar um espaço preferencial de circulação, reduzindo conflitos com
            carros, ônibus e caminhões. Isso ajuda a diminuir o &ldquo;efeito de
            esmagamento&rdquo; das motos entre veículos maiores, aumenta a
            previsibilidade no trânsito e reduz disputas bruscas por espaço.
            Além disso, é uma solução relativamente rápida e barata de
            implementar, funcionando melhor em corredores com tráfego intenso,
            poucas interseções e fluxo mais contínuo.
          </p>
        </ScrollCard>

        <ScrollCard
          cardRef={card2Ref}
          minHeight="280vh"
          contentDelayVh={20}
          wrapContent={false}
        >
          <div className="flex w-full max-w-xl flex-col gap-[60px]">
            <CardBox>
              <div className="space-y-4">
                <p>
                  Por outro lado, a presença da faixa dedicada pode incentivar
                  motociclistas a trafegarem em velocidades mais altas,
                  aumentando o risco de sinistros e a gravidade das lesões. A
                  sensação de maior segurança pode levar a comportamentos mais
                  arriscados.
                </p>
                <p>
                  A concentração de motocicletas em um mesmo espaço também pode
                  aumentar o risco de colisões entre motociclistas,
                  especialmente em horários de pico ou em áreas com cruzamentos.
                  Além disso, quando motos circulam fora da faixa, elas ficam
                  mais vulneráveis, sobretudo em vias com muitas entradas e
                  saídas, já que outros motoristas tendem a presumir que elas
                  estão restritas à faixa dedicada.
                </p>
              </div>
            </CardBox>
            <CardBox>
              <p>
                Em uma cidade como São Paulo, os sinistros variam por muitos
                motivos: chuva, horário, volume de tráfego, fiscalização,
                velocidade, mudanças no comportamento dos motoristas,
                crescimento das entregas por aplicativo e até oscilações
                aleatórias de eventos raros, como mortes no trânsito.
              </p>
            </CardBox>
          </div>
        </ScrollCard>

        <div style={{ minHeight: "100vh" }} aria-hidden="true" />
      </div>
    </section>
  );
}
