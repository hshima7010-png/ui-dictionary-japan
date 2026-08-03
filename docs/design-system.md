# デザインシステム — UI Dictionary Japan

参考: Apple / Linear / Raycast / Stripe / Vercel
原則: **余白を多く・ミニマル・モダン・カード中心・控えめなGlassmorphism**

## カラー

| トークン | Light | Dark | 用途 |
| --- | --- | --- | --- |
| `primary` | `#2563EB` | 同左 | 主要アクション・リンク・強調 |
| `accent` | `#4F46E5` | 同左 | グラデーションの相方・特別な強調 |
| `background` | `#FFFFFF` | `#0F172A` | ページ背景 |
| `foreground` | `#111827` | `#F1F5F9` | 本文テキスト |
| `muted-foreground` | `#6B7280` | `#94A3B8` | 補助テキスト |
| `border` | `#E5E7EB` | `#29354C` | 罫線・カード枠 |
| `card` | `#FFFFFF` | `#141E33` | カード背景 |

- ダークモードは `class` 戦略（next-themes）。CSS変数（RGBトリプレット）で両テーマを一元管理。
- グラデーションは `from-primary to-accent`（135deg）を正とする。

## タイポグラフィ

- 欧文: Inter / 和文: Noto Sans JP（`next/font` でセルフホスト、`display: swap`）
- 本文の行間は **1.9**（日本語最適化）。UIラベルは1.5。
- 見出しは `tracking-tight`、日本語見出しに `text-balance` を併用。
- `font-feature-settings: "palt"` を全体適用（約物詰め）。

| 役割 | サイズ |
| --- | --- |
| Display（Hero） | `text-4xl〜6xl` / bold |
| H1 | `text-3xl〜4xl` / bold |
| H2 | `text-2xl` / bold |
| 本文 | `text-base` / leading-[1.9] |
| 補助 | `text-sm` `text-muted-foreground` |
| キャプション | `text-xs` |

## 角丸・影・余白

- 角丸基準: **16px（`rounded-2xl`）**。小要素は `rounded-xl`（12px）、チップは `rounded-full`。
- 影は3段階: `shadow-soft`（静止） → `shadow-card`（浮き） → `shadow-lift`（ホバー）。
  ホバー時は `translateY(-3px)` + `shadow-lift`（`.card-hover` ユーティリティ）。
- セクション間余白: `py-16〜20`（モバイル） / `py-20〜28`（デスクトップ）。
- Glassmorphismはヘッダーのみ（`.glass` = 72%不透明 + blur 16px）。多用しない。

## モーション

イージングは全て `cubic-bezier(0.16, 1, 0.3, 1)`（easeOutExpo系）。

| 種類 | 時間 | 実装 |
| --- | --- | --- |
| ホバー（色・影） | 200-300ms | Tailwind transition |
| カード浮き | 300ms | `.card-hover` |
| スクロール出現 | 600ms + stagger 50ms | `<Reveal>`（Framer Motion, `whileInView`） |
| ダイアログ | 180ms scale 0.97→1 | Framer Motion `AnimatePresence` |
| スケルトン | shimmer 1.6s | CSS keyframes |

**必須**: `prefers-reduced-motion` で全アニメーション無効化（globals.css + `useReducedMotion`）。

## コンポーネント規約

- `components/ui/` — 汎用プリミティブ（Button / Badge / Skeleton / Icon / Reveal）。ビジネスロジック禁止。
- `components/layout/` — Navbar / Footer / テーマ。
- `components/dictionary|search|code|home/` — ドメインコンポーネント。
- Server Component が既定。`"use client"` は「状態・イベント・ブラウザAPIを使う末端」のみ。
- アイコンは lucide-react。サイズは `size-4`（UI内） / `size-5〜6`（見出し）。

## アクセシビリティ基準（WCAG 2.2 AA）

- フォーカスリング: `:focus-visible` で2pxのprimaryリング（globals.cssで全体適用）
- インタラクティブ要素は最小44pxのタップ領域（モバイル）
- すべての装飾アイコンに `aria-hidden`、意味を持つ操作に `aria-label`
- 開閉UIは `aria-expanded` / `aria-controls`、選択UIは `aria-pressed` / `aria-selected`
- コントラスト比: 本文4.5:1以上（muted-foregroundは大きめテキストでのみ使用）

## レスポンシブ

Mobile First。ブレークポイント: `sm:640` `md:768` `lg:1024` `xl:1280` `2xl:1536`。
コンテナ最大幅は1280px、パディング24px。
Masonryは列数 1 → 2（sm） → 3（lg） → 4（2xl）。
