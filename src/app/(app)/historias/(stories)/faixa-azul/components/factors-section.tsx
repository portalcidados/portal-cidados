"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  chuvaImage,
  cruzamentoImage,
  horarioImage,
  trafegoImage,
} from "../constants";

const FACTORS = [
  { label: "Chuva", src: chuvaImage, alt: "Cenário de chuva na via" },
  { label: "Horário", src: horarioImage, alt: "Cenário por horário do dia" },
  {
    label: "Volume de tráfego",
    src: trafegoImage,
    alt: "Cenário de volume de tráfego",
  },
  {
    label: "Nº de Cruzamentos",
    src: cruzamentoImage,
    alt: "Cenário com número de cruzamentos",
  },
] as const;

function FactorButton({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[104px] w-full cursor-pointer items-center justify-center self-stretch rounded-[11px] px-6 text-center text-sm font-bold leading-snug backdrop-blur-[8px] transition-[border-color] duration-200 md:text-base"
      style={{
        background: "rgba(255, 255, 255, 0.50)",
        border: isSelected ? "2px solid #FFF" : "2px solid transparent",
      }}
    >
      {label}
    </button>
  );
}

export default function FactorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scopeRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

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
            { scale: 1.03 },
            {
              scale: 1,
              duration: 1.1,
              ease: "power2.out",
              overwrite: "auto",
            },
          );
        }
      });
    },
    { scope: scopeRef, dependencies: [activeIndex] },
  );

  return (
    <section className="my-50 w-full bg-white">
      <div className="p-6">
        <div
          ref={scopeRef}
          className="relative h-[calc(100vh-5.5rem)] w-full overflow-hidden rounded-xl"
        >
          {FACTORS.map((factor, i) => (
            <div
              key={factor.src}
              ref={(el) => {
                layerRefs.current[i] = el;
              }}
              className="absolute inset-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <img
                src={factor.src}
                alt={factor.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          <nav
            className="absolute top-6 right-6 z-10 flex w-[min(100%,220px)] flex-col gap-3"
            aria-label="Fatores que influenciam sinistros"
          >
            {FACTORS.map((factor, i) => (
              <FactorButton
                key={factor.src}
                label={factor.label}
                isSelected={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
