'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface SectionCoverProps {
  title: string | React.ReactNode;
  image: StaticImageData | string;
  image2?: StaticImageData | string;
  image3?: StaticImageData | string;
  image4?: StaticImageData | string;
  imageAlt: string;
  grayscaleOpacity?: number;
  titleOpacity?: number;
  currentImageIndex?: number;
  sticky?: boolean;
}

export function SectionCover({
  title,
  image,
  image2,
  image3,
  image4,
  imageAlt,
  grayscaleOpacity = 0,
  titleOpacity = 1,
  currentImageIndex = 0,
  sticky = true
}: SectionCoverProps) {
  const images = [image, image2, image3, image4].filter((img): img is StaticImageData | string => img !== undefined);

  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        position: sticky ? 'sticky' : 'relative',
        top: sticky ? 0 : 'auto',
        zIndex: sticky ? 0 : 'auto',
        WebkitTransform: 'translateZ(0)', // Force hardware acceleration
        transform: 'translateZ(0)',
      }}
    >
      {/* Renderizar todas as imagens com opacidade controlada */}
      {images.map((img, index) => {
        const imageSrc = typeof img === 'string' ? img : img.src;
        return (
        <div
          key={`image-${imageSrc}`}
          className="absolute inset-0"
          style={{
            filter: index === 0 ? `grayscale(${grayscaleOpacity * 100}%)` : 'none',
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'filter 1000ms ease-in-out, opacity 1000ms ease-in-out',
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
        >
          <Image
            src={img}
            alt={imageAlt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
        );
      })}

      {/* Título */}
      <div className="relative z-10 h-full flex items-center pl-6 md:pl-20 lg:pl-24">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{
            color: '#E50505',
            opacity: titleOpacity,
            transition: 'opacity 500ms ease-in-out',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}


