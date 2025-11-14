'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Amudala Family Gruhapravesam - 23 November 2025 | అముదాల కుటుంబ గృహప్రవేశం</title>
        <meta name="description" content="Join us for our Gruhapravesam (Housewarming Ceremony) with the blessings of Lord Venkateswara and Goddess Lakshmi. | శ్రీ వెంకటేశ్వర స్వామి, శ్రీ లక్ష్మీ అమ్మవారి దయతో, మా గృహప్రవేశ మహోత్సవానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము." />
        <meta name="keywords" content="Gruhapravesam, Housewarming, Amudala Family, Sri Satyanarayana Swamy Vratam, గృహప్రవేశం, అముదాల కుటుంబం" />
        <meta property="og:title" content="Amudala Family Gruhapravesam | అముదాల కుటుంబ గృహప్రవేశం" />
        <meta property="og:description" content="Join us for our Gruhapravesam ceremony on 23 November 2025" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
