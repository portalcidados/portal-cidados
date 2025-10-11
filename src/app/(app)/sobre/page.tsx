import { CollaboratorsSection } from "@/components/CollaboratorsSection";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20">
        {/* Title */}
        <div className="flex items-left justify-between lg:flex-row flex-col gap-4 pb-10 lg:items-center">
          <h1 className="max-w-[800px] text-2xl md:text-4xl font-bold text-foreground mb-1 font-gt-ultra-fine leading-tight">
            O Portal CiDados é uma plataforma de divulgação científica que
            transforma pesquisas acadêmicas em narrativas visuais acessíveis ao
            público
          </h1>
          <Image
            src="/logos_cidados.png"
            alt="Sobre"
            width={300}
            height={300}
          />
        </div>
        {/* Collaborators Section */}
        <CollaboratorsSection />
      </div>
    </div>
  );
}
