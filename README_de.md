# CSS-Grid-Generator

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <strong>Deutsch</strong> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_zh-TW.md">繁體中文</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![CSS-Grid-Generator](./public/og-cssgrid.jpg)

Mit diesem Projekt kannst du CSS Grid schnell nutzen, um dynamische Layouts zu erstellen.

Du legst Anzahl und Einheiten für Spalten und Zeilen fest – daraus wird ein CSS-Grid generiert. Ziehe in den Kästchen, um `div`-Elemente im Raster zu platzieren.

Viele nutzen Grid nicht, weil es ihnen zu komplex wirkt. Grid kann sehr viel; dieser kleine Generator zeigt nur einen Teil. Ziel ist ein schneller Einstieg und interessantere Layouts.

Wenn du dich eingearbeitet hast, lohnt sich ein Blick auf Material von [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/) und [Wang Seddling](https://www.wangmiaozero.cn). Außerdem gibt es einen [CSS-Grid-Leitfaden](https://css-tricks.com/snippets/css/complete-guide-grid/) bei CSS-Tricks und das Spiel [Grid Garden](https://cssgridgarden.com/).

Wenn dir das Projekt geholfen hat, freuen wir uns über einen Star. Danke!

### Voraussetzungen

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### Einrichtung

```
pnpm install
```

Kompilieren und Hot-Reload für die Entwicklung

```
pnpm run dev
```

Kompilieren und Minifizieren für die Produktion

```
pnpm run build
```

Linting und automatische Korrekturen

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

Diese Vorlage bietet eine minimale Einrichtung für React mit Vite, HMR und einigen ESLint-Regeln. Das Projekt nutzt React 19 und Vite 6 und folgt gängigen Praktiken moderner Frontend-Entwicklung.

Zwei offizielle Plugins stehen bereit:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) nutzt [Babel](https://babeljs.io/) für Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) nutzt [SWC](https://swc.rs/) für Fast Refresh


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

## Lizenz

Dieses Projekt steht unter der **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.

### Kurzfassung:
- **Erlaubt**:
  - Teilen — Kopieren und Weitergeben in jedem Medium und Format.
  - Bearbeiten — Remixen, verändern und darauf aufbauen.

- **Unter folgenden Bedingungen**:
  - **Namensnennung** — Angemessene Urheberangabe, Link zur Lizenz und Hinweis auf Änderungen. Auf vernünftige Weise, ohne den Eindruck einer Billigung zu erwecken.
  - **Nicht kommerziell** — Keine kommerzielle Nutzung.

Weitere Informationen in der Datei [LICENSE](LICENSE) im Repository.
