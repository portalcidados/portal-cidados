import type { Metadata } from "next";
import AdensamentoStory from "./components/story";
import { ScrollToTopIcon } from "../ilhas-de-calor/components/scroll-to-top-icon";
import { ContinueScrollingHint } from "../desigualdades-em-saude-sp/components/continue-scrolling-hint";

export const metadata: Metadata = {
  title: "Verticalização gera adensamento populacional? | Portal Cidadãos",
  description:
    "Como o Plano Diretor pode estimular uma cidade mais compacta em São Paulo",
};

export default function AdensamentoPage() {
  return (
    <>
      <AdensamentoStory />
      <ScrollToTopIcon />
      <ContinueScrollingHint />
    </>
  );
}
