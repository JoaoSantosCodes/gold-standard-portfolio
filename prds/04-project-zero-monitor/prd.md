# PRD: Project Zero Monitor

Este documento de requisitos do produto (PRD) define as diretrizes para a construção do **Project Zero Monitor**.

---

## 1. Visão Geral & Objetivos

O **Project Zero Monitor** é um sistema de monitoramento ultraleve projetado para servidores domésticos, dispositivos IoT de borda (como Raspberry Pi, Orange Pi) e pequenos ambientes virtualizados onde soluções como Zabbix seriam pesadas demais.

### Objetivos
- Prover monitoramento em tempo real de hardware crítico (CPU, RAM, Temperatura, Storage).
- Disparar alertas inteligentes assíncronos diretamente em canais de chat (Telegram/Discord).
- Operar com consumo de recursos de hardware irrisório (menos de 30MB de memória).

---

## 2. Arquitetura & Stack Recomendada

| Camada | Tecnologia | Função |
| :--- | :--- | :--- |
| **Agent / Collector** | Python 3 + `psutil` | Coleta de métricas do SO de forma idempotente e rápida. |
| **Broker / Transport** | MQTT (Mosquitto) / HTTP REST | Protocolo leve de publicação de mensagens. |
| **Banco de Dados** | SQLite3 | Banco de dados relacional embarcado (sem necessidade de servidor). |
| **Visualizer Dashboard** | HTML/JS puro ou Svelte | Painel web simples e de renderização instantânea. |

---

## 3. Fluxo de Monitoramento

```
[Edge Device (Host)] 
       │ (Coleta via psutil)
       ▼
[Local SQLite DB] ─── (Alarme se CPU > 90%) ───► [Telegram Bot Alert API]
       │
       ▼
[Minimal Web Dashboard] (Visualização via Chart.js / WebSocket)
```

---

## 4. Requisitos de Funcionalidades

### [F1] Agente de Coleta Autônomo
- Coletar utilização de CPU (por núcleo e média), uso de memória RAM/Swap, espaço de disco livre/usado e temperatura do processador a cada 10 segundos.
- Salvar dados localmente em arquivo SQLite rotativo (guarda apenas os últimos 7 dias de dados).

### [F2] Sistema de Alerta Proativo
- Monitorar limites de segurança customizados (ex: temperatura do Host > 75°C por mais de 2 minutos).
- Enviar notificação em formato de cartão tático para o Telegram contendo: Hostname, IP, Métrica Violada e Timestamp.

### [F3] Micro-Dashboard Web
- Exibição de gráficos em linha para uso histórico recente.
- Grid de status dos serviços ativos (systemd).

---

## 5. Roadmap de Desenvolvimento (MVP ao V3)

1.  **MVP (Coleta e Banco):** Script Python de coleta com saída em console e inserção no banco de dados SQLite.
2.  **V1 (Visualização Básica):** Servidor web Flask/FastAPI expondo rotas JSON e painel frontend com gráficos Chart.js.
3.  **V2 (Alertas & Notificação):** Integração com API do Telegram para disparo assíncrono de alertas de incidentes.
4.  **V3 (Multi-Host & Dashboard Central):** Suporte a múltiplos coletores publicando via MQTT em um único painel centralizado de monitoramento.
