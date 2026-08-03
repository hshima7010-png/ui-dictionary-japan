import type { UIItem } from "@/types/ui";

export const barChart: UIItem = {
  slug: "bar-chart",
  name: "Bar Chart",
  nameJa: "棒グラフ",
  description:
    "数量を棒の長さで比較するチャート。カテゴリ間の大小関係を最も正確に伝えられる。",
  category: "charts",
  tags: ["チャート", "比較", "ランキング", "データ可視化"],
  aliases: [
    "縦の棒で量を比べるグラフ",
    "売上ランキングの棒のグラフ",
    "長さで大小がわかるグラフ",
    "カテゴリごとの比較グラフ",
    "横向きの棒が並ぶグラフ",
    "アンケート結果でよく見る棒のやつ",
  ],
  whatIs: [
    "棒グラフ（Bar Chart）は、カテゴリごとの数量を棒（バー）の長さで表現し、大小関係を比較するチャートです。名前は英語の「bar（棒）」に由来し、日本語でもそのまま「棒グラフ」と呼ばれます。折れ線グラフと同じく18世紀のウィリアム・プレイフェアが考案したとされる、データ可視化の原点というべき形式です。",
    "人間の視覚は「長さの比較」を最も正確に知覚できることが知られており、円グラフの角度や面積による表現よりも、棒グラフは値の大小を確実に伝えられます。縦棒（Column）とラベルの長いカテゴリに強い横棒（Bar）、内訳を重ねる積み上げ棒、系列を並べるグループ棒などの派生形があります。",
    "管理画面の売上比較、アンケート結果、ランキング表示など、カテゴリ間比較が必要なあらゆる場面で使われる汎用性の高いチャートです。Webではライブラリ実装が定番ですが、単純な棒グラフならdivの幅・高さやSVGのrect要素だけでも表現でき、CSSのみで実装できる数少ないチャートでもあります。",
  ],
  features: [
    "カテゴリごとの数量を棒の長さで表現し、大小を比較できる",
    "縦棒・横棒・積み上げ・グループ化などの派生形を持つ",
    "ホバーで正確な値をツールチップ表示するインタラクションが定番",
    "棒に値ラベルを直接表示して軸なしでも読める形にできる",
    "ソート（降順・昇順）と組み合わせてランキング表現ができる",
    "単純なものはCSSのdivやSVGのrectだけで実装できる",
  ],
  merits: [
    "長さによる比較は人間の知覚精度が最も高く、値の大小を正確に伝えられる",
    "円グラフより項目数の多い比較に耐え、ランキング表現とも相性が良い",
    "横棒にすれば長い日本語ラベルも折り返さずに表示できる",
    "実装が単純で、ライブラリなしでもアクセシブルに作りやすい",
    "積み上げ・グループ化で「合計と内訳」「系列間比較」まで拡張できる",
  ],
  demerits: [
    "連続的な時系列の傾向を見るには折れ線グラフより不向き",
    "項目数が多すぎると棒が細くなり、ラベルも重なって読めなくなる",
    "軸を0以外から始めると差が誇張され、誤解を招くグラフになりやすい（棒グラフでは特に致命的）",
    "積み上げ棒は下段以外のセグメントの比較が難しい",
    "3D表現や過剰な装飾は値の読み取り精度をかえって下げる",
  ],
  bestPractices: [
    "数値軸は必ず0から始める。棒の長さ＝値である以上、途中省略は誤解のもとになる",
    "ランキング目的なら値の降順に並べ、五十音順などの機械的な並びを避ける",
    "強調したい棒だけアクセントカラーにし、他はグレーにして視線を誘導する",
    "カテゴリ名が長い場合は横棒グラフにし、ラベルの斜め表示や省略を避ける",
    "棒の間隔は棒の幅の30〜50%程度にし、密着や離れすぎを避ける",
    "値ラベルを棒の先端に直接表示すれば、グリッド線を減らしてノイズを抑えられる",
  ],
  useCases: [
    "Google Analytics — 流入チャネル別・ページ別のセッション数比較",
    "Shopify管理画面 — 商品別・期間別の売上比較チャート",
    "アンケート結果レポート — 回答の選択肢別集計の横棒表示",
    "求人・年収サイト — 職種別平均年収のランキング棒グラフ",
    "GitHubのコントリビューション統計 — 週別コミット数の縦棒表示",
  ],
  accessibility: [
    "SVGチャートには role=\"img\" と要点を要約した aria-label を付ける",
    "各棒の正確な値をテキスト（値ラベルまたは併設のデータテーブル）でも提供する",
    "棒と背景のコントラスト比3:1以上を確保し、隣接する棒は色差＋間隔で区別する",
    "積み上げ棒の色分けは色だけに頼らず、凡例とパターン・明度差も併用する",
    "ホバー時のツールチップはキーボードフォーカスでも表示されるようにする",
    "伸びるアニメーションはprefers-reduced-motionで無効化する",
  ],
  figma: [
    "棒1本をAuto Layout化したコンポーネントにし、高さ（幅）を値に応じて可変にする",
    "チャート全体は棒コンポーネントの横並びAuto Layoutで組むと本数の増減が容易",
    "色は「デフォルト棒＝グレー、強調棒＝アクセント」の2トークン構成にしておくと使い回せる",
    "縦棒・横棒・積み上げをVariantsで切り替えられるチャートキットにしておくと効率的",
    "ツールチップ付きのホバー状態と、空状態・ローディング状態も併せてデザインする",
  ],
  code: {
    html: `<!-- CSSだけで作る横棒グラフ -->
<figure class="bar-chart">
  <figcaption>チャネル別の流入数</figcaption>
  <dl>
    <div class="row">
      <dt>検索</dt>
      <dd><span class="bar" style="width: 92%"></span>4,600</dd>
    </div>
    <div class="row">
      <dt>SNS</dt>
      <dd><span class="bar" style="width: 64%"></span>3,200</dd>
    </div>
    <div class="row">
      <dt>広告</dt>
      <dd><span class="bar" style="width: 38%"></span>1,900</dd>
    </div>
    <div class="row">
      <dt>直接</dt>
      <dd><span class="bar" style="width: 24%"></span>1,200</dd>
    </div>
  </dl>
</figure>

<style>
  .bar-chart { max-width: 480px; font-size: 14px; }
  .bar-chart figcaption { font-weight: 700; margin-bottom: 12px; }
  .bar-chart .row {
    display: grid;
    grid-template-columns: 56px 1fr;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }
  .bar-chart dt { color: #6b7280; }
  .bar-chart dd {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
  }
  .bar-chart .bar {
    height: 20px;
    background: #3b82f6;
    border-radius: 4px;
  }
</style>`,
    tailwind: `<figure class="max-w-lg rounded-2xl border border-gray-200 p-5">
  <figcaption class="mb-4 text-sm font-semibold text-gray-900">
    チャネル別の流入数
  </figcaption>
  <dl class="space-y-3 text-sm">
    <!-- 強調したい1位だけアクセントカラー -->
    <div class="grid grid-cols-[56px_1fr] items-center gap-3">
      <dt class="text-gray-500">検索</dt>
      <dd class="flex items-center gap-2">
        <span class="h-5 w-[92%] rounded bg-blue-500"></span>
        <span class="font-semibold tabular-nums">4,600</span>
      </dd>
    </div>
    <div class="grid grid-cols-[56px_1fr] items-center gap-3">
      <dt class="text-gray-500">SNS</dt>
      <dd class="flex items-center gap-2">
        <span class="h-5 w-[64%] rounded bg-gray-300"></span>
        <span class="tabular-nums text-gray-600">3,200</span>
      </dd>
    </div>
    <div class="grid grid-cols-[56px_1fr] items-center gap-3">
      <dt class="text-gray-500">広告</dt>
      <dd class="flex items-center gap-2">
        <span class="h-5 w-[38%] rounded bg-gray-300"></span>
        <span class="tabular-nums text-gray-600">1,900</span>
      </dd>
    </div>
    <div class="grid grid-cols-[56px_1fr] items-center gap-3">
      <dt class="text-gray-500">直接</dt>
      <dd class="flex items-center gap-2">
        <span class="h-5 w-[24%] rounded bg-gray-300"></span>
        <span class="tabular-nums text-gray-600">1,200</span>
      </dd>
    </div>
  </dl>
</figure>`,
    react: `"use client";

import { useState } from "react";

type Datum = { label: string; value: number };

export function BarChart({
  data,
  width = 400,
  height = 200,
}: {
  data: Datum[];
  width?: number;
  height?: number;
}) {
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value));
  const labelArea = 24;
  const gapRatio = 0.4; // 棒幅に対する間隔の比率
  const slot = width / data.length;
  const barWidth = slot * (1 - gapRatio);

  return (
    <div className="max-w-lg">
      <svg
        viewBox={\`0 0 \${width} \${height}\`}
        role="img"
        aria-label={\`\${data.length}項目の棒グラフ。最大は\${
          data.reduce((a, b) => (a.value > b.value ? a : b)).label
        }\`}
        className="w-full"
      >
        {data.map((d, i) => {
          const barHeight = (d.value / max) * (height - labelArea - 20);
          const x = i * slot + (slot - barWidth) / 2;
          const y = height - labelArea - barHeight;
          const isActive = active === i;
          return (
            <g
              key={d.label}
              tabIndex={0}
              aria-label={\`\${d.label}: \${d.value.toLocaleString()}\`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            >
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                className={
                  isActive ? "fill-blue-600" : "fill-blue-500/80"
                }
              />
              {/* 値ラベルを棒の先端に直接表示 */}
              <text
                x={x + barWidth / 2}
                y={y - 6}
                textAnchor="middle"
                className="fill-gray-700 text-[11px] font-semibold
                           tabular-nums"
              >
                {d.value.toLocaleString()}
              </text>
              <text
                x={x + barWidth / 2}
                y={height - 6}
                textAnchor="middle"
                className="fill-gray-400 text-[11px]"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 使用例
export function MonthlySales() {
  const data = [
    { label: "1月", value: 320 },
    { label: "2月", value: 280 },
    { label: "3月", value: 450 },
    { label: "4月", value: 410 },
    { label: "5月", value: 530 },
    { label: "6月", value: 490 },
  ];
  return <BarChart data={data} />;
}`,
    shadcn: `// npx shadcn@latest add chart
// shadcn/ui charts（Rechartsベース）の棒グラフ実装
"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { channel: "検索", sessions: 4600 },
  { channel: "SNS", sessions: 3200 },
  { channel: "広告", sessions: 1900 },
  { channel: "直接", sessions: 1200 },
];

const chartConfig = {
  sessions: {
    label: "セッション数",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChannelBarChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-52 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="channel"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="sessions"
          fill="var(--color-sessions)"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}`,
  },
  related: ["line-chart", "donut-chart", "data-table", "kpi-card"],
  views: 15700,
  favorites: 640,
  collections: ["admin-ui", "finance-ui"],
  gradient: "from-rose-500/15 via-orange-500/10 to-red-500/15",
  difficulty: 2,
  updatedAt: "2026-06-03",
};
