import StoryFooter from "@/app/(app)/historias/components/StoryFooter";

export default function Footer() {
  return (
    <StoryFooter
      studyDetail={{
        description:
          '"Para o bem ou para o mal: Análise da capacidade que o governo tem de controlar a densidade habitacional"',
        organization: "Gustavo Theil",
        documentType: "Relatório",
        institution: "Insper Instituto de Ensino e Pesquisa",
        extraLines: ["Ciências Econômicas"],
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
      teams={[
        {
          title: "Equipe do estudo",
          members: [
            { role: "Autor", names: "Gustavo Theil" },
            { role: "Orientador", names: "Adriano Borges Costa" },
          ],
        },
        {
          title: "Equipe do dataviz",
          members: [
            { role: "Coordenador Executivo", names: "Maurício Bouskela" },
            { role: "Roteirista", names: "Caio Jacintho" },
            { role: "Designer", names: "Pedro Meneghel" },
            { role: "Desenvolvimento", names: "Renan Rodrigues, Lucas Tavares" },
          ],
        },
      ]}
    />
  );
}
