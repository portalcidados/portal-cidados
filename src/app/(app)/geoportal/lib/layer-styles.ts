export interface LayerStyle {
  id: string;
  type: "fill" | "line" | "circle" | "symbol";
  source: string;
  "source-layer": string;
  paint: Record<string, unknown>;
  layout?: Record<string, unknown>;
  slot?: string;
}

export const layerStyles: Record<string, LayerStyle> = {
  // ================== START SÃO PAULO ==================
  "raster-dbiubd": {
    type: "fill",
    source: "composite",
    id: "raster-dbiubd",
    slot: "",
    "source-layer": "raster-dbiubd",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "Densidade Total"],
        0,
        "#ece2f0",
        0.011,
        "#a6bddb",
        0.022,
        "#3690c0",
        0.028,
        "#02818a",
        0.033,
        "#016c59",
        0.04392069719026562,
        "#014636",
      ],
      "fill-outline-color": "#fe9929",
    },
    layout: {
      visibility: "none",
    },
  },
  "iptu-21rwvx": {
    type: "fill",
    source: "composite",
    id: "iptu-21rwvx",
    slot: "",
    "source-layer": "iptu-21rwvx",
    paint: {},
    layout: {
      visibility: "none",
    },
  },
  "censo-ap4r5h": {
    type: "fill",
    source: "composite",
    id: "censo-ap4r5h",
    paint: {
      "fill-outline-color": "#000000",
    },
    slot: "",
    "source-layer": "censo-ap4r5h",
    layout: {
      visibility: "none",
    },
  },
  "censo_iptu-0z08hq": {
    type: "fill",
    source: "composite",
    id: "censo-iptu-0z08hq",
    slot: "",
    "source-layer": "censo_iptu-0z08hq",
    paint: {},
    layout: {
      visibility: "none",
    },
  },
  "populacao_distritos-5bi4w3": {
    type: "fill",
    source: "composite",
    id: "populacao-distritos-5bi4w3",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "femi_35_a_39"],
        3000,
        "#f7fcb9",
        4500,
        "#addd8e",
        5500,
        "#41ab5d",
        7000,
        "#006837",
        17043,
        "#004529",
      ],
    },
    slot: "",
    "source-layer": "populacao_distritos-5bi4w3",
    layout: {
      visibility: "none",
    },
  },
  "gastos_ubs_distritos-c6rpx4": {
    type: "fill",
    source: "composite",
    id: "gastos-ubs-distritos-c6rpx4",
    slot: "",
    "source-layer": "gastos_ubs_distritos-c6rpx4",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "Gastos UBS per capita (R$)"],
        0,
        "#ece2f0",
        100,
        "#a6bddb",
        200,
        "#3690c0",
        400,
        "#016c59",
        814.7254363613727,
        "#014636",
      ],
    },
    layout: {
      visibility: "none",
    },
  },
  "obitos-47q8aj": {
    type: "fill",
    source: "composite",
    id: "obitos-47q8aj",
    slot: "",
    "source-layer": "obitos-47q8aj",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "Óbitos por Doenças Cerebrovasculares (femi.)"],
        15,
        "#ffeda0",
        55,
        "#feb24c",
        70,
        "#fd8d3c",
        90,
        "#fc4e2a",
        149,
        "#e31a1c",
      ],
    },
    layout: {
      visibility: "none",
    },
  },
  "geoses-b9o06r": {
    type: "fill",
    source: "composite",
    id: "geoses-b9o06r",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "GeoSES (-1 a 1)"],
        -1,
        "#67001f",
        -0.6,
        "#b2182b",
        -0.5,
        "#d6604d",
        -0.4,
        "#f4a582",
        -0.25,
        "#fddbc7",
        -0.1,
        "#f7f7f7",
        0.1,
        "#d1e5f0",
        0.3,
        "#92c5de",
        0.6,
        "#4393c3",
        1,
        "#2166ac",
      ],
      "fill-outline-color": "#f5f5f5",
      "fill-opacity": 0.8,
    },
    slot: "",
    "source-layer": "geoses-b9o06r",
  },
  // ================== END SÃO PAULO ==================
  // ================== START RIO DE JANEIRO ==================
  "quali_pontos-b424eh": {
    type: "circle",
    source: "composite",
    id: "quali-pontos-b424eh",
    paint: {
      "circle-color": [
        "interpolate",
        ["linear"],
        ["get", "PM 10 Máx."],
        237,
        "#cccccc",
        554,
        "#969696",
        871,
        "#636363",
      ],
    },
    slot: "",
    "source-layer": "quali_pontos-b424eh",
    layout: {
      visibility: "none",
    },
  },
  "quali_area-1ci0wo": {
    layout: {
      visibility: "none",
    },
    type: "fill",
    source: "composite",
    id: "quali-area-1ci0wo",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "PM 10 Máx."],
        237,
        "#cccccc",
        554,
        "#969696",
        871,
        "#636363",
      ],
    },
    slot: "",
    "source-layer": "quali_area-1ci0wo",
  },
  "ic_pontos-90vwh4": {
    type: "circle",
    source: "composite",
    id: "ic-pontos-90vwh4",
    paint: {
      "circle-color": [
        "interpolate",
        ["linear"],
        ["get", "Temperatura Máx."],
        33.1,
        "#fed976",
        35,
        "#fd8d3c",
        37,
        "#e31a1c",
        39.4,
        "#800026",
      ],
    },
    slot: "",
    "source-layer": "ic_pontos-90vwh4",
    layout: {
      visibility: "none",
    },
  },
  "ic_areas-3ii8xj": {
    type: "fill",
    source: "composite",
    id: "ic-areas-3ii8xj",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "Temperatura Média"],
        27.1,
        "#ffeda0",
        27.5,
        "#fd8d3c",
        27.9,
        "#bd0026",
      ],
      "fill-opacity": 0.7,
    },
    slot: "",
    "source-layer": "ic_areas-3ii8xj",
  },
  // ================== END RIO DE JANEIRO ==================
  // ================== START BRASIL ==================
  "insper_tarifa_zero_municipios-dwws9i": {
    id: "insper-tarifa-zero-municipios-dwws9i",
    type: "circle",
    paint: {
      "circle-radius": 8,
      "circle-color": [
        "match",
        ["get", "Tipo de Tarifa Zero"],
        ["Integral"],
        "#2166ac",
        ["Parcial"],
        "#80cdc1",
        ["Revogado"],
        "#b2182b",
        "#000000",
      ],
    },
    source: "composite",
    "source-layer": "insper_tarifa_zero_municipios-dwws9i",
  },
  // ================== END BRASIL ==================
};

