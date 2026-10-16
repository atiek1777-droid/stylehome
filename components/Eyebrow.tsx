export default function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      dir="ltr"
      className={`mb-4 flex items-center gap-4 font-latin text-lg font-semibold uppercase tracking-[0.32em] ${
        dark ? "text-brass" : "text-brass-deep"
      }`}
    >
      <span aria-hidden className={`h-px w-10 ${dark ? "bg-brass" : "bg-brass-deep"}`} />
      {children}
    </p>
  );
}
