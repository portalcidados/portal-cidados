"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { charts } from "../data/transport-charts";
import { brandColor } from "../constants";
import { PictogramChart } from "./pictogram-chart";

gsap.registerPlugin(ScrollTrigger);

interface ScrollCardProps {
  children: React.ReactNode;
  cardRef: React.RefObject<HTMLDivElement | null>;
  minHeight?: string;
}

function ScrollCard({
  children,
  cardRef,
  minHeight = "130vh",
}: ScrollCardProps) {
  return (
    <div
      ref={cardRef}
      className="flex items-center justify-center px-6 md:px-8"
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
  const card2Ref = useRef<HTMLDivElement>(null);

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
            <strong>
              Embora as motocicletas representem apenas cerca de 5% dos
              deslocamentos diários na Região Metropolitana de São Paulo
            </strong>
            , os motociclistas estão envolvidos em cerca de 70% dos sinistros da
            cidade.
          </p>
        </ScrollCard>

        <ScrollCard cardRef={card1Ref}>
          <p>
            O aumento no número de acidentes e mortes envolvendo motociclistas
            acompanha o crescimento acelerado do uso de motos nos últimos anos,{" "}
            <strong>especialmente durante a pandemia</strong>. A expansão dos
            aplicativos de entrega ampliou significativamente a demanda por
            entregadores e intensificou a circulação de motocicletas nas grandes
            cidades. No próximo gráfico é possível ver que{" "}
            <strong>
              os motociclistas concentram aproximadamente metade das mortes no
              trânsito.
            </strong>
          </p>
        </ScrollCard>

        <ScrollCard cardRef={card2Ref} minHeight="150vh">
          <p>
            Nesse cenário de aumento do uso da moto e das mortes de
            motociclistas, a Faixa Azul ganhou força como resposta da Prefeitura
            a este problema de grande relevância.{" "}
            <strong>
              A intervenção busca reorganizar o espaço viário, reduzir conflitos
              entre motos e carros e tornar a circulação mais previsível em
              alguns dos corredores mais movimentados da cidade.
            </strong>{" "}
            Com o avanço da política e após algum tempo de sua implementação, um
            questionamento se fez necessário: a Faixa Azul contribuiu para a
            redução dos sinistros de trânsito envolvendo motociclistas?
          </p>
        </ScrollCard>

        {/* Spacer para manter o sticky ativo até card2 sair da tela */}
        <div style={{ minHeight: "50vh" }} aria-hidden="true" />
      </div>
    </section>
  );
}
