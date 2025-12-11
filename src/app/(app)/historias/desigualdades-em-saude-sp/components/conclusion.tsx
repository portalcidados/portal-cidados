"use client";

import textBackground from "../assets/text-background.png";

export default function Conclusion() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-8 py-30"
      style={{
        backgroundImage: `url(${textBackground.src})`,
      }}
    >
      <div className="max-w-xl rounded-2xl">
        <div className="space-y-6 text-black leading-relaxed">
          <p>
            O estudo detalhado da distribuição espacial de algumas doenças e
            problemas de saúde em São Paulo traz importantes contribuições para
            o manejo e a prevenção das condições investigadas.
            <span className="font-semibold">
              Com base nos dados levantados, através de novos estudos, é
              possível:
            </span>
          </p>

          <ul className="space-y-2 ml-3">
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                <span className="font-semibold">
                  Identificar as áreas onde as ações
                </span>{" "}
                do sistema de
                <span className="font-semibold">
                  {" "}
                  saúde devem ser priorizadas.
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                Entender como os fatores sociais e o ambiente urbano afetam o
                curso das doenças, seja de forma positiva ou negativa.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                <span className="font-semibold">
                  Mapear políticas locais que trouxeram melhorias na saúde
                </span>{" "}
                e qualidade de vida, mesmo em cenários adversos.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-2">•</span>
              <span>
                Reconhecer e adaptar medidas eficazes de melhoria no sistema de
                saúde que podem ser aplicadas em outras regiões da cidade.
              </span>
            </li>
          </ul>

          <p className="pb-10">
            Além de abrir novas possibilidades para estudar e entender questões
            de saúde no contexto urbano, o estudo apresenta propostas práticas
            para enfrentar as desigualdades no acesso aos cuidados médicos.
          </p>

          <p>
            <span className="font-semibold">Propostas</span>
          </p>

          <div className="space-y-4 pb-10">
            <div className="bg-white rounded-lg p-8 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">
                UBS no sistema de transporte
              </h3>
              <p className="leading-relaxed">
                Instalação de Unidades Básicas de Saúde (UBSs) em pontos
                estratégicos do sistema de transporte público de alta
                capacidade, funcionando no mesmo horário dessas redes. Essa
                ideia busca facilitar o acesso aos serviços de saúde para
                populações que vivem em áreas periféricas ou que enfrentam
                longos trajetos diários. Ao integrar planejamento urbano e
                saúde, a proposta cria uma rede de serviços mais eficiente e
                acessível, reforçando a importância de aproximar os cuidados
                médicos das pessoas que mais precisam.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">
                Reeducação alimentar na infância
              </h3>
              <p className="leading-relaxed">
                Ela desempenha um papel essencial na prevenção do diabetes
                mellitus na vida adulta, promovendo hábitos saudáveis desde
                cedo, controlando o consumo de açúcares e ultra processados e
                incentivando uma alimentação equilibrada. Estudos mostram que
                escolhas nutricionais adequadas na infância reduzem
                significativamente o risco de resistência à insulina, obesidade
                e outras condições.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 backdrop-blur-sm">
              <h3 className="font-semibold mb-3">
                Observatório de Saúde Urbana
              </h3>
              <p className="leading-relaxed">
                Criação de um centro capaz de produzir inovação em tecnologias
                em saúde, baseadas na transversalidade, complexidade e
                interdependência dos determinantes da saúde humana. O
                Observatório de Saúde Urbana está pensado levando em conta a
                parceria com agentes públicos de diferentes áreas do município
                de São Paulo, como, por exemplo, a Secretaria da Saúde (SMS), o
                Tribunal de Contas do Município (TCM), além das demais
                Secretarias potencialmente envolvidas (Segurança, Assistência
                Social, Educação etc.).
              </p>
            </div>
          </div>

          <p>
            <span className="font-semibold">Bônus</span>
          </p>
          <p className="mb-4">
            Ouça uma canção inspirada na história, composta por um dos
            colaboradores do Insper, que transforma os dados e relatos da
            reportagem em versos e rimas.
          </p>

          <button
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
            onClick={() => {
              // TODO: Add song.mp3 to src/assets/ and uncomment the import above
              // const audio = new Audio(songAudio);
              // audio.play().catch(err => console.log('Error playing audio:', err));
              console.log(
                "Audio feature not yet implemented - add song.mp3 to assets",
              );
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
