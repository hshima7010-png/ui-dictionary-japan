import type { UIItem } from "@/types/ui";

export const breadcrumb: UIItem = {
  slug: "breadcrumb",
  name: "Breadcrumb",
  nameJa: "パンくずリスト",
  description:
    "現在地までの階層をリンクで示すナビゲーション。迷子防止とSEOに効く定番UI。",
  category: "breadcrumb",
  tags: ["ナビゲーション", "階層", "SEO", "現在地表示"],
  aliases: [
    "ページ上部にある「ホーム > カテゴリ > 商品」みたいなやつ",
    "今どこにいるか分かるリンクの列",
    "階層をたどれるナビゲーション",
    "スラッシュや矢印で区切られたページの道しるべ",
    "サイトの現在地を示すリンクリスト",
    "上の階層に戻れるリンクの並び",
  ],
  whatIs: [
    "パンくずリスト（Breadcrumb）は、サイトのトップページから現在のページまでの階層構造をリンクの連なりで表示するナビゲーションUIです。名前はグリム童話『ヘンゼルとグレーテル』で、兄妹が森で迷わないようにパンくずを落として帰り道の目印にしたエピソードに由来します。",
    "「ホーム > メンズ > シューズ > スニーカー」のように、ユーザーが今サイト内のどこにいるのかをひと目で伝え、上位階層へワンクリックで戻れるようにします。階層が深いECサイトやドキュメントサイトでは特に効果が高く、検索エンジンから直接下層ページに流入したユーザーの迷子を防ぎます。",
    "SEOの観点でも重要で、BreadcrumbListの構造化データ（JSON-LD）を併用するとGoogleの検索結果にパンくず表示が反映されます。WAI-ARIAでもnavタグとaria-label=\"Breadcrumb\"を使うパターンが標準として定義されており、実装の型が固まった安定したUIです。",
  ],
  features: [
    "トップページから現在地までの経路をリンクで一覧表示する",
    "区切り文字にはスラッシュ（/）、大なり記号（>）、シェブロンアイコンなどが使われる",
    "現在のページはリンクにせず、aria-current=\"page\"でマークするのが標準",
    "階層が深い場合は中間を「…」で省略する折りたたみ型のバリエーションがある",
    "階層型（Location-based）のほか、ユーザーの遷移履歴を示すパス型（Path-based）、属性型（Attribute-based）が存在する",
  ],
  merits: [
    "サイト内の現在地が明確になり、ユーザーの方向感覚（オリエンテーション）を保てる",
    "上位階層へワンクリックで移動でき、ブラウザバック連打より効率的に回遊できる",
    "構造化データと組み合わせると検索結果にリッチリザルトとして表示され、CTR向上が期待できる",
    "省スペースで実装でき、ページレイアウトへの影響が小さい",
    "検索エンジンにサイト構造を伝え、クローラビリティと内部リンク評価に貢献する",
  ],
  demerits: [
    "階層が浅いサイト（1〜2階層）では冗長になり、かえってノイズになる",
    "モバイルの狭い画面では長い階層が折り返し・見切れを起こしやすい",
    "カテゴリを横断する商品など、正規の階層が一意に決まらないコンテンツでは設計が難しい",
    "メインナビゲーションの代替にはならず、あくまで補助的な位置づけにとどまる",
  ],
  bestPractices: [
    "ページタイトルの直上など、コンテンツ上部の定位置に配置し、全ページで一貫させる",
    "現在ページは末尾に置いてリンク化せず、aria-current=\"page\"を付与する",
    "区切り文字はCSSの疑似要素かaria-hiddenを付けたアイコンで表現し、スクリーンリーダーに読ませない",
    "モバイルでは中間階層を省略するか、「1つ上の階層に戻る」リンクだけに簡略化する",
    "BreadcrumbListのJSON-LD構造化データを必ず併記してSEO効果を最大化する",
    "パンくずの階層はURL構造ではなく情報設計上のカテゴリ構造に合わせる",
  ],
  useCases: [
    "Amazonの商品ページ — 「ホーム > 家電 > イヤホン」のようなカテゴリ階層の表示",
    "ヨドバシ.com — 深いカテゴリ構造をパンくずで辿れるようにし回遊性を確保",
    "MDN Web Docs — ドキュメントの章構造をパンくずで提示",
    "Google検索結果 — 構造化データ由来のパンくずがURL代わりに表示される",
    "社内管理画面 — 「ダッシュボード > ユーザー管理 > 編集」のような画面階層の明示",
  ],
  accessibility: [
    "全体を <nav aria-label=\"パンくずリスト\"> で囲み、ランドマークとして認識させる",
    "リストは <ol>（順序付きリスト）でマークアップし、階層の順序性を伝える",
    "現在のページには aria-current=\"page\" を付与し、リンクにしない",
    "区切り文字・アイコンには aria-hidden=\"true\" を付け、読み上げ対象から外す",
    "リンクのタップ領域は44px四方を目安に確保し、モバイルでの誤タップを防ぐ",
  ],
  figma: [
    "Auto Layout（横方向、gap: 8）でリンクと区切りアイコンを並べ、項目の増減に自動対応させる",
    "「リンク」「区切り」「現在地」の3つをコンポーネント化し、Instance Swapで組み替えられるようにする",
    "現在地のテキストはVariantで色（gray-900など）とフォントウェイトを変え、リンクと区別する",
    "長いラベルが折り返した場合の挙動をTruncate（…）設定で確認しておく",
    "モバイル用に「戻る矢印＋親階層名」だけの省略Variantを用意しておくと実装時に迷わない",
  ],
  code: {
    html: `<nav aria-label="パンくずリスト">
  <ol class="breadcrumb">
    <li><a href="/">ホーム</a></li>
    <li><a href="/mens">メンズ</a></li>
    <li><a href="/mens/shoes">シューズ</a></li>
    <li aria-current="page">スニーカー</li>
  </ol>
</nav>

<style>
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  .breadcrumb li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  /* 区切り文字はCSSで出す（読み上げ対象外になる） */
  .breadcrumb li + li::before {
    content: "/";
    color: #9ca3af;
  }
  .breadcrumb a {
    color: #6b7280;
    text-decoration: none;
  }
  .breadcrumb a:hover {
    color: #111827;
    text-decoration: underline;
  }
  .breadcrumb [aria-current="page"] {
    color: #111827;
    font-weight: 600;
  }
</style>`,
    tailwind: `<nav aria-label="パンくずリスト">
  <ol class="flex flex-wrap items-center gap-2 text-sm">
    <li>
      <a href="/" class="text-gray-500 transition-colors hover:text-gray-900">
        ホーム
      </a>
    </li>
    <li aria-hidden="true" class="text-gray-400">
      <svg class="size-3.5" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6" />
      </svg>
    </li>
    <li>
      <a href="/mens" class="text-gray-500 transition-colors hover:text-gray-900">
        メンズ
      </a>
    </li>
    <li aria-hidden="true" class="text-gray-400">
      <svg class="size-3.5" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6" />
      </svg>
    </li>
    <li>
      <span aria-current="page" class="font-semibold text-gray-900">
        スニーカー
      </span>
    </li>
  </ol>
</nav>`,
    react: `"use client";

import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="パンくずリスト">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={i}>
              {i > 0 && (
                <li aria-hidden="true" className="text-gray-400">
                  <ChevronRight className="size-3.5" />
                </li>
              )}
              <li>
                {isLast || !item.href ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="font-semibold text-gray-900"
                  >
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

// 使用例
// <Breadcrumb
//   items={[
//     { label: "ホーム", href: "/" },
//     { label: "メンズ", href: "/mens" },
//     { label: "スニーカー" },
//   ]}
// />`,
    shadcn: `// npx shadcn@latest add breadcrumb
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function ProductBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {/* 深い階層は省略記号でまとめる */}
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/mens/shoes">シューズ</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>スニーカー</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
  },
  related: ["navbar", "sidebar", "pagination", "tabs", "search-bar"],
  views: 21400,
  favorites: 860,
  collections: ["ec-ui", "saas-ui"],
  gradient: "from-amber-500/15 via-orange-500/10 to-rose-500/15",
  difficulty: 1,
  updatedAt: "2026-05-14",
};
