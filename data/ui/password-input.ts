import type { UIItem } from "@/types/ui";

export const passwordInput: UIItem = {
  slug: "password-input",
  name: "Password Input",
  nameJa: "パスワード入力",
  description:
    "入力内容を伏せ字で隠すパスワード専用の入力欄。表示切り替えや強度メーターを伴う。",
  category: "authentication",
  tags: ["認証", "セキュリティ", "フォーム", "input"],
  aliases: [
    "黒丸で隠れるあの入力欄",
    "目のアイコンで見えるようになるやつ",
    "パスワードを打つ欄",
    "伏せ字になる入力ボックス",
    "強度メーターが出るパスワード欄",
    "●●●●になる入力フィールド",
  ],
  whatIs: [
    "パスワード入力（Password Input）は、入力した文字を「●」などの伏せ字でマスキングする、認証情報専用のテキストフィールドです。パスワード（password）は「通行（pass）のための言葉（word）」、つまり関所や陣営で使われた「合言葉」に由来する語で、その合言葉を覗き見（ショルダーハック）から守るために伏せ字表示が生まれました。HTMLでは <input type=\"password\"> として標準化されています。",
    "現代のパスワード入力は単なる伏せ字フィールドではなく、目のアイコンによる表示／非表示の切り替え（パスワードトグル）、リアルタイムの強度メーター、要件チェックリスト（8文字以上・記号を含む等）、パスワードマネージャーとの連携までを含む複合的なコンポーネントに進化しています。",
    "特に重要なのが autocomplete 属性の設計です。ログインでは current-password、新規登録では new-password を指定することで、ブラウザやパスワードマネージャーが適切に自動入力・強力なパスワード提案を行えます。伏せ字で「入力ミスに気づけない」という本質的な弱点を、トグルや自動入力でどう補うかがUX設計の焦点です。",
  ],
  features: [
    "入力文字が自動的に伏せ字（●）でマスキングされる",
    "目のアイコンで表示／非表示を切り替えられる（パスワードトグル）",
    "強度メーターで「弱い／普通／強い」をリアルタイム表示できる",
    "要件チェックリスト（文字数・記号など）を入力に応じて達成表示できる",
    "autocomplete 属性でパスワードマネージャーの自動入力・生成提案と連携する",
    "コピー・スクリーンショット対策など、プラットフォーム側の保護と協調する",
  ],
  merits: [
    "覗き見による漏えいリスクを下げ、公共の場でも安心して入力できる",
    "type=\"password\" にするだけでブラウザの保存・自動入力機能が有効になる",
    "強度メーターや要件表示により、安全なパスワード設定へ自然に誘導できる",
    "表示トグルがあれば伏せ字による入力ミスをユーザー自身で確認・修正できる",
    "new-password 指定でブラウザの強力なパスワード自動生成を引き出せる",
  ],
  demerits: [
    "伏せ字のため入力ミスに気づきにくく、ログイン失敗の主要因になる",
    "モバイルではキーボード切り替えを伴う記号入力が特に間違えやすい",
    "厳しすぎるパスワード要件は、かえって使い回しや紙メモを誘発する",
    "確認用の再入力フィールドは手間が大きい割にミス防止効果が薄い",
    "独自実装のトグルやバリデーションがパスワードマネージャーと干渉することがある",
  ],
  bestPractices: [
    "表示／非表示トグルを必ず付け、伏せ字による入力ミスを自己確認できるようにする",
    "用途に応じて autocomplete=\"current-password\"（ログイン）と \"new-password\"（登録・変更）を正しく指定する",
    "要件は入力前から明示し、入力中にチェックリスト形式で達成状況を見せる",
    "「確認用パスワード」欄は廃止し、表示トグル＋強度メーターで代替するのが近年の主流",
    "ペースト（貼り付け）を禁止しない。パスワードマネージャー利用を妨げる禁止は逆効果",
    "エラー時は「パスワードが違います」など曖昧にしすぎず、かつ攻撃者に情報を与えすぎないバランスを取る",
  ],
  useCases: [
    "Google / Appleのログイン画面 — トグル付きパスワード入力と自動入力連携",
    "GitHubの新規登録 — 入力中に要件の達成状況を表示",
    "1Password / Bitwarden — パスワード生成と強度表示のリファレンス実装",
    "ネットバンキングのログイン — ソフトウェアキーボード併用の高セキュリティ入力",
    "Stripeダッシュボード — new-password指定によるブラウザ生成パスワードの活用",
  ],
  accessibility: [
    "label を必ず関連付け、プレースホルダーだけでラベルを代用しない",
    "表示トグルには aria-label（「パスワードを表示」）と aria-pressed で状態を伝える",
    "表示切り替え時も入力欄からフォーカスと入力内容が失われないようにする",
    "要件・エラーは aria-describedby で入力欄に関連付け、読み上げ順を保証する",
    "強度メーターは色だけでなく「強度: 強い」のようなテキストでも伝える",
    "CapsLockが有効な場合の警告表示は、aria-liveで支援技術にも通知する",
  ],
  figma: [
    "テキストフィールドのコンポーネントを継承し、右端に目アイコンのスロットを追加する",
    "伏せ字表示と平文表示の2状態をVariantsで切り替えられるようにする",
    "強度メーターは弱（赤）／中（黄）／強（緑）のVariantを持つ独立コンポーネントにする",
    "要件チェックリストは達成／未達成アイコンをboolean Propertyで切り替える行の繰り返しで作る",
    "エラー状態・CapsLock警告・自動入力ハイライト（ブラウザの黄色背景）も再現しておくと実装齟齬が減る",
  ],
  code: {
    html: `<label for="password" class="pw-label">パスワード</label>
<div class="pw-field">
  <input
    type="password"
    id="password"
    name="password"
    autocomplete="new-password"
    minlength="8"
    required
    aria-describedby="pw-hint"
  />
  <button
    type="button"
    class="pw-toggle"
    aria-label="パスワードを表示"
    onclick="
      const input = document.getElementById('password');
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      this.setAttribute('aria-label',
        show ? 'パスワードを隠す' : 'パスワードを表示');
      this.setAttribute('aria-pressed', String(show));
    "
  >👁</button>
</div>
<p id="pw-hint" class="pw-hint">8文字以上、英数字と記号を含めてください</p>

<style>
  .pw-label {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .pw-field {
    position: relative;
  }
  .pw-field input {
    width: 100%;
    padding: 12px 48px 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-size: 14px;
  }
  .pw-field input:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
  .pw-toggle {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px;
  }
  .pw-hint {
    margin-top: 6px;
    font-size: 12px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<div class="w-full max-w-sm">
  <label for="password" class="mb-1.5 block text-sm font-semibold">
    パスワード
  </label>
  <div class="relative">
    <input
      type="password"
      id="password"
      autocomplete="new-password"
      minlength="8"
      required
      aria-describedby="pw-hint"
      class="w-full rounded-xl border border-gray-200 py-3 pl-4 pr-12
             text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
    <button
      type="button"
      aria-label="パスワードを表示"
      aria-pressed="false"
      class="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2
             text-gray-500 hover:bg-gray-100"
    >
      <svg class="size-4" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51
                 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431
                 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638
                 0-8.573-3.007-9.963-7.178Z" />
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    </button>
  </div>
  <p id="pw-hint" class="mt-1.5 text-xs text-gray-500">
    8文字以上、英数字と記号を含めてください
  </p>
  <!-- 強度メーター -->
  <div class="mt-2 flex gap-1" aria-hidden="true">
    <div class="h-1 flex-1 rounded-full bg-emerald-500"></div>
    <div class="h-1 flex-1 rounded-full bg-emerald-500"></div>
    <div class="h-1 flex-1 rounded-full bg-gray-200"></div>
  </div>
  <p class="mt-1 text-xs text-emerald-600">強度: 普通</p>
</div>`,
    react: `"use client";

import { useId, useMemo, useState } from "react";
import { Check, Eye, EyeOff, X } from "lucide-react";

const RULES = [
  { label: "8文字以上", test: (v: string) => v.length >= 8 },
  { label: "数字を含む", test: (v: string) => /\\d/.test(v) },
  { label: "記号を含む", test: (v: string) => /[^a-zA-Z0-9]/.test(v) },
];

export function PasswordInput({
  label = "パスワード",
  autoComplete = "new-password",
}: {
  label?: string;
  autoComplete?: "new-password" | "current-password";
}) {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const id = useId();

  const passed = useMemo(
    () => RULES.filter((r) => r.test(value)).length,
    [value]
  );
  const strength =
    passed === RULES.length ? "強い" : passed >= 2 ? "普通" : "弱い";

  return (
    <div className="w-full max-w-sm">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          autoComplete={autoComplete}
          required
          aria-describedby={\`\${id}-rules\`}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-xl border border-gray-200 py-3 pl-4
                     pr-12 text-sm focus:outline-none focus:ring-2
                     focus:ring-indigo-600"
        />
        <button
          type="button"
          aria-label={visible ? "パスワードを隠す" : "パスワードを表示"}
          aria-pressed={visible}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg
                     p-2 text-gray-500 hover:bg-gray-100"
        >
          {visible ? (
            <EyeOff aria-hidden className="size-4" />
          ) : (
            <Eye aria-hidden className="size-4" />
          )}
        </button>
      </div>

      {autoComplete === "new-password" && (
        <>
          <ul id={\`\${id}-rules\`} className="mt-2 grid gap-1 text-xs">
            {RULES.map((rule) => {
              const ok = rule.test(value);
              return (
                <li
                  key={rule.label}
                  className={\`flex items-center gap-1.5
                              \${ok ? "text-emerald-600" : "text-gray-400"}\`}
                >
                  {ok ? (
                    <Check aria-hidden className="size-3.5" />
                  ) : (
                    <X aria-hidden className="size-3.5" />
                  )}
                  {rule.label}
                </li>
              );
            })}
          </ul>
          <p aria-live="polite" className="mt-1.5 text-xs text-gray-600">
            強度: {value ? strength : "—"}
          </p>
        </>
      )}
    </div>
  );
}`,
    shadcn: `// shadcn/uiにPassword Input専用コンポーネントはないため、
// Input + Button を組み合わせてトグル付き入力を構築する
// npx shadcn@latest add input button label
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordField() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="password">パスワード</Label>
      <div className="relative">
        <Input
          id="password"
          type={visible ? "text" : "password"}
          autoComplete="current-password"
          required
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={visible ? "パスワードを隠す" : "パスワードを表示"}
          aria-pressed={visible}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-0 top-0 h-full px-3
                     text-muted-foreground hover:bg-transparent"
        >
          {visible ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </Button>
      </div>
    </div>
  );
}`,
  },
  related: ["text-field", "login-form", "form-validation", "otp-input"],
  views: 31500,
  favorites: 1010,
  collections: ["saas-ui", "finance-ui"],
  gradient: "from-indigo-500/15 via-violet-500/10 to-blue-500/15",
  difficulty: 1,
  updatedAt: "2026-07-11",
};
