import type { Metadata, Viewport } from "next";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css";
import "@fontsource/ibm-plex-sans-arabic/latin-400.css";
import "@fontsource/ibm-plex-sans-arabic/latin-600.css";
import "@fontsource/amiri/arabic-700.css";
import "@fontsource/amiri/latin-700.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "./globals.css";
import { site } from "@/lib/site";

const title = `${site.full} | ${site.tagline}`;
const description =
  "ستائر ويفي ورول وكهربائية وشيفون ولينين، وكنب أنيق بتصاميم عصرية. ستايل هوم: الفخامة تبدأ من منزلك. تواصل معنا على واتساب.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    title, description, type: "website", locale: "ar_SA", siteName: site.full,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};
export const viewport: Viewport = { themeColor: "#1b1512", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-espresso font-sans text-base leading-7 text-mocha antialiased">{children}</body>
    </html>
  );
}
