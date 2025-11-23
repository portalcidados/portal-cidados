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
      id: "quali_pontos-b424eh", 
      name: "Quali pontos - mudar texto", 
      description: "Quali pontos",
      tilesetId: "observatorio-nacional.18m3jaqa",
      sourceLayer: "quali_pontos-b424eh",
      layerType: "circle",
      hasCustomStyle: true
    },
    { 
      id: "quali_area-1ci0wo", 
      name: "Quali área - mudar texto", 
      description: "Quali área",
      tilesetId: "observatorio-nacional.1dkglesm",
      sourceLayer: "quali_area-1ci0wo",
      layerType: "fill",
      hasCustomStyle: true
    },
    { 
      id: "ic_pontos-90vwh4", 
      name: "IC pontos - mudar texto", 
      description: "IC pontos",
      tilesetId: "observatorio-nacional.860kttlo",
      sourceLayer: "ic_pontos-90vwh4",
      layerType: "circle",
      hasCustomStyle: true
    },
    { 
      id: "ic_areas-3ii8xj", 
      name: "IC áreas - mudar texto", 
      description: "IC áreas",
      tilesetId: "observatorio-nacional.cxco0uhi",
      sourceLayer: "ic_areas-3ii8xj",
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