// Helper function to get layer style by source layer name
export function getLayerStyle(sourceLayer: string): LayerStyle | null {
  return layerStyles[sourceLayer] || null;
}

// Helper function to create a layer configuration with custom style
export function createStyledLayer(
  layerId: string,
  sourceLayer: string,
  _tilesetId: string,
): LayerStyle | null {
  const style = getLayerStyle(sourceLayer);
  if (!style) return null;

  return {
    ...style,
    id: layerId,
    source: layerId, // Use the layerId as source since we're adding it as a vector source
    "source-layer": sourceLayer,
  };
}

// Legend item interface
export interface LegendItem {
  color: string;
  label: string;
  value?: string | number;
}

// Extract legend information from layer paint styles
export function extractLegendFromPaint(
  layerStyle: LayerStyle,
): LegendItem[] | null {
  if (!layerStyle.paint) return null;

  const paint = layerStyle.paint;

  // Handle fill layers
  if (layerStyle.type === "fill" && paint["fill-color"]) {
    return extractLegendFromExpression(paint["fill-color"]);
  }

  // Handle line layers
  if (layerStyle.type === "line" && paint["line-color"]) {
    return extractLegendFromExpression(paint["line-color"]);
  }

  // Handle circle layers
  if (layerStyle.type === "circle" && paint["circle-color"]) {
    return extractLegendFromExpression(paint["circle-color"]);
  }

  return null;
}

// Extract legend from Mapbox expression
function extractLegendFromExpression(expression: unknown): LegendItem[] | null {
  if (!Array.isArray(expression)) {
    // Simple color value
    if (typeof expression === "string") {
      return [{ color: expression, label: "Dados disponíveis" }];
    }
    return null;
  }

  const [expressionType] = expression;

  if (expressionType === "step") {
    return extractFromStepExpression(expression);
  }

  if (expressionType === "interpolate") {
    return extractFromInterpolateExpression(expression);
  }

  if (expressionType === "case") {
    return extractFromCaseExpression(expression);
  }

  if (expressionType === "match") {
    return extractFromMatchExpression(expression);
  }

  return null;
}

