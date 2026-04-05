# Trình tạo CSS Grid

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
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <strong>Tiếng Việt</strong> |
  <a href="./README_ar.md">العربية</a>
</p>

![Trình tạo CSS Grid](./public/og-cssgrid.jpg)

Dự án này giúp bạn nhanh chóng dùng tính năng CSS Grid để tạo bố cục động.

Bạn đặt số lượng và đơn vị cho cột và hàng — chúng tôi sẽ sinh mã CSS Grid. Kéo thả trong các ô để tạo `div` nằm trong lưới.

Nhiều người không dùng Grid vì thấy quá phức tạp. Grid rất mạnh; trình tạo nhỏ này chỉ đề cập một phần. Mục tiêu là bắt đầu nhanh và tạo bố cục thú vị hơn.

Khi đã quen, hãy xem tài liệu từ [Github](https://github.com/wangmiaozero), [Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/) và [Wang Seddling](https://www.wangmiaozero.cn). Còn có [hướng dẫn CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) trên CSS-Tricks và trò [Grid Garden](https://cssgridgarden.com/) để học thêm.

Nếu dự án hữu ích, hãy cho một ngôi sao. Cảm ơn bạn!

### Yêu cầu môi trường

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### Thiết lập dự án

```
pnpm install
```

Biên dịch và tải lại nóng khi phát triển

```
pnpm run dev
```

Biên dịch và nén cho production

```
pnpm run build
```

Lint và sửa tự động

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

Mẫu này cung cấp cấu hình tối thiểu để chạy React với Vite, HMR và một số quy tắc ESLint. Dự án dùng React 19 và Vite 6, áp dụng thực hành tốt của phát triển front-end hiện đại.

Hiện có hai plugin chính thức:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) dùng [Babel](https://babeljs.io/) cho Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) dùng [SWC](https://swc.rs/) cho Fast Refresh


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

## Giấy phép

Dự án được cấp phép theo **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.

### Tóm tắt:
- **Bạn được phép**:
  - Chia sẻ — sao chép và phân phối lại tài liệu trên mọi phương tiện và định dạng.
  - Chỉnh sửa — phối lại, biến đổi và xây dựng dựa trên tài liệu.

- **Theo các điều kiện**:
  - **Ghi công** — ghi nguồn, cung cấp liên kết giấy phép và nêu rõ thay đổi (theo cách hợp lý, không gợi ý người cấp phép ủng hộ bạn).
  - **Phi thương mại** — không dùng tài liệu cho mục đích thương mại.

Xem thêm trong tệp [LICENSE](LICENSE) trong kho lưu trữ.
