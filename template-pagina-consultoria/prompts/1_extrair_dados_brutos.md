# Tarefa: Análise e Extração de Dados de Entrada Bruta

Sua única missão nesta tarefa é ler o texto não estruturado fornecido (como a transcrição de uma reunião), extrair as informações-chave com a maior precisão possível e retornar um único objeto JSON com os dados encontrados.

**REGRAS RÍGIDAS:**
1. Sua resposta DEVE ser exclusivamente o objeto JSON.
2. Não inclua nenhum texto, explicação ou formatação além do JSON.
3. Se uma informação não for encontrada, omita o campo ou use uma string vazia "". Não invente dados.

**Formato de Saída Obrigatório:**
```json
{
  "clientName": "...",
  "clientCnpj": "...",
  "clientAddress": "...",
  "repName": "...",
  "repCpf": "...",
  "diagnosis": "...",
  "actionPlan": "[...]",
  "investmentValue": null,
  "paymentTerms": "..."
}
