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
    // história verticalização
    { 
      id: "raster-dbiubd",
      name: "Raster - mudar texto",
      description: "Raster",
      tilesetId: "observatorio-nacional.78kitbd4",
      sourceLayer: "raster-dbiubd",
      layerType: "fill",
      hasCustomStyle: true
    },
    {
      id: "iptu-21rwvx",
      name: "IPTU - mudar texto",
      description: "IPTU",
      tilesetId: "observatorio-nacional.8til2lvu",
      sourceLayer: "iptu-21rwvx",
      layerType: "fill",
      hasCustomStyle: true
    },
    {
      id: "censo-ap4r5h",
      name: "Censo - mudar texto",
      description: "Censo",
      tilesetId: "observatorio-nacional.7rrnghz8",
      sourceLayer: "censo-ap4r5h",
      layerType: "fill",
      hasCustomStyle: true
    },
    {
      id: "censo_iptu-0z08hq",
      name: "Censo IPTU - mudar texto",
      description: "Censo IPTU",
      tilesetId: "observatorio-nacional.7a7j3r1q",
      sourceLayer: "censo_iptu-0z08hq",
      layerType: "fill",
      hasCustomStyle: true
    },
    //história saúde
    {
      id: "populacao_distritos-5bi4w3",
      name: "População distritos - mudar texto",
      description: "População distritos",
      tilesetId: "observatorio-nacional.6qisi2js",
      sourceLayer: "populacao_distritos-5bi4w3",
      layerType: "fill",
      hasCustomStyle: true
    },
    {
      id: "gastos_ubs_distritos-c6rpx4",
      name: "Gastos UBS distritos - mudar texto",
      description: "Gastos UBS distritos",
      tilesetId: "observatorio-nacional.dg1lr46q",
      sourceLayer: "gastos_ubs_distritos-c6rpx4",
      layerType: "fill",
      hasCustomStyle: true
    },
    {
      id: "obitos-47q8aj",
      name: "Óbitos - mudar texto",
      description: "Óbitos",
      tilesetId: "observatorio-nacional.8ka3k10y",
      sourceLayer: "obitos-47q8aj",
      layerType: "fill",
      hasCustomStyle: true
    },
    {
      id: "geoses-b9o06r",
      name: "Geoses - mudar texto",
      description: "Geoses",
      tilesetId: "observatorio-nacional.9n9mvam6",
      sourceLayer: "geoses-b9o06r",
      layerType: "fill",
      hasCustomStyle: true
    },
  ],
}
