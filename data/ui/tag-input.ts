import type { UIItem } from "@/types/ui";

export const tagInput: UIItem = {
  slug: "tag-input",
  name: "Tag Input",
  nameJa: "タグ入力",
  description:
    "入力した値をチップ状のタグとして追加・削除できるUI。スキルや宛先など複数値の入力に。",
  category: "inputs",
  tags: ["複数入力", "チップ", "タグ", "input"],
  aliases: [
    "入力するとぽこぽこ増えるやつ",
    "Enterで確定してチップになる入力欄",
    "×で消せる小さいラベルを追加するUI",
    "メールの宛先みたいな入力欄",
    "スキルを追加していくあの入力",
    "チップ入力",
  ],
  whatIs: [
    "タグ入力（Tag Input）は、テキストを入力してEnterやカンマで確定すると、その値が「タグ」と呼ばれる小さなチップ状の要素に変換され、入力欄の中に並んでいくUIコンポーネントです。タグ（tag）は英語で「荷札・付け札」を意味し、商品に付ける値札のように、対象へ小さなラベルを付けて分類する行為に由来しています。チップ入力（Chip Input）やトークン入力（Token Input）とも呼ばれます。",
    "「値が何個になるか事前に決まっていない複数値の入力」に特化しているのが特徴です。ブログ記事のタグ付け、求人サイトでのスキル登録、メールの宛先（To/Cc）などが代表例で、各タグには削除用の×ボタンが付き、個別に取り消せます。",
    "自由入力型のほか、コンボボックスと組み合わせて既存の候補から選択させる「サジェスト型」もあり、表記ゆれ（例:「JavaScript」と「javascript」）を防ぎたい場合は後者が推奨されます。入力・確定・削除・IME対応と考慮点が多く、見た目のシンプルさに反して実装難度は中〜高です。",
  ],
  features: [
    "Enter・カンマ・Tabなどのキーで入力値をタグとして確定できる",
    "各タグに×ボタンが付き、クリックで個別に削除できる",
    "入力欄が空の状態でBackspaceを押すと直前のタグを削除できる",
    "候補サジェストと組み合わせて選択式のタグ追加ができる",
    "最大数制限・重複禁止・形式バリデーションを組み込める",
    "タグが増えると入力欄が折り返し、複数行に展開される",
  ],
  merits: [
    "複数の値を1つの入力欄でコンパクトに扱える",
    "追加済みの値が常に見えており、削除もワンクリックで完結する",
    "「確定済みの値」と「入力中の文字」が視覚的に明確に区別される",
    "カンマ区切りテキストと違い、区切りミスや形式エラーが起きない",
    "サジェスト型にすれば表記ゆれを防ぎ、データ品質を保てる",
  ],
  demerits: [
    "標準のHTML要素が存在せず、必ずカスタム実装が必要になる",
    "Enter確定がフォーム送信と衝突しやすく、制御を誤ると入力内容が消える",
    "日本語IMEの変換確定Enterとタグ確定Enterの区別が必要で、実装を誤ると変換途中で確定される",
    "タグが多いと入力欄が縦に伸び、レイアウトが崩れやすい",
    "「Enterで確定する」という操作ルールが初見のユーザーには伝わりにくい",
  ],
  bestPractices: [
    "プレースホルダーや補足テキストで「Enterで追加」という操作方法を明示する",
    "IMEのcomposition中のEnterはタグ確定として扱わない（compositionendを待つ）",
    "重複タグは追加せず、既存タグを一瞬ハイライトして「もうあります」と伝える",
    "最大数がある場合は「あと3個追加できます」のように残数を表示する",
    "ペースト時はカンマ・改行区切りを自動分割して複数タグとして取り込む",
    "タグの削除はマウスの×ボタンとキーボードのBackspace両方から行えるようにする",
  ],
  useCases: [
    "Gmail — メール作成画面の宛先（To / Cc / Bcc）入力",
    "Qiita / Zenn — 記事投稿時のタグ付け",
    "LinkedIn / Wantedly — プロフィールのスキル登録",
    "GitHub — リポジトリのTopics設定",
    "Notionのマルチセレクトプロパティ — 選択肢の追加と付与",
  ],
  accessibility: [
    "入力欄には label を関連付け、操作説明（Enterで追加）を aria-describedby で紐付ける",
    "タグの追加・削除を aria-live=\"polite\" のリージョンで通知し、視覚に頼らず変化が分かるようにする",
    "削除ボタンには「JavaScript を削除」のような具体的な aria-label を付ける",
    "削除ボタンにもキーボードフォーカスを当てられるようにし、Enter / Spaceで実行できるようにする",
    "タグ一覧は role=\"list\" / role=\"listitem\" で構造化すると個数と位置が伝わる",
    "フォーカスの流れ（入力欄→各タグの削除ボタン）を論理的な順序に保つ",
  ],
  figma: [
    "タグ（チップ）を単体コンポーネント化し、ラベルをText Property、×ボタンをboolean Propertyにする",
    "入力欄コンテナはAuto Layout（横方向・折り返しあり、gap 6〜8px）にするとタグの増減を再現できる",
    "タグ0個（プレースホルダー表示）、数個、折り返し発生の3状態を用意してレイアウト崩れを確認する",
    "タグのhover状態（×ボタンの強調）とエラー状態（重複時の赤枠）もVariantsで定義する",
    "最大幅を超える長いタグの省略（truncate）ルールを決めてサンプルを置いておく",
  ],
  code: {
    html: `<div class="tag-input" id="tagInput">
  <span class="tag">
    JavaScript
    <button type="button" aria-label="JavaScript を削除">&times;</button>
  </span>
  <span class="tag">
    React
    <button type="button" aria-label="React を削除">&times;</button>
  </span>
  <input type="text" placeholder="スキルを入力してEnter" aria-label="スキル" />
</div>

<style>
  .tag-input {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    cursor: text;
  }
  .tag-input:focus-within {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
  .tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    background: #eef2ff;
    color: #4338ca;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 500;
  }
  .tag button {
    border: none;
    background: none;
    cursor: pointer;
    color: #6366f1;
    font-size: 14px;
    line-height: 1;
  }
  .tag-input input {
    flex: 1;
    min-width: 120px;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 4px 0;
  }
</style>`,
    tailwind: `<div
  class="flex flex-wrap items-center gap-1.5 rounded-xl border
         border-gray-200 px-3 py-2
         focus-within:ring-2 focus-within:ring-indigo-600"
>
  <span
    class="inline-flex items-center gap-1 rounded-full bg-indigo-50
           px-2.5 py-1 text-xs font-medium text-indigo-700"
  >
    JavaScript
    <button
      type="button"
      aria-label="JavaScript を削除"
      class="rounded-full p-0.5 hover:bg-indigo-100"
    >
      <svg class="size-3" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" d="M6 6l12 12M6 18L18 6" />
      </svg>
    </button>
  </span>
  <span
    class="inline-flex items-center gap-1 rounded-full bg-indigo-50
           px-2.5 py-1 text-xs font-medium text-indigo-700"
  >
    React
    <button
      type="button"
      aria-label="React を削除"
      class="rounded-full p-0.5 hover:bg-indigo-100"
    >
      <svg class="size-3" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" d="M6 6l12 12M6 18L18 6" />
      </svg>
    </button>
  </span>
  <input
    type="text"
    placeholder="スキルを入力してEnter"
    aria-label="スキル"
    class="min-w-28 flex-1 border-none py-1 text-sm outline-none"
  />
</div>`,
    react: `"use client";

import { useId, useRef, useState } from "react";
import { X } from "lucide-react";

export function TagInput({
  label = "スキル",
  maxTags = 10,
  onChange,
}: {
  label?: string;
  maxTags?: number;
  onChange?: (tags: string[]) => void;
}) {
  const [tags, setTags] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const baseId = useId();

  const addTag = (raw: string) => {
    const value = raw.trim();
    if (!value || tags.includes(value) || tags.length >= maxTags) return;
    const next = [...tags, value];
    setTags(next);
    setDraft("");
    onChange?.(next);
  };

  const removeTag = (index: number) => {
    const next = tags.filter((_, i) => i !== index);
    setTags(next);
    onChange?.(next);
  };

  return (
    <div>
      <label htmlFor={baseId} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <div
        onClick={() => inputRef.current?.focus()}
        className="flex flex-wrap items-center gap-1.5 rounded-xl border
                   border-gray-200 px-3 py-2
                   focus-within:ring-2 focus-within:ring-indigo-600"
      >
        <ul role="list" className="contents">
          {tags.map((tag, i) => (
            <li
              key={tag}
              className="inline-flex items-center gap-1 rounded-full
                         bg-indigo-50 px-2.5 py-1 text-xs font-medium
                         text-indigo-700"
            >
              {tag}
              <button
                type="button"
                aria-label={\`\${tag} を削除\`}
                onClick={() => removeTag(i)}
                className="rounded-full p-0.5 hover:bg-indigo-100"
              >
                <X aria-hidden className="size-3" />
              </button>
            </li>
          ))}
        </ul>
        <input
          ref={inputRef}
          id={baseId}
          type="text"
          value={draft}
          placeholder={tags.length === 0 ? "入力してEnterで追加" : ""}
          aria-describedby={\`\${baseId}-hint\`}
          onChange={(e) => setDraft(e.target.value)}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={(e) => {
            if (isComposing) return; // IME変換中は無視
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addTag(draft);
            } else if (e.key === "Backspace" && draft === "") {
              removeTag(tags.length - 1);
            }
          }}
          className="min-w-28 flex-1 border-none py-1 text-sm outline-none"
        />
      </div>
      <p id={\`\${baseId}-hint\`} className="mt-1 text-xs text-gray-500">
        Enterまたはカンマで追加（最大{maxTags}個）
      </p>
      <div aria-live="polite" className="sr-only">
        {tags.length}個のタグが追加されています
      </div>
    </div>
  );
}`,
    shadcn: `// shadcn/uiに公式のTag Inputコンポーネントはないため、
// Badge + Input を組み合わせて実装する（コミュニティ拡張のemblor等も有名）
// npx shadcn@latest add badge input label
"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SkillTagInput() {
  const [tags, setTags] = useState<string[]>(["React"]);
  const [draft, setDraft] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  return (
    <div className="grid gap-1.5">
      <Label htmlFor="skills">スキル</Label>
      <div className="flex flex-wrap items-center gap-1.5 rounded-md border
                      px-3 py-2 focus-within:ring-2 focus-within:ring-ring">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="gap-1">
            {tag}
            <button
              type="button"
              aria-label={\`\${tag} を削除\`}
              onClick={() => setTags(tags.filter((t) => t !== tag))}
            >
              <X className="size-3" />
            </button>
          </Badge>
        ))}
        <Input
          id="skills"
          value={draft}
          placeholder="入力してEnterで追加"
          onChange={(e) => setDraft(e.target.value)}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={(e) => {
            if (isComposing) return;
            if (e.key === "Enter" && draft.trim()) {
              e.preventDefault();
              if (!tags.includes(draft.trim())) {
                setTags([...tags, draft.trim()]);
              }
              setDraft("");
            }
          }}
          className="h-7 min-w-28 flex-1 border-none p-0 shadow-none
                     focus-visible:ring-0"
        />
      </div>
    </div>
  );
}`,
  },
  related: ["combobox", "text-field", "badge", "filter-panel"],
  views: 7600,
  favorites: 310,
  collections: ["admin-ui", "saas-ui"],
  gradient: "from-emerald-500/15 via-teal-500/10 to-blue-500/15",
  difficulty: 2,
  updatedAt: "2026-05-30",
};
