import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sawely | AI WhatsApp Booking Agent",
  description: "Sawely helps businesses reply instantly to customers on WhatsApp and manage bookings automatically 24/7.",
  alternates: { canonical: SITE_URL },
  openGraph: { title: "Sawely | AI WhatsApp Booking Agent", description: "حجوزات واتساب تلقائية لأصحاب الأعمال — رد فوري على مدار الساعة.", url: SITE_URL, locale: "ar_KW", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
