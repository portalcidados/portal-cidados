import type { Metadata } from "next";
import portalLogo from "../../assets/portal_cidados_logo.png";
import { ContinueScrollingHint } from "../desigualdades-em-saude-sp/components/continue-scrolling-hint";
import { ScrollToTopIcon } from "../ilhas-de-calor/components/scroll-to-top-icon";
import { ScrollProgressBar } from "../ilhas-de-calor/components/scroll-progress-bar";
import Footer from "./components/footer";
import Intro from "./components/intro";
import { PreloadWrapper } from "./components/preload-wrapper";
import { brandColor, coverVideo } from "./constants";
import Context from "./components/context";
import FactorsSection from "./components/factors-section";
import MediaSection from "./components/media-section";
import PictogramSection from "./components/pictogram-section";

export const metadata: Metadata = {
  title: "A Faixa Azul tornou o trânsito mais seguro? | Portal Cidadãos",
  description:
    "Avaliação do impacto das faixas dedicadas à motociclistas nos sinistros em São Paulo",
};

const assetsToPreload = ["/arq_futuro_icon.png", portalLogo.src];

export default function FaixaAzulPage() {
  return (
    <PreloadWrapper imageSources={assetsToPreload} videoSrc={coverVideo}>
      <div className="bg-white!">
        <ScrollProgressBar barColor={brandColor} />
        <Intro />
        <Context />
        <PictogramSection />
        <MediaSection />
        <FactorsSection />
        <Footer />
        <ScrollToTopIcon />
        <ContinueScrollingHint />
      </div>
    </PreloadWrapper>
  );
}
