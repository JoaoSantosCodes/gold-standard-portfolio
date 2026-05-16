# PRD: Digital Brain Architecture

Este documento de requisitos do produto (PRD) estabelece as especificações para o framework de automação do **Digital Brain Architecture (Obsidian Second Brain)**.

---

## 1. Visão Geral & Objetivos

O **Digital Brain Architecture** é um framework projetado para transformar o Obsidian em um ecossistema de gestão do conhecimento altamente dinâmico, automatizado e focado em engenharia de infraestrutura de TI e desenvolvimento de software.

### Objetivos
- Reduzir o tempo de documentação manual de ativos de rede e sistemas.
- Gerar gráficos e grafos dinâmicos baseados nas dependências de servidores e bancos de dados.
- Prover templates inteligentes orientados a eventos para reuniões, relatórios de incidentes e especificações arquiteturais.

---

## 2. Tecnologias & Integração

| Componente | Ferramenta / Script | Função |
| :--- | :--- | :--- |
| **Plataforma Core** | Obsidian App | Visualizador e editor de notas baseado em Markdown local. |
| **Plugins Essenciais** | DataviewJS, Templater, QuickAdd | Consultas de dados internas e geração de templates dinâmicos. |
| **Language & Engine** | TypeScript / Node.js | Scripting de automação fora do Obsidian para coleta de telemetria. |
| **Graph engine** | Canvas / Graph View | Mapeamento de relacionamentos entre nós de infraestrutura. |

---

## 3. Fluxo de Automação de Documentação (SysAdmin)

```
[Servidor/Ativo de Rede] 
       │ (Telemetria/Cron)
       ▼
[Script Node.js / TypeScript] 
       │ (Gera nota .md formatada)
       ▼
[Obsidian Vault] ◄─── (DataviewJS mapeia dependências automaticamente)
```

---

## 4. Estrutura Padrão de Metadados (Frontmatter)

As notas de infraestrutura devem obedecer rigorosamente ao seguinte cabeçalho YAML para indexação automática pelo plugin `DataviewJS`:

```yaml
---
type: asset/server
hostname: srv-db-prod-01
ip_address: 192.168.0.101
os: Rocky Linux 9
status: active
environment: production
dependencies:
  - srv-storage-01
  - firewall-fortigate
tags:
  - infraestrutura
  - banco-de-dados
last_audit: 2026-05-16
---
```

---

## 5. Roadmap de Desenvolvimento (MVP ao V3)

1.  **MVP (Foco Estrutural):** Criação do template base de notas, pastas estruturadas sob metodologia PARA (Projects, Areas, Resources, Archives) e frontmatter padrão.
2.  **V1 (Automação de Ativos):** Script TypeScript local que varre a rede corporativa ou arquivos de inventário e gera as notas markdown de servidores automaticamente.
3.  **V2 (Mapeamento Dinâmico):** Utilização do DataviewJS para renderizar gráficos de arquitetura e diagramas de conectividade diretamente na nota raiz do painel.
4.  **V3 (Sincronização Cloud/GitHub):** Automação total via GitHub Actions para commitar modificações de notas críticas e gerar documentações estáticas públicas em tempo real.
