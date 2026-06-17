const variants = {
  primary:
    "bg-stone-950 text-white hover:bg-stone-800 focus-visible:ring-stone-950",
  secondary:
    "bg-white text-stone-950 hover:bg-stone-100 focus-visible:ring-stone-950",
  ghost:
    "border-transparent bg-transparent text-stone-700 hover:border-black hover:bg-white hover:text-stone-950 focus-visible:ring-stone-950",
};

const sizes = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

export default function Button({
  children,
  className = "",
  size = "md",
  variant = "primary",
  type = "button",
  ...props
}) {
  const variantClass = variants[variant] ?? variants.primary;
  const sizeClass = sizes[size] ?? sizes.md;

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center border border-black font-semibold uppercase tracking-normal shadow-[3px_3px_0_0_#000] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
