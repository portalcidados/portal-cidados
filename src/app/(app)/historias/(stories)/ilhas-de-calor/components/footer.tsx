import StoryFooter from "@/app/(app)/historias/components/StoryFooter";

export default function Footer() {
  return (
    <StoryFooter
      studyDetail={{
        description:
          "Diagnóstico sobre ilhas de calor e qualidade do ar nas 16 favelas da Maré",
        organization: "Redes da Maré",
        documentType: "Relatório",
        institution: "Instituto de Ensino e Pesquisa",
        year: 2024,
        partnership: {
          href: "https://climaesociedade.org/sobre/",
          label: "Instituto Clima e Sociedade",
        },
      }}
      realizacao={[
        {
          src: "/arq_futuro_icon.png",
          alt: "Insper Logo",
          href: "https://www.insper.edu.br/pt/pesquisa/centro-de-estudos-das-cidades",
        },
        {
          src: "/portal_cidados_icon.png",
          alt: "Portal Cidados",
          href: "/",
        },
      ]}
      parceiros={[
        {
          src: "https://climaesociedade.org/wp-content/uploads/2026/01/logo-ics-header-padrao.png",
          alt: "ICS",
          href: "https://climaesociedade.org/",
        },
        // {
        //   src: "/portal_cidados_icon.png",
        //   alt: "Portal Cidados",
        //   href: "/",
        // },
      ]}
      teams={[
        {
          title: "Equipe do estudo",
          members: [
            {
              role: "Coordenação geral",
              names: "Carolina Dias, Luna Arouca, Rian de Queiroz e Shyrlei Rosendo",
            },
            {
              role: "Pesquisador e coordenador de campo",
              names: "Rian de Queiroz",
            },
            {
              role: "Pesquisadores consultores",
              names: "Otavio Ranzani, Carolina Hartmann Galeazzi e Fernando Bozza",
            },
            {
              role: "Sistematização do conteúdo e produção dos mapas",
              names: "Rian de Queiroz",
            },
            { role: "Analista de dados", names: "Soraida Aguilar" },
            {
              role: "Agentes ambientais",
              names: "Bianca de Lima Teixeira, Luis Carlos Soares da Costa, Marcela Santos de Melo, Maria Eduarda Souza Neves",
            },
            {
              role: "Assistente de campo",
              names: "Diana de Souza Beserra",
            },
            {
              role: "Identidade visual",
              names: "Robert dos Santos da Silva",
            },
          ],
        },
        {
          title: "Equipe do dataviz",
          members: [
            { role: "Design", names: "Pictomonster" },
            { role: "Roteirista", names: "Caio Jacintho" },
            { role: "Designer", names: "Pedro Meneghel" },
            { role: "Desenvolvimento", names: "Lucas Tavares" },
          ],
        },
      ]}
      databases={[
        {
          title: "Imposto sobre Transmissão de Bens Imóveis (ITBI)",
          href: "https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/AOLEOI",
        },
        {
          title: "Dados de Transporte Coletivo (Ônibus e Metrô)",
          href: "https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/UTGQ0I",
        },
      ]}
    />
  );
}
