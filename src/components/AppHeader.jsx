import AppLogo from "./AppLogo"; // 替代 Vue 的组件引用
import AppGithubCorner from "./AppGithubCorner"; // 如果需要，可以启用
import "../styles/components/AppHeader.scss"; // 样式文件
import { useTranslation } from 'react-i18next';
const AppHeader = () => {
  const { i18n } = useTranslation();

  return (
    <header>
      {/* GitHub Corner */}
      <AppGithubCorner />

      {/* Logo */}
      <AppLogo />

      {/* Language Switcher */}
      <div className="language-switcher">
        <select  onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="pt">Português</option>
        </select>
      </div>
    </header>
  );
};

export default AppHeader;
