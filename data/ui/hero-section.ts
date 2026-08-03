import type { UIItem } from "@/types/ui";

export const heroSection: UIItem = {
  slug: "hero-section",
  name: "Hero Section",
  nameJa: "ヒーローセクション",
  description:
    "ページ最上部の大型ビジュアル領域。価値提案とCTAで第一印象を決める主役UI。",
  category: "hero",
  tags: ["ランディングページ", "ファーストビュー", "CTA", "マーケティング"],
  aliases: [
    "サイトを開いた瞬間に出るデカい見出しの部分",
    "トップページの一番上の大きい画像とキャッチコピー",
    "ファーストビューのメインビジュアル",
    "LPの冒頭のドーンとしたエリア",
    "キャッチコピーと登録ボタンがある最初の画面",
    "メインビジュアルエリア",
  ],
  whatIs: [
    "ヒーローセクション（Hero Section）は、Webページの最上部に配置される大型の導入領域で、キャッチコピー（見出し）、補足文、CTAボタン、ビジュアル（画像・イラスト・動画）で構成されます。名前は新聞・広告業界の用語「ヒーローイメージ（hero image）」に由来し、紙面の主役として最も目立つ位置に置かれる写真を「ヒーロー（主役・英雄）」と呼んだことから来ています。",
    "訪問者が最初に目にする「ファーストビュー」の大部分を占めるため、「このサイトは何のサイトか」「自分に関係があるか」「次に何をすべきか」を数秒で伝える役割を担います。ランディングページ（LP）の成否はヒーローセクションでほぼ決まると言われるほど、コンバージョンへの影響が大きい領域です。",
    "構成パターンは、テキストとビジュアルを左右に並べる「スプリット型」、中央揃えでコピーを主役にする「センター型」、背景全面に画像や動画を敷く「フルブリード型」などが定番です。近年はグラデーションやアニメーション、プロダクトのスクリーンショットを組み合わせた表現がSaaSサイトを中心に主流となっています。",
  ],
  features: [
    "見出し（H1）・サブテキスト・CTAボタン・ビジュアルの4要素が基本構成",
    "スプリット型・センター型・フルブリード型などのレイアウトパターンがある",
    "主CTAと副CTA（「無料で始める」と「デモを見る」など）の2ボタン構成が定番",
    "導入企業ロゴや利用者数などの社会的証明（ソーシャルプルーフ）を添えることが多い",
    "背景にグラデーション・パターン・動画などの装飾表現を用いる",
    "ページで唯一のH1見出しを含む、SEO上も重要な領域",
  ],
  merits: [
    "数秒で価値提案を伝えられ、直帰率の改善に直結する",
    "最も目立つ位置にCTAを置けるため、コンバージョン導線の起点になる",
    "ビジュアルとコピーでブランドの世界観・トーンを一気に印象づけられる",
    "H1と冒頭テキストを検索エンジンに明確に伝えられる",
    "A/Bテストの対象にしやすく、コピー変更だけで成果を検証できる",
  ],
  demerits: [
    "大きな画像・動画はLCP（Largest Contentful Paint）悪化の最大要因になりやすい",
    "抽象的なコピーや汎用ストック写真では「何のサイトか」が伝わらず逆効果",
    "画面いっぱいの装飾が「この下にコンテンツはない」と誤解させ、スクロールを妨げることがある",
    "モバイルでは要素が縦に積まれ、CTAがファーストビューから押し出されやすい",
    "作り込みに時間がかかる割に、検証なしでは効果が出ないことも多い",
  ],
  bestPractices: [
    "見出しは「誰の・何を・どう解決するか」を具体的に。抽象的なポエムを避ける",
    "CTAは主ボタン1つ＋副リンク1つまでに絞り、ボタン文言は行動の結果が分かる動詞にする",
    "ヒーロー画像はpriority読み込み（preload）し、幅ごとに最適化してLCPを2.5秒以内に抑える",
    "モバイル表示でCTAがファーストビューに収まるかを必ず確認する",
    "導入ロゴ・実績数値などの社会的証明をCTA直下に置き、行動の後押しをする",
    "背景装飾の上に載るテキストはコントラスト比4.5:1以上を確保する",
  ],
  useCases: [
    "Stripe — グラデーションアニメーション背景とプロダクトUIを組み合わせた代表例",
    "Apple — 製品写真を主役にしたセンター型ヒーローの王道",
    "Linear — ダークトーンとプロダクトスクリーンショットで世界観を伝えるSaaS型",
    "Airbnb — 検索フォームをヒーロー内に埋め込んだ行動直結型",
    "採用サイト — 社員写真とメッセージで企業文化を伝えるファーストビュー",
  ],
  accessibility: [
    "見出しはページで唯一のH1とし、文書構造の起点にする",
    "背景画像の上のテキストはオーバーレイなどでコントラスト比4.5:1（大文字は3:1）以上を確保する",
    "意味を持つ画像にはalt属性を、装飾画像にはalt=\"\"を設定する",
    "背景動画は自動再生するなら無音にし、停止ボタンを用意する（WCAG 2.2.2）",
    "アニメーションはprefers-reduced-motionで無効化できるようにする",
    "CTAボタンはリンク／ボタンの適切な要素で実装し、フォーカスリングを消さない",
  ],
  figma: [
    "デスクトップは12カラムグリッドでスプリット型（テキスト5〜6カラム＋ビジュアル6〜7カラム）を組む",
    "見出し・本文・CTA群を縦Auto Layout（gap: 16〜24）でまとめ、コピー差し替えに強くする",
    "背景グラデーションは別レイヤーに分離し、テキストとのコントラストを確認しながら調整する",
    "モバイルフレーム（375px）で要素の積み順とCTAの見え方を必ず検証する",
    "コピーのA/Bパターンを横に複製して並べ、チームでの比較検討をしやすくする",
    "CTAボタンはコンポーネント（default / hover）を使い、実装トークンと色を揃える",
  ],
  code: {
    html: `<section class="hero">
  <div class="hero-text">
    <p class="badge">v2.0 リリース</p>
    <h1>請求業務を、<br />ゼロコンマ数秒で。</h1>
    <p class="lead">
      Acmeは請求書の作成・送付・入金消込を自動化するSaaSです。
      経理チームの月末残業をなくします。
    </p>
    <div class="actions">
      <a href="/signup" class="btn primary">無料で始める</a>
      <a href="/demo" class="btn secondary">デモを見る</a>
    </div>
    <p class="proof">導入企業 3,200社・継続率 99.2%</p>
  </div>
  <img
    src="/images/product-screenshot.png"
    alt="Acmeのダッシュボード画面。今月の請求額と入金状況が表示されている"
    class="hero-visual"
    fetchpriority="high"
    width="1200" height="800"
  />
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 48px;
    max-width: 1120px;
    margin: 0 auto;
    padding: 96px 24px;
  }
  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 999px;
    background: #eef2ff;
    color: #4f46e5;
    font-size: 13px;
    font-weight: 600;
  }
  .hero h1 {
    margin: 16px 0;
    font-size: 52px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .lead { color: #6b7280; font-size: 18px; line-height: 1.7; }
  .actions { display: flex; gap: 12px; margin-top: 28px; }
  .btn {
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
  }
  .btn.primary { background: #4f46e5; color: #fff; }
  .btn.secondary { border: 1px solid #e5e7eb; color: #111827; }
  .proof { margin-top: 20px; font-size: 13px; color: #9ca3af; }
  .hero-visual {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 24px 64px rgba(79, 70, 229, 0.18);
  }
  @media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; padding: 48px 20px; gap: 32px; }
    .hero h1 { font-size: 34px; }
  }
</style>`,
    tailwind: `<section
  class="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white
         to-white"
>
  <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16
              md:grid-cols-2 md:py-24">
    <div>
      <p class="inline-block rounded-full bg-indigo-100 px-3 py-1 text-[13px]
                font-semibold text-indigo-600">
        v2.0 リリース
      </p>
      <h1 class="mt-4 text-4xl font-bold leading-tight tracking-tight
                 text-gray-900 md:text-5xl">
        請求業務を、<br />ゼロコンマ数秒で。
      </h1>
      <p class="mt-4 text-lg leading-relaxed text-gray-600">
        Acmeは請求書の作成・送付・入金消込を自動化するSaaSです。
        経理チームの月末残業をなくします。
      </p>
      <div class="mt-7 flex flex-wrap gap-3">
        <a href="/signup"
           class="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white
                  transition-colors hover:bg-indigo-500">
          無料で始める
        </a>
        <a href="/demo"
           class="rounded-xl border border-gray-200 px-6 py-3 font-semibold
                  text-gray-900 transition-colors hover:bg-gray-50">
          デモを見る
        </a>
      </div>
      <p class="mt-5 text-[13px] text-gray-400">
        導入企業 3,200社・継続率 99.2%
      </p>
    </div>
    <img
      src="/images/product-screenshot.png"
      alt="Acmeのダッシュボード画面。今月の請求額と入金状況が表示されている"
      fetchpriority="high"
      width="1200" height="800"
      class="w-full rounded-2xl shadow-2xl shadow-indigo-600/20"
    />
  </div>
</section>`,
    react: `"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

type Props = {
  badge?: string;
  title: React.ReactNode;
  lead: string;
  proof?: string;
  imageSrc: string;
  imageAlt: string;
};

export function HeroSection({
  badge,
  title,
  lead,
  proof,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50
                 via-white to-white"
    >
      {/* 装飾（読み上げ対象外） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 size-96
                   rounded-full bg-indigo-200/40 blur-3xl
                   motion-reduce:hidden"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16
                      md:grid-cols-2 md:py-24">
        <div>
          {badge && (
            <p className="inline-block rounded-full bg-indigo-100 px-3 py-1
                          text-[13px] font-semibold text-indigo-600">
              {badge}
            </p>
          )}
          <h1
            id="hero-title"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight
                       text-gray-900 md:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl
                         bg-indigo-600 px-6 py-3 font-semibold text-white
                         transition-colors hover:bg-indigo-500
                         focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              無料で始める
              <ArrowRight aria-hidden className="size-4" />
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl border
                         border-gray-200 px-6 py-3 font-semibold text-gray-900
                         transition-colors hover:bg-gray-50"
            >
              <Play aria-hidden className="size-4" />
              デモを見る
            </a>
          </div>
          {proof && (
            <p className="mt-5 text-[13px] text-gray-400">{proof}</p>
          )}
        </div>
        {/* LCP要素：priorityで先行読み込み */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={800}
          priority
          className="w-full rounded-2xl shadow-2xl shadow-indigo-600/20"
        />
      </div>
    </section>
  );
}

// 使用例
// <HeroSection
//   badge="v2.0 リリース"
//   title={<>請求業務を、<br />ゼロコンマ数秒で。</>}
//   lead="Acmeは請求書の作成・送付・入金消込を自動化するSaaSです。"
//   proof="導入企業 3,200社・継続率 99.2%"
//   imageSrc="/images/product-screenshot.png"
//   imageAlt="Acmeのダッシュボード画面"
// />`,
    shadcn: `// shadcn/uiに専用のHeroコンポーネントはないため、Button/Badgeを組み合わせて構築する
// npx shadcn@latest add button badge
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-gradient-to-b from-muted/60 via-background to-background"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16
                      md:grid-cols-2 md:py-24">
        <div>
          <Badge variant="secondary">v2.0 リリース</Badge>
          <h1
            id="hero-title"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight
                       md:text-5xl"
          >
            請求業務を、
            <br />
            ゼロコンマ数秒で。
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Acmeは請求書の作成・送付・入金消込を自動化するSaaSです。
            経理チームの月末残業をなくします。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="/signup">
                無料で始める
                <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/demo">
                <Play aria-hidden />
                デモを見る
              </a>
            </Button>
          </div>
          <p className="mt-5 text-[13px] text-muted-foreground">
            導入企業 3,200社・継続率 99.2%
          </p>
        </div>
        <Image
          src="/images/product-screenshot.png"
          alt="Acmeのダッシュボード画面。今月の請求額と入金状況が表示されている"
          width={1200}
          height={800}
          priority
          className="w-full rounded-2xl border shadow-2xl"
        />
      </div>
    </section>
  );
}`,
  },
  related: ["navbar", "pricing-table", "testimonials", "card", "carousel", "faq"],
  views: 52400,
  favorites: 2460,
  collections: ["stripe-ui", "saas-ui", "ai-ui"],
  gradient: "from-orange-500/15 via-amber-500/10 to-yellow-500/15",
  difficulty: 2,
  updatedAt: "2026-06-27",
};
