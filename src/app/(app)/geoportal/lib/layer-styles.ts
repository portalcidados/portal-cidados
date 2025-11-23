export interface LayerStyle {
  id: string
  type: 'fill' | 'line' | 'circle' | 'symbol'
  source: string
  'source-layer': string
  paint: Record<string, unknown>
  layout?: Record<string, unknown>
  slot?: string
}

export const layerStyles: Record<string, LayerStyle> = {
  // ================== START SÃO PAULO ==================
  "spo_spo_ciclovias": {
       "type": "line",
    "source": "composite",
    "id": "spo-spo-ciclovias",
    "paint": {
      "line-width": 3,
      "line-color": [
        "match",
        [
          "get",
          "tipo"
        ],
        [
          "Ciclorrota"
        ],
        "#377eb8",
        [
          "Ciclofaixa"
        ],
        "#e41a1c",
        [
          "Ciclovia"
        ],
        "#4daf4a",
        [
          "Ciclopassarela"
        ],
        "#f9e806",
        "#000000"
      ]
    },
    "slot": "",
    "source-layer": "spo_spo_ciclovias",
    "layout": {
      "visibility": "none"
    }
  },
  "renda_spo-ddwghj":{
     "layout": {
      "visibility": "none"
    },
    "type": "fill",
    "source": "composite",
    "id": "renda-spo-ddwghj",
    "paint": {
      "fill-opacity": 0.7,
      "fill-color": [
        "step",
        [
          "get",
          "Renda Domiciliar Média (R$)"
        ],
        "#fff7fb",
        2000,
        "#ece2f0",
        4000,
        "#a6bddb",
        8000,
        "#3690c0",
        20000,
        "#02818a",
        98040,
        "#014636"
      ]
    },
    "slot": "",
    "source-layer": "renda_spo-ddwghj"
  },
  "populacao_spo-94zde5":{
      "layout": {
      "visibility": "none"
    },
    "type": "fill",
    "source": "composite",
    "id": "populacao-spo-94zde5",
    "paint": {
      "fill-opacity": 0.7,
      "fill-color": [
        "step",
        [
          "get",
          "População (2022)"
        ],
        "#f7fcf5",
        100,
        "#e5f5e0",
        1000,
        "#a1d99b",
        2500,
        "#41ab5d",
        5000,
        "#006d2c",
        15000,
        "#00441b"
      ]
    },
    "slot": "",
    "source-layer": "populacao_spo-94zde5"
  },
  "spo_metro-74ojzn":{
     "id": "spo-metro-74ojzn",
    "type": "line",
    "paint": {
      "line-color": [
        "match",
        [
          "get",
          "Linha"
        ],
        [
          "Linha 1 - Azul"
        ],
        "#110df2",
        [
          "Linha 2 - Verde"
        ],
        "#067000",
        [
          "Linha 3 - Vermelha"
        ],
        "#e70808",
        [
          "Linha 4 - Amarela"
        ],
        "#f9e31f",
        [
          "Linha 5 - Lilás"
        ],
        "#ab02e8",
        [
          "Linha 15 - Prata"
        ],
        "rgba(0, 0, 0, 0.5)",
        [
          "interpolate",
          [
            "linear"
          ],
          [
            "id"
          ],
          0,
          "#000000",
          1,
          "#000000"
        ]
      ],
      "line-width": 3
    },
    "source": "composite",
    "source-layer": "spo_metro-74ojzn",
    "slot": ""
  },
  // ================== END SÃO PAULO ==================
  // ================== START RIO DE JANEIRO ==================
  "quali_pontos-b424eh": {
    "type": "circle",
    "source": "composite",
    "id": "quali-pontos-b424eh",
    "paint": {
      "circle-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "get",
          "PM 10 Máx."
        ],
        237,
        "#cccccc",
        554,
        "#969696",
        871,
        "#636363"
      ]
    },
    "slot": "",
    "source-layer": "quali_pontos-b424eh",
    "layout": {
      "visibility": "none"
    }
  },
  "quali_area-1ci0wo": {
    "layout": {
      "visibility": "none"
    },
    "type": "fill",
    "source": "composite",
    "id": "quali-area-1ci0wo",
    "paint": {
      "fill-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "get",
          "PM 10 Máx."
        ],
        237,
        "#cccccc",
        554,
        "#969696",
        871,
        "#636363"
      ]
    },
    "slot": "",
    "source-layer": "quali_area-1ci0wo"
  },
  "ic_pontos-90vwh4": {
    "type": "circle",
    "source": "composite",
    "id": "ic-pontos-90vwh4",
    "paint": {
      "circle-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "get",
          "Temperatura Máx."
        ],
        33.1,
        "#fed976",
        35,
        "#fd8d3c",
        37,
        "#e31a1c",
        39.4,
        "#800026"
      ]
    },
    "slot": "",
    "source-layer": "ic_pontos-90vwh4",
    "layout": {
      "visibility": "none"
    }
  },
  "ic_areas-3ii8xj": {
    "type": "fill",
    "source": "composite",
    "id": "ic-areas-3ii8xj",
    "paint": {
      "fill-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "get",
          "Temperatura Média"
        ],
        27.1,
        "#ffeda0",
        27.5,
        "#fd8d3c",
        27.9,
        "#bd0026"
      ],
      "fill-opacity": 0.7
    },
    "slot": "",
    "source-layer": "ic_areas-3ii8xj"
  },
  // ================== END RIO DE JANEIRO ==================
   // ================== START BRASIL ==================
   "insper_tarifa_zero_municipios-dwws9i":
   {
     "id": "insper-tarifa-zero-municipios-dwws9i",
    "type": "circle",
    "paint": {
      "circle-radius": 8,
      "circle-color": [
        "match",
        [
          "get",
          "Tipo de Tarifa Zero"
        ],
        [
          "Integral"
        ],
        "#2166ac",
        [
          "Parcial"
        ],
        "#80cdc1",
        [
          "Revogado"
        ],
        "#b2182b",
        "#000000"
      ]
    },
    "source": "composite",
    "source-layer": "insper_tarifa_zero_municipios-dwws9i"
   }
   // ================== END BRASIL ==================
}

