interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-relaxed text-silver md:text-lg">{description}</p>
    </div>
  );
}
