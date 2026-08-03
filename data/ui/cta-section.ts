import type { UIItem } from "@/types/ui";

export const ctaSection: UIItem = {
  slug: "cta-section",
  name: "CTA Section",
  nameJa: "CTAセクション",
  description:
    "「無料で始める」など行動喚起に特化したセクション。LPの成果を締めくくる要のUI。",
  category: "landing-page",
  tags: ["LP", "CTA", "コンバージョン", "セクション", "マーケティング"],
  aliases: [
    "ページの下の方にある「無料で始める」の帯",
    "登録ボタンだけがドンと置いてあるエリア",
    "LPの最後の申し込みブロック",
    "行動を促す締めのセクション",
    "コンバージョンボタンのある目立つ帯",
    "背景色が変わって登録を勧めてくるところ",
  ],
  whatIs: [
    "CTAセクション（CTA Section）は、「無料で始める」「資料をダウンロード」といった行動喚起（CTA: Call To Action＝行動の呼びかけ）に特化した、ランディングページ内の独立したセクションです。CTAという言葉はダイレクトマーケティング用語に由来し、広告文の「今すぐお電話を」がWebのボタンに置き換わったものがCTAボタン、それを主役に据えた区画がCTAセクションと呼ばれます。",
    "典型的な構成は「キャッチコピー（見出し）＋補足文＋CTAボタン1〜2個」という極めてシンプルなもので、周囲のセクションと異なる背景色やグラデーションで塗り、視覚的な切れ目を作るのが定石です。LPの最下部（フッター直前）に置く「締めのCTA」が最も一般的ですが、長いページでは中間にも複数回挿入されます。",
    "StripeやShopifyのLPでは、ページを読み終えた温度感の高いユーザーを取りこぼさないため、ヒーローセクションと同じCTAを最後にもう一度提示する構成が徹底されています。「クレジットカード不要」「いつでも解約可能」といった不安解消のマイクロコピーを添えるかどうかでクリック率が大きく変わる、コピーライティングとデザインの総合力が問われるコンポーネントです。",
  ],
  features: [
    "見出し＋補足文＋CTAボタンという要素を絞り込んだ構成",
    "周囲と異なる背景色・グラデーションでページ内に視覚的な切れ目を作る",
    "プライマリCTA（登録）とセカンダリCTA（問い合わせ等）の2ボタン構成が可能",
    "「クレジットカード不要」などの不安解消マイクロコピーを添えられる",
    "LPの最下部だけでなく、長いページの中間に複数回配置できる",
    "導入企業ロゴや実績数値を添えて説得力を補強できる",
  ],
  merits: [
    "ページを読み終えた温度感の高いユーザーを、迷わせずコンバージョンへ導ける",
    "要素が少ないため視線がCTAボタンに集中し、クリック率を最大化しやすい",
    "背景の塗り替えでページに区切りが生まれ、「ここが行動のタイミング」と伝わる",
    "コピーとボタン文言のA/Bテストがしやすく、改善サイクルを回しやすい",
    "実装が単純で、LP全体の中では最小の工数で成果に直結する",
  ],
  demerits: [
    "本文と無関係に乱発すると押し売り感が出て、ブランド信頼を損なう",
    "CTAを2つ以上並べると選択のパラドックスでクリック率が下がることがある",
    "コピーが抽象的（「今すぐ始めよう」だけ）だと何が起きるか伝わらず不安を生む",
    "コントラストの強い背景に置いたボタンの配色を誤ると、逆に視認性が落ちる",
    "デザインだけ整えてもオファー（提供価値）が弱ければ成果は出ない",
  ],
  bestPractices: [
    "CTAボタンの文言は「無料で試す」「資料をダウンロード」など行動の結果が分かる動詞にする",
    "プライマリCTAは1つに絞り、セカンダリは控えめなゴーストボタンにする",
    "「クレジットカード不要・いつでも解約可能」などの不安解消コピーをボタン直下に添える",
    "ヒーローセクションと同じCTAを最下部で再提示し、読了ユーザーを取りこぼさない",
    "背景とボタンのコントラストを確保する（濃色背景なら白ボタンが定石）",
    "見出しは機能ではなくベネフィット（ユーザーが得る変化）を語る",
  ],
  useCases: [
    "Stripe — LP最下部の「今すぐ始める」＋営業への問い合わせの2択CTA",
    "Shopify — 「無料体験をはじめる」を全ページ下部で繰り返し提示",
    "Notion / Slack等のSaaS LP — グラデーション背景の締めCTAセクション",
    "国内SaaSのLP — 「資料請求」と「無料トライアル」の2ボタン構成",
    "ECのキャンペーンLP — セール告知＋「今すぐ購入」への誘導帯",
  ],
  accessibility: [
    "セクションに見出し（h2など）を必ず置き、ページのアウトラインに組み込む",
    "CTAはリンクなら a、アプリ内動作なら button と、挙動に合った要素で実装する",
    "濃色・グラデーション背景でもテキストのコントラスト比4.5:1以上を確保する",
    "ボタンのフォーカスリングが背景色に沈まないよう、ring-offsetなどで調整する",
    "「こちら」ではなく「無料で始める」のように、リンクテキスト単体で目的が分かる文言にする",
    "装飾目的の背景画像・図形は aria-hidden にし、読み上げノイズを避ける",
  ],
  figma: [
    "Sectionフレーム（幅1440px等）に、中央揃えのAuto Layout（縦、gap 16〜24px）で組む",
    "背景はグラデーション＋ノイズや図形の装飾レイヤーを分けて管理する",
    "見出し・本文・ボタンにText Styleを適用し、LP全体の階層と揃える",
    "ボタンは既存のButtonコンポーネントを流用し、hover / focus Variantを確認する",
    "デスクトップ・タブレット・モバイルの3フレームで折り返しと余白を検証する",
    "コピー差し替えのA/Bテスト用に、見出しをComponent Propertyのテキストにしておく",
  ],
  code: {
    html: `<section class="cta-section" aria-labelledby="cta-heading">
  <h2 id="cta-heading">今日から、売上が見えるダッシュボードを。</h2>
  <p>クレジットカード不要。14日間の無料トライアルですべての機能を試せます。</p>
  <div class="cta-buttons">
    <a class="btn-primary" href="/signup">無料で始める</a>
    <a class="btn-secondary" href="/contact">営業に相談する</a>
  </div>
  <p class="cta-note">いつでも解約可能・導入企業3,000社</p>
</section>

<style>
  .cta-section {
    text-align: center;
    padding: 80px 24px;
    border-radius: 24px;
    color: #fff;
    background: linear-gradient(135deg, #a21caf, #db2777, #f43f5e);
  }
  .cta-section h2 {
    margin: 0;
    font-size: clamp(24px, 4vw, 40px);
    letter-spacing: -0.02em;
  }
  .cta-section p {
    margin: 16px auto 0;
    max-width: 40em;
    color: rgb(255 255 255 / 0.85);
  }
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 32px;
    flex-wrap: wrap;
  }
  .btn-primary {
    background: #fff;
    color: #be185d;
    font-weight: 700;
    padding: 14px 32px;
    border-radius: 9999px;
    text-decoration: none;
  }
  .btn-secondary {
    border: 1px solid rgb(255 255 255 / 0.6);
    color: #fff;
    font-weight: 600;
    padding: 14px 32px;
    border-radius: 9999px;
    text-decoration: none;
  }
  .cta-note {
    margin-top: 20px;
    font-size: 13px;
    color: rgb(255 255 255 / 0.7);
  }
</style>`,
    tailwind: `<section
  aria-labelledby="cta-heading"
  class="rounded-3xl bg-gradient-to-br from-fuchsia-700 via-pink-600
         to-rose-500 px-6 py-20 text-center text-white"
>
  <h2
    id="cta-heading"
    class="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
  >
    今日から、売上が見えるダッシュボードを。
  </h2>
  <p class="mx-auto mt-4 max-w-xl text-white/85">
    クレジットカード不要。14日間の無料トライアルですべての機能を試せます。
  </p>

  <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
    <a
      href="/signup"
      class="rounded-full bg-white px-8 py-3.5 font-bold text-pink-700
             shadow-lg transition hover:bg-pink-50
             focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      無料で始める
    </a>
    <a
      href="/contact"
      class="rounded-full border border-white/60 px-8 py-3.5 font-semibold
             text-white transition hover:bg-white/10"
    >
      営業に相談する
    </a>
  </div>

  <p class="mt-5 text-sm text-white/70">
    いつでも解約可能・導入企業3,000社
  </p>
</section>`,
    react: `"use client";

import { ArrowRight } from "lucide-react";

export function CtaSection({
  heading = "今日から、売上が見えるダッシュボードを。",
  description = "クレジットカード不要。14日間の無料トライアルですべての機能を試せます。",
  primary = { label: "無料で始める", href: "/signup" },
  secondary = { label: "営業に相談する", href: "/contact" },
  note = "いつでも解約可能・導入企業3,000社",
}: {
  heading?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  note?: string;
}) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br
                 from-fuchsia-700 via-pink-600 to-rose-500 px-6 py-20
                 text-center text-white"
    >
      {/* 装飾（読み上げ対象外） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-96
                   -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative">
        <h2
          id="cta-heading"
          className="mx-auto max-w-2xl text-3xl font-bold tracking-tight
                     sm:text-4xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">{description}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-white
                       px-8 py-3.5 font-bold text-pink-700 shadow-lg
                       transition hover:bg-pink-50
                       focus-visible:outline focus-visible:outline-2
                       focus-visible:outline-offset-2
                       focus-visible:outline-white"
          >
            {primary.label}
            <ArrowRight aria-hidden className="size-4" />
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="rounded-full border border-white/60 px-8 py-3.5
                         font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </a>
          )}
        </div>

        {note && <p className="mt-5 text-sm text-white/70">{note}</p>}
      </div>
    </section>
  );
}`,
    shadcn: `// shadcn/uiにCTAセクション専用コンポーネントは無いため、
// Button（npx shadcn@latest add button）を組み合わせて構築する
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="rounded-3xl bg-gradient-to-br from-fuchsia-700 via-pink-600
                 to-rose-500 px-6 py-20 text-center text-white"
    >
      <h2
        id="cta-heading"
        className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
      >
        今日から、売上が見えるダッシュボードを。
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-white/85">
        クレジットカード不要。14日間の無料トライアルですべての機能を試せます。
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button
          asChild
          size="lg"
          className="rounded-full bg-white px-8 font-bold text-pink-700
                     hover:bg-pink-50"
        >
          <a href="/signup">
            無料で始める
            <ArrowRight aria-hidden className="size-4" />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full border-white/60 bg-transparent px-8
                     text-white hover:bg-white/10 hover:text-white"
        >
          <a href="/contact">営業に相談する</a>
        </Button>
      </div>

      <p className="mt-5 text-sm text-white/70">
        いつでも解約可能・導入企業3,000社
      </p>
    </section>
  );
}`,
  },
  related: ["hero-section", "button", "newsletter-signup", "feature-section"],
  views: 41200,
  favorites: 1730,
  collections: ["saas-ui", "ec-ui"],
  gradient: "from-fuchsia-600/15 via-pink-500/10 to-rose-400/15",
  difficulty: 1,
  updatedAt: "2026-06-05",
};
