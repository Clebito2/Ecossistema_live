# Projeto de Suporte ao Consultor

**Objetivo:** Agilizar e padronizar a criação de materiais de suporte para consultores, incluindo propostas comerciais, dashboards de acompanhamento e apresentações de palestras.

## Visão Geral

Este projeto centraliza as diretrizes e recursos para a montagem de páginas e materiais de consultoria. O processo é projetado para ser rápido e consistente, seguindo um fluxo de trabalho claro.

## Documentos Principais

-   **[Framework M.A.P.C.A](./docs/framework_mapca.md):** A base de conhecimento para estruturar o conteúdo das propostas e apresentações.
-   **[Guia de Estilo (Identidade Visual)](./docs/guia_estilo.md):** As regras de identidade visual que garantem a consistência da marca.
-   **[Base de Conhecimento da Empresa](./docs/base_conhecimento.md):** Informações institucionais e dados relevantes sobre a empresa.
-   **[Biblioteca de Prompts](./prompts/):** Uma coleção de prompts para automação da criação de conteúdo.

## Fluxo de Trabalho: Do Briefing à Proposta em 2 Passos

1.  **Extrair Dados Brutos:**
    Use o `prompt_1` para converter a transcrição da reunião em dados estruturados.
    ```bash
    gemini ai --prompt-file ./prompts/1_extrair_dados_brutos.md --input-file ./briefing.txt > dados_proposta.json
    ```

2.  **Gerar Páginas HTML:**
    Use o `prompt_2` com o JSON gerado para criar as páginas de proposta e contrato.
    ```bash
    gemini ai --prompt-file ./prompts/2_gerar_proposta_html.md --input-file ./dados_proposta.json > resultado_final.json
    ```

## Guia de Prompt Engineering

-   **Seja Específico:** Use "REGRAS RÍGIDAS" para definir o que o modelo DEVE e NÃO DEVE fazer.
-   **Defina o Formato de Saída:** Sempre especifique o formato de saída desejado (ex: JSON, HTML) com um exemplo claro.
-   **Referencie a Base de Conhecimento:** Use a sintaxe `@docs/arquivo.md` para que o modelo consulte a documentação e mantenha a consistência.
-   **Prompts em Cadeia:** Projete os prompts para que a saída de um seja a entrada do próximo, criando um fluxo de trabalho automatizado.

Sempre que o usuário mencionar um novo cliente da consultoria ou um novo projeto que possa enriquecer o contexto e a base de conhecimento sobre o Ecossistema Live, você deve perguntar se o usuário deseja adicionar essa informação ao documento de contexto da consultoria. Em caso positivo, adicione a informação ao "C:\Users\clebe\OneDrive\Documentos\ProjetosGit\Ecossistema_live\ecossistemalive\Contexto_consultoria.md"