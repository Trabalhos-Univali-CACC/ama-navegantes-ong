import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMA Navegantes | Apoio ao Autismo",
  description:
    "Organização sem fins lucrativos dedicada ao acolhimento e apoio de pessoas com Transtorno do Espectro Autista (TEA) e suas famílias desde 2016.",
  keywords: [
    "autismo",
    "TEA",
    "inclusão",
    "ONG",
    "Navegantes",
    "apoio",
    "família",
  ],
  authors: [{ name: "AMA Navegantes" }],
  openGraph: {
    title: "AMA Navegantes | Apoio ao Autismo",
    description:
      "Acolhimento e apoio de pessoas com TEA e suas famílias desde 2016.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
