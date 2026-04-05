# Gerador CSS Grid

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_zh-TW.md">繁體中文</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <strong>Português</strong> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![Gerador CSS Grid](./public/og-cssgrid.jpg)

Este projeto permite usar rapidamente os recursos de CSS Grid para criar layouts dinâmicos.

Defina o número e as unidades de colunas e linhas e um CSS Grid será gerado. Arraste dentro das caixas para criar `divs` na grade.

Muitas pessoas deixam de usar Grid por achá-lo complexo. O Grid é muito poderoso; este gerador cobre só uma parte. O objetivo é começar rápido e criar layouts mais interessantes.

Depois de se acostumar, veja materiais de [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/) e [Wang Seddling](https://www.wangmiaozero.cn). Há também um [guia de CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) no CSS-Tricks e o jogo [Grid Garden](https://cssgridgarden.com/).

Se este projeto ajudou, considere dar uma estrela. Obrigado!

### Requisitos de ambiente

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### Configuração do projeto

```
pnpm install
```

Compilação e recarregamento em desenvolvimento

```
pnpm run dev
```

Compilação e minificação para produção

```
pnpm run build
```

Lint e correções automáticas

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

Este modelo oferece uma configuração mínima para React com Vite, HMR e regras do ESLint. O projeto usa React 19 e Vite 6 e boas práticas de desenvolvimento front-end moderno.

Há dois plugins oficiais:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh


```
cssgridgenerator-react
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  ├─ favicon.ico
│  ├─ og-cssgrid.jpg
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ AppCode.jsx
│  │  ├─ AppExplain.jsx
│  │  ├─ AppForm.jsx
│  │  ├─ AppGithubCorner.jsx
│  │  ├─ AppGrid.jsx
│  │  ├─ AppHeader.jsx
│  │  ├─ AppLogo.jsx
│  │  └─ AppModal.jsx
│  ├─ i18n
│  │  ├─ bn.json
│  │  ├─ en.json
│  │  ├─ es.json
│  │  ├─ fr.json
│  │  ├─ index.jsx
│  │  ├─ pt.json
│  │  └─ zh.json
│  ├─ main.jsx
│  ├─ store
│  │  ├─ index.js
│  │  └─ slices
│  │     └─ gridSlice.js
│  ├─ styles
│  │  ├─ App.scss
│  │  ├─ components
│  │  │  ├─ AppCode.scss
│  │  │  ├─ AppExplain.scss
│  │  │  ├─ AppForm.scss
│  │  │  ├─ AppGithubCorner.scss
│  │  │  ├─ AppGrid.scss
│  │  │  ├─ AppHeader.scss
│  │  │  ├─ AppLogo.scss
│  │  │  └─ AppModal.scss
│  │  ├─ main.scss
│  │  └─ variables.scss
│  └─ utils
│     ├─ repetition.js
│     └─ repetition.spec.js
└─ vite.config.js

```

## Licença

Este projeto está licenciado sob **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.

### Resumo:
- **Você pode**:
  - Compartilhar — copiar e redistribuir o material em qualquer meio ou formato.
  - Adaptar — remixar, transformar e criar com base no material.

- **Nas seguintes condições**:
  - **Atribuição** — dar crédito, fornecer link à licença e indicar alterações de forma razoável, sem sugerir endosso do licenciador.
  - **NãoComercial** — não usar o material para fins comerciais.

Para mais detalhes, consulte o arquivo [LICENSE](LICENSE) no repositório.
