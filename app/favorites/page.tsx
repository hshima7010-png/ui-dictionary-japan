import { FavoritesClient } from "@/components/dictionary/favorites-client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "お気に入り",
  description: "保存したUIパターンと閲覧履歴の一覧。",
  path: "/favorites",
});

export default function FavoritesPage() {
  return (
    <div className="container py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">お気に入り</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          ハートを付けたUIと最近見たUIをまとめて確認できます。データはこのブラウザに保存されます（ログイン機能はSupabase接続で有効化できます）。
        </p>
      </header>
      <FavoritesClient />
    </div>
  );
}
