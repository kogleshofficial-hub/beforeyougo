import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://beforeyougo-gray.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "BeforeYouGo — Know what you need before you go", template: "%s | BeforeYouGo" },
  description: "Clear pre-visit checklists for documents, appointments and preparation, with the official source shown so you can verify before travelling.",
  keywords: ["before you go", "visit checklist", "pre-visit checklist", "government services", "documents checklist", "appointment requirements"],
  alternates: { canonical: "/" },
  openGraph: { title: "BeforeYouGo — Know what you need before you go", description: "Prepare before you travel. Find a practical checklist, then verify it against the official source.", url: siteUrl, siteName: "BeforeYouGo", type: "website" },
  twitter: { card: "summary_large_image", title: "BeforeYouGo — Know what you need before you go", description: "Practical pre-visit checklists with official sources." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
