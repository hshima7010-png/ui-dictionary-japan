import type { UIItem } from "@/types/ui";

export const productCard: UIItem = {
  slug: "product-card",
  name: "Product Card",
  nameJa: "商品カード",
  description:
    "商品画像・名前・価格・評価をひとまとめにしたECの基本UI。一覧ページの主役。",
  category: "e-commerce",
  tags: ["EC", "商品一覧", "カード", "価格", "コンバージョン"],
  aliases: [
    "商品一覧に並んでいる四角いやつ",
    "写真と値段がセットになったカード",
    "ECサイトでグリッドに並ぶ商品のブロック",
    "商品のサムネイルと価格のかたまり",
    "タップすると商品ページに飛ぶカード",
    "セール中の赤いバッジが付いてるやつ",
  ],
  whatIs: [
    "商品カード（Product Card）は、商品画像・商品名・価格・評価・バッジなどの購買判断に必要な情報を1枚のカードにまとめたECサイトの基本UIコンポーネントです。「Card」という名前は、名刺やトランプのように独立した1枚の紙片に情報がまとまっている様子に由来し、Material Designの「Card」概念の普及とともに定着しました。",
    "商品一覧・検索結果・レコメンド枠など、ECサイトのほぼすべての回遊面に登場します。Amazonの検索結果、楽天市場の商品一覧、Shopifyのコレクションページはいずれも商品カードのグリッドで構成されており、ShopifyではテーマのProduct Cardセクションとしてカスタマイズ項目が用意されているほど中心的な存在です。",
    "小さな面積に「クリックしたくなる情報」をどれだけ的確に詰め込めるかが勝負のUIであり、画像のアスペクト比の統一、価格と割引の見せ方、お気に入りボタンやカート追加ボタンの配置など、コンバージョンに直結する設計判断が凝縮されています。",
  ],
  features: [
    "商品画像・商品名・価格・評価（星）を定型レイアウトで表示する",
    "「SALE」「NEW」「送料無料」などのバッジで注意を引ける",
    "セール時は通常価格に取り消し線、割引率を併記するパターンが定番",
    "hover時に2枚目の画像に切り替わる、カート追加ボタンが現れるなどのインタラクションを持たせられる",
    "お気に入り（ハート）ボタンをカード右上に重ねて配置することが多い",
    "グリッドレイアウトで並べるため、画像アスペクト比と高さの統一が前提になる",
  ],
  merits: [
    "1商品の情報が独立した単位にまとまり、一覧でも視線を迷わせない",
    "グリッドに敷き詰めるだけで一覧・検索・レコメンドなど多くの画面を構成できる再利用性",
    "バッジや割引表示でセール訴求ができ、クリック率・購買率に直接効く",
    "カード単位でABテストや計測がしやすく、改善サイクルを回しやすい",
    "レスポンシブでは列数を変えるだけで済み、モバイル対応が単純",
  ],
  demerits: [
    "情報を詰め込みすぎると窮屈になり、かえって比較しづらくなる",
    "画像の縦横比がバラバラだとグリッド全体が崩れ、雑多な印象を与える",
    "カード全体リンクとお気に入りボタンなど、リンクとボタンの入れ子問題が実装上厄介",
    "hover前提のインタラクションはタッチデバイスで機能しない",
    "商品名の行数制限（省略）とSEO・アクセシビリティの両立に配慮が必要",
  ],
  bestPractices: [
    "画像は同一アスペクト比（1:1や3:4）に統一し、object-fitでトリミングする",
    "カード全体をクリック可能にしつつ、内部のボタンはstopPropagationか重ね配置で独立させる",
    "価格は最も視認性の高い要素の1つにする。セール価格は色、通常価格は取り消し線＋<del>で示す",
    "商品名は2行で省略（line-clamp-2）し、カード高さのばらつきを抑える",
    "hoverでのカート追加ボタン表示はモバイルでは常時表示に切り替える",
    "画像には必ず商品名のaltを入れ、loading=\"lazy\"で一覧のパフォーマンスを守る",
  ],
  useCases: [
    "Amazon — 検索結果・「この商品に関連する商品」のカードグリッド",
    "楽天市場 — ランキング・商品一覧ページの商品カード",
    "Shopify — Dawnテーマなど各テーマのコレクションページのProduct Card",
    "ZOZOTOWN — hoverで別カットに切り替わる商品カード",
    "ユニクロ — カラーチップ付きの商品カード一覧",
  ],
  accessibility: [
    "カードのメインリンクは商品名を含む <a> にし、リンクテキストだけで商品が特定できるようにする",
    "画像のaltは商品名にする。装飾目的の2枚目画像は aria-hidden で重複読み上げを防ぐ",
    "お気に入りボタンは aria-pressed と aria-label（「お気に入りに追加」）を持つ <button> にする",
    "セール価格は「<del>で通常価格</del>→現在価格」の順にマークアップし、読み上げでも意味が通るようにする",
    "評価の星は aria-label=\"5点満点中4.5点\" のようにテキスト化し、色や図形だけに依存しない",
  ],
  figma: [
    "画像・テキスト・価格をAuto Layout（縦）で組み、カード幅はグリッド側でFillに設定する",
    "画像はFrameにFill画像として敷き、アスペクト比を固定した状態でトリミング位置を調整する",
    "バッジ（SALE/NEW）・お気に入りボタンはAbsolute Positionでカード右上・左上に重ねる",
    "「通常」「セール中」「売り切れ」をVariantsにし、価格表示とバッジをまとめて切り替える",
    "商品名はmax lines 2に設定し、長い商品名での высота変化が起きないことを確認する",
    "グリッド全体はLayout Grid（4列/8pxガター等）を敷いて列数違いのパターンを検証する",
  ],
  code: {
    html: `<article class="product-card">
  <a href="/products/tote-bag" class="card-link">
    <div class="thumb">
      <img src="/images/tote-bag.jpg" alt="キャンバストートバッグ" loading="lazy" />
      <span class="badge">SALE</span>
    </div>
    <h3 class="name">キャンバストートバッグ A4対応</h3>
    <p class="rating" aria-label="5点満点中4.5点（128件のレビュー）">
      ★★★★☆ <span class="count">(128)</span>
    </p>
    <p class="price">
      <del>¥4,980</del>
      <strong>¥3,480</strong>
      <span class="off">30%OFF</span>
    </p>
  </a>
  <button type="button" class="fav" aria-pressed="false" aria-label="お気に入りに追加">
    ♡
  </button>
</article>

<style>
  .product-card { position: relative; width: 240px; }
  .card-link { text-decoration: none; color: inherit; display: block; }
  .thumb {
    position: relative;
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    overflow: hidden;
    background: #f3f4f6;
  }
  .thumb img { width: 100%; height: 100%; object-fit: cover; }
  .badge {
    position: absolute; top: 8px; left: 8px;
    background: #e11d48; color: #fff;
    font-size: 11px; font-weight: 700;
    padding: 3px 8px; border-radius: 9999px;
  }
  .name {
    margin: 10px 0 4px; font-size: 14px; font-weight: 500;
    display: -webkit-box; -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; overflow: hidden;
  }
  .rating { margin: 0; font-size: 12px; color: #f59e0b; }
  .rating .count { color: #6b7280; }
  .price { margin: 4px 0 0; font-size: 14px; }
  .price del { color: #9ca3af; margin-right: 6px; }
  .price strong { font-size: 16px; color: #e11d48; }
  .price .off { font-size: 12px; color: #e11d48; margin-left: 4px; }
  .fav {
    position: absolute; top: 8px; right: 8px;
    width: 32px; height: 32px; border-radius: 9999px;
    border: none; background: rgba(255,255,255,.9); cursor: pointer;
  }
</style>`,
    tailwind: `<article class="group relative w-60">
  <a href="/products/tote-bag" class="block">
    <div class="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
      <img
        src="/images/tote-bag.jpg"
        alt="キャンバストートバッグ"
        loading="lazy"
        class="size-full object-cover transition-transform duration-300
               group-hover:scale-105"
      />
      <span class="absolute left-2 top-2 rounded-full bg-rose-600 px-2 py-0.5
                   text-[11px] font-bold text-white">SALE</span>
    </div>
    <h3 class="mt-2.5 line-clamp-2 text-sm font-medium text-gray-900">
      キャンバストートバッグ A4対応
    </h3>
    <p class="mt-1 text-xs text-amber-500"
       aria-label="5点満点中4.5点（128件のレビュー）">
      ★★★★☆ <span class="text-gray-500">(128)</span>
    </p>
    <p class="mt-1 flex items-baseline gap-1.5 text-sm">
      <del class="text-gray-400">¥4,980</del>
      <strong class="text-base font-bold text-rose-600">¥3,480</strong>
      <span class="text-xs font-semibold text-rose-600">30%OFF</span>
    </p>
  </a>
  <button
    type="button"
    aria-pressed="false"
    aria-label="お気に入りに追加"
    class="absolute right-2 top-2 grid size-8 place-items-center rounded-full
           bg-white/90 text-gray-500 shadow-sm hover:text-rose-500"
  >
    <svg class="size-4" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 8.6c0 5.2-7.2 9.9-9 11-1.8-1.1-9-5.8-9-11a4.9 4.9 0 0 1 9-2.7A4.9 4.9 0 0 1 21 8.6Z" />
    </svg>
  </button>
</article>`,
    react: `"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

type Product = {
  href: string;
  imageUrl: string;
  name: string;
  rating: number;
  reviewCount: number;
  price: number;
  salePrice?: number;
};

const yen = (n: number) => \`¥\${n.toLocaleString("ja-JP")}\`;

export function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const onSale = product.salePrice != null && product.salePrice < product.price;
  const offRate = onSale
    ? Math.round((1 - product.salePrice! / product.price) * 100)
    : 0;

  return (
    <article className="group relative w-60">
      <a href={product.href} className="block">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {onSale && (
            <span className="absolute left-2 top-2 rounded-full bg-rose-600 px-2 py-0.5 text-[11px] font-bold text-white">
              SALE
            </span>
          )}
        </div>
        <h3 className="mt-2.5 line-clamp-2 text-sm font-medium text-gray-900">
          {product.name}
        </h3>
        <p
          className="mt-1 text-xs text-amber-500"
          aria-label={\`5点満点中\${product.rating}点（\${product.reviewCount}件のレビュー）\`}
        >
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
          <span className="ml-1 text-gray-500">({product.reviewCount})</span>
        </p>
        <p className="mt-1 flex items-baseline gap-1.5 text-sm">
          {onSale ? (
            <>
              <del className="text-gray-400">{yen(product.price)}</del>
              <strong className="text-base font-bold text-rose-600">
                {yen(product.salePrice!)}
              </strong>
              <span className="text-xs font-semibold text-rose-600">
                {offRate}%OFF
              </span>
            </>
          ) : (
            <strong className="text-base font-bold text-gray-900">
              {yen(product.price)}
            </strong>
          )}
        </p>
      </a>
      <button
        type="button"
        aria-pressed={isFavorite}
        aria-label={isFavorite ? "お気に入りから削除" : "お気に入りに追加"}
        onClick={() => setIsFavorite((v) => !v)}
        className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-white/90 shadow-sm"
      >
        <Heart
          aria-hidden
          className={\`size-4 \${
            isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-500"
          }\`}
        />
      </button>
    </article>
  );
}`,
    shadcn: `// npx shadcn@latest add card badge button
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function ProductCard() {
  return (
    <Card className="group relative w-60 overflow-hidden border-0 shadow-none">
      <a href="/products/tote-bag" className="block">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
          <img
            src="/images/tote-bag.jpg"
            alt="キャンバストートバッグ"
            loading="lazy"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute left-2 top-2 bg-rose-600">SALE</Badge>
        </div>
        <CardContent className="px-0 pt-2.5">
          <h3 className="line-clamp-2 text-sm font-medium">
            キャンバストートバッグ A4対応
          </h3>
          <p
            className="mt-1 text-xs text-amber-500"
            aria-label="5点満点中4.5点（128件のレビュー）"
          >
            ★★★★☆ <span className="text-muted-foreground">(128)</span>
          </p>
          <p className="mt-1 flex items-baseline gap-1.5 text-sm">
            <del className="text-muted-foreground">¥4,980</del>
            <strong className="text-base font-bold text-rose-600">¥3,480</strong>
          </p>
        </CardContent>
      </a>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-pressed={false}
        aria-label="お気に入りに追加"
        className="absolute right-2 top-2 size-8 rounded-full bg-white/90"
      >
        <Heart aria-hidden className="size-4" />
      </Button>
    </Card>
  );
}`,
  },
  related: ["star-rating", "badge", "card", "image-gallery"],
  views: 46800,
  favorites: 2100,
  collections: ["ec-ui", "shopify-ui"],
  gradient: "from-rose-500/15 via-pink-500/10 to-fuchsia-500/15",
  difficulty: 1,
  updatedAt: "2026-07-09",
};
