import type { UIItem } from "@/types/ui";

export const spinner: UIItem = {
  slug: "spinner",
  name: "Spinner",
  nameJa: "スピナー",
  description:
    "処理中であることを回転アニメーションで伝えるローディングUI。待ち時間の不安を軽減する。",
  category: "loading",
  tags: ["ローディング", "待機", "非同期処理", "フィードバック"],
  aliases: [
    "くるくる回る読み込み",
    "ぐるぐるするやつ",
    "ローディングの円",
    "読み込み中のマーク",
    "回転する待機アイコン",
    "処理中にくるくる出るアレ",
  ],
  whatIs: [
    "スピナー（Spinner）は、データの取得や処理の実行中であることを、回転し続けるアニメーションで伝えるローディングインジケーターです。名前は英語の「spin（回転する）」に由来し、円弧やドットがくるくると回り続ける見た目そのままに名付けられました。日本では「くるくる」という愛称で呼ばれることもあります。",
    "プログレスバーが「あとどれくらいで終わるか」を伝えるのに対し、スピナーは「今処理が動いている」ことだけを伝える不確定型（indeterminate）のインジケーターです。完了時間が予測できない通信処理やボタン押下後の送信処理など、短時間の待機を埋める用途に適しています。",
    "iOSのUIActivityIndicator、AndroidのCircularProgressIndicatorなど、各プラットフォームに標準実装が存在する最も基本的なUIパターンのひとつです。CSSアニメーションだけで実装できる手軽さから、Webでも事実上の標準として定着しています。",
  ],
  features: [
    "円弧やドットが回転し続けるアニメーションで「処理中」を表現する",
    "終了時間を示さない不確定型（indeterminate）インジケーターである",
    "サイズバリエーション（ボタン内の小型〜画面中央の大型）を持つことが多い",
    "CSSの@keyframesとborderプロパティだけで実装できる",
    "ボタン内蔵型・オーバーレイ型・インライン型など配置パターンが豊富",
    "ラベル（「読み込み中…」）を添えて意味を補強できる",
  ],
  merits: [
    "「アプリが固まったのでは」という不安を軽減し、体感待ち時間を短くする",
    "実装コストが極めて低く、あらゆるフレームワークで数行で使える",
    "省スペースで、ボタン内やテキスト横などどこにでも置ける",
    "ユーザーの学習コストがゼロに近い、世界共通で通じるメタファーである",
    "二重送信防止（ボタン無効化）と組み合わせて操作の安全性を高められる",
  ],
  demerits: [
    "進捗が分からないため、長時間表示するとかえって不安・苛立ちを生む",
    "多用するとページ中がくるくる回り、視覚的ノイズが増える",
    "コンテンツの構造を予告できないため、一覧画面ではスケルトンスクリーンに劣る",
    "1秒未満の処理で表示すると点滅のようにチラついて逆効果になる",
    "回転アニメーションが前庭障害のあるユーザーに不快感を与える場合がある",
  ],
  bestPractices: [
    "1秒以上かかる処理にのみ表示する。短い処理では表示遅延（約300ms）を入れてチラつきを防ぐ",
    "10秒を超える可能性がある処理はスピナーではなくプログレスバーや進捗メッセージに切り替える",
    "一覧やカードの読み込みには、レイアウトを予告できるスケルトンスクリーンを優先検討する",
    "ボタン押下後はボタン内にスピナーを表示し、同時にdisabledにして二重送信を防ぐ",
    "「読み込み中…」などのテキストラベルを添え、何を待っているのかを明示する",
    "prefers-reduced-motionが有効な環境では回転を止めるか穏やかな表現に差し替える",
  ],
  useCases: [
    "X（旧Twitter）のタイムライン読み込み — 画面中央に青いスピナーを表示",
    "Stripe Dashboardの保存ボタン — 押下後にボタン内スピナーで処理中を表示",
    "YouTubeの動画バッファリング — プレイヤー中央の白いスピナー",
    "ChatGPTなどAIチャットの応答待ち — 送信直後のインラインスピナー",
    "iOSのApp Storeアプリ — コンテンツ取得中のUIActivityIndicator",
  ],
  accessibility: [
    "コンテナに role=\"status\" を付与し、スクリーンリーダーに状態変化を通知する",
    "視覚的なラベルを置けない場合は aria-label=\"読み込み中\" や sr-only テキストで代替する",
    "aria-live=\"polite\" 相当の通知になるよう、表示・非表示をDOMの追加・削除で切り替える",
    "アニメーションはCSSで実装し、prefers-reduced-motionメディアクエリで停止できるようにする",
    "読み込み完了後はフォーカスやライブリージョンで「完了」を伝え、置き去りにしない",
  ],
  figma: [
    "円弧はEllipseのArc機能（Sweep 75%程度）で作り、線端をRoundにすると自然な欠けた円になる",
    "プロトタイプでは回転をSmart Animateではなく「After Delay + 回転違いのVariant」をループさせて表現する",
    "サイズ（16 / 24 / 48px）と色（primary / white）をVariantsで管理すると配置先を選ばない",
    "ボタンコンポーネントに「loading」状態のVariantを追加し、ラベルをスピナーに差し替えるパターンを用意する",
    "回転アニメーションGIFを埋め込む場合は、開発者向けに実装はCSSで行う旨をメモしておく",
  ],
  code: {
    html: `<div class="spinner" role="status" aria-label="読み込み中">
  <span class="sr-only">読み込み中…</span>
</div>

<style>
  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
  @media (prefers-reduced-motion: reduce) {
    .spinner { animation-duration: 2s; }
  }
</style>`,
    tailwind: `<!-- 単体スピナー -->
<div
  role="status"
  aria-label="読み込み中"
  class="size-8 animate-spin rounded-full border-[3px]
         border-gray-200 border-t-blue-500 motion-reduce:animate-[spin_2s_linear_infinite]"
>
  <span class="sr-only">読み込み中…</span>
</div>

<!-- ボタン内スピナー（送信中） -->
<button
  type="button"
  disabled
  class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5
         font-semibold text-white disabled:opacity-70"
>
  <span
    aria-hidden="true"
    class="size-4 animate-spin rounded-full border-2
           border-white/30 border-t-white"
  ></span>
  送信中…
</button>`,
    react: `"use client";

import { useState } from "react";

export function Spinner({
  size = 32,
  label = "読み込み中…",
}: {
  size?: number;
  label?: string;
}) {
  return (
    <div role="status" className="inline-flex items-center gap-3">
      <span
        aria-hidden
        style={{ width: size, height: size }}
        className="animate-spin rounded-full border-[3px]
                   border-gray-200 border-t-blue-500
                   motion-reduce:animate-[spin_2s_linear_infinite]"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function SubmitButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500)); // API呼び出しの代わり
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
      className="inline-flex items-center gap-2 rounded-xl bg-blue-600
                 px-5 py-2.5 font-semibold text-white
                 hover:bg-blue-700 disabled:opacity-70"
    >
      {loading && (
        <span
          aria-hidden
          className="size-4 animate-spin rounded-full border-2
                     border-white/30 border-t-white"
        />
      )}
      {loading ? "送信中…" : "送信する"}
    </button>
  );
}`,
    shadcn: `// shadcn/uiに単体のSpinnerコンポーネントはないため、
// lucide-reactのLoader2 + Buttonで実装するのが定番です。
// npx shadcn@latest add button
"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoadingButton() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      disabled={loading}
      aria-busy={loading}
      onClick={async () => {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
      }}
    >
      {loading && <Loader2 className="animate-spin" aria-hidden />}
      {loading ? "保存中…" : "保存する"}
    </Button>
  );
}

export function PageSpinner() {
  return (
    <div role="status" className="flex justify-center py-12">
      <Loader2 className="size-8 animate-spin text-muted-foreground" aria-hidden />
      <span className="sr-only">読み込み中…</span>
    </div>
  );
}`,
  },
  related: ["skeleton", "progress-bar", "toast", "empty-state"],
  views: 46800,
  favorites: 1870,
  collections: ["saas-ui", "mobile-ui", "ai-ui"],
  gradient: "from-sky-500/15 via-cyan-500/10 to-blue-500/15",
  difficulty: 1,
  updatedAt: "2026-07-02",
};
