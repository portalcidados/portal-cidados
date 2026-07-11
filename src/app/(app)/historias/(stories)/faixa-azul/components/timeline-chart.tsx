"use client";

import { brandColor } from "../constants";
import {
  acidentesData,
  type AccidentEvent,
  type AvenidaData,
} from "../data/acidentes-faixa-azul-data";

/** Domínio temporal alinhado ao subtítulo (jan/2021 – abr/2025). */
const DOMAIN_START = "2021-01";
const DOMAIN_END = "2025-04";
/** Referência: 2021 entra no domínio das barras, mas não no eixo. */
const YEAR_TICKS = [2022, 2023, 2024, 2025] as const;

const COLOR_BEFORE = "#D3D3D3";
const COLOR_AFTER = "#666666";
const COLOR_MOTORCYCLE = "#BF2242";
const COLOR_OTHER = "#C9AF80";
const COLOR_GRID = "#E5E5E5";

function monthToIndex(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

const DOMAIN_START_IDX = monthToIndex(DOMAIN_START);
const DOMAIN_END_IDX = monthToIndex(DOMAIN_END);
const DOMAIN_SPAN = DOMAIN_END_IDX - DOMAIN_START_IDX;

function toPercent(ym: string): number {
  const idx = monthToIndex(ym);
  const clamped = Math.min(Math.max(idx, DOMAIN_START_IDX), DOMAIN_END_IDX);
  return ((clamped - DOMAIN_START_IDX) / DOMAIN_SPAN) * 100;
}

/** Fim do mês YYYY-MM (= início do mês seguinte), p.ex. 2023-06 → linha 2023-07. */
function toPercentMonthEnd(ym: string): number {
  const idx = monthToIndex(ym) + 1;
  const clamped = Math.min(Math.max(idx, DOMAIN_START_IDX), DOMAIN_END_IDX);
  return ((clamped - DOMAIN_START_IDX) / DOMAIN_SPAN) * 100;
}

function yearToPercent(year: number): number {
  return toPercent(`${year}-01`);
}

function buildSemesterMarks(): string[] {
  const marks: string[] = [];
  let idx = DOMAIN_START_IDX;
  while (idx <= DOMAIN_END_IDX) {
    const year = Math.floor(idx / 12);
    const month = (idx % 12) + 1;
    const ym = `${year}-${String(month).padStart(2, "0")}`;
    // Sem linha no início do domínio (2021-01); mantém o semestre 2021-07.
    if (ym !== DOMAIN_START) {
      marks.push(ym);
    }
    idx += 6;
  }
  return marks;
}

const SEMESTER_MARKS = buildSemesterMarks();

function formatMonthLabel(ym: string): string {
  const [y, m] = ym.split("-");
  const months = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];
  return `${months[Number(m) - 1]}/${y}`;
}

function eventLabel(type: AccidentEvent["type"]): string {
  return type === "motorcycle" ? "Motocicleta" : "Outro modo";
}

const MARKER_SIZE = 8;

function EventMarker({
  event,
  avenue,
}: {
  event: AccidentEvent;
  avenue: string;
}) {
  const left = toPercent(event.date);
  const isMotorcycle = event.type === "motorcycle";

  return (
    <span
      role="img"
      className="pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 leading-none"
      style={{
        left: `${left}%`,
        width: MARKER_SIZE,
        height: MARKER_SIZE,
        overflow: "visible",
      }}
      aria-label={`${avenue}: ${eventLabel(event.type)}, ${formatMonthLabel(event.date)}`}
    >
      {isMotorcycle ? <MotorcycleIcon /> : <OtherIcon />}
    </span>
  );
}

function AvenueBar({ row }: { row: AvenidaData }) {
  const split = toPercentMonthEnd(row.implementation.after.start);

  return (
    <div className="relative min-h-0 flex-1 overflow-visible">
      {/* Barra: altura reduzida; marcadores ficam na linha inteira para não clipar */}
      <div className="pointer-events-none absolute inset-y-[14%] left-0 right-0 md:inset-y-[8%]">
        <div className="absolute inset-0 flex overflow-hidden rounded-[1px]">
          <div
            className="h-full"
            style={{ width: `${split}%`, backgroundColor: COLOR_BEFORE }}
          />
          <div
            className="h-full"
            style={{
              width: `${100 - split}%`,
              backgroundColor: COLOR_AFTER,
            }}
          />
        </div>
      </div>
      {row.events.map((event) => (
        <EventMarker
          key={`${row.bairro}-${event.date}-${event.type}`}
          event={event}
          avenue={row.bairro}
        />
      ))}
    </div>
  );
}

