export interface CityLayer {
  id: string
  name: string
  description?: string
  tilesetId?: string
  sourceLayer?: string
  layerType?: 'fill' | 'line' | 'circle' | 'symbol'
  hasCustomStyle?: boolean // Indicates if this layer has a custom style defined in layer-styles.ts
}

export interface CityLayersConfig {
  [cityName: string]: CityLayer[]
}

export const cityLayersConfig: CityLayersConfig = {
  "Brasil": [
    {
      id: "tarifa_zero", 
      name: "Tarifa Zero", 
      description: "Municípios com tarifa zero integral, parcial por dias específicos (domingos/feriados) ou parcial por área geográfica (linhas específicas). Dados atualizados até outubro de 2025. Total de 134 municípios com tarifa zero integral e 8 com tarifa zero parcial.",
      tilesetId: "observatorio-nacional.0bzbtkfg",
      sourceLayer: "insper_tarifa_zero_municipios-dwws9i",
      layerType: "circle",
      hasCustomStyle: true
    }
  ],
  "Rio de Janeiro": [
    { 
      id: "renda", 
      name: "Renda", 
      description: "Renda per capita por bairro",
      tilesetId: "observatorio-nacional.3pcgkauc",
      sourceLayer: "renda_rio-4ks1k8",
      layerType: "fill",
      hasCustomStyle: true
    },
    { 
      id: "rio_rotas_onibus", 
      name: "Rotas de Ônibus", 
      description: "Traçado das linhas de ônibus municipais.",
      tilesetId: "observatorio-nacional.28tgojsu",
      sourceLayer: "rio_rotas_onibus",
      layerType: "fill",
      hasCustomStyle: true
    },
    { 
      id: "heatmap-bilhetagem", 
      name: "Heatmap Embarques", 
      description: "Contagem de embarques em grid 500x500m (agosto/2023).",
      tilesetId: "observatorio-nacional.6mbl4ycd",
      sourceLayer: "heatmap_bilhetagem_rio-59w42o",
      layerType: "fill",
      hasCustomStyle: true
    },
    { 
      id: "population-rio", 
      name: "Densidade Populacional", 
      description: "Densidade populacional em grid 500x500m",
      tilesetId: "observatorio-nacional.4sg21k6q",
      sourceLayer: "populacao_rio-19sjpd",
      layerType: "fill",
      hasCustomStyle: true
    },
  ],
  "São Paulo": [
    { 
      id: "spo_spo_ciclovias",
      name: "Ciclovia",
      description: "Traçado das ciclovias municipais.",
      tilesetId: "observatorio-nacional.c19gombg",
      sourceLayer: "spo_spo_ciclovias",
      layerType: "line",
      hasCustomStyle: true
    },
    {
      id: "spo_metro-74ojzn",
      name: "Linhas de metrô",
      description: "Linhas de metrô do município.",
      tilesetId: "observatorio-nacional.75bso5it",
      sourceLayer: "spo_metro-74ojzn",
      layerType: "line",
      hasCustomStyle: true
    },
    {
      id: "renda_spo-ddwghj",
      name: "Renda Média",
      description: "Renda domiciliar média em grid 500x500m (2010, atualizada pelo IPCA para R$ de 2024)",
      tilesetId: "observatorio-nacional.4gtkl59h",
      sourceLayer: "renda_spo-ddwghj",
      layerType: "fill",
      hasCustomStyle: true
    },
    {
      id: "populacao_spo-94zde5",
      name: "Densidade Populacional",
      description: "Contagem da população em grid 500x500m (2022).",
      tilesetId: "observatorio-nacional.8ttkr2wm",
      sourceLayer: "populacao_spo-94zde5",
      layerType: "fill",
      hasCustomStyle: true
    },
  ],
}
