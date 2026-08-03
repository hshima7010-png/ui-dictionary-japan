import type { UIItem } from "@/types/ui";

export const logoCloud: UIItem = {
  slug: "logo-cloud",
  name: "Logo Cloud",
  nameJa: "ロゴクラウド（導入企業ロゴ）",
  description:
    "導入企業や提携先のロゴを並べて信頼性を示すセクション。LPの社会的証明の定番。",
  category: "landing-page",
  tags: ["社会的証明", "LP", "信頼性", "導入実績"],
  aliases: [
    "導入企業のロゴが並んでるところ",
    "有名企業のロゴ一覧",
    "お客様の会社ロゴが流れるやつ",
    "利用企業を並べたセクション",
    "『〇〇社も使っています』の帯",
    "ロゴがスライドしていくエリア",
  ],
  whatIs: [
    "ロゴクラウド（Logo Cloud）は、サービスを導入している企業や提携パートナーのロゴをグリッド状・帯状に並べて表示するランディングページのセクションです。タグが集まった「タグクラウド」になぞらえて、ロゴが雲（クラウド）のように集まっている様子からこの名前が付きました。「ロゴウォール」「ソーシャルプルーフバー」と呼ばれることもあります。",
    "心理学でいう社会的証明（Social Proof）を最も端的に伝える手段で、「あの有名企業も使っているなら安心だ」という判断のショートカットを訪問者に提供します。LinearやNotion、StripeなどのSaaSはヒーローセクションの直下にロゴクラウドを配置し、ファーストビューの信頼形成に活用しています。特にLinearは、ロゴをモノトーンに統一して自社のダークなブランドトーンに溶け込ませる手法で知られています。",
    "実装面では、静的なグリッド配置と、CSSアニメーションで水平に流し続けるマーキー（無限スクロール）型の2系統が主流です。ロゴ数が多い場合はマーキー型が省スペースで、少ない場合は静的グリッドの方が落ち着いた印象を与えます。",
  ],
  features: [
    "導入企業・メディア掲載・受賞歴などのロゴを一覧で表示する",
    "グレースケール化やopacity調整でロゴの色味を統一し、ページの主役を邪魔しない",
    "CSSアニメーションによるマーキー（無限横スクロール）型のバリエーションがある",
    "「10,000社以上が導入」のような実績数値の見出しとセットで使われることが多い",
    "レスポンシブでは列数を変えるか、マーキー化して省スペースに対応する",
    "ロゴクリックで導入事例ページへ誘導するリンク付きの実装もある",
  ],
  merits: [
    "有名企業のロゴが並ぶだけで信頼性が飛躍的に高まり、コンバージョン率の改善に直結する",
    "テキストを読ませることなく一瞬で「実績」を伝えられる",
    "実装コストが低く、ロゴ画像を差し替えるだけで運用できる",
    "ヒーロー直下に置くことでファーストビュー離脱を抑える効果が期待できる",
    "導入事例コンテンツへの入口として回遊を促せる",
  ],
  demerits: [
    "無名企業のロゴばかりだと逆に信頼を損なう可能性がある",
    "ロゴ使用には各社の許諾が必要で、法務確認の運用コストがかかる",
    "各社ロゴのサイズ・余白・色調がバラバラだと雑然とした印象になる",
    "マーキー型は動きが気になるユーザーもおり、prefers-reduced-motion対応が必須になる",
    "スタートアップ初期はそもそも掲載できるロゴが集まらない",
  ],
  bestPractices: [
    "ロゴはグレースケール＋opacity 60〜70%程度に統一し、hoverでフルカラーに戻す演出が定番",
    "各ロゴの視覚的な大きさ（面積）を揃える。横長ロゴと正方形ロゴは高さ基準で調整する",
    "「導入企業10,000社」のような数値見出しを添えて具体性を持たせる",
    "掲載順は知名度の高い企業を左上（読み始め位置）に置く",
    "マーキー型ではアニメーションを一時停止できる手段とprefers-reduced-motion対応を入れる",
    "ロゴはSVGで用意し、Retina環境でもにじまないようにする",
  ],
  useCases: [
    "Linear — トップページのヒーロー直下にモノトーンの顧客ロゴを整然と配置",
    "Stripe — 「数百万社のビジネスを支える」の見出しとともに大手企業ロゴを表示",
    "Notion — 導入企業ロゴをグリッド表示し、クリックで導入事例へ誘導",
    "Vercel — ダークテーマに合わせた白抜きロゴのマーキー表示",
    "国内SaaSのLP — 「導入実績」セクションでメディア掲載ロゴと併記",
  ],
  accessibility: [
    "ロゴ画像には必ず企業名のalt属性を付ける（alt=\"株式会社〇〇\"）",
    "装飾目的で同じロゴを繰り返すマーキー複製分には aria-hidden=\"true\" を付け、読み上げの重複を防ぐ",
    "セクションには見出し（h2など）を置き、スクリーンリーダーでも文脈が伝わるようにする",
    "マーキーは prefers-reduced-motion: reduce で停止させる",
    "ロゴがリンクの場合はフォーカスリングを消さず、リンク先が分かるaria-labelを付与する",
  ],
  figma: [
    "Auto Layout（横方向・wrap）でロゴを並べ、gapを一括管理する",
    "各ロゴは同一サイズのFrame（例: 158×48）に収めて中央配置し、視覚的な大きさを揃える",
    "ロゴレイヤーに白黒のColor Variableを適用し、ライト/ダークテーマを一括切り替えできるようにする",
    "マーキー型のプロトタイプはSmart Animateのループではなく、After Delay＋横移動で擬似再現する",
    "実ロゴが未確定の段階では、社名テキストのプレースホルダーコンポーネントで代用する",
  ],
  code: {
    html: `<section class="logo-cloud" aria-labelledby="logo-cloud-heading">
  <h2 id="logo-cloud-heading">10,000社以上のチームが利用しています</h2>
  <ul class="logos">
    <li><img src="/logos/acme.svg" alt="Acme株式会社" /></li>
    <li><img src="/logos/globex.svg" alt="Globex株式会社" /></li>
    <li><img src="/logos/initech.svg" alt="Initech株式会社" /></li>
    <li><img src="/logos/umbrella.svg" alt="Umbrella株式会社" /></li>
    <li><img src="/logos/stark.svg" alt="Stark Industries" /></li>
  </ul>
</section>

<style>
  .logo-cloud {
    padding: 64px 24px;
    text-align: center;
  }
  .logo-cloud h2 {
    font-size: 14px;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 32px;
  }
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 32px 48px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .logos img {
    height: 32px;
    width: auto;
    filter: grayscale(1);
    opacity: 0.65;
    transition: filter 0.2s, opacity 0.2s;
  }
  .logos img:hover {
    filter: grayscale(0);
    opacity: 1;
  }
</style>`,
    tailwind: `<section class="px-6 py-16 text-center" aria-labelledby="logo-cloud-heading">
  <h2
    id="logo-cloud-heading"
    class="mb-8 text-sm font-semibold text-gray-500"
  >
    10,000社以上のチームが利用しています
  </h2>
  <ul
    class="mx-auto flex max-w-4xl flex-wrap items-center justify-center
           gap-x-12 gap-y-8"
  >
    <li><img class="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src="/logos/acme.svg" alt="Acme株式会社" /></li>
    <li><img class="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src="/logos/globex.svg" alt="Globex株式会社" /></li>
    <li><img class="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src="/logos/initech.svg" alt="Initech株式会社" /></li>
    <li><img class="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src="/logos/umbrella.svg" alt="Umbrella株式会社" /></li>
    <li><img class="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" src="/logos/stark.svg" alt="Stark Industries" /></li>
  </ul>
</section>`,
    react: `"use client";

type Logo = { src: string; name: string };

/**
 * マーキー（無限横スクロール）型のロゴクラウド。
 * 複製した2周目には aria-hidden を付けて読み上げの重複を防ぎます。
 */
export function LogoCloud({ logos }: { logos: Logo[] }) {
  return (
    <section aria-labelledby="logo-cloud-heading" className="py-16">
      <h2
        id="logo-cloud-heading"
        className="mb-8 text-center text-sm font-semibold text-gray-500"
      >
        10,000社以上のチームが利用しています
      </h2>
      <div
        className="group relative overflow-hidden
                   [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div
          className="flex w-max animate-[marquee_30s_linear_infinite] gap-16
                     group-hover:[animation-play-state:paused]
                     motion-reduce:animate-none motion-reduce:w-full
                     motion-reduce:flex-wrap motion-reduce:justify-center"
        >
          {[false, true].map((isClone) => (
            <ul
              key={isClone ? "clone" : "original"}
              aria-hidden={isClone || undefined}
              className="flex items-center gap-16"
            >
              {logos.map((logo) => (
                <li key={logo.name} className="shrink-0">
                  <img
                    src={logo.src}
                    alt={isClone ? "" : logo.name}
                    className="h-8 w-auto opacity-60 grayscale
                               transition hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

// tailwind.config.ts に keyframes を追加:
// keyframes: { marquee: { to: { transform: "translateX(-50%)" } } }`,
    shadcn: `// shadcn/ui に Logo Cloud 専用コンポーネントはないため、
// Tailwindによるグリッド実装が基本です。ロゴにツールチップで社名を
// 補足したい場合は tooltip を組み合わせます。
// npx shadcn@latest add tooltip
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const logos = [
  { src: "/logos/acme.svg", name: "Acme株式会社" },
  { src: "/logos/globex.svg", name: "Globex株式会社" },
  { src: "/logos/initech.svg", name: "Initech株式会社" },
  { src: "/logos/umbrella.svg", name: "Umbrella株式会社" },
];

export function LogoCloudSection() {
  return (
    <section aria-labelledby="logo-cloud-heading" className="py-16">
      <h2
        id="logo-cloud-heading"
        className="mb-8 text-center text-sm font-semibold text-muted-foreground"
      >
        導入企業
      </h2>
      <ul className="mx-auto grid max-w-3xl grid-cols-2 place-items-center gap-8 sm:grid-cols-4">
        {logos.map((logo) => (
          <li key={logo.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto opacity-60 grayscale transition
                             hover:opacity-100 hover:grayscale-0"
                />
              </TooltipTrigger>
              <TooltipContent>{logo.name}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  related: ["testimonials", "hero-section", "cta-section", "feature-section"],
  views: 8400,
  favorites: 340,
  collections: ["saas-ui"],
  gradient: "from-violet-500/15 via-purple-500/10 to-indigo-500/15",
  difficulty: 1,
  updatedAt: "2026-04-12",
};
