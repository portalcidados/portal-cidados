export interface MapViewState {
  center: [number, number]; // [lng, lat] for Mapbox
  zoom: number;
  pitch?: number;
  bearing?: number;
  duration?: number; // in seconds
}

export interface ChapterMapConfig {
  desktop: MapViewState;
  mobile: MapViewState;
}

export type LegendType =
  | "density-pop"
  | "density-const"
  | "eetu"
  | "informal"
  | null;

export const MAP_POSITIONS: Record<string, ChapterMapConfig> = {
  capa: {
    desktop: { center: [-46.6333, -23.5505], zoom: 14, duration: 6 },
    mobile: { center: [-46.6333, -23.5505], zoom: 14, duration: 6 },
  },
  mapa_zero: {
    desktop: { center: [-46.6383, -23.565], zoom: 11.0, duration: 6 },
    mobile: { center: [-46.6383, -23.565], zoom: 11.0, duration: 6 },
  },
  mapa_um: {
    desktop: { center: [-46.8583, -23.695], zoom: 10.2, duration: 4 },
    mobile: { center: [-46.6383, -23.565], zoom: 10.2, duration: 4 },
  },
  mapa_mais_um: {
    desktop: { center: [-46.6883, -23.545], zoom: 13.0, duration: 4 },
    mobile: { center: [-46.6483, -23.545], zoom: 13.0, duration: 4 },
  },
  mapa_dois: {
    desktop: { center: [-46.7351, -23.6156], zoom: 15.0, duration: 4 },
    mobile: { center: [-46.7259, -23.6159], zoom: 15.0, duration: 4 },
  },
  mapa_dois_helio: {
    desktop: { center: [-46.6028, -23.6109], zoom: 15.0, duration: 4 },
    mobile: { center: [-46.5926, -23.61], zoom: 15.0, duration: 4 },
  },
  mapa_tres: {
    desktop: { center: [-46.7633, -23.5705], zoom: 11.5, duration: 4 },
    mobile: { center: [-46.6383, -23.665], zoom: 10.0, duration: 4 },
  },
  mapa_quatro: {
    desktop: { center: [-46.7633, -23.5705], zoom: 11.5, duration: 4 },
    mobile: { center: [-46.6383, -23.665], zoom: 10.0, duration: 4 },
  },
  cep_capitulo: {
    desktop: { center: [-46.6537, -23.5641], zoom: 17.0, duration: 2 },
    mobile: { center: [-46.6383, -23.665], zoom: 10.0, duration: 2 },
  },
  mapa_cinco: {
    desktop: { center: [-46.7633, -23.5705], zoom: 11.5, duration: 4 },
    mobile: { center: [-46.6383, -23.665], zoom: 10.0, duration: 4 },
  },
  mapa_seis: {
    desktop: { center: [-46.7533, -23.5705], zoom: 11.0, duration: 4 },
    mobile: { center: [-46.6383, -23.665], zoom: 10.0, duration: 4 },
  },
  mapa_sete: {
    desktop: { center: [-46.8583, -23.695], zoom: 10.2, duration: 4 },
    mobile: { center: [-46.6383, -23.665], zoom: 10.0, duration: 4 },
  },
};

export const MAP_FLY_TRIGGERS: {
  id: string;
  mapKey?: string;
  legend: LegendType;
}[] = [
  { id: "capa", mapKey: "capa", legend: null },
  { id: "mapa_capitulo", legend: null },
  { id: "mapa_zero", mapKey: "mapa_zero", legend: "density-pop" },
  { id: "mapa_um", mapKey: "mapa_um", legend: "density-pop" },
  { id: "mapa_mais_um", mapKey: "mapa_mais_um", legend: "density-pop" },
  { id: "mapa_dois", mapKey: "mapa_dois", legend: "density-pop" },
  { id: "mapa_dois_helio", mapKey: "mapa_dois_helio", legend: "density-pop" },
  { id: "mapa_tres", mapKey: "mapa_tres", legend: "informal" },
  { id: "mapa_quatro", mapKey: "mapa_quatro", legend: "eetu" },
  { id: "cep_capitulo", mapKey: "cep_capitulo", legend: "eetu" },
  { id: "mapa_cinco", mapKey: "mapa_cinco", legend: "eetu" },
  { id: "cep_capitulo3a", legend: null },
  { id: "cep_blank2", legend: null },
  { id: "mapa_seis", mapKey: "mapa_seis", legend: "density-const" },
  { id: "cep_capitulo5", legend: null },
  { id: "cep_capitulo6b", legend: null },
  { id: "mapa_sete", mapKey: "mapa_sete", legend: "density-pop" },
  { id: "cep_capitulo7", legend: null },
  { id: "capitulo_final", legend: null },
  { id: "creditos", legend: null },
];

export const IMAGE_FADE_INS: Record<string, string[]> = {
  cep_capitulo: ["overlay-1"],
  cep_capitulo2: ["overlay-2"],
  cep_capitulo3a: ["overlay-3a"],
  cep_capitulo3b: ["overlay-3b"],
  cep_capitulo4: ["overlay-4"],
  cep_capitulo4b: ["overlay-4b"],
  cep_capitulo5: ["overlay-5"],
  cep_capitulo6: ["overlay-6"],
  cep_capitulo7: ["overlay-7"],
  cep_capitulo8: ["overlay-8"],
  cep_capitulo9: ["overlay-9"],
  cep_capitulo10: ["overlay-10"],
  cep_capitulo11: ["overlay-11"],
};

export const IMAGE_FADE_OUTS: Record<string, string[]> = {
  cep_blank1: ["overlay-1", "overlay-2"],
  cep_blank2: ["overlay-3a", "overlay-3b", "overlay-4", "overlay-4b"],
  cep_blank3: ["overlay-5", "overlay-6"],
};
