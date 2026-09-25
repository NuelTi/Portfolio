type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const isDark = theme === "dark";

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            isDark ? "text-teal-300" : "text-teal-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            isDark ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
