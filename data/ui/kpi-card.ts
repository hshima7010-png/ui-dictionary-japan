import type { UIItem } from "@/types/ui";

export const kpiCard: UIItem = {
  slug: "kpi-card",
  name: "KPI Card",
  nameJa: "KPIカード（統計カード）",
  description:
    "売上やユーザー数などの重要指標を1枚のカードで表示。ダッシュボードの主役UI。",
  category: "analytics",
  tags: ["ダッシュボード", "統計", "KPI", "メトリクス", "カード"],
  aliases: [
    "ダッシュボードの上に並んでいる数字のカード",
    "売上とかユーザー数が大きく出ているやつ",
    "前月比の矢印が付いた数値ボックス",
    "統計カード",
    "メトリクスカード",
    "管理画面の数字パネル",
  ],
  whatIs: [
    "KPIカード（KPI Card / Stat Card）は、売上・ユーザー数・コンバージョン率といった重要業績評価指標（KPI: Key Performance Indicator）を、1枚のカードに1指標ずつ表示するUIコンポーネントです。「重要指標をカード型の枠に収めたもの」という機能そのままの名前で、Stat Card（統計カード）やMetric Cardとも呼ばれます。",
    "典型的な構成は「指標名（ラベル）＋現在値（大きな数字）＋前期間比の変化率（矢印付き）」の3点セットです。ここにスパークラインや補足テキストを加えたバリエーションも多く、ダッシュボードの最上部に3〜4枚横並びで配置するレイアウトが事実上の標準になっています。StripeやShopifyの管理画面、Google Analyticsのサマリー行が代表例です。",
    "実装自体は難しくありませんが、「どの指標を選ぶか」「比較対象の期間をどう明示するか」「増減の色をどう意味付けるか」といった情報設計の質がそのまま価値を左右するコンポーネントです。数値のフォーマット（桁区切り・単位・省略表記）まで丁寧に設計することで、プロダクトの信頼感が大きく変わります。",
  ],
  features: [
    "1枚のカードに1つのKPIを「ラベル＋現在値＋変化率」の構成で表示する",
    "前期間比の増減を矢印アイコンと色（緑/赤）で直感的に示す",
    "スパークラインを併載して直近のトレンドを補足できる",
    "3〜4枚をグリッドで横並びにするダッシュボード定番レイアウト",
    "ローディング中はスケルトンに置き換えてレイアウトシフトを防げる",
    "クリックで該当指標の詳細レポートへ遷移する導線を持たせられる",
  ],
  merits: [
    "ビジネスの健康状態を数秒で把握できる、圧倒的な情報伝達効率",
    "カード単位で独立しているため、指標の追加・削除・並び替えが容易",
    "グリッドに沿って自然にレスポンシブ対応でき、モバイルでは縦積みにできる",
    "変化率の色と矢印により、数字を読まなくても良し悪しが伝わる",
    "実装コストが低く、CardコンポーネントがあるUIライブラリならすぐ作れる",
  ],
  demerits: [
    "表示できるのは要約値のみで、内訳や原因の分析には別画面が必要",
    "カードを並べすぎると「全部重要＝何も重要でない」状態に陥る",
    "比較期間（前日比か前月比か）を明示しないと数値の解釈を誤らせる",
    "解約率など「減少が良い」指標で赤/緑を機械的に割り当てると誤読を招く",
    "リアルタイム更新を多用するとチラつきや数値への不信感につながる",
  ],
  bestPractices: [
    "1画面のカードは3〜5枚に絞り、本当に意思決定に使う指標だけを置く",
    "「前月比 +12.4%」のように比較対象の期間を必ずラベルで明示する",
    "数値は桁区切り・単位・tabular-numsを使い、1.2Mなどの省略は文脈に応じて使い分ける",
    "増減の色は「良い変化＝緑」で統一し、指標の性質（解約率など）に応じて反転させる",
    "ローディングはスケルトンで数値と同じサイズを確保し、レイアウトシフトを防ぐ",
    "カード全体をクリック可能にして詳細分析画面への導線にする",
  ],
  useCases: [
    "Stripeダッシュボード — 売上・支払い成功率などのサマリーカード",
    "Shopify管理画面 — 本日の売上・注文数・セッション数の表示",
    "Google Analytics — ユーザー数・セッション・直帰率のサマリー行",
    "Vercel / AWSコンソール — リクエスト数・エラー率などの利用状況カード",
    "社内SaaSの経営ダッシュボード — MRR・解約率・NPSの定点観測",
  ],
  accessibility: [
    "増減を色だけで表現せず、矢印アイコンと「+/-」記号を必ず併記する",
    "スクリーンリーダー向けに「前月比12.4%増加」のような読み上げテキストを用意する",
    "装飾的なスパークラインやアイコンには aria-hidden=\"true\" を付ける",
    "カード全体をリンクにする場合は見出しをリンクテキストにし、入れ子のインタラクティブ要素を避ける",
    "数値の自動更新を伝えたい場合は aria-live=\"polite\" を検討し、頻繁すぎる通知は避ける",
  ],
  figma: [
    "Auto Layout（縦）でラベル・数値・変化率を組み、Fillを固定せずHugで高さを可変にする",
    "数値にはtabular figures（等幅数字）対応フォントを使い、桁変化での揺れを防ぐ",
    "増減のVariant（up / down / flat）を作り、矢印と色をセットで切り替える",
    "4枚並び・2×2・縦積みの3レイアウトをフレームで用意しレスポンシブを検証する",
    "スケルトン状態のVariantも作っておくと、ローディング仕様の共有がスムーズになる",
  ],
  code: {
    html: `<div class="kpi-card">
  <p class="kpi-label">月間売上（MRR）</p>
  <p class="kpi-value">¥4,280,000</p>
  <p class="kpi-delta up">
    <span aria-hidden="true">▲</span>
    +12.4%
    <span class="kpi-period">前月比</span>
  </p>
</div>

<style>
  .kpi-card {
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 20px 24px;
    background: #fff;
    box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
    min-width: 220px;
  }
  .kpi-label {
    margin: 0;
    font-size: 13px;
    color: #6b7280;
  }
  .kpi-value {
    margin: 8px 0 4px;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.02em;
    font-variant-numeric: tabular-nums;
  }
  .kpi-delta {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
  }
  .kpi-delta.up { color: #16a34a; }
  .kpi-delta.down { color: #dc2626; }
  .kpi-period {
    margin-left: 4px;
    font-weight: 400;
    color: #9ca3af;
  }
</style>`,
    tailwind: `<!-- 3枚横並びのKPIカード行（モバイルでは縦積み） -->
<div class="grid gap-4 sm:grid-cols-3">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <p class="text-sm text-gray-500">月間売上（MRR）</p>
    <p class="mt-2 text-3xl font-bold tracking-tight tabular-nums">
      ¥4,280,000
    </p>
    <p class="mt-1 text-sm font-semibold text-green-600">
      <span aria-hidden="true">↑</span> +12.4%
      <span class="ml-1 font-normal text-gray-400">前月比</span>
    </p>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <p class="text-sm text-gray-500">アクティブユーザー</p>
    <p class="mt-2 text-3xl font-bold tracking-tight tabular-nums">8,412</p>
    <p class="mt-1 text-sm font-semibold text-green-600">
      <span aria-hidden="true">↑</span> +3.1%
      <span class="ml-1 font-normal text-gray-400">前月比</span>
    </p>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <p class="text-sm text-gray-500">解約率</p>
    <p class="mt-2 text-3xl font-bold tracking-tight tabular-nums">1.8%</p>
    <p class="mt-1 text-sm font-semibold text-red-600">
      <span aria-hidden="true">↑</span> +0.3pt
      <span class="ml-1 font-normal text-gray-400">前月比</span>
    </p>
  </div>
</div>`,
    react: `"use client";

import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

type Trend = "up" | "down" | "flat";

export function KpiCard({
  label,
  value,
  delta,
  period = "前月比",
  positiveIsGood = true,
  trend,
}: {
  label: string;
  value: string;
  delta: string;
  period?: string;
  /** 解約率のように「減少が良い」指標では false にする */
  positiveIsGood?: boolean;
  trend: Trend;
}) {
  const isGood =
    trend === "flat" ? null : (trend === "up") === positiveIsGood;
  const deltaColor =
    isGood === null
      ? "text-gray-500"
      : isGood
        ? "text-green-600"
        : "text-red-600";
  const TrendIcon =
    trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  const trendText =
    trend === "up" ? "増加" : trend === "down" ? "減少" : "横ばい";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight tabular-nums">
        {value}
      </p>
      <p className={\`mt-1 flex items-center gap-1 text-sm font-semibold \${deltaColor}\`}>
        <TrendIcon aria-hidden className="size-4" />
        {delta}
        <span className="font-normal text-gray-400">{period}</span>
        {/* スクリーンリーダー向けの補足 */}
        <span className="sr-only">（{period}で{trendText}）</span>
      </p>
    </div>
  );
}

// 使用例:
// <div className="grid gap-4 sm:grid-cols-3">
//   <KpiCard label="月間売上（MRR）" value="¥4,280,000" delta="+12.4%" trend="up" />
//   <KpiCard label="アクティブユーザー" value="8,412" delta="+3.1%" trend="up" />
//   <KpiCard label="解約率" value="1.8%" delta="+0.3pt" trend="up" positiveIsGood={false} />
// </div>`,
    shadcn: `// npx shadcn@latest add card
// Cardをベースに、KPIカードとして組み立てる
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const kpis = [
  { label: "月間売上（MRR）", value: "¥4,280,000", delta: "+12.4%" },
  { label: "アクティブユーザー", value: "8,412", delta: "+3.1%" },
  { label: "新規登録", value: "1,024", delta: "+8.9%" },
];

export function KpiCardRow() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {kpis.map((kpi) => (
        <Card key={kpi.label}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {kpi.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold tracking-tight tabular-nums">
              {kpi.value}
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-green-600">
              <ArrowUpRight aria-hidden className="size-4" />
              {kpi.delta}
              <span className="font-normal text-muted-foreground">前月比</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}`,
  },
  related: ["sparkline", "donut-chart", "card", "data-table"],
  views: 21500,
  favorites: 900,
  collections: ["admin-ui", "saas-ui", "stripe-ui"],
  gradient: "from-rose-500/15 via-pink-500/10 to-fuchsia-500/15",
  difficulty: 1,
  updatedAt: "2026-06-14",
};
