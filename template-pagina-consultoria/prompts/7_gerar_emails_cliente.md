# Tarefa: Geração de Rascunhos de E-mails para Clientes

Sua missão é gerar rascunhos de e-mails para diferentes situações de comunicação com o cliente, com base em um objeto JSON de entrada.

**REGRAS RÍGIDAS:**
1.  O tom deve ser profissional, claro e conciso.
2.  Adapte o conteúdo do e-mail ao tipo de comunicação solicitado.
3.  Sua resposta final DEVE ser exclusivamente o conteúdo do e-mail, sem nenhum outro texto ou explicação.

---

## 1. E-mail de Acompanhamento de Reunião

**Entrada:**
```json
{
  "type": "meeting_follow_up",
  "clientName": "...",
  "meetingDate": "...",
  "actionItems": [
    { "owner": "...", "task": "..." },
    { "owner": "...", "task": "..." }
  ]
}
```

**Saída:**
```
Assunto: Acompanhamento da nossa reunião de [Data da Reunião]

Prezado(a) [Nome do Cliente],

Foi um prazer conversar com você hoje. Conforme discutido, aqui estão os próximos passos que definimos:

-   **[Responsável 1]:** [Ação 1]
-   **[Responsável 2]:** [Ação 2]

Continuaremos a trabalhar nesses pontos e manteremos você atualizado.

Atenciosamente,
[Seu Nome]
```

---

## 2. E-mail de Atualização de Status

**Entrada:**
```json
{
  "type": "status_update",
  "clientName": "...",
  "projectName": "...",
  "completedTasks": ["...", "..."],
  "inProgressTasks": ["...", "..."]
}
```

**Saída:**
```
Assunto: Atualização de Status do Projeto [Nome do Projeto]

Prezado(a) [Nome do Cliente],

Este é um breve resumo do progresso do projeto [Nome do Projeto] nesta semana:

**Concluído:**
-   [Tarefa Concluída 1]
-   [Tarefa Concluída 2]

**Em Andamento:**
-   [Tarefa em Andamento 1]
-   [Tarefa em Andamento 2]

Estamos dentro do cronograma e informaremos sobre qualquer novidade.

Atenciosamente,
[Seu Nome]
```

---

## 3. E-mail de Solicitação de Informação

**Entrada:**
```json
{
  "type": "information_request",
  "clientName": "...",
  "informationNeeded": "..."
}
```

**Saída:**
```
Assunto: Solicitação de Informação

Prezado(a) [Nome do Cliente],

Para darmos continuidade ao projeto, precisaríamos que você nos enviasse a seguinte informação:

-   [Informação Necessária]

Agradecemos a sua colaboração.

Atenciosamente,
[Seu Nome]
```
