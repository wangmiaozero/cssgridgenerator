import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/AppExplain.scss"; // 样式文件

const AppExplain = () => {
    const { t } = useTranslation();
  return (
    <section>
      {/* 使用 dangerouslySetInnerHTML 替代 v-html */}
      <p dangerouslySetInnerHTML={{ __html: t("explain.paragraph1") }}></p>
      <p dangerouslySetInnerHTML={{ __html: t("explain.paragraph2") }}></p>
      <p dangerouslySetInnerHTML={{ __html: t("explain.paragraph3") }}></p>

      {/* 条件渲染 */}
      {false && (
        <p>
          {t("explain.paragraph4")}
          <a href="https://github.com/wangmiaozero" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          ,{" "}
          <a href="https://wangmiaozero.github.io/vue3-seedling-ui-website/#/" target="_blank" rel="noopener noreferrer">
          Seedling-ui
          </a>{" "}
          {t("utils.and")}{" "}
          <a href="https://www.wangmiaozero.cn" target="_blank" rel="noopener noreferrer">
          Wang Seddling
          </a>{" "}
          {t("explain.paragraph5")}{" "}
          <a
            href="https://css-tricks.com/snippets/css/complete-guide-grid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("explain.cssguide")}
          </a>{" "}
          , {t("explain.paragraph6")}{" "}
          <a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">
            Grid Garden
          </a>{" "}
          {t("explain.paragraph7")}
        </p>
      )}

      <p>{t("explain.note")}</p>

      <p className="cursive">
        {t("explain.contributions")}{" "}
        <a
          href="https://github.com/wangmiaozero/cssgridgenerator"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("explain.fork")}
        </a>
      </p>
    </section>
  );
};

export default AppExplain;