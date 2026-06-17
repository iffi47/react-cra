export default function Input({
  className = "",
  label,
  onChangeText,
  textarea = false,
  type = "text",
  ...props
}) {
  const controlClass = `form-control ${textarea ? "form-textarea" : ""} ${className}`;

  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      {textarea ? (
        <textarea className={controlClass} onChange={onChangeText} {...props} />
      ) : (
        <input
          className={controlClass}
          onChange={onChangeText}
          type={type}
          {...props}
        />
      )}
    </div>
  );
}
