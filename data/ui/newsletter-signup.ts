import type { UIItem } from "@/types/ui";

export const newsletterSignup: UIItem = {
  slug: "newsletter-signup",
  name: "Newsletter Signup",
  nameJa: "メルマガ登録フォーム",
  description:
    "メールアドレスを入力してニュースレターを購読するフォーム。リード獲得の定番UI。",
  category: "landing-page",
  tags: ["フォーム", "リード獲得", "メール", "購読"],
  aliases: [
    "メールアドレスを入れて登録するやつ",
    "ニュースレター購読フォーム",
    "最新情報を受け取るための入力欄",
    "『登録する』ボタン付きのメール欄",
    "フッターにあるメール登録",
    "メルマガに申し込むフォーム",
  ],
  whatIs: [
    "メルマガ登録フォーム（Newsletter Signup）は、メールアドレスを入力してニュースレター（メールマガジン）の購読を申し込むためのフォームUIです。「Newsletter」は新聞（News）と手紙（Letter）を組み合わせた言葉で、定期的に届く読み物としてのメールを指します。多くの場合、メール入力欄と送信ボタンが横並びになった1行構成で提供されます。",
    "広告に依存せず読者と直接つながれるオウンドチャネルとして、近年ニュースレターは再評価されています。Substackの台頭や、Stripeのエンジニアリングブログ、Notionのプロダクトアップデート通知など、SaaS企業の多くがフッターやブログ記事末尾に登録フォームを常設し、リード獲得と顧客育成の起点にしています。",
    "実装上の主役はフォームバリデーションとフィードバックです。入力エラーの伝え方、送信中のローディング、登録完了メッセージ、そして特定電子メール法（日本）やGDPRに沿った同意取得まで含めて設計する必要があり、見た目のシンプルさに反して考慮点の多いUIです。",
  ],
  features: [
    "メール入力欄＋送信ボタンの1行構成が基本形で、最小の入力負荷で完結する",
    "インラインバリデーションでメール形式の誤りを送信前に指摘できる",
    "送信中はボタンをローディング状態にし、二重送信を防ぐ",
    "成功時はフォームを成功メッセージに置き換える、またはトーストで通知する",
    "「週1回配信・いつでも解除可能」など購読条件の注記を添えることが多い",
    "フッター・記事末尾・ポップアップなど複数の設置パターンがある",
  ],
  merits: [
    "プラットフォームのアルゴリズムに左右されず、読者に直接届くチャネルを構築できる",
    "入力項目がメールアドレス1つだけなので、コンバージョンのハードルが極めて低い",
    "獲得したリードをナーチャリング（顧客育成）やプロダクト通知に活用できる",
    "実装がシンプルで、MailchimpやResendなどのAPI連携も容易",
    "記事コンテンツとの相性が良く、ブログの回遊から購読への導線を作れる",
  ],
  demerits: [
    "「何が届くのか」が不明確だと登録されず、登録されても即解除されやすい",
    "ポップアップ型は閲覧の妨げになり、ブランド毀損や直帰率悪化のリスクがある",
    "捨てアドレスや誤入力の登録が混ざり、リストの質が下がりやすい",
    "特定電子メール法・GDPRなど法令対応（同意取得・解除導線）が必須で運用負荷がある",
    "ダブルオプトイン（確認メール）を挟むと確実性は上がるが離脱も増える",
  ],
  bestPractices: [
    "「毎週金曜に配信」「デザインの最新事例を紹介」など、頻度と内容を具体的に明示する",
    "placeholderをラベル代わりにしない。視覚的にラベルを隠す場合もaria-labelやsr-onlyで補う",
    "バリデーションエラーは送信時またはblur時に表示し、入力中に急かさない",
    "成功状態はその場で明確に伝え、「確認メールを送りました」など次の行動を示す",
    "type=\"email\"・autocomplete=\"email\"・inputmode=\"email\"でモバイル入力を最適化する",
    "スパムボット対策はCAPTCHAよりハニーポットやAPI側レート制限を優先し、正規ユーザーの負荷を避ける",
  ],
  useCases: [
    "Stripe — ブログ記事末尾で開発者向けニュースレターの購読を提案",
    "Notion — フッターにプロダクトアップデート購読フォームを常設",
    "Substack — 出版プラットフォーム自体が登録フォームを中心に設計されている",
    "スマートニュースなどのメディア — 記事下に編集部ニュースレターの案内",
    "ECサイト — 「新商品・セール情報をお届け」の登録でクーポンを進呈",
  ],
  accessibility: [
    "入力欄には<label>を関連付ける。視覚的に非表示にする場合はsr-onlyクラスを使う",
    "エラーメッセージはaria-describedbyで入力欄に関連付け、aria-invalidを設定する",
    "送信結果（成功・失敗）はaria-live=\"polite\"のリージョンで通知し、スクリーンリーダーにも伝える",
    "ボタンのローディング中もテキストを保ち、スピナーだけにしない（aria-busyの併用も有効）",
    "色だけでエラーを示さず、テキストとアイコンでも伝える",
    "フォーム全体をEnterキーで送信できるようにする（form要素でラップする）",
  ],
  figma: [
    "入力欄とボタンをAuto Layout（横方向）で組み、モバイルでは縦積みに切り替わるVariantを用意する",
    "input（default / focus / error / success）の状態をVariantsで管理する",
    "エラーテキストは表示/非表示をBoolean Propertyにし、表示時の高さ変化をAuto Layoutで吸収する",
    "成功状態（フォームがメッセージに置き換わる）も同一コンポーネントのVariantとして定義しておく",
    "placeholder・ラベル・注記のテキストをText Propertyにして多言語展開しやすくする",
  ],
  code: {
    html: `<form class="newsletter" action="/api/subscribe" method="post" novalidate>
  <h2>ニュースレターを購読</h2>
  <p>UIデザインの最新事例を毎週金曜にお届けします。いつでも解除できます。</p>
  <div class="row">
    <label class="sr-only" for="newsletter-email">メールアドレス</label>
    <input
      id="newsletter-email"
      name="email"
      type="email"
      inputmode="email"
      autocomplete="email"
      required
      placeholder="you@example.com"
    />
    <button type="submit">登録する</button>
  </div>
</form>

<style>
  .newsletter {
    max-width: 480px;
    padding: 32px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
  }
  .newsletter h2 { font-size: 18px; margin: 0 0 4px; }
  .newsletter p { color: #6b7280; font-size: 14px; margin: 0 0 16px; }
  .newsletter .row { display: flex; gap: 8px; }
  .newsletter input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 14px;
  }
  .newsletter button {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background: #7c3aed;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  .sr-only {
    position: absolute;
    width: 1px; height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
</style>`,
    tailwind: `<form class="max-w-md rounded-2xl border border-gray-200 p-8" novalidate>
  <h2 class="text-lg font-bold">ニュースレターを購読</h2>
  <p class="mt-1 text-sm text-gray-500">
    UIデザインの最新事例を毎週金曜にお届けします。いつでも解除できます。
  </p>
  <div class="mt-4 flex flex-col gap-2 sm:flex-row">
    <label class="sr-only" for="newsletter-email">メールアドレス</label>
    <input
      id="newsletter-email"
      type="email"
      inputmode="email"
      autocomplete="email"
      required
      placeholder="you@example.com"
      class="flex-1 rounded-xl border border-gray-300 px-4 py-2.5 text-sm
             placeholder:text-gray-400 focus:outline-none focus:ring-2
             focus:ring-violet-500"
    />
    <button
      type="submit"
      class="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold
             text-white transition hover:bg-violet-700
             focus-visible:outline-none focus-visible:ring-2
             focus-visible:ring-violet-500 focus-visible:ring-offset-2"
    >
      登録する
    </button>
  </div>
</form>`,
    react: `"use client";

import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const emailId = useId();
  const messageId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-2xl bg-violet-50 p-8 text-sm font-medium text-violet-700">
        ご登録ありがとうございます。確認メールをお送りしました。
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-md rounded-2xl border border-gray-200 p-8">
      <h2 className="text-lg font-bold">ニュースレターを購読</h2>
      <p className="mt-1 text-sm text-gray-500">
        毎週金曜に配信。いつでも解除できます。
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor={emailId}>
          メールアドレス
        </label>
        <input
          id={emailId}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? messageId : undefined}
          placeholder="you@example.com"
          className={\`flex-1 rounded-xl border px-4 py-2.5 text-sm
                      focus:outline-none focus:ring-2 focus:ring-violet-500
                      \${status === "error" ? "border-red-500" : "border-gray-300"}\`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold
                     text-white hover:bg-violet-700 disabled:opacity-60"
        >
          {status === "loading" ? "送信中…" : "登録する"}
        </button>
      </div>
      <p id={messageId} aria-live="polite" className="mt-2 text-sm text-red-600">
        {status === "error" && "メールアドレスの形式をご確認ください。"}
      </p>
    </form>
  );
}`,
    shadcn: `// npx shadcn@latest add input button card sonner
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

export function NewsletterSignupCard() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      toast.success("ご登録ありがとうございます。確認メールをお送りしました。");
      setEmail("");
    } catch {
      toast.error("登録に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>ニュースレターを購読</CardTitle>
        <CardDescription>毎週金曜に配信。いつでも解除できます。</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            aria-label="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "送信中…" : "登録する"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}`,
  },
  related: ["cta-section", "footer", "text-field", "form-validation"],
  views: 15600,
  favorites: 620,
  collections: ["saas-ui", "ec-ui"],
  gradient: "from-purple-500/15 via-fuchsia-500/10 to-violet-500/15",
  difficulty: 1,
  updatedAt: "2026-05-08",
};
