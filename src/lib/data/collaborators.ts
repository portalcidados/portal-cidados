export interface Collaborator {
  id: string;
  name: string;
  function: string;
  email: string;
  image: string;
}

export const collaborators: Collaborator[] = [
  {
    id: "tomas-alvin",
    name: "Tomas Alvin",
    function: "Coordenador",
    email: "tomas@bei.com.br",
    image: "/collaborators/tomas-alvin.png",
  },
  {
    id: "adriano-borges",
    name: "Adriano Borges",
    function: "Coordenador",
    email: "adrianobfc@insper.edu.br",
    image: "/collaborators/adriano-borges.png",
  },
  {
    id: "mauricio-bouskela",
    name: "Mauricio Bouskela",
    function: "Coordenador",
    email: "mauriciosb4@insper.edu.br",
    image: "/collaborators/mauricio.png",
  },
  {
    id: "rinaldo-gama",
    name: "Rinaldo Gama",
    function: "Coordenador",
    email: "",
    image: "/collaborators/rinaldo.png",
  },
  {
    id: "caio-jacintho",
    name: "Caio Jacintho",
    function: "Coordenador",
    email: "caioraj@insper.edu.br",
    image: "/collaborators/caio.png",
  },
  {
    id: "vinicios",
    name: "Vinícios",
    function: "Cientista de dados",
    email: "viniciusor@insper.edu.br",
    image: "/collaborators/vinicios.png",
  },
  {
    id: "lucas",
    name: "Lucas Tavares",
    function: "Desenvolvedor",
    email: "lucastavares@poli.ufrj.br",
    image: "/collaborators/lucas-tavares.png",
  },
];

export function getCollaborators(): Collaborator[] {
  return collaborators;
}

