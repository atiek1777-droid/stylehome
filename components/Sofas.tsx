import Image from "next/image";
import { sofas } from "@/lib/site";
import Eyebrow from "./Eyebrow";

export default function Sofas() {
  return (
    <section id="sofas" aria-labelledby="sofas-title" className="scroll-mt-4 bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Eyebrow>Sofas</Eyebrow>
        <h2 id="sofas-title" className="max-w-2xl font-display text-4xl font-bold leading-[1.55] text-espresso sm:text-5xl">
          كنب أنيق يضيف لبيتك الراحة والجمال
        </h2>
        <p className="mt-4 max-w-lg text-base leading-8 text-mocha sm:text-lg">
          من المجالس الواسعة إلى الصالات العصرية، تصاميم تناسب مختلف الأذواق والميزانيات.
        </p>

        <div className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3">
          {sofas.map((s) => (
            <figure key={s.img} className="mb-3 break-inside-avoid overflow-hidden bg-mocha/10 sm:mb-5">
              <Image
                src={`/images/${s.img}.webp`}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes="(min-width:1024px) 360px, 50vw"
                loading="lazy"
                className="h-auto w-full transition-transform duration-700 hover:scale-[1.04] motion-reduce:transition-none"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
