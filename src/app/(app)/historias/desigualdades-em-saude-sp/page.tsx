"use client";

import { Suspense, lazy } from "react";
import HouseSection from "./components/house-section";
import Loading from "./components/loading";

// Lazy load all components
const Conclusion = lazy(() => import("./components/conclusion"));
const Cover = lazy(() => import("./components/cover"));
const DiabetesMellitus = lazy(() => import("./components/diabetes-mellitus"));
const DiseasesIntroduction = lazy(
  () => import("./components/diseases-introduction"),
);
const DoencasCerebrovasculares = lazy(
  () => import("./components/doencas-cerebro-vasculares"),
);
const DoencasIsquemicasDoCoracao = lazy(
  () => import("./components/doencas-isquemicas-do-coracao"),
);
const Footer = lazy(() => import("./components/footer"));
const MortalidadeMaterna = lazy(
  () => import("./components/mortalidade-materna"),
);
const ScrollyCards = lazy(() => import("./components/scrolly-cards"));
const SupermercadoSection = lazy(
  () => import("./components/supermercado-section"),
);
const Text = lazy(() => import("./components/text"));

export default function DesigualdadesEmSaudeSp() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-white">
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
      </div>
    </Suspense>
  );
}
