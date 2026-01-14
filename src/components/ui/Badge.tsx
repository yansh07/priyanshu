interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
}

export default function Badge({
  children,
  variant = "primary",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200",
    secondary:
      "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200",
    accent: "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${variants[variant]}`}
    >
      {children}
    </span>
  );
}