import { Mark } from "./icons";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark className="size-10 shrink-0 text-brass" />
      <span className="leading-none">
        <span className="block font-latin text-[1.35rem] font-semibold uppercase tracking-[0.28em]" dir="ltr">
          Style Home
        </span>
        <span className="mt-1.5 block text-[0.7rem] font-semibold text-current/70">للستائر والكنب</span>
      </span>
    </span>
  );
}
