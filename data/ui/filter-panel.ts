import type { UIItem } from "@/types/ui";

export const filterPanel: UIItem = {
  slug: "filter-panel",
  name: "Filter Panel",
  nameJa: "フィルターパネル",
  description:
    "カテゴリや価格帯などの条件で一覧を絞り込むためのUI。EC検索や管理画面の必需品。",
  category: "forms",
  tags: ["絞り込み", "検索", "ファセット", "一覧"],
  aliases: [
    "商品一覧を絞り込むあの横のメニュー",
    "条件にチェックを入れて絞るやつ",
    "検索結果を狭めるサイドのパネル",
    "価格帯とかで絞り込む欄",
    "絞り込みパネル",
    "モバイルで下から出てくる絞り込み画面",
  ],
  whatIs: [
    "フィルターパネル（Filter Panel）は、大量のアイテム一覧をカテゴリ・価格帯・ブランド・評価などの条件で絞り込むためのコントロール群をまとめたUIコンポーネントです。フィルター（filter）は液体から不純物を取り除く「濾過器」を意味し、条件に合わないアイテムを濾し取って目的のものだけを残すという役割がそのまま名前になっています。属性の切り口（ファセット）ごとに絞り込むことから「ファセットナビゲーション」とも呼ばれます。",
    "チェックボックス（複数選択）、ラジオボタン（単一選択）、レンジスライダー（価格帯）、検索フィールドなど複数の入力UIを内包する複合コンポーネントであり、ECサイトの検索結果、不動産・求人サイト、管理画面のデータテーブルなど、「一覧から探す」体験の中核を担います。",
    "デスクトップでは一覧の左に常設サイドバーとして、モバイルでは「絞り込み」ボタンから開くドロワーやボトムシートとして表示するのが定番のレスポンシブ設計です。適用のタイミング（即時反映か「適用」ボタンか）、選択中条件の可視化、0件回避など、UIの見た目以上に挙動設計が体験の質を左右します。",
  ],
  features: [
    "チェックボックス・スライダー・ラジオボタンなど複数の入力UIを条件グループごとに束ねる",
    "各選択肢に該当件数（例: ナイキ (24)）を併記できる",
    "選択中の条件をチップとして一覧上部に表示し、個別解除できる",
    "「すべてクリア」で全条件を一括リセットできる",
    "条件グループをアコーディオンで開閉して縦の長さを抑えられる",
    "モバイルではドロワー／ボトムシートに切り替わるレスポンシブ構成",
  ],
  merits: [
    "大量の選択肢から目的のアイテムへ段階的に到達でき、探す時間を大幅に短縮する",
    "該当件数の表示により「絞りすぎて0件」を事前に予測できる",
    "検索キーワードを思いつけないユーザーでも、選ぶだけで絞り込める",
    "条件がURLに反映されていれば、絞り込み結果を共有・ブックマークできる",
    "ユーザーの絞り込み行動ログが、品揃えやカテゴリ設計の改善データになる",
  ],
  demerits: [
    "条件項目が多いとパネル自体が長大化し、かえって選べなくなる",
    "絞り込み結果が0件になると行き止まり感が強く、離脱の原因になる",
    "即時反映型は結果の再読み込みが頻発し、パフォーマンスとコストに影響する",
    "モバイルでは一覧と条件を同時に見られず、試行錯誤のテンポが落ちる",
    "フィルターとソート、検索キーワードの組み合わせ管理が複雑になりやすい",
  ],
  bestPractices: [
    "利用頻度の高い条件（価格・カテゴリなど）を上部に置き、まれな条件は折りたたむ",
    "選択中の条件は常に可視化し、チップの×で個別解除、「すべてクリア」で一括解除できるようにする",
    "各選択肢に件数を表示し、0件になる選択肢は非表示ではなくグレーアウトで残す",
    "デスクトップは即時反映、モバイルは「適用」ボタンでまとめて反映が使いやすい定石",
    "絞り込み状態はURLクエリパラメータに同期し、リロード・共有・ブラウザバックに耐えるようにする",
    "0件時は「条件を1つ外す」提案や類似結果の表示で行き止まりを作らない",
  ],
  useCases: [
    "Amazon / 楽天市場 — 検索結果左側のカテゴリ・価格・評価での絞り込み",
    "SUUMO — 家賃・間取り・駅徒歩などの条件を指定する物件検索",
    "ZOZOTOWN — ブランド・サイズ・カラーでの商品絞り込み",
    "Booking.com — 料金帯・施設設備・レビュースコアでのホテル絞り込み",
    "Shopify管理画面 — 注文一覧のステータス・期間フィルター",
  ],
  accessibility: [
    "条件グループは fieldset / legend で構造化し、「価格帯」などグループ名を支援技術に伝える",
    "絞り込み結果の更新は aria-live=\"polite\" で「24件に絞り込まれました」と通知する",
    "モバイルのドロワー表示時はフォーカスをパネル内に移動し、閉じたら元のボタンへ戻す",
    "チェックボックス・スライダーなど内包する各コントロールのキーボード操作を保証する",
    "選択中条件のチップの削除ボタンには「ナイキの絞り込みを解除」のような明確なラベルを付ける",
    "「絞り込み」開閉ボタンには aria-expanded と選択中の件数（例:「絞り込み 3件適用中」）を付ける",
  ],
  figma: [
    "条件グループ（見出し＋開閉＋コントロール群）を1コンポーネントにし、中身をスロット的に差し替える",
    "チェックボックス行は「ラベル＋件数」をText Propertyにした行コンポーネントで量産する",
    "デスクトップ（左サイドバー）とモバイル（ボトムシート）の2レイアウトを同一コンポーネント群から組む",
    "選択中チップの行、0件の空状態、ローディング中のスケルトンも画面として用意する",
    "実データに近い件数・長いブランド名でテキスト折り返しを確認しておく",
  ],
  code: {
    html: `<aside class="filter-panel" aria-label="絞り込み">
  <div class="filter-head">
    <h2>絞り込み</h2>
    <button type="button" class="clear">すべてクリア</button>
  </div>

  <fieldset>
    <legend>カテゴリ</legend>
    <label><input type="checkbox" name="cat" value="sneakers" checked />
      スニーカー <span class="count">(128)</span></label>
    <label><input type="checkbox" name="cat" value="boots" />
      ブーツ <span class="count">(42)</span></label>
  </fieldset>

  <fieldset>
    <legend>価格帯</legend>
    <label><input type="radio" name="price" value="u5000" />
      〜5,000円 <span class="count">(56)</span></label>
    <label><input type="radio" name="price" value="5000-10000" checked />
      5,000〜10,000円 <span class="count">(74)</span></label>
  </fieldset>

  <button type="button" class="apply">この条件で絞り込む</button>
</aside>

<style>
  .filter-panel {
    width: 260px;
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
  }
  .filter-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .filter-head h2 { font-size: 16px; margin: 0; }
  .clear {
    background: none; border: none;
    color: #4f46e5; font-size: 13px; cursor: pointer;
  }
  fieldset {
    border: none; padding: 0; margin: 0 0 20px;
    display: grid; gap: 8px;
  }
  legend { font-weight: 600; margin-bottom: 8px; padding: 0; }
  label {
    display: flex; align-items: center; gap: 8px;
    font-size: 14px; cursor: pointer;
  }
  .count { color: #9ca3af; font-size: 12px; }
  input { accent-color: #4f46e5; }
  .apply {
    width: 100%; padding: 12px;
    background: #4f46e5; color: #fff;
    border: none; border-radius: 12px;
    font-weight: 600; cursor: pointer;
  }
</style>`,
    tailwind: `<aside
  aria-label="絞り込み"
  class="w-64 rounded-2xl border border-gray-200 p-5"
>
  <div class="mb-4 flex items-center justify-between">
    <h2 class="font-bold">絞り込み</h2>
    <button type="button" class="text-sm text-indigo-600 hover:underline">
      すべてクリア
    </button>
  </div>

  <!-- 選択中の条件チップ -->
  <div class="mb-4 flex flex-wrap gap-1.5">
    <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50
                 px-2.5 py-1 text-xs font-medium text-indigo-700">
      スニーカー
      <button type="button" aria-label="スニーカーの絞り込みを解除">×</button>
    </span>
  </div>

  <fieldset class="mb-5 grid gap-2">
    <legend class="mb-2 text-sm font-semibold">カテゴリ</legend>
    <label class="flex items-center gap-2 text-sm">
      <input type="checkbox" checked class="size-4 accent-indigo-600" />
      スニーカー <span class="text-xs text-gray-400">(128)</span>
    </label>
    <label class="flex items-center gap-2 text-sm">
      <input type="checkbox" class="size-4 accent-indigo-600" />
      ブーツ <span class="text-xs text-gray-400">(42)</span>
    </label>
  </fieldset>

  <fieldset class="mb-5 grid gap-2">
    <legend class="mb-2 text-sm font-semibold">価格帯</legend>
    <label class="flex items-center gap-2 text-sm">
      <input type="radio" name="price" class="size-4 accent-indigo-600" />
      〜5,000円 <span class="text-xs text-gray-400">(56)</span>
    </label>
    <label class="flex items-center gap-2 text-sm">
      <input type="radio" name="price" checked
             class="size-4 accent-indigo-600" />
      5,000〜10,000円 <span class="text-xs text-gray-400">(74)</span>
    </label>
  </fieldset>

  <button
    type="button"
    class="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold
           text-white hover:bg-indigo-700"
  >
    この条件で絞り込む
  </button>
</aside>`,
    react: `"use client";

import { useMemo, useState } from "react";

type FilterState = {
  categories: string[];
  price: string | null;
};

const CATEGORIES = [
  { value: "sneakers", label: "スニーカー", count: 128 },
  { value: "boots", label: "ブーツ", count: 42 },
  { value: "sandals", label: "サンダル", count: 31 },
];

const PRICES = [
  { value: "u5000", label: "〜5,000円", count: 56 },
  { value: "5000-10000", label: "5,000〜10,000円", count: 74 },
  { value: "o10000", label: "10,000円〜", count: 71 },
];

export function FilterPanel({
  onApply,
}: {
  onApply?: (state: FilterState) => void;
}) {
  const [state, setState] = useState<FilterState>({
    categories: [],
    price: null,
  });

  const activeCount = useMemo(
    () => state.categories.length + (state.price ? 1 : 0),
    [state]
  );

  const toggleCategory = (value: string) =>
    setState((s) => ({
      ...s,
      categories: s.categories.includes(value)
        ? s.categories.filter((c) => c !== value)
        : [...s.categories, value],
    }));

  return (
    <aside
      aria-label="絞り込み"
      className="w-64 rounded-2xl border border-gray-200 p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">
          絞り込み
          {activeCount > 0 && (
            <span className="ml-1.5 text-sm font-normal text-indigo-600">
              {activeCount}件適用中
            </span>
          )}
        </h2>
        <button
          type="button"
          onClick={() => setState({ categories: [], price: null })}
          className="text-sm text-indigo-600 hover:underline"
        >
          すべてクリア
        </button>
      </div>

      <fieldset className="mb-5 grid gap-2">
        <legend className="mb-2 text-sm font-semibold">カテゴリ</legend>
        {CATEGORIES.map((cat) => (
          <label
            key={cat.value}
            className="flex items-center gap-2 text-sm"
          >
            <input
              type="checkbox"
              checked={state.categories.includes(cat.value)}
              onChange={() => toggleCategory(cat.value)}
              className="size-4 accent-indigo-600"
            />
            {cat.label}
            <span className="text-xs text-gray-400">({cat.count})</span>
          </label>
        ))}
      </fieldset>

      <fieldset className="mb-5 grid gap-2">
        <legend className="mb-2 text-sm font-semibold">価格帯</legend>
        {PRICES.map((p) => (
          <label key={p.value} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="price"
              checked={state.price === p.value}
              onChange={() => setState((s) => ({ ...s, price: p.value }))}
              className="size-4 accent-indigo-600"
            />
            {p.label}
            <span className="text-xs text-gray-400">({p.count})</span>
          </label>
        ))}
      </fieldset>

      <button
        type="button"
        onClick={() => onApply?.(state)}
        className="w-full rounded-xl bg-indigo-600 py-3 text-sm
                   font-semibold text-white hover:bg-indigo-700"
      >
        この条件で絞り込む
      </button>
      <div aria-live="polite" className="sr-only">
        {activeCount}件の条件が選択されています
      </div>
    </aside>
  );
}`,
    shadcn: `// shadcn/uiにFilter Panel専用コンポーネントはないため、
// Checkbox / RadioGroup / Slider / Accordion / Sheet を組み合わせて構築する
// npx shadcn@latest add checkbox radio-group slider accordion sheet button label
"use client";

import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function ProductFilterPanel() {
  return (
    <aside aria-label="絞り込み" className="w-64 rounded-2xl border p-5">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-bold">絞り込み</h2>
        <Button variant="link" size="sm" className="h-auto p-0">
          すべてクリア
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["category", "price"]}
        className="w-full"
      >
        <AccordionItem value="category">
          <AccordionTrigger>カテゴリ</AccordionTrigger>
          <AccordionContent className="grid gap-3">
            <div className="flex items-center gap-2">
              <Checkbox id="f-sneakers" defaultChecked />
              <Label htmlFor="f-sneakers" className="font-normal">
                スニーカー
                <span className="ml-1 text-xs text-muted-foreground">
                  (128)
                </span>
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="f-boots" />
              <Label htmlFor="f-boots" className="font-normal">
                ブーツ
                <span className="ml-1 text-xs text-muted-foreground">
                  (42)
                </span>
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>価格帯</AccordionTrigger>
          <AccordionContent className="pt-2">
            <Slider
              defaultValue={[3000, 15000]}
              min={0}
              max={30000}
              step={500}
              aria-label="価格帯"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="mt-4 w-full">この条件で絞り込む</Button>
    </aside>
  );
}`,
  },
  related: ["search-bar", "checkbox", "slider", "data-table"],
  views: 9800,
  favorites: 430,
  collections: ["ec-ui", "admin-ui"],
  gradient: "from-teal-500/15 via-emerald-500/10 to-indigo-500/15",
  difficulty: 2,
  updatedAt: "2026-04-27",
};
