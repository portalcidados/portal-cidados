export type AccidentEventType = "motorcycle" | "other";

export interface AccidentEvent {
  date: string; // "YYYY-MM"
  type: AccidentEventType;
}

export interface PeriodRange {
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM"
}

export interface AvenidaData {
  bairro: string;
  implementation: {
    before: PeriodRange;
    after: PeriodRange;
  };
  events: AccidentEvent[];
}

export const acidentesData: AvenidaData[] = [
  {
    "bairro": "VINTE E TRES MAIO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2022-00" },
      "after": { "start": "2022-00", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-08", "type": "motorcycle" },
      { "date": "2024-02", "type": "other" }
    ]
  },
  {
    "bairro": "BANDEIRANTES",
    "implementation": {
      "before": { "start": "2022-01", "end": "2022-09" },
      "after": { "start": "2022-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-05", "type": "motorcycle" },
      { "date": "2023-09", "type": "other" }
    ]
  },
  {
    "bairro": "AFONSO D ESCRAGNOLTE TAUNAY",
    "implementation": {
      "before": { "start": "2022-01", "end": "2022-09" },
      "after": { "start": "2022-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-10", "type": "motorcycle" },
      { "date": "2024-01", "type": "other" }
    ]
  },
  {
    "bairro": "SANTOS DUMONT",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-09" },
      "after": { "start": "2023-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-03", "type": "motorcycle" },
      { "date": "2023-11", "type": "other" }
    ]
  },
  {
    "bairro": "RUBEM BERTA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-09" },
      "after": { "start": "2023-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-12", "type": "motorcycle" },
      { "date": "2024-04", "type": "other" }
    ]
  },
  {
    "bairro": "PRESTES MAIA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-09" },
      "after": { "start": "2023-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-01", "type": "motorcycle" },
      { "date": "2023-08", "type": "other" }
    ]
  },
  {
    "bairro": "MOREIRA GUIMARAES",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-09" },
      "after": { "start": "2023-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-07", "type": "motorcycle" },
      { "date": "2024-03", "type": "other" }
    ]
  },
  {
    "bairro": "SUMARE",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-10" },
      "after": { "start": "2023-10", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-09", "type": "motorcycle" },
      { "date": "2023-12", "type": "other" }
    ]
  },
  {
    "bairro": "PAULO VI",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-10" },
      "after": { "start": "2023-10", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-02", "type": "motorcycle" },
      { "date": "2024-05", "type": "other" }
    ]
  },
  {
    "bairro": "NACOES UNIDAS",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-10" },
      "after": { "start": "2023-10", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-04", "type": "motorcycle" },
      { "date": "2023-10", "type": "other" }
    ]
  },
  {
    "bairro": "MIGUEL YUNES",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-10" },
      "after": { "start": "2023-10", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-05", "type": "motorcycle" },
      { "date": "2024-06", "type": "other" }
    ]
  },
  {
    "bairro": "ZAKI NARCHI",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-11" },
      "after": { "start": "2023-11", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-11", "type": "motorcycle" },
      { "date": "2023-07", "type": "other" }
    ]
  },
  {
    "bairro": "LUIZ DUMONT VILLARES",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-11" },
      "after": { "start": "2023-11", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-04", "type": "motorcycle" },
      { "date": "2024-08", "type": "other" }
    ]
  },
  {
    "bairro": "JACU PESSEGO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-11" },
      "after": { "start": "2023-11", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-06", "type": "motorcycle" },
      { "date": "2023-09", "type": "other" }
    ]
  },
  {
    "bairro": "FARIA LIMA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-11" },
      "after": { "start": "2023-11", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-01", "type": "motorcycle" },
      { "date": "2024-02", "type": "other" }
    ]
  },
  {
    "bairro": "ESTADO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2023-11" },
      "after": { "start": "2023-11", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-08", "type": "motorcycle" },
      { "date": "2023-11", "type": "other" }
    ]
  },
  {
    "bairro": "JOAO PAULO II",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-02" },
      "after": { "start": "2024-02", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-03", "type": "motorcycle" },
      { "date": "2024-01", "type": "other" }
    ]
  },
  {
    "bairro": "WASHINGTON LUIS",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-03" },
      "after": { "start": "2024-03", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-12", "type": "motorcycle" },
      { "date": "2023-10", "type": "other" }
    ]
  },
  {
    "bairro": "EULALIA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-03" },
      "after": { "start": "2024-03", "end": "2025-06" }
    },
    "events": [
      { "date": "2024-03", "type": "motorcycle" },
      { "date": "2024-03", "type": "other" }
    ]
  },
  {
    "bairro": "AYRTON SENNA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-03" },
      "after": { "start": "2024-03", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-09", "type": "motorcycle" },
      { "date": "2023-12", "type": "other" }
    ]
  },
  {
    "bairro": "GASTAO VIDIGAL",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-04" },
      "after": { "start": "2024-04", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-02", "type": "motorcycle" },
      { "date": "2024-05", "type": "other" }
    ]
  },
  {
    "bairro": "ELISEU ALMEIDA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-04" },
      "after": { "start": "2024-04", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-05", "type": "motorcycle" },
      { "date": "2023-08", "type": "other" }
    ]
  },
  {
    "bairro": "BRAZ LEME",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-04" },
      "after": { "start": "2024-04", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-04", "type": "motorcycle" },
      { "date": "2024-06", "type": "other" }
    ]
  },
  {
    "bairro": "TANCREDO NEVES",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-05" },
      "after": { "start": "2024-05", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-10", "type": "motorcycle" },
      { "date": "2023-07", "type": "other" }
    ]
  },
  {
    "bairro": "MARIA MALUF",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-05" },
      "after": { "start": "2024-05", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-05", "type": "motorcycle" },
      { "date": "2024-08", "type": "other" }
    ]
  },
  {
    "bairro": "LUIZ IGNACIO ANHAIA MELLO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-05" },
      "after": { "start": "2024-05", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-11", "type": "motorcycle" },
      { "date": "2023-09", "type": "other" }
    ]
  },
  {
    "bairro": "ELEVADO JOAO GOULART",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-05" },
      "after": { "start": "2024-05", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-01", "type": "motorcycle" },
      { "date": "2024-04", "type": "other" }
    ]
  },
  {
    "bairro": "CURSINO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-05" },
      "after": { "start": "2024-05", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-06", "type": "motorcycle" },
      { "date": "2023-11", "type": "other" }
    ]
  },
  {
    "bairro": "ALIOMAR BALEIRO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-05" },
      "after": { "start": "2024-05", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-03", "type": "motorcycle" },
      { "date": "2024-02", "type": "other" }
    ]
  },
  {
    "bairro": "VERGUEIRO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-08", "type": "motorcycle" },
      { "date": "2023-10", "type": "other" }
    ]
  },
  {
    "bairro": "SALIM FARAH MALUF EXPRESSA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2024-06", "type": "motorcycle" },
      { "date": "2024-07", "type": "other" }
    ]
  },
  {
    "bairro": "SALIM FARA MALUF",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-04", "type": "motorcycle" },
      { "date": "2023-12", "type": "other" }
    ]
  },
  {
    "bairro": "MARTINELLI",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-02", "type": "motorcycle" },
      { "date": "2024-01", "type": "other" }
    ]
  },
  {
    "bairro": "INAJAR SOUZA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-09", "type": "motorcycle" },
      { "date": "2023-08", "type": "other" }
    ]
  },
  {
    "bairro": "HELDER CAMARA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-04", "type": "motorcycle" },
      { "date": "2024-03", "type": "other" }
    ]
  },
  {
    "bairro": "CARVALHO PINTO",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-12", "type": "motorcycle" },
      { "date": "2023-07", "type": "other" }
    ]
  },
  {
    "bairro": "CALIM EID",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-01", "type": "motorcycle" },
      { "date": "2024-05", "type": "other" }
    ]
  },
  {
    "bairro": "ARICANDUVA EXPRESSA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-07", "type": "motorcycle" },
      { "date": "2023-09", "type": "other" }
    ]
  },
  {
    "bairro": "ARICANDUVA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-06" },
      "after": { "start": "2024-06", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-05", "type": "motorcycle" },
      { "date": "2024-06", "type": "other" }
    ]
  },
  {
    "bairro": "TIRADENTES",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-08" },
      "after": { "start": "2024-08", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-10", "type": "motorcycle" },
      { "date": "2023-11", "type": "other" }
    ]
  },
  {
    "bairro": "TEOTONIO VILELA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-08" },
      "after": { "start": "2024-08", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-03", "type": "motorcycle" },
      { "date": "2024-02", "type": "other" }
    ]
  },
  {
    "bairro": "ESCOLA POLITECNICA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-08" },
      "after": { "start": "2024-08", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-05", "type": "motorcycle" },
      { "date": "2023-10", "type": "other" }
    ]
  },
  {
    "bairro": "BANDEIRAS",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-08" },
      "after": { "start": "2024-08", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-06", "type": "motorcycle" },
      { "date": "2024-04", "type": "other" }
    ]
  },
  {
    "bairro": "SAPETUBA",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-09" },
      "after": { "start": "2024-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-11", "type": "motorcycle" },
      { "date": "2023-12", "type": "other" }
    ]
  },
  {
    "bairro": "RICARDO JAFET",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-09" },
      "after": { "start": "2024-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2023-02", "type": "motorcycle" },
      { "date": "2024-07", "type": "other" }
    ]
  },
  {
    "bairro": "ABRAAO MORAIS",
    "implementation": {
      "before": { "start": "2022-01", "end": "2024-09" },
      "after": { "start": "2024-09", "end": "2025-06" }
    },
    "events": [
      { "date": "2022-09", "type": "motorcycle" },
      { "date": "2023-08", "type": "other" }
    ]
  }
]