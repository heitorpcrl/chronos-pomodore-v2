## 🍃 Chronos Pomodoro v2 🍃 (Em desenvolvimento...)

Landing page interativa sobre a técnica de estudo Pomodoro, construída com
React, TypeScript e Vite. O projeto oferece um timer dedicado aos ciclos de foco
e descanso, toasts para feedback rápido e avisos sonoros para ajudar na cadência
dos estudos.

### 🔋 Sobre o Projeto 🔋

O objetivo do Chronos Pomodoro v2 é facilitar a prática da técnica de Pomodoro
por meio de uma interface simples, responsiva e agradável. A página permite
iniciar/pausar o timer, receber notificações visuais (toasts) e alertas sonoros
ao término de cada ciclo, promovendo foco e um ritmo de estudos saudável.

- **Timer de Pomodoro**: ciclos configuráveis de foco e descanso.
- **Toasts/Feedback**: mensagens rápidas para ações e mudanças de estado.
- **Alertas Sonoros**: avisos ao final dos ciclos para não depender apenas da
  tela.
- **UI Responsiva**: experiência consistente em diferentes tamanhos de tela.

### 🔌 Tecnologias🔌

- **React** 19 + **TypeScript**
- **Vite** (dev server e build)
- **ESLint** e **TypeScript-ESLint** (qualidade de código)

### 🧩 Ferramentas e Extensões 🧩

- **Prettier**: formatação consistente do código
  - Extensão VS Code: `esbenp.prettier-vscode`
  - Configuração: `.prettierrc.json` (largura de linha 80, aspas simples, ponto
    e vírgula, etc.)
- **ESLint**: linting para JS/TS e React
  - Configuração: `eslint.config.js` (baseado em `@eslint/js`,
    `typescript-eslint`, `eslint-plugin-react-hooks`,
    `eslint-plugin-react-refresh`)
  - Ação ao salvar: correções via `source.fixAll.eslint` (configurado em
    `.vscode/settings.json`)
- **VS Code** (recomendações de ambiente)
  - Formatação padrão com Prettier e formatOnSave habilitado
  - Tamanhos de fonte e ajustes de interface para foco (breadcrumbs, activity
    bar oculta, etc.)

### 🧪 Requisitos 🧪

- Node.js 18+ (LTS)

### ⛓️ Scripts ⛓️

- `npm run dev`: inicia o ambiente de desenvolvimento com HMR.
- `npm run build`: gera o build de produção.
- `npm run preview`: serve o build gerado localmente.
- `npm run lint`: roda o linter no projeto.

Para iniciar rapidamente em desenvolvimento:

```bash
npm install
npm run dev
```

Para gerar e visualizar o build de produção:

```bash
npm run build
npm run preview
```

### 📂 Estrutura Básica 📂

- `src/`: código-fonte da aplicação (componentes React, estilos e assets).
- `public/`: arquivos públicos estáticos.
- `index.html`: entrada da aplicação Vite.

### Contribuição

Sinta-se à vontade para abrir issues e enviar PRs com melhorias, correções ou
novas ideias de UI/UX que melhorem a experiência de estudo.

### Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE (se
houver) para mais detalhes.
