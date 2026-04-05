# Generador CSS Grid

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_zh-TW.md">繁體中文</a> |
  <a href="./README_ru.md">Русский</a> |
  <strong>Español</strong> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![Generador CSS Grid](./public/og-cssgrid.jpg)

Este proyecto permite usar rápidamente CSS Grid para crear diseños dinámicos.

Define el número y las unidades de columnas y filas y se generará un CSS Grid. Arrastra dentro de las celdas para crear `div` en la cuadrícula.

Muchas personas no usan Grid porque les parece demasiado complejo. Grid puede hacer mucho; este generador solo cubre una parte. El objetivo es empezar pronto y crear diseños más interesantes.

Cuando te sientas cómodo, revisa recursos de [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/) y [Wang Seddling](https://www.wangmiaozero.cn). También hay una [guía de CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) en CSS-Tricks y el juego [Grid Garden](https://cssgridgarden.com/).

Si este proyecto te ayudó, considera dar una estrella. ¡Gracias!

### Requisitos del entorno

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### Configuración del proyecto

```
pnpm install
```

Compilación y recarga en caliente para desarrollo

```
pnpm run dev
```

Compilación y minificación para producción

```
pnpm run build
```

Lint y corrección automática

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

Esta plantilla ofrece una configuración mínima para React con Vite, HMR y reglas de ESLint. El proyecto usa React 19 y Vite 6 e incorpora buenas prácticas de desarrollo front-end moderno.

Hay dos plugins oficiales:

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

## Licencia

Este proyecto se publica bajo **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.

### Resumen:
- **Puedes**:
  - Compartir — copiar y redistribuir el material en cualquier medio o formato.
  - Adaptar — remezclar, transformar y crear a partir del material.

- **Bajo estas condiciones**:
  - **Atribución** — debes dar crédito, enlazar la licencia e indicar cambios de forma razonable, sin sugerir que el licenciante te respalda.
  - **NoComercial** — no puedes usar el material con fines comerciales.

Más información en el archivo [LICENSE](LICENSE) del repositorio.
