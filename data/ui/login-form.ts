import type { UIItem } from "@/types/ui";

export const loginForm: UIItem = {
  slug: "login-form",
  name: "Login Form",
  nameJa: "ログインフォーム",
  description:
    "メールアドレスとパスワードなどでユーザーを認証する入口のフォーム。全サービスの玄関口。",
  category: "authentication",
  tags: ["認証", "サインイン", "フォーム", "セキュリティ"],
  aliases: [
    "メールとパスワードを入れるあの画面",
    "サインインする画面",
    "会員ページに入るための入力フォーム",
    "IDとパスワードを打つやつ",
    "Googleでログインとかが並ぶ画面",
    "ログイン画面",
  ],
  whatIs: [
    "ログインフォーム（Login Form）は、メールアドレス（またはID）とパスワードなどの認証情報を入力させ、ユーザー本人であることを確認してサービスへの入場を許可するフォームです。「ログイン（log in）」の語源は航海日誌（logbook）で、船の記録簿に乗員の活動を記帳したことから、コンピュータへの接続記録を残して入場する行為を log in と呼ぶようになりました。",
    "ほぼすべての会員制サービスに存在する「玄関口」であり、ここでつまずくとユーザーはサービス本体に一切たどり着けません。ログイン失敗の大半はパスワード忘れと入力ミスであるため、パスワード再設定導線、表示トグル、適切な autocomplete 属性、ソーシャルログインといった「失敗させない・楽にする」工夫の集合体として設計されます。",
    "近年はパスワードに依存しない選択肢が急速に普及しています。GoogleやAppleアカウントで入るソーシャルログイン、メールリンクで入るマジックリンク、生体認証で入るパスキー（Passkeys）などです。ログインフォームは単一のフォームというより、複数の認証手段を束ねる「認証ハブ」へと進化しつつあります。",
  ],
  features: [
    "メールアドレス／IDとパスワードの入力フィールドを持つ",
    "「パスワードをお忘れですか？」の再設定導線を備える",
    "ソーシャルログイン（Google・Appleなど）のボタン群を併設できる",
    "「ログイン状態を保持する」チェックボックスでセッション期間を選ばせられる",
    "autocomplete属性によりパスワードマネージャーの自動入力と連携する",
    "新規登録ページへの切り替え導線を持つ",
  ],
  merits: [
    "ユーザーごとのデータ・権限・パーソナライズ体験を提供する前提が整う",
    "確立されたパターンのため、ユーザーは説明なしで使い方を理解できる",
    "autocomplete対応でパスワードマネージャーが機能すれば、入力の手間はほぼゼロになる",
    "ソーシャルログイン併設で新規ユーザーの登録ハードルを大きく下げられる",
    "2段階認証やパスキーなど、セキュリティ強化の土台になる",
  ],
  demerits: [
    "パスワード忘れによるログイン失敗がサービス利用の最大の障壁になり得る",
    "認証というクリティカルな機能のため、実装ミスが即セキュリティ事故につながる",
    "ソーシャルログインの選択肢が多すぎると「前回どれで入ったか」問題が発生する",
    "ブルートフォース・クレデンシャルスタッフィング等の攻撃対策が別途必須",
    "エラーメッセージの出し方次第で、登録済みメールアドレスの存在が漏れる（列挙攻撃）",
  ],
  bestPractices: [
    "メール欄に autocomplete=\"email\"、パスワード欄に autocomplete=\"current-password\" を指定し、自動入力を最大限機能させる",
    "パスワード再設定リンクはパスワード欄のすぐ近くに置き、失敗前から見えるようにする",
    "エラーは「メールアドレスまたはパスワードが正しくありません」とし、どちらが誤りかを特定させない",
    "ソーシャルログインは主要な2〜3個に絞り、前回使用した手段を記憶・表示すると迷いが減る",
    "ログインボタンは送信中にスピナー＋無効化し、二重送信を防ぐ",
    "新規登録とログインの画面は明確に分け、相互への切り替え導線を目立たせる",
  ],
  useCases: [
    "Google / Appleのアカウントログイン — メール入力→パスワードの段階式フォーム",
    "Stripeダッシュボード — メール＋パスワードにパスキー対応を加えた認証",
    "Slack — メールへのマジックリンク送信とパスワードの併用",
    "Amazon / 楽天 — EC購入フローの途中に挟まるログイン",
    "GitHub — 2段階認証・パスキー・リカバリーコードを備えたログイン",
  ],
  accessibility: [
    "各入力欄に label を明示的に関連付け、プレースホルダーをラベル代わりにしない",
    "認証エラーは aria-live=\"assertive\" のリージョンで通知し、最初のエラー欄へフォーカスを移す",
    "パスワード表示トグルには aria-label と aria-pressed を設定する",
    "Tabキーの移動順（メール→パスワード→保持チェック→ログイン→再設定リンク）を論理的に保つ",
    "ソーシャルログインボタンには「Googleでログイン」など手段を含むアクセシブルネームを付ける",
    "自動入力・ペーストを妨げるスクリプトを入れない（セキュリティ目的でも逆効果）",
  ],
  figma: [
    "カード型の中央配置レイアウトで組み、モバイルでは余白と画面幅いっぱいのボタンに調整する",
    "テキストフィールド・ボタン・ソーシャルボタンは既存のコンポーネントライブラリから組み立てる",
    "「デフォルト」「入力済み」「エラー」「送信中（スピナー）」の4状態の画面を用意する",
    "ソーシャルログインボタンは各社のブランドガイドライン（ロゴ・余白・文言）に準拠する",
    "「または」の区切り線（divider）はAuto Layoutの水平線＋テキストで再利用コンポーネント化する",
  ],
  code: {
    html: `<form class="login-form" method="post" action="/login">
  <h1>ログイン</h1>

  <label for="email">メールアドレス</label>
  <input
    type="email"
    id="email"
    name="email"
    autocomplete="email"
    required
  />

  <div class="pw-row">
    <label for="password">パスワード</label>
    <a href="/password-reset">パスワードをお忘れですか？</a>
  </div>
  <input
    type="password"
    id="password"
    name="password"
    autocomplete="current-password"
    required
  />

  <label class="remember">
    <input type="checkbox" name="remember" />
    ログイン状態を保持する
  </label>

  <button type="submit">ログイン</button>

  <p class="signup">
    アカウントをお持ちでない方は <a href="/signup">新規登録</a>
  </p>
</form>

<style>
  .login-form {
    max-width: 380px;
    margin: 0 auto;
    padding: 32px;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    display: grid;
    gap: 8px;
  }
  .login-form h1 {
    font-size: 22px;
    margin: 0 0 16px;
    text-align: center;
  }
  .login-form label { font-weight: 600; font-size: 14px; }
  .login-form input[type="email"],
  .login-form input[type="password"] {
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    margin-bottom: 8px;
  }
  .pw-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pw-row a { font-size: 12px; color: #4f46e5; }
  .remember {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400 !important;
  }
  .login-form button {
    margin-top: 8px;
    padding: 14px;
    background: #4f46e5;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  .signup {
    text-align: center;
    font-size: 13px;
    color: #6b7280;
  }
  .signup a { color: #4f46e5; }
</style>`,
    tailwind: `<form
  class="mx-auto grid w-full max-w-sm gap-4 rounded-2xl border
         border-gray-200 p-8"
>
  <h1 class="text-center text-xl font-bold">ログイン</h1>

  <!-- ソーシャルログイン -->
  <button
    type="button"
    class="flex items-center justify-center gap-2 rounded-xl border
           border-gray-200 py-3 text-sm font-medium hover:bg-gray-50"
  >
    <img src="/icons/google.svg" alt="" class="size-4" />
    Googleでログイン
  </button>

  <div class="flex items-center gap-3 text-xs text-gray-400">
    <span class="h-px flex-1 bg-gray-200"></span>
    または
    <span class="h-px flex-1 bg-gray-200"></span>
  </div>

  <div class="grid gap-1.5">
    <label for="email" class="text-sm font-semibold">メールアドレス</label>
    <input
      type="email" id="email" autocomplete="email" required
      class="rounded-xl border border-gray-200 px-4 py-3 text-sm
             focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
  </div>

  <div class="grid gap-1.5">
    <div class="flex items-center justify-between">
      <label for="password" class="text-sm font-semibold">パスワード</label>
      <a href="/password-reset"
         class="text-xs text-indigo-600 hover:underline">
        パスワードをお忘れですか？
      </a>
    </div>
    <input
      type="password" id="password" autocomplete="current-password" required
      class="rounded-xl border border-gray-200 px-4 py-3 text-sm
             focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
  </div>

  <button
    type="submit"
    class="rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold
           text-white hover:bg-indigo-700"
  >
    ログイン
  </button>

  <p class="text-center text-xs text-gray-500">
    アカウントをお持ちでない方は
    <a href="/signup" class="text-indigo-600 hover:underline">新規登録</a>
  </p>
</form>`,
    react: `"use client";

import { useId, useRef, useState } from "react";

export function LoginForm({
  onSubmit,
}: {
  onSubmit?: (email: string, password: string) => Promise<void>;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const baseId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await onSubmit?.(email, password);
    } catch {
      // どちらが誤りかは特定させない（列挙攻撃対策）
      setError("メールアドレスまたはパスワードが正しくありません");
      emailRef.current?.focus();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-describedby={error ? \`\${baseId}-error\` : undefined}
      className="mx-auto grid w-full max-w-sm gap-4 rounded-2xl border
                 border-gray-200 p-8"
    >
      <h1 className="text-center text-xl font-bold">ログイン</h1>

      <div
        id={\`\${baseId}-error\`}
        aria-live="assertive"
        className={error ? "rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" : "sr-only"}
      >
        {error}
      </div>

      <div className="grid gap-1.5">
        <label htmlFor={\`\${baseId}-email\`} className="text-sm font-semibold">
          メールアドレス
        </label>
        <input
          ref={emailRef}
          id={\`\${baseId}-email\`}
          type="email"
          autoComplete="email"
          required
          value={email}
          aria-invalid={!!error}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-600
                     aria-[invalid=true]:border-red-500"
        />
      </div>

      <div className="grid gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor={\`\${baseId}-password\`}
            className="text-sm font-semibold"
          >
            パスワード
          </label>
          <a
            href="/password-reset"
            className="text-xs text-indigo-600 hover:underline"
          >
            パスワードをお忘れですか？
          </a>
        </div>
        <input
          id={\`\${baseId}-password\`}
          type="password"
          autoComplete="current-password"
          required
          value={password}
          aria-invalid={!!error}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-600
                     aria-[invalid=true]:border-red-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold
                   text-white hover:bg-indigo-700 disabled:opacity-60"
      >
        {loading ? "ログイン中..." : "ログイン"}
      </button>

      <p className="text-center text-xs text-gray-500">
        アカウントをお持ちでない方は{" "}
        <a href="/signup" className="text-indigo-600 hover:underline">
          新規登録
        </a>
      </p>
    </form>
  );
}`,
    shadcn: `// npx shadcn@latest add card input button label checkbox
// （shadcn/ui公式のlogin-01などのBlocksをベースにするのも近道）
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginCard() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">ログイン</CardTitle>
        <CardDescription>
          メールアドレスとパスワードを入力してください
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" type="email" autoComplete="email" required />
        </div>
        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">パスワード</Label>
            <a
              href="/password-reset"
              className="text-xs text-primary hover:underline"
            >
              パスワードをお忘れですか？
            </a>
          </div>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="font-normal">
            ログイン状態を保持する
          </Label>
        </div>
      </CardContent>
      <CardFooter className="grid gap-3">
        <Button type="submit" className="w-full">
          ログイン
        </Button>
        <Button variant="outline" className="w-full">
          Googleでログイン
        </Button>
      </CardFooter>
    </Card>
  );
}`,
  },
  related: ["password-input", "social-login", "otp-input", "text-field"],
  views: 46800,
  favorites: 2110,
  collections: ["saas-ui", "stripe-ui", "finance-ui"],
  gradient: "from-blue-600/15 via-indigo-500/10 to-sky-500/15",
  difficulty: 2,
  updatedAt: "2026-07-24",
};
