import type { ChartData } from "../components/pictogram-chart";

// Legenda de procedência dos dados:
// - fornecido: valor derivado dos CSVs em data/faixa_azul/ (share × 100).
// - config: parâmetro de renderização do gráfico (não é dado de pesquisa).

// Ordem fixa do eixo X em todos os gráficos.
export const TRANSPORT_CATEGORY_ORDER = [
  "Automóvel",
  "Motocicleta",
  "Transporte público",
  "Pedestre",
  "Outros",
] as const;

export const charts: ChartData[] = [
  {
    id: "viagens", // config
    title:
      "As motos representam apenas cerca de 3,5% das viagens diárias na Região Metropolitana de São Paulo", // fornecido
    subtitle:
      "Distribuição dos deslocamentos diários, por meio de transporte, na Região Metropolitana de São Paulo em 2023.", // fornecido
    source:
      'Pesquisa Origem-Destino do Metrô de São Paulo; estudo "Avaliação do impacto da Faixa Azul nos sinistros de trânsito em São Paulo" — Centro de Estudos das Cidades / Insper, 2025.', // fornecido
    yMax: 50, // config
    step: 2, // config
    categories: [
      { label: "Automóvel", icon: "car", value: 32.4 }, // fornecido (tab_modais_transporte)
      { label: "Motocicleta", icon: "motorbike", value: 3.5 }, // fornecido
      { label: "Transporte público", icon: "bus", value: 26.7 }, // fornecido
      { label: "Pedestre", icon: "pedestrian", value: 28.2 }, // fornecido
      { label: "Outros", icon: "other", value: 9.2 }, // fornecido
    ],
  },
  {
    id: "acidentes", // config
    title:
      "Motocicletas aparecem em cerca de 39% dos veículos envolvidos em sinistros na cidade de São Paulo", // fornecido
    subtitle:
      "Distribuição dos sinistros de trânsito, por tipo de veículo envolvido, no município de São Paulo em 2023.", // fornecido
    source:
      'Infosiga-SP; estudo "Avaliação do impacto da Faixa Azul nos sinistros de trânsito em São Paulo" — Centro de Estudos das Cidades / Insper, 2025.', // fornecido
    yMax: 50, // config
    step: 2, // config
    categories: [
      { label: "Automóvel", icon: "car", value: 42.0 }, // fornecido (tab_sinistros_tipo_veiculo)
      { label: "Motocicleta", icon: "motorbike", value: 39.2 }, // fornecido
      { label: "Transporte público", icon: "bus", value: 4.3 }, // fornecido
      { label: "Pedestre", icon: "pedestrian", value: 8.9 }, // fornecido
      { label: "Outros", icon: "other", value: 5.6 }, // fornecido
    ],
  },
  {
    id: "mortes", // config
    title:
      "Cerca de 41% das mortes no trânsito de São Paulo são de motociclistas", // fornecido
    subtitle:
      "Distribuição das vítimas fatais no trânsito, por tipo de usuário da via, no município de São Paulo em 2023.", // fornecido
    source:
      'Infosiga-SP; estudo "Avaliação do impacto da Faixa Azul nos sinistros de trânsito em São Paulo" — Centro de Estudos das Cidades / Insper, 2025.', // fornecido
    yMax: 50, // config
    step: 2, // config
    categories: [
      { label: "Automóvel", icon: "car", value: 12.6 }, // fornecido (tab_mortes_tipo_veiculo)
      { label: "Motocicleta", icon: "motorbike", value: 41.5 }, // fornecido
      { label: "Transporte público", icon: "bus", value: 0.5 }, // fornecido
      { label: "Pedestre", icon: "pedestrian", value: 40.7 }, // fornecido
      { label: "Outros", icon: "other", value: 4.7 }, // fornecido
    ],
  },
];
