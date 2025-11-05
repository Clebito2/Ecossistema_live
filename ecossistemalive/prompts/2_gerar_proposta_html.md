# Tarefa: Geração dos Artefatos da Proposta M.A.P.C.A.

Sua missão é receber um objeto JSON com dados de proposta validados, aplicar a inteligência de negócio do framework M.A.P.C.A. e gerar os dois artefatos HTML finais: a página da proposta e a página do contrato.

**REGRAS RÍGIDAS:**
1. Você DEVE aplicar a lógica do framework descrito em `@docs/framework_mapca.md` para enriquecer a proposta.
2. Você DEVE seguir a identidade visual descrita em `@docs/guia_estilo.md`.
3. Sua resposta final DEVE ser um único objeto JSON contendo os dois códigos HTML completos, sem nenhum outro texto ou explicação.

**Formato de Saída Obrigatório:**
```json
{
  "paginaPrincipalHTML": "<!-- Código HTML completo da página principal -->",
  "paginaContratoHTML": "<!-- Código HTML completo da página do contrato -->"
}
