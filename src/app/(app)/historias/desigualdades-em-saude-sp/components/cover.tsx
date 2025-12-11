"use client";

import coverImage from "../assets/cover.png";
import insperLogo from "../../assets/insper-logo.png";
import portalLogo from "../../assets/portal_cidados_logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cover() {
  const [hoveredLogo, setHoveredLogo] = useState<"insper" | "portal" | null>(
    null,
  );

  return (
    <div
      className="h-screen bg-cover flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${coverImage.src})`,
        overflow: "hidden !important",
      }}
    >
      {/* Insper logo/text at the top */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-row gap-5 items-center justify-center w-full max-w-5xl">
          <Link
            href="https://www.insper.edu.br/pt/home"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredLogo("insper")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <Image
              src={insperLogo}
              alt="Insper Logo"
              width={88}
              height={33}
              className={`h-auto brightness-0 invert transition-all duration-300 ${
                hoveredLogo === "insper"
                  ? "w-20 sm:w-24"
                  : hoveredLogo === "portal"
                    ? "w-16 sm:w-20"
                    : "w-18 sm:w-22"
              }`}
              priority
            />
          </Link>
          <Link
            href="/"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredLogo("portal")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <Image
              src={portalLogo}
              alt="Portal Cidadãos Logo"
              width={100}
              height={33}
              className={`h-auto brightness-0 invert transition-all duration-300 ${
                hoveredLogo === "portal"
                  ? "w-22 sm:w-32"
                  : hoveredLogo === "insper"
                    ? "w-18 sm:w-28"
                    : "w-20 sm:w-30"
              }`}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main content centered */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 text-center max-w-[900px]">
        <h2 className="text-white text-lg md:text-2xl lg:text-2xl font-bold max-w-4xl mb-6">
          Retrato das Desigualdades em Saúde: Riscos de Mortalidade e
          Determinantes Socioeconômicos no Município de São Paulo
        </h2>

        <p className="text-white text-md md:text-lg font-normal max-w-[620px] leading-relaxed">
          Estudo desenvolvido por Paulo H. Nascimento Saldiva, Ligia Vizeu
          Barrozo, Catia Martinez Minto, Sara Lopes de Moraes e Paulo Afonso de
          André.
        </p>
      </div>
    </div>
  );
}
