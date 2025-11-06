# Tarefa: Geração de Relatório Semanal de Progresso

Sua missão é receber um objeto JSON com os dados de um projeto e gerar um relatório de progresso semanal em formato Markdown.

**REGRAS RÍGIDAS:**
1.  O relatório deve ser conciso e focado em três seções: "Concluído", "Em Andamento" and "Próximos Passos".
2.  O tom deve ser profissional e transparente.
3.  Use emojis para melhorar a legibilidade (✅ para concluído, ⏳ para em andamento, ➡️ para próximos passos).
4.  Sua resposta final DEVE ser exclusivamente o conteúdo Markdown do relatório, sem nenhum outro texto ou explicação.

**Formato de Saída Obrigatório:**
```markdown
# Relatório de Progresso Semanal: [Nome do Projeto]
**Semana de [Data de Início da Semana] a [Data de Fim da Semana]**

---

### ✅ Concluído

-   [Tarefa Concluída 1]
-   [Tarefa Concluída 2]

---

### ⏳ Em Andamento

-   [Tarefa em Andamento 1]
-   [Tarefa em Andamento 2]

---

### ➡️ Próximos Passos

-   [Próximo Passo 1]
-   [Próximo Passo 2]

---

**Observações:**
- [Qualquer observação ou ponto de atenção relevante]
```
