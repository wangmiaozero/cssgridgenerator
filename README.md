# CSS Grid Generator

![CSS Grid Generator](./public/og-cssgrid.jpg)

English | [中文](./README.zh-CN.md)

This project is a way for people to use CSS Grid features quickly to create dynamic layouts.

You can set the numbers, and units of your columns and rows, and I'll generate a CSS grid for you! Drag within the boxes to create divs placed within the grid.

I noticed a lot of people weren't using Grid because they felt it was too complicated and they couldn't understand it. Grid is capable of so much, and this small generator only touches on a fraction of the features. The purpose of this is so people get up and running quickly, and create more interesting layouts.

Once you work with this a bit, I suggest checking out resources by [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/), and [ Wang Seddling ](https://www.wangmiaozero.cn) to dive deeper. There is also a [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) on CSS-Tricks, and a fun little game called [Grid Garden](https://cssgridgarden.com/) to help you learn more!

If this project has helped you, please give it a Star. Thank you!

### Environmental requirements.

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### Project setup

```
pnpm install
```

Compiles and hot-reloads for development

```
pnpm run dev
```

Compiles and minifies for production

```
pnpm run build
```

Lints and fixes files

```
pnpm run lint
```

# React 19 + Vite   6 + ESLint

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.This project utilizes the latest versions of React 19 and Vite 6, integrating the best practices of modern front-end development. It provides a set of powerful, high-performance, and flexible development templates. It offers developers an unprecedented development experience and ensures the project's compatibility and leading position in future technological changes.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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

## License
React is [MIT licensed](./LICENSE)