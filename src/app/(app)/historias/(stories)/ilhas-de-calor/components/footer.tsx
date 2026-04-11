import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#0E171D] text-white py-24 px-6 lg:px-12"
      style={{ fontFamily: '"Libre Baskerville", serif' }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section - 4-item grid for correct mobile ordering */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-12">

          {/* 1. Left top: heading + Diagnóstico + Redes */}
          <section className="order-1 lg:col-span-2 lg:col-start-1 lg:row-start-1">
            <h2 className="text-2xl font-bold mb-6 underline decoration-2 underline-offset-4">
              Detalhes do estudo
            </h2>
            <div className="space-y-2 text-md lg:text-lg">
              <p className="text-whiteleading-relaxed">
                Diagnóstico sobre ilhas de calor e qualidade do ar nas 16 favelas da Maré
              </p>
              <p className="text-[#FFFFFF] opacity-40">
                Redes da Maré
              </p>
            </div>
          </section>

          {/* 2. Realização */}
          <div className="order-2 lg:col-start-3 lg:row-start-1 flex flex-col items-start lg:items-end">
            <div className="flex flex-col items-start">
            <h2 className="text-xl mb-6">Realização</h2>
            <div className="flex justify-start -ml-3 gap-4 lg:gap-6">
              <a
                href="https://www.insper.edu.br/pt/pesquisa/centro-de-estudos-das-cidades"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/arq_futuro_icon.png"
                  alt="Insper Logo"
                  className="h-10 lg:h-12 w-auto brightness-0 invert"
                  width={120}
                  height={48}
                  priority
                />
              </a>
              <a href="/" className="inline-block">
                <div className="relative w-[110px] h-[50px] lg:w-[130px] lg:h-[58px]">
                  <Image
                    src="/portal_cidados_icon.png"
                    alt="Portal Cidados"
                    fill
                    sizes="(max-width: 1024px) 100px, 120px"
                    className="object-contain object-left brightness-0 invert"
                    quality={100}
                  />
                </div>
              </a>
            </div>
            </div>
          </div>

          {/* 3. Left bottom: Relatório, Instituto, 2024, Parceria */}
          <section className="order-3 lg:col-span-2 lg:col-start-1 lg:row-start-2">
            <div className="space-y-1 text-md lg:text-lg text-[#FFFFFF]">
              <p className="text-white opacity-40">Relatório</p>
              <p className="text-white opacity-40">Instituto de Ensino e Pesquisa</p>
              <p className="text-white opacity-40">2024</p>
              <p>
                <span className="text-white opacity-40">Parceria com o{" "}</span>
                <a
                  href="https://climaesociedade.org/sobre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white! opacity-100! underline"
                >
                  Instituto Clima e Sociedade
                </a>
              </p>
            </div>
          </section>

          {/* 4. Parceiros */}
          <div className="order-4 lg:col-start-3 lg:row-start-2 flex flex-col items-start lg:items-end">
            <div className="flex flex-col items-start">
            <h2 className="text-xl mb-6">Parceiros</h2>
            <div className="flex -ml-3 justify-start gap-4 lg:gap-6">
              <a
                href="https://www.insper.edu.br/pt/pesquisa/centro-de-estudos-das-cidades"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/arq_futuro_icon.png"
                  alt="Insper Logo"
                  className="h-10 lg:h-12 w-auto brightness-0 invert"
                  width={120}
                  height={48}
                />
              </a>
              <a href="/" className="inline-block">
                <div className="relative w-[110px] h-[50px] lg:w-[130px] lg:h-[58px]">
                  <Image
                    src="/portal_cidados_icon.png"
                    alt="Portal Cidados"
                    fill
                    sizes="(max-width: 1024px) 100px, 120px"
                    className="object-contain object-left brightness-0 invert"
                    quality={100}
                  />
                </div>
              </a>
            </div>
            </div>
          </div>

        </div>

        {/* Team Section */}
        <div className="space-y-12">
            {/* Team Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 underline decoration-2 underline-offset-4">
                Equipe do estudo
              </h2>
              <div className="space-y-3 text-md lg:text-lg">
                <div>
                  <span className="font-semibold">Coordenação geral:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">
                    Carolina Dias, Luna Arouca, Rian de Queiroz e Shyrlei Rosendo
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Pesquisador e coordenador de campo:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Rian de Queiroz</span>
                </div>
                <div>
                  <span className="font-semibold">Pesquisadores consultores:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">
                    Otavio Ranzani, Carolina Hartmann Galeazzi e Fernando Bozza
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Sistematização do conteúdo e produção dos mapas:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Rian de Queiroz</span>
                </div>
                <div>
                  <span className="font-semibold">Analista de dados:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Soraida Aguilar</span>
                </div>
                <div>
                  <span className="font-semibold">Agentes ambientais:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">
                    Bianca de Lima Teixeira, Luis Carlos Soares da Costa, Marcela
                    Santos de Melo, Maria Eduarda Souza Neves
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Assistente de campo:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Diana de Souza Beserra</span>
                </div>
                <div>
                  <span className="font-semibold">Identidade visual:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Robert dos Santos da Silva</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 underline decoration-2 underline-offset-4">
                Equipe do dataviz
              </h2>
              <div className="space-y-3 text-md lg:text-lg">
                <div>
                  <span className="font-semibold">Design:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Pictomonster</span>
                </div>
                <div>
                  <span className="font-semibold">Roteirista:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Caio Jacintho</span>
                </div>
                <div>
                  <span className="font-semibold">Designer:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Pedro Meneghel</span>
                </div>
                <div>
                  <span className="font-semibold">Desenvolvimento:</span>
                  <span className="text-[#FFFFFF] opacity-40 ml-2">Lucas Tavares</span>
                </div>
              </div>
            </section>
        </div>

        <section
          className="px-6 py-6 lg:px-10 lg:py-10 max-w-[600px] bg-white/6"
        >
          <h2 className="text-2xl font-bold mb-6 underline decoration-2 underline-offset-4">
            Base de dados
          </h2>
          <div className="space-y-5 text-md lg:text-lg">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-semibold text-white">
                Imposto sobre Transmissão de Bens Imóveis (ITBI)
              </span>
              <a
                href="https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/AOLEOI"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 underline underline-offset-2 text-[#FFF]/40"
              >
                Acesse aqui
              </a>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-semibold text-white">
                Dados de Transporte Coletivo (Ônibus e Metrô)
              </span>
              <a
                href="https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/UTGQ0I"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 underline underline-offset-2 text-[#FFF]/40"
              >
                Acesse aqui
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
