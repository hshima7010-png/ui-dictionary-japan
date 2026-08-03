import { CodeBlock } from "@/components/code/code-block";
import { FavoriteButton } from "@/components/dictionary/favorite-button";
import { HistoryTracker } from "@/components/dictionary/history-tracker";
import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { PreviewFrame } from "@/components/previews/frame";
import { getPreview } from "@/components/previews/registry";
import { Badge } from "@/components/ui/badge";
import { DynamicIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { getCategory } from "@/data/categories";
import { getUIItem, uiItems } from "@/data/ui";
import {
  breadcrumbJsonLd,
  buildMetadata,
  jsonLdScript,
  uiItemJsonLd,
} from "@/lib/seo";
import { cn, formatDate, formatViews } from "@/lib/utils";
import {
  Accessibility,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  Eye,
  Figma,
  Heart,
  Lightbulb,
  ListChecks,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ------------------------------------------------------------------ */
/* Static generation                                                   */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return uiItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getUIItem(slug);
  if (!item) return {};
  return buildMetadata({
    title: `${item.name}（${item.nameJa}）とは？意味・使い方・実装方法`,
    description: item.description,
    path: `/dictionary/${item.slug}`,
  });
}

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */
const sections = [
  { id: "what-is", label: "UIとは？", icon: BookOpen },
  { id: "features", label: "特徴", icon: Sparkles },
  { id: "merits", label: "メリット", icon: ThumbsUp },
  { id: "demerits", label: "デメリット", icon: ThumbsDown },
  { id: "best-practices", label: "ベストプラクティス", icon: Lightbulb },
  { id: "use-cases", label: "使用例", icon: ListChecks },
  { id: "code", label: "実装コード", icon: Code2 },
  { id: "figma", label: "Figma", icon: Figma },
  { id: "accessibility", label: "アクセシビリティ", icon: Accessibility },
] as const;

export default async function UIDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getUIItem(slug);
  if (!item) notFound();

  const category = getCategory(item.category);
  const Preview = getPreview(item.slug);
  const related = item.related
    .map((s) => getUIItem(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "UI辞典", path: "/dictionary" },
    ...(category
      ? [{ name: category.nameJa, path: `/categories/${category.slug}` }]
      : []),
    { name: item.name, path: `/dictionary/${item.slug}` },
  ];

  return (
    <>
      <HistoryTracker slug={item.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(uiItemJsonLd(item)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbJsonLd(crumbs)) }}
      />

      {/* ================= Header ================= */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-60",
            item.gradient ?? "from-blue-500/15 via-indigo-500/10 to-violet-500/15",
          )}
        />
        <div className="container py-10 sm:py-14">
          {/* パンくず */}
          <nav aria-label="パンくずリスト">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="font-medium text-foreground">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.path} className="transition-colors hover:text-foreground">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {category && (
                  <Link href={`/categories/${category.slug}`}>
                    <Badge variant="primary" className="px-3 py-1">
                      <DynamicIcon name={category.icon} className="size-3.5" />
                      {category.nameJa}
                    </Badge>
                  </Link>
                )}
                {item.difficulty && (
                  <Badge variant="outline">
                    難易度 {"★".repeat(item.difficulty)}{"☆".repeat(3 - item.difficulty)}
                  </Badge>
                )}
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                {item.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{item.nameJa}</p>
              <p className="mt-4 max-w-2xl leading-relaxed">{item.description}</p>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Eye className="size-4" aria-hidden />
                  {formatViews(item.views)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="size-4" aria-hidden />
                  {formatViews(item.favorites)}
                </span>
              </div>
              <FavoriteButton slug={item.slug} withLabel />
            </div>
          </div>

          {/* 実物プレビュー */}
          {Preview && (
            <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <PreviewFrame size="hero" gradient={item.gradient}>
                <Preview />
              </PreviewFrame>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                {item.name}の代表的な見た目（イメージ）
              </figcaption>
            </figure>
          )}
        </div>
      </header>

      {/* ================= Body ================= */}
      <div className="container grid gap-12 py-12 lg:grid-cols-[220px_1fr] lg:py-16">
        {/* 目次（sticky） */}
        <aside className="hidden lg:block">
          <nav aria-label="目次" className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              目次
            </p>
            <ul className="mt-3 space-y-0.5 border-l border-border">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px flex items-center gap-2 border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* 本文 */}
        <article className="min-w-0 max-w-3xl">
          {/* UIとは？ */}
          <Section id="what-is" title={`${item.name}とは？`} icon={BookOpen}>
            <div className="space-y-4 leading-[1.9]">
              {item.whatIs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {item.aliases.length > 0 && (
              <div className="mt-6 rounded-2xl bg-muted/70 p-5">
                <p className="text-sm font-semibold">こんな呼ばれ方をします</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.aliases.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                    >
                      「{a}」
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Section>

          {/* 特徴 */}
          <Section id="features" title="特徴" icon={Sparkles}>
            <CheckList items={item.features} tone="primary" />
          </Section>

          {/* メリット / デメリット */}
          <Section id="merits" title="メリット" icon={ThumbsUp}>
            <CheckList items={item.merits} tone="positive" />
          </Section>
          <Section id="demerits" title="デメリット" icon={ThumbsDown}>
            <CheckList items={item.demerits} tone="negative" />
          </Section>

          {/* ベストプラクティス */}
          <Section id="best-practices" title="ベストプラクティス" icon={Lightbulb}>
            <ol className="space-y-3">
              {item.bestPractices.map((bp, i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <span
                    aria-hidden
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary dark:bg-primary-900/30"
                  >
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{bp}</span>
                </li>
              ))}
            </ol>
          </Section>

          {/* 使用例 */}
          <Section id="use-cases" title="使用例" icon={ListChecks}>
            <CheckList items={item.useCases} tone="neutral" />
          </Section>

          {/* 実装コード */}
          <Section id="code" title="実装コード" icon={Code2}>
            <p className="mb-4 text-sm text-muted-foreground">
              タブで言語を切り替えて、右上のボタンからコピーできます。
            </p>
            <CodeBlock code={item.code} />
          </Section>

          {/* Figma */}
          <Section id="figma" title="Figmaでの作り方" icon={Figma}>
            <CheckList items={item.figma} tone="primary" />
          </Section>

          {/* アクセシビリティ */}
          <Section id="accessibility" title="アクセシビリティ" icon={Accessibility}>
            <CheckList items={item.accessibility} tone="primary" />
          </Section>

          <p className="mt-12 text-sm text-muted-foreground">
            最終更新日：{formatDate(item.updatedAt)}
          </p>
        </article>
      </div>

      {/* ================= 関連UI ================= */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-border bg-muted/40 py-14">
          <div className="container">
            <Reveal>
              <h2 id="related-heading" className="text-2xl font-bold tracking-tight">
                関連するUI
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.slice(0, 4).map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.05}>
                  <UIItemCard item={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Local partials                                                      */
/* ------------------------------------------------------------------ */
function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 border-b border-border py-10 first:pt-0 last:border-none">
      <h2 id={`${id}-h`} className="mb-6 flex items-center gap-2.5 text-2xl font-bold tracking-tight">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary-50 text-primary dark:bg-primary-900/30">
          <Icon className="size-4" aria-hidden />
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function CheckList({
  items,
  tone,
}: {
  items: string[];
  tone: "primary" | "positive" | "negative" | "neutral";
}) {
  return (
    <ul className="space-y-3">
      {items.map((text, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <CheckCircle2
            aria-hidden
            className={cn(
              "mt-1 size-5 shrink-0",
              tone === "positive" && "text-emerald-500",
              tone === "negative" && "text-rose-400",
              tone === "primary" && "text-primary",
              tone === "neutral" && "text-muted-foreground",
            )}
          />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
