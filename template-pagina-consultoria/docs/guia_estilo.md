---

### **Sistema de Design e Padrão Técnico Unificado – Live Consultoria (V3)**

**Este documento é a fonte de verdade para a criação de qualquer página web da Live Consultoria, garantindo consistência, performance, acessibilidade e aderência à identidade da marca.**

### **1. Núcleo da Identidade Visual (Brand Core)**

A base de qualquer projeto é definida pelos seguintes tokens (variáveis CSS). A aplicação através destes tokens é obrigatória.

#### **1.1. Paleta de Cores (Tokens)**

CSS

:root {
  /* Paleta Principal */
  --primary-bg: #06192a;      /* Azul Petróleo - Fundo principal */
  --card-bg: #0A243D;         /* Azul Escuro - Fundo de cards */
  --accent-color: #00e800;     /* Verde Vibrante - Destaques, links, títulos */

  /* Textos */
  --text-primary: #ffffff;     /* Branco - Textos principais */
  --text-muted: #cccccc;       /* Cinza Claro */
  --text-subtle: #a0a0a0;       /* Cinza - Textos secundários e parágrafos */

  /* Bordas e Efeitos */
  --border-color: rgba(255, 255, 255, 0.1);
  --accent-glow: 0 0 8px rgba(0, 232, 0, 0.7); /* Sombra para o verde vibrante */
}

#### **1.2. Tipografia (Tokens)**

As fontes devem ser importadas no

<head> do HTML para melhor performance1.

HTML

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,700&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

CSS

:root {
  /* Famílias de Fonte */
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Merriweather', serif;

  /* Tamanhos de Fonte (Mobile-First) */
  --font-size-base: 1.1rem;
  --font-size-h3: 1.5rem;
  --font-size-h2: clamp(2rem, 4vw, 2.5rem);
  --font-size-h1: clamp(2.5rem, 5vw, 3rem);
}

* **Uso:**
  * var(--font-primary): Para todos os textos gerais, títulos e elementos de interface2.
  * var(--font-secondary): **Exclusivamente** para o texto do bloco "Diagnóstico Estratégico" em propostas comerciais3.

#### **1.3. Espaçamento (Tokens)**

Use a escala de espaçamento para todas as margens e paddings4.

CSS

:root {
  /* Escala de Espaçamento */
  --space-sm: 1rem;   /* 16px */
  --space-md: 2rem;   /* 32px */
  --space-lg: 4rem;   /* 64px */
  --space-xl: 6rem;   /* 96px */
}

### **2. Ativos da Marca (Asset Library)**

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
  background-color: var(--primary-bg); /* Fallback */
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

### **3. Estrutura e Layout**

* **Abordagem Mobile-First:** Estilos devem ser escritos para telas pequenas primeiro e aprimorados com media queries (min-width)25.
* **HTML Semântico:** Utilize <h1>, <main>, <footer>, <section> e <h1>26.
* **Cabeçalho (<header>):** Fixo (position: fixed), com fundo semitransparente e backdrop-filter: blur(10px)27272727.
* **Rodapé (<footer>):** Deve conter o logo apropriado, slogan e informações de contato28.

### **4. Componentes**

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

### **5. Animações e Performance**

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

### **6. Padrões de Acessibilidade (a11y)**

A aplicação destas regras é **obrigatória**.

* **Contraste:** Todas as combinações de texto e fundo devem passar na verificação de contraste AA da WCAG42.
* **Navegação por Teclado:** Todos os elementos interativos (links, botões) devem ter um estado :focus-visible claro e distinto43.
* **Texto Alternativo:** Todas as imagens (<img>) devem ter um atributo alt descritivo (ex: alt="Logo da empresa XYZ")44.

### **7. Instrução Final para o Prompt de IA**

Use esta instrução unificada para garantir a criação de páginas consistentes com este sistema de design.

"Atue como um desenvolvedor front-end sênior. Crie uma página **[de apresentação institucional da Live Consultoria OU de proposta comercial para o cliente (Nome do Cliente)]**. A página deve seguir rigorosamente o Sistema de Design Unificado da Live, com foco em performance e acessibilidade.

**Diretrizes Essenciais:**

1. **Estrutura e Semântica:** Use HTML5 semântico (<header>, <main>, etc.).
2. **Estilo com Tokens:** Utilize exclusivamente as variáveis CSS (tokens) para cores, fontes e espaçamentos.
3. **Layout Responsivo:** Adote uma abordagem Mobile-First.
4. **Ativos da Marca:** Utilize os URLs de logos e texturas definidos no guia, aplicando o logo correto para o contexto (Institucional vs. Proposta). O fundo deve ter a textura de cubos com background-attachment: fixed.
5. **Componentes:** Todos os blocos de conteúdo devem usar o componente .card com todos os seus estados de interação definidos.
6. **Animações e Performance:** Seções devem ter animação fade-in ativada via IntersectionObserver. Imagens devem ter loading="lazy".
7. **Acessibilidade:** Garanta contraste de cores, foco visível para teclado e textos alternativos para imagens.

**Conteúdo Específico:**

* **[SE FOR INSTITUCIONAL]:** Inclua a seção '#clientes', populando-a com todos os logos da Biblioteca de Ativos.
* **[SE FOR PROPOSTA]:** Omita a seção '#clientes'. Personalize o conteúdo para o (Nome do Cliente). Use a fonte var(--font-secondary) na seção de diagnóstico e implemente o 'Plano de Ação' usando o componente de linha do tempo vertical animada."

Caso o usuário solicite a inclusão de um botão que encaminha para o Whatsapp, crie o botão utilizando o ícone com o link para contato: https://wa.me/5561996993134

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
