import type { UIItem } from "@/types/ui";

export const skeleton: UIItem = {
  slug: "skeleton",
  name: "Skeleton",
  nameJa: "スケルトンスクリーン",
  description:
    "読み込み中にコンテンツの骨組みをグレーの図形で見せるUI。体感速度を改善する。",
  category: "skeleton",
  tags: ["ローディング", "プレースホルダー", "体感速度", "パフォーマンス"],
  aliases: [
    "読み込み中に出るグレーの四角いやつ",
    "コンテンツの形だけ先に見えるローディング",
    "チカチカ光るプレースホルダー",
    "ぼんやりした灰色の枠が出る読み込み画面",
    "くるくるの代わりに出る骨組みみたいな画面",
    "シマー（shimmer）エフェクトのローディング",
  ],
  whatIs: [
    "スケルトンスクリーン（Skeleton Screen）は、データの読み込み中に、これから表示されるコンテンツのレイアウトをグレーのブロックや線で「骨組み」として先に見せておくローディングUIです。skeletonは英語で「骨格・骸骨」を意味し、完成後のUIの骨だけを先に描くことからこの名が付きました。2013年にLuke Wroblewski氏がモバイルアプリのデザイン論の中で提唱し広まった、比較的新しいパターンです。",
    "従来のスピナー（くるくる回るインジケーター）が「待たされていること」自体に意識を向けさせるのに対し、スケルトンは「もうすぐ何がどこに出るか」を予告するため、同じ待ち時間でも体感速度が速く感じられるとされています。多くはシマー（shimmer）と呼ばれる光が流れるアニメーションやパルス（明滅）を伴います。",
    "Facebook、YouTube、LinkedInなどの大手サービスが採用したことで一気に普及し、現在ではSPAやモバイルアプリのローディング表現のデファクトスタンダードになっています。ReactのSuspenseやNext.jsのloading.tsxとの組み合わせで、実装面でも標準的な位置づけを得ています。",
  ],
  features: [
    "実際のコンテンツと同じレイアウト・サイズのグレーブロックを表示する",
    "シマー（光が流れる）またはパルス（明滅）のアニメーションで「動作中」を伝える",
    "テキスト行・アバター・画像・カードなど要素の形状を模したバリエーションを組み合わせる",
    "データ到着後、実コンテンツと置き換わってもレイアウトシフトが起きないよう設計する",
    "CSSのみ（animation + gradient）で実装でき、JavaScriptに依存しない",
    "ReactのSuspense fallbackやNext.jsのloading.tsxとして宣言的に組み込める",
  ],
  merits: [
    "スピナーに比べて待ち時間の体感が短くなり、離脱を抑えられる",
    "表示後のレイアウトを予告するため、コンテンツ出現時の驚き・視線の迷いが減る",
    "実コンテンツと同寸で作ればCLS（Cumulative Layout Shift）を防止できる",
    "画面全体ではなくコンポーネント単位で出せるため、部分的な遅延に対応しやすい",
    "「壊れているのでは」という不安を与えにくく、アプリの品質印象が上がる",
  ],
  demerits: [
    "実コンテンツとスケルトンの形が乖離していると、かえって違和感・裏切り感を生む",
    "コンポーネントごとに専用スケルトンを用意する必要があり、実装・保守コストがかかる",
    "0.2秒程度で終わる高速な読み込みでは一瞬チラついてノイズになる",
    "何秒も続く長時間の待機では進捗が分からず、プログレスバーの方が適切",
    "アニメーションが強すぎると視覚的ストレスや酔いの原因になる",
  ],
  bestPractices: [
    "スケルトンは実コンテンツと同じサイズ・同じ位置で作り、置き換え時のレイアウトシフトをゼロにする",
    "表示は読み込みが約300ms以上かかる場合に限定し、高速時のチラつきを避ける（遅延表示）",
    "アニメーションは1.5〜2秒周期の緩やかなシマーかパルスにし、prefers-reduced-motionでは停止する",
    "1画面に出すスケルトンは主要な領域に絞り、画面全体を灰色で埋め尽くさない",
    "進捗が予測できる長い処理はプログレスバー、不確定で短い待ちはスケルトンと使い分ける",
    "リストのスケルトンは実データの平均的な行数（3〜5件）を表示し、無限に続く印象を与えない",
  ],
  useCases: [
    "YouTube — トップページのサムネイル・タイトルがグレーのブロックで先行表示される",
    "Facebook / Instagram — フィード読み込み時の投稿カードのスケルトン",
    "LinkedIn — プロフィールやタイムラインのスケルトン表示の代表例",
    "Slack — 起動直後にチャンネル一覧やメッセージ欄の骨組みを表示",
    "Next.jsアプリ — loading.tsxとSuspenseによるルート単位のスケルトン表示",
  ],
  accessibility: [
    "スケルトン自体は装飾なので aria-hidden=\"true\" を付け、読み上げ対象から外す",
    "読み込み領域のコンテナに aria-busy=\"true\" を設定し、完了時に false へ戻す",
    "スクリーンリーダー向けに「読み込み中」のテキストをsr-onlyで併設するか、aria-liveで完了を通知する",
    "prefers-reduced-motion: reduce の場合はシマーを止め、静的なグレー表示にする",
    "グレーの明度は背景とのコントラストを確保しつつ、点滅（3回/秒以上）にならないよう注意する",
  ],
  figma: [
    "実コンポーネントを複製し、テキストを角丸長方形（fill: gray-200）に置き換えてスケルトン版を作る",
    "実コンポーネントとスケルトンをVariants（state: default / loading）で1コンポーネントにまとめる",
    "テキスト行の高さはフォントサイズの約60〜70%（16pxテキストなら10〜12pxのバー）にすると自然に見える",
    "シマーはグラデーション矩形を重ねてSmart Animateで左→右に動かすとプロトタイプで再現できる",
    "行末のバー幅をランダムに短く（60〜90%）すると本物のテキストらしい印象になる",
  ],
  code: {
    html: `<!-- カード型スケルトン（CSSのみ） -->
<div class="skeleton-card" aria-hidden="true">
  <div class="skeleton avatar"></div>
  <div class="lines">
    <div class="skeleton line" style="width: 60%"></div>
    <div class="skeleton line" style="width: 90%"></div>
    <div class="skeleton line" style="width: 75%"></div>
  </div>
</div>
<p class="sr-only" role="status">読み込み中…</p>

<style>
  .skeleton-card {
    display: flex;
    gap: 16px;
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
  }
  .skeleton {
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: shimmer 1.6s ease-in-out infinite;
    border-radius: 8px;
  }
  .avatar { width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0; }
  .lines { flex: 1; display: grid; gap: 10px; }
  .line { height: 12px; }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .skeleton { animation: none; }
  }
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
  }
</style>`,
    tailwind: `<!-- animate-pulse を使ったカード型スケルトン -->
<div class="flex gap-4 rounded-2xl border border-gray-200 p-5" aria-hidden="true">
  <div class="size-12 shrink-0 animate-pulse rounded-full bg-gray-200
              motion-reduce:animate-none"></div>
  <div class="grid flex-1 gap-2.5">
    <div class="h-3 w-3/5 animate-pulse rounded-md bg-gray-200
                motion-reduce:animate-none"></div>
    <div class="h-3 w-11/12 animate-pulse rounded-md bg-gray-200
                motion-reduce:animate-none"></div>
    <div class="h-3 w-3/4 animate-pulse rounded-md bg-gray-200
                motion-reduce:animate-none"></div>
  </div>
</div>
<p class="sr-only" role="status">読み込み中…</p>`,
    react: `"use client";

import { useEffect, useState } from "react";

/** 汎用スケルトンブロック */
function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={\`animate-pulse rounded-md bg-gray-200
                  motion-reduce:animate-none \${className}\`}
    />
  );
}

/** 記事カードのスケルトン。300ms未満で終わる読み込みでは表示しない */
export function ArticleCardSkeleton({ delayMs = 300 }: { delayMs?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  if (!visible) return null;

  return (
    <div
      aria-busy="true"
      className="flex gap-4 rounded-2xl border border-gray-200 p-5"
    >
      <Skeleton className="size-12 shrink-0 rounded-full" />
      <div className="grid flex-1 gap-2.5">
        <Skeleton className="h-3 w-3/5" />
        <Skeleton className="h-3 w-11/12" />
        <Skeleton className="h-3 w-3/4" />
      </div>
      <span role="status" className="sr-only">
        記事を読み込み中…
      </span>
    </div>
  );
}

// Suspenseと組み合わせる例
// <Suspense fallback={<ArticleCardSkeleton />}>
//   <ArticleCard id={id} />
// </Suspense>`,
    shadcn: `// npx shadcn@latest add skeleton
import { Skeleton } from "@/components/ui/skeleton";

export function ArticleCardSkeleton() {
  return (
    <div
      aria-busy="true"
      className="flex gap-4 rounded-2xl border p-5"
    >
      <Skeleton className="size-12 shrink-0 rounded-full" />
      <div className="grid flex-1 gap-2.5">
        <Skeleton className="h-3 w-3/5" />
        <Skeleton className="h-3 w-11/12" />
        <Skeleton className="h-3 w-3/4" />
      </div>
      <span role="status" className="sr-only">
        読み込み中…
      </span>
    </div>
  );
}

// 一覧では3〜5件だけ並べる
export function ArticleListSkeleton() {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <ArticleCardSkeleton key={i} />
      ))}
    </div>
  );
}`,
  },
  related: ["progress-bar", "toast", "card", "empty-state", "data-table"],
  views: 19600,
  favorites: 720,
  collections: ["saas-ui", "mobile-ui", "ai-ui"],
  gradient: "from-slate-500/15 via-gray-400/10 to-zinc-500/15",
  difficulty: 2,
  updatedAt: "2026-05-28",
};
