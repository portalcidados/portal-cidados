import { Conclusao } from "./components/conclusao";
import Footer from "./components/footer";
import { IlhasDeCalor } from "./components/ilhas-de-calor";
import Intro from "./components/intro";
import { IntroMare } from "./components/intro-mare";
import { QualidadeDoAr } from "./components/qualidade-do-ar";
import mareMapaImage5 from "./assets/mare-mapa-5.png";
import mareMapaImage6 from "./assets/mare-mapa-6.png";
import { MapPoint, ScrollMap } from "./components/scroll-map";
import { ScrollMapQualidadeAr } from "./components/scroll-map-qualidade-ar";



export default function Desigualdades() {
  const mapPoints: MapPoint[] = [
    { x: 15, y: 0, name: "Ponto 1", zoom: 2.5 },
    { x: 15, y: 15, name: "Ponto 2", zoom: 2.5 },
    { x: 20, y: 30, name: "Ponto 3", zoom: 2.5 },
    { x: 20, y: 45, name: "Ponto 4", zoom: 2.5 },
    { x: 15, y: 60, name: "Ponto 5", zoom: 2.5 },
  ];
  const mapQualidadeDoArPoints: MapPoint[] = [
    { x: 15, y: 0, name: "Ponto 1", zoom: 2.5 },
    { x: 15, y: 15, name: "Ponto 2", zoom: 2.5 },
    { x: 20, y: 30, name: "Ponto 3", zoom: 2.5 },
    { x: 20, y: 45, name: "Ponto 4", zoom: 2.5 },
  ];



  return (
    <div>
      <Intro />
      <IntroMare/>
      <IlhasDeCalor />
      <ScrollMap
        imageSrc={mareMapaImage5.src}
        points={mapPoints}
      />
      <QualidadeDoAr />
      <ScrollMapQualidadeAr
        imageSrc={mareMapaImage6.src}
        points={mapQualidadeDoArPoints}
      />
      <Conclusao />
      <Footer />
    </div>
  );
}