// Extract legend from match expression
function extractFromMatchExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = [];
  // Match expression format: ["match", ["get", "property"], value1, output1, value2, output2, ..., fallback]

  if (expression.length < 4) return legendItems;

  // Process pairs of (value, output) starting from index 2
  // The last item is the fallback/default value
  for (let i = 2; i < expression.length - 1; i += 2) {
    const matchValue = expression[i];
    const output = expression[i + 1];

    // Handle arrays of values (multiple values mapping to same output)
    if (Array.isArray(matchValue)) {
      matchValue.forEach((val) => {
        if (typeof output === "string") {
          legendItems.push({
            color: output,
            label: String(val),
            value: String(val),
          });
        }
      });
    } else {
      // Single value
      if (typeof output === "string") {
        legendItems.push({
          color: output,
          label: String(matchValue),
          value: String(matchValue),
        });
      }
    }
  }

  // Add fallback/default color if it exists and no items were added
  const fallbackColor = expression[expression.length - 1];
  if (legendItems.length === 0 && typeof fallbackColor === "string") {
    legendItems.push({
      color: fallbackColor,
      label: "Outros",
      value: "Default",
    });
  }

  return legendItems;
}

// Extract legend from step expression
function extractFromStepExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = [];
  const [, input, fallback, ...stops] = expression;

  // Add first item with fallback color
  if (typeof fallback === "string") {
    legendItems.push({
      color: fallback,
      label: getReadableLabel(input, null),
      value: `< ${stops[0]}`,
    });
  }

  // Process stops (value, color pairs)
  for (let i = 0; i < stops.length; i += 2) {
    const value = stops[i];
    const color = stops[i + 1];
    const nextValue = stops[i + 2];

    if (typeof color === "string") {
      legendItems.push({
        color,
        label: getReadableLabel(input, value),
        value: nextValue ? `${value} - ${nextValue}` : `${value}+`,
      });
    }
  }

  return legendItems;
}

// Extract legend from interpolate expression
function extractFromInterpolateExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = [];
  const [, , input, ...stops] = expression;

  // Process stops (value, color pairs)
  for (let i = 0; i < stops.length; i += 2) {
    const value = stops[i];
    const color = stops[i + 1];

    if (typeof color === "string") {
      legendItems.push({
        color,
        label: getReadableLabel(input, value),
        value:
          typeof value === "string" || typeof value === "number"
            ? value
            : String(value),
      });
    }
  }

  return legendItems;
}

// Extract legend from case expression (for categorical data)
function extractFromCaseExpression(expression: unknown[]): LegendItem[] {
  const legendItems: LegendItem[] = [];

  // Case expressions are more complex, we'll handle specific patterns
  // This is a simplified version for the ciclovia_tipo layer pattern
  const caseConditions = expression.slice(1, -1); // Remove 'case' and fallback

  // Look for match conditions with colors
  for (let i = 0; i < caseConditions.length; i += 2) {
    const condition = caseConditions[i];
    const color = caseConditions[i + 1];

    if (
      Array.isArray(condition) &&
      condition[0] === "match" &&
      typeof color === "string"
    ) {
      const matchValues = condition[3]; // The array of values to match
      if (Array.isArray(matchValues) && matchValues.length > 0) {
        legendItems.push({
          color,
          label: String(matchValues[0]), // Use the first value as label
          value: matchValues.map(String).join(", "),
        });
      }
    }
  }

  // Add fallback color if present
  const fallback = expression[expression.length - 1];
  if (typeof fallback === "string" && fallback.startsWith("#")) {
    legendItems.push({
      color: fallback,
      label: "Outros",
      value: "Outros",
    });
  }

  return legendItems;
}

// Generate readable labels based on property names
function getReadableLabel(input: unknown, value: unknown): string {
  if (!Array.isArray(input) || input[0] !== "get") {
    return value ? `${value}` : "Valor";
  }

  const property = input[1];

  // Map property names to readable labels
  const propertyLabels: Record<string, string> = {
    densidade_residencial: "Densidade Residencial",
    GeoSES: "Índice GeoSES",
    "Renda Domiciliar Média (R$)": "Renda Domiciliar",
    "População (2022)": "População",
    "Número de Passageiros": "Passageiros",
    "Média de Embarques (dia útil)": "Embarques",
    "Total Vítimas (2023)": "Vítimas",
    "Total Feridos": "Feridos",
    tipo: "Tipo",
  };

  const baseLabel = propertyLabels[property] || property;

  if (value === null || value === undefined) {
    return baseLabel;
  }

  // Format value ranges
  if (typeof value === "number") {
    if (property.includes("Renda")) {
      return `${baseLabel}`;
    }
    if (property.includes("População")) {
      return `${baseLabel}`;
    }
    return `${baseLabel}`;
  }

  return baseLabel;
}

// Get legend for a specific layer
export function getLayerLegend(layerId: string): LegendItem[] | null {
  const layerStyle = getLayerStyle(layerId);
  if (!layerStyle) return null;

  return extractLegendFromPaint(layerStyle);
}
