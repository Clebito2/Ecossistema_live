---

### **Sistema de Design e Padrão Técnico Unificado – Live Consultoria (V3)**

**Este documento é a fonte de verdade para a criação de qualquer página web da Live Consultoria, garantindo consistência, performance, acessibilidade e aderência à identidade da marca.**

### **1\. Núcleo da Identidade Visual (Brand Core)**

A base de qualquer projeto é definida pelos seguintes tokens (variáveis CSS). A aplicação através destes tokens é obrigatória.

#### **1.1. Paleta de Cores (Tokens)**

CSS

:root {  
  /\* Paleta Principal \*/  
  \--primary-bg: \#06192a;      /\* Azul Petróleo \- Fundo principal \*/  
  \--card-bg: \#0A243D;         /\* Azul Escuro \- Fundo de cards \*/  
  \--accent-color: \#00e800;     /\* Verde Vibrante \- Destaques, links, títulos \*/

  /\* Textos \*/  
  \--text-primary: \#ffffff;     /\* Branco \- Textos principais \*/  
  \--text-muted: \#cccccc;       /\* Cinza Claro \*/  
  \--text-subtle: \#a0a0a0;       /\* Cinza \- Textos secundários e parágrafos \*/

  /\* Bordas e Efeitos \*/  
  \--border-color: rgba(255, 255, 255, 0.1);  
  \--accent-glow: 0 0 8px rgba(0, 232, 0, 0.7); /\* Sombra para o verde vibrante \*/  
}

#### **1.2. Tipografia (Tokens)**

As fontes devem ser importadas no

\<head\> do HTML para melhor performance1.

HTML

\<link rel\="preconnect" href\="https://fonts.googleapis.com"\>  
\<link rel\="preconnect" href\="https://fonts.gstatic.com" crossorigin\>  
\<link href\="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,700\&family=Poppins:wght@300;400;600;700\&display=swap" rel\="stylesheet"\>

CSS

:root {  
  /\* Famílias de Fonte \*/  
  \--font-primary: 'Poppins', sans-serif;  
  \--font-secondary: 'Merriweather', serif;

  /\* Tamanhos de Fonte (Mobile-First) \*/  
  \--font-size-base: 1.1rem;  
  \--font-size-h3: 1.5rem;  
  \--font-size-h2: clamp(2rem, 4vw, 2.5rem);  
  \--font-size-h1: clamp(2.5rem, 5vw, 3rem);  
}

* **Uso:**  
  * var(--font-primary): Para todos os textos gerais, títulos e elementos de interface2.  
  * var(--font-secondary): **Exclusivamente** para o texto do bloco "Diagnóstico Estratégico" em propostas comerciais3.

#### **1.3. Espaçamento (Tokens)**

Use a escala de espaçamento para todas as margens e paddings4.

CSS

:root {  
  /\* Escala de Espaçamento \*/  
  \--space-sm: 1rem;   /\* 16px \*/  
  \--space-md: 2rem;   /\* 32px \*/  
  \--space-lg: 4rem;   /\* 64px \*/  
  \--space-xl: 6rem;   /\* 96px \*/  
}

### **2\. Ativos da Marca (Asset Library)**

**Atenção:** Para que as imagens do GitHub funcionem, o link deve apontar para raw.githubusercontent.com5. Os links abaixo já estão no formato correto6.

#### **2.1. Logos**

* **Logo Principal (Padrão para fundo escuro):**  
  * **Uso:** Cabeçalho e rodapé de páginas institucionais7.  
  * **URL:** https://raw.githubusercontent.com/Clebito2/ConsultoriaLive/main/Logo%20live%20oficial-21.png 8  
* **Logo Alternativo:**  
  * **Uso:** Apenas se a versão primária não puder ser aplicada9.  
  * **URL:** https://raw.githubusercontent.com/Clebito2/Consultorias/main/Logo%20live%20oficial-17.png 10  
