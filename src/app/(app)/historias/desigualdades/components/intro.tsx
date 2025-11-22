"use client";

import { Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import insperLogo from "../../assets/insper-logo.png";
import portalLogo from "../../assets/portal_cidados_logo.png";
import backgroundImage from "../assets/background.png";
import coverImage from "../assets/cover-image.png";

export default function Intro() {
  const handleShare = async () => {
    const shareData = {
      title: "Diagnóstico sobre ilhas de calor e qualidade do ar na Maré",
      text: "Confira este diagnóstico sobre ilhas de calor e qualidade do ar na Maré, realizado pela Redes da Maré.",
      url: window.location.href,
    };

    try {
      // Verifica se o navegador suporta a Web Share API
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copia o link para a área de transferência
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
      }
    } catch (err) {
      // Usuário cancelou o compartilhamento ou ocorreu erro
      if ((err as Error).name !== "AbortError") {
        console.error("Erro ao compartilhar:", err);
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "top left",
          backgroundSize: `${Math.round(backgroundImage.width / 2)}px ${Math.round(backgroundImage.height / 2)}px`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-8 md:px-12 lg:px-24">
        {/* Logo Insper */}
        <div className="flex flex-row gap-5 mb-8">
          <Link
            href="https://www.insper.edu.br/pt/home"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src={insperLogo}
              alt="Insper Logo"
              width={88}
              height={33}
              className="h-auto w-18 sm:w-22"
              priority
            />
          </Link>
          <Link
            href="/"
            className="cursor-pointer"
          >
            <Image
              src={portalLogo}
              alt="Portal Cidadãos Logo"
              width={100}
              height={33}
              className="h-auto w-20 sm:w-30"
              priority
            />
          </Link>
        </div>

        {/* Linha de Separação */}
        <div className="w-full max-w-5xl border-t border-[#cccccc] mb-12"></div>

        {/* Hero Section com Cover Image */}
        <div className="flex flex-col items-center max-w-4xl mb-10 w-full">
          {/* Cover Image com conteúdo sobreposto */}
          <div className="relative w-full aspect-video mb-8">
            <Image
              src={coverImage}
              alt="Diagnóstico sobre ilhas de calor e qualidade do ar na Maré"
              fill
              className="object-cover"
              priority
            />

            {/* Conteúdo centralizado sobre a imagem */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-0 sm:px-6 md:px-8 lg:px-12">
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#2c2c2c] mb-2 sm:mb-3 leading-tight text-center max-w-2xl px-2">
                Diagnóstico sobre ilhas de calor e qualidade do ar na Maré
              </h1>

              <p className="text-[#3a3a3a] text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 text-center px-2">
                Carolina Dias, Luna Arouca, Rian de Queiroz e Shyrlei Rosendo
              </p>

              {/* Botões de compartilhamento */}
              <div className="flex gap-2 justify-center">
                <button
                type="button"
                  onClick={handleShare}
                  className="flex items-center justify-center w-10 h-10 bg-transparent border-[#3A3434] hover:bg-[#f0f0f0] text-[#333333] rounded-full transition-all duration-300 shadow-lg border"
                  aria-label="Compartilhar"
                >
                  <Share2 size={18} />
                </button>

                {/* <button
                  onClick={handleDownload}
                  className="flex items-center justify-center w-10 h-10 bg-transparent hover:bg-[#f0f0f0] text-[#333333] rounded-full transition-all duration-300 shadow-lg border border-[#3A3434]"
                  aria-label="Download"
                >
                  <Wh size={18} />
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="w-full max-w-5xl border-t border-[#cccccc] mb-20 lg:mb-40"></div>

        {/* Texto Introdutório */}
        <div className="max-w-3xl flex flex-col gap-10 mb-40">
          <p className="text-[#2c2c2c] text-base md:text-lg leading-relaxed text-justify">
            No coração da Zona Norte do Rio de Janeiro, entre o vai e vem das
            vias expressas e o calor do asfalto, um estudo revelou um problema
            invisível a olho nu, mas sentido todos os dias pelos moradores da
            Maré. O projeto Respira Maré, conduzido pela Redes da Maré, mapeou a
            qualidade do ar e o impacto das ilhas de calor em uma das maiores
            favelas do Brasil. O objetivo? Trazer à tona dados que até então não
            apareciam nos mapas ambientais da cidade e pressionar por políticas
            públicas que considerem a realidade dos territórios periféricos.
          </p>
          <p className="text-[#2c2c2c] text-base md:text-lg leading-relaxed text-justify">
            As medições feitas ao longo de sete meses mostram que a temperatura
            na Maré pode ser até 2°C mais quente do que nas áreas vizinhas, um
            fenômeno chamado de ilha de calor urbana. O calor não se dissipa nem
            à noite: em algumas regiões, a temperatura cai menos de 2°C depois
            do pôr do sol, tornando o sono difícil e aumentando o uso de
            ventiladores e ar-condicionado.{" "}
          </p>
          <p className="text-[#2c2c2c] text-base md:text-lg leading-relaxed text-justify">
            Além do calor, os moradores da Maré enfrentam outro desafio
            invisível: a poluição do ar. O estudo monitorou cinco poluentes
            atmosféricos e revelou índices alarmantes. Os dados não deixam
            dúvidas: o ar que se respira na Maré afeta diretamente a saúde dos
            moradores. Doenças respiratórias como asma e bronquite são agravadas
            pela poluição.
          </p>
          <p className="text-[#2c2c2c] text-base md:text-lg leading-relaxed text-justify">
            Para uma compreensão mais profunda dessa realidade, no próximo
            capítulo trazemos um breve resumo da história da Maré, desde as
            primeiras ocupações até sua consolidação como um dos maiores
            conjunto de favelas do Brasil.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}