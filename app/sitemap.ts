import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

const siteUrl = "https://beforeyougo-gray.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...guides.map((guide) => ({
      url: `${siteUrl}/guide/${guide.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
