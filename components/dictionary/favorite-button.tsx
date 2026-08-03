"use client";

import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

export function FavoriteButton({
  slug,
  className,
  withLabel = false,
}: {
  slug: string;
  className?: string;
  withLabel?: boolean;
}) {
  const { isFavorite, toggle, ready } = useFavorites();
  const active = ready && isFavorite(slug);

  return (
    <button
      type="button"
      aria-label={active ? "お気に入りから削除" : "お気に入りに追加"}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl transition-all active:scale-90",
        withLabel
          ? "h-10 border border-border bg-card px-4 text-sm font-medium shadow-soft hover:border-rose-300"
          : "size-8 justify-center bg-card/80 shadow-soft backdrop-blur hover:scale-110",
        active ? "text-rose-500" : "text-muted-foreground hover:text-rose-500",
        className,
      )}
    >
      <Heart className={cn("size-4", active && "fill-rose-500")} aria-hidden />
      {withLabel && (active ? "お気に入り済み" : "お気に入り")}
    </button>
  );
}
