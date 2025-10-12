export interface DataCatalogItem {
  id: string;
  title: string;
  description: string;
  theme: string;
  region: string;
  accessMethod: string;
  keywords: string[];
  createdAt: string;
  tags: string[];
}

export const catalogData: DataCatalogItem[] = [
  {
    id: "1",
    title: "Imposto sobre Transmissão de Bens Imóveis (ITBI)",
    description: "Dados sobre arrecadação, incidência e registros de transferências de imóveis no município.",
    theme: "Mobilidade",
    region: "São Paulo",
    accessMethod: "Disponível para download",
    keywords: ["imposto", "imóveis", "arrecadação", "transferência", "ITBI", "propriedade", "tributo"],
    createdAt: "2024-01-15",
    tags: ["Mobilidade", "São Paulo", "Download"]
  },
  {
    id: "2",
    title: "Dados de Entregas por Aplicativos (iFood)",
    description: "Indicadores de volume, origem-destino e impacto das entregas por aplicativos na cidade.",
    theme: "Mobilidade",
    region: "Multiplas cidades",
    accessMethod: "Sala segura do Insper",
    keywords: ["entregas", "ifood", "aplicativos", "logística", "mobilidade urbana", "delivery", "comércio"],
    createdAt: "2024-01-10",
    tags: ["Mobilidade", "Multiplas cidades", "Sala segura"]
  },
  {
    id: "3",
    title: "Processos de Licenciamento Urbano e Ambiental",
    description: "Informações sobre autorizações, licenças e regularizações de obras, atividades e empreendimentos.",
    theme: "Urbanismo",
    region: "São Paulo",
    accessMethod: "Disponível para download",
    keywords: ["licenciamento", "urbano", "ambiental", "obras", "empreendimentos", "autorização", "regularização"],
    createdAt: "2024-01-08",
    tags: ["Urbanismo", "Infraestrutura", "Regulação"]
  },
  {
    id: "4",
    title: "Atendimentos nas Clínicas da Família",
    description: "Indicadores de consultas médicas e acompanhamento de pacientes no SUS.",
    theme: "Saúde",
    region: "São Paulo",
    accessMethod: "Disponível para download",
    keywords: ["saúde", "clínicas", "SUS", "atendimento", "médico", "pacientes", "consultas"],
    createdAt: "2024-01-05",
    tags: ["Saúde", "SUS", "Atendimento Primário"]
  },
  {
    id: "5",
    title: "Dados de Transporte Coletivo (Ônibus e Metrô)",
    description: "Informações sobre linhas, horários, frota, acessibilidade e fluxo de passageiros.",
    theme: "Mobilidade",
    region: "São Paulo",
    accessMethod: "Disponível para download",
    keywords: ["transporte", "coletivo", "ônibus", "metrô", "linhas", "horários", "frota", "passageiros"],
    createdAt: "2024-01-03",
    tags: ["Mobilidade", "Transporte Coletivo", "Serviços Públicos"]
  },
  {
    id: "6",
    title: "Dados de Unidades Educacionais",
    description: "Informações sobre escolas públicas, matrículas, desempenho e infraestrutura educacional.",
    theme: "Educação",
    region: "São Paulo",
    accessMethod: "Disponível para download",
    keywords: ["educação", "escolas", "matrículas", "desempenho", "infraestrutura", "públicas", "ensino"],
    createdAt: "2024-01-01",
    tags: ["Educação", "Escolas públicas", "Serviços Públicos"]
  },
  {
    id: "7",
    title: "Receitas e Despesas Municipais",
    description: "Dados sobre orçamento público, receitas, despesas e execução orçamentária.",
    theme: "Finanças",
    region: "São Paulo",
    accessMethod: "Disponível para download",
    keywords: ["finanças", "orçamento", "receitas", "despesas", "municipal", "público", "execução"],
    createdAt: "2023-12-28",
    tags: ["Finanças", "São Paulo", "Download"]
  },
  {
    id: "8",
    title: "Dados de Tráfego e Mobilidade Urbana",
    description: "Informações sobre fluxo de veículos, congestionamentos e indicadores de mobilidade.",
    theme: "Mobilidade",
    region: "Multiplas cidades",
    accessMethod: "Sala segura do Insper",
    keywords: ["tráfego", "mobilidade", "veículos", "congestionamento", "fluxo", "urbano", "transporte"],
    createdAt: "2023-12-25",
    tags: ["Mobilidade", "Multiplas cidades", "Sala segura"]
  }
];

export const filterOptions = {
  themes: ["Mobilidade", "Educação", "Saúde", "Finanças", "Urbanismo"],
  regions: ["Brasil", "Estado de São Paulo", "São Paulo", "Rio de Janeiro", "Recife", "Campinas", "Santo André", "Niterói", "Salvador"],
  accessMethods: ["Disponível para download", "Sala segura do Insper"]
};

