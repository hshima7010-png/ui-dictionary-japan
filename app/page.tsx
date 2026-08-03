import { HeroSearch } from "@/components/home/hero-search";
import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { Badge } from "@/components/ui/badge";
import { DynamicIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/data/blog";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
import { rankingItems, uiItems } from "@/data/ui";
import { formatDate } from "@/lib/utils";
import {
  ArrowRight,
  BookOpenText,
  Crown,
  Layers,
  Newspaper,
  TrendingUp,
  Upload,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const trending = rankingItems.slice(0, 6);
  const featured = [...uiItems]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, 8);

  return (
    <>
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden">
        {/* 背景装飾 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgb(37_99_235/0.08),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
        <div className="container flex flex-col items-center py-20 text-center sm:py-28 lg:py-32">
          <Badge variant="primary" className="animate-fade-in px-4 py-1.5">
            <Crown className="size-3.5" aria-hidden />
            日本最大級のUIライブラリ
          </Badge>
          <h1 className="mt-6 animate-fade-in text-balance text-4xl font-bold leading-[1.35] tracking-tight sm:text-5xl lg:text-6xl">
            「このUI、
            <span className="gradient-text">なんて名前？</span>」<br />
            を一瞬で解決。
          </h1>
          <p className="mt-6 max-w-xl animate-fade-in text-balance leading-relaxed text-muted-foreground sm:text-lg">
            UIを<strong className="font-semibold text-foreground">探す・学ぶ・実装する</strong>。
            意味からメリット・デメリット、HTML / Tailwind / React / shadcn/ui
            の実装コードまで。初心者からプロまで使えるUI辞典です。
          </p>
          <div className="mt-10 w-full">
            <HeroSearch />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpenText className="size-4 text-primary" aria-hidden />
              収録UI <strong className="text-foreground">{uiItems.length}</strong> 件
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="size-4 text-primary" aria-hidden />
              カテゴリー <strong className="text-foreground">{categories.length}</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="size-4 text-primary" aria-hidden />
              実装コード <strong className="text-foreground">{uiItems.length * 4}+</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ================= 人気ランキング ================= */}
      <section aria-labelledby="trending-heading" className="container py-16 sm:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                <TrendingUp className="size-4" aria-hidden />
                Trending
              </p>
              <h2 id="trending-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                人気ランキング
              </h2>
            </div>
            <Link
              href="/ranking"
              className="group flex shrink-0 items-center gap-1 text-sm font-medium text-primary"
            >
              すべて見る
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-1 -top-2 z-10 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white shadow-soft"
                >
                  {i + 1}
                </span>
                <UIItemCard item={item} variant="compact" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= カテゴリー ================= */}
      <section aria-labelledby="categories-heading" className="border-y border-border bg-muted/40 py-16 sm:py-20">
        <div className="container">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">Categories</p>
                <h2 id="categories-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  カテゴリーから探す
                </h2>
              </div>
              <Link
                href="/categories"
                className="group flex shrink-0 items-center gap-1 text-sm font-medium text-primary"
              >
                全{categories.length}カテゴリー
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categories.slice(0, 12).map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 0.03}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="card-hover flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-soft"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary dark:bg-primary-900/30">
                    <DynamicIcon name={cat.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{cat.nameJa}</span>
                    <span className="block text-xs text-muted-foreground">{cat.name}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 注目のUI ================= */}
      <section aria-labelledby="featured-heading" className="container py-16 sm:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary">Latest</p>
              <h2 id="featured-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                最近更新されたUI
              </h2>
            </div>
            <Link
              href="/dictionary"
              className="group flex shrink-0 items-center gap-1 text-sm font-medium text-primary"
            >
              辞典を見る
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 4) * 0.05}>
              <UIItemCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= コレクション ================= */}
      <section aria-labelledby="collections-heading" className="border-y border-border bg-muted/40 py-16 sm:py-20">
        <div className="container">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">Collections</p>
                <h2 id="collections-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  テーマ別コレクション
                </h2>
              </div>
              <Link
                href="/collections"
                className="group flex shrink-0 items-center gap-1 text-sm font-medium text-primary"
              >
                すべて見る
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collections.slice(0, 4).map((col, i) => (
              <Reveal key={col.slug} delay={i * 0.05}>
                <Link
                  href={`/collections/${col.slug}`}
                  className={`card-hover group block overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${col.gradient} bg-card p-6 shadow-soft`}
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-card/90 text-primary shadow-soft backdrop-blur">
                    <DynamicIcon name={col.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold group-hover:text-primary">{col.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                    {col.description}
                  </p>
                  <p className="mt-4 text-xs font-medium text-muted-foreground">
                    {col.itemSlugs.length} UIパターン
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ブログ ================= */}
      <section aria-labelledby="blog-heading" className="container py-16 sm:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                <Newspaper className="size-4" aria-hidden />
                Blog
              </p>
              <h2 id="blog-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                UI設計を深く学ぶ
              </h2>
            </div>
            <Link
              href="/blog"
              className="group flex shrink-0 items-center gap-1 text-sm font-medium text-primary"
            >
              すべての記事
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Badge className="self-start">{post.category}</Badge>
                <h3 className="mt-3 font-bold leading-snug group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {formatDate(post.date)} ・ 約{post.readingTime}分
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container pb-20 sm:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-center text-white shadow-lift sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(255_255_255/0.15),transparent)]"
            />
            <Upload className="mx-auto size-8 opacity-90" aria-hidden />
            <h2 className="mt-4 text-balance text-2xl font-bold sm:text-3xl">
              あなたが見つけた「良いUI」を共有しませんか？
            </h2>
            <p className="mx-auto mt-3 max-w-md text-balance text-sm leading-relaxed text-white/85 sm:text-base">
              スクリーンショットとURLを送るだけ。審査を通過したUIは、あなたのクレジット付きでギャラリーに掲載されます。
            </p>
            <Link
              href="/submit"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 font-semibold text-primary shadow-lift transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              UIを投稿する
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
