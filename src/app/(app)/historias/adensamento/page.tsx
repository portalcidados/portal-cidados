import type { Metadata } from "next";
import AdensamentoStory from "./components/story";

export const metadata: Metadata = {
  title: "Verticalização gera adensamento populacional? | Portal Cidadãos",
  description:
    "Como o Plano Diretor pode estimular uma cidade mais compacta em São Paulo",
};

export default function AdensamentoPage() {
  return <AdensamentoStory />;
}
