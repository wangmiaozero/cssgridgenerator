import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../styles/components/AppCode.scss";

const AppCode = () => {
  const [codeWasCopied, setCodeWasCopied] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [showExample] = useState(false);
  const codeRef = useRef(null);

  // 从 Redux 获取状态
  const columngap = useSelector((state) => state.grid.columngap);
  const rowgap = useSelector((state) => state.grid.rowgap);
  const childarea = useSelector((state) => state.grid.childarea);
  const rowTemplate = useSelector((state) => state.grid.rowTemplate);
  const colTemplate = useSelector((state) => state.grid.colTemplate);

  const { t } = useTranslation();

  const copy = () => {
    const text = codeRef.current;
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);

    const copied = document.execCommand("copy");
    if (copied) {
      setCodeWasCopied(true);
      setTimeout(() => {
        setCodeWasCopied(false);
      }, 2000);
    }
  };

  const toggleHtml = () => {
    setShowHtml(!showHtml);
  };

  return (
    <div className="group codegroup">
      <h3>{t("modal.copy.title")}</h3>
      <div className="gridcode">
        {/* 切换 HTML 和 CSS 视图按钮 */}
        <button
          role="region"
          id="toggleShowHtml"
          aria-live="polite"
          type="button"
          className="togglehtml"
          onClick={toggleHtml}
        >
          {showHtml ? t("modal.copy.css") : t("modal.copy.html")}
        </button>

        {/* 复制代码按钮 */}
        <button
          role="region"
          id="codeCopyStatus"
          aria-live="polite"
          type="button"
          className="copycode"
          onClick={copy}
        >
          {codeWasCopied ? t("modal.copy.clipboardSuccess") : t("modal.copy.clipboard")}
        </button>

        {/* 代码内容 */}
        <div id="code" ref={codeRef}>
          {showExample ? (
            <div>
              <p>
                <span className="cname">.parent</span> &#123;
                <br />
                <span className="sp">
                  <span className="ckey">display</span>:{" "}
                  <span className="cprop">grid</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">grid-template-columns</span>:{" "}
                  <span className="cprop">repeat(3, 1fr)</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">grid-template-rows</span>:{" "}
                  <span className="cprop">repeat(2, 100px)</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">gap</span>:{" "}
                  <span className="cprop">10px</span>;
                </span>
                <br />
                &#125;
              </p>
              <p>
                <span className="cname">.child</span> &#123;
                <br />
                <span className="sp">
                  <span className="ckey">background</span>:{" "}
                  <span className="cprop">#ccc</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">border</span>:{" "}
                  <span className="cprop">1px solid #999</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">padding</span>:{" "}
                  <span className="cprop">10px</span>;
                </span>
                <br />
                &#125;
              </p>
            </div>
          ) : showHtml ? (
            <div>
            <p>
              {/* 显示 <div class="parent"> */}
              &lt;<span className="cname">div </span>
              <span className="cprop">class=&quot;parent&quot;</span>&gt;
              <br />
              {childarea.length > 0 ? (
                childarea.map((child, i) => (
                  <React.Fragment key={uuidv4()}>
                    <span className="sp">
                      {/* 显示 <div class="div1"> */}
                      &lt;<span className="cname">div</span>
                      <span className="cprop"> class=&quot;div{i + 1}&quot;</span>&gt;
                      &lt;/<span className="cname">div</span>&gt;
                    </span>
                    <br />
                  </React.Fragment>
                ))
              ) : (
                <br />
              )}
              {/* 显示 </div> */}
              &lt;/<span className="cname">div</span>&gt;
            </p>
          </div>
          ) : (
            <div>
              <p>
                <span className="cname">.parent</span> &#123;
                <br />
                <span className="sp">
                  <span className="ckey">display</span>:{" "}
                  <span className="cprop">grid</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">grid-template-columns</span>:{" "}
                  <span className="cprop">{colTemplate}</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">grid-template-rows</span>:{" "}
                  <span className="cprop">{rowTemplate}</span>;
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">grid-column-gap</span>:{" "}
                  <span className="cprop">{columngap}px;</span>
                </span>
                <br />
                <span className="sp">
                  <span className="ckey">grid-row-gap</span>:{" "}
                  <span className="cprop">{rowgap}px;</span>
                </span>
                <br />
                &#125;
              </p>
              <p>
                {childarea.length > 0 &&
                  childarea.map((child, i) => (
                    <React.Fragment key={uuidv4()}>
                      <span>
                        <span className="cname">.div{i + 1}</span> &#123;
                        <span className="ckey">grid-area</span>:{" "}
                        <span className="cprop">{child}</span>; &#125;
                      </span>
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppCode;
