import type { UIItem } from "@/types/ui";

export const sparkline: UIItem = {
  slug: "sparkline",
  name: "Sparkline",
  nameJa: "スパークライン",
  description:
    "軸もラベルも持たない極小の折れ線グラフ。数値の傍らでトレンドを一瞬で伝える。",
  category: "charts",
  tags: ["チャート", "ミニグラフ", "トレンド", "ダッシュボード", "インライン"],
  aliases: [
    "数字の横にある小さいグラフ",
    "株価アプリのミニチャート",
    "テーブルのセルに入っている折れ線",
    "軸のない小さな折れ線グラフ",
    "KPIカードの下に敷いてある波線",
    "一目でトレンドが分かる豆グラフ",
  ],
  whatIs: [
    "スパークライン（Sparkline）は、軸・目盛り・凡例を持たない、単語サイズの極小グラフです。情報デザインの大家エドワード・タフテが提唱した概念で、「データの火花（spark）のような、小さく強い線（line)」という意味を込めて名付けられました。文章や数値のすぐ隣に置き、正確な値ではなく「上がっているか、下がっているか」というトレンドの形だけを伝えます。",
    "最大の特徴は、テキストと同じ行やテーブルのセル内など、通常のチャートでは不可能な場所に埋め込める点です。株価一覧の各行に直近の値動きを添えたり、KPIカードの背景に過去30日の推移を敷いたりと、「数値＋文脈」をわずかな面積で提供できます。Googleスプレッドシートに SPARKLINE 関数が標準搭載されているほど、データ表示の定番手法になっています。",
    "実装は小さなSVGのpolyline（またはpath）を描くだけで済み、ライブラリなしでも数十行で作れます。ダッシュボードの一覧性を高めたい場面、データテーブルにトレンド列を追加したい場面で、詳細チャートへの入口として機能させるのが典型的な使い方です。",
  ],
  features: [
    "軸・目盛り・凡例を持たず、線の形だけでトレンドを表現する",
    "テキストの行内やテーブルのセルに収まる極小サイズで表示できる",
    "終点にドットを打ったり、最大値・最小値を色付きで強調できる",
    "折れ線のほか、棒（win/loss）やエリア塗りつぶしのバリエーションがある",
    "上昇トレンドは緑、下降トレンドは赤など、線色で状態を補足できる",
    "クリックで詳細チャートへ遷移する「入口」としても機能する",
  ],
  merits: [
    "通常のチャートの数十分の一の面積でトレンドを伝えられる",
    "数値のすぐ隣に置けるため、視線移動なしで文脈を補足できる",
    "テーブルの各行に並べると、複数系列の形の比較が一瞬でできる",
    "SVGだけで軽量に実装でき、大量に描画してもパフォーマンス影響が小さい",
    "装飾がないぶんノイズが少なく、ダッシュボードの情報密度を上げられる",
  ],
  demerits: [
    "軸がないため正確な値やスケールは読み取れない",
    "系列ごとにY軸スケールが自動調整されると、行間の比較で誤解を招く",
    "データ点が少なすぎると線がカクつき、多すぎると潰れて読めない",
    "小さすぎてタップターゲットにしづらく、モバイルでの操作性は低い",
    "それ単体では説明が完結しないため、必ず数値やラベルとの併用が必要",
  ],
  bestPractices: [
    "必ず現在値や変化率などの数値とセットで表示し、スパークライン単体で使わない",
    "伝えたいのが「傾向」なのか「比較」なのかを決め、比較ならY軸スケールを行間で統一する",
    "終点ドットや最終値の強調で「今どこにいるか」を示す",
    "上昇＝ポジティブとは限らない指標（解約率など）では色の意味付けを慎重にする",
    "高さは16〜40px程度に抑え、線幅1.5〜2pxで滑らかに描く",
    "詳細を知りたいユーザーのために、クリックやホバーで詳細チャートへ導線を作る",
  ],
  useCases: [
    "Yahoo!ファイナンス・証券アプリの銘柄一覧 — 各行に当日の値動きミニチャート",
    "Stripeダッシュボード — 主要KPIカード内の直近推移表示",
    "Googleスプレッドシート — SPARKLINE関数によるセル内グラフ",
    "GitHub — リポジトリ一覧のコミットアクティビティグラフ",
    "SaaS管理画面のデータテーブル — ユーザーごとの利用量トレンド列",
  ],
  accessibility: [
    "SVGに role=\"img\" と aria-label で「何の指標がどう推移したか」を要約して伝える",
    "装飾目的の場合は aria-hidden=\"true\" にし、隣の数値・変化率をテキストで提供する",
    "色（緑/赤）だけで増減を伝えず、＋/−記号や矢印アイコンを併記する",
    "線色と背景のコントラスト比3:1以上を確保する",
    "正確な値が必要な文脈では、詳細データへのリンクやテーブルを代替手段として用意する",
  ],
  figma: [
    "Penツールで折れ線を描くより、実データからプラグイン（Chart等）で生成すると自然な形になる",
    "線はStrokeのみのVectorにし、Round cap / Round joinで滑らかに見せる",
    "終点ドットは小さなEllipseを重ね、線と同色のComponentとしてまとめる",
    "上昇・下降・横ばいの3パターンをVariantsにしておくとモックが量産しやすい",
    "エリア塗りはグラデーション（線色→透明）のShapeを線の下に敷いて表現する",
  ],
  code: {
    html: `<!-- 数値の隣に置くインラインのスパークライン -->
<div class="stock-row">
  <span class="name">ACME Inc.</span>
  <svg
    class="sparkline"
    viewBox="0 0 100 28"
    width="100" height="28"
    role="img"
    aria-label="直近2週間の株価推移: 上昇傾向"
    preserveAspectRatio="none"
  >
    <polyline
      fill="none"
      stroke="#ec4899"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      points="0,22 8,20 16,23 24,16 32,18 40,12 48,14 56,9 64,11 72,7 80,10 88,4 100,6"
    />
    <!-- 終点の強調ドット -->
    <circle cx="100" cy="6" r="2.5" fill="#ec4899" />
  </svg>
  <span class="price">¥1,842 <small>+4.2%</small></span>
</div>

<style>
  .stock-row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border-bottom: 1px solid #f3f4f6;
  }
  .stock-row .name { font-weight: 600; min-width: 8em; }
  .stock-row .price { margin-left: auto; font-variant-numeric: tabular-nums; }
  .stock-row small { color: #16a34a; }
</style>`,
    tailwind: `<!-- テーブル行に埋め込むスパークライン -->
<div class="flex items-center gap-4 border-b border-gray-100 px-4 py-3">
  <span class="min-w-32 font-semibold">ACME Inc.</span>

  <svg
    viewBox="0 0 100 28"
    class="h-7 w-24 shrink-0"
    role="img"
    aria-label="直近2週間の株価推移: 上昇傾向"
    preserveAspectRatio="none"
  >
    <polyline
      fill="none"
      class="stroke-pink-500"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      points="0,22 8,20 16,23 24,16 32,18 40,12 48,14 56,9 64,11 72,7 80,10 88,4 100,6"
    />
    <circle cx="100" cy="6" r="2.5" class="fill-pink-500" />
  </svg>

  <span class="ml-auto tabular-nums">
    ¥1,842
    <span class="ml-1 text-sm font-medium text-green-600">+4.2%</span>
  </span>
</div>`,
    react: `"use client";

import { useId, useMemo } from "react";

export function Sparkline({
  data,
  width = 120,
  height = 32,
  stroke = "#ec4899",
  fillArea = false,
  label,
}: {
  data: number[];
  width?: number;
  height?: number;
  stroke?: string;
  fillArea?: boolean;
  label: string; // 例: "直近30日のMRR推移"
}) {
  const gradientId = useId();

  const points = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = 3; // 線が上下で見切れないための余白
    return data.map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - pad - ((v - min) / range) * (height - pad * 2);
      return [x, y] as const;
    });
  }, [data, width, height]);

  const path = points
    .map(([x, y], i) => \`\${i === 0 ? "M" : "L"}\${x.toFixed(1)},\${y.toFixed(1)}\`)
    .join(" ");
  const [lastX, lastY] = points[points.length - 1];
  const trend = data[data.length - 1] >= data[0] ? "上昇傾向" : "下降傾向";

  return (
    <svg
      width={width}
      height={height}
      viewBox={\`0 0 \${width} \${height}\`}
      role="img"
      aria-label={\`\${label}: \${trend}\`}
      className="overflow-visible"
    >
      {fillArea && (
        <>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={\`\${path} L\${width},\${height} L0,\${height} Z\`}
            fill={\`url(#\${gradientId})\`}
          />
        </>
      )}
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="3" fill={stroke} />
    </svg>
  );
}

// 使用例:
// <Sparkline data={[120, 132, 128, 145, 160, 152, 171]} label="週間アクセス数" fillArea />`,
    shadcn: `// npx shadcn@latest add chart card
// shadcn/uiのChart（Recharts）で、KPIカード内スパークラインを実装
"use client";

import { Line, LineChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { day: "月", value: 186 },
  { day: "火", value: 205 },
  { day: "水", value: 197 },
  { day: "木", value: 238 },
  { day: "金", value: 260 },
  { day: "土", value: 254 },
  { day: "日", value: 289 },
];

const chartConfig = {
  value: { label: "アクセス数", color: "hsl(330 81% 60%)" },
} satisfies ChartConfig;

export function KpiSparklineCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          週間アクセス数
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-bold tabular-nums">289</p>
          <p className="text-sm font-medium text-green-600">+12.4%</p>
        </div>
        {/* 軸・グリッド・ツールチップを外してスパークライン化 */}
        <ChartContainer config={chartConfig} className="h-12 w-28">
          <LineChart data={chartData} margin={{ top: 4, bottom: 4 }}>
            <Line
              dataKey="value"
              type="natural"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`,
  },
  related: ["line-chart", "kpi-card", "bar-chart", "data-table"],
  views: 6800,
  favorites: 270,
  collections: ["admin-ui", "finance-ui", "stripe-ui"],
  gradient: "from-pink-500/15 via-fuchsia-500/10 to-purple-500/15",
  difficulty: 2,
  updatedAt: "2026-05-09",
};
