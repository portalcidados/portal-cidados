import StoryFooter from "@/app/(app)/historias/components/StoryFooter";

export default function Footer() {
  return (
    <StoryFooter
      studyDetail={{
        description:
          'Síntese de evidências sobre saúde no município de São Paulo',
        descriptionHref:
          "https://observatoriosaudepublica.com.br/static/frontend/pesquisa/executivo-saude-sp.pdf",
        documentType: "Relatório Técnico de Pesquisa",
        institution: "Centro de Estudos das Cidades – Laboratório Arq.Futuro",
        extraLines: ["Iniciativa de Saúde Urbana"],
        year: 2024,
      }}
      databases={[
        {
          title: "Mortalidade prematura por distrito de São Paulo [2019]",
          href: "https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/JJ8JIN",
        },
        {
          title: "Gastos com UBS por distrito de São Paulo [2019]",
          href: "https://dataverse.datascience.insper.edu.br/dataset.xhtml?persistentId=doi:10.60873/FK2/YZBSBF",
        },
      ]}
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
            {
              role: "Autores",
              names: "Paulo H. Nascimento Saldiva, Lígia Vizeu Barrozo, Catia Martinez Minto, Sara Lopes de Moraes e Paulo Afonso de André",
            }
          ],
        },
        {
          title: "Equipe do dataviz",
          members: [
            { role: "Coordenador Executivo", names: "Maurício Bouskela" },
            { role: "Roteirista", names: "Caio Jacintho" },
            { role: "Designer", names: "Pedro Meneghel" },
            { role: "Desenvolvimento", names: "Lucas Tavares" },
            { role: "Voz/Composição", names: "Rafael Gomes da Silva" },
          ],
        },
      ]}
    />
  );
}
