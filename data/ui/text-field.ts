import type { UIItem } from "@/types/ui";

export const textField: UIItem = {
  slug: "text-field",
  name: "Text Field",
  nameJa: "テキストフィールド",
  description:
    "1行のテキストを入力するための最も基本的なフォーム部品。ラベルや補助テキストとセットで使う。",
  category: "inputs",
  tags: ["入力", "フォーム", "input", "1行入力"],
  aliases: [
    "文字を打ち込むところ",
    "名前とかメールアドレスを入れる枠",
    "1行だけ入力する欄",
    "フォームの入力ボックス",
    "カーソルが点滅する入力欄",
    "インプット欄",
  ],
  whatIs: [
    "テキストフィールド（Text Field）は、名前・メールアドレス・検索キーワードなど、1行のテキストをユーザーに入力してもらうためのUIコンポーネントです。「Field（フィールド＝欄・記入欄）」という名前は、紙の申込書にある記入欄をそのまま画面上に置き換えたことに由来しており、GUI黎明期から存在する最も歴史の長い入力部品のひとつです。",
    "HTMLでは <input type=\"text\"> をはじめ、email / tel / url / number などの type 属性によって入力内容に応じた最適化（モバイルでのキーボード切り替えやブラウザ標準のバリデーション）が行えます。ラベル、プレースホルダー、ヘルプテキスト、エラーメッセージといった周辺要素とセットで「1つのフィールド」を構成するのが現代的な設計です。",
    "Material Designの「Text fields」、Appleの「Text Fields」など主要デザインシステムのすべてに定義されており、フォームUXの品質はテキストフィールドの設計品質にほぼ比例すると言われるほど重要なコンポーネントです。",
  ],
  features: [
    "1行のテキスト入力に特化しており、Enterキーでフォーム送信をトリガーできる",
    "type属性（email / tel / url / number など）でモバイルのキーボードが最適化される",
    "ラベル・プレースホルダー・ヘルプテキスト・エラーメッセージと組み合わせて1セットで機能する",
    "先頭・末尾にアイコンや単位（円、kgなど）の装飾要素を配置するバリエーションがある",
    "autocomplete属性でブラウザの自動入力（住所・氏名・カード情報）と連携できる",
    "フォーカスリングやボーダー色の変化で「入力中」の状態を視覚的に伝える",
  ],
  merits: [
    "ユーザーが自由な値を入力できる、最も柔軟性の高い入力手段である",
    "すべてのユーザーが操作方法を知っており、学習コストがゼロに近い",
    "ブラウザ標準機能（自動入力・スペルチェック・IME）との親和性が高い",
    "type属性とautocomplete属性の指定だけで入力効率が大きく向上する",
    "デザインシステム間での見た目の差が小さく、移植・流用がしやすい",
  ],
  demerits: [
    "自由入力ゆえに表記ゆれ・入力ミスが起こりやすく、バリデーションが必須になる",
    "選択肢が有限の場合はセレクトやラジオボタンの方が速く正確なことが多い",
    "プレースホルダーをラベル代わりにすると入力中にヒントが消えて迷いを生む",
    "モバイルでは画面の半分をキーボードが占有し、入力体験が悪化しやすい",
    "項目数が多いフォームでは入力疲れによる離脱の主要因になる",
  ],
  bestPractices: [
    "ラベルは必ずフィールドの外側（上部が推奨）に常時表示し、プレースホルダーで代用しない",
    "type属性とautocomplete属性を正しく指定し、モバイルキーボードと自動入力を最適化する",
    "エラーは送信時ではなくフォーカスアウト時に表示し、修正されたら即座に消す",
    "入力欄の幅は期待される入力長に合わせる（郵便番号は短く、住所は長く）",
    "必須・任意はどちらか一方のみをマークで示し、フォーム全体でルールを統一する",
    "1画面あたりの入力項目は最小限に絞り、不要な項目は削除する勇気を持つ",
  ],
  useCases: [
    "Googleの検索ボックス — 世界で最も使われている単一のテキストフィールド",
    "Stripe Checkout — カード番号・氏名入力でautocompleteとインライン検証を活用",
    "Airbnbの検索フォーム — 行き先入力にサジェスト付きテキストフィールドを採用",
    "各種会員登録フォーム — メールアドレス入力に type=\"email\" で最適化",
    "管理画面の設定ページ — APIキーやサイト名などの単一値の編集",
  ],
  accessibility: [
    "<label> 要素を for / id で必ずフィールドに関連付ける（クリック領域の拡大にもなる）",
    "エラーメッセージは aria-describedby でフィールドと紐付け、aria-invalid=\"true\" を設定する",
    "プレースホルダーのコントラスト比は低くなりがちなので、重要情報を入れない",
    "フォーカスリングを消さない。outline を消す場合は代替のフォーカススタイルを必ず用意する",
    "必須項目には required 属性（または aria-required）を付与し、視覚マークと併用する",
  ],
  figma: [
    "Auto Layoutでラベル・入力欄・ヘルプテキストを縦に組み、gap 6〜8pxで統一する",
    "Variantsで default / focus / filled / error / disabled の5状態を用意する",
    "Component Propertyでラベル文字列・プレースホルダー・エラー文をInstance側から変更可能にする",
    "先頭アイコンの有無はboolean propertyで切り替えられるようにしておくと流用しやすい",
    "エラー状態はボーダー色だけでなくアイコン＋テキストも同時に切り替わるよう設計する",
  ],
  code: {
    html: `<div class="field">
  <label for="email">メールアドレス</label>
  <input
    type="email"
    id="email"
    name="email"
    autocomplete="email"
    placeholder="you@example.com"
    required
  />
  <p class="help">確認メールをお送りします。</p>
</div>

<style>
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 360px;
  }
  .field label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }
  .field input {
    padding: 10px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 16px;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .field input:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  }
  .field .help {
    font-size: 12px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<div class="flex max-w-sm flex-col gap-1.5">
  <label for="email" class="text-sm font-semibold text-gray-700">
    メールアドレス
  </label>
  <input
    type="email"
    id="email"
    name="email"
    autocomplete="email"
    placeholder="you@example.com"
    required
    class="rounded-xl border border-gray-300 px-3.5 py-2.5 text-base
           placeholder:text-gray-400
           focus:border-emerald-500 focus:outline-none
           focus:ring-4 focus:ring-emerald-500/20
           disabled:cursor-not-allowed disabled:bg-gray-50"
  />
  <p class="text-xs text-gray-500">確認メールをお送りします。</p>
</div>`,
    react: `"use client";

import { useId, useState } from "react";

type TextFieldProps = {
  label: string;
  type?: "text" | "email" | "tel" | "url";
  help?: string;
  error?: string;
  required?: boolean;
};

export function TextField({
  label,
  type = "text",
  help,
  error,
  required,
}: TextFieldProps) {
  const id = useId();
  const [value, setValue] = useState("");
  const describedBy = error ? \`\${id}-error\` : help ? \`\${id}-help\` : undefined;

  return (
    <div className="flex max-w-sm flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        onChange={(e) => setValue(e.target.value)}
        className={\`rounded-xl border px-3.5 py-2.5 text-base
                    focus:outline-none focus:ring-4
                    \${
                      error
                        ? "border-red-400 focus:ring-red-500/20"
                        : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }\`}
      />
      {error ? (
        <p id={\`\${id}-error\`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : (
        help && (
          <p id={\`\${id}-help\`} className="text-xs text-gray-500">
            {help}
          </p>
        )
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add input label
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EmailField() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">メールアドレス</Label>
      <Input
        type="email"
        id="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />
      <p className="text-xs text-muted-foreground">
        確認メールをお送りします。
      </p>
    </div>
  );
}`,
  },
  related: ["textarea", "form-validation", "search-bar", "select"],
  views: 35600,
  favorites: 1420,
  collections: ["saas-ui", "mobile-ui"],
  gradient: "from-emerald-500/15 via-teal-500/10 to-green-500/15",
  difficulty: 1,
  updatedAt: "2026-06-12",
};
