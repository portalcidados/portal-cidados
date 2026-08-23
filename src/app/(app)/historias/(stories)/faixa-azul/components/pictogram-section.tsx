"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { brandColor } from "../constants";
import { charts } from "../data/transport-charts";
import { PictogramChart } from "./pictogram-chart";

gsap.registerPlugin(ScrollTrigger);

interface ScrollCardProps {
  children: React.ReactNode;
  cardRef: React.RefObject<HTMLDivElement | null>;
  minHeight?: string;
  className?: string;
}

function ScrollCard({
  children,
  cardRef,
  minHeight = "130vh",
  className = "",
}: ScrollCardProps) {
  return (
    <div
      ref={cardRef}
      className={`flex items-center justify-center px-6 md:px-8 ${className}`}
      style={{ minHeight, position: "relative", zIndex: 1 }}
    >
      <div
        className="w-full max-w-xl rounded-xl p-6 lg:p-9 text-sm leading-normal shadow-lg backdrop-blur-sm md:p-8 md:text-base"
        style={{ color: brandColor, backgroundColor: "#F0F0F0" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function PictogramSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const cardGrowthRef = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cards = [card0Ref, card1Ref, cardGrowthRef, card2Ref];
    let triggers: ScrollTrigger[] = [];

    const create = () => {
      if (!cards.every((ref) => ref.current)) return;
      for (const t of triggers) t.kill();
      triggers = [];

      // Card 0: gráfico 0 (2,8%) enquanto o card está ativo;
      // na saída (scroll para baixo) troca para o gráfico 1 (39%).
      triggers.push(
        ScrollTrigger.create({
          trigger: card0Ref.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(0),
          onEnterBack: () => setActiveIndex(0),
          onLeave: () => setActiveIndex(1),
        }),
      );

      // Card 1: mantém o gráfico 1 (39%).
      // A troca para o gráfico 2 (46%) só ocorre após o card seguinte sair.
      triggers.push(
        ScrollTrigger.create({
          trigger: card1Ref.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(1),
          onEnterBack: () => setActiveIndex(1),
          onLeave: () => setActiveIndex(1),
          onLeaveBack: () => setActiveIndex(1),
        }),
      );

      // Card intermediário (sem troca de gráfico): permanece no gráfico 1 (39%);
      // na saída (scroll para baixo) troca para o gráfico 2 (46%).
      triggers.push(
        ScrollTrigger.create({
          trigger: cardGrowthRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(1),
          onEnterBack: () => setActiveIndex(1),
          onLeave: () => setActiveIndex(2),
          onLeaveBack: () => setActiveIndex(1),
        }),
      );

      // Card 2: mantém o gráfico 2 (já ativado na saída do card intermediário).
      triggers.push(
        ScrollTrigger.create({
          trigger: card2Ref.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(2),
          onEnterBack: () => setActiveIndex(2),
          onLeaveBack: () => setActiveIndex(2),
        }),
      );

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

  const activeChart = charts[activeIndex];

  return (
    <section className="w-full bg-white">
      {/* Gráfico sticky, centralizado na tela */}
      <div
        className="flex h-screen w-full items-center justify-center"
        style={{ position: "sticky", top: 0, zIndex: 0 }}
      >
        <div
          className="mx-auto flex max-h-[86vh] pb-6 w-full max-w-2xl flex-col px-6 2xl:max-w-3xl"
          style={{ height: "86vh" }}
        >
          <PictogramChart chart={activeChart} />
        </div>
      </div>

      {/* Cards de texto que passam por cima do gráfico */}
      <div>
        <ScrollCard cardRef={card0Ref}>
          <p>
            Embora as{" "}
            <strong>
              motocicletas representem apenas cerca de 2,8% dos deslocamentos
              diários
            </strong>{" "}
            que passam por São Paulo, elas aparecem em{" "}
            <strong>cerca de 39% dos veículos envolvidos em sinistros</strong>{" "}
            na cidade.
          </p>
        </ScrollCard>

        <ScrollCard cardRef={card1Ref} className="mt-[50vh]">
          <p>
            Ainda maior é{" "}
            <strong>
              participação das motos na letalidade do trânsito da cidade
            </strong>
            : os motociclistas representam{" "}
            <strong>mais de 46% das mortes no trânsito</strong>.
          </p>
        </ScrollCard>

        <ScrollCard cardRef={cardGrowthRef}>
          <p>
            O aumento no número de acidentes e mortes envolvendo motociclistas
            acompanha o{" "}
            <strong>
              crescimento acelerado do uso de motos nos últimos anos,
              especialmente durante a pandemia
            </strong>
            . A expansão dos aplicativos de entrega ampliou significativamente a
            demanda por entregadores e{" "}
            <strong>
              intensificou a circulação de motocicletas nas grandes cidades
            </strong>
            .
          </p>
        </ScrollCard>

        <ScrollCard cardRef={card2Ref} minHeight="150vh" className="mt-[50vh]">
          <p>
            Nesse cenário, a{" "}
            <strong>Faixa Azul foi a resposta da Prefeitura</strong> a este
            problema de grande relevância. A intervenção busca reorganizar o
            espaço viário, reduzir conflitos entre motos e carros e tornar a
            circulação mais previsível em alguns dos corredores mais
            movimentados da cidade. Com o avanço da política e após algum tempo
            de sua implementação, um questionamento se fez necessário:{" "}
            <strong>
              a Faixa Azul contribuiu para a redução dos sinistros de trânsito
              envolvendo motociclistas?
            </strong>
          </p>
        </ScrollCard>

        {/* Spacer para manter o sticky ativo até card2 sair da tela */}
        <div style={{ minHeight: "50vh" }} aria-hidden="true" />
      </div>
    </section>
  );
}