function MotorcycleIcon({ size = MARKER_SIZE }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${MARKER_SIZE} ${MARKER_SIZE}`}
      className="shrink-0 overflow-visible"
      aria-hidden="true"
    >
      <circle
        cx={MARKER_SIZE / 2}
        cy={MARKER_SIZE / 2}
        r={MARKER_SIZE / 2 - 0.75}
        fill={COLOR_MOTORCYCLE}
        stroke="#FFFFFF"
        strokeWidth={1.5}
      />
    </svg>
  );
}

function OtherIcon({ size = MARKER_SIZE }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${MARKER_SIZE} ${MARKER_SIZE}`}
      className="shrink-0 overflow-visible"
      aria-hidden="true"
    >
      <rect
        x={0.75}
        y={0.75}
        width={MARKER_SIZE - 1.5}
        height={MARKER_SIZE - 1.5}
        fill={COLOR_OTHER}
        stroke="#FFFFFF"
        strokeWidth={1.5}
      />
    </svg>
  );
}

function ChartLegend({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-5 text-xs leading-snug ${className}`}
      style={{ color: brandColor }}
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span
            className="size-3 shrink-0"
            style={{ backgroundColor: COLOR_BEFORE }}
            aria-hidden="true"
          />
          <span>Antes da implementação</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="size-3 shrink-0"
            style={{ backgroundColor: COLOR_AFTER }}
            aria-hidden="true"
          />
          <span>Depois da implementação</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="font-semibold">Modo de transporte da vítima</p>
        <div className="flex items-center gap-2">
          <OtherIcon />
          <span>Outros</span>
        </div>
        <div className="flex items-center gap-2">
          <MotorcycleIcon />
          <span>Motocicleta</span>
        </div>
      </div>
    </div>
  );
}

/** Legenda mobile: uma faixa única sob o eixo, sem roubar altura do gráfico. */
function MobileChartLegend() {
  return (
    <ul
      className="mt-1.5 flex shrink-0 list-none flex-wrap items-center justify-center gap-x-3 gap-y-1 p-0 text-[8px] leading-none md:hidden"
      style={{ color: brandColor }}
      aria-label="Legenda do gráfico"
    >
      <li className="inline-flex items-center gap-1">
        <span
          className="h-1.5 w-2.5 shrink-0"
          style={{ backgroundColor: COLOR_BEFORE }}
          aria-hidden="true"
        />
        Antes
      </li>
      <li className="inline-flex items-center gap-1">
        <span
          className="h-1.5 w-2.5 shrink-0"
          style={{ backgroundColor: COLOR_AFTER }}
          aria-hidden="true"
        />
        Depois
      </li>
      <li className="text-neutral-300" aria-hidden="true">
        |
      </li>
      <li className="inline-flex items-center gap-1">
        <OtherIcon />
        Outros
      </li>
      <li className="inline-flex items-center gap-1">
        <MotorcycleIcon />
        Motocicleta
      </li>
    </ul>
  );
}

export function TimelineChart() {
  return (
    <div
      className="flex h-full w-full font-inter"
      style={{ color: brandColor }}
    >
      {/* Colunas flex-1 espelham o gráfico no centro; a legenda vive só na margem direita. */}
      <div className="hidden min-w-0 flex-1 md:block" aria-hidden="true" />

      <div className="mx-auto flex h-full w-full max-w-2xl min-w-0 flex-col md:mx-0 md:max-w-3xl 2xl:max-w-4xl">
        <div className="flex min-h-0 flex-1 gap-1 overflow-visible md:gap-2.5">
          <div className="flex w-19 shrink-0 flex-col gap-1.5 overflow-visible md:w-44 md:gap-1.5">
            {acidentesData.map((row) => (
              <div
                key={row.bairro}
                className="flex min-h-0 flex-1 items-center justify-end overflow-visible whitespace-nowrap text-right text-[7.5px] leading-none md:text-[11px]"
                title={row.bairro}
              >
                {row.bairro}
              </div>
            ))}
          </div>

          <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
            <div
              className="pointer-events-none absolute -top-1.5 -bottom-1.5 right-0 left-0 z-0 md:-top-2 md:-bottom-2"
              aria-hidden="true"
            >
              {SEMESTER_MARKS.map((ym) => (
                <div
                  key={ym}
                  className="absolute inset-y-0 w-px"
                  style={{
                    left: `${toPercent(ym)}%`,
                    backgroundColor: COLOR_GRID,
                  }}
                />
              ))}
            </div>

            <div className="relative z-1 flex min-h-0 flex-1 flex-col gap-1.5 overflow-visible md:gap-1.5">
              {acidentesData.map((row) => (
                <AvenueBar key={row.bairro} row={row} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-1 flex shrink-0 gap-1 md:gap-2.5">
          <div className="w-19 shrink-0 md:w-44" aria-hidden="true" />
          <div className="relative h-3.5 min-w-0 flex-1 md:h-5">
            {YEAR_TICKS.map((year) => (
              <span
                key={year}
                className="absolute top-0 -translate-x-1/2 text-[8px] tabular-nums opacity-70 md:text-[10px]"
                style={{ left: `${yearToPercent(year)}%` }}
              >
                {year}
              </span>
            ))}
          </div>
        </div>

        <MobileChartLegend />
      </div>

      <div className="hidden min-w-0 flex-1 items-center justify-start pl-4 md:flex lg:pl-6">
        <ChartLegend className="w-max max-w-44 lg:max-w-48" />
      </div>
    </div>
  );
}
