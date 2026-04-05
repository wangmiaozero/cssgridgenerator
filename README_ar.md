# مولّد شبكة CSS

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
  <a href="./README_vi.md">Tiếng Việt</a> |
  <strong>العربية</strong>
</p>

![مولّد شبكة CSS](./public/og-cssgrid.jpg)

هذا المشروع يتيح استخدام ميزات CSS Grid بسرعة لإنشاء تخطيطات ديناميكية.

حدد عدد وحدات الأعمدة والصفوف وسيُنشأ لك CSS Grid. اسحب داخل المربعات لإنشاء عناصر `div` داخل الشبكة.

لاحظت أن كثيرين لا يستخدمون Grid لأنهم يجدونه معقدًا جدًا. إمكانات Grid كبيرة، وهذا المولّد الصغير يلمّس جزءًا فقط منها. الهدف هو البدء بسرعة وإنشاء تخطيطات أكثر إثارة.

بعد أن تعتاد، اطلع على موارد [Github](https://github.com/wangmiaozero) و[Seedling-ui](https://wangmiaozero.github.io/vue3-seedling-ui-website/#/) و[Wang Seddling](https://www.wangmiaozero.cn). هناك أيضًا [دليل CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) على CSS-Tricks ولعبة صغيرة تُدعى [Grid Garden](https://cssgridgarden.com/) لتعلّم المزيد.

إذا ساعدك المشروع، يُرجى منحه نجمة. شكرًا لك!

### متطلبات البيئة

```
node v18.20.0
npm v10.5.0
pnpm v9.12.1
```

### إعداد المشروع

```
pnpm install
```

التجميع وإعادة التحميل السريع أثناء التطوير

```
pnpm run dev
```

التجميع والضغط للإنتاج

```
pnpm run build
```

الفحص بالـ lint وإصلاح الملفات

```
pnpm run lint
```

# React 19 + Vite 6 + ESLint

يوفر هذا القالب إعدادًا بسيطًا لتشغيل React مع Vite وHMR وبعض قواعد ESLint. يستخدم المشروع React 19 وVite 6 وأفضل ممارسات تطوير الواجهات الحديثة.

يتوفر ملحقان رسميان:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) يستخدم [Babel](https://babeljs.io/) للتحديث السريع (Fast Refresh)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) يستخدم [SWC](https://swc.rs/) للتحديث السريع


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

## الترخيص

يُرخّص هذا المشروع بموجب **[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.

### ملخص:
- **يُسمح لك بـ**:
  - المشاركة — نسخ وإعادة توزيع المادة بأي وسيط أو أي شكل.
  - التعديل — إعادة المزج والتحويل والبناء على المادة.

- **بشرط**:
  - **النسب** — ذكر المناسب، وتقديم رابط للترخيص، وتوضيح التعديلات إن وُجدت، بشكل معقول دون إيحاء بموافقة المرخّص.
  - **غير تجاري** — لا يجوز استخدام المادة لأغراض تجارية.

للمزيد من التفاصيل، راجع ملف [LICENSE](LICENSE) في المستودع.
