import { blogPosts } from "@/data/blog";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
import { uiItems } from "@/data/ui";
import { SITE } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/dictionary",
    "/categories",
    "/gallery",
    "/collections",
    "/blog",
    "/ranking",
    "/about",
    "/submit",
    "/favorites",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const itemPages: MetadataRoute.Sitemap = uiItems.map((i) => ({
    url: `${SITE.url}/dictionary/${i.slug}`,
    lastModified: i.updatedAt,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE.url}/categories/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const collectionPages: MetadataRoute.Sitemap = collections.map((c) => ({
    url: `${SITE.url}/collections/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...itemPages, ...categoryPages, ...collectionPages, ...blogPages];
}
