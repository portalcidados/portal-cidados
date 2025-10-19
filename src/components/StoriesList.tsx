"use client";

import Image from "next/image";

const storiesData = [
  {
    id: 1,
    title:
      "Para o bem ou para o mal: análise da capacidade que o governo tem de controlar a densidade habitacional",
    // subtitle: "Branding, Identity",
    images: [
      "/assets/viz1/viz1.png",
      "/assets/viz1/viz1.1.png",
      "/assets/viz1/viz1.3.png",
      "/assets/viz1/viz1.4.png",
    ],
  },
  {
    id: 2,
    title:
      "Diagnóstico sobre ilhas de calor e qualidade do ar em um dos maiores conjunto de favelas do Brasil",
    // subtitle: "Campaign, Film",
    images: [
      "/assets/viz2/viz2.1.png",
      "/assets/viz2/viz2.2.png",
      "/assets/viz2/viz2.3.png",
    ],
  },
  {
    id: 3,
    title:
      "Retrato das Desigualdades em Saúde: Riscos de Mortalidade e Determinantes Socioeconômicos no Município de São Paulo",
    // subtitle: "Branding, Identity",
    images: [
      "/assets/viz3/viz3.1.png",
      "/assets/viz3/viz3.2.png",
      "/assets/viz3/viz3.3.png",
      "/assets/viz3/viz3.4.png",
    ],
  },
];

export function StoriesList() {
  return (
    <div className="min-h-screen bg-background py-16 px-6 md:px-12">
      <div className="mx-auto space-y-12">
        {storiesData.map((story, rowIndex) => (
          <div
            key={story.id}
            className={`pb-12 ${rowIndex < storiesData.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              <div className="max-w-[500px]">
                <h2 className="text-lg md:text-xl font-medium text-foreground mb-2">
                  {story.title}
                </h2>
              </div>

              <div className="xl:w-2/3 flex justify-start xl:justify-end gap-4 overflow-x-auto">
                {story.images.map((image, imgIndex) => (
                  <div
                    key={`${story.id}-${image}-${imgIndex}`}
                    className={`flex-shrink-0 w-16 h-16 md:w-32 md:h-32 rounded-lg overflow-hidden ${
                      imgIndex >= 3 ? "hidden sm:block" : ""
                    }`}
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
