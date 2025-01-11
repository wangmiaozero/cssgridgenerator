// /cssgridgenerator-react/src/i18n/index.jsx
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译文件
import en from './en.json';
import es from './es.json';
import zh from './zh.json';
import pt from './pt.json';
import fr from './fr.json';

const resources = {
  zh: { translation: zh },
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt },
  fr: { translation: fr },
};

i18n
  .use(LanguageDetector) // 自动检测语言
  .use(initReactI18next) // 初始化 react-i18next
  .init({
    resources,
    fallbackLng: 'zh', // 默认语言
    interpolation: {
      escapeValue: false, // React 已经内置了 XSS 防护
    },
    detection: {
      order: ['querystring', 'navigator'], // 检测语言的优先级：URL 查询参数 > 浏览器语言
      caches: ['localStorage'], // 将用户选择的语言存储在 localStorage 中
    },
  });

export { I18nextProvider, i18n }; // 确保导出了 I18nextProvider 和 i18n
export default i18n;