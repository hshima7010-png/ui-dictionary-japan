import type { UIItem } from "@/types/ui";

export const radioButton: UIItem = {
  slug: "radio-button",
  name: "Radio Button",
  nameJa: "ラジオボタン",
  description:
    "複数の選択肢から1つだけを選ばせる丸い選択UI。支払い方法やプランの選択に最適。",
  category: "inputs",
  tags: ["単一選択", "フォーム", "選択肢", "input"],
  aliases: [
    "1つだけ選ぶ丸いボタン",
    "ポチッと1個だけ選ぶやつ",
    "丸をタップして選ぶ選択肢",
    "どれか1つにチェックを入れるUI",
    "支払い方法を選ぶときの丸いボタン",
    "選ぶと他が外れる選択ボタン",
  ],
  whatIs: [
    "ラジオボタン（Radio Button）は、互いに排他的な選択肢の中から「必ず1つだけ」を選ばせるためのフォームコントロールです。名前の由来は昔のカーラジオの選局ボタンで、1つのボタンを押し込むと他のボタンが物理的に飛び出して解除される仕組みをそのままUIに写し取ったものです。この「1つを選ぶと他が自動的に外れる」挙動こそがラジオボタンの本質です。",
    "同じ name 属性を持つ複数の <input type=\"radio\"> がグループを形成し、グループ内では常に1つしか選択できません。複数選択を許可するチェックボックスとは役割が明確に分かれており、「単一選択ならラジオボタン、複数選択ならチェックボックス」がフォーム設計の基本ルールとされています。",
    "支払い方法の選択、配送オプション、プランの選択、アンケートの単一回答など、選択肢が2〜6個程度で全選択肢を一覧比較させたい場面で最も力を発揮します。選択肢が多い場合はセレクトボックス、2択のオン／オフならトグルスイッチと、状況に応じた使い分けが重要です。",
  ],
  features: [
    "グループ内で常に1つだけが選択され、別の項目を選ぶと前の選択が自動解除される",
    "すべての選択肢が最初から画面上に見えているため、比較検討がしやすい",
    "HTML標準の <input type=\"radio\"> と name 属性だけでグループ化が完結する",
    "矢印キー（↑↓←→）でグループ内の選択を移動でき、Tabキーはグループ単位で移動する",
    "選択済みの丸に内側のドットが表示される、確立された視覚言語を持つ",
    "ラベルをクリックしても選択できる（label 要素との関連付け）",
  ],
  merits: [
    "選択肢が最初からすべて見えるため、ユーザーが選択前に全体を比較できる",
    "「1つしか選べない」というルールがUIの見た目だけで伝わる",
    "HTML標準要素のためJavaScript不要で動作し、フォーム送信との親和性が高い",
    "スクリーンリーダーや音声入力など支援技術のサポートが最も枯れている",
    "誤操作してもすぐ選び直せるため、心理的なコストが低い",
  ],
  demerits: [
    "選択肢が多い（目安7個以上）と縦に長くなり、画面を圧迫する",
    "デフォルトの見た目がOSやブラウザごとに異なり、カスタムデザインには工夫が必要",
    "一度選択すると「未選択」に戻せないため、任意項目には「指定しない」の選択肢が必要",
    "選択肢のラベルが長文になるとタップ領域やレイアウトの設計が難しくなる",
    "2択のオン／オフ用途ではトグルスイッチやチェックボックスと役割が混同されやすい",
  ],
  bestPractices: [
    "選択肢は2〜6個程度に抑える。それ以上はセレクトボックスやコンボボックスを検討する",
    "デフォルト選択を設定するか意図的に未選択にするかを、業務要件に基づいて決める（課金に関わる選択は未選択スタートが安全）",
    "ラベル全体（テキストを含む行全体）をクリック／タップ可能な領域にする",
    "選択肢は縦一列に並べる。横並びはどのラベルがどの丸に対応するか曖昧になりやすい",
    "「その他」を選ぶと入力欄が現れるような条件表示は、ラジオボタンの直下に配置する",
    "グループには必ず質問文（凡例）を付け、fieldset / legend で構造化する",
  ],
  useCases: [
    "Amazonの注文確認画面 — 支払い方法・配送オプションの単一選択",
    "Stripe Checkout — 支払い手段（カード／銀行振込など）の切り替え",
    "Googleフォーム — アンケートの単一回答式の質問",
    "ヤマト運輸の再配達受付 — 希望時間帯の選択",
    "SaaSの料金ページ — 月払い／年払いのプラン切り替え",
  ],
  accessibility: [
    "関連する選択肢は <fieldset> で囲み、<legend> に質問文を入れてグループの意味を伝える",
    "各 input と label は for / id で明示的に関連付け、ラベルクリックで選択できるようにする",
    "矢印キーでのグループ内移動、Tabキーでのグループ間移動という標準のキーボード操作を壊さない",
    "カスタムデザインでも input 自体は視覚的に隠すだけにして（sr-only等）、DOMからは削除しない",
    "選択状態を色だけで表現せず、内側のドットなど形状の変化でも示す",
    "エラー時は aria-describedby でエラーメッセージとグループを関連付ける",
  ],
  figma: [
    "丸い外枠と内側のドットを重ねたコンポーネントを作り、Variantsで selected / unselected / disabled を管理する",
    "ラベルとの行は Auto Layout（横方向、gap 8〜12px）で組み、ラベルの折り返しにも耐えるようにする",
    "選択状態の切り替えに Component Property（selected: boolean）を割り当てるとインスタンス操作が楽になる",
    "フォーカスリングを表現する focus 状態のVariantも用意しておくと、エンジニアへの仕様伝達が正確になる",
    "グループ全体を1つのコンポーネントにせず、単体のラジオ行コンポーネントを縦に並べる構成が再利用しやすい",
  ],
  code: {
    html: `<fieldset class="radio-group">
  <legend>お支払い方法</legend>
  <label class="radio-row">
    <input type="radio" name="payment" value="card" checked />
    <span>クレジットカード</span>
  </label>
  <label class="radio-row">
    <input type="radio" name="payment" value="bank" />
    <span>銀行振込</span>
  </label>
  <label class="radio-row">
    <input type="radio" name="payment" value="cod" />
    <span>代金引換</span>
  </label>
</fieldset>

<style>
  .radio-group {
    border: none;
    display: grid;
    gap: 8px;
  }
  .radio-group legend {
    font-weight: 600;
    margin-bottom: 8px;
  }
  .radio-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    cursor: pointer;
  }
  .radio-row:has(input:checked) {
    border-color: #4f46e5;
    background: #eef2ff;
  }
  .radio-row input {
    accent-color: #4f46e5;
    width: 18px;
    height: 18px;
  }
</style>`,
    tailwind: `<fieldset class="grid gap-2">
  <legend class="mb-2 font-semibold">お支払い方法</legend>

  <label
    class="flex cursor-pointer items-center gap-3 rounded-xl border
           border-gray-200 px-4 py-3
           has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50"
  >
    <input
      type="radio" name="payment" value="card" checked
      class="size-4 accent-indigo-600"
    />
    <span class="text-sm font-medium">クレジットカード</span>
  </label>

  <label
    class="flex cursor-pointer items-center gap-3 rounded-xl border
           border-gray-200 px-4 py-3
           has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50"
  >
    <input
      type="radio" name="payment" value="bank"
      class="size-4 accent-indigo-600"
    />
    <span class="text-sm font-medium">銀行振込</span>
  </label>
</fieldset>`,
    react: `"use client";

import { useId, useState } from "react";

type Option = { value: string; label: string; description?: string };

export function RadioGroup({
  legend,
  options,
  defaultValue,
  onChange,
}: {
  legend: string;
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}) {
  const [value, setValue] = useState(defaultValue ?? "");
  const name = useId();

  return (
    <fieldset className="grid gap-2">
      <legend className="mb-2 font-semibold">{legend}</legend>
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className={\`flex cursor-pointer items-center gap-3 rounded-xl
                        border px-4 py-3 transition-colors
                        \${checked
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-gray-300"}\`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => {
                setValue(opt.value);
                onChange?.(opt.value);
              }}
              className="size-4 accent-indigo-600"
              aria-describedby={
                opt.description ? \`\${name}-\${opt.value}-desc\` : undefined
              }
            />
            <span className="grid text-sm">
              <span className="font-medium">{opt.label}</span>
              {opt.description && (
                <span
                  id={\`\${name}-\${opt.value}-desc\`}
                  className="text-gray-500"
                >
                  {opt.description}
                </span>
              )}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}`,
    shadcn: `// npx shadcn@latest add radio-group label
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function PaymentRadioGroup() {
  return (
    <RadioGroup defaultValue="card" className="grid gap-2">
      <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
        <RadioGroupItem value="card" id="pay-card" />
        <Label htmlFor="pay-card">クレジットカード</Label>
      </div>
      <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
        <RadioGroupItem value="bank" id="pay-bank" />
        <Label htmlFor="pay-bank">銀行振込</Label>
      </div>
      <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
        <RadioGroupItem value="cod" id="pay-cod" />
        <Label htmlFor="pay-cod">代金引換</Label>
      </div>
    </RadioGroup>
  );
}`,
  },
  related: ["checkbox", "segmented-control", "select", "toggle-switch"],
  views: 21400,
  favorites: 860,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-blue-500/15 via-sky-500/10 to-indigo-500/15",
  difficulty: 1,
  updatedAt: "2026-05-14",
};
