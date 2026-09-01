import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beforeyougo.vercel.app"),
  title: { default: "BeforeYouGo — Know before you go", template: "%s | BeforeYouGo" },
  description: "A clearer way to prepare for real-world visits. Find what to bring, whether you need an appointment, where to go, and the official source.",
  keywords: ["before you go", "visit checklist", "government services", "documents checklist", "appointment requirements"],
  openGraph: { title: "BeforeYouGo — Know before you go", description: "Get a practical pre-visit checklist backed by official sources.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
