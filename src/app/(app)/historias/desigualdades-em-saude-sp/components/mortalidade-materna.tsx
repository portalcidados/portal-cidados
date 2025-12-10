"use client";

import chart1 from "../assets/chart1.png";
import chart2 from "../assets/chart2.png";
import chart3 from "../assets/chart3.png";
import icon1 from "../assets/icon1.png";
import Image from "next/image";

export default function MortalidadeMaterna() {
  return (
    <div className="min-h-screen bg-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Title and Text Content */}
          <div>
            {/* Main Title */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-semibold text-gray-800 mb-8">
                Mortalidade
                <br />
                Materna
              </h1>
            </div>

            {/* Text Content */}
            <div className="space-y-12">
              {/* Tendências por gênero */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Distribuição populacional
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 flex justify-center">
                      <Image
                        src={icon1}
                        alt="Ícone mulher"
                        className="max-w-full h-auto"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-[#000000] leading-[140%] lg:text-xl md:text-xl text-lg flex-1">
                      Maior percentual de mulheres em idade fértil nas regiões
                      sul, leste e norte.
                    </p>
                  </div>
                </div>
              </section>

              {/* Faixas etárias */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Redução de mortalidade materna
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 flex justify-center">
                      <Image
                        src={icon1}
                        alt="Ícone jovens"
                        className="max-w-full h-auto"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-[#000000] leading-[140%] lg:text-xl md:text-xl text-lg flex-1">
                      Redução entre 2010 e 2012, mas aumento expressivo após
                      2013, atingindo 61,8 em 2019.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 flex justify-center">
                      <Image
                        src={icon1}
                        alt="Ícone idosos"
                        className="max-w-full h-auto"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-[#000000] leading-[140%] lg:text-xl md:text-xl text-lg flex-1">
                      Concentrada em faixas etárias de 20 a 39 anos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Influência socioeconômica */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Influência socioeconômica
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 flex justify-center">
                      <Image
                        src={icon1}
                        alt="Ícone socioeconômico"
                        className="max-w-full h-auto"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-[#000000] leading-[140%] lg:text-xl md:text-xl text-lg flex-1">
                      Diretas: complicações obstétricas durante gravidez, parto
                      ou puerpério.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 flex justify-center">
                      <Image
                        src={icon1}
                        alt="Ícone distrito"
                        className="max-w-full h-auto"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-[#000000] leading-[140%] lg:text-xl md:text-xl text-lg flex-1">
                      Indiretas: doenças pré-existentes agravadas pela gestação.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column - Charts */}
          <div className="space-y-8">
            {/* Top Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg p-4">
                <Image
                  src={chart1}
                  alt="Gráfico temporal - Mulheres"
                  className="w-full h-auto rounded"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <div className="rounded-lg p-4">
                <Image
                  src={chart2}
                  alt="Gráfico temporal - Homens"
                  className="w-full h-auto rounded"
                  width={400}
                  height={300}
                  priority
                />
              </div>
            </div>

            {/* Caption for top charts */}
            <p className="text-sm text-[#000000] text-center px-4">
              <strong>Figura 4:</strong> Tendência temporal do risco relativo de
              mortalidade prematura por Diabetes Mellitus, de 2010 a 2019,
              município de São Paulo: a) mulheres, b) homens. A área em cinza
              indica o intervalo de credibilidade
            </p>

            {/* Bottom Charts Row - Maps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4">
                <Image
                  src={chart3}
                  alt="Mapa - Mulheres"
                  className="w-full"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <div className="p-4">
                <Image
                  src={chart3}
                  alt="Mapa - Homens"
                  className="w-full"
                  width={400}
                  height={300}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
