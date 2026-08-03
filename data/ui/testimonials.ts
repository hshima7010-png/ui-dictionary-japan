import type { UIItem } from "@/types/ui";

export const testimonials: UIItem = {
  slug: "testimonials",
  name: "Testimonials",
  nameJa: "お客様の声",
  description:
    "利用者のレビューや推薦コメントを掲載するUI。社会的証明で信頼と購入意欲を高める。",
  category: "testimonials",
  tags: ["社会的証明", "レビュー", "信頼", "LP"],
  aliases: [
    "利用者のコメントが並んでるセクション",
    "顔写真付きのレビュー一覧",
    "導入企業の推薦文",
    "口コミを載せるところ",
    "ユーザーの感想カード",
    "お客様のレビューセクション",
  ],
  whatIs: [
    "テスティモニアル（Testimonials）は、実際の利用者や導入企業の推薦コメント・レビューを掲載するUIセクションです。英語の「testimony（証言）」に由来する言葉で、日本語では「お客様の声」「利用者の声」と呼ばれます。第三者の証言によって商品・サービスの価値を裏付ける、広告の世界で古くから使われてきた手法のWeb版です。",
    "心理学でいう「社会的証明（Social Proof）」を利用したUIで、「他の人が良いと言っているものは良いはずだ」という人間の心理に働きかけます。特に高額なBtoB SaaSや初めて使うサービスでは、企業ロゴ・役職・顔写真つきの具体的な証言が、購入前の不安を和らげる強力な材料になります。",
    "レイアウトは、カードを3カラムで並べるグリッド型、1件ずつ切り替えるカルーセル型、Masonry状に敷き詰めるウォール型などが定番です。近年はX（旧Twitter）の投稿をそのまま埋め込んだようなデザインも増えており、「作られた声」ではなく「生の声」らしさを演出する方向に進化しています。",
  ],
  features: [
    "利用者のコメント本文・氏名・所属・顔写真をセットで表示する",
    "星評価やSNS投稿風のデザインで信憑性を補強できる",
    "グリッド型・カルーセル型・ウォール型など複数のレイアウトパターンがある",
    "企業ロゴを併記して導入実績を同時に訴求できる",
    "動画テスティモニアルを埋め込むリッチな形式もある",
    "CTAセクションの直前に配置し、購入直前の不安を解消する役割を担う",
  ],
  merits: [
    "第三者の証言による社会的証明で、サービスへの信頼度を大きく高められる",
    "具体的な成果（「工数が40%削減」など）を含む声はベネフィットの証拠として機能する",
    "見込み客と近い属性の声を載せることで「自分ごと化」を促せる",
    "顔写真・実名・所属の3点セットは匿名の口コミより説得力が高い",
    "コンテンツはユーザーからもらうため、制作コストが比較的低い",
  ],
  demerits: [
    "掲載には本人・所属企業の許諾が必要で、確認フローに時間がかかる",
    "内容が抽象的（「使いやすいです」だけ等）だと逆に信憑性を損なう",
    "捏造・誇張が発覚した場合、景品表示法上の問題やブランド毀損につながる",
    "カルーセル型は自動再生すると読み終わる前に切り替わり、かえって読まれない",
    "古い声を放置すると現在のサービス内容と食い違い、誤解を招く",
  ],
  bestPractices: [
    "氏名・所属・役職・顔写真をできる限り揃える。匿名の声は説得力が大幅に落ちる",
    "数字入りの具体的な成果（「導入3ヶ月でCVR1.8倍」など）を優先して掲載する",
    "ターゲット顧客と属性が近い声を選ぶ。ペルソナごとに声を出し分けるとさらに効果的",
    "コメントは要点が2〜3文で伝わる長さに編集し、全文はケーススタディへリンクする",
    "カルーセルにする場合は自動再生を避けるか、十分な間隔と一時停止ボタンを用意する",
    "「よかった点」だけでなく導入前の課題→解決の流れで語られた声は物語性が高く読まれやすい",
  ],
  useCases: [
    "Slackの顧客事例 — 大手企業のロゴと具体的な活用ストーリーを掲載",
    "Shopifyのマーチャント事例 — ストア運営者の顔写真つきストーリーで開業を後押し",
    "Stripeの顧客の声 — 開発者・経営者双方の視点からの証言を使い分け",
    "国内SaaSのLP — CTA直前に「導入企業の声」3カラムを配置する定番構成",
    "オンラインスクールのLP — 受講生のビフォーアフターを星評価つきで紹介",
  ],
  accessibility: [
    "引用文はblockquote、話者情報はfigure/figcaptionでマークアップし、意味構造を伝える",
    "顔写真のalt属性には「田中太郎さんの顔写真」など人物が分かる説明を入れる",
    "星評価は画像や記号だけでなく「5点満点中5点」のようなテキストを併記する",
    "カルーセル型では前後ボタンにaria-label、現在位置にaria-liveを設定する",
    "自動再生するカルーセルは一時停止手段を必ず提供する（WCAG 2.2.2）",
  ],
  figma: [
    "1枚のテスティモニアルカード（引用文＋アバター＋名前＋所属）をComponent化して使い回す",
    "顔写真はEllipseにImage Fillを設定し、Component Propertyで差し替え可能にする",
    "引用文の長さが変わっても崩れないよう、カードはAuto Layoutで高さ可変（Hug）にする",
    "3カラムのグリッドはAuto Layout（wrap）を使うとレスポンシブ検証がしやすい",
    "星評価はスターアイコン5個をComponent化し、Variantsで1〜5の状態を切り替える",
  ],
  code: {
    html: `<section class="testimonials" aria-label="お客様の声">
  <figure class="testimonial">
    <blockquote>
      <p>導入からわずか3ヶ月で、問い合わせ対応の工数が40%削減できました。チーム全員が手放せないツールです。</p>
    </blockquote>
    <figcaption>
      <img src="/avatars/tanaka.jpg" alt="田中太郎さんの顔写真" width="48" height="48" />
      <div>
        <span class="name">田中 太郎</span>
        <span class="role">株式会社サンプル / カスタマーサクセス部長</span>
      </div>
    </figcaption>
  </figure>
</section>

<style>
  .testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }
  .testimonial {
    margin: 0;
    padding: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    background: #fff;
  }
  .testimonial blockquote {
    margin: 0 0 20px;
    color: #374151;
    line-height: 1.8;
  }
  .testimonial figcaption {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .testimonial img {
    border-radius: 50%;
    object-fit: cover;
  }
  .testimonial .name {
    display: block;
    font-weight: 600;
    color: #111827;
  }
  .testimonial .role {
    display: block;
    font-size: 13px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<section aria-label="お客様の声" class="grid gap-6 md:grid-cols-3">
  <figure class="rounded-2xl border border-gray-200 bg-white p-6">
    <blockquote class="text-gray-700 leading-relaxed">
      <p>導入からわずか3ヶ月で、問い合わせ対応の工数が40%削減できました。チーム全員が手放せないツールです。</p>
    </blockquote>
    <figcaption class="mt-5 flex items-center gap-3">
      <img
        src="/avatars/tanaka.jpg"
        alt="田中太郎さんの顔写真"
        class="size-12 rounded-full object-cover"
      />
      <div>
        <div class="font-semibold text-gray-900">田中 太郎</div>
        <div class="text-sm text-gray-500">
          株式会社サンプル / カスタマーサクセス部長
        </div>
      </div>
    </figcaption>
  </figure>

  <figure class="rounded-2xl border border-gray-200 bg-white p-6">
    <blockquote class="text-gray-700 leading-relaxed">
      <p>営業チームの提案スピードが目に見えて上がりました。もう以前のワークフローには戻れません。</p>
    </blockquote>
    <figcaption class="mt-5 flex items-center gap-3">
      <img
        src="/avatars/sato.jpg"
        alt="佐藤花子さんの顔写真"
        class="size-12 rounded-full object-cover"
      />
      <div>
        <div class="font-semibold text-gray-900">佐藤 花子</div>
        <div class="text-sm text-gray-500">株式会社デモ / 営業企画</div>
      </div>
    </figcaption>
  </figure>

  <figure class="rounded-2xl border border-gray-200 bg-white p-6">
    <blockquote class="text-gray-700 leading-relaxed">
      <p>無料トライアルの初日に価値を実感。エンジニアでなくても直感的に使えるのが決め手でした。</p>
    </blockquote>
    <figcaption class="mt-5 flex items-center gap-3">
      <img
        src="/avatars/suzuki.jpg"
        alt="鈴木一郎さんの顔写真"
        class="size-12 rounded-full object-cover"
      />
      <div>
        <div class="font-semibold text-gray-900">鈴木 一郎</div>
        <div class="text-sm text-gray-500">スタートアップ株式会社 / CEO</div>
      </div>
    </figcaption>
  </figure>
</section>`,
    react: `"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

const items: Testimonial[] = [
  {
    quote:
      "導入からわずか3ヶ月で、問い合わせ対応の工数が40%削減できました。チーム全員が手放せないツールです。",
    name: "田中 太郎",
    role: "株式会社サンプル / カスタマーサクセス部長",
    avatar: "/avatars/tanaka.jpg",
    rating: 5,
  },
  {
    quote:
      "営業チームの提案スピードが目に見えて上がりました。もう以前のワークフローには戻れません。",
    name: "佐藤 花子",
    role: "株式会社デモ / 営業企画",
    avatar: "/avatars/sato.jpg",
    rating: 5,
  },
  {
    quote:
      "無料トライアルの初日に価値を実感。エンジニアでなくても直感的に使えるのが決め手でした。",
    name: "鈴木 一郎",
    role: "スタートアップ株式会社 / CEO",
    avatar: "/avatars/suzuki.jpg",
    rating: 4,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="お客様の声"
      className="mx-auto max-w-2xl"
    >
      <figure
        aria-live="polite"
        className="rounded-2xl border border-gray-200 bg-white p-8 text-center"
      >
        <div
          className="mb-4 flex justify-center gap-1"
          role="img"
          aria-label={\`5点満点中\${current.rating}点\`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden
              className={\`size-5 \${
                i < current.rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-300"
              }\`}
            />
          ))}
        </div>
        <blockquote className="text-lg leading-relaxed text-gray-700">
          <p>{current.quote}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center gap-3">
          <img
            src={current.avatar}
            alt={\`\${current.name}さんの顔写真\`}
            className="size-12 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-semibold text-gray-900">{current.name}</div>
            <div className="text-sm text-gray-500">{current.role}</div>
          </div>
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="前の声を表示"
          className="rounded-full border border-gray-300 p-2 hover:bg-gray-50"
        >
          <ChevronLeft aria-hidden className="size-5" />
        </button>
        <span className="text-sm text-gray-500">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={next}
          aria-label="次の声を表示"
          className="rounded-full border border-gray-300 p-2 hover:bg-gray-50"
        >
          <ChevronRight aria-hidden className="size-5" />
        </button>
      </div>
    </section>
  );
}`,
    shadcn: `// npx shadcn@latest add card avatar
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const items = [
  {
    quote:
      "導入からわずか3ヶ月で、問い合わせ対応の工数が40%削減できました。",
    name: "田中 太郎",
    role: "株式会社サンプル / CS部長",
    avatar: "/avatars/tanaka.jpg",
  },
  {
    quote:
      "営業チームの提案スピードが目に見えて上がりました。もう以前には戻れません。",
    name: "佐藤 花子",
    role: "株式会社デモ / 営業企画",
    avatar: "/avatars/sato.jpg",
  },
  {
    quote:
      "無料トライアルの初日に価値を実感。直感的に使えるのが決め手でした。",
    name: "鈴木 一郎",
    role: "スタートアップ株式会社 / CEO",
    avatar: "/avatars/suzuki.jpg",
  },
];

export function Testimonials() {
  return (
    <section aria-label="お客様の声" className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.name}>
          <CardContent className="pt-6">
            <blockquote className="leading-relaxed text-muted-foreground">
              <p>{item.quote}</p>
            </blockquote>
          </CardContent>
          <CardFooter className="gap-3">
            <Avatar>
              <AvatarImage
                src={item.avatar}
                alt={\`\${item.name}さんの顔写真\`}
              />
              <AvatarFallback>{item.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-xs text-muted-foreground">{item.role}</div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}`,
  },
  related: ["card", "avatar", "carousel", "hero-section", "pricing-table"],
  views: 21700,
  favorites: 870,
  collections: ["saas-ui", "ec-ui"],
  gradient: "from-amber-500/15 via-orange-500/10 to-rose-500/15",
  difficulty: 1,
  updatedAt: "2026-05-22",
};
