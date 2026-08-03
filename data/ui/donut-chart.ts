import type { UIItem } from "@/types/ui";

export const donutChart: UIItem = {
  slug: "donut-chart",
  name: "Donut Chart",
  nameJa: "ドーナツチャート",
  description:
    "円グラフの中央をくり抜いたチャート。構成比の表示と中央への数値表示を両立できる。",
  category: "charts",
  tags: ["チャート", "円グラフ", "構成比", "ダッシュボード", "データ可視化"],
  aliases: [
    "真ん中に穴が開いた円グラフ",
    "割合を輪っかで見せるグラフ",
    "リング状のグラフ",
    "中央に数字が入っている円グラフ",
    "ダッシュボードでよく見る丸いグラフ",
    "パーセントをドーナツ型で表すやつ",
  ],
  whatIs: [
    "ドーナツチャート（Donut Chart）は、円グラフ（Pie Chart）の中央部分をくり抜いてリング状にしたチャートです。中央に穴が開いた形状がお菓子のドーナツに似ていることからこの名前が付きました。全体を100%としたときの各項目の構成比を、リングの弧の長さで表現します。",
    "円グラフとの最大の違いは、くり抜かれた中央のスペースを情報表示に活用できる点です。合計値・達成率・最重要KPIなどを中央に大きく配置することで、「内訳」と「サマリー数値」を1つのコンポーネントで同時に伝えられます。この特性から、SaaSの管理画面やGoogle Analytics、Stripeダッシュボードのようなアナリティクス系UIで定番となっています。",
    "実装面では、SVGのcircle要素とstroke-dasharrayを使った軽量な自前実装から、Recharts・Chart.js・ECharts等のライブラリ利用まで選択肢が幅広いのも特徴です。項目数が多いと視認性が急激に落ちるため、5項目前後に絞り「その他」に集約するのがデータ可視化の定石とされています。",
  ],
  features: [
    "全体に対する各項目の割合をリングの弧の長さで表現する",
    "中央の空きスペースに合計値やKPIなどのサマリーを表示できる",
    "ホバー／タップでセグメントごとのツールチップを表示できる",
    "凡例（レジェンド）と組み合わせて項目名と色を対応付ける",
    "リングの太さ（thickness）を変えるだけで印象を大きく調整できる",
    "1項目だけ表示すれば進捗リング（プログレスリング）としても使える",
  ],
  merits: [
    "構成比とサマリー数値を1コンポーネントで同時に伝えられ、情報密度が高い",
    "円グラフより中央に視線が集まりやすく、最重要数値を強調できる",
    "正方形に近い領域に収まるため、ダッシュボードのグリッドレイアウトと相性が良い",
    "SVGのstroke-dasharrayだけで実装でき、ライブラリなしでも軽量に作れる",
    "面ではなく弧の長さで割合を読むため、円グラフより角度の誤読がやや起きにくいとされる",
  ],
  demerits: [
    "項目数が6を超えると色の判別が難しくなり、ほぼ読めなくなる",
    "近い割合（例: 24%と27%）の比較は弧の長さでは判別しづらく、棒グラフに劣る",
    "時系列の変化を表現できないため、推移を見たい用途には不向き",
    "色だけで項目を区別する実装は色覚多様性への配慮に欠ける",
    "3D表現や過度な装飾を加えると割合の読み取り精度が大きく低下する",
  ],
  bestPractices: [
    "項目は5個前後までに絞り、少数派は「その他」に集約する",
    "最大の項目を12時の位置から時計回りに配置し、読み始めの基準を作る",
    "中央には合計値や最重要の割合など「ひと目で知りたい数値」を置く",
    "各セグメントに割合ラベルを添えるか、ツールチップで正確な数値を補足する",
    "色は明度差を付けたパレットを使い、色覚多様性シミュレーターで確認する",
    "2〜3項目の割合比較が主目的なら、横棒グラフの方が適切でないか検討する",
  ],
  useCases: [
    "Google Analytics — デバイス別・チャネル別セッションの構成比表示",
    "Stripeダッシュボード — 決済手段別の売上構成比",
    "GitHub — リポジトリの言語構成比（横バー型と併用）",
    "家計簿アプリ（マネーフォワード等）— 支出カテゴリの内訳表示",
    "SaaS管理画面 — ストレージ使用量の内訳と残容量の同時表示",
  ],
  accessibility: [
    "SVGに role=\"img\" と aria-label で「何のチャートか＋要約」を伝える",
    "色だけに頼らず、凡例・ラベル・パターンなど複数の手がかりで項目を区別する",
    "詳細データは視覚的に隠したテーブル（sr-only）や隣接する表でも提供する",
    "ツールチップはホバーだけでなくキーボードフォーカスでも表示させる",
    "隣接セグメントの色はコントラスト比を確保し、境界に白い区切り線を入れる",
  ],
  figma: [
    "Ellipseを描き、Arcツール（Sweep / Ratio）でリングの切り欠きと太さを調整する",
    "セグメントごとにEllipseを複製し、SweepのStart/Endで割合を表現する",
    "中央の数値はAuto Layoutでまとめ、リングの上に重ねてコンポーネント化する",
    "割合をComponent Propertyのテキストで持たせると、Instanceごとに差し替えやすい",
    "ホバー状態のVariantを作り、Smart Animateでセグメント強調のプロトタイプを作る",
  ],
  code: {
    html: `<!-- SVGのstroke-dasharrayで実装するドーナツチャート -->
<figure class="donut" role="img" aria-label="売上構成比: EC 45%、店舗 30%、卸 15%、その他 10%">
  <svg viewBox="0 0 42 42" width="180" height="180">
    <!-- 背景リング -->
    <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#f3f4f6" stroke-width="5" />
    <!-- 各セグメント: stroke-dasharray="割合 残り" / dashoffsetで開始位置を調整 -->
    <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#ec4899"
            stroke-width="5" stroke-dasharray="45 55" stroke-dashoffset="25" />
    <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#a855f7"
            stroke-width="5" stroke-dasharray="30 70" stroke-dashoffset="-20" />
    <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#f97316"
            stroke-width="5" stroke-dasharray="15 85" stroke-dashoffset="-50" />
    <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#d1d5db"
            stroke-width="5" stroke-dasharray="10 90" stroke-dashoffset="-65" />
    <text x="21" y="21" text-anchor="middle" dominant-baseline="central"
          font-size="7" font-weight="bold" fill="#111827">45%</text>
    <text x="21" y="28" text-anchor="middle" font-size="3" fill="#6b7280">EC比率</text>
  </svg>
  <figcaption class="sr-only">EC 45%、店舗 30%、卸 15%、その他 10%</figcaption>
</figure>`,
    tailwind: `<!-- conic-gradientを使ったCSSのみのドーナツチャート -->
<div
  class="relative size-44"
  role="img"
  aria-label="売上構成比: EC 45%、店舗 30%、卸 15%、その他 10%"
>
  <div
    class="size-full rounded-full
           bg-[conic-gradient(#ec4899_0deg_162deg,#a855f7_162deg_270deg,#f97316_270deg_324deg,#e5e7eb_324deg_360deg)]"
  ></div>
  <!-- 中央のくり抜き＋サマリー数値 -->
  <div
    class="absolute inset-5 flex flex-col items-center justify-center
           rounded-full bg-white"
  >
    <span class="text-3xl font-bold tracking-tight">45%</span>
    <span class="text-xs text-gray-500">EC比率</span>
  </div>
</div>

<!-- 凡例 -->
<ul class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
  <li class="flex items-center gap-1.5">
    <span class="size-2.5 rounded-full bg-pink-500"></span>EC 45%
  </li>
  <li class="flex items-center gap-1.5">
    <span class="size-2.5 rounded-full bg-purple-500"></span>店舗 30%
  </li>
  <li class="flex items-center gap-1.5">
    <span class="size-2.5 rounded-full bg-orange-500"></span>卸 15%
  </li>
  <li class="flex items-center gap-1.5">
    <span class="size-2.5 rounded-full bg-gray-300"></span>その他 10%
  </li>
</ul>`,
    react: `"use client";

import { useMemo, useState } from "react";

type Segment = { label: string; value: number; color: string };

export function DonutChart({
  data,
  size = 200,
  thickness = 24,
  centerLabel,
}: {
  data: Segment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const total = useMemo(
    () => data.reduce((sum, d) => sum + d.value, 0),
    [data]
  );
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const summary = data
    .map((d) => \`\${d.label} \${Math.round((d.value / total) * 100)}%\`)
    .join("、");

  let offset = 0;

  return (
    <div className="flex items-center gap-6">
      <svg
        width={size}
        height={size}
        viewBox={\`0 0 \${size} \${size}\`}
        role="img"
        aria-label={\`構成比: \${summary}\`}
      >
        <g transform={\`rotate(-90 \${size / 2} \${size / 2})\`}>
          {data.map((d, i) => {
            const length = (d.value / total) * circumference;
            const segment = (
              <circle
                key={d.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={d.color}
                strokeWidth={active === i ? thickness + 4 : thickness}
                strokeDasharray={\`\${length} \${circumference - length}\`}
                strokeDashoffset={-offset}
                className="transition-all duration-200"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              />
            );
            offset += length;
            return segment;
          })}
        </g>
        <text
          x="50%"
          y="47%"
          textAnchor="middle"
          className="fill-gray-900 text-3xl font-bold"
        >
          {active !== null
            ? \`\${Math.round((data[active].value / total) * 100)}%\`
            : total.toLocaleString()}
        </text>
        <text x="50%" y="60%" textAnchor="middle" className="fill-gray-500 text-xs">
          {active !== null ? data[active].label : centerLabel ?? "合計"}
        </text>
      </svg>

      <ul className="space-y-1.5 text-sm">
        {data.map((d, i) => (
          <li
            key={d.label}
            className={\`flex items-center gap-2 \${
              active === i ? "font-semibold" : "text-gray-600"
            }\`}
          >
            <span
              aria-hidden
              className="size-2.5 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            {d.label}
            <span className="tabular-nums">
              {Math.round((d.value / total) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add chart
// shadcn/uiのChartコンポーネント（Recharts製）でドーナツチャートを実装
"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { channel: "ec", sales: 4500, fill: "var(--color-ec)" },
  { channel: "store", sales: 3000, fill: "var(--color-store)" },
  { channel: "wholesale", sales: 1500, fill: "var(--color-wholesale)" },
  { channel: "other", sales: 1000, fill: "var(--color-other)" },
];

const chartConfig = {
  ec: { label: "EC", color: "hsl(330 81% 60%)" },
  store: { label: "店舗", color: "hsl(271 91% 65%)" },
  wholesale: { label: "卸", color: "hsl(25 95% 53%)" },
  other: { label: "その他", color: "hsl(220 9% 78%)" },
} satisfies ChartConfig;

export function SalesDonutChart() {
  const total = chartData.reduce((sum, d) => sum + d.sales, 0);

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-64">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="sales"
          nameKey="channel"
          innerRadius={60}
          strokeWidth={4}
        >
          <Label
            content={({ viewBox }) => {
              if (!viewBox || !("cx" in viewBox)) return null;
              return (
                <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                  <tspan className="fill-foreground text-2xl font-bold">
                    {total.toLocaleString()}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy ?? 0) + 20}
                    className="fill-muted-foreground text-xs"
                  >
                    売上合計
                  </tspan>
                </text>
              );
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}`,
  },
  related: ["bar-chart", "line-chart", "kpi-card", "progress-bar"],
  views: 12400,
  favorites: 480,
  collections: ["admin-ui", "finance-ui", "saas-ui"],
  gradient: "from-fuchsia-500/15 via-pink-500/10 to-rose-500/15",
  difficulty: 2,
  updatedAt: "2026-04-22",
};