* **Logos Específicos para Propostas Comerciais:**  
  * **Uso (Cabeçalho):** Logo para o cabeçalho fixo da página de proposta11.  
    * **URL:** https://raw.githubusercontent.com/Clebito2/layout/main/Logo%20live%20oficial-36.png 12  
  * **Uso (Rodapé):** Versão positiva para o rodapé escuro da página de proposta13.  
    * **URL:** https://raw.githubusercontent.com/Clebito2/layout/main/Logo%20live%20oficial-34.png 14

#### **2.2. Textura de Fundo**

Obrigatória em todas as páginas15. O fundo deve ser fixo (

fixed) para criar o efeito de paralaxe durante a rolagem16.

* **URL:** https://www.transparenttextures.com/patterns/cubes.png 17171717  
* **Implementação CSS:**  
* CSS

body {  
  background-color: var(--primary-bg); /\* Fallback \*/  
  background-image: url('https://www.transparenttextures.com/patterns/cubes.png');  
  background-attachment: fixed;  
}

*   
* 

#### **2.3. Logos de Clientes (Página Institucional)**

Lista de logos aprovados para a seção de clientes18.

* **Vox2you:** https://raw.githubusercontent.com/Clebito2/ApresentacaoConsultoria/main/LOGO%20VOX.png 19  
* **Okamoto:** https://raw.githubusercontent.com/Clebito2/ApresentacaoConsultoria/main/Logo%20okamoto.png 20  
* **Casa Dibs:** https://raw.githubusercontent.com/Clebito2/ApresentacaoConsultoria/main/Logo%20Casa%20dibs.png 21  
* **TCE-RO:** https://raw.githubusercontent.com/Clebito2/ApresentacaoConsultoria/main/Logo%20TCE.png 22  
* **TecnolT:** https://raw.githubusercontent.com/Clebito2/ApresentacaoConsultoria/main/Tecno%20IT.png?raw=true 23  
* E outros listados no guia original 24.

### **3\. Estrutura e Layout**

* **Abordagem Mobile-First:** Estilos devem ser escritos para telas pequenas primeiro e aprimorados com media queries (min-width)25.  
* **HTML Semântico:** Utilize \<header\>, \<main\>, \<footer\>, \<section\> e \<h1\>26.  
* **Cabeçalho (\<header\>):** Fixo (position: fixed), com fundo semitransparente e backdrop-filter: blur(10px)27272727.  
* **Rodapé (\<footer\>):** Deve conter o logo apropriado, slogan e informações de contato28.

### **4\. Componentes**

#### **4.1. Card Padrão (.card)**

* **Estilo:** Fundo var(--card-bg), borda 1px solid var(--border-color), padding: var(--space-md), cantos arredondados (border-radius: 12px)29292929.  
* **Estados de Interação:**  
  * :hover: transform: translateY(-10px); box-shadow: ...; (eleva o card)30303030.  
  * :focus-visible: outline: 3px solid var(--accent-color); (essencial para acessibilidade)31.

#### **4.2. Variações de Componentes**

* **Seção de Clientes (Página Institucional):**  
  * Um grid flexível (  
    .clientes-grid) com as imagens dos logos (.cliente-logo)32.  
  * **Estilo:** Padrão com filter: grayscale(100%), que é removido no :hover33.  
* **Card de Diagnóstico (Proposta Comercial):**  
  * Uma variação do  
     .card que possui uma borda esquerda verde vibrante (border-left: 3px solid var(--accent-color)) para destaque34.  
* **Linha do Tempo Vertical (Proposta Comercial):**  
  * Componente para apresentar as fases do projeto35.  
  * **Estrutura:** Uma linha vertical (::after) na cor var(--accent-color)36. Os itens são distribuídos alternadamente à esquerda e à direita37.  
  * **Animação:** Cada item desliza para dentro a partir da lateral (slide-in) com um pequeno atraso sequencial38.

### **5\. Animações e Performance**

* **Animação de Entrada (.fade-in):**  
  * **Efeito:** Os elementos surgem suavemente de baixo para cima com um fade39.  
  * **Implementação:** A animação deve ser ativada via **IntersectionObserver** para garantir que ela só ocorra quando a seção estiver visível, otimizando a performance40.  
  * **CSS:**  
  * CSS

