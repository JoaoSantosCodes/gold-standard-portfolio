# PRD: OpsBridge Zabbix-to-GLPI Connector

Este documento de requisitos do produto (PRD) estabelece as especificações de engenharia, regras de negócio e roteiro técnico para o desenvolvimento do **OpsBridge Zabbix-to-GLPI Connector**.

---

## 1. Visão Geral & Regras de Negócio

O **OpsBridge** é uma solução de middleware inteligente projetada para automatizar o gerenciamento de incidentes de TI. Ele atua como um tradutor autônomo entre o sistema de monitoramento (**Zabbix**) e a ferramenta de gerenciamento de serviços de TI (**GLPI**).

### A Missão do OpsBridge
Quando um Host monitorado pelo Zabbix apresenta uma falha (Trigger ativa), o OpsBridge abre automaticamente um chamado técnico estruturado no GLPI, atribui o chamado ao grupo de técnicos responsável pelo Host e encerra/resolve o chamado de forma autônoma assim que o Zabbix reporta que a falha foi sanada (OK).

---

## 2. Tecnologias & Endpoints

| Componente | Tecnologia | Função |
| :--- | :--- | :--- |
| **Middleware** | Python (FastAPI / Flask) | API leve de recepção e processamento de Webhooks. |
| **Monitoramento** | Zabbix Webhook Media Type | Disparo de requisições POST HTTP em formato JSON ao middleware. |
| **ITSM Service** | GLPI REST API (Web Services) | Abertura, atualização e encerramento de tickets. |
| **Database** | Redis / PostgreSQL | Armazenamento de cache para correlação de IDs (Zabbix Event ID vs GLPI Ticket ID). |

---

## 3. Fluxo de Vida Automatizado de um Incidente

```
[Incidente no Host (Trigger)]
              │
              ▼
[Zabbix envia POST Webhook] ───► [OpsBridge Middleware (Python)]
                                              │ (Consome API do GLPI)
                                              ▼
[GLPI: Chamado Aberto & Atribuído] ◄──────────┘
              │
              ▼
[Incidente resolvido (OK)]
              │
              ▼
[Zabbix envia POST Webhook] ───► [OpsBridge Middleware (Python)]
                                              │ (Busca correlação de IDs)
                                              ▼
[GLPI: Chamado Resolvido Autonomamente] ◄─────┘
```

---

## 4. Estrutura de Payload do Webhook (JSON)

Exemplo de payload enviado pelo Zabbix para a rota `/api/webhook` do OpsBridge na abertura de um chamado:

```json
{
  "event_id": "99120",
  "event_status": "PROBLEM",
  "host_name": "srv-app-prod-02",
  "host_ip": "172.16.10.45",
  "trigger_name": "High CPU utilization (over 90%)",
  "severity": "High",
  "trigger_value": "94.5%",
  "event_time": "2026-05-16 19:30:00"
}
```

---

## 5. Roadmap de Desenvolvimento (MVP ao V3)

1.  **MVP (Prova de Conceito):** Script Python CLI único que recebe argumentos via linha de comando, autentica na API do GLPI via token e cria um chamado simples com texto fixo.
2.  **V1 (Webhook Integration):** Servidor HTTP FastAPI que escuta requisições de Webhook do Zabbix, traduz o payload JSON e dispara a criação do ticket no GLPI.
3.  **V2 (Atribuição Inteligente & Cache):** Integração com Redis para salvar a correlação dos IDs (`event_id` do Zabbix e `ticket_id` do GLPI) e regras automáticas de atribuição (ex: Hosts do grupo "Banco de Dados" enviam chamados para a fila técnica de "DBAs").
4.  **V3 (Auto-Healing & Encerramento):** Lógica completa de monitoramento do status `OK`. O OpsBridge localiza o chamado correspondente no Redis e altera o status do ticket no GLPI para "Resolvido", injetando logs da resolução automática no chamado.
