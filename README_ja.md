# CSS グリッドジェネレーター

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <strong>日本語</strong> |
  <a href="./README_zh-TW.md">繁體中文</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![CSS グリッドジェネレーター](./public/og-cssgrid.jpg)

このプロジェクトは、CSS Grid の機能をすばやく使って動的なレイアウトを作るためのものです。

列と行の数と単位を指定すると、CSS Grid のコードを生成します。ボックス内をドラッグして、グリッド上に配置する div を作成できます。

Grid が難しすぎると感じて使わない人が多いことに気づきました。Grid ができることは非常に多く、この小さなジェネレーターはその一部にすぎません。目的は、すぐに使い始め、より面白いレイアウトを作れるようにすることです。

慣れてきたら、[Github](https://github.com/wangmiaozero)、[Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/)、[Wang Seddling](https://www.wangmiaozero.cn) の資料でさらに深く学ぶことをおすすめします。CSS-Tricks の [CSS Grid ガイド](https://css-tricks.com/snippets/css/complete-guide-grid/) や、[Grid Garden](https://cssgridgarden.com/) というゲームも役立ちます。

役に立ったら Star を付けてもらえるとうれしいです。ありがとうございます。

### 動作環境

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### セットアップ

```
pnpm install
```

開発用のコンパイルとホットリロード

```
pnpm run dev
```

本番用のコンパイルとミニファイ

```
pnpm run build
```

リントと自動修正

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

このテンプレートは、Vite で React を動かすための最小構成で、HMR と ESLint のルールを含みます。React 19 と Vite 6 の最新版を用い、モダンなフロントエンド開発のベストプラクティスを取り入れたテンプレートです。

公式プラグインは次の 2 つです。

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) は Fast Refresh に [Babel](https://babeljs.io/) を使用します。
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) は Fast Refresh に [SWC](https://swc.rs/) を使用します。


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

## ライセンス

このプロジェクトは **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)** の下で提供されます。

### 要約:
- **許可されること**:
  - 共有 — あらゆる媒体・形式で複製・再配布する。
  - 翻案 — リミックス・変形・翻案物の作成。

- **条件**:
  - **表示** — 適切なクレジット表示、ライセンスへのリンク、変更の有無の明示。合理的な方法で行うこと。ライセンサーがあなたを推奨していると示唆してはならない。
  - **非営利** — 営利目的で利用してはならない。

詳しくはリポジトリ内の [LICENSE](LICENSE) を参照してください。
