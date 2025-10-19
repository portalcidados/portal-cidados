import { Header } from "@/components/Header";
import { StoriesSection } from "@/components/StoriesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-left pt-4">
          {/* Título principal */}
          <h1 className="text-6xl md:text-7xl font-gt-ultra font-normal lg:text-8xl text-foreground leading-14 mb-6 mt-6">
            CIDADES &M DADOS
          </h1>

          {/* Parágrafo descritivo */}
          <p className="text-md text-foreground font-gt-ultra-fine mb-4 max-w-4xl">
            Criado pelo Centro de Estudos das Cidades – Laboratório Arq.Futuro
            do Insper, o Portal Cidados apresenta nossos estudos e pesquisas por
            meio de narrativas baseadas em dados, aproximando a produção
            científica da sociedade e do debate público sobre as políticas
            urbanas. Nosso objetivo é tornar os dados sobre as cidades mais
            compreensíveis e acessíveis, contribuindo para a construção de
            políticas públicas baseadas em evidências.
          </p>

          {/* Botões */}
          <div className="flex flex-row gap-4">
            <Link
              target="_blank"
              href="https://observatorio-nacional.vercel.app/projetos/geoportal"
            >
              <Button
                variant="default"
                size="lg"
                className="text-foreground bg-secondary hover:bg-secondary/80 justify-between group"
              >
                Mapas
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/catalogo-de-dados">
              <Button
                variant="default"
                size="lg"
                className="text-foreground bg-secondary hover:bg-secondary/80 justify-between group"
              >
                Catálogo de dados
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Stories Section */}
      <StoriesSection />
    </div>
  );
}