@keyframes fadeIn {  
  from { opacity: 0; transform: translateY(20px); }  
  to { opacity: 1; transform: translateY(0); }  
}  
.fade-in {  
  animation: fadeIn 0.8s ease-out forwards;  
}

*   
  *   
* **Otimização de Imagens:** Todas as imagens devem usar o atributo loading="lazy" e, se possível, ser servidas no formato WebP41.

### **6\. Padrões de Acessibilidade (a11y)**

A aplicação destas regras é **obrigatória**.

* **Contraste:** Todas as combinações de texto e fundo devem passar na verificação de contraste AA da WCAG42.  
* **Navegação por Teclado:** Todos os elementos interativos (links, botões) devem ter um estado :focus-visible claro e distinto43.  
* **Texto Alternativo:** Todas as imagens (\<img\>) devem ter um atributo alt descritivo (ex: alt="Logo da empresa XYZ")44.

### **7\. Instrução Final para o Prompt de IA**

Use esta instrução unificada para garantir a criação de páginas consistentes com este sistema de design.

"Atue como um desenvolvedor front-end sênior. Crie uma página **\[de apresentação institucional da Live Consultoria OU de proposta comercial para o cliente (Nome do Cliente)\]**. A página deve seguir rigorosamente o Sistema de Design Unificado da Live, com foco em performance e acessibilidade.

**Diretrizes Essenciais:**

1. **Estrutura e Semântica:** Use HTML5 semântico (\<header\>, \<main\>, etc.).  
2. **Estilo com Tokens:** Utilize exclusivamente as variáveis CSS (tokens) para cores, fontes e espaçamentos.  
3. **Layout Responsivo:** Adote uma abordagem Mobile-First.  
4. **Ativos da Marca:** Utilize os URLs de logos e texturas definidos no guia, aplicando o logo correto para o contexto (Institucional vs. Proposta). O fundo deve ter a textura de cubos com background-attachment: fixed.  
5. **Componentes:** Todos os blocos de conteúdo devem usar o componente .card com todos os seus estados de interação definidos.  
6. **Animações e Performance:** Seções devem ter animação fade-in ativada via IntersectionObserver. Imagens devem ter loading="lazy".  
7. **Acessibilidade:** Garanta contraste de cores, foco visível para teclado e textos alternativos para imagens.

**Conteúdo Específico:**

* **\[SE FOR INSTITUCIONAL\]:** Inclua a seção '\#clientes', populando-a com todos os logos da Biblioteca de Ativos.  
* **\[SE FOR PROPOSTA\]:** Omita a seção '\#clientes'. Personalize o conteúdo para o (Nome do Cliente). Use a fonte var(--font-secondary) na seção de diagnóstico e implemente o 'Plano de Ação' usando o componente de linha do tempo vertical animada."

### Sumário de Sugestões para Melhorias Visuais e de Usabilidade (UX/UI)
**Documento de Suporte ao Guia de Estilo V2 (LiVe)**

**Propósito:** Este documento consolida diretrizes estratégicas de Experiência do Usuário (UX) e Interface do Usuário (UI) para a implementação das páginas HTML da Live Consultoria. O foco é aprimorar a conversão, a legibilidade e a acessibilidade, mantendo a rigorosa aderência aos *tokens* de design definidos no Guia de Estilo (V2).

---

### I. Diretrizes de Cores, Foco e Estética (UI/Branding)

