import Image from "next/image";
import { curtainTypes } from "@/lib/site";
import Eyebrow from "./Eyebrow";

export default function Curtains() {
  return (
    <section id="curtains" aria-labelledby="curtains-title" className="scroll-mt-4 bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden className="absolute -inset-3 border border-brass-deep/40 sm:-inset-4" />
          <Image
            src="/images/curtain-layered.webp"
            alt="ستارة ويفي بيج مع طبقة شيفون شفافة بجانبها"
            width={800}
            height={1266}
            sizes="(min-width:1024px) 440px, 90vw"
            className="relative h-auto w-full"
          />
        </figure>

        <div>
          <Eyebrow>Curtains</Eyebrow>
          <h2 id="curtains-title" className="font-display text-4xl font-bold leading-[1.55] text-espresso sm:text-5xl">
            ستائر بتفاصيل تليق ببيتك
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-mocha sm:text-lg">
            تصاميم ستائر تناسب المجالس وغرف النوم والصالات، بألوان وخامات تختارها بذوقك.
          </p>

          <ul className="mt-10 border-b border-mocha/20">
            {curtainTypes.map((c) => (
              <li key={c.title} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-mocha/20 py-6">
                <span className="font-display text-3xl font-bold text-brass-deep">{c.n}</span>
                <div>
                  <h3 className="font-display text-3xl font-bold leading-[1.5] text-espresso">{c.title}</h3>
                  <p className="text-base leading-7 text-mocha">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
