Base de Conhecimento Mestra: LiVe Consultoria (Revisada)
1. Núcleo de Identidade e Filosofia
1.1. Identidade Central
Empresa: LiVe Consultoria

Fundador / Consultor Chefe: Luiz Portal

Propósito: Transformar pessoas e impulsionar empresas.

Especialização: Planejamento e estruturação de negócios.

Foco: Elevar o padrão de liderança e performance em vendas através de experiências e treinamentos.

1.2. Filosofia e Valores
Conceito "LiVe": Estar presente, ativo e em movimento.

Pilares da Atuação: A alta performance começa com:

Atitude

Clareza

Ação

Tom de Voz: Assertivo e profissional, mas sempre gentil e simplificado. Sóbrio, inspirador, analítico, didático e acolhedor.

Valores (Inferidos): Liderança, Performance, Clareza, Ação, Presença, Antifragilidade.

2. Identidade Visual e Padrões Técnicos (Brandbook)
Informações extraídas do "Guia de estilo V2 (LiVe).pdf".

Fontes (Tipografia):

Primária: Poppins

Secundária: Merriweather

Paleta de Cores (Tokens CSS):

--primary-bg: #06192a (Azul Petróleo - Fundo principal)

--card-bg: #0A243D (Azul Escuro - Fundo de cards)

--accent-color: #00e800 (Verde Vibrante - Destaques, links)

--text-primary: #ffffff (Branco - Textos principais)

--text-muted: #cccccc (Cinza Claro - Textos secundários)

--text-subtle: #a0a0a0 (Cinza - Parágrafos)

--border-color: rgba(255, 255, 255, 0.1)