| Diretriz | Racional e Suporte | Conflitos Potenciais e Comando de IA |
| :--- | :--- | :--- |
| **1. Uso Estratégico da Cor de Destaque** | O **Verde Vibrante** (`--accent-color`) deve ser utilizado com moderação e intencionalidade para evitar a competição visual. Essa cor deve ser reservada para elementos que exigem ação imediata (CTAs primários) e fornecem feedback (foco visível). O uso estratégico de cores contrastantes faz com que o botão *call-to-action* se destaque do resto do conteúdo. | **Conflito (Uso em Títulos):** O Guia de Estilo permite o uso do *token* `--accent-color` para "títulos". O uso excessivo pode levar à **Cegueira a Anúncios** (ignorar o destaque). **Comando de IA:** Priorize o `var(--accent-color)` estritamente em **botões e CTAs primários** e no estado `:focus-visible`. Reduza seu uso em títulos que não sejam o `<h1>` ou blocos que não requeiram ação imediata. |
| **2. Contraste e Acessibilidade Visual** | O contraste é crucial para a legibilidade dos conteúdos e a acessibilidade do site. Todas as combinações de texto/fundo devem satisfazer o requisito **WCAG AA**. | **Refinamento (Texto Longo):** Em fundos escuros (`--primary-bg`), o texto longo principal deve preferir tons cinzentos suaves (`--text-subtle` ou `--text-muted`) em vez de branco puro (`--text-primary`) para reduzir a **fadiga visual**. **Comando de IA:** EM **PARÁGRAFOS EXTENSOS**, substitua o `var(--text-primary)` pelo `var(--text-subtle)` ou `var(--text-muted)`. Em títulos ou textos curtos, mantenha `var(--text-primary)`. |
| **3. Estética Minimalista** | Priorize o **Design Minimalista e Funcional**, utilizando layouts limpos e amplo **Espaço em Branco** (*whitespace*). O design minimalista e estético assegura que os diálogos não contenham informações irrelevantes ou raramente necessárias, focando no essencial. | **Comando de IA:** Garanta que os elementos visuais suportem os objetivos principais do usuário. Utilize a escala de espaçamento do sistema de design (`--space-sm`, `--space-md`, etc.) para separar seções e parágrafos, facilitando a leitura (Macro e Micro *Whitespace*). |

### II. Diretrizes de Conteúdo e Legibilidade (UX)

| Diretriz | Racional e Suporte | Conflitos Potenciais e Comando de IA |
| :--- | :--- | :--- |
| **4. Hierarquia e Escala de Títulos** | Mantenha uma hierarquia textual clara (H1, H2, H3) e utilize a escala de tamanho definida pelos *tokens* (`--font-size-h1`, etc.). A Hierarquia dentro do design de interface prioriza um elemento em detrimento do outro a partir de critérios como tamanho. | **Comando de IA:** Garanta o uso de um **único `<h1>` por página** para definir o conteúdo mais importante e a palavra-chave foco. Utilize `<h2>` e `<h3>` para estruturar e agrupar o conteúdo abaixo. |
| **5. Otimização da Linha de Texto** | Limite o corpo do texto a uma largura que contenha **entre 50 e 75 caracteres por linha**. Isso evita tornar o texto tedioso e causa cansaço visual, melhorando a legibilidade. | **Comando de IA:** Aplique *breakpoints* (consultas de mídia) para restringir a largura máxima do texto, garantindo que colunas de conteúdo longo não excedam 75 caracteres em telas maiores. |
| **6. Organização e Agrupamento (*Chunking*)** | Agrupe informações relacionadas em "blocos" visualmente distintos, usando o componente `.card` e o princípio de proximidade. Isso ajuda os usuários a processar, entender e memorizar as informações facilmente (Lei de Miller). | **Comando de IA:** Ao desenvolver seções de recursos ou portfólio, use o componente `.card` para agrupar visualmente informações de forma coesa, reforçando a estrutura de módulos (Chunking). |

### III. Diretrizes de Interação e Performance (Acessibilidade)

