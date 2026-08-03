import type { UIItem } from "@/types/ui";

export const pricingTable: UIItem = {
  slug: "pricing-table",
  name: "Pricing Table",
  nameJa: "料金表",
  description:
    "複数の料金プランを横並びで比較できるUI。SaaSやサブスクの契約導線の要。",
  category: "pricing",
  tags: ["料金", "プラン比較", "SaaS", "コンバージョン"],
  aliases: [
    "値段の比較表",
    "プランを横に並べて比べるやつ",
    "月額と年額を切り替えられる料金ページ",
    "おすすめプランが強調されてる表",
    "サブスクの料金一覧",
    "プラン選択の画面",
  ],
  whatIs: [
    "料金表（Pricing Table）は、サービスの複数の料金プランをカラム状に並べ、価格・機能・制限をひと目で比較できるようにするUIコンポーネントです。「Pricing（価格設定）」と「Table（表）」を組み合わせた名前の通り、もともとは紙のカタログやパンフレットにあった価格比較表をWebに持ち込んだものが起源です。",
    "SaaSの普及とともに「Free / Pro / Enterprise」のような3〜4プラン構成が定番化し、単なる表からカード型のレイアウトへと進化しました。中央のプランを「おすすめ」バッジや色で強調するハイライト手法や、月払い・年払いを切り替えるトグルも、現代の料金表ではほぼ標準装備です。",
    "料金表は購入・契約の意思決定が行われる最重要ページに置かれるため、情報設計の巧拙がコンバージョン率に直結します。視覚デザインだけでなく、プラン間の差分をどう見せるか、どのプランに誘導するかというビジネス戦略と密接に結びついたUIといえます。",
  ],
  features: [
    "複数プランをカラム状に並べ、価格と機能を横断的に比較できる",
    "推奨プランをバッジ・枠線・拡大表示などで視覚的に強調できる",
    "月払い／年払いのトグルで価格表示を動的に切り替えられる",
    "機能リストにはチェックアイコンを使い、含まれる／含まれないを直感的に示す",
    "各カラムにCTAボタンを配置し、そのままサインアップへ誘導できる",
    "詳細な機能比較は下部の比較テーブル（Feature Comparison）に分離することが多い",
  ],
  merits: [
    "プラン間の差分が明確になり、ユーザーが自分に合うプランを選びやすくなる",
    "推奨プランの強調により、事業側が誘導したいプランへの契約を促進できる",
    "年払い割引をトグルで見せることで、LTVの高い年間契約を自然に訴求できる",
    "価格を隠さず提示することで信頼感が生まれ、営業コストの削減にもつながる",
    "アンカリング効果（高額プランとの対比で中間プランを割安に見せる）を設計に組み込める",
  ],
  demerits: [
    "プラン数や機能差分が多すぎると、比較疲れで離脱を招く",
    "モバイルでは横並びが崩れるため、縦積みやカルーセル化などの再設計が必要",
    "価格改定のたびに複数箇所（LP・ヘルプ・請求システム）との整合性維持が必要になる",
    "機能名の羅列だけでは価値が伝わらず、かえって検討のハードルを上げることがある",
  ],
  bestPractices: [
    "プランは3〜4個に絞る。選択肢が多すぎると決定回避（選択のパラドックス）が起きる",
    "推奨プランは1つだけ強調し、「人気No.1」などの根拠あるラベルを添える",
    "価格の近くに課金単位（/月、/ユーザー）と請求タイミングを明記して誤解を防ぐ",
    "機能リストは差分が伝わる項目を上位に置き、全プラン共通の項目は下部や別表に逃がす",
    "年払いトグルには「2ヶ月分お得」のような具体的なメリット表記を添える",
    "CTAボタンの文言はプランごとに変える（無料プランは「無料で始める」、Enterpriseは「営業に問い合わせ」）",
  ],
  useCases: [
    "Stripeの料金ページ — 従量課金と定額プランを明快なカラムで提示",
    "Notionの料金ページ — Free / Plus / Business / Enterpriseの4段構成と年払いトグル",
    "GitHubのPricing — 個人・チーム・企業向けにプランを分け、中央プランを強調",
    "Slackの料金ページ — 機能比較テーブルをプランカードの下に展開",
    "国内SaaS（freee、SmartHRなど）の料金ページ — 問い合わせ型のEnterpriseプラン併記",
  ],
  accessibility: [
    "プラン全体をtable要素にする場合はth/scope属性で行列の見出し関係を明示する",
    "カード型レイアウトでは各プランをsection＋見出し（h3など）で構造化し、読み上げ順を論理的に保つ",
    "チェック／バツのアイコンにはaria-labelや視覚的に隠したテキストで「含まれます／含まれません」を補う",
    "「おすすめ」の強調を色だけに頼らず、バッジのテキストでも伝える",
    "月払い／年払いトグルはrole=\"radiogroup\"またはaria-pressedで状態を支援技術に伝える",
  ],
  figma: [
    "プランカードをComponent化し、Variantsで「default / highlighted」の2状態を管理する",
    "機能リストの行（アイコン＋テキスト）を小さなComponentにしてAuto Layoutで縦に積むと編集が速い",
    "月払い／年払いはVariantプロパティ「billing: monthly / yearly」で価格テキストごと切り替える",
    "カラム全体はAuto Layout（横方向、gap 24前後）で組み、推奨プランだけpaddingやscaleを変えて浮かせる",
    "価格の桁数が増えた場合（¥100,000など）のレイアウト崩れを必ず確認する",
  ],
  code: {
    html: `<div class="pricing">
  <div class="plan">
    <h3>Free</h3>
    <p class="price">¥0<span>/月</span></p>
    <ul>
      <li>プロジェクト 3個まで</li>
      <li>メンバー 1人</li>
      <li>コミュニティサポート</li>
    </ul>
    <a href="/signup" class="cta">無料で始める</a>
  </div>
  <div class="plan highlighted">
    <span class="badge">人気No.1</span>
    <h3>Pro</h3>
    <p class="price">¥1,980<span>/月</span></p>
    <ul>
      <li>プロジェクト無制限</li>
      <li>メンバー 10人まで</li>
      <li>優先サポート</li>
    </ul>
    <a href="/signup?plan=pro" class="cta primary">Proを始める</a>
  </div>
  <div class="plan">
    <h3>Enterprise</h3>
    <p class="price">要相談</p>
    <ul>
      <li>無制限のメンバー</li>
      <li>SSO / 監査ログ</li>
      <li>専任サポート</li>
    </ul>
    <a href="/contact" class="cta">営業に問い合わせ</a>
  </div>
</div>

<style>
  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: start;
  }
  .plan {
    position: relative;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    padding: 32px 24px;
  }
  .plan.highlighted {
    border: 2px solid #4f46e5;
    box-shadow: 0 12px 32px rgba(79, 70, 229, 0.15);
  }
  .badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #4f46e5;
    color: #fff;
    font-size: 12px;
    padding: 4px 12px;
    border-radius: 999px;
  }
  .price {
    font-size: 36px;
    font-weight: 700;
    margin: 12px 0;
  }
  .price span {
    font-size: 14px;
    font-weight: 400;
    color: #6b7280;
  }
  .plan ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    color: #374151;
  }
  .plan li {
    padding: 8px 0;
    border-bottom: 1px solid #f3f4f6;
  }
  .cta {
    display: block;
    text-align: center;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #d1d5db;
    text-decoration: none;
    color: #111827;
    font-weight: 600;
  }
  .cta.primary {
    background: #4f46e5;
    border-color: #4f46e5;
    color: #fff;
  }
</style>`,
    tailwind: `<div class="grid items-start gap-6 md:grid-cols-3">
  <!-- Free -->
  <section class="rounded-2xl border border-gray-200 p-8">
    <h3 class="text-lg font-semibold">Free</h3>
    <p class="mt-3 text-4xl font-bold">
      ¥0<span class="text-sm font-normal text-gray-500">/月</span>
    </p>
    <ul class="mt-6 space-y-3 text-sm text-gray-600">
      <li class="flex items-center gap-2">✓ プロジェクト 3個まで</li>
      <li class="flex items-center gap-2">✓ メンバー 1人</li>
      <li class="flex items-center gap-2">✓ コミュニティサポート</li>
    </ul>
    <a href="/signup"
       class="mt-8 block rounded-xl border border-gray-300 py-3 text-center
              font-semibold hover:bg-gray-50">
      無料で始める
    </a>
  </section>

  <!-- Pro（推奨プラン） -->
  <section class="relative rounded-2xl border-2 border-indigo-600 p-8
                  shadow-xl shadow-indigo-600/10">
    <span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full
                 bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
      人気No.1
    </span>
    <h3 class="text-lg font-semibold">Pro</h3>
    <p class="mt-3 text-4xl font-bold">
      ¥1,980<span class="text-sm font-normal text-gray-500">/月</span>
    </p>
    <ul class="mt-6 space-y-3 text-sm text-gray-600">
      <li class="flex items-center gap-2">✓ プロジェクト無制限</li>
      <li class="flex items-center gap-2">✓ メンバー 10人まで</li>
      <li class="flex items-center gap-2">✓ 優先サポート</li>
    </ul>
    <a href="/signup?plan=pro"
       class="mt-8 block rounded-xl bg-indigo-600 py-3 text-center
              font-semibold text-white hover:bg-indigo-500">
      Proを始める
    </a>
  </section>

  <!-- Enterprise -->
  <section class="rounded-2xl border border-gray-200 p-8">
    <h3 class="text-lg font-semibold">Enterprise</h3>
    <p class="mt-3 text-4xl font-bold">要相談</p>
    <ul class="mt-6 space-y-3 text-sm text-gray-600">
      <li class="flex items-center gap-2">✓ 無制限のメンバー</li>
      <li class="flex items-center gap-2">✓ SSO / 監査ログ</li>
      <li class="flex items-center gap-2">✓ 専任サポート</li>
    </ul>
    <a href="/contact"
       class="mt-8 block rounded-xl border border-gray-300 py-3 text-center
              font-semibold hover:bg-gray-50">
      営業に問い合わせ
    </a>
  </section>
</div>`,
    react: `"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  monthly: number | null;
  yearly: number | null;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    features: ["プロジェクト 3個まで", "メンバー 1人", "コミュニティサポート"],
    cta: "無料で始める",
    href: "/signup",
  },
  {
    name: "Pro",
    monthly: 1980,
    yearly: 1650,
    features: ["プロジェクト無制限", "メンバー 10人まで", "優先サポート"],
    cta: "Proを始める",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    features: ["無制限のメンバー", "SSO / 監査ログ", "専任サポート"],
    cta: "営業に問い合わせ",
    href: "/contact",
  },
];

export function PricingTable() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div>
      {/* 月払い / 年払いトグル */}
      <div
        role="radiogroup"
        aria-label="請求サイクルの選択"
        className="mx-auto mb-10 flex w-fit rounded-full bg-gray-100 p-1"
      >
        {(["monthly", "yearly"] as const).map((cycle) => (
          <button
            key={cycle}
            type="button"
            role="radio"
            aria-checked={billing === cycle}
            onClick={() => setBilling(cycle)}
            className={\`rounded-full px-5 py-2 text-sm font-medium transition
                        \${billing === cycle ? "bg-white shadow" : "text-gray-500"}\`}
          >
            {cycle === "monthly" ? "月払い" : "年払い（2ヶ月分お得）"}
          </button>
        ))}
      </div>

      <div className="grid items-start gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const price = billing === "monthly" ? plan.monthly : plan.yearly;
          return (
            <section
              key={plan.name}
              aria-labelledby={\`plan-\${plan.name}\`}
              className={\`relative rounded-2xl p-8 \${
                plan.highlighted
                  ? "border-2 border-indigo-600 shadow-xl shadow-indigo-600/10"
                  : "border border-gray-200"
              }\`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2
                                 rounded-full bg-indigo-600 px-3 py-1 text-xs
                                 font-medium text-white">
                  人気No.1
                </span>
              )}
              <h3 id={\`plan-\${plan.name}\`} className="text-lg font-semibold">
                {plan.name}
              </h3>
              <p className="mt-3 text-4xl font-bold">
                {price === null ? (
                  "要相談"
                ) : (
                  <>
                    ¥{price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500">/月</span>
                  </>
                )}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check aria-hidden className="size-4 text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={\`mt-8 block rounded-xl py-3 text-center font-semibold \${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "border border-gray-300 hover:bg-gray-50"
                }\`}
              >
                {plan.cta}
              </a>
            </section>
          );
        })}
      </div>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add card button badge
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "¥0",
    features: ["プロジェクト 3個まで", "メンバー 1人"],
    cta: "無料で始める",
  },
  {
    name: "Pro",
    price: "¥1,980",
    features: ["プロジェクト無制限", "メンバー 10人まで", "優先サポート"],
    cta: "Proを始める",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "要相談",
    features: ["SSO / 監査ログ", "専任サポート"],
    cta: "営業に問い合わせ",
  },
];

export function PricingTable() {
  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={plan.highlighted ? "relative border-2 border-primary shadow-lg" : ""}
        >
          {plan.highlighted && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
              人気No.1
            </Badge>
          )}
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <p className="text-4xl font-bold">
              {plan.price}
              {plan.price !== "要相談" && (
                <span className="text-sm font-normal text-muted-foreground">
                  /月
                </span>
              )}
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check aria-hidden className="size-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              variant={plan.highlighted ? "default" : "outline"}
            >
              {plan.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}`,
  },
  related: ["card", "badge", "faq", "testimonials", "hero-section", "segmented-control"],
  views: 38400,
  favorites: 1540,
  collections: ["saas-ui", "stripe-ui"],
  gradient: "from-emerald-500/15 via-teal-500/10 to-cyan-500/15",
  difficulty: 2,
  updatedAt: "2026-06-12",
};
