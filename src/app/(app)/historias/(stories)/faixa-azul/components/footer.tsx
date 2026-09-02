import StoryFooter from "@/app/(app)/historias/components/StoryFooter";

export default function Footer() {
  return (
    <StoryFooter
      studyDetail={{
        description:
          "Avaliação do impacto da Faixa Azul nos sinistros de trânsito em São Paulo",
        descriptionHref:
          "https://repositorio-api.insper.edu.br/server/api/core/bitstreams/22b8cdce-8168-45ea-afba-14aaa1fd7b46/content",
        organization: "Lorem ipsum",
        documentType: "Lorem ipsum dolor sit amet",
        year: 2024,
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
      // parceiros={[
      //   {
      //     src: redesMare.src,
      //     alt: "Redes da Maré",
      //     href: "https://www.redesdamare.org.br/",
      //     className: "h-14 lg:h-18 w-auto brightness-0 invert",
      //   },
      // ]}
      teams={[
        {
          title: "Equipe do estudo",
          members: [
            {
              role: "Coordenação geral",
              names: "Lorem ipsum",
            },
            {
              role: "Pesquisador e coordenador de campo",
              names: "Lorem ipsum",
            },
            {
              role: "Pesquisadores consultores",
              names: "Lorem ipsum",
            },
            {
              role: "Sistematização do conteúdo e produção dos mapas",
              names: "Lorem ipsum",
            },
            { role: "Analista de dados", names: "Lorem ipsum" },
          ],
        },
        {
          title: "Equipe do dataviz",
          members: [
            { role: "Roteirista", names: "Caio Jacintho" },
            { role: "Designer", names: "Pedro Meneghel" },
            { role: "Cientista de dados", names: "Vinicius Oike" },
            { role: "Desenvolvimento", names: "Lucas Tavares" },
          ],
        },
      ]}
      databases={[
        {
          title: "Sinistros de Trânsito [2022-2025]",
          href: "https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/A4AC1I",
        },
        {
          title: "Sinistros de Trânsito Agregados por Via [2022-2025]",
          href: "https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/XA5PFG",
        },
        {
          title:
            "Trechos com Faixas Dedicadas a Motociclistas (Faixa Azul) [2025]",
          href: "https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/IRGJPX",
        },
      ]}
    />
  );
}
