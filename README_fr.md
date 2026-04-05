# Générateur CSS Grid

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <strong>Français</strong> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![Générateur CSS Grid](./public/og-cssgrid.jpg)

Ce projet permet d’utiliser rapidement les fonctionnalités de CSS Grid pour créer des mises en page dynamiques.

Vous définissez le nombre et les unités de vos colonnes et lignes, et un CSS Grid est généré pour vous. Faites glisser dans les cases pour créer des `div` placées dans la grille.

Beaucoup de personnes n’utilisent pas Grid car elles le trouvent trop complexe. Grid est très puissant ; ce petit générateur n’en couvre qu’une partie. L’objectif est de démarrer vite et de concevoir des mises en page plus intéressantes.

Une fois à l’aise, explorez les ressources de [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/) et [Wang Seddling](https://www.wangmiaozero.cn). Il existe aussi un [guide CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) sur CSS-Tricks et le jeu [Grid Garden](https://cssgridgarden.com/) pour aller plus loin.

Si ce projet vous a aidé, merci d’ajouter une étoile au dépôt.

### Prérequis

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### Installation

```
pnpm install
```

Compilation et rechargement à chaud en développement

```
pnpm run dev
```

Compilation et minification pour la production

```
pnpm run build
```

Lint et corrections automatiques

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

Ce modèle fournit une configuration minimale pour React avec Vite, HMR et quelques règles ESLint. Le projet s’appuie sur React 19 et Vite 6, avec les bonnes pratiques du développement front-end moderne.

Deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utilise [Babel](https://babeljs.io/) pour le Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utilise [SWC](https://swc.rs/) pour le Fast Refresh


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

## Licence

Ce projet est sous licence **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.

### Résumé :
- **Vous êtes autorisé à** :
  - Partager — copier et redistribuer le matériel sur tout support et sous toute forme.
  - Adapter — remixer, transformer et créer à partir du matériel.

- **À condition de** :
  - **Attribution** — créditer l’auteur, fournir un lien vers la licence et indiquer les modifications. De manière raisonnable, sans suggérer qu’il vous approuve.
  - **NonCommercial** — ne pas utiliser le matériel à des fins commerciales.

Pour plus d’informations, voir le fichier [LICENSE](LICENSE) du dépôt.
