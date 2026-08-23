import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageJsonLd } from "@/components/page-json-ld";
import { StoriesList } from "@/components/StoriesList";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  path: "/historias",
  title: "Histórias",
  description:
    "Reportagens interativas de data storytelling do Portal Cidados sobre políticas urbanas, saúde, mobilidade e habitação nas cidades brasileiras.",
  keywords: ["histórias", "scrollytelling", "reportagens", "narrativas"],
});

export default function Historias() {
  return (
    <div>
      <PageJsonLd
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Histórias", path: "/historias" },
        ]}
      />
      <Header />
      <StoriesList />
    </div>
  );
}
