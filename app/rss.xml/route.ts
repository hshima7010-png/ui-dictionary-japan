import { blogPosts } from "@/data/blog";
import { uiItems } from "@/data/ui";
import { SITE } from "@/lib/utils";

export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const entries = [
    ...blogPosts.map((p) => ({
      title: p.title,
      link: `${SITE.url}/blog/${p.slug}`,
      description: p.excerpt,
      date: p.date,
    })),
    ...uiItems.slice(0, 20).map((i) => ({
      title: `${i.name}（${i.nameJa}）とは？`,
      link: `${SITE.url}/dictionary/${i.slug}`,
      description: i.description,
      date: i.updatedAt,
    })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE.name)}</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>ja</language>
${entries
  .map(
    (e) => `    <item>
      <title>${escapeXml(e.title)}</title>
      <link>${e.link}</link>
      <description>${escapeXml(e.description)}</description>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
      <guid>${e.link}</guid>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
