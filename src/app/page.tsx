import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { StoriesSection } from "@/components/StoriesSection";
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
          <p className="text-md text-muted-foreground font-gt-ultra-fine mb-4 max-w-4xl">
            Criado pelo Centro de Estudos das Cidades, do Insper, o projeto
            conecta dados urbanos a histórias ilustradas, interativas e
            georreferenciadas, aproximando a produção científica das pessoas e
            dos gestores públicos. Nosso objetivo é tornar dados sobre as
            cidades mais compreensíveis, contribuindo para a construção de
            políticas urbanas baseadas em evidências.
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
