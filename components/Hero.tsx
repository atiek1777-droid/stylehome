"use client";

import Image from "next/image";
import { useState } from "react";
import { site, waHref, telHref } from "@/lib/site";
import { ArrowDown, ArrowUp, Phone, WhatsApp } from "./icons";
import Logo from "./Logo";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";

export default function Hero() {
  const [open, setOpen] = useState(true);
  const scale = open ? 0.17 : 1;

  return (
    <header id="top" className="relative isolate min-h-[100svh] overflow-clip bg-espresso text-ivory">
      {/* الستائر */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <div className="drape drape-panel absolute inset-y-0 right-0 w-1/2 origin-right" style={{ transform: `scaleX(${scale})` }} />
        <div className="drape drape-panel absolute inset-y-0 left-0 w-1/2 origin-left" style={{ transform: `scaleX(${scale})` }} />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-b from-brass to-[#8f7239]" />
      </div>

      {/* رسالة تظهر والستائر مغلقة */}
      <p
        aria-live="polite"
        className={`pointer-events-none absolute inset-0 z-20 grid place-items-center px-8 text-center font-display text-3xl font-bold transition-opacity duration-700 ${
          open ? "opacity-0" : "opacity-100 delay-1000"
        }`}
      >
        {open ? "" : "اضغط زر الفتح في الريموت"}
      </p>

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-[80%] max-w-5xl flex-col">
        <nav aria-label="التنقل الرئيسي" className="fade-in-late flex items-center justify-between py-6">
          <a href="#top" className={focus} aria-label={site.full}>
            <Logo />
          </a>
          <a
            href={telHref}
            aria-label={`اتصل بنا ${site.phoneDisplay}`}
            className={`grid size-11 place-items-center rounded-full border border-ivory/30 hover:bg-ivory/10 sm:hidden ${focus}`}
          >
            <Phone className="size-5" />
          </a>
          <ul className="hidden items-center gap-8 text-sm font-semibold sm:flex">
            <li><a href="#curtains" className={`hover:text-brass ${focus}`}>الستائر</a></li>
            <li><a href="#smart" className={`hover:text-brass ${focus}`}>الستائر الذكية</a></li>
            <li><a href="#sofas" className={`hover:text-brass ${focus}`}>الكنب</a></li>
            <li>
              <a href="#contact" className={`rounded-full border border-brass px-5 py-2.5 text-brass hover:bg-brass hover:text-espresso ${focus}`}>
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>

        <div
          inert={!open}
          className={`grid flex-1 items-center gap-12 pb-32 pt-6 transition-opacity duration-700 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <p className="rise-in font-display text-xl font-bold leading-8 text-brass sm:text-2xl">{site.full}</p>
            <h1 className="rise-in mt-3 font-display text-[2.75rem] font-bold leading-[1.55] tracking-normal [text-wrap:balance] sm:text-6xl sm:leading-[1.5] lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="rise-in-2 mt-5 max-w-md text-base leading-8 text-ivory/80 sm:text-lg">
              والأناقة تكتمل مع ستايل هوم. ستائر وكنب بتصاميم عصرية ولمسات راقية تناسب جميع الأذواق.
            </p>
            <div className="rise-in-2 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={waHref}
                className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brass px-8 text-base font-semibold text-espresso transition hover:bg-[#d6b877] ${focus}`}
              >
                <WhatsApp className="size-6" />
                اطلب استشارتك على واتساب
              </a>
              <a
                href={telHref}
                className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-ivory/35 px-7 text-base font-semibold hover:bg-ivory/10 ${focus}`}
              >
                <Phone className="size-5" />
                <span dir="ltr" className="font-latin text-xl tracking-wide">{site.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="rise-in-2 relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div aria-hidden className="absolute -inset-3 border border-brass/60 sm:-inset-4" />
            <div className="relative aspect-[4/5] overflow-hidden bg-cocoa">
              <Image
                src="/images/hero.webp"
                alt="صالة فخمة بكنب كريمي وستائر بيج منسدلة وثريا"
                fill
                priority
                sizes="(min-width:1024px) 440px, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* الريموت */}
      <div className="fade-in-late sticky bottom-5 z-30 -mt-[4.5rem] flex h-[4.5rem] items-start justify-center px-4">
        <div role="group" aria-label="ريموت الستائر" className="flex items-center gap-1.5 rounded-full border border-ivory/25 bg-espresso/80 p-1.5 ps-5 backdrop-blur">
          <span className="pe-2 text-sm font-semibold text-ivory/85">ريموت الستائر</span>
          <button
            type="button"
            aria-label="فتح الستائر"
            aria-pressed={open}
            onClick={() => setOpen(true)}
            className={`grid size-12 place-items-center rounded-full transition ${open ? "bg-brass text-espresso" : "bg-ivory/10 hover:bg-ivory/20"} ${focus}`}
          >
            <ArrowUp className="size-6" />
          </button>
          <button
            type="button"
            aria-label="إغلاق الستائر"
            aria-pressed={!open}
            onClick={() => setOpen(false)}
            className={`grid size-12 place-items-center rounded-full transition ${!open ? "bg-brass text-espresso" : "bg-ivory/10 hover:bg-ivory/20"} ${focus}`}
          >
            <ArrowDown className="size-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
