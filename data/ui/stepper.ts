import type { UIItem } from "@/types/ui";

export const stepper: UIItem = {
  slug: "stepper",
  name: "Stepper",
  nameJa: "ステッパー",
  description:
    "複数ステップの進行状況と現在地を示すUI。購入フローや登録フォームの道案内役。",
  category: "onboarding",
  tags: ["ステップ", "フォーム", "進捗", "ウィザード"],
  aliases: [
    "手続きの進み具合が丸と線で表示されるやつ",
    "ステップ1・2・3って出る画面上の表示",
    "入力フォームの上にある進行状況バー",
    "何段階あるか分かる番号付きのナビゲーション",
    "購入手続きの「カート→住所→支払い→確認」の表示",
    "ウィザード形式の進捗表示",
  ],
  whatIs: [
    "ステッパー（Stepper）は、複数の段階（ステップ）からなるプロセスにおいて、全体の工程数・現在の位置・完了状況を可視化するUIコンポーネントです。名前は英語のstep（段階）に由来し、「段階を踏んで進むためのもの」という意味で名付けられました。番号付きの円をラインでつないだ形が典型で、「プログレストラッカー」「ウィザードナビゲーション」とも呼ばれます。",
    "ECの購入フロー（カート→配送先→支払い→確認）、会員登録、初期設定ウィザードなど、一度に見せると長すぎるフォームを分割する場面で使われます。ユーザーは「あと何ステップで終わるか」を把握でき、途中離脱の不安が軽減されます。",
    "水平型と垂直型があり、完了済みステップにはチェックマーク、現在ステップには強調表示を用いるのが定番です。なお、モバイルOSのデザインガイドラインでは数値の増減コントロール（＋/−ボタン）も「Stepper」と呼ばれるため、文脈によって指すものが異なる点には注意が必要です。",
  ],
  features: [
    "番号付きの円（またはアイコン）を接続線でつなぎ、工程の全体像を示す",
    "各ステップは「完了」「現在」「未到達」の3状態を視覚的に区別する",
    "完了ステップはチェックマークに変わり、達成感を演出する",
    "横並びの水平型と、モバイルや詳細表示に適した垂直型がある",
    "完了済みステップをクリックして戻れるインタラクティブ型と、表示のみの型がある",
    "各ステップにラベルと補足テキスト（任意）を付けられる",
  ],
  merits: [
    "プロセス全体の長さと現在地が見え、「あとどれくらいか」の不安を解消できる",
    "長いフォームを分割することで1画面あたりの認知負荷が下がり、完了率が上がりやすい",
    "完了チェックの積み重ねが進捗感・達成感を生み、途中離脱を抑制する",
    "ステップ単位でバリデーションでき、エラー修正の範囲が小さく済む",
    "手続きの構造が事前に分かるため、必要書類の準備など先回りの行動を促せる",
  ],
  demerits: [
    "ステップ数が多い（6以上）と横幅に収まらず、かえって圧迫感を与える",
    "モバイルの狭い画面ではラベル付き水平型のレイアウトが破綻しやすい",
    "分割により全体の入力内容を俯瞰しづらく、修正時の行き来が発生する",
    "ステップ間の依存関係（分岐や条件スキップ）があると状態管理が複雑になる",
    "1〜2分で終わる短いフォームでは分割自体がオーバーヘッドになる",
  ],
  bestPractices: [
    "ステップ数は3〜5個に収める。多い場合は工程の統合やグルーピングを検討する",
    "ラベルは「配送先」「お支払い」など名詞で短く統一し、動詞の長文を避ける",
    "完了済みステップはクリックで戻れるようにし、入力済みデータは保持する",
    "現在ステップは色・サイズ・太字で明確に強調し、aria-current=\"step\"を付与する",
    "モバイルでは「ステップ2/4: 配送先」のようなテキスト表記か垂直型に切り替える",
    "戻る操作やブラウザバックでデータが消えないよう、ステップ状態を保存する",
  ],
  useCases: [
    "Amazonの購入手続き — カートから注文確定までの工程表示",
    "楽天市場の会員登録 — 入力→確認→完了の3ステップ表示",
    "Stripe Onboarding — アカウント開設に必要な手続きを垂直ステッパーで案内",
    "確定申告のe-Tax — 長い手続きを段階に分けて進行状況を提示",
    "SaaSの初期設定ウィザード — ワークスペース作成からメンバー招待までの誘導",
  ],
  accessibility: [
    "全体を <ol> でマークアップし、ステップの順序性をセマンティックに伝える",
    "現在のステップに aria-current=\"step\" を付与する",
    "完了状態は色だけでなくチェックアイコンとテキスト（sr-onlyの「完了」）でも伝える",
    "クリック可能なステップは <button> か <a> にし、キーボードで操作できるようにする",
    "ステップ切り替え時は新しいステップの見出しにフォーカスを移し、文脈の変化を伝える",
    "接続線などの装飾要素には aria-hidden=\"true\" を付ける",
  ],
  figma: [
    "1ステップ（円＋ラベル）をコンポーネント化し、state: completed / current / upcoming のVariantsを作る",
    "水平のAuto Layoutでステップを並べ、接続線はステップ側に含めると個数の増減が楽になる",
    "接続線はFillコンテナで伸縮させ、画面幅が変わっても等間隔を保つようにする",
    "完了状態のチェックアイコンはVariant切り替えで表示し、Smart Animateで遷移を確認する",
    "モバイル用に垂直型とテキスト型（ステップ2/4）のVariantも用意しておく",
  ],
  code: {
    html: `<ol class="stepper">
  <li class="step completed">
    <span class="circle" aria-hidden="true">✓</span>
    <span class="label">カート<span class="sr-only">（完了）</span></span>
  </li>
  <li class="step current" aria-current="step">
    <span class="circle" aria-hidden="true">2</span>
    <span class="label">配送先</span>
  </li>
  <li class="step">
    <span class="circle" aria-hidden="true">3</span>
    <span class="label">お支払い</span>
  </li>
  <li class="step">
    <span class="circle" aria-hidden="true">4</span>
    <span class="label">確認</span>
  </li>
</ol>

<style>
  .stepper {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;
    font-size: 13px;
    color: #6b7280;
  }
  /* 接続線 */
  .step + .step::before {
    content: "";
    position: absolute;
    top: 16px;
    right: 50%;
    width: 100%;
    height: 2px;
    background: #e5e7eb;
    z-index: -1;
  }
  .step.completed + .step::before { background: #059669; }
  .circle {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #d1d5db;
    font-weight: 600;
  }
  .completed .circle { background: #059669; border-color: #059669; color: #fff; }
  .current .circle { border-color: #059669; color: #059669; }
  .current { color: #111827; font-weight: 600; }
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
  }
</style>`,
    tailwind: `<ol class="flex">
  <!-- 完了 -->
  <li class="relative flex flex-1 flex-col items-center gap-2">
    <span aria-hidden="true"
          class="z-10 grid size-8 place-items-center rounded-full
                 bg-emerald-600 text-sm font-semibold text-white">
      <svg class="size-4" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
      </svg>
    </span>
    <span class="text-xs text-gray-500">
      カート<span class="sr-only">（完了）</span>
    </span>
  </li>
  <!-- 現在 -->
  <li aria-current="step"
      class="relative flex flex-1 flex-col items-center gap-2
             before:absolute before:right-1/2 before:top-4 before:h-0.5
             before:w-full before:bg-emerald-600">
    <span aria-hidden="true"
          class="z-10 grid size-8 place-items-center rounded-full border-2
                 border-emerald-600 bg-white text-sm font-semibold
                 text-emerald-600">2</span>
    <span class="text-xs font-semibold text-gray-900">配送先</span>
  </li>
  <!-- 未到達 -->
  <li class="relative flex flex-1 flex-col items-center gap-2
             before:absolute before:right-1/2 before:top-4 before:h-0.5
             before:w-full before:bg-gray-200">
    <span aria-hidden="true"
          class="z-10 grid size-8 place-items-center rounded-full border-2
                 border-gray-300 bg-white text-sm font-semibold
                 text-gray-400">3</span>
    <span class="text-xs text-gray-500">お支払い</span>
  </li>
  <li class="relative flex flex-1 flex-col items-center gap-2
             before:absolute before:right-1/2 before:top-4 before:h-0.5
             before:w-full before:bg-gray-200">
    <span aria-hidden="true"
          class="z-10 grid size-8 place-items-center rounded-full border-2
                 border-gray-300 bg-white text-sm font-semibold
                 text-gray-400">4</span>
    <span class="text-xs text-gray-500">確認</span>
  </li>
</ol>`,
    react: `"use client";

import { Check } from "lucide-react";

type Props = {
  steps: string[];
  /** 0始まりの現在ステップ */
  current: number;
  /** 完了済みステップへ戻る操作を許可する場合に渡す */
  onStepClick?: (index: number) => void;
};

export function Stepper({ steps, current, onStepClick }: Props) {
  return (
    <ol className="flex">
      {steps.map((label, i) => {
        const isCompleted = i < current;
        const isCurrent = i === current;
        const clickable = isCompleted && onStepClick;

        const circle = (
          <span
            aria-hidden="true"
            className={\`z-10 grid size-8 place-items-center rounded-full
                        text-sm font-semibold \${
                          isCompleted
                            ? "bg-emerald-600 text-white"
                            : isCurrent
                              ? "border-2 border-emerald-600 bg-white text-emerald-600"
                              : "border-2 border-gray-300 bg-white text-gray-400"
                        }\`}
          >
            {isCompleted ? <Check className="size-4" /> : i + 1}
          </span>
        );

        return (
          <li
            key={label}
            aria-current={isCurrent ? "step" : undefined}
            className={\`relative flex flex-1 flex-col items-center gap-2 \${
              i > 0
                ? \`before:absolute before:right-1/2 before:top-4 before:h-0.5
                   before:w-full \${
                     i <= current ? "before:bg-emerald-600" : "before:bg-gray-200"
                   }\`
                : ""
            }\`}
          >
            {clickable ? (
              <button
                type="button"
                onClick={() => onStepClick(i)}
                className="z-10 rounded-full focus-visible:outline-2
                           focus-visible:outline-offset-2"
              >
                {circle}
                <span className="sr-only">{label}に戻る</span>
              </button>
            ) : (
              circle
            )}
            <span
              className={\`text-xs \${
                isCurrent ? "font-semibold text-gray-900" : "text-gray-500"
              }\`}
            >
              {label}
              {isCompleted && <span className="sr-only">（完了）</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

// 使用例
// <Stepper
//   steps={["カート", "配送先", "お支払い", "確認"]}
//   current={1}
//   onStepClick={(i) => goToStep(i)}
// />`,
    shadcn: `// shadcn/uiに公式のStepperはないため、既存コンポーネントを組み合わせて実装する
// npx shadcn@latest add button separator
"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPS = ["カート", "配送先", "お支払い", "確認"];

export function CheckoutStepper() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="w-full max-w-2xl">
      <ol className="mb-8 flex">
        {STEPS.map((label, i) => (
          <li
            key={label}
            aria-current={i === current ? "step" : undefined}
            className={cn(
              "relative flex flex-1 flex-col items-center gap-2",
              i > 0 &&
                "before:absolute before:right-1/2 before:top-4 before:h-0.5 before:w-full",
              i > 0 && (i <= current ? "before:bg-primary" : "before:bg-border")
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "z-10 grid size-8 place-items-center rounded-full text-sm font-semibold",
                i < current && "bg-primary text-primary-foreground",
                i === current && "border-2 border-primary bg-background text-primary",
                i > current && "border-2 border-border bg-background text-muted-foreground"
              )}
            >
              {i < current ? <Check className="size-4" /> : i + 1}
            </span>
            <span
              className={cn(
                "text-xs",
                i === current ? "font-semibold" : "text-muted-foreground"
              )}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>
      <div className="flex justify-between">
        <Button
          variant="outline"
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
        >
          戻る
        </Button>
        <Button
          disabled={current === STEPS.length - 1}
          onClick={() => setCurrent((c) => c + 1)}
        >
          次へ進む
        </Button>
      </div>
    </div>
  );
}`,
  },
  related: ["progress-bar", "timeline", "modal", "tabs", "segmented-control"],
  views: 16700,
  favorites: 590,
  collections: ["ec-ui", "saas-ui"],
  gradient: "from-teal-500/15 via-emerald-500/10 to-green-500/15",
  difficulty: 2,
  updatedAt: "2026-07-03",
};