(Nota: O prompt mestre menciona Cinza Claro #f4f4f4)

Restrições: É terminantemente proibido alterar, distorcer ou usar incorretamente o logotipo e os elementos da identidade visual.

3. Estrutura Organizacional e Personas
3.1. Equipe Chave
Luiz Portal: Consultor Chefe.

Agenda Fixa:

Toda terça-feira, 18:30 - 21:15: "Reunião BNI Semanal".

Toda quarta-feira (a partir de 13/08/2025, por 5 semanas), 19:00 - 22:00: "Aula da Formação Liderança Antifrágil".

3.2. Agentes de IA (Sistema AgeQuodAgis)
Persona Primária (Sistema): AgeQuodAgis

Função: Sistema operacional completo da consultoria. Responsável por análise de diagnóstico, elaboração de documentos e gestão do ciclo de vida de clientes e especialistas.

Sub-Persona A (Propostas/Contratos): Especialista em Formalização de Acordos

Foco: Clareza, objetividade, segurança jurídica.

Sub-Persona B (Processos): Engenheiro de Processos (Lean Six Sigma)

Foco: Visão sistêmica, eficiência.

Sub-Persona C (Pesquisa): Analista de Inteligência de Mercado / Estrategista de Nicho

Foco: Quantitativo (Analista) e Qualitativo (Estrategista).

Sub-Persona D (Admin): Assistente Executivo de Alta Performance

Foco: Organização, eficiência, gestão da agenda de Luiz Portal, preparação de briefings.

Sub-Persona E (Projetos): Gerente de Projetos (PMO)

Foco: Manutenção meticulosa do dashboard de acompanhamento de projetos (código HTML).

4. Metodologias e Processos de Consultoria
4.1. Diagnóstico e Estratégia
Método de Diagnóstico: Avaliação de itens com base em duas métricas:

Maturidade: Nível de 1 (inexistente) a 5 (otimizado).

Impacto: Nível de 0 (nenhum) a 10 (crítico).

Exemplo de Regra de Negócio: A ausência de um CRM geralmente tem Impacto 8 ou 9.

Priorização de Ações (Matriz Esforço x Impacto):

Quick Wins: Alto impacto, baixo esforço.

Projetos Estruturais: Alto impacto, alto esforço.

Ações Táticas: Baixo impacto, baixo esforço.

Distrações: Baixo impacto, alto esforço.

Metodologia de Projeto: Modelo ágil de execução, utilizando Lean Canvas, Kanban e Sprints.

Análise de Feedback: Aplicação das metodologias SBI (Situação-Comportamento-Impacto), STAR (Situação-Tarefa-Ação-Resultado) e DESC (Descrever-Expressar-Especificar-Consequência).

4.2. Sistema de Geração de Propostas (Fonte: "Documentação Técnica...")
Visão Geral: Automatiza a criação de propostas comerciais e contratos, transformando um diagnóstico bruto em uma página web interativa e um documento jurídico.

Arquitetura de IAs:

IA de Análise (Manus): Recebe o diagnóstico bruto, interpreta regras de negócio e gera um pacote de dados estruturado (JSON).

IA de Construção (Gemini): Recebe o JSON e cria os artefatos de front-end (página web da proposta) e templates.

Fluxo de Trabalho:

Consultor insere dados brutos (diagnóstico, áudio, etc.).

IA (Manus) analisa e gera o JSON.

IA (Gemini) usa o JSON para construir a página HTML da proposta e o documento do contrato.

A proposta web é publicada (via GitHub/Netlify).

4.3. Sistema de Acompanhamento de Projetos (Dashboard)
Plataforma: Uma página HTML única, hospedada, que utiliza JavaScript para criar abas (tabs) para cada cliente.

Estrutura Técnica (Fonte: "Documentação Técnica..."):

Cada cliente é uma div separada: <div id="NomeCliente" class="tab-content">.

O status do projeto é mantido em uma tabela (<table>).

As classes CSS controlam o status visual: status-concluida, status-em-andamento, status-atrasada, status-pendente.

A data da última modificação é registrada em: <p class="update-date">Última atualização: [Data]</p>.

Processo de Atualização (Persona E):

Receber o código HTML original e as novas informações.

Localizar a div do cliente (ex: id="CasasGoianita").

Localizar a linha da tabela (<tr>) da atividade.

Alterar APENAS a classe de status, o ícone e o texto do status.

Atualizar o conteúdo da tag <p class="update-date">.

Gerar um relatório sucinto da alteração para a base de conhecimento.

Restrição Crítica: É terminantemente proibido alterar layout, estrutura de divs, classes CSS (exceto as de status) ou excluir informações não solicitadas.

5. Produtos e Treinamentos
5.1. Formação de Liderança Antifrágil (Fonte: "Formacao-de-Lideranca-Antifragil.pdf")
Objetivo: Ensinar líderes a liderar com confiança e transformar crises em oportunidades.

Competências Desenvolvidas: Fortalecimento de equipe, liderança em crises, tomada de decisão rápida, mentalidade antifrágil.

Público-Alvo: Líderes que buscam mentalidade forte, equipes engajadas e atuação estratégica (menos operacional).

Pilares do Conteúdo:

Liderança de Verdade (Autenticidade, Intenção).

Comportamento e Antifragilidade (Perfis, Temperamentos).

Ferramentas Psicológicas (PNL, Psicologia Positiva, Comunicação Assertiva).

Desenvolvendo Líderes (Identificar necessidades, motivar).

Estratégias de Adaptação (Preparação, Mensuração, Recuperação).

Planejamento Antifrágil (Diagnóstico de time, Cultura de desenvolvimento).

Investimento: R$ 2.997 (verificar condições especiais).

6. Base de Clientes e Projetos (Exemplos)
6.1. Casa Goianita
Contexto: Projeto de reestruturação de empresa familiar (varejo).

Fontes: "Base de conhecimento Casa Goianita 31-10.pdf", "Atualização Consultoria 04-09-25.pdf".

Desafios: Gestão centralizada, falta de processos formais (especialmente compras e estoque), conflito de agência (gestão vs. propriedade), endividamento, sistemas ineficientes (Sistema AJ), resistência à mudança.

Entregáveis e Ações:

Instituição de um Conselho Gestor.

Mapeamento de Rotinas AS-IS (Mapeamento de Processos).

Pesquisa de Clima Organizacional.

Plano de Viabilidade individual por loja.

Planejamento Estratégico 2026 (incluindo plano emergencial).

Reposição de Marca e Identidade Visual (para refletir mudança geracional).

Manual de implantação 5S para estoque/compras.

Links de Ativos:

https://casasgoianita.netlify.app

https://manual5sestoque.netlify.app/

https://as-is-goianita.netlify.app/

https://pesqconc.netlify.app/ (Pesquisa de Concorrentes)

6.2. Casa Dibs
Contexto: Estruturação da gestão para expansão.

Fontes: "Atualização Consultoria 04-09-25.pdf".

Entregáveis e Ações:

Instituição do Conselho Gestor (Composição: José Manuel (CEO), esposa (Financeiro), Leonardo (filho/Sócio), esposa de Leonardo (Executiva), Luiz Portal (Consultor), Jaqueline (Contadora), Alessandro (Consultor especialista)).

Definição de agenda fixa para o conselho (semanal e depois quinzenal).

Planejamento Estratégico 2026.

Oportunidades Identificadas: Parceria estratégica com o Frigorífico Qualiboi.

Links de Ativos:

https://propostadibs.netlify.app

6.3. PLUR (Ecossistema de Movimento)
Contexto: Reestruturação e captação de investimento.

Fonte: "Base de conhecimento PLUR.pdf".

Fundador: Theo Abdalla.

Filosofia/Posicionamento: "Centro de educação corporal", "Por trás de um grande corpo, uma mente muito maior". Foco em acolhimento e movimento consciente.

Público-Alvo: Mulheres, 25-40 anos, classe A/B, que rejeitam academias tradicionais.

Produtos Validados: PLUR30 (Imersão de 30 dias), ALT Running Club.

Dados do Valuation (Exemplo):

Ativo Fixo (Maquinário): R$ 670.696,72

Passivo Assumido: R$ 239.768,66

Valuation Líquido: R$ 430.928,06

Proposta de Investimento: Venda de 40% das quotas por R$ 172.371,22, mais aporte de R$ 70.000 de cada um dos dois novos sócios cotistas.

Links de Ativos:

https://novaplur.netlify.app

6.4. Lista de Outros Projetos (Fonte: "...csv")
Visan Médica:

https://consultcompletavisan.netlify.app

https://relatoriomes1.netlify.app

https://trellotut.netlify.app

https://visan.netlify.app

IMOL:

https://mentoriaimol.netlify.app

TecnoIT (Conselho):

https://implantacaoconselho.netlify.app

Outros:

https://mentoriasaulo.netlify.app (Saulo Dashboard)

https://glittery-faun-97fda4.netlify.app (Okamoto)

https://warm-arithmetic-1505f1.netlify.app (Melt)