| Diretriz | Racional e Suporte | Conflitos Potenciais e Comando de IA |
| :--- | :--- | :--- |
| **7. Design Responsivo (Mobile-First)** | Siga a abordagem **Mobile-First** e garanta que o site esteja adaptado para dispositivos móveis. A flexibilidade de design é crucial, pois o tamanho da tela não prevê o que o usuário quer ver. | **Comando de IA:** Defina os estilos para telas pequenas e depois aprimore com *media queries* (`min-width`) para *breakpoints* maiores. Utilize **Flexbox** ou **CSS Grid** para layouts responsivos. |
| **8. Performance e Carregamento Rápido** | O carregamento lento é um dos erros mais comuns que trazem malefícios ao negócio. Forneça *feedback* do sistema em até **400 ms** (Limiar de Doherty) para manter a atenção do usuário. | **Comando de IA:** Garanta que todas as imagens (`<img>`) incluam atributos `width` e `height` (além de `loading="lazy"`) para evitar mudanças abruptas de layout (*layout shifts*) e otimizar a velocidade de carregamento. Ative a animação `.fade-in` via `IntersectionObserver`. |
| **9. Otimização de Formulários e Feedback** | Formulários devem ser concisos e simples, limitando o número de campos (Lei de Hick). É fundamental fornecer **feedback imediato** ao usuário após o preenchimento, confirmando ou diagnosticando erros em linguagem simples. | **Comando de IA:** Em caso de erro (ex: preenchimento de login), a mensagem deve ser expressa sem códigos, indicar precisamente o problema e sugerir uma solução de forma construtiva (Heurística 9). Garanta que os campos de formulário solicitem apenas o necessário. |
| **10. Acessibilidade na Navegação** | Todos os elementos interativos (como links e cartões) devem ter um estado de foco visível e claro (`:focus-visible` com `var(--accent-color)`) para garantir a **Navegação por Teclado**. **Alvos de toque** em dispositivos móveis devem ter tamanho e espaçamento adequados. | **Comando de IA:** Verifique se todas as imagens possuem o atributo `alt` descritivo. Utilize navegação por links de forma intuitiva, aderindo à **Consistência e Padronização** (Heurística 4). |

### IV. Comando Final para o Processamento por IA (Reforço Empresarial)

Utilize a instrução de *prompt* já definida no guia, mas inclua as seguintes diretrizes para garantir a **resiliência do design** e a **otimização de conversão**:

> "Na fase de 'Prototipação', **valide a usabilidade e a arquitetura da informação** aplicando a técnica de **Card Sorting** para garantir que a navegação do site atenda aos modelos mentais do público-alvo (Lei de Jakob). Garanta que os CTAs e botões primários sigam o **Efeito von Restorff** para maximizar a conversão. Para todo o conteúdo longo, aplique o princípio de **Chunking** e o limite de **50 a 75 caracteres por linha** para otimizar a legibilidade."

### Análise do `index.html` para Padrão de Página

Analisei o arquivo `index.html`. O padrão para criar novas páginas ou seções é bastante claro e modular. Aqui está um resumo:

**Estrutura Principal:**

*   **Arquivo HTML:** A página é um único arquivo HTML com o CSS e o JavaScript embutidos.
*   **Cabeçalho (`<header>`):** Fixo no topo, contém o logo.
*   **Seções (`<section>`):** O corpo da página é dividido em seções. Cada seção tem um propósito (ex: "Sobre", "Serviços").
*   **Container (`<div class="container">`):** Cada seção principal usa uma `div` com a classe `container` para centralizar o conteúdo e manter as margens.
*   **Títulos (`<h2>`):** As seções são introduzidas por um título `<h2>`.
*   **Rodapé (`<footer>`):** Fixo na parte inferior, com informações de contato e direitos autorais.

**Estilo e Componentes:**

*   **Cores:** O estilo é controlado por variáveis CSS no início do bloco `<style>` (ex: `--azul-petroleo`, `--verde-vibrante`). Isso facilita a manutenção da paleta de cores.
*   **Grids:** O layout dos itens é feito com classes de grid, como `grid`, `grid-2`, `grid-3`, `grid-4`.
*   **Cards (`<div class="card">`):** O conteúdo é frequentemente apresentado em "cards", que são caixas com fundo escuro, bordas arredondadas e uma leve sombra.
*   **Botões (`<a class="cta-button">`):** Há um estilo padrão para botões de "call-to-action".
*   **Animação:** As seções usam a classe `fade-in` para uma animação suave de surgimento ao rolar a página. O JavaScript no final do arquivo cuida dessa funcionalidade.

