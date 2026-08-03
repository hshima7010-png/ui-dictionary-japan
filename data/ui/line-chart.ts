import type { UIItem } from "@/types/ui";

export const lineChart: UIItem = {
  slug: "line-chart",
  name: "Line Chart",
  nameJa: "折れ線グラフ",
  description:
    "時系列データの推移を線で結んで可視化するチャート。ダッシュボードの中心的存在。",
  category: "charts",
  tags: ["チャート", "時系列", "推移", "データ可視化"],
  aliases: [
    "推移を見るギザギザのグラフ",
    "売上の変化を線で表すグラフ",
    "時系列のグラフ",
    "点を線でつないだグラフ",
    "アクセス数の伸びが分かるグラフ",
    "株価みたいな折れ線のやつ",
  ],
  whatIs: [
    "折れ線グラフ（Line Chart）は、時間の経過に沿ったデータの推移を、点（データポイント）を線分で結んで表現するチャートです。日本語名は線が折れ曲がりながら続く見た目に由来し、英語の「Line Chart」も点を結ぶ「線（line）」から名付けられました。データ可視化の歴史では18世紀の政治経済学者ウィリアム・プレイフェアが考案したとされる、最も古典的なグラフ形式のひとつです。",
    "横軸に時間、縦軸に数値を取るのが基本形で、増加・減少・周期性・急変といった「変化のかたち」を直感的に読み取れるのが最大の強みです。複数の系列を重ねて描けば、指標同士の比較や相関の観察もできます。線の下を塗りつぶしたエリアチャートや、極小サイズのスパークラインは折れ線グラフの派生形です。",
    "SaaSの管理画面や分析ダッシュボードでは、売上・アクセス数・アクティブユーザーなどのKPI推移を示す中心的コンポーネントとして使われます。Web実装ではRechartsやChart.jsなどのライブラリが定番ですが、構造自体はSVGのpath／polyline要素で素直に描画できるため、軽量な自作にも向いています。",
  ],
  features: [
    "データポイントを線で結び、時系列の変化・傾向を表現する",
    "複数系列を色分けして重ね、指標間の比較ができる",
    "ホバー／タップでツールチップに正確な値を表示するインタラクションが定番",
    "グリッド線・軸ラベル・凡例で読み取りを補助する",
    "線下の塗りつぶし（エリア）やグラデーションで量感を演出できる",
    "期間切替（7日／30日／1年）やズームと組み合わせられる",
  ],
  merits: [
    "増減のトレンドや急変点が一目で分かり、時系列データの把握に最適",
    "連続的な変化の表現に優れ、棒グラフより多くのデータ点を破綻なく描ける",
    "複数系列の重ね描きで、指標同士の比較・相関の観察がしやすい",
    "省スペースなスパークラインからフル機能のダッシュボードまでスケールする",
    "SVGで軽量に描画でき、アニメーションやインタラクションも付けやすい",
  ],
  demerits: [
    "カテゴリ間の比較（部門別売上など）には不向きで、棒グラフに劣る",
    "系列を重ねすぎると線が絡まり判読不能になる（スパゲッティチャート）",
    "縦軸の範囲操作次第で変化を誇張・矮小化でき、誤解を招く恐れがある",
    "データ点が少なすぎると線の補間が実態以上に滑らかな変化を演出してしまう",
    "色だけで系列を区別すると、色覚多様性のユーザーには判別できない",
  ],
  bestPractices: [
    "重ねる系列は3〜4本までに抑え、注目すべき系列以外は淡色にして主役を立てる",
    "縦軸は原則0起点にするか、省略する場合はその旨を明示して誇張を避ける",
    "ホバー時のツールチップと基準線（クロスヘア）で正確な値を読めるようにする",
    "凡例は線の近くに直接ラベルを置く（ダイレクトラベリング）方が視線移動が少ない",
    "欠損データは線を途切れさせるか点線にし、ゼロと区別する",
    "モバイルでは軸ラベルを間引き、期間切替タブで表示密度を調整する",
  ],
  useCases: [
    "Google Analytics — セッション数・ユーザー数の推移グラフ",
    "Stripe Dashboard — 売上・MRRの推移を示すメインチャート",
    "GitHub Insights — コミット数やトラフィックの推移表示",
    "証券アプリ（SBI証券・楽天証券など）— 株価・資産推移のチャート",
    "SaaSのKPIダッシュボード — DAU/MAUやチャーンレートのトレンド表示",
  ],
  accessibility: [
    "SVGに role=\"img\" と、傾向を要約した aria-label（「7月の売上推移。前月比12%増」等）を付ける",
    "色だけで系列を区別せず、実線・点線などの線種やマーカー形状も併用する",
    "グラフと同じデータを表形式でも提供し、スクリーンリーダーで正確な値へアクセスできるようにする",
    "ツールチップはホバーだけでなくキーボードフォーカスでも表示させる",
    "線・軸・ラベルの色は背景に対し3:1以上のコントラスト比を確保する",
    "描画アニメーションはprefers-reduced-motion環境で無効化する",
  ],
  figma: [
    "折れ線はPenツールよりも、実データからプラグイン（Chart等）で生成すると説得力のあるモックになる",
    "線・グリッド・軸ラベル・ツールチップをレイヤー分けし、系列色はチャート用トークンで管理する",
    "ホバー状態（クロスヘア＋ツールチップ＋データ点の強調）を別Variantとして用意する",
    "空状態・ローディング（スケルトン）・エラー状態のチャート枠もセットでデザインする",
    "ダークモードでのグリッド線の明度と系列色の見え方を必ず確認する",
  ],
  code: {
    html: `<!-- SVGによる軽量な折れ線グラフ -->
<figure>
  <svg
    viewBox="0 0 400 200"
    role="img"
    aria-label="週間売上の推移。月曜から日曜にかけて増加傾向"
    style="width: 100%; max-width: 480px;"
  >
    <!-- グリッド線 -->
    <g stroke="#e5e7eb" stroke-width="1">
      <line x1="40" y1="30" x2="380" y2="30" />
      <line x1="40" y1="90" x2="380" y2="90" />
      <line x1="40" y1="150" x2="380" y2="150" />
    </g>
    <!-- 軸ラベル -->
    <g fill="#9ca3af" font-size="11">
      <text x="8" y="34">100</text>
      <text x="14" y="94">50</text>
      <text x="22" y="154">0</text>
      <text x="40" y="175">月</text>
      <text x="210" y="175">木</text>
      <text x="370" y="175">日</text>
    </g>
    <!-- 折れ線 -->
    <polyline
      points="40,130 96,110 152,118 208,80 264,90 320,55 376,40"
      fill="none"
      stroke="#3b82f6"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- データポイント -->
    <g fill="#3b82f6">
      <circle cx="40" cy="130" r="3.5" />
      <circle cx="208" cy="80" r="3.5" />
      <circle cx="376" cy="40" r="3.5" />
    </g>
  </svg>
  <figcaption style="font-size: 13px; color: #6b7280;">
    週間売上の推移（万円）
  </figcaption>
</figure>`,
    tailwind: `<figure class="max-w-lg rounded-2xl border border-gray-200 p-5">
  <figcaption class="mb-3 text-sm font-semibold text-gray-900">
    週間売上の推移
    <span class="ml-2 text-xs font-normal text-emerald-600">前週比 +12%</span>
  </figcaption>
  <svg
    viewBox="0 0 400 160"
    role="img"
    aria-label="週間売上の推移。月曜から日曜にかけて増加傾向"
    class="w-full"
  >
    <g class="stroke-gray-100" stroke-width="1">
      <line x1="0" y1="20" x2="400" y2="20" />
      <line x1="0" y1="70" x2="400" y2="70" />
      <line x1="0" y1="120" x2="400" y2="120" />
    </g>
    <!-- エリア（線下の塗り） -->
    <path
      d="M0,110 60,90 120,98 180,60 240,70 300,35 360,20 L360,140 0,140 Z"
      class="fill-blue-500/10"
    />
    <path
      d="M0,110 60,90 120,98 180,60 240,70 300,35 360,20"
      fill="none"
      class="stroke-blue-500"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="360" cy="20" r="4" class="fill-blue-500" />
  </svg>
  <div class="mt-2 flex justify-between text-xs text-gray-400">
    <span>月</span><span>火</span><span>水</span><span>木</span>
    <span>金</span><span>土</span><span>日</span>
  </div>
</figure>`,
    react: `"use client";

import { useMemo, useState } from "react";

type Point = { label: string; value: number };

export function LineChart({
  data,
  width = 400,
  height = 160,
}: {
  data: Point[];
  width?: number;
  height?: number;
}) {
  const [active, setActive] = useState<number | null>(null);
  const pad = 8;

  const points = useMemo(() => {
    const max = Math.max(...data.map((d) => d.value));
    const min = Math.min(...data.map((d) => d.value));
    const range = max - min || 1;
    return data.map((d, i) => ({
      ...d,
      x: pad + (i / (data.length - 1)) * (width - pad * 2),
      y: pad + (1 - (d.value - min) / range) * (height - pad * 2),
    }));
  }, [data, width, height]);

  const path = points
    .map((p, i) => \`\${i === 0 ? "M" : "L"}\${p.x},\${p.y}\`)
    .join(" ");

  return (
    <div className="max-w-lg">
      <svg
        viewBox={\`0 0 \${width} \${height}\`}
        role="img"
        aria-label={\`\${data[0].label}から\${data[data.length - 1].label}までの推移グラフ\`}
        className="w-full"
      >
        <path
          d={path}
          fill="none"
          className="stroke-blue-500"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((p, i) => (
          <g key={p.label}>
            {/* 当たり判定を広げる透明レイヤー */}
            <rect
              x={p.x - width / data.length / 2}
              y={0}
              width={width / data.length}
              height={height}
              fill="transparent"
              tabIndex={0}
              aria-label={\`\${p.label}: \${p.value}\`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={active === i ? 5 : 3}
              className="fill-blue-500 transition-[r]"
            />
          </g>
        ))}
      </svg>
      <div role="status" className="mt-1 h-5 text-sm text-gray-600">
        {active !== null &&
          \`\${points[active].label}: \${points[active].value.toLocaleString()}\`}
      </div>
    </div>
  );
}

// 使用例
export function SalesTrend() {
  const data = [
    { label: "月", value: 42 },
    { label: "火", value: 58 },
    { label: "水", value: 51 },
    { label: "木", value: 74 },
    { label: "金", value: 68 },
    { label: "土", value: 92 },
    { label: "日", value: 103 },
  ];
  return <LineChart data={data} />;
}`,
    shadcn: `// npx shadcn@latest add chart
// shadcn/ui charts はRechartsベースのチャート部品を提供します。
"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "1月", sales: 186 },
  { month: "2月", sales: 305 },
  { month: "3月", sales: 237 },
  { month: "4月", sales: 273 },
  { month: "5月", sales: 209 },
  { month: "6月", sales: 314 },
];

const chartConfig = {
  sales: {
    label: "売上（万円）",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function SalesLineChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-52 w-full">
      <LineChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          dataKey="sales"
          type="monotone"
          stroke="var(--color-sales)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}`,
  },
  related: ["bar-chart", "sparkline", "kpi-card", "donut-chart"],
  views: 27400,
  favorites: 1100,
  collections: ["admin-ui", "finance-ui", "saas-ui"],
  gradient: "from-sky-500/15 via-indigo-500/10 to-cyan-500/15",
  difficulty: 2,
  updatedAt: "2026-04-25",
};
