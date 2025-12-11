"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import houseBackground from "../assets/houseBackground.png";
import houseOne from "../assets/houseOne.png";
import { default as panoramicImage } from "../assets/panoramicImage.png";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HouseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panoramicSliderRef = useRef<HTMLDivElement>(null);
  const [showBackground, setShowBackground] = useState(false);
  const [showPanoramicScroll, setShowPanoramicScroll] = useState(false);

  // Function to get background position based on screen width
  const getBackgroundPosition = () => {
    if (typeof window === "undefined") return "0% center";

    const width = window.innerWidth;

    // 360px ±10px (350-370)
    if (width >= 350 && width <= 370) return "-410px center";
    // 375px ±10px (365-385)
    if (width >= 365 && width <= 385) return "-340px center";
    // 390px ±10px (380-400)
    if (width >= 380 && width <= 400) return "-475px center";
    // 412px ±10px (402-422)
    if (width >= 402 && width <= 422) return "-520px center";
    // 414px ±10px (404-424)
    if (width >= 404 && width <= 424) return "-505px center";
    // 430px ±10px (420-440)
    if (width >= 420 && width <= 440) return "-525px center";
    // 530-768px
    if (width >= 530 && width < 768) return "-300px center";
    // Mobile fallback (< 530px not covered above)
    if (width < 530) return "-400px center";
    // Desktop
    return "0% center";
  };

  // ScrollTrigger for background fade effect and panoramic scroll
  useGSAP(() => {
    const firstCardElement = containerRef.current?.querySelector(
      `[data-card-index="0"]`,
    );
    const secondCardElement = containerRef.current?.querySelector(
      `[data-card-index="1"]`,
    );

    if (firstCardElement) {
      ScrollTrigger.create({
        trigger: firstCardElement,
        start: "bottom center",
        onEnter: () => {
          setShowBackground(true);
        },
        onLeaveBack: () => {
          setShowBackground(false);
        },
      });
    }

    if (secondCardElement) {
      ScrollTrigger.create({
        trigger: secondCardElement,
        start: "bottom center",
        onEnter: () => {
          setShowPanoramicScroll(true);
        },
        onLeaveBack: () => {
          setShowPanoramicScroll(false);
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Separate useGSAP for panoramic scroll animation
  useGSAP(() => {
    if (showPanoramicScroll && panoramicSliderRef.current) {
      const thirdCardElement = containerRef.current?.querySelector(
        `[data-card-index="2"]`,
      );

      if (thirdCardElement) {
        // Animate background-position instead of img transform
        gsap.to(panoramicSliderRef.current, {
          scrollTrigger: {
            trigger: thirdCardElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
          backgroundPosition: "100% center",
          ease: "none",
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [showPanoramicScroll]);

  // Define the text cards content and positions (removed the third card)
  const cards = [
    {
      top: 0,
      text: (
        <>
          Às 5h30, Maria já está no ponto de ônibus. Duas conduções e quase duas
          horas depois, ela chega ao trabalho no centro da cidade.{" "}
          <strong>
            O trajeto diário de Maria ilustra a realidade de milhões de
            brasileiros que vivem nas periferias das grandes cidades.
          </strong>
        </>
      ),
    },
    {
      top: 150,
      text: (
        <>
          Durante o trajeto, Maria aproveita para tomar o café da manhã que não
          conseguiu fazer em casa.{" "}
          <strong>
            Um biscoito recheado e um suco de caixinha substituem uma refeição
            mais nutritiva
          </strong>
          , mas é o que o tempo e o orçamento permitem.
        </>
      ),
    },
    // {
    //   top: 300,
    //   text: (
    //     <>
    //       Ao final do dia, Maria retorna para casa às 19h.{" "}
    //       <strong>
    //         Entre trabalho, transporte e cuidados domésticos, sobra pouco tempo
    //         para cuidar da própria saúde
    //       </strong>
    //       , perpetuando um ciclo que afeta diretamente o controle de sua
    //       diabetes.
    //     </>
    //   ),
    // },
    {
      top: 300,
      text: (
        <>
          Às 5hs, ela pega o ônibus. São duas horas de viagem até o Jardim
          Paulista, um bairro de classe média alta na área central da cidade.
        </>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="h-[600vh]">
      <div
        style={{ position: "sticky", top: 0 }}
        className="h-screen w-full overflow-hidden"
      >
        <div className="min-h-screen w-full bg-white flex items-center justify-center relative overflow-hidden">
          {/* First background image with fade effect */}
          <div
            className="absolute inset-0 bg-cover bg-center overflow-hidden transition-opacity duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${houseBackground.src})`,
              backgroundPosition: getBackgroundPosition(),
              opacity: showBackground && !showPanoramicScroll ? 1 : 0,
            }}
          />

          {/* Panoramic horizontal scroll container */}
          <div
            ref={panoramicSliderRef}
            className="absolute inset-0 bg-cover overflow-hidden transition-opacity "
            style={{
              backgroundImage: `url(${panoramicImage.src})`,
              backgroundPosition: getBackgroundPosition(),
              opacity: showPanoramicScroll ? 1 : 0,
            }}
          />

          {/* Main house image - fades out when background appears */}
          <Image
            src={houseOne}
            alt="House illustration"
            className="max-w-full max-h-full object-contain relative z-10 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: showBackground ? 0 : 1,
            }}
            width={600}
            height={600}
            priority
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            data-card-index={index}
            className="absolute bg-[#FFFFFF]/90 h-auto w-[80vw] md:w-[460px] border border-[#000000]/20 px-[30px]
    py-[25px]
    lg:px-[32px]
    lg:py-[25px]
    rounded-xl shadow-lg
    "
            style={{
              top: `${card.top}vh`,
              opacity: index === 0 || index === 1 ? 0 : 1,
            }}
          >
            <div className="text-[#000000]">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