// Helper function to get layer style by source layer name
export function getLayerStyle(sourceLayer: string): LayerStyle | null {
  return layerStyles[sourceLayer] || null
}

// Helper function to create a layer configuration with custom style
export function createStyledLayer(layerId: string, sourceLayer: string, _tilesetId: string): LayerStyle | null {
  const style = getLayerStyle(sourceLayer)
  if (!style) return null

  return {
    ...style,
    id: layerId,
    source: layerId, // Use the layerId as source since we're adding it as a vector source
    'source-layer': sourceLayer
  }
}

// Legend item interface
export interface LegendItem {
  color: string
  label: string
  value?: string | number
}

// Extract legend information from layer paint styles
export function extractLegendFromPaint(layerStyle: LayerStyle): LegendItem[] | null {
  if (!layerStyle.paint) return null

  const paint = layerStyle.paint

  // Handle fill layers
  if (layerStyle.type === 'fill' && paint['fill-color']) {
    return extractLegendFromExpression(paint['fill-color'])
  }

  // Handle line layers
  if (layerStyle.type === 'line' && paint['line-color']) {
    return extractLegendFromExpression(paint['line-color'])
  }

  // Handle circle layers
  if (layerStyle.type === 'circle' && paint['circle-color']) {
    return extractLegendFromExpression(paint['circle-color'])
  }

  return null
}

// Extract legend from Mapbox expression
function extractLegendFromExpression(expression: unknown): LegendItem[] | null {
  if (!Array.isArray(expression)) {
    // Simple color value
    if (typeof expression === 'string') {
      return [{ color: expression, label: 'Dados disponíveis' }]
    }
    return null
  }

  const [expressionType] = expression

  if (expressionType === 'step') {
    return extractFromStepExpression(expression)
  }

  if (expressionType === 'interpolate') {
    return extractFromInterpolateExpression(expression)
  }

  if (expressionType === 'case') {
    return extractFromCaseExpression(expression)
  }

  if (expressionType === 'match') {
    return extractFromMatchExpression(expression)
  }

  return null
}

