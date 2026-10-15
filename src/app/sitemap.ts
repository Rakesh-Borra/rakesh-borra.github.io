import { siteConfig } from "@/data/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-10-15",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
