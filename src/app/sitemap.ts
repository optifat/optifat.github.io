import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site, nav } from "@/lib/site";

const base = site.url.replace(/\/$/, "");

// Emit a static sitemap.xml at build time (required under `output: export`).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = nav.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    changeFrequency: item.href === "/blog" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));

  // Drafts are excluded (getAllPosts filters them), so they stay unindexed.
  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
