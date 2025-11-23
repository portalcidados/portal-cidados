"use client";

import { useState } from "react";
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
import { LoadingScreen } from "./components/loading-screen";

// Import all images to preload
import backgroundImage from "./assets/background.png";
import coverImage from "./assets/cover-image.png";
import mareMapaImage from "./assets/mare-mapa.png";
import mareMapaImage2 from "./assets/mare-mapa-2.png";
import mareMapaImage3 from "./assets/mare-mapa-3.png";
import mareMapaImage4 from "./assets/mare-mapa-4.png";
import imageCard3 from "./assets/image-card-3.png";
import imageCard4 from "./assets/image-card-4.png";
import imageCard5 from "./assets/image-card-5.png";
import imageCard6 from "./assets/image-card-6.png";
import imageCard7 from "./assets/image-card-7.png";
import mapaTemperatura from "./assets/mapa-temperatura.png";
import mapaDeUmidade from "./assets/mapa-de-umidade.png";
import mapaDeCO2 from "./assets/mapa-de-co2.png";
import mapaDeHCHO from "./assets/mapa-de-hcho.png";
import mapaDePM10 from "./assets/mapa-de-pm10.png";
import mapaDePM25 from "./assets/mapa-de-pm25.png";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import s7 from "./assets/s7.png";
import s8 from "./assets/s8.png";
import s9 from "./assets/s9.png";
import s10 from "./assets/s10.png";
import s11 from "./assets/s11.png";
import s12 from "./assets/s12.png";

export default function Desigualdades() {
  const [isLoading, setIsLoading] = useState(true);

  // Collect all image sources for preloading
  const imageSources = [
    backgroundImage.src,
    coverImage.src,
    mareMapaImage.src,
    mareMapaImage2.src,
    mareMapaImage3.src,
    mareMapaImage4.src,
    mareMapaImage5.src,
    mareMapaImage52.src,
    mareMapaImage6.src,
    mareMapaImage62.src,
    imageCard3.src,
    imageCard4.src,
    imageCard5.src,
    imageCard6.src,
    imageCard7.src,
    mapaTemperatura.src,
    mapaDeUmidade.src,
    mapaDeCO2.src,
    mapaDeHCHO.src,
    mapaDePM10.src,
    mapaDePM25.src,
    s1.src,
    s2.src,
    s3.src,
    s4.src,
    s5.src,
    s6.src,
    s7.src,
    s8.src,
    s9.src,
    s10.src,
    s11.src,
    s12.src,
  ];
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
    <>
      {isLoading && (
        <LoadingScreen
          imageSources={imageSources}
          onLoadComplete={() => setIsLoading(false)}
        />
      )}
      <div className={`bg-white! ${isLoading ? 'hidden' : ''}`}>
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
    </>
  );
}