import { testsByKey } from "@/tests/tests";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/resurse-utile",
    "/teste-matematica",
    ...Object.keys(testsByKey).map((test) => `/test/${test}`),
  ];

  return pages.map((page) => ({
    url: "https://zecelaen.ro" + page,
  }));
}
