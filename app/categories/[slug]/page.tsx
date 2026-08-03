import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { DynamicIcon } from "@/components/ui/icon";
import { categories, getCategory } from "@/data/categories";
import { getItemsByCategory } from "@/data/ui";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { ChevronRight, Inbox } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.nameJa}（${cat.name}）のUIパターン一覧`,
    description: cat.description,
    path: `/categories/${cat.slug}`,
  });
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();

  const items = getItemsByCategory(slug).sort((a, b) => b.views - a.views);
  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "カテゴリー", path: "/categories" },
    { name: cat.nameJa, path: `/categories/${cat.slug}` },
  ];

  return (
    <div className="container py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbJsonLd(crumbs)) }}
      />
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
                <Link href={c.path} className="hover:text-foreground">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <header className="mt-8 flex items-start gap-5">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary dark:bg-primary-900/30">
          <DynamicIcon name={cat.icon} className="size-6" />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {cat.nameJa}
            <span className="ml-3 text-lg font-normal text-muted-foreground">{cat.name}</span>
          </h1>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
            {cat.description}
          </p>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="mt-14 flex flex-col items-center rounded-3xl border border-dashed border-border py-20 text-center">
          <Inbox className="size-8 text-muted-foreground/50" aria-hidden />
          <p className="mt-4 font-semibold">このカテゴリーのUIは準備中です</p>
          <p className="mt-1 text-sm text-muted-foreground">
            近日公開予定。まずは他のカテゴリーをご覧ください。
          </p>
          <Link
            href="/dictionary"
            className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            UI辞典を見る
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <UIItemCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
