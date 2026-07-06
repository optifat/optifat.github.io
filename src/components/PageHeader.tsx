export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="pb-12 pt-20 sm:pt-24">
      <p className="eyebrow rise">{eyebrow}</p>
      <h1
        className="font-display rise mt-4 text-5xl text-ink sm:text-6xl"
        style={{
          animationDelay: "70ms",
          fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0',
        }}
      >
        {title}
      </h1>
      {lead && (
        <p
          className="rise mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "150ms" }}
        >
          {lead}
        </p>
      )}
    </header>
  );
}
