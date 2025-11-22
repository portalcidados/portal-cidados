import { Conclusao } from "./components/conclusao";
import Footer from "./components/footer";
import { IlhasDeCalor } from "./components/ilhas-de-calor";
import Intro from "./components/intro";
import { IntroMare } from "./components/intro-mare";
import { QualidadeDoAr } from "./components/qualidade-do-ar";
import mareMapaImage5 from "./assets/mare-mapa-5.png";
import { MapPoint, ScrollMap } from "./components/scroll-map";



export default function Desigualdades() {
  const mapPoints: MapPoint[] = [
    { x: 15, y: 0, name: "Ponto 1", zoom: 2.5 },
    { x: 15, y: 15, name: "Ponto 2", zoom: 2.5 },
    { x: 20, y: 30, name: "Ponto 3", zoom: 2.5 },
    { x: 20, y: 45, name: "Ponto 4", zoom: 2.5 },
    { x: 20, y: 60, name: "Ponto 5", zoom: 2.5 },
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
      <Conclusao />
      <Footer />
    </div>
  );
}