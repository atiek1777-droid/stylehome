const points = ["تصاميم مميزة", "جودة عالية", "خيارات لكل الأذواق والميزانيات"];

export default function Why() {
  return (
    <section aria-labelledby="why-title" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 id="why-title" className="font-display text-2xl font-bold text-brass-deep sm:text-3xl">
          لماذا ستايل هوم؟
        </h2>
        <p className="mt-6 font-display text-3xl font-bold leading-[1.75] text-espresso sm:text-5xl sm:leading-[1.7]">
          لأننا نهتم بأدق التفاصيل، ونسعى لتقديم تصاميم مميزة وجودة عالية ولمسات جمالية تجعل منزلك أكثر فخامة.
        </p>
        <ul className="mt-14 grid gap-px overflow-hidden border border-mocha/20 bg-mocha/20 sm:grid-cols-3">
          {points.map((p) => (
            <li key={p} className="bg-ivory px-6 py-7 text-lg font-semibold text-espresso">{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
