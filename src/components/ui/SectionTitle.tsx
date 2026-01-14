interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-lg">{subtitle}</p>
      )}
      <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent rounded-full mt-4" />
    </div>
  );
}