# Dados — Motos no trânsito de São Paulo

Tabelas de apoio à narrativa "motos são ~3% das viagens, mas concentram
~60% dos sinistros e ~40% das mortes no trânsito" (município de São Paulo).
As três primeiras são geradas por `historias/R/historia_4_export.R`; as
duas últimas (Faixa Azul) por `historias/R/historia_4_faixa_azul_lookup.R`
(rodar primeiro — gera os lookups intermediários) +
`historias/R/historia_4_faixa_azul_export.R`.

Fontes brutas:
- **Pesquisa Origem e Destino 2023** (Metrô-SP), microdados `Banco2023_divulgacao_190225.sav`
- **Infosiga-SP**: bases de sinistros (`sinistros_2015-2021.csv`, `sinistros_2022-2025.csv`) e de vítimas/pessoas (`pessoas_2015-2021.csv`, `pessoas_2022-2025.csv`)
- **OpenStreetMap** (`dado_osm.gpkg`) e **Faixa Azul** (`faixa_azul.gpkg`, cronograma de implementação de faixas exclusivas de moto), via a pipeline de matching sinistro↔trecho já existente no repo (`pipelines/sao_paulo/faixa-azul/`)

---

## `tab_modais_transporte.csv`

Divisão modal das viagens diárias, a partir da Pesquisa OD 2023, com pesos
amostrais aplicados via `survey`/`srvyr` (`svydesign(weights = ~fe_via, strata = ~zona)`).

| Coluna | Descrição |
|---|---|
| `geo_level` | Recorte geográfico: `RMSP` (Região Metropolitana de São Paulo, toda a amostra) ou `São Paulo (capital)` (filtrado para `muni_dom == 36`) |
| `grouped_mode` | Modo de transporte agrupado (ver metodologia abaixo) |
| `trips` | Total estimado de viagens/dia (expandido pelo peso amostral `fe_via`), soma ponderada, sem intervalo de confiança calculado |
| `share` | Participação do modo no total de viagens daquele recorte geográfico (soma 1 dentro de cada `geo_level`) |

**Metodologia — agrupamento de `modoprin` (modo principal declarado) em `grouped_mode`:**
- **Transporte público**: Metrô, Monotrilho, Trem e ônibus/micro-ônibus/van (municipal, metropolitano ou de outros municípios)
- **Automóvel**: dirigindo ou passageiro de automóvel, **táxi convencional e táxi por aplicativo** (agrupados junto com automóvel, não como transporte público)
- **Moto**: dirigindo moto, passageiro de moto e **passageiro de mototáxi** (mototáxi tratado como moto, não como táxi)
- **Transporte escolar**: categoria própria, sem agrupamento
- **A pé**: categoria própria
- **Outros**: qualquer modo não coberto pelas categorias acima (ex.: bicicleta, outros)

Encoding dos rótulos do SPSS (`.sav`) é normalizado (`Encoding(x) <- "unknown"`) antes do agrupamento para evitar falhas de correspondência entre acentuação UTF-8 do arquivo e strings nativas do R.

---

## `tab_sinistros_moto.csv`

Contagem anual de sinistros de trânsito com vítima, no município de São Paulo,
segmentados por envolvimento ou não de motocicleta. Fonte: Infosiga-SP, base
de sinistros.

| Coluna | Descrição |
|---|---|
| `ano` | Ano do sinistro (2019–2025; 2025 é ano parcial, até o último mês disponível na extração) |
| `sinistros_moto` | Nº de sinistros com pelo menos uma motocicleta envolvida |
| `sinistros_sem_moto` | Nº de sinistros sem motocicleta envolvida |
| `share_moto` | `sinistros_moto / (sinistros_moto + sinistros_sem_moto)` |
| `share_sem_moto` | Complemento de `share_moto` |

**Metodologia:**
- Filtrado para `municipio == "SAO PAULO"`.
- Excluídos registros sem nenhuma informação de contexto da via (`tipo_via`, `administracao`, `conservacao`, `jurisdicao` todos "NAO DISPONIVEL" ou vazios) — provável baixa qualidade de registro.
- **Série inicia em 2019**: antes disso o Infosiga só cobre sinistros fatais, o que tornaria a série anterior não comparável (subestimaria fortemente o total de sinistros).
- Um sinistro é classificado como "moto" se `tp_veiculo_motocicleta >= 1` (pelo menos uma moto identificada entre os veículos do sinistro); sinistros sem nenhum tipo de veículo identificado (`tp_veiculo_*` todos `NA`) são descartados antes da contagem.
- Contagem não pondera por gravidade — um sinistro com 1 óbito e um sinistro só com feridos leves contam igualmente.

---

