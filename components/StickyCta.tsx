"use client";
import { useEffect, useState } from "react";
import { telHref, waHref } from "@/lib/site";
import { Phone, WhatsApp } from "./icons";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        setVisible(![...seen.values()].some(Boolean));
      },
      { threshold: 0.12 }
    );
    ["top", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 flex gap-2 transition duration-300 md:hidden motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={waHref}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 flex-1 items-center justify-center gap-3 rounded-full bg-brass text-base font-semibold text-espresso shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
      >
        <WhatsApp className="size-6" />
        تواصل عبر واتساب
      </a>
      <a
        href={telHref}
        tabIndex={visible ? 0 : -1}
        aria-label="اتصل بنا"
        className="grid size-14 place-items-center rounded-full bg-espresso text-ivory shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