**Como criar uma nova página/seção (o padrão):**

1.  **Copie a estrutura básica:** Comece com a mesma estrutura de `index.html`, incluindo o `<head>` (com todo o CSS), o `<header>` e o `<footer>`.
2.  **Crie uma nova `<section>`:** Para cada novo bloco de conteúdo, crie uma tag `<section>`.
3.  **Adicione um `<div class="container">`:** Dentro da seção, coloque seu conteúdo dentro de um `<div class="container">`.
4.  **Use os componentes existentes:** Utilize as classes CSS já prontas para criar seus layouts. Por exemplo, para criar uma seção com três cards:

    ```html
    <section id="nova-secao" class="container fade-in">
        <h2>Título da Nova Seção</h2>
        <div class="grid grid-3">
            <div class="card">
                <h3>Novo Item 1</h3>
                <p>Descrição do novo item 1.</p>
            </div>
            <div class="card">
                <h3>Novo Item 2</h3>
                <p>Descrição do novo item 2.</p>
            </div>
            <div class="card">
                <h3>Novo Item 3</h3>
                <p>Descrição do novo item 3.</p>
            </div>
        </div>
    </section>
    ```

5.  **Adicione a classe `fade-in`:** Se quiser que a nova seção apareça com a animação de scroll, adicione a classe `fade-in` à tag `<section>`.

Seguindo esses passos, você manterá a consistência visual e funcional da página existente.

### Sumário de Sugestões para Melhorias Visuais e de Usabilidade (UX/UI)
**Documento de Suporte ao Guia de Estilo V2 (LiVe)**

**Propósito:** Este documento consolida diretrizes estratégicas de Experiência do Usuário (UX) e Interface do Usuário (UI) para a implementação das páginas HTML da Live Consultoria. O foco é aprimorar a conversão, a legibilidade e a acessibilidade, mantendo a rigorosa aderência aos *tokens* de design definidos no Guia de Estilo (V2).

---

### I. Diretrizes de Cores, Foco e Estética (UI/Branding)

| Diretriz | Racional e Suporte | Conflitos Potenciais e Comando de IA |
| :--- | :--- | :--- |
| **1. Uso Estratégico da Cor de Destaque** | O **Verde Vibrante** (`--accent-color`) deve ser utilizado com moderação e intencionalidade para evitar a competição visual. Essa cor deve ser reservada para elementos que exigem ação imediata (CTAs primários) e fornecem feedback (foco visível). O uso estratégico de cores contrastantes faz com que o botão *call-to-action* se destaque do resto do conteúdo. | **Conflito (Uso em Títulos):** O Guia de Estilo permite o uso do *token* `--accent-color` para "títulos". O uso excessivo pode levar à **Cegueira a Anúncios** (ignorar o destaque). **Comando de IA:** Priorize o `var(--accent-color)` estritamente em **botões e CTAs primários** e no estado `:focus-visible`. Reduza seu uso em títulos que não sejam o `<h1>` ou blocos que não requeiram ação imediata. |
| **2. Contraste e Acessibilidade Visual** | O contraste é crucial para a legibilidade dos conteúdos e a acessibilidade do site. Todas as combinações de texto/fundo devem satisfazer o requisito **WCAG AA**. | **Refinamento (Texto Longo):** Em fundos escuros (`--primary-bg`), o texto longo principal deve preferir tons cinzentos suaves (`--text-subtle` ou `--text-muted`) em vez de branco puro (`--text-primary`) para reduzir a **fadiga visual**. **Comando de IA:** EM **PARÁGRAFOS EXTENSOS**, substitua o `var(--text-primary)` pelo `var(--text-subtle)` ou `var(--text-muted)`. Em títulos ou textos curtos, mantenha `var(--text-primary)`. |
| **3. Estética Minimalista** | Priorize o **Design Minimalista e Funcional**, utilizando layouts limpos e amplo **Espaço em Branco** (*whitespace*). O design minimalista e estético assegura que os diálogos não contenham informações irrelevantes ou raramente necessárias, focando no essencial. | **Comando de IA:** Garanta que os elementos visuais suportem os objetivos principais do usuário. Utilize a escala de espaçamento do sistema de design (`--space-sm`, `--space-md`, etc.) para separar seções e parágrafos, facilitando a leitura (Macro e Micro *Whitespace*). |

