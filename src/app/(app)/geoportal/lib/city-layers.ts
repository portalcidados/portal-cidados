export interface CityLayer {
  id: string;
  name: string;
  description?: string;
  tilesetId?: string;
  sourceLayer?: string;
  layerType?: "fill" | "line" | "circle" | "symbol";
  hasCustomStyle?: boolean; // Indicates if this layer has a custom style defined in layer-styles.ts
}

export interface CityLayersConfig {
  [cityName: string]: CityLayer[];
}

export const cityLayersConfig: CityLayersConfig = {
  Brasil: [
    {
      id: "tarifa_zero",
      name: "Tarifa Zero",
      description:
        "Municípios com tarifa zero integral, parcial por dias específicos (domingos/feriados) ou parcial por área geográfica (linhas específicas). Dados atualizados até outubro de 2025. Total de 134 municípios com tarifa zero integral e 8 com tarifa zero parcial.",
      tilesetId: "observatorio-nacional.0bzbtkfg",
      sourceLayer: "insper_tarifa_zero_municipios-dwws9i",
      layerType: "circle",
      hasCustomStyle: true,
    },
  ],
  "Rio de Janeiro": [
    {
      id: "ic_areas-3ll8xj",
      name: "Ilhas de Calor",
      description:
        "Medidas de temperatura registradas em diferentes dias da semana no período de março a setembro de 2023.",
      tilesetId: "observatorio-nacional.cxco0uhi",
      sourceLayer: "ic_areas-3ll8xj",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "ic_pontos-90vwh4",
      name: "Ilhas de Calor (pontos de captura)",
      description:
        "Localização dos pontos de caputra de temperatura em diferentes dias da semana no período de março a setembro de 2023.",
      tilesetId: "observatorio-nacional.860kttlo",
      sourceLayer: "ic_pontos-90vwh4",
      layerType: "circle",
      hasCustomStyle: true,
    },
    {
      id: "quali_area-1cl0wo",
      name: "Qualidade do Ar",
      description:
        "Medidas de qualidade do ar registradas na última semana de cada mês no período de março a setembro de 2023.",
      tilesetId: "observatorio-nacional.1dkglesm",
      sourceLayer: "quali_area-1cl0wo",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "quali_pontos-b424eh",
      name: "Qualidade do Ar (pontos de captura)",
      description:
        "Localização dos pontos de caputra de qualidade do ar na última semana de cada mês no período de março a setembro de 2023.",
      tilesetId: "observatorio-nacional.18m3jaqa",
      sourceLayer: "quali_pontos-b424eh",
      layerType: "circle",
      hasCustomStyle: true,
    },
  ],
  "São Paulo": [
    {
      id: "faixa_azul-bkcy1e",
      name: "Faixa Azul",
      description:
        "Localização dos trechos com faixas de trânsito dedicadas a motociclistas (Faixa Azul) implementadas em São Paulo no período de 2022 a 2025.",
      sourceLayer: "faixa_azul-bkcy1e",
      layerType: "line",
      hasCustomStyle: true,
    },
    {
      id: "sinistros_distritos-61njhd",
      name: "Sinistros por Distrito",
      description:
        "Sinistros de trânsito registrados entre 2022 a 2025 agregados por distrito. Fonte: InfoSiga/DETRAN-SP",
      sourceLayer: "sinistros_distritos-61njhd",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "sinistros_trechos-3yeee3",
      name: "Sinistros em Trechos de Vias",
      description:
        "Sinistros de trânsito, registrados entre 2022 a 2025, agregados por trechos de vias.",
      sourceLayer: "sinistros_trechos-3yeee3",
      layerType: "line",
      hasCustomStyle: true,
    },
    {
      id: "verticalizacao_setor-bvh5gj",
      name: "Verticalização",
      description:
        "Índice de Verticalização. Estimado a partir da razão entre a área construída e a área ocupada em construções verticais. Fonte: IPTU (2024).",
      sourceLayer: "verticalizacao_setor-bvh5gj",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "raster-dbiubd",
      name: "Verticalização (grid)",
      description:
        "Índice de Verticalização. Estimado a partir da razão entre a área construída e a área ocupada em construções verticais, agregados por grid.",
      tilesetId: "observatorio-nacional.78kitbd4",
      sourceLayer: "raster-dbiubd",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "densidade_habitacional_setor-9hkkeo",
      name: "Densidade Habitacional",
      description:
        "Densidade habitacional (domicílios por hectare). Fonte: Censo 2022.",
      sourceLayer: "densidade_habitacional_setor-9hkkeo",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "densidade_populacional_setor-3w4vb6",
      name: "Densidade Populacional",
      description:
        "Densidade populacional (habitantes por hectare). Fonte: Censo 2022.",
      sourceLayer: "densidade_populacional_setor-3w4vb6",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "populacao_distritos-5bl4w3",
      name: "População por Distrito",
      description: "População por distrito. Fonte: SEADE (2020).",
      tilesetId: "observatorio-nacional.6qisi2js",
      sourceLayer: "populacao_distritos-5bl4w3",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "geoses-b9o06r",
      name: "GeoSES",
      description:
        "Índice socioeconômico GeoSES. Pondera dados censitários de renda, educação, qualidade de vida e similares. Fonte: Barrozo, L. V. et al. (2020).",
      tilesetId: "observatorio-nacional.9n9mvam6",
      sourceLayer: "geoses-b9o06r",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "gastos_ubs_distritos-c6rpx4",
      name: "Gastos UBS por Distrito",
      description:
        "Gastos com Unidades Básicas de Saúde (UBS) por distrito. Fonte: Tribunal de Conatas SP (2020).",
      tilesetId: "observatorio-nacional.dg1lr46q",
      sourceLayer: "gastos_ubs_distritos-c6rpx4",
      layerType: "fill",
      hasCustomStyle: true,
    },
    {
      id: "obitos-47q8aj",
      name: "Óbitos por Doenças Cerebrovasculares (femi.)",
      description:
        "Óbitos por doenças cerebrovasculares (femininos). Fonte: DATASUS (2020).",
      tilesetId: "observatorio-nacional.8ka3k10y",
      sourceLayer: "obitos-47q8aj",
      layerType: "fill",
      hasCustomStyle: true,
    },
  ],
};
