# API設計 — UI Dictionary Japan

方針: 読み取り系はServer Componentsで直接データ層を呼び、REST APIは
「クライアントからの動的操作」と「外部公開」に限定します。

## 実装済み（モック動作）

### `GET /api/search`
リアルタイム検索。自然言語エイリアス対応。

| Query | 型 | 説明 |
| --- | --- | --- |
| `q` | string | 検索語（例: `下から出てくるメニュー`） |
| `limit` | number | 最大件数（既定8、上限20） |

```json
// 200 OK
{
  "query": "下から出てくるメニュー",
  "count": 1,
  "results": [
    {
      "slug": "bottom-sheet",
      "name": "Bottom Sheet",
      "nameJa": "ボトムシート",
      "matchedBy": "alias",
      "matchedAlias": "下から出てくるメニュー",
      "url": "/dictionary/bottom-sheet"
    }
  ]
}
```

- Runtime: **Edge**
- Cache: `public, max-age=60, s-maxage=300`

### `POST /api/submissions`
UI投稿の受付。バリデーション後、審査キューへ。

```json
// Request
{
  "title": "Stripeの料金スライダー",
  "url": "https://stripe.com/pricing",
  "description": "...",
  "category": "pricing",
  "tags": "スライダー, 料金",
  "email": "you@example.com"
}
```

| Status | 意味 |
| --- | --- |
| `201` | 受付完了 `{ ok: true, status: "pending_review" }` |
| `400` | JSONパース失敗 |
| `422` | バリデーションエラー `{ fields: ["url", ...] }` |

## Supabase接続後に追加するAPI

| Method / Path | 説明 | 認証 |
| --- | --- | --- |
| `POST /api/items/:slug/view` | 閲覧記録（view_logs INSERT） | 不要 |
| `GET /api/favorites` | 自分のお気に入り一覧 | 必須 |
| `PUT /api/favorites/:slug` | お気に入りトグル | 必須 |
| `GET /api/admin/submissions` | 審査キュー取得 | ADMIN |
| `PATCH /api/admin/submissions/:id` | 承認/却下 | ADMIN |
| `POST /api/upload` | Cloudinary署名付きアップロードURL発行 | 必須 |

### 認証・認可
- NextAuth（Auth.js v5）+ PrismaAdapter。セッションはDBセッション戦略。
- `users.role`（USER / EDITOR / ADMIN）でルートを保護。
- `/admin` 配下は middleware で `role === "ADMIN"` を強制。

### レート制限（推奨）
- `/api/submissions`: 5回/時/IP（Upstash Ratelimit等）
- `/api/search`: Edgeキャッシュで実質不要

## ページのレンダリング戦略

| ルート | 戦略 |
| --- | --- |
| `/` `/dictionary/[slug]` `/categories/*` `/collections/*` `/blog/*` | **SSG**（generateStaticParams）+ ISR（DB接続後 `revalidate: 3600`） |
| `/dictionary` `/gallery` | SSG + クライアントフィルタリング |
| `/favorites` | SSGシェル + クライアントデータ |
| `/api/search` | Edge Runtime |
| `/admin` | Dynamic（認証後） |
