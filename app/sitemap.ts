// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://scholar-nest.com";

  const routes = [
    "",
    "/services",
    "/about",
    "/academic-integrity",
    "/reviews",
    "/contact",
    "/get-started",
    "/order", // agar yeh route live hai
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
