"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
import MapboxMap from "react-map-gl/mapbox";

const GEOSES_LEGEND = [
  { label: "-1", color: "#b2182b" },
  { label: "-0.75", color: "#d6604d" },
  { label: "-0.5", color: "#f4a582" },
  { label: "-0.25", color: "#fddbc7" },
  { label: "0", color: "#f7f7f7" },
  { label: "0.25", color: "#d1e5f0" },
  { label: "0.5", color: "#92c5de" },
  { label: "0.75", color: "#4393c3" },
  { label: "1", color: "#2166ac" },
];

const HIGHLIGHT_GEOJSON = {
  type: "Feature",
  geometry: {
    type: "MultiPolygon",
    coordinates: [
      [
        [
          [-46.6825903, -23.5419420],
          [-46.6761500, -23.5329372],
          [-46.6726579, -23.5352496],
          [-46.6760840, -23.5289438],
          [-46.6823887, -23.5248480],
          [-46.6920547, -23.5385460],
          [-46.6896019, -23.5374108],
          [-46.6825903, -23.5419420],
        ],
      ],
    ],
  },
  properties: {},
};

const JARDIM_HELENA_GEOJSON = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-46.4014107, -23.4808892],
        [-46.4026644, -23.474154],
        [-46.4087537, -23.4675828],
        [-46.4193205, -23.4687328],
        [-46.42935, -23.4692257],
        [-46.4368721, -23.4728398],
        [-46.4415286, -23.4769467],
        [-46.4443942, -23.4835174],
        [-46.4409913, -23.489595],
        [-46.438484, -23.4933729],
        [-46.4343647, -23.4953439],
        [-46.418425, -23.4974791],
        [-46.3994406, -23.4981361],
        [-46.3903066, -23.4946869],
        [-46.3820681, -23.4887738],
        [-46.3725759, -23.4815462],
        [-46.3790234, -23.4700471],
        [-46.3843964, -23.4672543],
        [-46.3888738, -23.4713613],
        [-46.3920976, -23.4748111],
        [-46.4014107, -23.4808892],
      ],
    ],
  },
  properties: {},
};

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollyCards() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Map state - initialize with correct values based on device type
  const [viewState, setViewState] = useState(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      return {
        longitude: -46.610198,
        latitude: -23.680764,
        zoom: 9.0,
        pitch: 0,
        bearing: 0,
      };
    }
    return {
      longitude: -46.657198,
      latitude: -23.680764,
      zoom: 9.3,
      pitch: 0,
      bearing: 0,
    };
  });

  const [legendVisible, setLegendVisible] = useState(true);
  const [legendCollapsed, setLegendCollapsed] = useState(false);

  // Define your travel locations
  const locations = [
    {
      longitude: -46.657198,
      latitude: -23.680764,
      zoom: 9.5,
      pitch: 0,
      bearing: 0,
      top: 0,
      text: (
        <>
          A desigualdade socioeconômica no município de São Paulo pode ser
          visualizada de forma clara por meio do Índice GeoSES, que resume as
          condições socioeconômicas da cidade. O mapa a seguir, com dados de
          2010, revela como fatores como renda, educação e infraestrutura urbana
          estão distribuídos de maneira desigual entre diferentes regiões da
          cidade. As áreas em azul indicam regiões com melhores condições
          socioeconômicas, enquanto as áreas em vermelho representam regiões com
          maior vulnerabilidade.
        </>
      ),
    },
    {
      longitude: -46.7033,
      latitude: -23.5505,
      zoom: 12,
      pitch: 0,
      bearing: 0,
      top: 150,
      text: (
        <>
          Notamos que{" "}
          <strong>
            a desigualdade aumenta progressivamente à medida que nos afastamos
            do centro da cidade
          </strong>
          . Tenha este mapa em mente, pois ele será fundamental para compreender
          a relação com os demais mapas apresentados a seguir.
        </>
      ),
    },
    {
      longitude: -46.4133,
      latitude: -23.5085,
      zoom: 11,
      pitch: 0,
      bearing: 0,
      top: 300,
      text: (
        <>
          A seguir, contaremos a história de Maria, que mora no Jardim Helena,
          um bairro periférico da Zona Leste de São Paulo.{" "}
          <strong>
            Este é um caso hipotético, mas pode ser muito comum na realidade
            brasileira.
          </strong>
        </>
      ),
    },
    {
      longitude: -46.4133,
      latitude: -23.5085,
      zoom: 11.5,
      pitch: 0,
      bearing: 0,
      top: 450,
      text: (
        <>
          O dia começa cedo: às 4h da manhã, Maria já está de pé para preparar o
          café das crianças e tomar um banho rápido antes de sair.{" "}
          <strong>
            Como o tempo é curto, a primeira refeição do dia não é feita como
            deveria.
          </strong>{" "}
          Os alimentos ultraprocessados, como achocolatados e biscoitos
          recheados dão lugar às frutas, aos ovos e ao suco caseiro.
          <br />
          <strong className="mt-4 block">
            {" "}
            Maria tem <strong>Diabetes Mellitus</strong> e precisa medir sua
            glicose diariamente, mas sua rotina é tão corrida que nem sempre ela
            consegue fazer isso como deveria.
          </strong>
        </>
      ),
    },
  ];

  // Animate map transitions on scroll
  useGSAP(() => {
    locations.forEach((location, index) => {
      const cardElement = containerRef.current?.querySelector(
        `[data-card-index="${index}"]`,
      );

      if (cardElement) {
        ScrollTrigger.create({
          trigger: cardElement,
          start: "center center",

          onEnter: () => {
            if (mapRef.current) {
              const map = mapRef.current.getMap();
              map.flyTo({
                center: [location.longitude, location.latitude],
                zoom: location.zoom,
                pitch: location.pitch,
                bearing: location.bearing,
                duration: 2000,
                essential: true,
              });
            }
            toggleHighlightLayer(index === 1);
            if (index < locations.length - 1) {
              toggleJardimHelenaLayer(index === 2);
            }
          },
          onEnterBack: () => {
            if (mapRef.current) {
              const map = mapRef.current.getMap();
              map.flyTo({
                center: [location.longitude, location.latitude],
                zoom: location.zoom,
                pitch: location.pitch,
                bearing: location.bearing,
                duration: 2000,
                essential: true,
              });
            }
            toggleHighlightLayer(index === 1);
            if (index < locations.length - 1) {
              toggleJardimHelenaLayer(index === 2);
            }
          },
        });
      }
    });

    // Separate trigger for geoses-spo visibility on last card
    const lastCardElement = containerRef.current?.querySelector(
      `[data-card-index="${locations.length - 1}"]`,
    );

    const setGeosesOpacity = (opacity: number) => {
      if (!mapRef.current) return;
      const map = mapRef.current.getMap();
      if (map.isStyleLoaded()) {
        map.setPaintProperty("geoses-spo", "fill-opacity", opacity);
      }
    };

    if (lastCardElement) {
      ScrollTrigger.create({
        trigger: lastCardElement,
        start: "center center",
        end: "bottom center",
        onEnter: () => {
          setGeosesOpacity(0);
          toggleJardimHelenaLayer(false);
          setLegendVisible(false);
        },
        onEnterBack: () => {
          setGeosesOpacity(0);
          toggleJardimHelenaLayer(false);
          setLegendVisible(false);
        },
        onLeaveBack: () => {
          setGeosesOpacity(1);
          toggleJardimHelenaLayer(true);
          setLegendVisible(true);
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  const handleMapLoad = () => {
    if (!mapRef.current) return;
    const map = mapRef.current.getMap();

    map.addSource("highlight-area", {
      type: "geojson",
      data: HIGHLIGHT_GEOJSON as GeoJSON.Feature,
    });

    map.addLayer({
      id: "highlight-area-fill",
      type: "fill",
      source: "highlight-area",
      paint: {
        "fill-color": "#ffffff",
        "fill-opacity": 0.33,
      },
      layout: {
        visibility: "none",
      },
    });

    map.addLayer({
      id: "highlight-area-line",
      type: "line",
      source: "highlight-area",
      paint: {
        "line-color": "#000000",
        "line-width": 1.5,
        "line-dasharray": [2, 2],
      },
      layout: {
        visibility: "none",
      },
    });

    const centroStart: [number, number] = [-46.6920547, -23.5385460];
    const centroEnd: [number, number] = [-46.708, -23.5385460];

    map.addSource("centro-line", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: { type: "LineString", coordinates: [centroStart, centroEnd] },
        properties: {},
      } as GeoJSON.Feature,
    });

    map.addLayer({
      id: "centro-line-layer",
      type: "line",
      source: "centro-line",
      paint: {
        "line-color": "#000000",
        "line-width": 1.5,
        "line-dasharray": [2, 2],
      },
      layout: { visibility: "none" },
    });

    map.addSource("centro-label", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: { type: "Point", coordinates: centroEnd },
        properties: { label: "Centro" },
      } as GeoJSON.Feature,
    });

    map.addLayer({
      id: "centro-label-layer",
      type: "symbol",
      source: "centro-label",
      layout: {
        "text-field": [
          "format",
          "Centro",
          {
            "font-scale": 1.0,
            "text-font": ["literal", ["Open Sans Bold", "Arial Unicode MS Bold"]],
            "text-color": "#000000",
          },
          "\n",
          {},
          "Bairro",
          {
            "font-scale": 0.9,
            "text-color": "rgba(0, 0, 0, 0.5)",
          },
        ],
        "text-size": 20,
        "text-anchor": "right",
        "text-justify": "left",
        "text-offset": [-0.4, 0.6],
        "text-allow-overlap": true,
        visibility: "none",
      },
      paint: {
        "text-color": "#000000",
      },
    });

    map.addSource("jardim-helena-area", {
      type: "geojson",
      data: JARDIM_HELENA_GEOJSON as GeoJSON.Feature,
    });

    map.addLayer({
      id: "jardim-helena-fill",
      type: "fill",
      source: "jardim-helena-area",
      paint: { "fill-color": "#ffffff", "fill-opacity": 0.33 },
      layout: { visibility: "none" },
    });

    map.addLayer({
      id: "jardim-helena-line",
      type: "line",
      source: "jardim-helena-area",
      paint: { "line-color": "#000000", "line-width": 1.5, "line-dasharray": [2, 2] },
      layout: { visibility: "none" },
    });

    const jhStart: [number, number] = [-46.4087537, -23.4675828];
    const jhEnd: [number, number] = [-46.4088408, -23.443];

    map.addSource("jardim-helena-vline", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: { type: "LineString", coordinates: [jhStart, jhEnd] },
        properties: {},
      } as GeoJSON.Feature,
    });

    map.addLayer({
      id: "jardim-helena-vline-layer",
      type: "line",
      source: "jardim-helena-vline",
      paint: { "line-color": "#000000", "line-width": 1.5, "line-dasharray": [2, 2] },
      layout: { visibility: "none" },
    });

    map.addSource("jardim-helena-label", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: { type: "Point", coordinates: jhEnd },
        properties: {},
      } as GeoJSON.Feature,
    });

    map.addLayer({
      id: "jardim-helena-label-layer",
      type: "symbol",
      source: "jardim-helena-label",
      layout: {
        "text-field": [
          "format",
          "Jardim Helena",
          {
            "font-scale": 1.0,
            "text-font": ["literal", ["Open Sans Bold", "Arial Unicode MS Bold"]],
            "text-color": "#000000",
          },
          "\n",
          {},
          "Bairro",
          { "font-scale": 0.9, "text-color": "rgba(0, 0, 0, 0.5)" },
        ],
        "text-size": 20,
        "text-anchor": "left",
        "text-justify": "left",
        "text-offset": [0.4, 0.6],
        "text-allow-overlap": true,
        visibility: "none",
      },
      paint: { "text-color": "#000000" },
    });
  };

  const toggleHighlightLayer = (visible: boolean) => {
    if (!mapRef.current) return;
    const map = mapRef.current.getMap();
    const v = visible ? "visible" : "none";
    for (const id of [
      "highlight-area-fill",
      "highlight-area-line",
      "centro-line-layer",
      "centro-label-layer",
    ]) {
      if (map.getLayer(id)) {
        map.setLayoutProperty(id, "visibility", v);
      }
    }
  };

  const toggleJardimHelenaLayer = (visible: boolean) => {
    if (!mapRef.current) return;
    const map = mapRef.current.getMap();
    const v = visible ? "visible" : "none";
    for (const id of [
      "jardim-helena-fill",
      "jardim-helena-line",
      "jardim-helena-vline-layer",
      "jardim-helena-label-layer",
    ]) {
      if (map.getLayer(id)) {
        map.setLayoutProperty(id, "visibility", v);
      }
    }
  };

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!mapboxToken) {
    console.warn("NEXT_PUBLIC_MAPBOX_TOKEN is not set");
  }

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "660vh",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div style={{ position: "sticky", top: 0 }} className="h-screen w-full relative">
        <MapboxMap
          ref={mapRef}
          initialViewState={viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/observatorio-nacional/cmj069yd2009i01qi0jh88i3h"
          mapboxAccessToken={mapboxToken}
          onLoad={handleMapLoad}
          style={{ width: "100%", height: "100%" }}
          interactiveLayerIds={[]}
          dragPan={false}
          dragRotate={false}
          scrollZoom={false}
          keyboard={false}
          doubleClickZoom={false}
        ></MapboxMap>

        <div className={`absolute top-4 right-4 z-20 rounded-lg bg-white/90 shadow-lg backdrop-blur-sm max-w-[220px] text-sm transition-opacity duration-300 ${legendVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <button
            type="button"
            onClick={() => setLegendCollapsed((c) => !c)}
            className="flex w-full items-start justify-between gap-2 p-4 cursor-pointer"
          >
            <div className="text-left">
              <h3 className="font-semibold text-base leading-tight">
                Índice GeoSES
              </h3>
              <p className="text-sm italic text-gray-500 leading-tight mt-0.5">
                Pondera dados censitários de renda, educação, qualidade de vida
                e similares.
              </p>
            </div>
            <ChevronDown
              className={`mt-0.5 w-4 h-4 shrink-0 text-gray-500 transition-transform duration-300 ${legendCollapsed ? "-rotate-90" : ""}`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${legendCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
          >
            <div className="overflow-hidden">
              <ul className="space-y-1 px-4 pb-3">
                {GEOSES_LEGEND.map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <span
                      className="w-5 h-5 rounded-sm shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm leading-tight">{item.label}</span>
                  </li>
                ))}
              </ul>
              <p className="px-4 pb-4 text-xs italic text-gray-500 leading-tight">
                Fonte: Barrozo, L. V. et al. (2020).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        {locations.map((location, index) => (
          <div
            key={`location-${index}-${location.longitude}-${location.latitude}`}
            data-card-index={index}
            className="absolute bg-[#FFFFFF]/90 h-auto w-[80vw] md:w-[460px] border border-[#000000]/20 px-[30px]
    py-[25px]
    lg:px-[32px]
    lg:py-[25px]
    rounded-xl shadow-lg
    "
            style={{ top: `${location.top}vh` }}
          >
            <div className="text-[#000000]">{location.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
