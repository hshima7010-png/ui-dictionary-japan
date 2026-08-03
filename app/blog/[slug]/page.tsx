import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getBlogPost } from "@/data/blog";
import { getUIItem } from "@/data/ui";
import { blogJsonLd, breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = post.relatedItems
    .map((s) => getUIItem(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "ブログ", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(blogJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbJsonLd(crumbs)) }}
      />
      <article className="container max-w-3xl py-12 sm:py-16">
        <nav aria-label="パンくずリスト">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-foreground">ホーム</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" aria-hidden />
              <Link href="/blog" className="hover:text-foreground">ブログ</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" aria-hidden />
              <span aria-current="page" className="line-clamp-1 font-medium text-foreground">
                {post.title}
              </span>
            </li>
          </ol>
        </nav>

        <header className="mt-10">
          <div className="flex items-center gap-3">
            <Badge variant="primary">{post.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {formatDate(post.date)} ・ 約{post.readingTime}分で読めます
            </span>
          </div>
          <h1 className="mt-4 text-balance text-3xl font-bold leading-[1.3] tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </header>

        {/* 目次 */}
        <nav aria-label="目次" className="mt-10 rounded-2xl border border-border bg-muted/50 p-6">
          <p className="text-sm font-semibold">目次</p>
          <ol className="mt-3 space-y-2">
            {post.content.map((sec, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {i + 1}. {sec.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {post.content.map((sec, i) => (
            <section key={i} id={`section-${i}`} aria-labelledby={`section-h-${i}`} className="scroll-mt-24">
              <h2 id={`section-h-${i}`} className="border-l-4 border-primary pl-4 text-2xl font-bold tracking-tight">
                {sec.heading}
              </h2>
              <div className="mt-5 space-y-4 leading-[1.9]">
                {sec.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              #{t}
            </span>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-ui" className="border-t border-border bg-muted/40 py-14">
          <div className="container">
            <h2 id="related-ui" className="text-2xl font-bold tracking-tight">
              この記事に登場したUI
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <UIItemCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
