import type { UIItem } from "@/types/ui";

export const select: UIItem = {
  slug: "select",
  name: "Select",
  nameJa: "セレクトボックス",
  description:
    "クリックすると選択肢の一覧が開き、1つを選べるドロップダウン型の入力UI。",
  category: "inputs",
  tags: ["単一選択", "ドロップダウン", "フォーム", "input"],
  aliases: [
    "押すと選択肢が出てくるやつ",
    "下に開くリストから選ぶUI",
    "都道府県を選ぶあのメニュー",
    "プルダウンメニュー",
    "ドロップダウンリスト",
    "クリックで一覧が開く選択欄",
  ],
  whatIs: [
    "セレクトボックス（Select）は、クリック／タップすると選択肢の一覧（リストボックス）がドロップダウン表示され、その中から1つを選ばせるフォームコントロールです。名前は英語の select（選ぶ）に由来し、HTMLの <select> 要素として1990年代のフォーム仕様の初期から存在します。日本では「プルダウンメニュー」の呼び名も広く定着しています。",
    "ラジオボタンと同じ単一選択のUIですが、選択肢を折りたたんで1行分のスペースに収められる点が最大の違いです。都道府県（47個）や生まれ年のように選択肢が多く、かつすべてを一覧表示する必要がない場面で使われます。逆に選択肢が4個以下なら、隠さずに見せられるラジオボタンやセグメンテッドコントロールの方が操作数が少なく済みます。",
    "ネイティブの <select> はOSごとに最適化されたピッカー（iOSのドラム式など）が自動で提供される一方、見た目のカスタマイズ性が低いという弱点があります。そのためRadix UIやshadcn/uiのようなカスタムSelect実装が普及しましたが、その場合はキーボード操作やARIA対応を自前で担保する必要があります。",
  ],
  features: [
    "閉じているときは1行分のスペースしか取らず、開くと選択肢一覧が表示される",
    "ネイティブ <select> はモバイルOS標準のピッカーUIが自動で使われる",
    "文字キーの入力で選択肢へジャンプできる（タイプアヘッド）",
    "optgroup による選択肢のグループ化に対応する",
    "選択済みの値がトリガー部分に常時表示される",
    "矢印キー・Enter・Escでの完全なキーボード操作が標準で備わっている",
  ],
  merits: [
    "選択肢が何十個あっても画面上は1行に収まり、フォームがコンパクトになる",
    "ネイティブ要素ならJavaScript不要で、OSごとに最適な操作感が提供される",
    "「ここから1つ選ぶ」という慣習が広く浸透しており学習コストがない",
    "無効な値を入力される心配がなく、バリデーションが単純になる",
    "デフォルト値の提示により、推奨の選択肢へ自然に誘導できる",
  ],
  demerits: [
    "選択肢が開くまで中身が見えず、比較検討には向かない",
    "選択肢が多すぎると目的の項目を探すのに時間がかかる（検索機能がない）",
    "ネイティブ要素はドロップダウン部分のスタイルをほぼ変更できない",
    "モバイルでは開く→スクロール→選ぶ→閉じると操作ステップが多い",
    "カスタム実装はアクセシビリティの再現コストが高く、品質差が出やすい",
    "選択肢が2〜3個しかない場合は、かえって操作数を増やす過剰なUIになる",
  ],
  bestPractices: [
    "選択肢が5個未満ならラジオボタン、20個を超えるなら検索できるコンボボックスを検討する",
    "プレースホルダーは「選択してください」で終わらせず、「都道府県を選択」のように対象を明示する",
    "選択肢はアルファベット順・五十音順・使用頻度順など、ユーザーが予測できる順序で並べる",
    "よく選ばれる選択肢（例: 日本の国番号）は先頭に複製して配置する",
    "ラベルを <label> で関連付け、ラベルクリックでもフォーカスが当たるようにする",
    "国・都道府県・日付など、より適した専用UI（住所自動補完やデートピッカー）で置き換えられないか先に検討する",
  ],
  useCases: [
    "ECサイトの配送先入力 — 都道府県の選択",
    "Shopifyの管理画面 — 商品のステータスや通貨の切り替え",
    "GitHub — Issue作成時のラベル・マイルストーン選択",
    "航空券予約サイト — 搭乗者数や座席クラスの選択",
    "Googleアナリティクス — 期間やセグメントの切り替え",
  ],
  accessibility: [
    "ネイティブ <select> を使えばキーボード操作・スクリーンリーダー対応が標準で担保される",
    "カスタム実装では role=\"combobox\" と aria-expanded、リストに role=\"listbox\"、各項目に role=\"option\" を付与する",
    "選択中の項目には aria-selected=\"true\" を設定し、aria-activedescendant で現在位置を伝える",
    "矢印キーでの項目移動、Enterで確定、Escで閉じる操作を必ず実装する",
    "ラベルは label 要素または aria-labelledby で関連付け、プレースホルダーをラベル代わりにしない",
    "ドロップダウンを開いた際にフォーカスを失わないよう、フォーカス管理を厳密に行う",
  ],
  figma: [
    "トリガー（閉じた状態）とドロップダウンパネルを別コンポーネントに分け、開閉をVariantsで管理する",
    "パネルは Auto Layout（縦方向）で項目を並べ、項目コンポーネントに default / hover / selected のVariantを持たせる",
    "パネルには十分な影（drop-shadow）を付け、下のコンテンツより浮いて見えるようにする",
    "開いた状態のプロトタイプは「Open overlay」よりVariant切り替え＋Smart Animateの方が管理しやすい",
    "トリガー内のテキストには「選択済み」「プレースホルダー」両方の状態を用意し、色の差（gray-400など）で区別する",
  ],
  code: {
    html: `<label for="prefecture" class="select-label">都道府県</label>
<div class="select-wrap">
  <select id="prefecture" name="prefecture">
    <option value="" disabled selected>都道府県を選択</option>
    <option value="tokyo">東京都</option>
    <option value="osaka">大阪府</option>
    <option value="aichi">愛知県</option>
    <option value="fukuoka">福岡県</option>
  </select>
</div>

<style>
  .select-label {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .select-wrap {
    position: relative;
  }
  .select-wrap select {
    width: 100%;
    appearance: none;
    padding: 12px 40px 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .select-wrap::after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    width: 8px;
    height: 8px;
    border-right: 2px solid #6b7280;
    border-bottom: 2px solid #6b7280;
    transform: translateY(-70%) rotate(45deg);
    pointer-events: none;
  }
  .select-wrap select:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
</style>`,
    tailwind: `<label for="prefecture" class="mb-1.5 block text-sm font-semibold">
  都道府県
</label>
<div class="relative">
  <select
    id="prefecture"
    name="prefecture"
    class="w-full cursor-pointer appearance-none rounded-xl border
           border-gray-200 bg-white py-3 pl-4 pr-10 text-sm
           focus:outline-none focus:ring-2 focus:ring-indigo-600"
  >
    <option value="" disabled selected>都道府県を選択</option>
    <option value="tokyo">東京都</option>
    <option value="osaka">大阪府</option>
    <option value="aichi">愛知県</option>
  </select>
  <svg
    class="pointer-events-none absolute right-3 top-1/2 size-4
           -translate-y-1/2 text-gray-500"
    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
  </svg>
</div>`,
    react: `"use client";

import { useId } from "react";
import { ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

export function SelectField({
  label,
  options,
  placeholder = "選択してください",
  value,
  onChange,
  required,
}: {
  label: string;
  options: Option[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-red-600">*</span>
        )}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          required={required}
          aria-required={required || undefined}
          onChange={(e) => onChange(e.target.value)}
          className={\`w-full cursor-pointer appearance-none rounded-xl
                      border border-gray-200 bg-white py-3 pl-4 pr-10
                      text-sm focus:outline-none focus:ring-2
                      focus:ring-indigo-600
                      \${value === "" ? "text-gray-400" : "text-gray-900"}\`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 size-4
                     -translate-y-1/2 text-gray-500"
        />
      </div>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add select label
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PrefectureSelect() {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor="prefecture">都道府県</Label>
      <Select>
        <SelectTrigger id="prefecture" className="w-full">
          <SelectValue placeholder="都道府県を選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>関東</SelectLabel>
            <SelectItem value="tokyo">東京都</SelectItem>
            <SelectItem value="kanagawa">神奈川県</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>関西</SelectLabel>
            <SelectItem value="osaka">大阪府</SelectItem>
            <SelectItem value="kyoto">京都府</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}`,
  },
  related: ["dropdown-menu", "combobox", "radio-button", "date-picker"],
  views: 43600,
  favorites: 1740,
  collections: ["admin-ui", "saas-ui", "ec-ui"],
  gradient: "from-indigo-500/15 via-blue-500/10 to-cyan-500/15",
  difficulty: 1,
  updatedAt: "2026-07-02",
};
