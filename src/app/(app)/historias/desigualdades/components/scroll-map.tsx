"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import mapaTemperatura from "../assets/mapa-temperatura.png";

gsap.registerPlugin(ScrollTrigger);

export type MapPoint = {
  x: number; // porcentagem 0–100
  y: number; // porcentagem 0–100
  name: string;
  zoom: number; // ex: 2, 3...
};

type ScrollMapProps = {
  imageSrc: string;
  points: MapPoint[];
};

export const ScrollMap: React.FC<ScrollMapProps> = ({ imageSrc, points }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const mapWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const mapWrapper = mapWrapperRef.current;
    const img = imageRef.current;
    const sticky = stickyRef.current;

    if (!container || !mapWrapper || !img || !sticky || points.length === 0) {
      return;
    }

    // Função que cria o timeline com base nos tamanhos atuais
    const setupAnimation = () => {
      // Limpa qualquer ScrollTrigger prévio
      ScrollTrigger.getAll().forEach((st) => {
        st.kill();
      });
      gsap.killTweensOf(mapWrapper);

      const imgRect = img.getBoundingClientRect();
      const stickyRect = sticky.getBoundingClientRect();

      // Para cada ponto, calculamos o translateX/Y necessário para centralizá-lo.
      const transforms = points.map((p) => {
        const zoom = p.zoom || 2;
        // posição do ponto na imagem em pixels
        const px = (p.x / 100) * imgRect.width;
        const py = (p.y / 100) * imgRect.height;
        // centro da área visível
        const cx = stickyRect.width / 2;
        const cy = stickyRect.height / 2;
        // após o zoom, o ponto vai para px * zoom, etc.
        // Queremos que esse ponto fique no centro (cx, cy)
        const x = cx - px * zoom;
        // Offset vertical para descer a imagem (valor positivo desce)
        const verticalOffset = 150; // Ajuste este valor conforme necessário
        const y = cy - py * zoom + verticalOffset;
        return { x, y, scale: zoom };
      });

      const totalSteps = points.length + 1; // +1 para o zoom out final
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + window.innerHeight * totalSteps,
          scrub: true,
          pin: sticky,
          anticipatePin: 1,
        },
      });

      // estado inicial: mapa "inteiro"
      tl.set(mapWrapper, {
        x: 0,
        y: 0,
        scale: 1,
      });

      // transição para cada ponto
      transforms.forEach((t) => {
        tl.to(
          mapWrapper,
          {
            x: t.x,
            y: t.y,
            scale: t.scale,
            ease: "power2.inOut",
            duration: 1,
          },
          ">+0.2" // pequeno intervalo entre passos
        );
      });

      // passo final: volta para o zoom original
      tl.to(
        mapWrapper,
        {
          x: 0,
          y: 0,
          scale: 1,
          ease: "power2.inOut",
          duration: 1,
        },
        ">+0.2"
      );
    };

    // Espera a imagem carregar para ter medidas corretas
    if (img.complete) {
      setupAnimation();
    } else {
      img.onload = () => setupAnimation();
    }

    // Recalcula em resize
    const handleResize = () => {
      setupAnimation();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => {
        st.kill();
      });
    };
  }, [points]);

  return (
    <>
    <section
      style={{
        position: "relative",
        height: `${(points.length + 1) * 116.5}vh`, // altura total de scroll
      }}
      ref={containerRef}
    >
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Wrapper que recebe o transform (x, y, scale) */}
        <div
          ref={mapWrapperRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            willChange: "transform",
          }}
        >
          <img
            ref={imageRef}
            src={imageSrc}
            alt="Mapa"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
    <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col justify-start items-start px-4">
        <Zoom>
          <img src={mapaTemperatura.src} alt="Mapa" className="max-h-140 object-fit" />
        </Zoom>
          <h2 className="text-md font-bold mt-2.5">Mapa de temperatura da Maré</h2>
          <p className="text-md text-gray-500">Produzido por Respira Maré</p>
        </div>
      </div>
    </>
  );
};

