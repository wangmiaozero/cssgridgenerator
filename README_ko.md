# CSS 그리드 생성기

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <strong>한국어</strong> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_zh-TW.md">繁體中文</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ar.md">العربية</a>
</p>

![CSS 그리드 생성기](./public/og-cssgrid.jpg)

이 프로젝트는 CSS Grid 기능을 빠르게 사용해 동적 레이아웃을 만드는 도구입니다.

열과 행의 개수와 단위를 설정하면 CSS Grid 코드를 생성해 드립니다. 박스 안을 드래그해 그리드에 배치할 div를 만들 수 있습니다.

많은 사람이 Grid가 너무 복잡하다고 느껴 사용하지 않는 것을 보았습니다. Grid는 할 수 있는 일이 매우 많고, 이 작은 생성기는 그중 일부만 다룹니다. 목표는 빠르게 시작해 더 흥미로운 레이아웃을 만드는 것입니다.

조금 익숙해지면 [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/), [Wang Seddling](https://www.wangmiaozero.cn) 등의 자료로 더 깊이 파보는 것을 권합니다. CSS-Tricks의 [CSS Grid 가이드](https://css-tricks.com/snippets/css/complete-guide-grid/)와 [Grid Garden](https://cssgridgarden.com/) 같은 작은 게임으로도 더 배울 수 있습니다.

이 프로젝트가 도움이 되었다면 Star를 눌러 주세요. 감사합니다!

### 환경 요구 사항

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### 프로젝트 설정

```
pnpm install
```

개발용 컴파일 및 핫 리로드

```
pnpm run dev
```

프로덕션용 컴파일 및 압축

```
pnpm run build
```

린트 및 자동 수정

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

이 템플릿은 Vite에서 React를 HMR과 일부 ESLint 규칙으로 동작시키기 위한 최소 설정을 제공합니다. React 19와 Vite 6 최신 버전을 사용하며, 현대 프론트엔드 개발 모범 사례를 반영한 고성능·유연한 개발 템플릿입니다.

현재 공식 플러그인은 두 가지입니다:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) — Fast Refresh에 [Babel](https://babeljs.io/) 사용
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) — Fast Refresh에 [SWC](https://swc.rs/) 사용


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

## 라이선스

이 프로젝트는 **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**에 따라 라이선스됩니다.

### 요약:
- **허용**:
  - 공유 — 매체와 형식에 관계없이 복제·재배포
  - 변경 — 리믹스·변형·2차 저작물 작성

- **조건**:
  - **저작자 표시** — 적절한 출처 표시, 라이선스 링크, 변경 여부를 밝혀야 합니다. 합리적인 방식으로 하되, 라이선스 제공자가 귀하를 보증하는 것처럼 보이게는 할 수 없습니다.
  - **비영리** — 상업적 목적으로 사용할 수 없습니다.

자세한 내용은 저장소의 [LICENSE](LICENSE) 파일을 참고하세요.
