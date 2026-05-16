# PRD: Tactical HUD Component Library

Este documento de requisitos do produto (PRD) estabelece as especificações de design, componentes chave e roteiro técnico para a **Tactical HUD Component Library**.

---

## 1. Visão Geral & Estilo

A **Tactical HUD Component Library** é uma biblioteca de componentes React de alta fidelidade visual inspirada em interfaces de controle tático militar, displays de ficção científica (Sci-Fi FUI) e cockpits avançados.

### Diretrizes de Design
- **Contraste Extremo:** Fundo escuro com fontes monoespacadas luminosas.
- **Micro-Linhas e Retículas:** Detalhes de milímetros, miras, cruzes e delimitações geométricas de frações de pixel.
- **Animações Reativas:** Feedback imediato ao toque e foco do mouse usando transições de física de mola realistas.

---

## 2. Tecnologias & Distribuição

| Componente | Tecnologia | Finalidade |
| :--- | :--- | :--- |
| **Tecnologia Base** | React / TypeScript | Componentização robusta e tipagem segura. |
| **Mecanismo de Animação** | Framer Motion / Canvas API | Transições suaves de 60fps para elementos lineares complexos. |
| **Estilização** | Tailwind CSS | Gestão flexível de tokens de design. |
| **Distribuição** | NPM Package / Vite Library Mode | Facilidade de integração em qualquer projeto web. |

---

## 3. Catálogo de Componentes de Elite (Requisitos)

### [C1] Tactical Dock (Menu Orbitante)
- Menu de navegação flutuante reativo ao scroll.
- Efeito magnético suave ao passar o cursor sobre as opções.

### [C2] Terminal Log Stream
- Caixa de logs contínua que simula leitura de dados de rede.
- Efeito de digitação hacker ("decode") nos títulos e logs novos.

### [C3] Interactive Reticle Cursor
- Cursor personalizado em formato de mira que orbita elementos clicáveis de forma elástica.
- Modos reativos: `investigate` (foco), `click` (pulso), `locked` (seleção).

### [C4] Border Beam Card
- Card de contorno escuro e vidro fosco com feixe de laser que orbita suas bordas em loop.

---

## 4. Exemplo de Código do Pacote (NPM Export)

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface BorderBeamProps {
  children: React.ReactNode;
  duration?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({ children, duration = 4 }) => {
  return (
    <div className="relative p-6 bg-black/40 border border-white/10 rounded-sm overflow-hidden">
      {/* Animated Laser Border Beam */}
      <motion.div 
        className="absolute inset-0 border-t-2 border-primary rounded-sm pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
```

---

## 5. Roadmap de Desenvolvimento

```
[MVP: Componentes básicos de HUD e Grid]
                   │
                   ▼
[V1: Sistema de cursor interativo, miras e botões magnéticos]
                   │
                   ▼
[V2: Modais de briefing detalhados e gráficos SVG dinâmicos]
                   │
                   ▼
[V3: Empacotamento NPM e portal interativo de demonstração]
```