## `tab_mortes_moto.csv`

Mortes de motociclistas no trânsito (município de São Paulo, 2015–2025),
classificadas pelo outro veículo envolvido no mesmo sinistro. Fonte:
Infosiga-SP, cruzando a base de vítimas (pessoas) com a base de sinistros pelo
identificador `id_infosiga`.

| Coluna | Descrição |
|---|---|
| `veiculo_envolvido` | Categoria do outro veículo envolvido no sinistro fatal (ver hierarquia abaixo) |
| `mortes` | Nº de vítimas fatais motociclistas naquela categoria |
| `share` | Participação da categoria no total de mortes de motociclistas |

**Metodologia:**
- Vítima fatal = `gravidade_lesao == "FATAL"` na base de pessoas; óbitos considerados são os ocorridos em até 30 dias do sinistro (definição do Infosiga-SP).
- Filtrado para vítimas cujo `tipo_veiculo_vitima` (normalizado para maiúsculas) é "MOTOCICLETA".
- A base de vítimas não traz os demais veículos do sinistro — cada vítima fatal é ligada ao seu sinistro (`id_infosiga`) para recuperar os veículos envolvidos (colunas `tp_veiculo_*`).
- **Classificação hierárquica pelo veículo "mais pesado"** envolvido no sinistro, nesta ordem de prioridade: Caminhão > Ônibus > Automóvel > Outra motocicleta > Bicicleta > Outros veículos > Sem outro veículo. Ou seja, se um sinistro envolveu tanto um automóvel quanto uma bicicleta, é classificado como "Automóvel".
- **"Outra motocicleta"** exige `tp_veiculo_motocicleta >= 2`, porque a moto da própria vítima já conta 1 em `tp_veiculo_motocicleta` — o critério isola sinistros entre duas motos.
- **"Sem outro veículo"** cobre sinistros solo (queda, choque contra objeto fixo) e atropelamentos de pedestre (pedestre não entra como "veículo" nas colunas `tp_veiculo_*`).
- **"Não disponível"** cobre tanto sinistros sem nenhum veículo identificado (`tp_veiculo_nao_disponivel >= 1`) quanto vítimas cujo sinistro não teve correspondência (`matched == FALSE`) na base de sinistros — por exemplo, por terem sido removidos no filtro de qualidade da base de sinistros (ver `tab_sinistros_moto.csv`) ou por estarem fora do recorte 2019+ usado nessa base.

---

## `tab_avenidas_faixa_azul.csv` e `tab_obitos_faixa_azul.csv`

Reproduzem a Figura 6 do repositório original de pesquisa
(`gustavo-tm/faixa-azul`, `scripts/descritivas.R::plot_datas_FA()`): uma
linha do tempo por avenida, mostrando o período antes/depois da
implementação da faixa azul e cada sinistro fatal ocorrido naquela avenida,
marcado por data e por envolvimento (ou não) de motocicleta.

**`tab_avenidas_faixa_azul.csv`** (uma linha por avenida — as barras do gráfico):

| Coluna | Descrição |
|---|---|
| `nome` | Nome "limpo"/tokenizado da avenida (maiúsculo, sem acento — ex. `"NACOES UNIDAS"`), usado como rótulo do eixo Y no gráfico original |
| `logradouro_pretty` | Nome de exibição (ex. `"Avenida das Nações Unidas"`), recuperado do `faixa_azul.gpkg` |
| `d0` | Data de implementação da faixa azul nessa avenida (a mais antiga entre todos os trechos que compõem a avenida) |
| `id` | Posição da linha no eixo Y do gráfico (1 = avenida com implementação mais recente) |

**`tab_obitos_faixa_azul.csv`** (um ponto por sinistro fatal — os pontos do gráfico):

| Coluna | Descrição |
|---|---|
| `id_sinistro` | Identificador do sinistro (base bruta Infosiga-SP) |
| `data` | Data do sinistro |
| `nome` | Avenida onde ocorreu (mesma chave `nome` de `tab_avenidas_faixa_azul.csv`) |
| `id` | Posição no eixo Y (herdada de `tab_avenidas_faixa_azul.csv`, já pronta para plotar) |
| `motocicleta` | `TRUE` se pelo menos uma motocicleta esteve envolvida no sinistro |

**Metodologia — decisões que reproduzem (ou corrigem) o script original:**

- **Ponto = sinistro fatal, não vítima.** `motocicleta` classifica o
  *sinistro* (`qtd_motocicleta >= 1` entre os veículos envolvidos), não o
  modo de transporte de cada vítima individual. Um sinistro com várias
  vítimas fatais gera um único ponto. Isso reproduz o script original
  (`descritivas.R::plot_datas_FA`), que nunca usa a base de vítimas para
  esta figura — só `tipo == "SINISTRO FATAL"` na base de sinistros.
