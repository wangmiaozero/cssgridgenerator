# Generatore CSS Grid

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <strong>Italiano</strong> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![Generatore CSS Grid](./public/og-cssgrid.jpg)

Questo progetto consente di usare rapidamente le funzionalità di CSS Grid per creare layout dinamici.

Imposta numero e unità di colonne e righe: verrà generato un CSS Grid. Trascina nelle caselle per creare `div` posizionati nella griglia.

Molti evitano Grid perché lo ritengono troppo complesso. Grid è molto potente; questo piccolo generatore ne copre solo una parte. Lo scopo è partire subito e realizzare layout più interessanti.

Quando ti senti a tuo agio, esplora le risorse di [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/) e [Wang Seddling](https://www.wangmiaozero.cn). C’è anche una [guida a CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) su CSS-Tricks e il gioco [Grid Garden](https://cssgridgarden.com/).

Se il progetto ti è stato utile, considera di assegnare una stella. Grazie!

### Requisiti di ambiente

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### Configurazione del progetto

```
pnpm install
```

Compilazione e hot-reload per lo sviluppo

```
pnpm run dev
```

Compilazione e minificazione per la produzione

```
pnpm run build
```

Lint e correzioni automatiche

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

Questo template offre una configurazione minima per React con Vite, HMR e alcune regole ESLint. Il progetto usa React 19 e Vite 6 e le buone pratiche dello sviluppo front-end moderno.

Sono disponibili due plugin ufficiali:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) per il Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) per il Fast Refresh


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

## Licenza

Questo progetto è rilasciato sotto **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.

### Sintesi:
- **È consentito**:
  - Condividere — copiare e redistribuire il materiale in qualsiasi formato.
  - Adattare — remixare, trasformare e creare opere derivate.

- **Alle condizioni seguenti**:
  - **Attribuzione** — indicare l’autore, fornire il link alla licenza e segnalare le modifiche in modo ragionevole, senza suggerire un’approvazione da parte del licenziante.
  - **Non commerciale** — non usare il materiale per scopi commerciali.

Per maggiori dettagli, vedi il file [LICENSE](LICENSE) nel repository.
