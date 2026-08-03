import { FavoriteButton } from "@/components/dictionary/favorite-button";
import { PreviewFrame } from "@/components/previews/frame";
import { getPreview } from "@/components/previews/registry";
import { Badge } from "@/components/ui/badge";
import { DynamicIcon } from "@/components/ui/icon";
import { getCategory } from "@/data/categories";
import type { UIItem } from "@/types/ui";
import { cn, formatViews } from "@/lib/utils";
import { Eye, Heart } from "lucide-react";
import Link from "next/link";

/**
 * UIアイテムカード — 一覧・ギャラリー・関連UIで共通利用。
 * Server Componentとして描画し、お気に入りボタンのみClient。
 */
export function UIItemCard({
  item,
  variant = "grid",
}: {
  item: UIItem;
  variant?: "grid" | "masonry" | "compact";
}) {
  const category = getCategory(item.category);
  const Preview = getPreview(item.slug);
  const previewHeight =
    variant === "masonry"
      ? item.slug.length % 3 === 0
        ? "h-56"
        : item.slug.length % 3 === 1
          ? "h-44"
          : "h-64"
      : "h-44";

  if (variant === "compact") {
    return (
      <Link
        href={`/dictionary/${item.slug}`}
        className="card-hover group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft"
      >
        <span
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-primary",
            item.gradient ?? "from-blue-500/15 to-indigo-500/15",
          )}
        >
          {category && <DynamicIcon name={category.icon} className="size-5" />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold group-hover:text-primary">
            {item.name}
          </span>
          <span className="block truncate text-sm text-muted-foreground">
            {item.nameJa}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
          <Eye className="size-3.5" aria-hidden />
          {formatViews(item.views)}
        </span>
      </Link>
    );
  }

  return (
    <article
      className={cn(
        "card-hover group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
        variant === "masonry" && "mb-6 inline-block w-full",
      )}
    >
      <Link
        href={`/dictionary/${item.slug}`}
        className="block focus-visible:outline-none"
      >
        {/* preview — 実物のミニチュアがあれば描画し、なければアイコンにフォールバック */}
        <PreviewFrame gradient={item.gradient} className={previewHeight}>
          {Preview ? (
            <Preview />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-110">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-card/90 text-primary shadow-card backdrop-blur">
                {category && <DynamicIcon name={category.icon} className="size-6" />}
              </span>
              <span className="rounded-full bg-card/80 px-3 py-1 text-xs font-semibold tracking-wide text-foreground/80 backdrop-blur">
                {item.name}
              </span>
            </div>
          )}
        </PreviewFrame>

        {/* body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-tight">
              {item.name}
              <span className="mt-0.5 block text-sm font-normal text-muted-foreground">
                {item.nameJa}
              </span>
            </h3>
            {category && <Badge variant="primary">{category.nameJa}</Badge>}
          </div>
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Eye className="size-3.5" aria-hidden />
                {formatViews(item.views)}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="size-3.5" aria-hidden />
                {formatViews(item.favorites)}
              </span>
            </span>
            <span className="flex gap-1">
              {item.tags.slice(0, 2).map((t) => (
                <span key={t} className="rounded-full bg-muted px-2 py-0.5">
                  {t}
                </span>
              ))}
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100">
        <FavoriteButton slug={item.slug} />
      </div>
    </article>
  );
}
