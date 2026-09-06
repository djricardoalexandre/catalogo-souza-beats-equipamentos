interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, center }: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} mb-10`}>
      {eyebrow && (
        <div className={`text-xs font-700 text-brand-400 uppercase tracking-widest mb-2 ${center ? '' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-white tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
