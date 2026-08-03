import type { UIItem } from "@/types/ui";

export const formValidation: UIItem = {
  slug: "form-validation",
  name: "Form Validation",
  nameJa: "フォームバリデーション",
  description:
    "入力内容の妥当性を検証しエラーを伝えるUIパターン。表示タイミングと文言がUXを左右する。",
  category: "forms",
  tags: ["検証", "エラー", "フォーム", "入力チェック"],
  aliases: [
    "入力が間違ってると赤くなるやつ",
    "メールアドレスの形式が違いますって出るあれ",
    "フォームの入力チェック",
    "送信前に間違いを教えてくれる仕組み",
    "必須項目ですって怒られるやつ",
    "赤いエラーメッセージが出る機能",
  ],
  whatIs: [
    "フォームバリデーション（Form Validation）は、ユーザーの入力内容が要件（必須・形式・文字数など）を満たしているかを検証し、問題があればエラーとして伝える仕組み・UIパターンの総称です。「Validation」はラテン語の validus（有効な・強い）に由来し、「入力を有効なものにする検証」という意味を持ちます。",
    "検証にはクライアントサイド（ブラウザ上で即時に行う）とサーバーサイド（送信後にサーバーで行う）の2層があり、UXを担うのは主に前者、セキュリティとデータ整合性を担うのは後者です。HTML標準のrequired / pattern / type属性による制約検証（Constraint Validation）だけでも基本的なチェックは実現できます。",
    "優れたバリデーションの本質は「エラーを出すこと」ではなく「エラーを未然に防ぎ、出てしまったら最短で直せるようにすること」です。検証のタイミング（入力中・フォーカスアウト時・送信時）、エラー文言の具体性、エラー位置への誘導が体験の質を決定づけます。",
  ],
  features: [
    "必須・形式（メール、電話番号など）・文字数・値の範囲・重複などの検証ルールを持つ",
    "フィールド直下に赤色のインラインエラーを表示するのが最も一般的なパターン",
    "検証タイミングは「フォーカスアウト時に検証、入力中に再検証して解除」が定番",
    "送信時には最初のエラーフィールドへ自動スクロール＋フォーカス移動を行う",
    "成功状態（緑のチェックマーク）を表示して安心感を与えるパターンもある",
    "React Hook Form + Zodなど、スキーマ定義から検証を自動生成する実装が主流",
  ],
  merits: [
    "送信前に誤りへ気づけるため、サーバーエラーによる手戻りと離脱を減らせる",
    "フィールド単位の即時フィードバックにより、修正コストが最小で済む",
    "明確なエラー文言はサポート問い合わせの削減にも直結する",
    "スキーマベースの実装ならフロントとサーバーで検証ルールを共有できる",
    "コンバージョン率への影響が大きく、改善効果を数値で測定しやすい",
  ],
  demerits: [
    "入力中の早すぎる検証（打鍵ごとの即時エラー）はユーザーを苛立たせる",
    "検証ルールが厳しすぎると正当な入力（新しいTLDのメール、多様な氏名表記など）を弾いてしまう",
    "クライアント検証だけではセキュリティ対策にならず、サーバー側の二重実装が必須",
    "エラー文言の設計・翻訳・保守に継続的なコストがかかる",
    "フィールド間の相互依存（パスワード確認など）は実装が複雑化しやすい",
  ],
  bestPractices: [
    "検証は「フォーカスアウト時」に行い、エラー中のフィールドは「入力中」に再検証して即座に解除する",
    "エラー文言は「入力してください」ではなく「メールアドレスの形式で入力してください（例: you@example.com）」のように具体的に書く",
    "色だけに頼らず、アイコン＋テキストでエラーを伝える（色覚多様性への配慮）",
    "送信ボタンは無効化せず、押下時に最初のエラーへスクロール＋フォーカスさせる方が原因が伝わりやすい",
    "入力制約（文字数・使用可能文字）はエラーになる前にヘルプテキストで先に伝える",
    "サーバー側エラー（メール重複など）もインラインで該当フィールドに表示する",
  ],
  useCases: [
    "Stripe Checkout — カード番号のリアルタイム検証とブランド自動判定",
    "Shopifyのストア登録フォーム — フォーカスアウト検証と具体的なエラー文言の好例",
    "銀行・証券のオンライン口座開設 — 本人確認情報の厳密な形式チェック",
    "SaaSのサインアップ — パスワード強度メーターと要件チェックリストの併用",
    "ECの購入フォーム — 郵便番号からの住所自動補完と組み合わせた入力支援",
  ],
  accessibility: [
    "エラーメッセージは aria-describedby でフィールドに紐付け、aria-invalid=\"true\" を設定する",
    "エラーの発生を role=\"alert\"（または aria-live=\"assertive\"）で支援技術に通知する",
    "送信失敗時はエラー件数のサマリーをフォーム上部に置き、各エラーへのリンクを提供する",
    "エラー時のフォーカス移動は最初のエラーフィールドへ行い、文脈を見失わせない",
    "エラー色のコントラスト比は4.5:1以上を確保し、色以外の手がかり（アイコン・文言）を併用する",
  ],
  figma: [
    "テキストフィールドのVariantsに error 状態を含め、ボーダー・アイコン・メッセージを一括で切り替える",
    "エラーメッセージ行はAuto Layoutの子要素として組み、表示時の高さ変化をプロトタイプで確認する",
    "エラー文言のテキストスタイル（12〜13px・赤・アイコン付き）をデザイントークンとして定義する",
    "送信時のエラーサマリー（フォーム上部の警告ボックス）もコンポーネント化しておく",
    "成功状態（緑チェック）を使う場合は、error と揃えたレイアウトでVariantを追加する",
  ],
  code: {
    html: `<!-- HTML標準の制約検証（Constraint Validation）を活用 -->
<form id="signup" novalidate>
  <div class="field">
    <label for="email">メールアドレス</label>
    <input type="email" id="email" name="email" required
           autocomplete="email" />
    <p class="error" id="email-error" hidden></p>
  </div>
  <button type="submit">登録する</button>
</form>

<script>
  const form = document.getElementById("signup");
  const email = document.getElementById("email");
  const errorEl = document.getElementById("email-error");

  function validate() {
    if (email.validity.valueMissing) {
      return "メールアドレスを入力してください";
    }
    if (email.validity.typeMismatch) {
      return "メールアドレスの形式で入力してください（例: you@example.com）";
    }
    return "";
  }

  function showError(message) {
    errorEl.textContent = message;
    errorEl.hidden = !message;
    email.setAttribute("aria-invalid", message ? "true" : "false");
  }

  email.addEventListener("blur", () => showError(validate()));
  email.addEventListener("input", () => {
    if (!errorEl.hidden) showError(validate()); // エラー中のみ再検証
  });
  form.addEventListener("submit", (e) => {
    const message = validate();
    if (message) {
      e.preventDefault();
      showError(message);
      email.focus();
    }
  });
</script>

<style>
  .field input[aria-invalid="true"] {
    border-color: #dc2626;
  }
  .error {
    color: #dc2626;
    font-size: 12px;
    margin-top: 4px;
  }
</style>`,
    tailwind: `<!-- エラー状態のフィールド -->
<div class="flex max-w-sm flex-col gap-1.5">
  <label for="email" class="text-sm font-semibold text-gray-700">
    メールアドレス
  </label>
  <input
    type="email"
    id="email"
    aria-invalid="true"
    aria-describedby="email-error"
    value="user@invalid"
    class="rounded-xl border border-red-400 px-3.5 py-2.5 text-base
           focus:border-red-500 focus:outline-none
           focus:ring-4 focus:ring-red-500/20"
  />
  <p id="email-error" role="alert"
     class="flex items-center gap-1 text-xs text-red-600">
    <svg class="size-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"
         aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a1 1 0 0 1 1
               1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm0 10a1 1 0 1 0
               0-2 1 1 0 0 0 0 2Z" />
    </svg>
    メールアドレスの形式で入力してください（例: you@example.com）
  </p>
</div>`,
    react: `"use client";

import { useId, useState } from "react";
import { AlertCircle } from "lucide-react";

function validateEmail(value: string): string {
  if (!value) return "メールアドレスを入力してください";
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
    return "メールアドレスの形式で入力してください（例: you@example.com）";
  }
  return "";
}

export function ValidatedEmailField() {
  const id = useId();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleChange = (next: string) => {
    setValue(next);
    // エラー表示中のみ入力中に再検証し、直ったら即座に解除する
    if (touched && error) setError(validateEmail(next));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateEmail(value));
  };

  return (
    <div className="flex max-w-sm flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        メールアドレス
      </label>
      <input
        id={id}
        type="email"
        value={value}
        autoComplete="email"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? \`\${id}-error\` : undefined}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        className={\`rounded-xl border px-3.5 py-2.5 text-base
                    focus:outline-none focus:ring-4
                    \${
                      error
                        ? "border-red-400 focus:ring-red-500/20"
                        : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }\`}
      />
      {error && (
        <p
          id={\`\${id}-error\`}
          role="alert"
          className="flex items-center gap-1 text-xs text-red-600"
        >
          <AlertCircle aria-hidden className="size-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add form input button
// shadcn/uiのFormはreact-hook-form + zodによるスキーマ検証が前提です
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式で入力してください（例: you@example.com）"),
});

export function SignupForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
    mode: "onBlur",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => console.log(values))}
        className="max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">登録する</Button>
      </form>
    </Form>
  );
}`,
  },
  related: ["text-field", "inline-error", "toast", "multi-step-form"],
  views: 44700,
  favorites: 2010,
  collections: ["saas-ui", "ec-ui"],
  gradient: "from-emerald-500/15 via-green-500/10 to-lime-500/15",
  difficulty: 2,
  updatedAt: "2026-07-08",
};
