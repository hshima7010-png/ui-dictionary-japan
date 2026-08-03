import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "ブログ — UI設計を深く学ぶ",
  description:
    "UIパターンの使い分け、UX心理学、日本語タイポグラフィなど、UI設計を一歩深く学べる記事を掲載。",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="container py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">ブログ</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          「名前を知る」の一歩先へ。UIパターンの使い分けや設計思想を深掘りする記事です。
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 2) * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex items-center gap-2">
                <Badge variant="primary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">
                  {formatDate(post.date)} ・ 約{post.readingTime}分
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold leading-snug group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                    #{t}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
