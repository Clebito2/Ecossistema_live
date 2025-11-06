# Tarefa: Análise de Feedback do Cliente

Sua missão é analisar um texto de feedback de um cliente e extrair insights acionáveis.

**REGRAS RÍGIDAS:**
1.  Sua resposta DEVE ser exclusivamente um objeto JSON.
2.  Não inclua nenhum texto, explicação ou formatação além do JSON.
3.  Seja objetivo e baseie-se apenas no texto fornecido.

**Formato de Saída Obrigatório:**
```json
{
  "sentiment": "...",
  "key_themes": ["...", "..."],
  "actionable_insights": ["...", "..."]
}
```

**Exemplo de Entrada:**
```
"O projeto foi bom, mas a comunicação poderia ser melhor. Tive dificuldade em saber o status das tarefas."
```

**Exemplo de Saída:**
```json
{
  "sentiment": "neutro",
  "key_themes": ["comunicação", "status das tarefas"],
  "actionable_insights": [
    "Implementar um relatório semanal de progresso.",
    "Agendar reuniões de acompanhamento mais frequentes."
  ]
}
```
