import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { uiItems, popularTags } from "@/data/ui";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "ギャラリー — UIパターンを眺めて探す",
  description:
    "Pinterest風のMasonryグリッドでUIパターンを一覧。気になったUIはお気に入りに保存できます。",
  path: "/gallery",
});

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const items = tag ? uiItems.filter((i) => i.tags.includes(tag)) : uiItems;
  // Masonryの見た目が単調にならないよう人気順ベースで並べる
  const sorted = [...items].sort((a, b) => b.views - a.views);

  return (
    <div className="container py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">ギャラリー</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          眺めているだけで引き出しが増える、UIパターンのビジュアル一覧。カードにホバーするとお気に入り登録できます。
        </p>
      </header>

      {/* タグフィルター */}
      <nav aria-label="タグで絞り込み" className="mt-8 flex gap-2 overflow-x-auto pb-2">
        <TagChip href="/gallery" active={!tag}>
          すべて
        </TagChip>
        {popularTags.slice(0, 14).map((t) => (
          <TagChip
            key={t.tag}
            href={`/gallery?tag=${encodeURIComponent(t.tag)}`}
            active={tag === t.tag}
          >
            #{t.tag}
            <span className="ml-1 text-xs opacity-60">{t.count}</span>
          </TagChip>
        ))}
      </nav>

      <p className="mt-4 text-sm text-muted-foreground" role="status">
        {sorted.length}件のUI{tag && `（#${tag}）`}
      </p>

      {/* Masonry grid */}
      <div className="masonry mt-6">
        {sorted.map((item) => (
          <UIItemCard key={item.slug} item={item} variant="masonry" />
        ))}
      </div>
    </div>
  );
}

function TagChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "shrink-0 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-white shadow-soft"
          : "shrink-0 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
      }
    >
      {children}
    </Link>
  );
}
