import type { UIItem } from "@/types/ui";

export const slider: UIItem = {
  slug: "slider",
  name: "Slider",
  nameJa: "スライダー",
  description:
    "つまみを左右にドラッグして数値や範囲を直感的に指定する入力UI。音量や価格帯の指定に。",
  category: "inputs",
  tags: ["数値入力", "範囲指定", "ドラッグ", "input"],
  aliases: [
    "つまみを左右に動かして値を決めるやつ",
    "音量を調整するあのバー",
    "ドラッグで数字を変えるUI",
    "価格帯を指定する横棒",
    "レンジバー",
    "グリグリ動かして選ぶ横のバー",
  ],
  whatIs: [
    "スライダー（Slider）は、水平（または垂直）のトラック上でつまみ（サム／ハンドル）をドラッグし、連続的または段階的な数値を指定する入力UIです。名前は英語の slide（滑る）に由来し、オーディオミキサーの「スライド式フェーダー」など物理機器の操作子をそのまま画面上に再現したものです。HTMLでは <input type=\"range\"> として標準化されています。",
    "音量・明るさ・再生位置のような「厳密な数値よりも感覚的な加減が重要」な値の調整に最適です。つまみが1つの単一値スライダーのほか、つまみを2つ持ち「1万円〜3万円」のような範囲を指定するレンジスライダーもあり、ECサイトの価格フィルターで広く使われています。",
    "一方で、細かい値をピンポイントで指定するのは苦手です。生年月日や個数のような正確さが求められる入力には数値フィールドやステッパーの方が適しており、「おおよその量の調整はスライダー、正確な値の入力はテキスト」という役割分担が定石です。",
  ],
  features: [
    "つまみのドラッグとトラックのクリックで値を変更できる",
    "min / max / step によって範囲と刻み幅を制御できる",
    "つまみが2つの範囲指定型（レンジスライダー）を構成できる",
    "矢印キーで1ステップ、PageUp/Downで大きなステップの調整ができる",
    "現在値のツールチップ表示や目盛り（tick）表示を組み合わせられる",
    "モバイルでは指でのドラッグ操作に自然に対応する",
  ],
  merits: [
    "値の全範囲と現在位置が視覚的にひと目で分かる",
    "キーボード入力なしで操作でき、モバイルでの操作が快適",
    "無効な値をそもそも入力できないため、バリデーションが不要",
    "「だいたいこのくらい」という曖昧な量の指定が最速で行える",
    "変更のプレビュー（音量・明るさなど）と組み合わせると効果を即時体感できる",
  ],
  demerits: [
    "ピンポイントの値（例: 37,500円ちょうど）を指定するのが難しい",
    "トラックの物理幅以上の精度は出せず、範囲が広いと1pxが大きな値差になる",
    "つまみが小さいとタップターゲット不足でモバイル操作性が悪化する",
    "ドラッグ操作は縦スクロールと競合しやすく、ページ操作の誤爆が起きる",
    "視覚に依存したUIのため、スクリーンリーダー利用者には現在値の読み上げ対応が必須",
  ],
  bestPractices: [
    "現在値を必ず数値でも表示する。つまみの位置だけで値を伝えない",
    "正確な値の入力が必要な場面では、数値入力フィールドを併設して双方向に同期させる",
    "つまみは最低44×44pxのタップ領域を確保する（見た目より当たり判定を大きく）",
    "step は用途に合わせて設定する（価格帯なら1,000円刻みなど、細かすぎる刻みを避ける）",
    "レンジスライダーでは最小つまみと最大つまみの交差を防ぎ、最小幅を設ける",
    "値の分布に偏りがある場合（家賃など）は対数スケールや不均等ステップを検討する",
  ],
  useCases: [
    "YouTube / Spotify — 再生位置のシークバーと音量調整",
    "iOSの設定画面 — 画面の明るさ・文字サイズの調整",
    "SUUMOなど不動産サイト — 家賃の下限・上限のレンジ指定",
    "Photoshop / Figma — 不透明度やぼかし量などパラメータ調整",
    "Airbnb — 検索フィルターの価格帯レンジスライダー",
  ],
  accessibility: [
    "カスタム実装では role=\"slider\" と aria-valuemin / aria-valuemax / aria-valuenow を必ず設定する",
    "「50」だけでは意味が伝わらない値は aria-valuetext（例:「5万円」）で人間向けの表現にする",
    "矢印キー・Home / End・PageUp / PageDown でのキーボード操作を実装する",
    "レンジスライダーでは各つまみに aria-label（「最低価格」「最高価格」）を付けて区別する",
    "ネイティブ <input type=\"range\"> を使えばキーボード操作と読み上げが標準で担保される",
    "フォーカスリングを明確に表示し、どちらのつまみが操作対象か視覚でも分かるようにする",
  ],
  figma: [
    "トラック・塗り（fill）・つまみの3レイヤー構成にし、つまみの位置はAuto Layoutではなく絶対配置で管理する",
    "値のバリエーション（0% / 50% / 100%など）をVariantsで用意すると画面ごとの使い分けが速い",
    "つまみにはhover / focus / drag状態のVariantを作り、サイズや影の変化を定義する",
    "現在値ツールチップはつまみコンポーネントに内包し、boolean Propertyで表示を切り替える",
    "レンジスライダーは左右つまみを個別のComponent Propertyにして、開発者へ構造を伝えやすくする",
  ],
  code: {
    html: `<label for="volume" class="slider-label">
  音量: <output id="volume-value">50</output>
</label>
<input
  type="range"
  id="volume"
  name="volume"
  min="0"
  max="100"
  step="1"
  value="50"
  oninput="document.getElementById('volume-value').textContent = this.value"
/>

<style>
  .slider-label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
  }
  input[type="range"] {
    width: 100%;
    height: 6px;
    appearance: none;
    background: linear-gradient(
      to right,
      #4f46e5 0%,
      #4f46e5 50%,
      #e5e7eb 50%,
      #e5e7eb 100%
    );
    border-radius: 9999px;
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #4f46e5;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
    cursor: grab;
  }
  input[type="range"]:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 4px;
  }
</style>`,
    tailwind: `<div class="w-full max-w-sm">
  <label for="price" class="mb-2 flex justify-between text-sm font-semibold">
    価格上限
    <span class="tabular-nums text-indigo-600">¥30,000</span>
  </label>
  <input
    type="range"
    id="price"
    min="0"
    max="100000"
    step="1000"
    value="30000"
    class="h-1.5 w-full cursor-pointer appearance-none rounded-full
           bg-gray-200 accent-indigo-600
           focus:outline-none focus-visible:ring-2
           focus-visible:ring-indigo-600 focus-visible:ring-offset-2
           [&::-webkit-slider-thumb]:size-5
           [&::-webkit-slider-thumb]:appearance-none
           [&::-webkit-slider-thumb]:rounded-full
           [&::-webkit-slider-thumb]:border-2
           [&::-webkit-slider-thumb]:border-indigo-600
           [&::-webkit-slider-thumb]:bg-white
           [&::-webkit-slider-thumb]:shadow"
  />
  <div class="mt-1 flex justify-between text-xs text-gray-500">
    <span>¥0</span>
    <span>¥100,000</span>
  </div>
</div>`,
    react: `"use client";

import { useId, useState } from "react";

export function PriceSlider({
  min = 0,
  max = 100000,
  step = 1000,
  defaultValue = 30000,
  onChange,
}: {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}) {
  const [value, setValue] = useState(defaultValue);
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor={id}
        className="mb-2 flex justify-between text-sm font-semibold"
      >
        価格上限
        <span className="tabular-nums text-indigo-600">
          ¥{value.toLocaleString()}
        </span>
      </label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={\`\${value.toLocaleString()}円\`}
        onChange={(e) => {
          const next = Number(e.target.value);
          setValue(next);
          onChange?.(next);
        }}
        style={{
          background: \`linear-gradient(to right,
            #4f46e5 \${percent}%, #e5e7eb \${percent}%)\`,
        }}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-indigo-600 focus-visible:ring-offset-2
                   [&::-webkit-slider-thumb]:size-5
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:border-2
                   [&::-webkit-slider-thumb]:border-indigo-600
                   [&::-webkit-slider-thumb]:bg-white
                   [&::-webkit-slider-thumb]:shadow"
      />
      <div className="mt-1 flex justify-between text-xs text-gray-500">
        <span>¥{min.toLocaleString()}</span>
        <span>¥{max.toLocaleString()}</span>
      </div>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add slider label
"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function PriceRangeSlider() {
  const [range, setRange] = useState([10000, 50000]);

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between">
        <Label>価格帯</Label>
        <span className="text-sm tabular-nums text-indigo-600">
          ¥{range[0].toLocaleString()} 〜 ¥{range[1].toLocaleString()}
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={setRange}
        min={0}
        max={100000}
        step={1000}
        minStepsBetweenThumbs={5}
        aria-label="価格帯"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>¥0</span>
        <span>¥100,000</span>
      </div>
    </div>
  );
}`,
  },
  related: ["progress-bar", "filter-panel", "segmented-control", "toggle-switch"],
  views: 18200,
  favorites: 620,
  collections: ["ec-ui", "mobile-ui"],
  gradient: "from-cyan-500/15 via-blue-500/10 to-emerald-500/15",
  difficulty: 2,
  updatedAt: "2026-04-18",
};
