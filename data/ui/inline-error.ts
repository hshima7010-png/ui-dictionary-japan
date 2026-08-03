import type { UIItem } from "@/types/ui";

export const inlineError: UIItem = {
  slug: "inline-error",
  name: "Inline Error",
  nameJa: "インラインエラー",
  description:
    "入力欄のすぐ近くにエラー理由を表示するUI。フォームの離脱を防ぐ最重要パターン。",
  category: "error",
  tags: ["フォーム", "バリデーション", "エラー表示", "入力支援"],
  aliases: [
    "入力欄の下に出る赤い文字",
    "フォームのエラーメッセージ",
    "間違えたときに出る注意書き",
    "入力チェックで出る赤いテキスト",
    "メールアドレスが正しくありませんと出るやつ",
    "項目ごとのエラー表示",
  ],
  whatIs: [
    "インラインエラー（Inline Error）は、フォームの入力内容に問題があるとき、その入力欄のすぐ近く（通常は直下）にエラー理由を表示するUIパターンです。「インライン（inline）」は「行の中に・文脈の中に」という意味の英語で、ページ上部にまとめて出すエラーサマリーと対比して、問題の発生箇所そのものに寄り添って表示することから名付けられました。",
    "エラーの原因と修正場所が視覚的に一致するため、ユーザーは「どこを・どう直せばよいか」を即座に理解できます。赤いボーダー・警告アイコン・短い説明文の3点セットで構成されるのが定番で、フォームの完了率を左右する最重要パターンのひとつです。",
    "表示タイミングの設計も重要なテーマです。入力中に早すぎる警告を出すと苛立ちを生むため、「フォーカスが外れたときに検証し、修正中はリアルタイムで解除する」という遅延検証（reward early, punish late）の考え方が広く推奨されています。",
  ],
  features: [
    "エラーのある入力欄の直下に、原因と修正方法を短文で表示する",
    "赤系ボーダー・警告アイコン・エラーテキストの組み合わせで状態を多重に伝える",
    "blur時に検証し、修正されたら即時にエラーを解除するタイミング制御を持つ",
    "送信時には最初のエラー項目へフォーカスを移動させる実装が定番",
    "文字数カウンターや形式ヒントなど、エラーを未然に防ぐ表示と組み合わせられる",
    "成功状態（緑のチェック）とセットでバリデーション体系を構成する",
  ],
  merits: [
    "エラー箇所と理由が一目で分かり、フォームの修正が速くなる",
    "ページ上部のサマリーだけの場合と比べ、視線移動と記憶の負担が小さい",
    "項目ごとに具体的な修正方法を示せるため、離脱率・問い合わせを減らせる",
    "修正と同時にエラーが消える体験が、入力を進める安心感につながる",
    "aria-describedbyとの組み合わせで支援技術にも同じ情報を届けやすい",
  ],
  demerits: [
    "入力中に即時表示すると「まだ書き終わっていないのに」と苛立ちの原因になる",
    "エラー文の分だけレイアウトが上下に動き、ガタつき（レイアウトシフト）が起きやすい",
    "長すぎるエラー文は読まれず、狭い画面ではフォームを圧迫する",
    "色だけで状態を伝える実装は色覚多様性のユーザーに伝わらない",
    "項目数が多いフォームではインライン表示だけだと全体のエラー数を把握しにくい",
  ],
  bestPractices: [
    "エラー文は「何がだめか＋どう直すか」を1文で書く（例：「メールアドレスの形式で入力してください」）",
    "検証はblur時、解除は入力と同時に行う「遅延検証・即時解除」を基本にする",
    "色・アイコン・テキストの3要素で状態を伝え、色だけに依存しない",
    "エラー文の表示領域をあらかじめ確保するか、min-heightでレイアウトシフトを抑える",
    "送信ボタン押下時は最初のエラー項目へスクロール＋フォーカス移動する",
    "「エラーです」「不正な値です」のような責める・突き放す文言を避ける",
  ],
  useCases: [
    "Stripe Checkout — カード番号の形式エラーを欄の直下に即時表示",
    "Googleアカウント登録 — ユーザー名の重複や形式エラーをインラインで案内",
    "Shopifyのチェックアウト — 住所・メールの未入力を項目ごとに赤字で指摘",
    "銀行・証券のオンライン口座開設フォーム — 本人情報の形式チェック",
    "SaaSのサインアップ — パスワード強度の要件を満たすまでの逐次フィードバック",
  ],
  accessibility: [
    "エラー文に一意のidを付け、入力欄の aria-describedby から参照する",
    "エラー状態の入力欄には aria-invalid=\"true\" を設定する",
    "エラー文を role=\"alert\"（または aria-live=\"assertive\"）にし、表示された瞬間に読み上げさせる",
    "コントラスト比を満たす赤（例：#dc2626以上の濃さ）を使い、アイコンとテキストを併記する",
    "送信失敗時はエラー件数をライブリージョンで通知し、最初のエラー欄にフォーカスを移す",
    "プレースホルダーをラベル代わりにしない。ラベルは常時表示のままにする",
  ],
  figma: [
    "テキストフィールドのVariantsに「default / focus / error / success」状態を用意する",
    "エラーテキストとアイコンはAuto Layoutで入力欄の下に配置し、表示切替をbooleanプロパティ化する",
    "エラー文が2行になった場合の高さ変化と、下の要素の押し下がりを確認しておく",
    "エラー色はプリミティブ（red-600等）を直接使わず、semantic token（error/danger）として定義する",
    "フォーム全体のプロトタイプでは「送信→エラー表示→修正→解除」の一連の流れを繋いで検証する",
  ],
  code: {
    html: `<div class="field">
  <label for="email">メールアドレス</label>
  <input
    type="email"
    id="email"
    class="input error"
    value="user@example"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" class="error-message" role="alert">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 5h2v7h-2V7Zm0 9h2v2h-2v-2Z"/>
    </svg>
    メールアドレスの形式で入力してください
  </p>
</div>

<style>
  .field { display: flex; flex-direction: column; gap: 6px; }
  .field label { font-size: 14px; font-weight: 600; }
  .input {
    padding: 10px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 16px;
  }
  .input.error {
    border-color: #dc2626;
    outline-color: #dc2626;
  }
  .error-message {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #dc2626;
    font-size: 13px;
  }
</style>`,
    tailwind: `<div class="flex flex-col gap-1.5">
  <label for="email" class="text-sm font-semibold text-gray-900">
    メールアドレス
  </label>
  <input
    type="email"
    id="email"
    value="user@example"
    aria-invalid="true"
    aria-describedby="email-error"
    class="rounded-xl border border-red-600 px-3.5 py-2.5 text-base
           outline-none ring-red-100 focus:ring-4
           aria-[invalid=false]:border-gray-300"
  />
  <p
    id="email-error"
    role="alert"
    class="flex items-center gap-1.5 text-[13px] text-red-600"
  >
    <svg class="size-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 5h2v7h-2V7Zm0 9h2v2h-2v-2Z" />
    </svg>
    メールアドレスの形式で入力してください
  </p>
</div>`,
    react: `"use client";

import { useId, useState } from "react";
import { CircleAlert } from "lucide-react";

export function EmailField() {
  const id = useId();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validate = (v: string) => {
    if (!v) return "メールアドレスを入力してください";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v))
      return "メールアドレスの形式で入力してください";
    return null;
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-gray-900">
        メールアドレス
      </label>
      <input
        id={id}
        type="email"
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? \`\${id}-error\` : undefined}
        // 検証はblur時、解除は入力と同時（reward early, punish late）
        onBlur={() => setError(validate(value))}
        onChange={(e) => {
          setValue(e.target.value);
          if (error) setError(validate(e.target.value));
        }}
        className={\`rounded-xl border px-3.5 py-2.5 text-base outline-none
                    focus:ring-4 \${
                      error
                        ? "border-red-600 ring-red-100"
                        : "border-gray-300 ring-blue-100"
                    }\`}
      />
      {error && (
        <p
          id={\`\${id}-error\`}
          role="alert"
          className="flex items-center gap-1.5 text-[13px] text-red-600"
        >
          <CircleAlert className="size-3.5 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add form input
// shadcn/uiのFormはreact-hook-form + zodと統合されており、
// FormMessageがインラインエラーの表示を担当します。
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式で入力してください"),
});

export function SignupForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => console.log(values))}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              {/* エラー時に自動でaria-describedby付きの赤文字を表示 */}
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
  related: ["form-validation", "text-field", "error-page", "toast"],
  views: 18900,
  favorites: 830,
  collections: ["saas-ui", "finance-ui"],
  gradient: "from-red-500/15 via-rose-500/10 to-pink-500/15",
  difficulty: 2,
  updatedAt: "2026-04-18",
};
