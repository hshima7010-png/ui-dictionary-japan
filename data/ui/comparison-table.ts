import type { UIItem } from "@/types/ui";

export const comparisonTable: UIItem = {
  slug: "comparison-table",
  name: "Comparison Table",
  nameJa: "比較表",
  description:
    "複数のプラン・商品を項目ごとに横並びで比較するテーブルUI。料金ページの定番。",
  category: "pricing",
  tags: ["比較", "料金", "プラン", "テーブル", "意思決定"],
  aliases: [
    "プランを横に並べて〇×で比べる表",
    "料金ページの機能比較のやつ",
    "どのプランに何が入っているか分かる表",
    "チェックマークが並んでいる比較の表",
    "商品スペックを見比べる表",
    "松竹梅を並べたやつ",
  ],
  whatIs: [
    "比較表（Comparison Table）は、複数のプランや商品を列に、機能や仕様などの比較項目を行に配置し、チェックマークや数値で違いをひと目で示すテーブルUIです。「Compare（比較する）」に由来する名前の通り、ユーザーの「どれを選べばいいのか」という意思決定を支援することが唯一かつ最大の目的です。",
    "SaaSの料金ページでは、上部のプライシングカードの下に詳細な機能比較表を置く構成が定番です。Stripeや Notion、Slackなどの料金ページはこのパターンの代表例で、「Free / Pro / Enterprise」の列と機能カテゴリごとの行グループで構成されています。ECの文脈でも、Amazonの商品ページにある「類似商品と比較する」やShopifyアプリの比較サイトなど、購入前の検討段階で広く使われています。",
    "実装上の最大の論点はモバイル対応です。列数が多い表は狭い画面に収まらないため、横スクロール、列の絞り込み、カード形式への変形などの戦略が必要になります。また「おすすめプラン」の列を視覚的に強調して選択を後押しするのも、コンバージョン設計上の重要なテクニックです。",
  ],
  features: [
    "プラン・商品を列、比較項目を行に配置したマトリクス構造",
    "対応状況をチェックマーク（✓）・ダッシュ（—）・数値で表現する",
    "「人気」「おすすめ」バッジで特定の列をハイライトできる",
    "機能をカテゴリごとの行グループに分け、見出し行で区切ることが多い",
    "ヘッダー行を position: sticky で固定し、スクロールしてもプラン名が見え続けるようにできる",
    "モバイルでは横スクロールや2プラン選択式に切り替えるレスポンシブ設計が必要",
  ],
  merits: [
    "複数の選択肢の差分が一覧でき、ユーザーの比較検討時間を大幅に短縮できる",
    "「上位プランには何が増えるのか」が明確になり、アップセルの根拠を示せる",
    "情報が構造化されるため、営業資料や問い合わせ対応の負担も減る",
    "table要素で正しくマークアップすれば、支援技術や検索エンジンにも構造が伝わる",
    "おすすめ列の強調により、意思決定に迷うユーザーを自然に誘導できる",
  ],
  demerits: [
    "行・列が多くなると視線移動が激しくなり、かえって認知負荷が上がる",
    "モバイルの狭い画面では列が収まらず、レスポンシブ対応の設計コストが高い",
    "「✓」の意味がプランごとに微妙に異なる（制限付き対応など）と誤解を招く",
    "全機能を羅列すると差別化ポイントがノイズに埋もれ、比較の目的を失う",
    "メンテナンスを怠ると実際の提供機能と表の内容がズレやすい",
  ],
  bestPractices: [
    "行数は本当に意思決定に関わる項目に絞り、詳細はツールチップや別ページへ逃がす",
    "おすすめプランの列は背景色・バッジ・ボタンの強調で1列だけ目立たせる",
    "ヘッダー行（プラン名とCTA）をsticky化し、長い表でも常に申し込み導線を見せる",
    "「✓」だけでなく「5ユーザーまで」「無制限」など具体的な値を書ける行は値で書く",
    "行にhoverハイライトを付け、横方向の視線移動を補助する",
    "モバイルでは「比較する2プランを選ぶ」UIや、プランごとのアコーディオンに変形させる",
  ],
  useCases: [
    "Stripe — 料金ページの機能比較表（カテゴリごとの行グループ）",
    "Notion — Free / Plus / Business / Enterpriseの機能比較",
    "Apple — iPhone各モデルの「モデルを比較」ページ",
    "Amazon — 商品詳細ページの「類似商品と比較する」テーブル",
    "楽天モバイル・キャリア各社 — 料金プラン比較表",
  ],
  accessibility: [
    "<table> と <th scope=\"col\"> / <th scope=\"row\"> で行列の見出しを正しく関連付ける",
    "<caption> で「プラン機能比較表」など表の目的を説明する",
    "✓や—のアイコンには aria-label（「対応」「非対応」）を付け、色や記号だけに依存しない",
    "横スクロール領域には tabindex=\"0\" と role=\"region\" + aria-label を付け、キーボードでスクロールできるようにする",
    "おすすめ列の強調は色だけでなく「人気」テキストバッジを併用する",
  ],
  figma: [
    "1行をAuto Layout（横）で組み、行Componentを縦に積むと列幅の管理がしやすい",
    "セルの状態（✓ / — / テキスト）をVariantsにしておくと表の組み替えが速い",
    "列幅は各セルに固定幅（例: 160px）を与えて揃える。Fill Containerだと列がガタつきやすい",
    "おすすめ列はFrameを重ねて背景とborderを付け、Send to Backで表の下に敷く",
    "モバイル用に2列版のVariantを別Frameで作り、ブレークポイントごとの見え方を検証する",
  ],
  code: {
    html: `<div class="table-wrap" role="region" aria-label="プラン機能比較表" tabindex="0">
  <table class="compare">
    <caption>プラン機能比較表</caption>
    <thead>
      <tr>
        <th scope="col">機能</th>
        <th scope="col">Free</th>
        <th scope="col" class="featured">Pro <span class="badge">人気</span></th>
        <th scope="col">Enterprise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">プロジェクト数</th>
        <td>3</td>
        <td class="featured">無制限</td>
        <td>無制限</td>
      </tr>
      <tr>
        <th scope="row">共同編集</th>
        <td><span aria-label="非対応">—</span></td>
        <td class="featured"><span aria-label="対応">✓</span></td>
        <td><span aria-label="対応">✓</span></td>
      </tr>
      <tr>
        <th scope="row">SSO / SAML</th>
        <td><span aria-label="非対応">—</span></td>
        <td class="featured"><span aria-label="非対応">—</span></td>
        <td><span aria-label="対応">✓</span></td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .table-wrap { overflow-x: auto; }
  .compare { border-collapse: collapse; min-width: 640px; width: 100%; }
  .compare caption { text-align: left; font-weight: 700; margin-bottom: 12px; }
  .compare th, .compare td {
    padding: 12px 16px;
    text-align: center;
    border-bottom: 1px solid #e5e7eb;
    font-size: 14px;
  }
  .compare th[scope="row"] { text-align: left; font-weight: 500; }
  .compare thead th { position: sticky; top: 0; background: #fff; }
  .compare .featured { background: #fdf4ff; }
  .compare .badge {
    background: #d946ef;
    color: #fff;
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 9999px;
    margin-left: 4px;
  }
  .compare tbody tr:hover td, .compare tbody tr:hover th { background: #fafafa; }
  .compare tbody tr:hover .featured { background: #fae8ff; }
</style>`,
    tailwind: `<div role="region" aria-label="プラン機能比較表" tabindex="0"
     class="overflow-x-auto rounded-2xl border border-gray-200">
  <table class="w-full min-w-[640px] border-collapse text-sm">
    <caption class="sr-only">プラン機能比較表</caption>
    <thead>
      <tr class="border-b border-gray-200">
        <th scope="col" class="px-4 py-3 text-left font-semibold">機能</th>
        <th scope="col" class="px-4 py-3 font-semibold">Free</th>
        <th scope="col" class="bg-fuchsia-50 px-4 py-3 font-semibold">
          Pro
          <span class="ml-1 rounded-full bg-fuchsia-500 px-2 py-0.5
                       text-[11px] font-medium text-white">人気</span>
        </th>
        <th scope="col" class="px-4 py-3 font-semibold">Enterprise</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="hover:bg-gray-50">
        <th scope="row" class="px-4 py-3 text-left font-medium">プロジェクト数</th>
        <td class="px-4 py-3 text-center text-gray-600">3</td>
        <td class="bg-fuchsia-50/60 px-4 py-3 text-center font-medium">無制限</td>
        <td class="px-4 py-3 text-center text-gray-600">無制限</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <th scope="row" class="px-4 py-3 text-left font-medium">共同編集</th>
        <td class="px-4 py-3 text-center"><span aria-label="非対応" class="text-gray-300">—</span></td>
        <td class="bg-fuchsia-50/60 px-4 py-3 text-center">
          <span aria-label="対応" class="font-bold text-fuchsia-600">✓</span>
        </td>
        <td class="px-4 py-3 text-center"><span aria-label="対応" class="font-bold text-gray-700">✓</span></td>
      </tr>
      <tr class="hover:bg-gray-50">
        <th scope="row" class="px-4 py-3 text-left font-medium">SSO / SAML</th>
        <td class="px-4 py-3 text-center"><span aria-label="非対応" class="text-gray-300">—</span></td>
        <td class="bg-fuchsia-50/60 px-4 py-3 text-center"><span aria-label="非対応" class="text-gray-300">—</span></td>
        <td class="px-4 py-3 text-center"><span aria-label="対応" class="font-bold text-gray-700">✓</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    react: `"use client";

import { Check, Minus } from "lucide-react";

type Cell = boolean | string;
type Row = { label: string; values: Cell[] };

const plans = ["Free", "Pro", "Enterprise"];
const featuredIndex = 1;

const rows: Row[] = [
  { label: "プロジェクト数", values: ["3", "無制限", "無制限"] },
  { label: "共同編集", values: [false, true, true] },
  { label: "SSO / SAML", values: [false, false, true] },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") return <span>{value}</span>;
  return value ? (
    <Check aria-label="対応" className="mx-auto size-4 text-fuchsia-600" />
  ) : (
    <Minus aria-label="非対応" className="mx-auto size-4 text-gray-300" />
  );
}

export function ComparisonTable() {
  return (
    <div
      role="region"
      aria-label="プラン機能比較表"
      tabIndex={0}
      className="overflow-x-auto rounded-2xl border border-gray-200"
    >
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <caption className="sr-only">プラン機能比較表</caption>
        <thead>
          <tr className="border-b border-gray-200">
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              機能
            </th>
            {plans.map((plan, i) => (
              <th
                key={plan}
                scope="col"
                className={\`px-4 py-3 font-semibold \${
                  i === featuredIndex ? "bg-fuchsia-50" : ""
                }\`}
              >
                {plan}
                {i === featuredIndex && (
                  <span className="ml-1 rounded-full bg-fuchsia-500 px-2 py-0.5 text-[11px] font-medium text-white">
                    人気
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row) => (
            <tr key={row.label} className="hover:bg-gray-50">
              <th scope="row" className="px-4 py-3 text-left font-medium">
                {row.label}
              </th>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={\`px-4 py-3 text-center \${
                    i === featuredIndex ? "bg-fuchsia-50/60" : ""
                  }\`}
                >
                  <CellValue value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add table badge
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, Minus } from "lucide-react";

const rows = [
  { label: "プロジェクト数", values: ["3", "無制限", "無制限"] },
  { label: "共同編集", values: [false, true, true] },
  { label: "SSO / SAML", values: [false, false, true] },
] as const;

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <>{value}</>;
  return value ? (
    <Check aria-label="対応" className="mx-auto size-4 text-fuchsia-600" />
  ) : (
    <Minus aria-label="非対応" className="mx-auto size-4 text-muted-foreground/40" />
  );
}

export function PlanComparisonTable() {
  return (
    <Table>
      <TableCaption>プラン機能比較表</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>機能</TableHead>
          <TableHead className="text-center">Free</TableHead>
          <TableHead className="bg-fuchsia-50 text-center">
            Pro <Badge className="ml-1 bg-fuchsia-500">人気</Badge>
          </TableHead>
          <TableHead className="text-center">Enterprise</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.label}>
            <TableCell className="font-medium">{row.label}</TableCell>
            {row.values.map((value, i) => (
              <TableCell
                key={i}
                className={\`text-center \${i === 1 ? "bg-fuchsia-50/60" : ""}\`}
              >
                <Cell value={value} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`,
  },
  related: ["pricing-table", "data-table", "tabs", "faq"],
  views: 21600,
  favorites: 890,
  collections: ["saas-ui", "stripe-ui"],
  gradient: "from-pink-500/15 via-fuchsia-500/10 to-purple-500/15",
  difficulty: 2,
  updatedAt: "2026-04-22",
};
