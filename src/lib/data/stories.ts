export interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export function getStoriesForHome(): Story[] {
  return [
    {
      id: "1",
      title:
        "Diagnóstico sobre ilhas de calor e qualidade do ar em um dos maiores conjunto de favelas do Brasil",
      description:
        "Estudo mapeia ilhas de calor e poluição na Maré, revelando impactos diretos na saúde dos moradores",
      image: "/viz1.png",
      href: "/historias/ilhas-de-calor",
    },
    {
      id: "2",
      title:
        "Para o bem ou para o mal: análise da capacidade que o governo tem de controlar a densidade habitacional",
      description:
        "Como os instrumentos de planejamento urbano buscam equilibrar adensamento, mobilidade e qualidade de vida",
      image: "/viz2.png",
      href: "/historias/densidade-habitacional",
    },
    {
      id: "3",
      title:
        "Retrato das Desigualdades em Saúde: Riscos de Mortalidade e Determinantes Socioeconômicos no Município de São Paulo",
      description:
        "Mapeamento das desigualdades em saúde em São Paulo: identificando áreas de risco para mortalidade materna, doenças cardiovasculares e diabetes",
      image: "/viz3.png",
      href: "/historias/desigualdades-saude",
    },
    {
      id: "4",
      title:
        "Retrato das Desigualdades em Saúde: Riscos de Mortalidade e Determinantes Socioeconômicos no Município de São Paulo",
      description:
        "Mapeamento das desigualdades em saúde em São Paulo: identificando áreas de risco para mortalidade materna, doenças cardiovasculares e diabetes",
      image: "/viz3.png",
      href: "/historias/desigualdades-saude",
    },
  ];
}
