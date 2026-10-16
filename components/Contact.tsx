import { site, waHref, telHref } from "@/lib/site";
import { Phone, WhatsApp } from "./icons";
import Logo from "./Logo";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-4 bg-espresso text-ivory">
      <div aria-hidden className="pleats-band" />
      <div className="mx-auto max-w-4xl px-5 pb-12 pt-24 text-center sm:px-8 sm:pt-32">
        <h2 id="contact-title" className="font-display text-4xl font-bold leading-[1.55] sm:text-6xl">
          اجعل منزلك عنواناً للأناقة
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-ivory/80 sm:text-lg">
          جدّد ديكورك بلمسات تجمع بين الجمال والراحة والفخامة. للتواصل والاستفسار والطلبات:
        </p>

        <a
          href={telHref}
          dir="ltr"
          aria-label={`اتصل على ${site.phoneDisplay}`}
          className={`mt-8 inline-block font-latin text-6xl font-semibold tracking-wide text-brass hover:text-[#d6b877] sm:text-8xl ${focus}`}
        >
          {site.phoneDisplay}
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <a
            href={waHref}
            className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-brass px-9 text-base font-semibold text-espresso hover:bg-[#d6b877] sm:w-auto ${focus}`}
          >
            <WhatsApp className="size-6" />
            راسلنا على واتساب
          </a>
          <a
            href={telHref}
            className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-ivory/35 px-9 text-base font-semibold hover:bg-ivory/10 sm:w-auto ${focus}`}
          >
            <Phone className="size-5" />
            اتصل الآن
          </a>
        </div>
        <p className="mt-6 text-sm leading-6 text-ivory/70">خدمة متوفرة في جميع المناطق</p>

        <p className="mx-auto mt-16 max-w-xl font-display text-2xl font-bold leading-[1.9] text-ivory sm:text-3xl">
          ذوقك عنواننا، والفخامة اختيارك، ورضاكم غايتنا.
        </p>
      </div>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-ivory/15 px-5 pb-28 pt-8 text-center sm:px-8 md:pb-10">
        <Logo />
        <p className="text-sm leading-6 text-ivory/70">جميع الحقوق محفوظة لـ {site.full}</p>
      </footer>
    </section>
  );
}