// Extract legend from match expression
function extractFromMatchExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = []
  // Match expression format: ["match", ["get", "property"], value1, output1, value2, output2, ..., fallback]
  
  if (expression.length < 4) return legendItems
  
  // Process pairs of (value, output) starting from index 2
  // The last item is the fallback/default value
  for (let i = 2; i < expression.length - 1; i += 2) {
    const matchValue = expression[i]
    const output = expression[i + 1]
    
    // Handle arrays of values (multiple values mapping to same output)
    if (Array.isArray(matchValue)) {
      matchValue.forEach((val) => {
        if (typeof output === 'string') {
          legendItems.push({
            color: output,
            label: String(val),
            value: String(val)
          })
        }
      })
    } else {
      // Single value
      if (typeof output === 'string') {
        legendItems.push({
          color: output,
          label: String(matchValue),
          value: String(matchValue)
        })
      }
    }
  }
  
  // Add fallback/default color if it exists and no items were added
  const fallbackColor = expression[expression.length - 1]
  if (legendItems.length === 0 && typeof fallbackColor === 'string') {
    legendItems.push({
      color: fallbackColor,
      label: 'Outros',
      value: 'Default'
    })
  }
  
  return legendItems
}

// Extract legend from step expression
function extractFromStepExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = []
  const [, input, fallback, ...stops] = expression

  // Add first item with fallback color
  if (typeof fallback === 'string') {
    legendItems.push({
      color: fallback,
      label: getReadableLabel(input, null),
      value: `< ${stops[0]}`
    })
  }

  // Process stops (value, color pairs)
  for (let i = 0; i < stops.length; i += 2) {
    const value = stops[i]
    const color = stops[i + 1]
    const nextValue = stops[i + 2]

    if (typeof color === 'string') {
      legendItems.push({
        color,
        label: getReadableLabel(input, value),
        value: nextValue ? `${value} - ${nextValue}` : `${value}+`
      })
    }
  }

  return legendItems
}

// Extract legend from interpolate expression
function extractFromInterpolateExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = []
  const [, , input, ...stops] = expression

  // Process stops (value, color pairs)
  for (let i = 0; i < stops.length; i += 2) {
    const value = stops[i]
    const color = stops[i + 1]

    if (typeof color === 'string') {
      legendItems.push({
        color,
        label: getReadableLabel(input, value),
        value: typeof value === 'string' || typeof value === 'number' ? value : String(value)
      })
    }
  }

  return legendItems
}

// Extract legend from case expression (for categorical data)
function extractFromCaseExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = []

  // Case expressions are more complex, we'll handle specific patterns
  // This is a simplified version for the ciclovia_tipo layer pattern
  const caseConditions = expression.slice(1, -1) // Remove 'case' and fallback

  // Look for match conditions with colors
  for (let i = 0; i < caseConditions.length; i += 2) {
    const condition = caseConditions[i]
    const color = caseConditions[i + 1]

    if (Array.isArray(condition) && condition[0] === 'match' && typeof color === 'string') {
      const matchValues = condition[3] // The array of values to match
      if (Array.isArray(matchValues) && matchValues.length > 0) {
        legendItems.push({
          color,
          label: String(matchValues[0]), // Use the first value as label
          value: matchValues.map(String).join(', ')
        })
      }
    }
  }

  // Add fallback color if present
  const fallback = expression[expression.length - 1]
  if (typeof fallback === 'string' && fallback.startsWith('#')) {
    legendItems.push({
      color: fallback,
      label: 'Outros',
      value: 'Outros'
    })
  }

  return legendItems
}

// Generate readable labels based on property names
function getReadableLabel(input: unknown, value: unknown): string {
  if (!Array.isArray(input) || input[0] !== 'get') {
    return value ? `${value}` : 'Valor'
  }

  const property = input[1]

  // Map property names to readable labels
  const propertyLabels: Record<string, string> = {
    'densidade_residencial': 'Densidade Residencial',
    'GeoSES': 'Índice GeoSES',
    'Renda Domiciliar Média (R$)': 'Renda Domiciliar',
    'População (2022)': 'População',
    'Número de Passageiros': 'Passageiros',
    'Média de Embarques (dia útil)': 'Embarques',
    'Total Vítimas (2023)': 'Vítimas',
    'Total Feridos': 'Feridos',
    'tipo': 'Tipo'
  }

  const baseLabel = propertyLabels[property] || property

  if (value === null || value === undefined) {
    return baseLabel
  }

  // Format value ranges
  if (typeof value === 'number') {
    if (property.includes('Renda')) {
      return `${baseLabel}`
    }
    if (property.includes('População')) {
      return `${baseLabel}`
    }
    return `${baseLabel}`
  }

  return baseLabel
}

// Get legend for a specific layer
export function getLayerLegend(layerId: string): LegendItem[] | null {
  const layerStyle = getLayerStyle(layerId)
  if (!layerStyle) return null

  return extractLegendFromPaint(layerStyle)
}
