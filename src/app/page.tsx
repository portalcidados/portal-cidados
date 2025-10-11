import { Header } from "@/components/Header";
import { StoriesSection } from "@/components/StoriesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4">
        <div className="text-left">
          {/* Título principal */}
          <h1 className="text-6xl md:text-7xl font-gt-ultra font-normal lg:text-8xl text-foreground leading-tight">
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-foreground bg-[#F5F5F5] hover:bg-[#E5E5E5] justify-between group"
            >
              Mapas
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="default"
              size="lg"
              className="text-foreground bg-[#F5F5F5] hover:bg-[#E5E5E5] justify-between group"
            >
              Catálogo de dados
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      {/* Stories Section */}
      <StoriesSection />
    </div>
  );
}
