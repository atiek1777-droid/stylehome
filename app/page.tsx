import Hero from "@/components/Hero";
import Curtains from "@/components/Curtains";
import Smart from "@/components/Smart";
import Sofas from "@/components/Sofas";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import StickyCta from "@/components/StickyCta";
import { site } from "@/lib/site";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: site.full,
    alternateName: "Style Home Curtains",
    slogan: site.tagline,
    url: site.url,
    telephone: `+${site.phoneIntl}`,
  };
  return (
    <>
      <Hero />
      <main>
        <Curtains />
        <Smart />
        <Sofas />
        <Why />
        <Contact />
      </main>
      <StickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