### II. Diretrizes de Conteúdo e Legibilidade (UX)

| Diretriz | Racional e Suporte | Conflitos Potenciais e Comando de IA |
| :--- | :--- | :--- |
| **4. Hierarquia e Escala de Títulos** | Mantenha uma hierarquia textual clara (H1, H2, H3) e utilize a escala de tamanho definida pelos *tokens* (`--font-size-h1`, etc.). A Hierarquia dentro do design de interface prioriza um elemento em detrimento do outro a partir de critérios como tamanho. | **Comando de IA:** Garanta o uso de um **único `<h1>` por página** para definir o conteúdo mais importante e a palavra-chave foco. Utilize `<h2>` e `<h3>` para estruturar e agrupar o conteúdo abaixo. |
| **5. Otimização da Linha de Texto** | Limite o corpo do texto a uma largura que contenha **entre 50 e 75 caracteres por linha**. Isso evita tornar o texto tedioso e causa cansaço visual, melhorando a legibilidade. | **Comando de IA:** Aplique *breakpoints* (consultas de mídia) para restringir a largura máxima do texto, garantindo que colunas de conteúdo longo não excedam 75 caracteres em telas maiores. |
| **6. Organização e Agrupamento (*Chunking*)** | Agrupe informações relacionadas em "blocos" visualmente distintos, usando o componente `.card` e o princípio de proximidade. Isso ajuda os usuários a processar, entender e memorizar as informações facilmente (Lei de Miller). | **Comando de IA:** Ao desenvolver seções de recursos ou portfólio, use o componente `.card` para agrupar visualmente informações de forma coesa, reforçando a estrutura de módulos (Chunking). |

### III. Diretrizes de Interação e Performance (Acessibilidade)

| Diretriz | Racional e Suporte | Conflitos Potenciais e Comando de IA |
| :--- | :--- | :--- |
| **7. Design Responsivo (Mobile-First)** | Siga a abordagem **Mobile-First** e garanta que o site esteja adaptado para dispositivos móveis. A flexibilidade de design é crucial, pois o tamanho da tela não prevê o que o usuário quer ver. | **Comando de IA:** Defina os estilos para telas pequenas e depois aprimore com *media queries* (`min-width`) para *breakpoints* maiores. Utilize **Flexbox** ou **CSS Grid** para layouts responsivos. |
| **8. Performance e Carregamento Rápido** | O carregamento lento é um dos erros mais comuns que trazem malefícios ao negócio. Forneça *feedback* do sistema em até **400 ms** (Limiar de Doherty) para manter a atenção do usuário. | **Comando de IA:** Garanta que todas as imagens (`<img>`) incluam atributos `width` e `height` (além de `loading="lazy"`) para evitar mudanças abruptas de layout (*layout shifts*) e otimizar a velocidade de carregamento. Ative a animação `.fade-in` via `IntersectionObserver`. |
| **9. Otimização de Formulários e Feedback** | Formulários devem ser concisos e simples, limitando o número de campos (Lei de Hick). É fundamental fornecer **feedback imediato** ao usuário após o preenchimento, confirmando ou diagnosticando erros em linguagem simples. | **Comando de IA:** Em caso de erro (ex: preenchimento de login), a mensagem deve ser expressa sem códigos, indicar precisamente o problema e sugerir uma solução de forma construtiva (Heurística 9). Garanta que os campos de formulário solicitem apenas o necessário. |
| **10. Acessibilidade na Navegação** | Todos os elementos interativos (como links e cartões) devem ter um estado de foco visível e claro (`:focus-visible` com `var(--accent-color)`) para garantir a **Navegação por Teclado**. **Alvos de toque** em dispositivos móveis devem ter tamanho e espaçamento adequados. | **Comando de IA:** Verifique se todas as imagens possuem o atributo `alt` descritivo. Utilize navegação por links de forma intuitiva, aderindo à **Consistência e Padronização** (Heurística 4). |

