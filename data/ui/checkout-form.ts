import type { UIItem } from "@/types/ui";

export const checkoutForm: UIItem = {
  slug: "checkout-form",
  name: "Checkout Form",
  nameJa: "チェックアウトフォーム",
  description:
    "配送先・支払い情報を入力して注文を確定するフォーム。ECの売上を左右する最重要UI。",
  category: "checkout",
  tags: ["EC", "決済", "フォーム", "購入手続き", "コンバージョン"],
  aliases: [
    "レジに進んだ後の入力画面",
    "住所とカード番号を入れる画面",
    "購入手続きのフォーム",
    "注文確定前の入力ページ",
    "お支払い情報の入力欄",
    "ECの最後の入力ステップ",
  ],
  whatIs: [
    "チェックアウトフォーム（Checkout Form）は、ECサイトで連絡先・配送先住所・配送方法・支払い情報を入力し、注文を確定させるためのフォームです。チェックアウト（checkout)はホテルやスーパーの「精算・会計」を意味する英語で、「レジに進む＝Proceed to checkout」という表現がそのままUI名になりました。カート確認から注文完了までの一連の画面群を指すこともあります。",
    "ECのファネルで最も離脱が起きる場所であり、世界的な調査ではカート投入後の離脱率（カゴ落ち率）は約70%にのぼるとされています。だからこそ各社の設計思想が色濃く出る領域で、Amazonはワンクリック注文と登録済み情報の再利用で入力自体を消し去り、Shopifyは「連絡先→配送→支払い」の3ステップ構成とShop Payによる自動入力を標準化しました。楽天市場は会員情報を前提に確認画面中心のフローを採用しています。",
    "設計の核心は「入力させない工夫」です。ゲスト購入の許可、住所の郵便番号自動補完、適切なinputmodeとautocomplete属性、リアルタイムバリデーション、注文内容サマリーの常時表示など、細部の積み重ねがCVRを大きく左右します。Stripeが提供するCheckoutやPayment Elementのように、決済部分を専用UIに任せる構成も近年の定番です。",
  ],
  features: [
    "連絡先・配送先・配送方法・支払い情報を段階的に入力させる構成",
    "注文内容と合計金額のサマリーをサイドバー等に常時表示する",
    "郵便番号からの住所自動補完、autocomplete属性による自動入力に対応する",
    "カード番号のフォーマット（4桁区切り）やブランド自動判定を行う",
    "Apple Pay / Google Pay / Shop Payなどのエクスプレス決済ボタンを先頭に置ける",
    "入力エラーをフィールド単位でリアルタイムに表示する",
  ],
  merits: [
    "入力体験の改善がCVR（購入完了率）の向上として直接売上に反映される",
    "ステップ分割により1画面あたりの認知負荷を抑えられる",
    "autocomplete対応でブラウザ・パスワードマネージャーの自動入力が効き、入力時間を大幅短縮できる",
    "注文サマリーの常時表示が金額への不安・誤解を防ぎ、離脱を減らす",
    "エクスプレス決済の導入で入力そのものをスキップさせられる",
  ],
  demerits: [
    "入力項目が多く、設計を誤ると70%前後といわれるカゴ落ちをさらに悪化させる",
    "住所形式・氏名のフリガナなど日本固有の要件で海外製UIをそのまま使えないことがある",
    "決済・バリデーション・エラー処理が絡み、実装とテストのコストが非常に大きい",
    "会員登録の強制はゲスト購入希望者の離脱を招く",
    "セキュリティ要件（PCI DSS等）により、カード情報の扱いに制約が多い",
  ],
  bestPractices: [
    "ゲスト購入を必ず許可し、会員登録は注文完了後に誘導する",
    "各inputに適切な autocomplete と inputmode を設定し、自動入力とキーボード最適化を効かせる",
    "郵便番号からの住所自動補完で入力量を半減させる",
    "エラーは送信時ではなくフィールドを離れた時点で、フィールド直下に表示する",
    "送料・手数料を含む合計金額を早い段階で提示する（後出しの追加費用はカゴ落ちの最大要因）",
    "進捗を示すステッパーを置き、「あとどれくらいで完了するか」を可視化する",
  ],
  useCases: [
    "Shopifyチェックアウト — 連絡先→配送→支払いの3ステップ＋Shop Pay自動入力",
    "Amazon — 登録済み住所・支払いを選ぶだけの確認型チェックアウト",
    "楽天市場 — 会員情報を前提とした注文内容確認中心のフロー",
    "Stripe Checkout / Payment Element — 決済部分を専用UIに任せる構成",
    "BASE / STORESの国内D2Cサイト — シンプルな1ページ型チェックアウト",
  ],
  accessibility: [
    "すべての入力欄に label 要素を関連付け、プレースホルダーをラベル代わりにしない",
    "エラーは aria-invalid と aria-describedby でフィールドに紐付け、色以外でも伝える",
    "送信エラー時はエラーサマリーへフォーカスを移し、各エラーへのリンクを提供する",
    "氏名・住所・カード情報のグループを fieldset / legend で構造化する",
    "autocomplete属性は支援技術のユーザーにとっても入力負荷軽減になるため必ず設定する",
    "セッションタイムアウトがある場合は事前警告と延長手段を用意する",
  ],
  figma: [
    "フォーム1列レイアウト（幅400〜480px）を基本に、姓名など関連項目のみ2カラムにする",
    "TextFieldコンポーネントに default / focus / error / filled のVariantを揃える",
    "エラーメッセージ付きの状態を含めた「最悪ケース」の画面を必ず作る",
    "注文サマリーはデスクトップで右カラム固定、モバイルで折りたたみの2案を用意する",
    "ステッパー（配送→支払い→確認）の現在位置Variantを作り、全ステップ分の画面を繋ぐ",
    "Apple Pay等のエクスプレス決済ボタンは各社のブランドガイドラインに沿った再現にする",
  ],
  code: {
    html: `<form class="checkout-form" novalidate>
  <h2>配送先情報</h2>

  <div class="field">
    <label for="email">メールアドレス</label>
    <input type="email" id="email" name="email"
           autocomplete="email" inputmode="email" required />
  </div>

  <div class="field-row">
    <div class="field">
      <label for="last-name">姓</label>
      <input type="text" id="last-name" name="last-name"
             autocomplete="family-name" required />
    </div>
    <div class="field">
      <label for="first-name">名</label>
      <input type="text" id="first-name" name="first-name"
             autocomplete="given-name" required />
    </div>
  </div>

  <div class="field">
    <label for="postal-code">郵便番号</label>
    <input type="text" id="postal-code" name="postal-code"
           autocomplete="postal-code" inputmode="numeric"
           placeholder="123-4567" required
           aria-describedby="postal-hint" />
    <p id="postal-hint" class="hint">入力すると住所が自動で補完されます</p>
  </div>

  <div class="field">
    <label for="address">住所</label>
    <input type="text" id="address" name="address"
           autocomplete="street-address" required />
  </div>

  <h2>お支払い情報</h2>
  <div class="field">
    <label for="card-number">カード番号</label>
    <input type="text" id="card-number" name="card-number"
           autocomplete="cc-number" inputmode="numeric"
           placeholder="1234 5678 9012 3456" required />
  </div>

  <button type="submit" class="submit-btn">¥12,800を支払う</button>
</form>

<style>
  .checkout-form { max-width: 440px; display: grid; gap: 16px; }
  .checkout-form h2 { margin: 8px 0 0; font-size: 18px; }
  .field { display: grid; gap: 6px; }
  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .field label { font-size: 14px; font-weight: 600; }
  .field input {
    border: 1px solid #d1d5db; border-radius: 10px;
    padding: 12px 14px; font-size: 16px; /* iOSのズーム防止に16px以上 */
  }
  .field input:focus { outline: 2px solid #db2777; border-color: transparent; }
  .hint { margin: 0; font-size: 12px; color: #6b7280; }
  .submit-btn {
    background: #db2777; color: #fff; font-weight: 700;
    border: 0; border-radius: 12px; padding: 16px; font-size: 16px;
    cursor: pointer;
  }
</style>`,
    tailwind: `<form class="mx-auto grid max-w-md gap-4" novalidate>
  <h2 class="text-lg font-bold">配送先情報</h2>

  <div class="grid gap-1.5">
    <label for="email" class="text-sm font-semibold">メールアドレス</label>
    <input
      type="email" id="email" name="email"
      autocomplete="email" inputmode="email" required
      class="rounded-xl border border-gray-300 px-3.5 py-3 text-base
             focus:border-transparent focus:outline-none focus:ring-2
             focus:ring-pink-600"
    />
  </div>

  <div class="grid grid-cols-2 gap-3">
    <div class="grid gap-1.5">
      <label for="last-name" class="text-sm font-semibold">姓</label>
      <input type="text" id="last-name" autocomplete="family-name" required
             class="rounded-xl border border-gray-300 px-3.5 py-3 text-base
                    focus:ring-2 focus:ring-pink-600 focus:outline-none" />
    </div>
    <div class="grid gap-1.5">
      <label for="first-name" class="text-sm font-semibold">名</label>
      <input type="text" id="first-name" autocomplete="given-name" required
             class="rounded-xl border border-gray-300 px-3.5 py-3 text-base
                    focus:ring-2 focus:ring-pink-600 focus:outline-none" />
    </div>
  </div>

  <!-- エラー状態の例 -->
  <div class="grid gap-1.5">
    <label for="postal" class="text-sm font-semibold">郵便番号</label>
    <input
      type="text" id="postal" autocomplete="postal-code" inputmode="numeric"
      aria-invalid="true" aria-describedby="postal-error"
      class="rounded-xl border border-red-500 px-3.5 py-3 text-base
             focus:ring-2 focus:ring-red-500 focus:outline-none"
    />
    <p id="postal-error" class="text-sm text-red-600" role="alert">
      郵便番号は「123-4567」の形式で入力してください
    </p>
  </div>

  <!-- 注文サマリー -->
  <div class="rounded-2xl bg-gray-50 p-4 text-sm">
    <div class="flex justify-between"><span>小計</span><span>¥12,000</span></div>
    <div class="mt-1 flex justify-between"><span>送料</span><span>¥800</span></div>
    <div class="mt-2 flex justify-between border-t border-gray-200 pt-2
                text-base font-bold">
      <span>合計（税込）</span><span>¥12,800</span>
    </div>
  </div>

  <button
    type="submit"
    class="rounded-xl bg-pink-600 py-4 text-base font-bold text-white
           hover:bg-pink-700 focus-visible:ring-2 focus-visible:ring-offset-2
           focus-visible:ring-pink-600"
  >
    ¥12,800を支払う
  </button>
</form>`,
    react: `"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"email" | "postal" | "address", string>>;

export function CheckoutForm({ total = 12800 }: { total?: number }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const email = String(data.get("email") ?? "");
    const postal = String(data.get("postal") ?? "");
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email))
      next.email = "メールアドレスの形式が正しくありません";
    if (!/^\\d{3}-?\\d{4}$/.test(postal))
      next.postal = "郵便番号は「123-4567」の形式で入力してください";
    if (!String(data.get("address") ?? "").trim())
      next.address = "住所を入力してください";
    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      // await submitOrder(data);
    } finally {
      setSubmitting(false);
    }
  };

  const field = (
    name: keyof Errors,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement>
  ) => (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? \`\${name}-error\` : undefined}
        className={\`rounded-xl border px-3.5 py-3 text-base focus:outline-none
                    focus:ring-2 \${
                      errors[name]
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-pink-600"
                    }\`}
        {...props}
      />
      {errors[name] && (
        <p id={\`\${name}-error\`} role="alert" className="text-sm text-red-600">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto grid max-w-md gap-4">
      <h2 className="text-lg font-bold">配送先情報</h2>
      {field("email", "メールアドレス", {
        type: "email",
        autoComplete: "email",
        inputMode: "email",
        required: true,
      })}
      {field("postal", "郵便番号", {
        type: "text",
        autoComplete: "postal-code",
        inputMode: "numeric",
        placeholder: "123-4567",
        required: true,
      })}
      {field("address", "住所", {
        type: "text",
        autoComplete: "street-address",
        required: true,
      })}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-xl bg-pink-600 py-4 font-bold text-white
                   hover:bg-pink-700 disabled:opacity-60"
      >
        {submitting ? "処理中…" : \`¥\${total.toLocaleString()}を支払う\`}
      </button>
      <p className="text-center text-xs text-gray-500">
        SSLで暗号化されています。カード情報は保存されません。
      </p>
    </form>
  );
}`,
    shadcn: `// npx shadcn@latest add form input button separator
// react-hook-form + zodでバリデーションするチェックアウトフォーム
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
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  email: z.string().email("メールアドレスの形式が正しくありません"),
  lastName: z.string().min(1, "姓を入力してください"),
  firstName: z.string().min(1, "名を入力してください"),
  postalCode: z
    .string()
    .regex(/^\\d{3}-?\\d{4}$/, "郵便番号は「123-4567」の形式で入力してください"),
  address: z.string().min(1, "住所を入力してください"),
});

export function CheckoutForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      lastName: "",
      firstName: "",
      postalCode: "",
      address: "",
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="mx-auto grid max-w-md gap-4"
      >
        <h2 className="text-lg font-bold">配送先情報</h2>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" inputMode="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>姓</FormLabel>
                <FormControl>
                  <Input autoComplete="family-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>名</FormLabel>
                <FormControl>
                  <Input autoComplete="given-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>郵便番号</FormLabel>
              <FormControl>
                <Input
                  autoComplete="postal-code"
                  inputMode="numeric"
                  placeholder="123-4567"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>住所</FormLabel>
              <FormControl>
                <Input autoComplete="street-address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />
        <Button type="submit" size="lg" className="w-full">
          ¥12,800を支払う
        </Button>
      </form>
    </Form>
  );
}`,
  },
  related: ["multi-step-form", "form-validation", "cart-drawer", "stepper"],
  views: 32800,
  favorites: 1520,
  collections: ["ec-ui", "shopify-ui", "stripe-ui"],
  gradient: "from-pink-500/15 via-fuchsia-500/10 to-violet-500/15",
  difficulty: 3,
  updatedAt: "2026-07-11",
};
