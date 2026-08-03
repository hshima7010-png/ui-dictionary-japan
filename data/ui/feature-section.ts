import type { UIItem } from "@/types/ui";

export const featureSection: UIItem = {
  slug: "feature-section",
  name: "Feature Section",
  nameJa: "機能紹介セクション",
  description:
    "プロダクトの機能や価値をアイコン・画像と共に並べて伝えるLPの中核セクション。",
  category: "landing-page",
  tags: ["LP", "マーケティング", "グリッド", "機能訴求"],
  aliases: [
    "サービスの特徴を並べるところ",
    "アイコンと説明文が3つ並んでいるやつ",
    "LPの機能一覧",
    "できることを紹介するセクション",
    "強みを3カラムで見せる部分",
    "プロダクトの売りを説明するブロック",
  ],
  whatIs: [
    "機能紹介セクション（Feature Section）は、ランディングページや製品サイトにおいて、プロダクトの主要な機能・特徴・提供価値を、アイコンやスクリーンショットと短い説明文の組み合わせで整理して見せるセクションです。「Feature（機能・特徴）」を紹介する区画であることからそのまま名付けられ、ヒーローセクションの直後に置かれる「LPの本文」ともいえる存在です。",
    "代表的なレイアウトは、アイコン＋見出し＋説明文のカードを3〜4カラムのグリッドに並べる形式と、大きなスクリーンショットとテキストを左右交互に配置する「ジグザグ（Alternating）」形式の2つです。LinearやStripeのプロダクトページでは、実際のUIのスクリーンショットや動くデモを機能紹介に組み込み、言葉より先に体験を見せる構成が採られています。Notionも、ユースケースごとに機能をカード状に並べる構成でこのパターンを活用しています。",
    "訪問者はヒーローセクションでプロダクトの概要を掴んだ後、このセクションで「自分の課題を解決できるか」を判断します。そのため、機能の羅列ではなく「ユーザーが得られる結果（ベネフィット）」に翻訳して書けるかどうかが、コンバージョンを左右する重要なポイントになります。",
  ],
  features: [
    "アイコン・見出し・説明文のセットを繰り返す一貫したカード構造",
    "3〜4カラムグリッド、ジグザグ型、ベントーグリッド型など複数のレイアウトバリエーションがある",
    "セクション冒頭に「アイブロウテキスト（小さなラベル）＋大見出し＋リード文」を置くのが定石",
    "スクリーンショットや動画を組み込み、実際の画面で機能を証明できる",
    "スクロール連動のフェードインなど、控えめなアニメーションと相性が良い",
    "レスポンシブでは1カラムに折り返し、モバイルでも読みやすく再構成できる",
  ],
  merits: [
    "プロダクトの価値を短時間で網羅的に伝えられ、離脱前の判断材料を提供できる",
    "カード構造の繰り返しなので、機能の追加・削除・並び替えが容易",
    "見出しに機能名や課題キーワードを含めることでSEO面の効果も期待できる",
    "アイコンや画像により、テキストだけより記憶に残りやすい",
    "CMS化しやすく、マーケターがエンジニアの手を借りずに更新できる構成にしやすい",
  ],
  demerits: [
    "機能を詰め込みすぎると「どれも重要に見えない」状態になり、訴求力が薄まる",
    "アイコンが抽象的すぎると意味が伝わらず、単なる飾りになってしまう",
    "競合他社と似たテンプレート構成になりやすく、差別化が難しい",
    "ベネフィットではなく機能スペックの羅列になりがちで、読み手に刺さらないことがある",
    "画像やスクリーンショットが多いとページの読み込みが重くなる",
  ],
  bestPractices: [
    "1セクションに載せる機能は3〜6個に絞り、それ以上は別セクションやタブに分割する",
    "見出しは「機能名」ではなく「ユーザーが得られる結果」で書く（例：「タグ機能」→「探す時間をゼロに」）",
    "説明文は2〜3行以内に抑え、詳細は機能詳細ページへのリンクに逃がす",
    "最も重要な機能から順に、左上（モバイルでは最上部）から配置する",
    "スクリーンショットは実際のプロダクト画面を使い、モックアップと乖離させない",
    "スクロールアニメーションは prefers-reduced-motion を尊重し、コンテンツの表示を妨げない",
  ],
  useCases: [
    "Linear のプロダクトページ — 実際のUIを大きく見せるベントーグリッド型の機能紹介",
    "Stripe のトップページ — 決済・請求・不正検知などプロダクト群をカードで整理",
    "Notion のLP — ユースケース別に機能をカード＋スクリーンショットで紹介",
    "Slack の機能ページ — チャンネル・ハドル・検索などをジグザグ型で交互に紹介",
    "国内SaaS（SmartHR・freeeなど）のLP — 課題→機能→ベネフィットの3カラム構成",
  ],
  accessibility: [
    "セクションは <section> と aria-labelledby でセクション見出しと関連付ける",
    "見出しレベルを正しく階層化する（セクション見出しがh2、各機能の見出しがh3）",
    "装飾目的のアイコンには aria-hidden=\"true\" を付け、スクリーンリーダーに読ませない",
    "スクリーンショット画像には機能の内容が伝わる代替テキスト（alt）を設定する",
    "「詳しく見る」リンクはリンク先が分かるテキストにするか aria-label で補足する",
    "自動再生アニメーションは prefers-reduced-motion で無効化できるようにする",
  ],
  figma: [
    "アイコン・見出し・本文を Auto Layout（縦方向、gap 12〜16px）で1枚のカードコンポーネント化する",
    "カードを Grid の Auto Layout（wrap）で並べ、カラム数の変化をResizingで検証する",
    "アイコンは Component Swap Property にして、インスタンスごとに差し替えられるようにする",
    "見出し・本文は Text Property 化し、コピー検討をFigma上で高速に回せるようにする",
    "3カラム→2カラム→1カラムのブレークポイント別フレームを用意し、折り返し時の見え方を確認する",
  ],
  code: {
    html: `<section class="features" aria-labelledby="features-heading">
  <p class="eyebrow">FEATURES</p>
  <h2 id="features-heading">チームの仕事が、ここに集まる</h2>
  <p class="lead">散らばった情報を1か所に。3つの主要機能をご紹介します。</p>

  <div class="grid">
    <article class="card">
      <div class="icon" aria-hidden="true">⚡</div>
      <h3>爆速の検索</h3>
      <p>すべてのドキュメントを横断検索。探す時間をゼロにします。</p>
    </article>
    <article class="card">
      <div class="icon" aria-hidden="true">🔄</div>
      <h3>リアルタイム同期</h3>
      <p>編集内容は即座に全員へ反映。会議前の共有作業が不要に。</p>
    </article>
    <article class="card">
      <div class="icon" aria-hidden="true">🔒</div>
      <h3>安心の権限管理</h3>
      <p>閲覧・編集権限をワンクリックで設定。監査ログにも対応。</p>
    </article>
  </div>
</section>

<style>
  .features { max-width: 1080px; margin: 0 auto; padding: 96px 24px; text-align: center; }
  .eyebrow { color: #7c3aed; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; }
  .features h2 { font-size: 36px; margin: 12px 0; }
  .lead { color: #6b7280; margin-bottom: 48px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .card { text-align: left; padding: 28px; border: 1px solid #e5e7eb; border-radius: 16px; }
  .icon { font-size: 28px; margin-bottom: 16px; }
  .card h3 { font-size: 18px; margin-bottom: 8px; }
  .card p { color: #6b7280; font-size: 14px; line-height: 1.7; }
  @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
</style>`,
    tailwind: `<section class="mx-auto max-w-6xl px-6 py-24" aria-labelledby="features-heading">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-sm font-bold tracking-widest text-violet-600">FEATURES</p>
    <h2 id="features-heading" class="mt-3 text-4xl font-bold tracking-tight">
      チームの仕事が、ここに集まる
    </h2>
    <p class="mt-4 text-gray-600">
      散らばった情報を1か所に。3つの主要機能をご紹介します。
    </p>
  </div>

  <div class="mt-16 grid gap-6 md:grid-cols-3">
    <article class="rounded-2xl border border-gray-200 p-7 transition-shadow hover:shadow-md">
      <div class="flex size-12 items-center justify-center rounded-xl bg-violet-100">
        <svg class="size-6 text-violet-600" aria-hidden="true" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 class="mt-5 text-lg font-semibold">爆速の検索</h3>
      <p class="mt-2 text-sm leading-relaxed text-gray-600">
        すべてのドキュメントを横断検索。探す時間をゼロにします。
      </p>
    </article>
    <!-- カードを機能の数だけ繰り返し -->
  </div>
</section>`,
    react: `"use client";

import type { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureSection({
  eyebrow = "FEATURES",
  heading,
  lead,
  features,
}: {
  eyebrow?: string;
  heading: string;
  lead?: string;
  features: Feature[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold tracking-widest text-violet-600">{eyebrow}</p>
        <h2 id="features-heading" className="mt-3 text-4xl font-bold tracking-tight">
          {heading}
        </h2>
        {lead && <p className="mt-4 text-gray-600">{lead}</p>}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-gray-200 p-7 transition-shadow hover:shadow-md"
          >
            <div
              aria-hidden="true"
              className="flex size-12 items-center justify-center rounded-xl
                         bg-violet-100 text-violet-600"
            >
              {feature.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}`,
    shadcn: `// shadcn/uiに専用コンポーネントは無いため、Cardを土台に構築します
// npx shadcn@latest add card
import { Zap, RefreshCw, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  { icon: Zap, title: "爆速の検索", body: "すべてのドキュメントを横断検索。探す時間をゼロにします。" },
  { icon: RefreshCw, title: "リアルタイム同期", body: "編集内容は即座に全員へ反映。会議前の共有作業が不要に。" },
  { icon: Lock, title: "安心の権限管理", body: "閲覧・編集権限をワンクリックで設定。監査ログにも対応。" },
];

export function FeatureSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-center text-4xl font-bold">
        チームの仕事が、ここに集まる
      </h2>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <Card key={title}>
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-xl bg-violet-100">
                <Icon aria-hidden className="size-6 text-violet-600" />
              </div>
              <CardTitle className="pt-2">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {body}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}`,
  },
  related: ["hero-section", "cta-section", "testimonials", "pricing-table"],
  views: 21400,
  favorites: 900,
  collections: ["saas-ui", "stripe-ui"],
  gradient: "from-violet-500/15 via-purple-500/10 to-fuchsia-500/15",
  difficulty: 2,
  updatedAt: "2026-05-14",
};
