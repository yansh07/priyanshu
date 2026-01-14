interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700
        p-6 transition-all duration-300
        ${hover ? "hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}