- **Avenida = "logradouro" no sentido de rede conectada, não só os trechos
  pintados.** `faixa_azul.gpkg` só contém os trechos OSM que de fato
  receberam a pintura azul — uma fração do comprimento total de uma
  avenida. Um sinistro em um trecho não pintado da mesma avenida (mesmo
  nome, conectado geometricamente) ainda conta. Isso foi reproduzido do
  zero localmente: agrupamos todos os trechos do OSM (`dado_osm.gpkg`,
  ~26 mil segmentos primary/secondary/trunk) por nome + conectividade
  geométrica (buffer de 10m + componentes conexos via `igraph`), igual ao
  `agrupar_logradouros()` do repositório original
  (`pipelines/sao_paulo/faixa-azul/R/old_script.R:150-197`). **Isso
  aumenta a contagem de sinistros em ~78% (327 vs. 184) em relação a
  restringir só aos trechos pintados** — ver comparação abaixo.
- **`nome` (não o nome "bonito") é a chave de agrupamento.** O nome
  tokenizado (maiúsculo, sem acento, ex. `"VINTE E TRES MAIO"`) é o que o
  script original usa como identidade da avenida — isso importa porque
  duas variantes de nome do mesmo logradouro no OSM (ex. `"Avenida 23 de
  Maio"` e `"Avenida Vinte e Três de Maio"`) tokenizam para o mesmo nome e
  são fundidas em uma única linha, mesmo sendo componentes geometricamente
  desconexos no grafo. Sem essa fusão, a Figura 6 teria uma linha a mais
  (Avenida 23 de Maio apareceria separada de Avenida Vinte e Três de Maio).
- **Data de implementação = a mais antiga entre os trechos, calculada com
  `min()`/`sort()`, nunca `first()` sem ordenar.** Achado durante a
  reprodução: uma versão inicial deste script (descartada) usava
  `first(data_implementacao, na_rm = TRUE)` sem ordenar por data antes —
  isso pega a primeira linha na ordem em que aparece no arquivo bruto, não
  necessariamente a mais antiga. Para "Avenida Vinte e Três de Maio" isso
  dava 2024-09-01 em vez do valor correto, 2022-01-01 (a implementação real
  começou em 2022; o arquivo bruto só lista essa data depois de outras
  linhas de 2024). Afetava 1 de 48 avenidas nessa versão.
- **Janela temporal:** sinistros filtrados para `data` entre 2021-01-01 e
  2025-04-01, mesma janela do eixo X da figura original.
- **Qualidade do match:** apenas sinistros com `golden_match == TRUE` (a
  mesma régua de qualidade usada no resto da pipeline, ver `match.csv`).

**Comparação de abordagens (conforme pedido para revisão da equipe):**

| | Rede completa da avenida | Só trechos pintados |
|---|---|---|
| Sinistros fatais matched | 327 | 184 (56% do total) |
| dos quais com moto | 185 (56,6%) | — |
| Avenidas resolvidas com data | 46 (após fundir nomes) / 58 (bruto) | 52 |

A restrição aos trechos pintados (mais simples, reaproveita só
`match.csv` + `faixa_azul.gpkg`) sub-representa os sinistros em quase
metade — avenidas são compridas, e a maior parte do comprimento de uma
via com faixa azul não é literalmente pintada. Para esta figura
específica, a reprodução completa da rede (via `dado_osm.gpkg`) é
necessária, não só um atalho.

---

## Observações gerais para revisão

- As tabelas usam fontes e unidades de análise diferentes: `tab_modais_transporte` é uma estimativa amostral ponderada (viagens/dia declaradas), enquanto `tab_sinistros_moto`, `tab_mortes_moto` e as tabelas da Faixa Azul são contagens administrativas de registros (sinistros e óbitos). Não comparar `trips`/`share` de um com `mortes`/`sinistros` do outro sem essa ressalva. As tabelas da Faixa Azul também usam recorte diferente das outras duas de sinistros/mortes (só avenidas com faixa azul, 2021–2025, sinistro fatal por veículo envolvido — não por vítima), então totais não devem ser somados diretamente.
- Nenhuma das tabelas de sinistros/mortes pondera por exposição (ex.: km percorridos, frota) — são contagens absolutas e participações relativas dentro da própria base.
- A decisão de tratar táxi/app como "Automóvel" e mototáxi como "Moto" é uma escolha de agrupamento por natureza do veículo, não por natureza do serviço (transporte remunerado vs. privado) — vale confirmar se essa é a leitura que a equipe quer para a narrativa.
