import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Big_Shoulders_Stencil, Instrument_Sans } from "next/font/google";
import { SITE_URL, business } from "@/lib/site";
import "./globals.css";

const shoulders = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-shoulders",
  adjustFontFallback: false,
  display: "swap",
});

const stencil = Big_Shoulders_Stencil({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bss",
  adjustFontFallback: false,
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const title = "El Corral de la Vaca | Cortes a la brasa en San Juan del Río, Qro.";
const description =
  "Cortes a la brasa, molcajetes y pulpo en San Juan del Río, Qro. Patio de talavera, terraza y estacionamiento amplio. Reserva al 427 272 5118.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${business.name}`,
  },
  description,
  applicationName: business.name,
  keywords: [
    "restaurante San Juan del Río",
    "cortes San Juan del Río",
    "parrilla San Juan del Río",
    "steak house Querétaro",
    "molcajete San Juan del Río",
    "dónde comer en San Juan del Río",
    "restaurante con terraza San Juan del Río",
    "El Corral de la Vaca",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: business.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#191512",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-MX"
      className={`${shoulders.variable} ${stencil.variable} ${instrument.variable}`}
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
