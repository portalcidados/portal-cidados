import type { ChartData } from "../components/pictogram-chart";

// Legenda de procedência dos dados:
// - fornecido: valor/texto passado explicitamente no briefing pelo autor.
// - mock: valor inventado (placeholder) — NÃO extraído de fonte. Trocar por dado real.
// - config: parâmetro de renderização do gráfico (não é dado de pesquisa).

// Ordem fixa do eixo X em todos os gráficos.
export const TRANSPORT_CATEGORY_ORDER = [
  "Automóvel",
  "Motocicleta",
  "Transporte público",
  "Pedestre",
] as const;

export const charts: ChartData[] = [
  {
    id: "viagens", // config
    title:
      "As motos representam apenas cerca de 5% das viagens diárias na Região Metropolitana de São Paulo", // fornecido
    subtitle:
      "Distribuição dos deslocamentos diários, por meio de transporte, na Região Metropolitana de São Paulo em 2023.", // fornecido
    source:
      'Pesquisa Origem-Destino do Metrô de São Paulo; estudo "Avaliação do impacto da Faixa Azul nos sinistros de trânsito em São Paulo" — Centro de Estudos das Cidades / Insper, 2025.', // fornecido
    yMax: 80, // config
    step: 4, // config
    categories: [
      { label: "Automóvel", icon: "car", value: 41.6 }, // mock
      { label: "Motocicleta", icon: "motorbike", value: 4.9 }, // mock
      { label: "Transporte público", icon: "bus", value: 37.9 }, // mock (ônibus+metrô+trem)
      { label: "Pedestre", icon: "pedestrian", value: 15.6 }, // mock
    ],
  },
  {
    id: "acidentes", // config
    title:
      "Motocicletas aparecem em cerca de 70% dos acidentes registrados na cidade de São Paulo", // fornecido
    subtitle:
      "Distribuição dos sinistros de trânsito, por tipo de veículo envolvido, no município de São Paulo em 2023.", // fornecido
    source:
      'Infosiga-SP; estudo "Avaliação do impacto da Faixa Azul nos sinistros de trânsito em São Paulo" — Centro de Estudos das Cidades / Insper, 2025.', // fornecido
    yMax: 80, // config
    step: 4, // config
    categories: [
      { label: "Automóvel", icon: "car", value: 15 }, // mock
      { label: "Motocicleta", icon: "motorbike", value: 70 }, // fornecido (aprox. "~70%")
      { label: "Transporte público", icon: "bus", value: 8 }, // mock
      { label: "Pedestre", icon: "pedestrian", value: 2 }, // mock
    ],
  },
  {
    id: "mortes", // config
    title:
      "Uma em cada duas mortes no trânsito de São Paulo é de um motociclista", // fornecido
    subtitle:
      "Distribuição das vítimas fatais no trânsito, por tipo de usuário da via, no município de São Paulo em 2023.", // fornecido
    source:
      'Infosiga-SP; estudo "Avaliação do impacto da Faixa Azul nos sinistros de trânsito em São Paulo" — Centro de Estudos das Cidades / Insper, 2025.', // fornecido
    yMax: 80, // config
    step: 4, // config
    categories: [
      { label: "Automóvel", icon: "car", value: 20 }, // mock
      { label: "Motocicleta", icon: "motorbike", value: 50 }, // fornecido (aprox. "metade")
      { label: "Transporte público", icon: "bus", value: 9 }, // mock
      { label: "Pedestre", icon: "pedestrian", value: 31 }, // mock
    ],
  },
];
