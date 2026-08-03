# services/ — データアクセス層

このディレクトリは「モックデータ ⇄ 本番DB」の切り替え境界です。

現在はローカルの `data/` からデータを返すモック実装になっています。
Supabase接続時は、各ファイルの `TODO(supabase)` を Prisma / Supabase クライアント実装に
差し替えるだけで、UI側のコードは一切変更不要です。

| ファイル | 役割 | 本番実装 |
| --- | --- | --- |
| `ui-items.ts` | UIアイテム取得 | `prisma.uIItem.findMany()` |
| `favorites.ts` | お気に入り | `prisma.favorite` + NextAuthセッション |
| `submissions.ts` | 投稿受付 | `prisma.submission.create()` + Cloudinaryアップロード |
| `ranking.ts` | ランキング集計 | `v_ranking_30d` ビュー参照 |
