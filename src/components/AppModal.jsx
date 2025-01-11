import React, { useEffect, useRef } from "react";
import { createFocusTrap } from 'focus-trap';
import "../styles/components/AppModal.scss";
import { useTranslation } from 'react-i18next';
const AppModal = ({ onClose, children }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const focusTrap = useRef(null);

  const closeOnEsc = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeOnEsc);

    focusTrap.current = createFocusTrap(modalRef.current);
    focusTrap.current.activate();

    return () => {
      document.removeEventListener("keydown", closeOnEsc);
      focusTrap.current.deactivate();
    };
  }, []);

  return (
    <div className="modal-mask">
      <div className="modal-wrapper" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div
          className="modal-container"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          ref={modalRef}
        >
          <header id="modalTitle" className="modal-header">
            {children?.header || "Default Header"}
          </header>

          <section className="modal-body" id="modalDescription">
            {children?.body || "Default Body"}
          </section>

          <button
            type="button"
            aria-label="Close modal"
            className="modal-button"
            onClick={onClose}
          >
            {t('modal.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppModal;