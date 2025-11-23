'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mareMapaImage from '../assets/mare-mapa.png';
import mareMapaImage2 from '../assets/mare-mapa-2.png';
import mareMapaImage3 from '../assets/mare-mapa-3.png';
import mareMapaImage4 from '../assets/mare-mapa-4.png';
import imageCard3 from '../assets/image-card-3.png';
import imageCard4 from '../assets/image-card-4.png';
import imageCard5 from '../assets/image-card-5.png';
import imageCard6 from '../assets/image-card-6.png';
import { SectionCover } from './section-cover';
import Image from 'next/image';
import imageCard7 from '../assets/image-card-7.png';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ScrollCardProps {
  children?: React.ReactNode;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

function ScrollCard({ children, cardRef }: ScrollCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !children) return;

    // Animação de entrada do card usando GSAP
    const animation = gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [cardRef, children]);

  return (
    <div 
      ref={cardRef} 
      className={children ? "flex items-center justify-center p-6 md:p-8 lg:p-10" : ""}
      style={{ minHeight: '200vh' }}
    >
      {children ? (
        <div
          ref={contentRef}
          className="bg-white/70 backdrop-blur-sm text-black p-6 md:p-8 lg:p-10 max-w-2xl shadow-lg rounded-lg w-full"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function IntroMare() {
  const [grayscaleOpacity, setGrayscaleOpacity] = useState(1);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);
  const card8Ref = useRef<HTMLDivElement>(null);
  const card9Ref = useRef<HTMLDivElement>(null);
  const card10Ref = useRef<HTMLDivElement>(null);
  const card11Ref = useRef<HTMLDivElement>(null);
  const card12Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let triggers: ScrollTrigger[] = [];
    let timeoutId: NodeJS.Timeout;

    // Função para criar todos os triggers
    const createTriggers = () => {
      // Verificar se todos os refs estão disponíveis
      const refs = [
        card0Ref, card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref,
        card8Ref, card9Ref, card10Ref, card11Ref, card12Ref
      ];
      
      const allRefsReady = refs.every(ref => ref.current !== null);
      
      if (!allRefsReady) {
        return;
      }

      // Limpar triggers anteriores se existirem
      for (const trigger of triggers) {
        trigger.kill();
      }
      triggers = [];

      // Card 0: Remove grayscale e título
      triggers.push(ScrollTrigger.create({
        trigger: card0Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setGrayscaleOpacity(0);
          setTitleOpacity(0);
        },
        onLeaveBack: () => {
          setGrayscaleOpacity(1);
          setTitleOpacity(1);
        },
      }));

      // Card 1: Troca para imagem 2 (mare-mapa-2.png)
      triggers.push(ScrollTrigger.create({
        trigger: card1Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(1),
        onLeaveBack: () => setCurrentImageIndex(0),
      }));

      // Card 2: Mantém imagem 2
      triggers.push(ScrollTrigger.create({
        trigger: card2Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(1),
      }));

      // Card 3: Volta para imagem 1 (mare-mapa.png)
      triggers.push(ScrollTrigger.create({
        trigger: card3Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(0),
        onLeaveBack: () => setCurrentImageIndex(1),
      }));

      // Card 8: Trigger invisível para trocar para imagem 3 (mare-mapa-3.png)
      triggers.push(ScrollTrigger.create({
        trigger: card8Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(2),
        onLeaveBack: () => setCurrentImageIndex(0),
      }));

      // Card 4: Volta para imagem 1 (mare-mapa.png)
      triggers.push(ScrollTrigger.create({
        trigger: card4Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(0),
        onLeaveBack: () => setCurrentImageIndex(2),
      }));

      // Card 5: Volta para imagem 1 (mare-mapa.png)
      triggers.push(ScrollTrigger.create({
        trigger: card5Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(0),
        onLeaveBack: () => setCurrentImageIndex(2),
      }));

      // Card 6: Troca para imagem 4 (mare-mapa-4.png) - trigger invisível
      triggers.push(ScrollTrigger.create({
        trigger: card6Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(3),
        onLeaveBack: () => setCurrentImageIndex(0),
      }));

      // Card 9: Trigger invisível para voltar para imagem 1 (mare-mapa.png)
      triggers.push(ScrollTrigger.create({
        trigger: card9Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(0),
        onLeaveBack: () => setCurrentImageIndex(3),
      }));

      // Card 10: Mantém imagem 1 (mare-mapa.png)
      triggers.push(ScrollTrigger.create({
        trigger: card10Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(0),
      }));

      // Card 11: Mantém imagem 1 (mare-mapa.png)
      triggers.push(ScrollTrigger.create({
        trigger: card11Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(0),
      }));

      // Card 12: Mantém imagem 1 (mare-mapa.png)
      triggers.push(ScrollTrigger.create({
        trigger: card12Ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentImageIndex(0),
      }));

      // Atualizar ScrollTrigger após criar todos os triggers
      ScrollTrigger.refresh();
    };

    // Função para tentar criar os triggers
    const tryCreateTriggers = () => {
      const refs = [
        card0Ref, card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref,
        card8Ref, card9Ref, card10Ref, card11Ref, card12Ref
      ];
      
      const allRefsReady = refs.every(ref => ref.current !== null);
      
      if (allRefsReady) {
        createTriggers();
        return true;
      }
      return false;
    };

    // Tentar criar imediatamente
    if (!tryCreateTriggers()) {
      // Se não funcionou, aguardar um pouco
      timeoutId = setTimeout(() => {
        if (!tryCreateTriggers()) {
          // Se ainda não funcionou, tentar após o load completo
          window.addEventListener('load', () => {
            tryCreateTriggers();
          }, { once: true });
        }
      }, 100);
    }

    // Handler para resize
    const handleResize = () => {
      // Usar debounce para evitar muitas chamadas
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        createTriggers();
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      // Aguardar um pouco após mudança de orientação
      setTimeout(() => {
        createTriggers();
      }, 300);
    });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      // Matar todos os ScrollTriggers
      for (const trigger of triggers) {
        trigger.kill();
      }
      triggers = [];
    };
  }, []);

  return (
    <div className="w-full">
      {/* Capa da seção com imagem sticky e controles de estado */}
      <SectionCover
        title={
          <>
            A história da <strong>Maré</strong>
          </>
        }
        image={mareMapaImage}
        image2={mareMapaImage2}
        image3={mareMapaImage3}
        image4={mareMapaImage4}
        imageAlt="Mapa da Maré"
        grayscaleOpacity={grayscaleOpacity}
        titleOpacity={titleOpacity}
        currentImageIndex={currentImageIndex}
      />

      {/* Card 0: Primeiro card de texto */}
      <ScrollCard cardRef={card0Ref}>
        <div>
          <p className="text-base md:text-lg leading-relaxed">
          A Maré é <strong>um dos maiores conjunto de favelas do Brasil</strong>, e sua formação reflete um longo processo de ocupação urbana ligado à migração, remoções e políticas habitacionais do Estado.
          </p>
        </div>
      </ScrollCard>

      {/* Card 1: Card invisível (apenas trigger para trocar para imagem 2) */}
      <ScrollCard cardRef={card1Ref} />

      {/* Card 2: Segundo card de texto (com imagem 2) */}
      <ScrollCard cardRef={card2Ref}>
        <div>
          <p className="text-base md:text-lg leading-relaxed">
          A região onde hoje está a Maré era, até o início do século XX, uma área alagadiça e pantanosa, parte da Baía de Guanabara. Sua ocupação começou por volta da década de 1940, quando pescadores e trabalhadores de baixa renda passaram a construir <strong>moradias sobre palafitas</strong>.
          </p>
          <Image src={imageCard3} alt="Mapa da Maré" className="w-full h-full object-cover pt-10" />
        </div>
      </ScrollCard>

      {/* Card 3: Terceiro card de texto (volta para imagem 1) */}
      <ScrollCard cardRef={card3Ref}>
        <div>
          <h2 className="text-base md:text-lg font-bold mb-2">Os Primeiros Anos (1940-1960)</h2>
          <p className="text-base md:text-lg leading-relaxed">
          A primeira favela da região foi a <strong>Morro do Timbau</strong>, que surgiu nos anos 1940. Nos anos seguintes, outras ocupações espontâneas surgiram, muitas delas sobre terrenos alagadiços, impulsionadas pelo crescimento da cidade e a necessidade de moradia acessível para trabalhadores urbanos
          </p>
          <Image src={imageCard4} alt="Mapa da Maré" className="w-full h-full object-cover pt-10" />
        </div>
      </ScrollCard>

      {/* Card 8: Card invisível (apenas trigger para trocar para imagem 3) */}
      <ScrollCard cardRef={card8Ref} />

      {/* Card 4: Quarto card de texto (volta para imagem 1) */}
      <ScrollCard cardRef={card4Ref}>
        <div>
          <h2 className="text-base md:text-lg font-bold mb-2">Remoções e Construção de Conjuntos Habitacionais (1960-1980)</h2>
          <p className="text-base md:text-lg leading-relaxed">
          A partir dos anos 1960, a expansão da Maré foi acelerada pelo processo de remoção de favelas de outras partes do Rio de Janeiro, principalmente da Zona Sul. O governo reassentou muitas dessas famílias em conjuntos habitacionais construídos na Maré. 
          </p>
          <Image src={imageCard5} alt="Mapa da Maré" className="w-full h-full object-cover pt-10" />
        </div>
      </ScrollCard>

      {/* Card 5: Quinto card de texto (volta para imagem 1) */}
      <ScrollCard cardRef={card5Ref}>
        <div>
          <p className="text-base md:text-lg leading-relaxed">
          Ao longo das décadas de 1960 e 1980, foram erguidos nove conjuntos habitacionais pelo Estado, como a <strong>Vila do João</strong> e a <strong>Vila dos Pinheiros</strong>. Esses projetos tinham a intenção de organizar a ocupação da região, mas a falta de infraestrutura urbana adequada manteve problemas como saneamento deficiente, ausência de áreas verdes e pouca ventilação.
          </p>
          <Image src={imageCard6} alt="Mapa da Maré" className="w-full h-full object-cover pt-10" />
        </div>
      </ScrollCard>

      {/* Card 6: Card invisível (apenas trigger para trocar para imagem 4) */}
      <ScrollCard cardRef={card6Ref} />

      {/* Card 9: Card invisível (apenas trigger para voltar para imagem 1) */}
      <ScrollCard cardRef={card9Ref} />

      {/* Card 10: Consolidação e Expansão (1980-2000) */}
      <ScrollCard cardRef={card10Ref}>
        <div>
          <h2 className="text-base md:text-lg font-bold mb-2">Consolidação e Expansão (1980-2000)</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Mesmo com a presença dos conjuntos habitacionais, a autoconstrução continuou a expandir a Maré, resultando no crescimento de novas favelas no entorno. Nos anos 1990, o conjunto já estava consolidado, <strong> abrigando mais de 100 mil</strong> pessoas. Em 1994, a Avenida Brasil, que passa ao lado da Maré, foi elevada, separando ainda mais a comunidade do restante da cidade.
          </p>
          <Image src={imageCard7} alt="Mapa da Maré" className="w-full h-full object-cover pt-10" />
        </div>
      </ScrollCard>

      {/* Card 11: Atualmente, a Maré */}
      <ScrollCard cardRef={card11Ref}>
        <div>
          <p className="text-base md:text-lg leading-relaxed">
            Atualmente, <strong> a Maré é formada por 15 favelas e abriga cerca de 140 mil moradores</strong>. Apesar de seu tamanho e importância, o território ainda enfrenta desafios urbanos significativos, como ilhas de calor, poluição do ar e falta de infraestrutura adequada.
          </p>
        </div>
      </ScrollCard>

      {/* Card 12: O fato de quase metade das favelas */}
      <ScrollCard cardRef={card12Ref}>
        <div>
          <p className="text-base md:text-lg leading-relaxed">
            O fato de quase metade das favelas da Maré ter sido construída pelo poder público desmonta o argumento de que os problemas ambientais são exclusivamente consequência da <strong>autoconstrução </strong>desordenada.
          </p>
        </div>
      </ScrollCard>
    </div>
  );
}
