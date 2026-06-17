import Button from "./Button.jsx";

export default function Modal({
  children,
  isOpen,
  onClose,
  title,
  actions,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
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
            onClick={onClose}
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
    </div>
  );
}
