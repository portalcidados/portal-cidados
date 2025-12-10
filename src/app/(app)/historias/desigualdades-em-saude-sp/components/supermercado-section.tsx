"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import supermercado from "../assets/supermercado.png";
import supermercadoTwo from "../assets/supermercadoTwo.png";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function SupermercadoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0); // 0 for first image, 1 for second image

  // ScrollTrigger for background fade effect
  useGSAP(() => {
    const firstCardElement = containerRef.current?.querySelector(
      `[data-card-index="0"]`
    );
    const secondCardElement = containerRef.current?.querySelector(
      `[data-card-index="1"]`
    );

    if (firstCardElement) {
      ScrollTrigger.create({
        trigger: firstCardElement,
        start: "bottom center",
        onEnter: () => {
          // Keep first image when entering first card
          setCurrentImage(0);
        },
        onLeaveBack: () => {
          // Keep first image when going back to first card
          setCurrentImage(0);
        },
      });
    }

    if (secondCardElement) {
      ScrollTrigger.create({
        trigger: secondCardElement,
        start: "top center",
        onEnter: () => {
          // Switch to second image when entering second card
          setCurrentImage(1);
        },
        onLeaveBack: () => {
          // Switch back to first image when leaving second card
          setCurrentImage(0);
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Define the text cards content and positions
  const cards = [
    {
      top: 0,
      text: (
        <>
          Lá, Maria trabalha como caixa de supermercado. Todo dia, pontualmente
          às 8h da manhã, ela recebe dona Alice, cliente de carteirinha da loja.
        </>
      ),
    },
    {
      top: 150,
      text: (
        <>
          Recentemente dona Alice sofreu um AVC (acidente vascular cerebral ou
          derrame), mas felizmente, recebeu atendimento rápido em um hospital de
          excelência, localizado a poucos minutos de sua casa. Graças a isso,
          ela se recuperou sem maiores complicações.
        </>
      ),
    },
    {
      top: 300,
      text: (
        <>
          Se dona Alice morasse no Jardim Helena, a história poderia ser
          diferente.{" "}
          <strong>
            Este estudo mostra que, em bairros periféricos como o de Maria, a
            chance de um AVC ser fatal é significativamente maior devido à
            dificuldade de acesso a cuidados médicos de qualidade.{" "}
          </strong>
        </>
      ),
    },
    {
      top: 450,
      text: (
        <>
          Os resultados do estudo sobre mortalidade prematura por doenças
          cerebrovasculares em mulheres ao longo de todo o período analisado
          apontam um risco relativo significativamente elevado nos distritos do
          extremo leste e sul da cidade, assim como em Brasilândia e
          Cachoeirinha.
        </>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="h-[720vh]">
      <div style={{ position: "sticky", top: 0 }} className="h-screen w-full">
        <div className="min-h-screen w-full bg-white flex items-center justify-center relative">
          {/* First image - supermercado */}
          <Image
            src={supermercado}
            alt="Supermercado illustration"
            className={`max-w-auto xl:max-w-[600px] object-contain absolute z-10 transition-opacity duration-1000 ease-in-out ${
              currentImage === 0 ? "opacity-100" : "opacity-0"
            }`}
            width={600}
            height={400}
          />

          {/* Second image - supermercadoTwo */}
          <Image
            src={supermercadoTwo}
            alt="Supermercado Two illustration"
            className={`max-w-auto xl:max-w-[600px] object-contain absolute z-10 transition-opacity duration-1000 ease-in-out ${
              currentImage === 1 ? "opacity-100" : "opacity-0"
            }`}
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            data-card-index={index}
            className="absolute bg-[#FFFFFF]/90 h-auto w-[80vw] md:w-[460px] border border-[#000000]/20 px-[30px]
    py-[25px]
    lg:px-[32px]
    lg:py-[25px]
    rounded-xl shadow-lg
    "
            style={{
              top: `${card.top}vh`,
            }}
          >
            <div className="text-[#000000]">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

