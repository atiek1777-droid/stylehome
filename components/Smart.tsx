import Image from "next/image";
import { smartFeatures } from "@/lib/site";
import Eyebrow from "./Eyebrow";

export default function Smart() {
  return (
    <section id="smart" aria-labelledby="smart-title" className="scroll-mt-4 bg-espresso text-ivory">
      <div aria-hidden className="pleats-band" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div>
          <Eyebrow dark>Smart Curtains</Eyebrow>
          <h2 id="smart-title" className="font-display text-4xl font-bold leading-[1.55] sm:text-5xl">
            ستائر تُفتح بضغطة زر
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-ivory/80 sm:text-lg">
            ستائر كهربائية تعمل بالريموت كنترول، تمنحك الراحة والفخامة دون أن تقوم من مكانك.
          </p>
          <ul className="mt-10">
            {smartFeatures.map((f) => (
              <li key={f.title} className="grid gap-1 border-t border-ivory/15 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <h3 className="text-lg font-semibold text-brass">{f.title}</h3>
                <p className="text-base leading-7 text-ivory/80">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div aria-hidden className="absolute -inset-3 border border-brass/50 sm:-inset-4" />
          <Image
            src="/images/curtain-wave.webp"
            alt="ستارة ويفي عالية بلون بيج رمادي بطيات منتظمة"
            width={720}
            height={1000}
            sizes="(min-width:1024px) 400px, 80vw"
            className="relative h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
