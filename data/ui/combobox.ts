import type { UIItem } from "@/types/ui";

export const combobox: UIItem = {
  slug: "combobox",
  name: "Combobox",
  nameJa: "コンボボックス",
  description:
    "テキスト入力で選択肢を絞り込めるセレクトUI。大量の選択肢から素早く選ばせたいときに。",
  category: "inputs",
  tags: ["検索", "絞り込み", "オートコンプリート", "input"],
  aliases: [
    "文字を打つと候補が絞られる選択欄",
    "検索できるプルダウン",
    "入力すると候補が出てくるやつ",
    "オートコンプリート付きのセレクト",
    "国名とかを打って選ぶあの入力欄",
    "サジェストが出る入力ボックス",
  ],
  whatIs: [
    "コンボボックス（Combobox）は、テキスト入力欄とドロップダウンリストを組み合わせたUIコンポーネントです。名前は combination box（組み合わせボックス）の略で、「テキストボックス」と「リストボックス」という2つの部品をコンボ（合体）させたことに由来します。Windows 3.x時代のGUIフレームワークから存在する歴史あるパターンです。",
    "文字を入力するとリアルタイムに選択肢が絞り込まれるため、国名（約200件）、社員名、タイムゾーンのように選択肢が数十〜数千件に及ぶ場面で真価を発揮します。セレクトボックスの「入力ミスがない」という利点と、テキストフィールドの「素早く目的の値へ到達できる」という利点を兼ね備えています。",
    "WAI-ARIAでは Combobox Pattern として仕様化されており、選択肢以外の自由入力を許すか否か、候補の自動補完の挙動などに複数のバリエーションがあります。実装難度は入力系UIの中でも高い部類で、Radix UIやHeadless UI、cmdkなどのヘッドレスライブラリを土台にするのが現実的です。",
  ],
  features: [
    "テキスト入力に応じて候補リストがリアルタイムに絞り込まれる",
    "矢印キーで候補を移動し、Enterで確定できる",
    "選択肢のみ許可する「厳密型」と自由入力も許す「自由型」の2系統がある",
    "入力欄内での自動補完（inline autocomplete）を組み合わせられる",
    "候補が0件のときの空状態（「該当なし」）を表示できる",
    "非同期検索と組み合わせてサーバーサイドの大量データも扱える",
  ],
  merits: [
    "数百件以上の選択肢でも、数文字の入力で目的の項目へ即座に到達できる",
    "キーボードだけで入力→絞り込み→確定まで完結し、パワーユーザーの操作が速い",
    "セレクトボックスと違い、うろ覚えの名称でも部分一致で見つけられる",
    "自由入力型なら「リストにない値」の新規作成フローへ自然につなげられる",
    "タグ入力やコマンドパレットなど、派生UIへの応用が利く",
  ],
  demerits: [
    "キーボード操作・ARIA属性・フォーカス管理など実装難度が入力系UIで最高クラス",
    "何を入力すべきかのヒントがないと、ユーザーが最初の一文字を打てず戸惑う",
    "モバイルではソフトウェアキーボードと候補リストが画面を奪い合う",
    "厳密型か自由型かが見た目から判別できず、挙動の予測がつきにくい",
    "IME入力（日本語）との相性問題が起きやすく、変換確定とEnter確定の衝突に注意が必要",
  ],
  bestPractices: [
    "選択肢が20件未満なら通常のセレクトボックスで十分。コンボボックスは件数が多いときの手段と考える",
    "部分一致・かな／カナ・ローマ字ゆらぎなど、日本語ユーザーの入力に寛容なマッチングにする",
    "候補0件のときは「該当する項目がありません」を明示し、自由型なら「〜を新規作成」を提示する",
    "IMEの変換中（composition中）はEnterを候補確定として扱わないようにする",
    "候補リストは5〜8件程度が見える高さにし、それ以上はスクロールさせる",
    "非同期検索ではローディング表示とデバウンス（200〜300ms）を入れ、リクエストを間引く",
  ],
  useCases: [
    "Stripeダッシュボード — 顧客・商品IDの検索付き選択",
    "GitHub — リポジトリのラベルやアサイン先の絞り込み選択",
    "Notion — ページリンクやメンション先の検索選択",
    "航空券予約サイト — 出発地・到着地の空港名入力",
    "Slack — チャンネル・メンバー切り替えのクイックスイッチャー",
  ],
  accessibility: [
    "入力欄に role=\"combobox\"、aria-expanded、aria-controls を付与し、リストと関連付ける",
    "候補リストは role=\"listbox\"、各候補は role=\"option\" とし、ハイライト中の候補を aria-activedescendant で伝える",
    "aria-autocomplete=\"list\" など補完方式を宣言し、支援技術に挙動を予告する",
    "矢印キーで候補移動、Enterで確定、Escで閉じる＋入力復帰の操作を完全に実装する",
    "候補の絞り込み結果件数を aria-live で通知すると、視覚に頼らず状況が分かる",
    "フォーカスは常に入力欄に残し、候補リストへ物理フォーカスを移動させない設計が推奨される",
  ],
  figma: [
    "入力欄・候補リスト・候補行の3階層でコンポーネントを分割し、それぞれにVariantsを持たせる",
    "状態は「閉」「開（候補あり）」「開（0件）」「ローディング」の4つを最低限用意する",
    "候補行には hover / active（キーボードハイライト）/ selected の状態を作り、色を分ける",
    "入力テキストとプレースホルダーはText Propertyにしておくと画面ごとの差し替えが速い",
    "プロトタイプでは入力→絞り込みの再現が難しいため、代表的な2〜3パターンの静的画面で流れを見せる",
  ],
  code: {
    html: `<!-- HTML標準のdatalistによる簡易コンボボックス -->
<label for="country" class="cb-label">国名</label>
<input
  id="country"
  name="country"
  list="country-list"
  placeholder="国名を入力して検索"
  autocomplete="off"
  class="cb-input"
/>
<datalist id="country-list">
  <option value="日本"></option>
  <option value="アメリカ合衆国"></option>
  <option value="イギリス"></option>
  <option value="ドイツ"></option>
  <option value="フランス"></option>
</datalist>

<style>
  .cb-label {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .cb-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-size: 14px;
  }
  .cb-input:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
</style>
<!-- 注: datalistは候補UIをカスタマイズできないため、
     本格的な用途ではJSでのカスタム実装を推奨 -->`,
    tailwind: `<div class="relative w-72">
  <label for="country" class="mb-1.5 block text-sm font-semibold">国名</label>
  <input
    id="country"
    type="text"
    role="combobox"
    aria-expanded="true"
    aria-controls="country-listbox"
    aria-autocomplete="list"
    placeholder="国名を入力して検索"
    class="w-full rounded-xl border border-gray-200 py-3 pl-4 pr-10 text-sm
           focus:outline-none focus:ring-2 focus:ring-indigo-600"
  />
  <ul
    id="country-listbox"
    role="listbox"
    class="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl
           border border-gray-200 bg-white p-1 shadow-lg"
  >
    <li
      role="option"
      aria-selected="true"
      class="cursor-pointer rounded-lg px-3 py-2 text-sm
             bg-indigo-50 text-indigo-700"
    >
      日本
    </li>
    <li
      role="option"
      aria-selected="false"
      class="cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
    >
      アメリカ合衆国
    </li>
  </ul>
</div>`,
    react: `"use client";

import { useId, useMemo, useRef, useState } from "react";

type Option = { value: string; label: string };

export function Combobox({
  label,
  options,
  onSelect,
}: {
  label: string;
  options: Option[];
  onSelect?: (option: Option) => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isComposing, setIsComposing] = useState(false);
  const baseId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(
    () => options.filter((o) => o.label.includes(query)),
    [options, query]
  );

  const commit = (opt: Option) => {
    setQuery(opt.label);
    setOpen(false);
    onSelect?.(opt);
  };

  return (
    <div className="relative w-72">
      <label
        htmlFor={\`\${baseId}-input\`}
        className="mb-1.5 block text-sm font-semibold"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={\`\${baseId}-input\`}
        role="combobox"
        aria-expanded={open}
        aria-controls={\`\${baseId}-listbox\`}
        aria-autocomplete="list"
        aria-activedescendant={
          open && filtered[activeIndex]
            ? \`\${baseId}-opt-\${activeIndex}\`
            : undefined
        }
        value={query}
        placeholder="入力して検索"
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setActiveIndex(0);
        }}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={(e) => {
          if (isComposing) return; // IME変換中は無視
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i) => Math.max(i - 1, 0));
          } else if (e.key === "Enter" && open && filtered[activeIndex]) {
            e.preventDefault();
            commit(filtered[activeIndex]);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        className="w-full rounded-xl border border-gray-200 py-3 px-4 text-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      {open && (
        <ul
          id={\`\${baseId}-listbox\`}
          role="listbox"
          className="absolute z-10 mt-2 max-h-60 w-full overflow-auto
                     rounded-xl border border-gray-200 bg-white p-1 shadow-lg"
        >
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-sm text-gray-500">
              該当する項目がありません
            </li>
          )}
          {filtered.map((opt, i) => (
            <li
              key={opt.value}
              id={\`\${baseId}-opt-\${i}\`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={(e) => {
                e.preventDefault();
                commit(opt);
              }}
              className={\`cursor-pointer rounded-lg px-3 py-2 text-sm
                          \${i === activeIndex
                            ? "bg-indigo-50 text-indigo-700"
                            : "hover:bg-gray-50"}\`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
    shadcn: `// shadcn/uiに単体のComboboxコンポーネントはなく、
// PopoverとCommandを組み合わせて構築するのが公式パターン
// npx shadcn@latest add popover command button
"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const countries = [
  { value: "jp", label: "日本" },
  { value: "us", label: "アメリカ合衆国" },
  { value: "gb", label: "イギリス" },
];

export function CountryCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-64 justify-between"
        >
          {value
            ? countries.find((c) => c.value === value)?.label
            : "国を選択"}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <Command>
          <CommandInput placeholder="国名を検索" />
          <CommandList>
            <CommandEmpty>該当する国がありません</CommandEmpty>
            <CommandGroup>
              {countries.map((c) => (
                <CommandItem
                  key={c.value}
                  value={c.label}
                  onSelect={() => {
                    setValue(c.value === value ? "" : c.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={\`mr-2 size-4 \${
                      value === c.value ? "opacity-100" : "opacity-0"
                    }\`}
                  />
                  {c.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}`,
  },
  related: ["select", "search-bar", "command-palette", "tag-input"],
  views: 12800,
  favorites: 610,
  collections: ["admin-ui", "saas-ui"],
  gradient: "from-sky-500/15 via-indigo-500/10 to-emerald-500/15",
  difficulty: 3,
  updatedAt: "2026-06-21",
};
