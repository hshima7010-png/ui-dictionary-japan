import type { UIItem } from "@/types/ui";

export const progressBar: UIItem = {
  slug: "progress-bar",
  name: "Progress Bar",
  nameJa: "プログレスバー",
  description:
    "処理や達成度の進捗を横棒で可視化するUI。待ち時間の不安を減らし完了を後押しする。",
  category: "progress",
  tags: ["進捗", "ローディング", "達成率", "フィードバック"],
  aliases: [
    "進み具合を表す横棒",
    "ダウンロードの残りが分かるバー",
    "何パーセント終わったか見えるやつ",
    "アップロード中に伸びていく棒",
    "プロフィール入力の達成度メーター",
    "読み込み中のゲージ",
  ],
  whatIs: [
    "プログレスバー（Progress Bar）は、処理の進行状況やタスクの達成度を横棒の伸びで可視化するUIコンポーネントです。「progress（進捗）」を示す「bar（棒）」というそのままの命名で、GUI以前のCUI時代からインストーラーやファイルコピーの画面で使われてきた、最も歴史の長いフィードバックUIの一つです。",
    "プログレスバーには2つのタイプがあります。進捗率が分かる処理に使う「確定的（determinate）」タイプは0〜100%の実際の進行を示し、所要時間が読めない処理に使う「不確定的（indeterminate）」タイプはアニメーションで「動作中」であることだけを伝えます。後者が長引く場合はスケルトンスクリーンやスピナーとの使い分けが検討されます。",
    "近年はローディング以外の用途が広がっており、プロフィール入力の完了率、学習コースの受講進捗、送料無料までの残り金額など、「ゴールまでの距離」を見せてユーザーの行動を後押しするモチベーション設計の道具としても活躍しています。",
  ],
  features: [
    "0〜100%の進捗を横棒の塗りつぶし幅で表現する",
    "進捗率が不明な処理向けの不確定的（indeterminate）アニメーション表示がある",
    "パーセンテージや「残り2分」などのテキストラベルを併記できる",
    "円形にしたサーキュラープログレス（リング型）のバリエーションがある",
    "ステップ形式（1/4完了など）のセグメント分割表示にも応用できる",
    "達成度に応じて色を変化させる（赤→黄→緑）演出も可能",
  ],
  merits: [
    "「あとどれくらいか」が見えることで、待ち時間の体感が短くなり不安が減る",
    "処理が進んでいることが分かるため、ユーザーの離脱や二重操作を防げる",
    "達成度の可視化はゴール達成へのモチベーションを高める（目標勾配効果）",
    "フォームやオンボーディングでは全体量が見えることで完遂率が上がる",
    "実装が軽く、HTML標準のprogress要素も用意されている",
  ],
  demerits: [
    "進捗が不正確だと（90%で長時間停止など）かえって不信感を生む",
    "不確定タイプが長時間続くと、フリーズとの区別がつかず不安にさせる",
    "細すぎるバーや低コントラストの配色は進捗が読み取りにくい",
    "数秒で終わる処理に付けると、一瞬で消えてかえってチラつきになる",
  ],
  bestPractices: [
    "進捗率が計算できる処理は必ず確定的タイプを使い、不確定タイプは最後の手段にする",
    "バーは常に前進させる。進捗が戻る・止まる見せ方は不安を生むため避ける",
    "パーセンテージや残り時間のテキストを併記し、視覚以外でも進捗を伝える",
    "1秒未満で終わる処理には表示しない。長い処理はスケルトンとの併用を検討する",
    "90%付近で止めない。実進捗と表示を滑らかに補間するイージングを入れる",
    "達成度用途では「あと¥1,200で送料無料」のように次の行動につながる文言を添える",
  ],
  useCases: [
    "YouTube・GitHubのページ遷移 — 画面上部の細いローディングバー",
    "Duolingoのレッスン画面 — 問題の進捗バーで残り量を常時表示",
    "ECサイトのカート — 「あと¥1,200で送料無料」の達成度バー",
    "LinkedInのプロフィール — 入力完了率バーで項目の充実を促進",
    "ファイルアップローダー — ファイルごとの転送進捗と全体進捗の表示",
  ],
  accessibility: [
    "role=\"progressbar\"とaria-valuenow / aria-valuemin / aria-valuemaxで進捗値を伝える",
    "aria-labelまたはaria-labelledbyで「何の進捗か」を明示する",
    "不確定タイプではaria-valuenowを省略し、動作中であることをテキストでも伝える",
    "進捗の節目（完了など）はaria-liveリージョンで通知する",
    "色のコントラストを確保し、色変化だけに意味を持たせない",
    "HTML標準のprogress要素を使うと、これらの多くが自動で担保される",
  ],
  figma: [
    "トラック（背景の棒）とフィル（塗り部分）の2層をAuto Layoutで重ねて作る",
    "フィルの幅をComponent Propertyではなく複数Variant（0/25/50/75/100%）で管理すると切り替えやすい",
    "角丸はトラックとフィルの両方に同じ値（高さの半分）を設定して端の欠けを防ぐ",
    "不確定タイプはSmart Animateのループ用に2フレームを用意してプロトタイプで再現する",
    "ラベル併記版・リング型などの派生をVariantsでまとめておくと運用しやすい",
  ],
  code: {
    html: `<!-- HTML標準のprogress要素（アクセシビリティ対応が自動） -->
<label for="upload">アップロード中…</label>
<progress id="upload" max="100" value="70">70%</progress>

<!-- カスタムデザイン版 -->
<div class="progress-wrapper">
  <div class="progress-label">
    <span>プロフィール入力</span>
    <span>70%</span>
  </div>
  <div
    class="progress-track"
    role="progressbar"
    aria-valuenow="70"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="プロフィール入力の完了率"
  >
    <div class="progress-fill" style="width: 70%"></div>
  </div>
</div>

<style>
  progress {
    width: 100%;
    height: 8px;
    accent-color: #4f46e5;
  }
  .progress-wrapper {
    max-width: 400px;
  }
  .progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 8px;
    color: #374151;
  }
  .progress-track {
    height: 8px;
    background: #e5e7eb;
    border-radius: 999px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: #4f46e5;
    border-radius: 999px;
    transition: width 0.4s ease;
  }
</style>`,
    tailwind: `<!-- ラベル付きプログレスバー -->
<div class="max-w-md">
  <div class="mb-2 flex justify-between text-sm text-gray-700">
    <span id="progress-label">プロフィール入力</span>
    <span>70%</span>
  </div>
  <div
    class="h-2 overflow-hidden rounded-full bg-gray-200"
    role="progressbar"
    aria-labelledby="progress-label"
    aria-valuenow="70"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="h-full rounded-full bg-indigo-600 transition-all duration-500"
      style="width: 70%"
    ></div>
  </div>
</div>

<!-- 不確定（indeterminate）タイプ -->
<div
  class="relative h-1.5 max-w-md overflow-hidden rounded-full bg-gray-200"
  role="progressbar"
  aria-label="読み込み中"
>
  <div
    class="absolute inset-y-0 w-1/3 animate-[indeterminate_1.2s_infinite]
           rounded-full bg-indigo-600"
  ></div>
</div>

<!-- tailwind.config.js に追加するキーフレーム
  keyframes: {
    indeterminate: {
      "0%":   { left: "-33%" },
      "100%": { left: "100%" },
    },
  },
-->`,
    react: `"use client";

import { useEffect, useState } from "react";

type ProgressBarProps = {
  /** 0〜100。undefinedなら不確定（indeterminate）表示 */
  value?: number;
  label: string;
  showPercent?: boolean;
};

export function ProgressBar({
  value,
  label,
  showPercent = true,
}: ProgressBarProps) {
  const isDeterminate = value !== undefined;
  const clamped = isDeterminate ? Math.min(100, Math.max(0, value)) : 0;

  return (
    <div className="w-full max-w-md">
      <div className="mb-2 flex justify-between text-sm text-gray-700">
        <span>{label}</span>
        {isDeterminate && showPercent && (
          <span aria-hidden>{Math.round(clamped)}%</span>
        )}
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={isDeterminate ? Math.round(clamped) : undefined}
        aria-valuetext={
          isDeterminate ? \`\${Math.round(clamped)}%完了\` : "処理中"
        }
        className="relative h-2 overflow-hidden rounded-full bg-gray-200"
      >
        {isDeterminate ? (
          <div
            className="h-full rounded-full bg-indigo-600
                       transition-[width] duration-500 ease-out"
            style={{ width: \`\${clamped}%\` }}
          />
        ) : (
          <div
            className="absolute inset-y-0 w-1/3 rounded-full bg-indigo-600
                       motion-safe:animate-indeterminate"
          />
        )}
      </div>
    </div>
  );
}

// 使用例：アップロード進捗のシミュレーション
export function UploadDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 5));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <ProgressBar value={progress} label="ファイルをアップロード中" />
      <ProgressBar label="サーバーに接続中" />
      <p aria-live="polite" className="sr-only">
        {progress >= 100 ? "アップロードが完了しました" : ""}
      </p>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add progress
"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function OnboardingProgress() {
  const [value, setValue] = useState(13);

  useEffect(() => {
    // デモ：読み込み完了に合わせて進捗を更新
    const timer = setTimeout(() => setValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md">
      <div className="mb-2 flex justify-between text-sm">
        <span>初期設定の進捗</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} aria-label="初期設定の進捗" />
    </div>
  );
}`,
  },
  related: ["skeleton", "stepper", "toast", "empty-state", "modal"],
  views: 17400,
  favorites: 640,
  collections: ["ai-ui", "mobile-ui"],
  gradient: "from-cyan-500/15 via-sky-500/10 to-blue-500/15",
  difficulty: 2,
  updatedAt: "2026-06-08",
};
