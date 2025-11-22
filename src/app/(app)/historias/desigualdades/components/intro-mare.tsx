import mareMapaImage from '../assets/mare-mapa.png';
import { SectionCover } from './section-cover';

export function IntroMare() {
  return (
    <div className="w-full">
      {/* Capa da seção com imagem em escala de cinza e título */}
      <SectionCover
        title="A história da Maré"
        image={mareMapaImage}
        imageAlt="Mapa da Maré"
      />

    </div>
  );
}
