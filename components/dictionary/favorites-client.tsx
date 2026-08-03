"use client";

import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { getUIItem } from "@/data/ui";
import { useFavorites, useHistory } from "@/hooks/use-favorites";
import { Clock, Heart } from "lucide-react";
import Link from "next/link";

export function FavoritesClient() {
  const { favorites, ready } = useFavorites();
  const { history } = useHistory();

  const favItems = favorites
    .map((s) => getUIItem(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const historyItems = history
    .map((s) => getUIItem(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  if (!ready) {
    return (
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-72 animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-16">
      <section aria-labelledby="fav-heading">
        <h2 id="fav-heading" className="flex items-center gap-2 text-xl font-bold">
          <Heart className="size-5 text-rose-500" aria-hidden />
          お気に入り（{favItems.length}）
        </h2>
        {favItems.length === 0 ? (
          <div className="mt-6 flex flex-col items-center rounded-3xl border border-dashed border-border py-16 text-center">
            <Heart className="size-8 text-muted-foreground/40" aria-hidden />
            <p className="mt-4 font-semibold">まだお気に入りがありません</p>
            <p className="mt-1 text-sm text-muted-foreground">
              カードのハートを押すと、ここに保存されます
            </p>
            <Link
              href="/gallery"
              className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              ギャラリーを見る
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favItems.map((item) => (
              <UIItemCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </section>

      {historyItems.length > 0 && (
        <section aria-labelledby="history-heading">
          <h2 id="history-heading" className="flex items-center gap-2 text-xl font-bold">
            <Clock className="size-5 text-primary" aria-hidden />
            最近見たUI
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {historyItems.slice(0, 9).map((item) => (
              <UIItemCard key={item.slug} item={item} variant="compact" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
