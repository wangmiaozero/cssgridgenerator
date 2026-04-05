# CSS 網格產生器

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <strong>繁體中文</strong> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![CSS 網格產生器](./public/og-cssgrid.jpg)

本專案讓你能快速運用 CSS Grid 建立動態版面。

你可設定欄與列的數量與單位，系統會為你產生 CSS Grid。在方塊內拖曳即可在網格中建立 div。

許多人因覺得 Grid 太複雜而卻步。Grid 能力很強，這個小型產生器只涵蓋其中一部分；目的是讓你快速上手，做出更有趣的版面。

熟悉之後，建議參考 [Github](https://github.com/wangmiaozero)、[Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/)、[Wang Seddling](https://www.wangmiaozero.cn) 等資源深入學習。CSS-Tricks 上也有 [CSS Grid 指南](https://css-tricks.com/snippets/css/complete-guide-grid/)，以及小遊戲 [Grid Garden](https://cssgridgarden.com/) 協助學習。

若本專案對你有幫助，歡迎給予 Star，謝謝！

### 環境需求

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### 專案設定

```
pnpm install
```

編譯並啟用開發熱重載

```
pnpm run dev
```

編譯並壓縮以供正式環境

```
pnpm run build
```

Lint 並自動修正

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

此範本提供在 Vite 中執行 React 的最小設定，含 HMR 與部分 ESLint 規則。專案採用 React 19 與 Vite 6，並整合現代前端開發最佳實務。

目前有兩個官方外掛：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) 使用 [Babel](https://babeljs.io/) 實作 Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) 使用 [SWC](https://swc.rs/) 實作 Fast Refresh


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

## 授權

本專案採用 **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)** 授權。

### 摘要：
- **你可自由**：
  - 分享 — 以任何媒介或格式複製與散布本資料。
  - 改作 — 重混、轉換或依本資料建立新著作。

- **惟需遵守**：
  - **姓名標示** — 適當標示作者、提供授權連結，並註明是否曾修改；方式須合理，且不得暗示授權人背書你或你的使用方式。
  - **非商業性** — 不得為商業目的而使用本資料。

詳見儲存庫中的 [LICENSE](LICENSE) 檔案。
