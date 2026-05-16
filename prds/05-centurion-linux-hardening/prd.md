# PRD: Centurion Linux Hardening OS

Este documento de requisitos do produto (PRD) estabelece as diretrizes de desenvolvimento, segurança e roadmap para a construção do **Centurion Linux Hardening OS**.

---

## 1. Visão Geral & Objetivos

O **Centurion** é um framework automatizado em Bash projetado para auditoria e aplicação de regras estritas de segurança (*hardening*) em servidores Linux de classe empresarial (RedHat, CentOS, Rocky Linux, Debian, Ubuntu).

### Objetivos
- Reduzir a superfície de ataque de servidores corporativos de forma automatizada e idempotente.
- Alinhar configurações do sistema operacional com as recomendações de conformidade do **CIS Benchmarks** (Center for Internet Security).
- Gerar relatórios legíveis demonstrando itens de conformidade resolvidos e pendentes.

---

## 2. Tecnologias & Arquitetura

| Componente | Tecnologia | Finalidade |
| :--- | :--- | :--- |
| **Linguagem Principal** | Bash Scripting / POSIX Shell | Compatibilidade universal sem necessidade de instalar dependências extras no Host. |
| **Auditoria & Regras** | CIS Benchmarks v3.0 | Referência internacional de segurança da informação. |
| **Relatórios** | Markdown / JSON | Formato leve para auditoria automatizada. |
| **Segurança Adicional** | UFW / iptables / Firewalld | Gestão de portas e bloqueios ativos. |

---

## 3. Fluxo de Operação do Script

```
[Execução do Script ./centurion.sh]
                │
                ▼
[Fase 1: Auditoria de Conformidade] ─── (Gera Score Inicial)
                │
                ▼
[Fase 2: Aplicação do Hardening]
   ├─ Desativa USB/Sistemas de arquivos legados
   ├─ Configura SSH Seguro (/etc/ssh/sshd_config)
   ├─ Ajusta parâmetros de Kernel (/etc/sysctl.conf)
   └─ Define regras rígidas de Firewall
                │
                ▼
[Fase 3: Relatório de Pós-Hardening] ─── (Gera Score Final e Logs)
```

---

## 4. Módulos de Segurança (Requisitos)

### [M1] Módulo de Kernel (`sysctl`)
Ajustar parâmetros de rede para mitigar ataques de rede como spoofing, flooding e man-in-the-middle.

```bash
# Exemplo de regras sysctl que o script deve injetar
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.secure_redirects = 0
net.ipv4.conf.all.log_martians = 1
```

### [M2] Módulo de SSH Seguro (`sshd_config`)
Aplicar as melhores práticas recomendadas no protocolo SSH:
- Desativar login direto do usuário `root`.
- Limitar autenticação estritamente via chaves públicas (desativar senhas comuns).
- Definir tempo limite de inatividade da sessão e número máximo de tentativas de login.

### [M3] Módulo de Firewall (Iptables / UFW)
- Bloquear todas as conexões de entrada por padrão (*default drop*).
- Permitir apenas tráfego em portas estritamente necessárias (ex: SSH, HTTPS).

---

## 5. Roadmap de Desenvolvimento (MVP ao V3)

1.  **MVP (Auditoria Básica):** Script de verificação de conformidade simples (verifica permissões de arquivos críticos e permissão do root).
2.  **V1 (Hardening Automático):** Implementação ativa das configurações seguras de SSH, Kernel e desativação de módulos legados (USB, ext2).
3.  **V2 (Firewall & Relatórios):** Inclusão de regras de firewall resilientes e geração automática de relatórios em Markdown pós-auditoria.
4.  **V3 (Dashboard & API):** Dashboard visual em formato web e envio de relatórios de auditoria diretamente para canais seguros do administrador do sistema.
