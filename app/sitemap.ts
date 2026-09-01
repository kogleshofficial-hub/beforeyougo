import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://beforeyougo.vercel.app";
  const slugs = [
    "malaysia-passport-renewal",
    "malaysia-driving-licence-renewal",
    "us-passport-renewal",
    "malaysia-learner-licence-renewal",
    "passport-renewal-starter",
    "before-any-government-visit",
  ];
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...slugs.map(slug => ({ url: `${base}/guide/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
