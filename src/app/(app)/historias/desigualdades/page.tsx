import { Conclusao } from "./components/conclusao";
import Footer from "./components/footer";
import { IlhasDeCalor } from "./components/ilhas-de-calor";
import Intro from "./components/intro";
import { IntroMare } from "./components/intro-mare";
import { QualidadeDoAr } from "./components/qualidade-do-ar";
import mareMapaImage5 from "./assets/mare-mapa-5.png";
import mareMapaImage52 from "./assets/mare-mapa-52.png";
import mareMapaImage6 from "./assets/mare-mapa-6.png";
import mareMapaImage62 from "./assets/mare-mapa-62.png";
import { ScrollMap, type MapPoint } from "./components/scroll-map";
import { ScrollMapQualidadeAr } from "./components/scroll-map-qualidade-ar";
import { Solucoes } from "./components/solucoes";



export default function Desigualdades() {
  const mapPoints: MapPoint[] = [
    { x: 15, y: 0, name: "Ponto 1", zoom: 2.5, xMobile: 20, yMobile: 0, zoomMobile: 2.5 },
    { x: 15, y: 15, name: "Ponto 2", zoom: 2.5, xMobile: 35, yMobile: 0, zoomMobile: 2.5 },
    { x: 20, y: 30, name: "Ponto 3", zoom: 2.5, xMobile: 45, yMobile: 30, zoomMobile: 2 },
    { x: 20, y: 45, name: "Ponto 4", zoom: 2.5, xMobile: 10, yMobile: 45, zoomMobile: 2 },
    { x: 15, y: 60, name: "Ponto 5", zoom: 2.5, xMobile: 49, yMobile: 55, zoomMobile: 2 },
  ];
  const mapQualidadeDoArPoints: MapPoint[] = [
    { x: 15, y: 0, name: "Ponto 1", zoom: 2.5, xMobile: 18, yMobile: 0, zoomMobile: 2.5 },
    { x: 15, y: 15, name: "Ponto 2", zoom: 2.5, xMobile: 44.5, yMobile: 5, zoomMobile: 2.5 },
    { x: 20, y: 30, name: "Ponto 3", zoom: 2.5, xMobile: 15, yMobile: 30, zoomMobile: 2.1 },
    { x: 20, y: 30, name: "Ponto 3", zoom: 2.5, xMobile: 50, yMobile: 30, zoomMobile: 2.1 },
    { x: 20, y: 45, name: "Ponto 4", zoom: 2.5, xMobile: 32, yMobile: 45, zoomMobile: 2.1 },
  ];



  return (
    <div className="bg-white!">
      <Intro />
      <IntroMare/>
      <IlhasDeCalor />
      <ScrollMap
        imageSrc={mareMapaImage5.src}
        imageSrcMobile={mareMapaImage52.src}
        points={mapPoints}
      />
      <QualidadeDoAr />
      <ScrollMapQualidadeAr
        imageSrc={mareMapaImage6.src}
        imageSrcMobile={mareMapaImage62.src}
        points={mapQualidadeDoArPoints}
      />
      <Solucoes />
      <Conclusao />
      <Footer />
    </div>
  );
}