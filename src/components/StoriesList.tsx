"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const storiesData = [
  {
    id: 1,
    title:
      "Para o bem ou para o mal: análise da capacidade que o governo tem de controlar a densidade habitacional",
    // subtitle: "Branding, Identity",
    images: ["/viz1.png", "/viz1.png", "/viz1.png", "/viz1.png"],
  },
  {
    id: 2,
    title:
      "Diagnóstico sobre ilhas de calor e qualidade do ar em um dos maiores conjunto de favelas do Brasil",
    // subtitle: "Campaign, Film",
    images: ["/viz2.png", "/viz2.png", "/viz2.png"],
  },
  {
    id: 3,
    title:
      "Retrato das Desigualdades em Saúde: Riscos de Mortalidade e Determinantes Socioeconômicos no Município de São Paulo",
    // subtitle: "Branding, Identity",
    images: ["/viz3.png", "/viz3.png", "/viz3.png", "/viz3.png"],
  },
];

export function StoriesList() {
  const [activeRows, setActiveRows] = useState(new Set([0]));
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intersectingRowsRef = useRef(new Map<number, number>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Atualiza o mapa de rows que estão intersectando
        entries.forEach((entry) => {
          const index = rowRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) {
            if (entry.isIntersecting) {
              intersectingRowsRef.current.set(index, entry.intersectionRatio);
            } else {
              intersectingRowsRef.current.delete(index);
            }
          }
        });

        // Encontra a row com maior intersection ratio (mais visível)
        let maxRatio = 0;
        let mostVisibleIndex = 0;

        intersectingRowsRef.current.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleIndex = index;
          }
        });

        // Ativa apenas a row mais visível
        if (intersectingRowsRef.current.size > 0) {
          setActiveRows(new Set([mostVisibleIndex]));
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    // Observa todas as rows com um único observer
    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {storiesData.map((story, rowIndex) => (
          <div
            key={story.id}
            ref={(el) => {
              rowRefs.current[rowIndex] = el;
            }}
            className={`pb-12 ${rowIndex < storiesData.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="w-full md:w-1/3">
                <h2 className="text-lg md:text-xl font-light text-gray-900 mb-2">
                  {story.title}
                </h2>
              </div>

              <div className="md:w-2/3 flex justify-start md:justify-end gap-4 overflow-x-auto">
                {story.images.map((image, imgIndex) => (
                  <div
                    key={`${story.id}-${image}-${imgIndex}`}
                    className={`flex-shrink-0 w-16 h-16 md:w-32 md:h-32 rounded-lg overflow-hidden transition-all duration-700 ${
                      activeRows.has(rowIndex)
                        ? "opacity-100 scale-100 grayscale-0"
                        : "opacity-40 scale-95 grayscale"
                    }`}
                    style={{
                      transitionDelay: activeRows.has(rowIndex)
                        ? `${imgIndex * 100}ms`
                        : "0ms",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${story.title} ${imgIndex + 1}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
