import type { UIItem } from "@/types/ui";

export const segmentedControl: UIItem = {
  slug: "segmented-control",
  name: "Segmented Control",
  nameJa: "セグメンテッドコントロール",
  description:
    "少数の選択肢から1つを選ぶボタン群UI。iOS発祥で表示切り替えやフィルタに使われる。",
  category: "tabs",
  tags: ["切り替え", "選択", "iOS", "フィルタ"],
  aliases: [
    "くっついたボタンで切り替えるやつ",
    "月払い年払いを切り替えるスイッチ",
    "iPhoneの設定にある選択ボタン",
    "枠の中で選択が滑らかに動くやつ",
    "表示モードの切り替えボタン",
    "2択3択のトグルボタン",
  ],
  whatIs: [
    "セグメンテッドコントロール（Segmented Control）は、互いに排他的な少数の選択肢を、区切られた（segmented）1つの枠に収めて提示し、常に1つだけを選択させるUIコンポーネントです。名前は「区分（segment）されたコントロール」という意味で、AppleがmacOS/iOSのHuman Interface Guidelinesで定義した呼び名がそのまま業界標準になりました。",
    "iOS 7以降のフラットな枠線スタイル、iOS 13以降の「選択中のセグメントが白いピルとして滑らかにスライドする」スタイルは、多くのWebサービスやAndroidアプリにも模倣され、料金表の月払い/年払い切り替えや、地図/リスト表示の切り替えなど、プラットフォームを問わず見かけるパターンになっています。Android（Material Design 3）では同等のものをSegmented Buttonと呼びます。",
    "タブと似ていますが役割は異なります。タブが「コンテンツの領域を切り替えるナビゲーション」なのに対し、セグメンテッドコントロールは「同じデータの表示方法や条件を切り替えるコントロール」です。実装上はラジオボタンのグループを視覚的にボタン化したものと考えると、アクセシビリティの設計がしやすくなります。",
  ],
  features: [
    "2〜5個程度の選択肢を1つの枠内に等幅で並べる",
    "常にいずれか1つが選択されている排他的選択（ラジオボタン相当）",
    "選択中のセグメントがピル状のハイライトで示され、切り替え時にスライドする",
    "タップ・クリックだけでなく矢印キーでの選択移動に対応する",
    "アイコンのみ・テキストのみ・併用の3スタイルがある",
    "選択の変更が即座に画面へ反映される（適用ボタンを挟まない）",
  ],
  merits: [
    "全選択肢が常に見えているため、ドロップダウンより選択状態と選択肢が一目瞭然",
    "1タップで切り替えられ、表示モードの変更が高速に行える",
    "スライドアニメーションによって状態変化が直感的に伝わる",
    "省スペースで、ツールバーやカードのヘッダーにも収まりやすい",
    "iOSユーザーには馴染み深く、学習コストがほぼゼロ",
  ],
  demerits: [
    "選択肢が多い（6個以上）と各セグメントが狭くなり破綻する",
    "長いラベルや多言語対応で文字幅が変わるとレイアウトが崩れやすい",
    "タブとの役割の違いが理解されないまま乱用されると情報設計が混乱する",
    "モバイルの狭い幅では3個程度が限界で、ラベルの省略が起きやすい",
  ],
  bestPractices: [
    "選択肢は2〜5個に抑える。それ以上はドロップダウンやタブを検討する",
    "ラベルは1〜2語の短い名詞にし、全セグメントで文字量を揃える",
    "デフォルトの選択状態を必ず設定する（未選択状態を作らない）",
    "コンテンツ領域の切り替えにはタブ、同一データの表示切り替えにはセグメンテッドコントロールと使い分ける",
    "スライドアニメーションは150〜200ms程度にし、prefers-reduced-motionを尊重する",
    "選択中セグメントは色だけでなく背景・影・太字などで複数の視覚差を付ける",
  ],
  useCases: [
    "iOSの設定アプリ — 外観モード（ライト/ダーク/自動）の切り替え",
    "Apple純正マップ — 地図/交通機関/航空写真の表示切り替え",
    "SaaSの料金ページ — 月払い/年払いの請求サイクル切り替え",
    "カレンダーアプリ — 日/週/月のビュー切り替え",
    "ECサイトの一覧画面 — グリッド表示/リスト表示の切り替え",
  ],
  accessibility: [
    "実装はrole=\"radiogroup\"＋role=\"radio\"（またはネイティブのinput type=\"radio\"）が最も堅牢",
    "グループにはaria-labelで「表示モードの切り替え」など目的を明示する",
    "選択状態はaria-checked（tablist実装ならaria-selected）で伝える",
    "矢印キーで選択を移動できるようにし、Tabキーではグループ単位で移動させる",
    "アイコンのみのセグメントには必ずaria-labelでテキストの代替を付ける",
    "選択中と非選択のコントラスト差を確保し、色以外の手掛かりも用意する",
  ],
  figma: [
    "コンテナ（背景gray-100、角丸999、padding 4）に各セグメントをAuto Layoutで並べる",
    "セグメントをComponent化し、Variantsで「selected / unselected」を定義する",
    "選択中ピルの移動はVariant間のSmart Animate（Ease Out, 200ms）で再現できる",
    "セグメント幅は「Fill container」にして等幅を保つ（文字量が違っても揃う）",
    "2個/3個/4個のセグメント数違いをVariantプロパティで持たせると使い回しやすい",
  ],
  code: {
    html: `<!-- ネイティブのradioを使った実装（JSなしで動作） -->
<fieldset class="segmented" role="radiogroup">
  <legend class="visually-hidden">表示期間の切り替え</legend>

  <input type="radio" name="period" id="p-week" value="week" checked />
  <label for="p-week">週</label>

  <input type="radio" name="period" id="p-month" value="month" />
  <label for="p-month">月</label>

  <input type="radio" name="period" id="p-year" value="year" />
  <label for="p-year">年</label>
</fieldset>

<style>
  .segmented {
    display: inline-flex;
    padding: 4px;
    border: none;
    border-radius: 999px;
    background: #f3f4f6;
    gap: 2px;
  }
  .segmented input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .segmented label {
    padding: 8px 20px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .segmented input:checked + label {
    background: #fff;
    color: #111827;
    font-weight: 600;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .segmented input:focus-visible + label {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
</style>`,
    tailwind: `<fieldset
  role="radiogroup"
  class="inline-flex gap-0.5 rounded-full bg-gray-100 p-1"
>
  <legend class="sr-only">表示期間の切り替え</legend>

  <input type="radio" name="period" id="p-week" value="week"
         class="peer/week sr-only" checked />
  <label for="p-week"
         class="cursor-pointer rounded-full px-5 py-2 text-sm font-medium
                text-gray-500 transition
                peer-checked/week:bg-white peer-checked/week:font-semibold
                peer-checked/week:text-gray-900 peer-checked/week:shadow
                peer-focus-visible/week:outline peer-focus-visible/week:outline-2
                peer-focus-visible/week:outline-indigo-500">
    週
  </label>

  <input type="radio" name="period" id="p-month" value="month"
         class="peer/month sr-only" />
  <label for="p-month"
         class="cursor-pointer rounded-full px-5 py-2 text-sm font-medium
                text-gray-500 transition
                peer-checked/month:bg-white peer-checked/month:font-semibold
                peer-checked/month:text-gray-900 peer-checked/month:shadow
                peer-focus-visible/month:outline peer-focus-visible/month:outline-2
                peer-focus-visible/month:outline-indigo-500">
    月
  </label>

  <input type="radio" name="period" id="p-year" value="year"
         class="peer/year sr-only" />
  <label for="p-year"
         class="cursor-pointer rounded-full px-5 py-2 text-sm font-medium
                text-gray-500 transition
                peer-checked/year:bg-white peer-checked/year:font-semibold
                peer-checked/year:text-gray-900 peer-checked/year:shadow
                peer-focus-visible/year:outline peer-focus-visible/year:outline-2
                peer-focus-visible/year:outline-indigo-500">
    年
  </label>
</fieldset>`,
    react: `"use client";

import { useId, useRef, useState } from "react";

type Segment = { value: string; label: string };

type SegmentedControlProps = {
  segments: Segment[];
  value: string;
  onChange: (value: string) => void;
  label: string;
};

export function SegmentedControl({
  segments,
  value,
  onChange,
  label,
}: SegmentedControlProps) {
  const groupId = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedIndex = segments.findIndex((s) => s.value === value);

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next = selectedIndex;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = (selectedIndex + 1) % segments.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = (selectedIndex - 1 + segments.length) % segments.length;
    } else {
      return;
    }
    e.preventDefault();
    onChange(segments[next].value);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      onKeyDown={onKeyDown}
      className="relative inline-flex rounded-full bg-gray-100 p-1"
    >
      {/* スライドするハイライトピル */}
      <span
        aria-hidden
        className="absolute inset-y-1 rounded-full bg-white shadow
                   transition-[left] duration-200 ease-out
                   motion-reduce:transition-none"
        style={{
          width: \`calc((100% - 8px) / \${segments.length})\`,
          left: \`calc(4px + (100% - 8px) / \${segments.length} * \${selectedIndex})\`,
        }}
      />
      {segments.map((segment, i) => {
        const selected = segment.value === value;
        return (
          <button
            key={segment.value}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            id={\`\${groupId}-\${segment.value}\`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(segment.value)}
            className={\`relative z-10 flex-1 rounded-full px-5 py-2 text-sm
                        transition-colors \${
                          selected
                            ? "font-semibold text-gray-900"
                            : "font-medium text-gray-500 hover:text-gray-700"
                        }\`}
          >
            {segment.label}
          </button>
        );
      })}
    </div>
  );
}

// 使用例
export function Example() {
  const [period, setPeriod] = useState("week");

  return (
    <SegmentedControl
      label="表示期間の切り替え"
      segments={[
        { value: "week", label: "週" },
        { value: "month", label: "月" },
        { value: "year", label: "年" },
      ]}
      value={period}
      onChange={setPeriod}
    />
  );
}`,
    shadcn: `// shadcn/uiに専用コンポーネントはないため、Tabsを流用するのが定番
// npx shadcn@latest add tabs
"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PeriodSegmentedControl() {
  const [period, setPeriod] = useState("week");

  return (
    <Tabs value={period} onValueChange={setPeriod}>
      <TabsList
        aria-label="表示期間の切り替え"
        className="rounded-full p-1"
      >
        <TabsTrigger value="week" className="rounded-full px-5">
          週
        </TabsTrigger>
        <TabsTrigger value="month" className="rounded-full px-5">
          月
        </TabsTrigger>
        <TabsTrigger value="year" className="rounded-full px-5">
          年
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

// 注意：コンテンツ領域の切り替えを伴わない「表示モード切り替え」用途では、
// role="radiogroup" ベースの自作実装の方がセマンティクスとして正確です。`,
  },
  related: ["tabs", "dropdown-menu", "pricing-table", "stepper", "bottom-sheet"],
  views: 14900,
  favorites: 560,
  collections: ["apple-ui", "mobile-ui"],
  gradient: "from-teal-500/15 via-emerald-500/10 to-green-500/15",
  difficulty: 2,
  updatedAt: "2026-05-14",
};
