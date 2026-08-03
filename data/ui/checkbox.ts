import type { UIItem } from "@/types/ui";

export const checkbox: UIItem = {
  slug: "checkbox",
  name: "Checkbox",
  nameJa: "チェックボックス",
  description:
    "複数選択やオンオフの意思表示に使う四角いチェック欄。フォームの最重要基本パーツのひとつ。",
  category: "inputs",
  tags: ["複数選択", "フォーム", "同意", "選択"],
  aliases: [
    "チェックを入れる四角いやつ",
    "レ点を付けるところ",
    "利用規約に同意するやつ",
    "複数選べる選択肢",
    "タスクを完了にする四角",
    "全部選択のチェック",
  ],
  whatIs: [
    "チェックボックス（Checkbox）は、四角い枠にチェックマーク（レ点）を入れて「選択／非選択」を示すUIコンポーネントです。名前は紙の申込書やアンケートで「該当する項目にチェック（check）を入れる箱（box)」という、印刷物の慣習をそのままデジタルに持ち込んだことに由来します。",
    "最大の特徴は「複数選択できる」ことです。単一選択のラジオボタンと対をなす存在で、「興味のあるジャンルを選んでください（複数可）」のような場面や、単独で「利用規約に同意する」のようなオンオフの意思表示に使われます。フォーム送信によって初めて値が確定する点が、即時反映のトグルスイッチとの本質的な違いです。",
    "また、全選択・一部選択・全解除を表現する「不確定（indeterminate）」状態という第3の状態を持てるのも特筆すべき点です。データテーブルの一括選択などで、親チェックボックスが「一部だけ選択されている」ことを横棒で示すパターンは、業務系UIの定番になっています。",
  ],
  features: [
    "選択／非選択の2状態に加え、indeterminate（不確定）の第3状態を持てる",
    "同一グループ内で複数の項目を同時に選択できる",
    "input[type=\"checkbox\"]としてHTML標準で用意されており、フォーム送信に対応する",
    "ラベルをクリックしてもオンオフできる（label関連付けが前提）",
    "データテーブルの行選択・一括選択と組み合わせて使われる",
    "Spaceキーで切り替えられ、キーボード操作が標準で保証される",
  ],
  merits: [
    "紙のフォーム由来のメタファーで、あらゆる年齢層に直感的に伝わる",
    "複数選択の意図が明確で、ラジオボタンとの使い分けが浸透している",
    "HTML標準要素のため実装コストが低く、アクセシビリティも担保しやすい",
    "indeterminate状態により階層的な選択状態を表現できる",
    "選択状態が送信まで確定しないため、ユーザーが安心して試行錯誤できる",
  ],
  demerits: [
    "デフォルトの見た目がブラウザごとに異なり、デザイン調整に一手間かかる",
    "選択肢が多すぎると視認性が落ち、スクロールの長いフォームになりがち",
    "「同意しない場合はチェック」のような否定形ラベルは誤操作の温床になる",
    "小さすぎるチェックボックスはモバイルでタップしづらい",
    "即時反映される設定に使うと、保存が必要かどうかが曖昧になる",
  ],
  bestPractices: [
    "必ず<label>と関連付け、テキスト部分のクリックでも切り替えられるようにする",
    "ラベルは肯定形で書き、チェックを入れた結果が明確に分かる文言にする",
    "デフォルトでチェック済みにするのは、ユーザーの利益になる場合だけに限定する",
    "一覧の一括選択には親チェックボックス＋indeterminate状態を実装する",
    "タップ領域はラベル込みで44px以上の高さを確保する",
    "「その他」を選んだら入力欄を出すなど、選択に応じた開示は控えめに行う",
  ],
  useCases: [
    "Gmailのメール一覧 — 行頭のチェックボックスによる複数選択と一括操作",
    "ECサイトの絞り込みパネル — ブランド・サイズ・色の複数条件フィルター",
    "会員登録フォーム — 「利用規約に同意する」の同意チェック",
    "TodoアプリのタスクUI — 完了・未完了の切り替え",
    "Googleフォームのアンケート — 「当てはまるものをすべて選択」設問",
  ],
  accessibility: [
    "input[type=\"checkbox\"]と<label for>を関連付け、支援技術と操作性を両立する",
    "カスタムデザインでもinput自体は削除せず、sr-onlyで視覚的にのみ隠す",
    "グループには<fieldset>と<legend>（またはrole=\"group\"＋aria-labelledby）で見出しを付ける",
    "indeterminate状態はJSでel.indeterminate = trueを設定し、aria-checked=\"mixed\"相当を伝える",
    "エラー時はaria-invalidとaria-describedbyでエラーメッセージを関連付ける",
    "チェックマークと枠線のコントラスト比を3:1以上確保する",
  ],
  figma: [
    "20pxの正方形＋ラベルをAuto Layoutで組み、「checked / unchecked / indeterminate」のVariantを作る",
    "チェックマークはアイコンではなくベクターで描くと、サイズ変更時の破綻が少ない",
    "hover / focus / disabled の状態も掛け合わせ、Interactive Componentsでクリック切り替えを設定する",
    "エラー状態（赤枠＋メッセージ）のVariantをフォーム検証用に用意しておく",
    "チェックボックス群を並べる場合はgap 12〜16pxのAuto Layoutでリスト化する",
  ],
  code: {
    html: `<label class="check-row">
  <input type="checkbox" class="check-input" />
  <span class="check-box" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
  <span>利用規約に同意する</span>
</label>

<style>
  .check-row {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;
  }
  .check-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .check-box {
    width: 20px;
    height: 20px;
    border: 2px solid #d1d5db;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.15s;
  }
  .check-input:checked + .check-box {
    background: #2563eb;
    border-color: #2563eb;
    color: #fff;
  }
  .check-input:focus-visible + .check-box {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
  .check-box svg { width: 14px; height: 14px; }
</style>`,
    tailwind: `<label class="inline-flex cursor-pointer items-center gap-2.5 text-sm">
  <input type="checkbox" class="peer sr-only" />
  <span
    aria-hidden="true"
    class="flex size-5 items-center justify-center rounded-md border-2
           border-gray-300 text-transparent transition
           peer-checked:border-blue-600 peer-checked:bg-blue-600
           peer-checked:text-white
           peer-focus-visible:outline peer-focus-visible:outline-2
           peer-focus-visible:outline-offset-2
           peer-focus-visible:outline-blue-600"
  >
    <svg class="size-3.5" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="3" stroke-linecap="round"
         stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
  利用規約に同意する
</label>`,
    react: `"use client";

import { useEffect, useRef, useState } from "react";

const ITEMS = ["デザイン", "エンジニアリング", "マーケティング"];

export function CheckboxGroup() {
  const [selected, setSelected] = useState<string[]>([]);
  const parentRef = useRef<HTMLInputElement>(null);

  const allChecked = selected.length === ITEMS.length;
  const someChecked = selected.length > 0 && !allChecked;

  useEffect(() => {
    if (parentRef.current) parentRef.current.indeterminate = someChecked;
  }, [someChecked]);

  return (
    <fieldset className="space-y-3 rounded-xl border border-gray-200 p-4">
      <legend className="px-1 text-sm font-semibold">興味のある分野</legend>
      <label className="flex items-center gap-2.5 text-sm font-medium">
        <input
          ref={parentRef}
          type="checkbox"
          checked={allChecked}
          aria-checked={someChecked ? "mixed" : allChecked}
          onChange={() => setSelected(allChecked ? [] : [...ITEMS])}
          className="size-4.5 accent-blue-600"
        />
        すべて選択
      </label>
      {ITEMS.map((item) => (
        <label key={item} className="flex items-center gap-2.5 pl-6 text-sm">
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={(e) =>
              setSelected((prev) =>
                e.target.checked
                  ? [...prev, item]
                  : prev.filter((v) => v !== item)
              )
            }
            className="size-4.5 accent-blue-600"
          />
          {item}
        </label>
      ))}
    </fieldset>
  );
}`,
    shadcn: `// npx shadcn@latest add checkbox label
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function TermsCheckbox() {
  return (
    <div className="flex items-start gap-3">
      <Checkbox id="terms" />
      <div className="grid gap-1">
        <Label htmlFor="terms">利用規約に同意する</Label>
        <p className="text-sm text-muted-foreground">
          <a href="/terms" className="underline">利用規約</a>
          をご確認のうえ、チェックを入れてください。
        </p>
      </div>
    </div>
  );
}`,
  },
  related: ["radio-button", "toggle-switch", "form-validation", "filter-panel"],
  views: 43200,
  favorites: 1690,
  collections: ["saas-ui", "ec-ui", "admin-ui"],
  gradient: "from-indigo-500/15 via-sky-500/10 to-blue-500/15",
  difficulty: 1,
  updatedAt: "2026-06-28",
};
