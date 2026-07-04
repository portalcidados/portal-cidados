"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  Bike,
  Bus,
  CarFront,
  CarTaxiFront,
  Caravan,
  Motorbike,
  PersonStanding,
  TramFront,
  TrainFront,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { brandColor } from "../constants";

export interface ChartCategory {
  label: string;
  icon: string;
  value: number;
}

export interface ChartData {
  id: string;
  title: string;
  subtitle: string;
  source: string;
  yMax: number;
  step: number;
  categories: ChartCategory[];
}

const ICONS: Record<string, LucideIcon> = {
  car: CarFront,
  bus: Bus,
  tram: TramFront,
  train: TrainFront,
  taxi: CarTaxiFront,
  motorbike: Motorbike,
  bike: Bike,
  truck: Truck,
  pedestrian: PersonStanding,
  van: Caravan,
};

// Quantos ícones por linha em cada coluna (fidelidade de altura = número de linhas).
function perRowFor(icon: string): number {
  return icon === "car" ? 3 : 2;
}

// Ticks do eixo Y sempre de 10 em 10%.
const TICK_STEP = 10;

function formatPercent(value: number): string {
  return `${value.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;
}

export function PictogramChart({ chart }: { chart: ChartData }) {
  const plotRef = useRef<HTMLDivElement>(null);
  const [plotHeight, setPlotHeight] = useState(0);

  useLayoutEffect(() => {
    const el = plotRef.current;
    if (!el) return;
    const update = () => setPlotHeight(el.clientHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const numRows = Math.max(1, Math.round(chart.yMax / chart.step));
  // Altura de linha inteira e par: mantém o alinhamento (0% x 1ª linha) crível
  // pixel a pixel, sem jitter sub-pixel durante o scroll.
  const rawRowHeight = plotHeight > 0 ? plotHeight / numRows : 24;
  const rowHeight = Math.max(2, Math.floor(rawRowHeight / 2) * 2);
  const iconSize = Math.max(10, Math.min(40, Math.round(rowHeight * 0.85)));
  const pxPerPercent = rowHeight / chart.step;

  const ticks: number[] = [];
  for (let t = 0; t <= chart.yMax + 0.001; t += TICK_STEP) ticks.push(t);

  return (
    <div className="flex h-full w-full flex-col font-inter" style={{ color: brandColor }}>
      {/* Cabeçalho com altura fixa: título/subtítulo não afetam a geometria do
          gráfico (o plot ocupa sempre a mesma área em todos os gráficos). */}
      <div className="h-40 shrink-0 overflow-hidden md:h-44" data-pico-header>
        <h2 className="text-base font-bold leading-snug md:text-lg">
          {chart.title}
        </h2>
        <p className="mt-2 text-xs leading-snug opacity-90 md:text-sm">
          {chart.subtitle}
        </p>
        <p className="mt-2 text-[10px] leading-snug opacity-70 md:text-xs">
          <strong>Fonte:</strong> {chart.source}
        </p>
      </div>

      {/* Espaço extra entre cabeçalho e a área do gráfico */}
      {/* <div className="h-4 shrink-0 md:h-6" /> */}

      {/* Área do gráfico: eixo Y + colunas com espaçamento igual entre todos */}
      <div ref={plotRef} className="flex min-h-0 flex-1 justify-between">
        {/* Eixo Y (0% alinhado ao centro da primeira linha de ícones) */}
        <div className="relative w-8 shrink-0 md:w-9">
          {plotHeight > 0 &&
            ticks.map((t) => (
              <span
                key={t}
                className="absolute right-1 text-[10px] tabular-nums opacity-70 md:text-xs"
                style={{
                  bottom: rowHeight / 2 + t * pxPerPercent,
                  transform: "translateY(50%)",
                }}
              >
                {t}%
              </span>
            ))}
        </div>

        {chart.categories.map((cat) => {
          const Icon = ICONS[cat.icon] ?? CarFront;
          const perRow = perRowFor(cat.icon);
          const rows = Math.max(1, Math.round(cat.value / chart.step));

          return (
            <div
              key={cat.label}
              className="relative flex h-full flex-col items-center justify-end"
              style={{ minWidth: 0 }}
            >
              {/* Label colado imediatamente acima da coluna */}
              <div className="mb-1 flex flex-col items-center text-center leading-tight">
                <span className="text-[13px] font-bold tabular-nums md:text-lg">
                  {formatPercent(cat.value)}
                </span>
                <span className="max-w-[9ch] text-[9px] opacity-80 md:text-[12px]">
                  {cat.label}
                </span>
              </div>

              {/* Coluna de ícones (cresce de baixo para cima, sem clip) */}
              <div className="flex flex-col-reverse items-center">
                {Array.from({ length: rows }).map((_, r) => (
                  <div
                    key={`${cat.label}-row-${r}`}
                    className="flex items-center justify-center gap-0.5"
                    style={{ height: rowHeight }}
                  >
                    {Array.from({ length: perRow }).map((__, c) => (
                      <span
                        key={`${cat.label}-${r}-${c}`}
                        className="pico-icon inline-flex"
                        data-row={r}
                      >
                        <Icon size={iconSize} strokeWidth={1.6} />
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Label do eixo X abaixo da pilha (posição absoluta: não desloca
                  os ícones nem a linha do 0%). */}
              <span className="absolute left-1/2 top-full mt-1 max-w-[10ch] -translate-x-1/2 text-center text-[11px] leading-tight opacity-80 md:text-[14px]">
                {cat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
