"use client";

import { Suspense } from "react";
import HouseSection from "./components/house-section";
import Loading from "./components/loading";
import Conclusion from "./components/conclusion";
import Cover from "./components/cover";
import DiabetesMellitus from "./components/diabetes-mellitus";
import DiseasesIntroduction from "./components/diseases-introduction";
import DoencasCerebrovasculares from "./components/doencas-cerebro-vasculares";
import DoencasIsquemicasDoCoracao from "./components/doencas-isquemicas-do-coracao";
import Footer from "./components/footer";
import MortalidadeMaterna from "./components/mortalidade-materna";
import ScrollyCards from "./components/scrolly-cards";
import SupermercadoSection from "./components/supermercado-section";
import Text from "./components/text";

export default function DesigualdadesEmSaudeSp() {
  return (
    <Suspense fallback={<Loading />}>
      <Cover />
      <Text />
      <ScrollyCards />
      <HouseSection />
      <SupermercadoSection />
      <DiseasesIntroduction />
      <DiabetesMellitus />
      <DoencasCerebrovasculares />
      <DoencasIsquemicasDoCoracao />
      <MortalidadeMaterna />
      <Conclusion />
      <Footer />
    </Suspense>
  );
}
