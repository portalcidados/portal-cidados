import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface SectionCoverProps {
  title: string;
  image: StaticImageData | string;
  imageAlt: string;
}

export function SectionCover({ title, image, imageAlt }: SectionCoverProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 grayscale">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 h-full flex items-center pl-6 md:pl-20 lg:pl-24">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{ color: '#E50505' }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}