### IV. Comando Final para o Processamento por IA (Reforço Empresarial)

Utilize a instrução de *prompt* já definida no guia, mas inclua as seguintes diretrizes para garantir a **resiliência do design** e a **otimização de conversão**:

> "Na fase de 'Prototipação', **valide a usabilidade e a arquitetura da informação** aplicando a técnica de **Card Sorting** para garantir que a navegação do site atenda aos modelos mentais do público-alvo (Lei de Jakob). Garanta que os CTAs e botões primários sigam o **Efeito von Restorff** para maximizar a conversão. Para todo o conteúdo longo, aplique o princípio de **Chunking** e o limite de **50 a 75 caracteres por linha** para otimizar a legibilidade."

### Análise do `index.html` para Padrão de Página

Analisei o arquivo `index.html`. O padrão para criar novas páginas ou seções é bastante claro e modular. Aqui está um resumo:

**Estrutura Principal:**

*   **Arquivo HTML:** A página é um único arquivo HTML com o CSS e o JavaScript embutidos.
*   **Cabeçalho (`<header>`):** Fixo no topo, contém o logo.
*   **Seções (`<section>`):** O corpo da página é dividido em seções. Cada seção tem um propósito (ex: "Sobre", "Serviços").
*   **Container (`<div class="container">`):** Cada seção principal usa uma `div` com a classe `container` para centralizar o conteúdo e manter as margens.
*   **Títulos (`<h2>`):** As seções são introduzidas por um título `<h2>`.
*   **Rodapé (`<footer>`):** Fixo na parte inferior, com informações de contato e direitos autorais.

**Estilo e Componentes:**

*   **Cores:** O estilo é controlado por variáveis CSS no início do bloco `<style>` (ex: `--azul-petroleo`, `--verde-vibrante`). Isso facilita a manutenção da paleta de cores.
*   **Grids:** O layout dos itens é feito com classes de grid, como `grid`, `grid-2`, `grid-3`, `grid-4`.
*   **Cards (`<div class="card">`):** O conteúdo é frequentemente apresentado em "cards", que são caixas com fundo escuro, bordas arredondadas e uma leve sombra.
*   **Botões (`<a class="cta-button">`):** Há um estilo padrão para botões de "call-to-action".
*   **Animação:** As seções usam a classe `fade-in` para uma animação suave de surgimento ao rolar a página. O JavaScript no final do arquivo cuida dessa funcionalidade.

**Como criar uma nova página/seção (o padrão):**

1.  **Copie a estrutura básica:** Comece com a mesma estrutura de `index.html`, incluindo o `<head>` (com todo o CSS), o `<header>` e o `<footer>`.
2.  **Crie uma nova `<section>`:** Para cada novo bloco de conteúdo, crie uma tag `<section>`.
3.  **Adicione um `<div class="container">`:** Dentro da seção, coloque seu conteúdo dentro de um `<div class="container">`.
4.  **Use os componentes existentes:** Utilize as classes CSS já prontas para criar seus layouts. Por exemplo, para criar uma seção com três cards:

    ```html
    <section id="nova-secao" class="container fade-in">
        <h2>Título da Nova Seção</h2>
        <div class="grid grid-3">
            <div class="card">
                <h3>Novo Item 1</h3>
                <p>Descrição do novo item 1.</p>
            </div>
            <div class="card">
                <h3>Novo Item 2</h3>
                <p>Descrição do novo item 2.</p>
            </div>
            <div class="card">
                <h3>Novo Item 3</h3>
                <p>Descrição do novo item 3.</p>
            </div>
        </div>
    </section>
    ```

5.  **Adicione a classe `fade-in`:** Se quiser que a nova seção apareça com a animação de scroll, adicione a classe `fade-in` à tag `<section>`.

Seguindo esses passos, você manterá a consistência visual e funcional da página existente.