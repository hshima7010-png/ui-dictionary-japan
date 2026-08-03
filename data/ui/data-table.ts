import type { UIItem } from "@/types/ui";

export const dataTable: UIItem = {
  slug: "data-table",
  name: "Data Table",
  nameJa: "データテーブル",
  description:
    "大量のデータを行と列で一覧・操作するUI。ソート・フィルタ・選択を備えた管理画面の中核。",
  category: "table",
  tags: ["表", "一覧", "管理画面", "ソート"],
  aliases: [
    "エクセルみたいな表",
    "並び替えできる一覧表",
    "管理画面のデータ一覧",
    "行と列でデータが並んでるやつ",
    "チェックボックスで選択できる表",
    "顧客リストの画面",
  ],
  whatIs: [
    "データテーブル（Data Table）は、大量の構造化データを行（レコード）と列（属性）のグリッドで表示し、ソート・フィルタ・検索・選択などの操作を提供するUIコンポーネントです。名前は「データ（data）を載せる表（table）」というそのままの意味で、紙の帳簿や表計算ソフトの表をWebに発展させたものです。",
    "単純なHTMLのtable要素との違いは「操作できる」ことにあります。列見出しのクリックによるソート、条件による絞り込み、チェックボックスでの複数選択と一括操作、ページネーション、列の表示切り替えなど、データを「見る」だけでなく「扱う」ための機能を統合している点が、データテーブルをデータテーブルたらしめています。",
    "管理画面（Admin UI）やSaaSのダッシュボードにおける中核コンポーネントであり、社内ツールの使い勝手はデータテーブルの出来で決まると言っても過言ではありません。ReactではTanStack Tableのようなヘッドレスライブラリを使い、表示ロジックと状態管理を分離して実装するのが現代の主流です。",
  ],
  features: [
    "列見出しクリックで昇順・降順のソートができる",
    "キーワード検索や条件フィルタで行を絞り込める",
    "チェックボックスによる行選択と一括操作（削除・エクスポート等）に対応する",
    "ページネーションや無限スクロールで大量データを分割表示する",
    "行クリックで詳細画面や詳細パネルへ遷移できる",
    "列の表示/非表示・並び替え・幅調整をユーザーがカスタマイズできるものもある",
  ],
  merits: [
    "大量のレコードを高い情報密度で一覧でき、比較・走査がしやすい",
    "ソートとフィルタで目的のデータへ素早く到達できる",
    "一括選択・一括操作により定型作業の効率が大幅に上がる",
    "列単位で情報が整列するため、数値の比較や異常値の発見が容易",
    "CSVエクスポート等と組み合わせれば業務システムの基盤として機能する",
  ],
  demerits: [
    "列数が多いとモバイルの狭い画面では破綻しやすく、専用の再設計が必要",
    "ソート・フィルタ・選択・ページネーションが絡む状態管理は実装が複雑",
    "数千行を超えるデータは仮想スクロールなどのパフォーマンス対策が必須",
    "情報密度が高いぶん、余白や罫線の設計を誤ると視認性が著しく低下する",
    "アクセシブルな実装（ソート状態の通知など）には相応の知識が必要",
  ],
  bestPractices: [
    "数値は右揃え、テキストは左揃えにし、桁を揃えて比較しやすくする",
    "行ホバーで背景色を変え、今どの行を見ているかを明確にする",
    "デフォルトのソート順は業務上もっとも意味のある列（更新日時など）にする",
    "モバイルではカード型への変換や重要列のみの表示など、再レイアウトを設計する",
    "0件・読み込み中・エラーの3状態（空状態・スケルトン・リトライ）を必ず用意する",
    "一括操作は選択件数を明示し、破壊的操作には確認ダイアログを挟む",
  ],
  useCases: [
    "Shopify管理画面の注文一覧 — ステータスバッジ・一括操作・保存済みフィルタ",
    "Stripeダッシュボードの決済一覧 — 金額の右揃えと詳細パネルへの行クリック遷移",
    "GitHubのIssue一覧 — ラベルフィルタとソートを備えたリスト型テーブル",
    "Salesforceの顧客リスト — 列カスタマイズとインライン編集",
    "社内業務システムの在庫・従業員・請求管理画面全般",
  ],
  accessibility: [
    "レイアウト目的でなく本物のtable / thead / tbody / th要素でマークアップする",
    "th要素にscope=\"col\" / scope=\"row\"を設定し、セルと見出しの関係を明示する",
    "ソート可能な列はaria-sort（ascending / descending / none）で状態を伝える",
    "ソートボタンはth内のbutton要素にし、キーボードで操作できるようにする",
    "行選択のチェックボックスには「〇〇の行を選択」と分かるaria-labelを付ける",
    "フィルタや検索による件数変化はaria-liveで通知する",
  ],
  figma: [
    "セル→行→テーブルの順にComponentを入れ子にし、行はAuto Layout（横方向）で組む",
    "列幅はセルComponentの固定幅で揃える（Auto Layoutでは列揃えが崩れやすいため）",
    "行のVariantsで「default / hover / selected」の状態を定義する",
    "ヘッダーセルにはソートアイコン（昇順/降順/なし）のVariantを用意する",
    "実データに近い長さのダミーテキストを流し込み、省略（Truncate）の挙動を確認する",
    "ステータス列はバッジComponentを流用し、デザインの一貫性を保つ",
  ],
  code: {
    html: `<table class="data-table">
  <caption class="visually-hidden">注文一覧</caption>
  <thead>
    <tr>
      <th scope="col">注文番号</th>
      <th scope="col" aria-sort="descending">
        <button type="button">注文日 ↓</button>
      </th>
      <th scope="col">顧客名</th>
      <th scope="col" class="num">金額</th>
      <th scope="col">ステータス</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#1042</td>
      <td>2026-06-15</td>
      <td>田中 太郎</td>
      <td class="num">¥12,800</td>
      <td><span class="badge success">発送済み</span></td>
    </tr>
    <tr>
      <td>#1041</td>
      <td>2026-06-14</td>
      <td>佐藤 花子</td>
      <td class="num">¥3,200</td>
      <td><span class="badge warning">未発送</span></td>
    </tr>
  </tbody>
</table>

<style>
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }
  .data-table th,
  .data-table td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  .data-table th {
    background: #f9fafb;
    font-weight: 600;
    color: #374151;
  }
  .data-table th button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
  }
  .data-table tbody tr:hover {
    background: #f9fafb;
  }
  .num {
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
  .badge {
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
  }
  .badge.success { background: #dcfce7; color: #166534; }
  .badge.warning { background: #fef9c3; color: #854d0e; }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
</style>`,
    tailwind: `<div class="overflow-x-auto rounded-2xl border border-gray-200">
  <table class="w-full text-sm">
    <caption class="sr-only">注文一覧</caption>
    <thead>
      <tr class="border-b border-gray-200 bg-gray-50 text-left text-gray-600">
        <th scope="col" class="px-4 py-3">
          <input type="checkbox" aria-label="すべての行を選択"
                 class="rounded border-gray-300" />
        </th>
        <th scope="col" class="px-4 py-3 font-semibold">注文番号</th>
        <th scope="col" class="px-4 py-3 font-semibold" aria-sort="descending">
          <button type="button" class="inline-flex items-center gap-1">
            注文日
            <span aria-hidden="true">↓</span>
          </button>
        </th>
        <th scope="col" class="px-4 py-3 font-semibold">顧客名</th>
        <th scope="col" class="px-4 py-3 text-right font-semibold">金額</th>
        <th scope="col" class="px-4 py-3 font-semibold">ステータス</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="hover:bg-gray-50">
        <td class="px-4 py-3">
          <input type="checkbox" aria-label="注文#1042の行を選択"
                 class="rounded border-gray-300" />
        </td>
        <td class="px-4 py-3 font-medium">#1042</td>
        <td class="px-4 py-3 text-gray-600">2026-06-15</td>
        <td class="px-4 py-3">田中 太郎</td>
        <td class="px-4 py-3 text-right tabular-nums">¥12,800</td>
        <td class="px-4 py-3">
          <span class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs
                       font-semibold text-green-800">発送済み</span>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="px-4 py-3">
          <input type="checkbox" aria-label="注文#1041の行を選択"
                 class="rounded border-gray-300" />
        </td>
        <td class="px-4 py-3 font-medium">#1041</td>
        <td class="px-4 py-3 text-gray-600">2026-06-14</td>
        <td class="px-4 py-3">佐藤 花子</td>
        <td class="px-4 py-3 text-right tabular-nums">¥3,200</td>
        <td class="px-4 py-3">
          <span class="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs
                       font-semibold text-yellow-800">未発送</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    react: `"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

type Order = {
  id: string;
  date: string;
  customer: string;
  amount: number;
  status: "shipped" | "pending";
};

const orders: Order[] = [
  { id: "#1042", date: "2026-06-15", customer: "田中 太郎", amount: 12800, status: "shipped" },
  { id: "#1041", date: "2026-06-14", customer: "佐藤 花子", amount: 3200, status: "pending" },
  { id: "#1040", date: "2026-06-13", customer: "鈴木 一郎", amount: 45600, status: "shipped" },
];

type SortKey = "date" | "amount";
type SortDir = "asc" | "desc";

export function OrdersTable() {
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const sorted = useMemo(() => {
    return [...orders].sort((a, b) => {
      const diff =
        sortKey === "amount"
          ? a.amount - b.amount
          : a.date.localeCompare(b.date);
      return sortDir === "asc" ? diff : -diff;
    });
  }, [sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const toggleRow = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const allSelected = selected.size === orders.length;

  const SortHeader = ({
    label,
    colKey,
    align = "left",
  }: {
    label: string;
    colKey: SortKey;
    align?: "left" | "right";
  }) => (
    <th
      scope="col"
      aria-sort={
        sortKey === colKey
          ? sortDir === "asc"
            ? "ascending"
            : "descending"
          : "none"
      }
      className={\`px-4 py-3 font-semibold \${align === "right" ? "text-right" : "text-left"}\`}
    >
      <button
        type="button"
        onClick={() => toggleSort(colKey)}
        className="inline-flex items-center gap-1 hover:text-gray-900"
      >
        {label}
        {sortKey === colKey ? (
          sortDir === "asc" ? (
            <ArrowUp aria-hidden className="size-3.5" />
          ) : (
            <ArrowDown aria-hidden className="size-3.5" />
          )
        ) : (
          <ArrowUpDown aria-hidden className="size-3.5 text-gray-400" />
        )}
      </button>
    </th>
  );

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      {selected.size > 0 && (
        <div
          aria-live="polite"
          className="flex items-center justify-between border-b border-gray-200
                     bg-indigo-50 px-4 py-2 text-sm"
        >
          <span>{selected.size}件を選択中</span>
          <button type="button" className="font-semibold text-indigo-600">
            一括発送処理
          </button>
        </div>
      )}
      <table className="w-full text-sm">
        <caption className="sr-only">注文一覧（ソート・選択可能）</caption>
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-gray-600">
            <th scope="col" className="px-4 py-3">
              <input
                type="checkbox"
                checked={allSelected}
                aria-label="すべての行を選択"
                onChange={() =>
                  setSelected(
                    allSelected ? new Set() : new Set(orders.map((o) => o.id))
                  )
                }
                className="rounded border-gray-300"
              />
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              注文番号
            </th>
            <SortHeader label="注文日" colKey="date" />
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              顧客名
            </th>
            <SortHeader label="金額" colKey="amount" align="right" />
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              ステータス
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sorted.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selected.has(order.id)}
                  aria-label={\`注文\${order.id}の行を選択\`}
                  onChange={() => toggleRow(order.id)}
                  className="rounded border-gray-300"
                />
              </td>
              <td className="px-4 py-3 font-medium">{order.id}</td>
              <td className="px-4 py-3 text-gray-600">{order.date}</td>
              <td className="px-4 py-3">{order.customer}</td>
              <td className="px-4 py-3 text-right tabular-nums">
                ¥{order.amount.toLocaleString()}
              </td>
              <td className="px-4 py-3">
                <span
                  className={\`rounded-full px-2.5 py-0.5 text-xs font-semibold \${
                    order.status === "shipped"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }\`}
                >
                  {order.status === "shipped" ? "発送済み" : "未発送"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add table badge checkbox
// 本格的なソート/フィルタはTanStack Tableとの併用が公式推奨
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  { id: "#1042", date: "2026-06-15", customer: "田中 太郎", amount: "¥12,800", shipped: true },
  { id: "#1041", date: "2026-06-14", customer: "佐藤 花子", amount: "¥3,200", shipped: false },
  { id: "#1040", date: "2026-06-13", customer: "鈴木 一郎", amount: "¥45,600", shipped: true },
];

export function OrdersTable() {
  return (
    <Table>
      <TableCaption>直近の注文一覧</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">
            <Checkbox aria-label="すべての行を選択" />
          </TableHead>
          <TableHead>注文番号</TableHead>
          <TableHead>注文日</TableHead>
          <TableHead>顧客名</TableHead>
          <TableHead className="text-right">金額</TableHead>
          <TableHead>ステータス</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <Checkbox aria-label={\`注文\${order.id}の行を選択\`} />
            </TableCell>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell className="text-right tabular-nums">
              {order.amount}
            </TableCell>
            <TableCell>
              <Badge variant={order.shipped ? "default" : "secondary"}>
                {order.shipped ? "発送済み" : "未発送"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`,
  },
  related: ["pagination", "badge", "search-bar", "skeleton", "empty-state", "dropdown-menu"],
  views: 33500,
  favorites: 1490,
  collections: ["admin-ui", "saas-ui"],
  gradient: "from-indigo-500/15 via-blue-500/10 to-sky-500/15",
  difficulty: 3,
  updatedAt: "2026-06-18",
};
