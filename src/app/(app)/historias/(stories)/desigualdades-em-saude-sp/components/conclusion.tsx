"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import textBackground from "../assets/text-background.png";
import metro from "../assets/metro.png";

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Conclusion() {
  // Refs para os cards que serão animados
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const bonusTrackSrc = "/historias/desigualdades-em-saude-sp/sample.mp3";
  const captionsSrc =
    "/historias/desigualdades-em-saude-sp/bonus-placeholder.vtt";

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onEnded = () => setIsPlaying(false);
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    el.addEventListener("ended", onEnded);
    el.addEventListener("pause", onPause);
    el.addEventListener("play", onPlay);

    return () => {
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("play", onPlay);
    };
  }, []);

  useLayoutEffect(() => {
    const cards = [
      { ref: card1Ref, delay: 0 },
      { ref: card2Ref, delay: 0.15 },
      { ref: card3Ref, delay: 0.3 },
    ];

    // Configurar estado inicial dos cards
    cards.forEach(({ ref }) => {
      if (ref.current) {
        gsap.set(ref.current, {
          opacity: 0,
          y: 50,
        });
      }
    });

    // Criar animações com ScrollTrigger
    const animations = cards.map(({ ref, delay }) => {
      if (!ref.current) return null;

      return gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          immediateRender: false,
        },
      });
    });

    // Verificar se elementos já estão visíveis ao montar
    const checkInitialState = () => {
      cards.forEach(({ ref, delay }) => {
        if (!ref.current || !sectionRef.current) return;

        const rect = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const triggerPoint = viewportHeight * 0.85;

        if (rect.top < triggerPoint && rect.bottom > 0) {
          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            ease: "power3.out",
          });
        }
      });
    };

    // Aguardar ScrollTrigger estar pronto
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        checkInitialState();
      });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      animations.forEach((anim) => {
        anim?.scrollTrigger?.kill();
        anim?.kill();
      });
    };
  }, []);

  const toggleBonusAudio = () => {
    const el = audioRef.current;
    if (!el) return;

    if (el.paused) {
      void el.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      el.pause();
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-auto bg-center bg-repeat flex flex-col items-center pt-30 overflow-x-hidden"
      style={{
        backgroundImage: `url(${textBackground.src})`,
      }}
    >
      <div className="max-w-xl rounded-2xl px-4 md:px-8 ">
        <div className="space-y-6 text-black leading-relaxed">
          <p>
            O estudo detalhado da distribuição espacial de algumas doenças e
            problemas de saúde em São Paulo traz importantes contribuições para
            o manejo e a prevenção das condições investigadas.{" "}
            <span className="font-semibold">
              Com base nos dados levantados, através de novos estudos, é
              possível:
            </span>
          </p>

          <ul className="space-y-2 ml-3">
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                <span className="font-semibold">
                  Identificar as áreas onde as ações
                </span>{" "}
                do sistema de
                <span className="font-semibold">
                  {" "}
                  saúde devem ser priorizadas.
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                Entender como os fatores sociais e o ambiente urbano afetam o
                curso das doenças, seja de forma positiva ou negativa.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                <span className="font-semibold">
                  Mapear políticas locais que trouxeram melhorias na saúde
                </span>{" "}
                e qualidade de vida, mesmo em cenários adversos.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                Reconhecer e adaptar medidas eficazes de melhoria no sistema de
                saúde que podem ser aplicadas em outras regiões da cidade.
              </span>
            </li>
          </ul>

          <p className="pb-10">
            Além de abrir novas possibilidades para estudar e entender questões
            de saúde no contexto urbano, o estudo apresenta propostas práticas
            para enfrentar as desigualdades no acesso aos cuidados médicos.
          </p>

          <p className="pb-10">
            Apesar do panorama desafiador, o setor de saúde brasileiro tem
            alcançado avanços significativos através do Sistema Único de Saúde
            (SUS), que tem desempenhado um papel decisivo na melhoria de
            indicadores, como a redução expressiva da mortalidade infantil e o
            aumento da expectativa de vida nas últimas décadas. Esses resultados
            evidenciam a importância do SUS como o principal meio de acesso
            cuidados integrais de saúde para grande parte da população.
          </p>

          <p>
            <span className="font-semibold">Propostas</span>
          </p>

          <div className="space-y-4 pb-16">
            <div
              ref={card1Ref}
              className="bg-white p-8 backdrop-blur-sm"
            >
              <h3 className="font-semibold mb-3">
                UBS no sistema de transporte
              </h3>
              <p className="leading-relaxed">
                Instalação de Unidades Básicas de Saúde (UBSs) em pontos
                estratégicos do sistema de transporte público de alta
                capacidade, funcionando no mesmo horário dessas redes. Essa
                ideia busca facilitar o acesso aos serviços de saúde para
                populações que vivem em áreas periféricas ou que enfrentam
                longos trajetos diários. Ao integrar planejamento urbano e
                saúde, a proposta cria uma rede de serviços mais eficiente e
                acessível, reforçando a importância de aproximar os cuidados
                médicos das pessoas que mais precisam.
              </p>
            </div>

            <div
              ref={card2Ref}
              className="bg-white p-8 backdrop-blur-sm"
            >
              <h3 className="font-semibold mb-3">
                Reeducação alimentar na infância
              </h3>
              <p className="leading-relaxed">
                Ela desempenha um papel essencial na prevenção do diabetes
                mellitus na vida adulta, promovendo hábitos saudáveis desde
                cedo, controlando o consumo de açúcares e ultra processados e
                incentivando uma alimentação equilibrada. Estudos mostram que
                escolhas nutricionais adequadas na infância reduzem
                significativamente o risco de resistência à insulina, obesidade
                e outras condições.
              </p>
            </div>

            <div
              ref={card3Ref}
              className="bg-white p-8 backdrop-blur-sm"
            >
              <h3 className="font-semibold mb-3">
                Criação do Observatório de Saúde Urbana
              </h3>
              <p className="leading-relaxed">
                Criação de um centro capaz de produzir inovação em tecnologias
                em saúde, baseadas na transversalidade, complexidade e
                interdependência dos determinantes da saúde humana. O
                Observatório de Saúde Urbana está pensado levando em conta a
                parceria com agentes públicos de diferentes áreas do município
                de São Paulo, como, por exemplo, a Secretaria da Saúde (SMS), o
                Tribunal de Contas do Município (TCM), além das demais
                Secretarias potencialmente envolvidas (Segurança, Assistência
                Social, Educação etc.).
              </p>
            </div>
          </div>

          <p>
            <span className="font-semibold">Bônus</span>
          </p>
          <p className="mb-16">
            Ouça uma canção inspirada na história, composta por um dos
            colaboradores do Insper, que transforma os dados e relatos da
            reportagem em versos e rimas.
          </p>

          <audio
            ref={audioRef}
            src={bonusTrackSrc}
            preload="metadata"
            className="sr-only"
          >
            <track
              kind="captions"
              srcLang="pt-BR"
              label="Português"
              src={captionsSrc}
            />
          </audio>

          <button
            type="button"
            className="flex items-center gap-2 bg-black text-white px-6 py-3  hover:bg-black/80 hover:cursor-pointer transition-colors duration-200"
            onClick={toggleBonusAudio}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
          >
            {isPlaying ? (
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <title>Pausar</title>
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <title>Reproduzir</title>
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
            {isPlaying ? "Pausar" : "Play"}
          </button>
        </div>
      </div>

      {/* Imagem metro ocupando toda a largura da tela */}
      <div className="w-full  mt-0">
        <Image
          src={metro}
          alt="Metro"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
