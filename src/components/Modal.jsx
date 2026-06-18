import Button from "./Button.jsx";
import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = forwardRef(function Modal(
  { children, isOpen, onClose, title, actions },
  ref
) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isModalOpen = typeof isOpen === "boolean" ? isOpen : modalIsOpen;

  function handleClose() {
    setModalIsOpen(false);
    onClose?.();
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        setModalIsOpen(true);
      },
      close() {
        handleClose();
      },
      toggle() {
        setModalIsOpen((isOpen) => !isOpen);
      },
    };
  });

  if (!isModalOpen) {
    return null;
  }

  return createPortal(
    <div className="modal-backdrop" role="presentation" onClick={handleClose}>
      <section
        aria-modal="true"
        className="modal-panel"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-black pb-4">
          <h2 className="section-title">{title}</h2>
          <Button
            aria-label="Close modal"
            className="h-9 w-9 p-0"
            onClick={handleClose}
            size="sm"
            variant="secondary"
          >
            X
          </Button>
        </div>
        <div>{children}</div>
        {actions && (
          <div className="mt-6 flex justify-end gap-3 border-t border-black pt-4">
            {actions}
          </div>
        )}
      </section>
    </div>,
    document.getElementById("modal-root")
  );
});

export default Modal;
