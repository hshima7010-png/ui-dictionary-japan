# UI Dictionary Japan

**UIを探す・学ぶ・実装する** — 「このUIなんて名前？」を一瞬で解決する、日本語のUI辞典。

![Next.js 15](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)

🔗 **公開サイト: https://ui-dictionary-japan.vercel.app**

## クイックスタート

```bash
npm install
npm run dev
# → http://localhost:3000
```

**環境変数なしでフル動作します。** 100件のUIパターン、検索、お気に入り、投稿フォームまで全てモックデータで動きます。

## 主な機能

- **UI辞典** — 100件のUIパターンを「意味 / 特徴 / メリット / デメリット / ベストプラクティス / 使用例 / 実装コード / Figma / アクセシビリティ」まで完全解説
- **AI検索（自然言語）** — 「下から出てくるメニュー」→ Bottom Sheet。ひらがな/カタカナ正規化 + エイリアス辞書 + bigram類似度によるハイブリッド検索（⌘Kで起動）
- **実装コード** — HTML / Tailwind / React / shadcn/ui をタブ切替 + ワンクリックコピー
- **ギャラリー** — Pinterest風Masonryグリッド + タグフィルター
- **コレクション** — Apple風 / Shopify風 / SaaS / 管理画面などテーマ別キュレーション
- **お気に入り・履歴** — localStorageで即動作（Supabase接続でアカウント同期に切替可能）
- **人気ランキング / ブログ / 投稿フォーム / 管理画面デモ**
- **SEO** — JSON-LD（WebSite / TechArticle / BreadcrumbList）、OGP、sitemap、robots、RSS、canonical

## ディレクトリ構成

```
app/                     # ルーティング（App Router）
├── page.tsx             # Home（巨大検索バー + ランキング + コレクション）
├── dictionary/          # 辞典一覧 + [slug]詳細
├── categories/          # カテゴリー一覧 + [slug]
├── gallery/             # Masonryギャラリー
├── collections/         # コレクション一覧 + [slug]
├── blog/                # ブログ一覧 + [slug]
├── ranking/ favorites/ submit/ about/ admin/
├── api/search/          # 検索API（Edge Runtime）
├── api/submissions/     # 投稿受付API
├── sitemap.ts robots.ts rss.xml/
components/
├── ui/                  # 汎用プリミティブ（Button, Badge, Icon, Reveal...）
├── layout/              # Navbar, Footer, テーマ切替
├── search/              # ⌘K検索ダイアログ
├── dictionary/          # カード, 詳細ページ部品, お気に入り
├── code/                # コードブロック（タブ切替+コピー）
data/
├── ui/                  # ★UIアイテム100件（1ファイル=1エントリ）
├── categories.ts collections.ts blog.ts
lib/                     # search, seo, utils, auth(雛形), prisma(雛形)
hooks/                   # use-favorites（localStorage）
services/                # データアクセス層（モック⇄DB切替の境界）
types/                   # ドメイン型定義
prisma/schema.prisma     # DBスキーマ（Supabase向け）
supabase/schema.sql      # SQL + RLSポリシー + ランキングビュー
docs/                    # ER図 / API設計 / デザインシステム
```

## コンテンツの追加方法

`data/ui/` に1ファイル追加して `data/ui/index.ts` に登録するだけです。

```ts
// data/ui/my-new-ui.ts
import type { UIItem } from "@/types/ui";
export const myNewUi: UIItem = { slug: "my-new-ui", ... };
```

型（`types/ui.ts`）が必須項目を強制するため、執筆漏れはビルド時に検出されます。

## Supabase / 本番DBへの切り替え

1. Supabaseプロジェクトを作成し、`supabase/schema.sql` をSQL Editorで実行（RLS込み）
2. `.env` を設定（`.env.example` 参照）
3. `npm run db:generate && npm run db:push`
4. `services/*.ts` の `TODO(supabase)` をPrisma実装に差し替え
5. 認証を使う場合: `lib/auth.ts` のコメントを解除し NextAuth を有効化

UI層は `services/` 経由でデータを受け取るため、切り替えでコンポーネントの変更は不要です。

## デプロイ（Vercel）

```bash
vercel
```

全ページSSG（詳細100ページは `generateStaticParams`）+ 検索APIのみEdge。
DB接続後は各ページに `export const revalidate = 3600` を追加してISR化してください。

## ドキュメント

- [ER図（Mermaid）](docs/er-diagram.md)
- [API設計](docs/api-design.md)
- [デザインシステム](docs/design-system.md)

## ライセンス

コードはMIT。収録コンテンツの利用条件は `/about` を参照。
