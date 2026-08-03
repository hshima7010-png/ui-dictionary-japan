import type { UIItem } from "@/types/ui";

export const card: UIItem = {
  slug: "card",
  name: "Card",
  nameJa: "カード",
  description:
    "画像・見出し・説明を1つの枠にまとめた汎用UI。一覧表示の基本単位として最も広く使われる。",
  category: "cards",
  tags: ["一覧", "コンテナ", "グリッド", "汎用"],
  aliases: [
    "四角い枠で区切られたやつ",
    "商品が並んでるタイル",
    "画像とタイトルがセットになった箱",
    "記事一覧のサムネイル付きの枠",
    "影のついた白い四角",
    "グリッドで並ぶコンテンツの箱",
  ],
  whatIs: [
    "カード（Card）は、画像・見出し・説明文・アクションといった関連情報を1つの矩形の枠にまとめたUIコンポーネントです。名前は現実世界のトランプや名刺、インデックスカードに由来し、「1枚のカードに1つの話題」という物理カードのメタファーをそのまま画面に持ち込んでいます。",
    "2010年代前半、PinterestのタイルレイアウトとGoogleのMaterial Designがカードを中心概念に据えたことで一気に普及しました。角丸・余白・影（エレベーション）によって「独立したひとまとまりの情報」であることを視覚的に表現し、グリッドに並べることでレスポンシブ対応が容易になる点が支持され、現在ではほぼすべてのWebサービス・アプリで使われる基本パターンとなっています。",
    "カードは商品、記事、ユーザー、統計値など、あらゆるコンテンツの「一覧の単位」として機能します。それ自体が完結したUIというより、サムネイル・バッジ・アバター・ボタンなど他のコンポーネントを内包するコンテナである点が特徴で、設計の自由度が高いぶん、情報の優先順位付けとタップ領域の設計が品質を左右します。",
  ],
  features: [
    "画像・見出し・本文・アクションを1つの枠に構造化してまとめる",
    "角丸・境界線・影で「独立した情報のまとまり」を視覚的に表現する",
    "グリッドに並べることでレスポンシブな一覧レイアウトを構成できる",
    "カード全体をクリック領域にでき、タップしやすい大きな操作対象になる",
    "ホバー時の浮き上がり（影の強調）などのインタラクションと相性が良い",
    "バッジ・アバター・ボタンなど他コンポーネントのコンテナとして機能する",
  ],
  merits: [
    "情報のまとまりが視覚的に明確で、流し見でも内容を把握しやすい",
    "グリッド配置により画面幅に応じたカラム数の調整が容易で、レスポンシブに強い",
    "1枚単位で追加・削除・並び替えができ、動的なコンテンツ一覧に向く",
    "カード全体がタップ領域になるため、モバイルでの操作性が高い",
    "デザインシステムの基本単位として再利用しやすく、開発効率が上がる",
  ],
  demerits: [
    "枠・影・余白のぶん情報密度が下がり、大量データの一覧には表より不向き",
    "カード内に要素を詰め込みすぎると、何のカードなのか分からなくなる",
    "全体リンクとカード内の個別ボタンが共存すると、クリック領域の設計が複雑になる",
    "高さの異なるカードが並ぶとレイアウトが凸凹になり、視線誘導が乱れる",
    "どこもかしこもカード化すると枠だらけになり、かえって視覚ノイズが増える",
  ],
  bestPractices: [
    "1枚のカードには1つのトピックだけを載せ、詰め込みすぎない",
    "画像のアスペクト比を固定（16:9や1:1）し、一覧の高さを揃える",
    "カード全体をリンクにする場合は、見出しリンクを疑似要素で広げる手法で実装する",
    "ホバーで影を強めるなど、クリック可能であることのアフォーダンスを示す",
    "情報の優先順位（画像→見出し→補足→アクション）を視線の流れに沿って縦に並べる",
    "枠線と影は控えめに。区切りが目的なら余白だけで足りることも多い",
  ],
  useCases: [
    "Amazon・楽天の商品一覧 — 商品画像・価格・評価をカードで格子状に表示",
    "YouTubeの動画一覧 — サムネイル・タイトル・チャンネル情報のカード",
    "Airbnbの宿泊先一覧 — 写真カルーセル内蔵のリッチなカード",
    "noteやMediumの記事一覧 — アイキャッチ画像と抜粋文のカード",
    "SaaS管理画面のダッシュボード — KPIやグラフを載せた統計カード",
  ],
  accessibility: [
    "カードのルートは意味に応じてarticleやliでマークアップし、一覧はul/olで括る",
    "カード内の見出しレベル（h3など）をページ全体の見出し階層と揃える",
    "カード全体クリックはdivのonClickではなく、a要素を疑似要素で広げる方式にする",
    "リンクテキストは「詳細を見る」の連発を避け、aria-labelledbyで対象を特定できるようにする",
    "画像には内容を表すalt属性を設定し、装飾画像はalt=\"\"で無視させる",
    "ホバーでしか現れない操作はキーボードフォーカスでも表示されるようにする",
  ],
  figma: [
    "画像・テキスト・フッターの3層をAuto Layout（縦方向）で組み、高さはHugにする",
    "画像部分はFillコンテナ＋固定アスペクト比にして、差し替えても崩れないようにする",
    "Variantsで「default / hover」の2状態を作り、影（Drop Shadow）の差で表現する",
    "テキストのTruncate設定（1行/2行で省略）を使い、長いタイトルの折り返しを制御する",
    "カード一覧はAuto Layoutのwrapで組むと、フレーム幅を変えるだけでカラム数の検証ができる",
  ],
  code: {
    html: `<article class="card">
  <a href="/articles/design-tips">
    <img
      src="/images/thumbnail.jpg"
      alt=""
      class="card-image"
      width="400"
      height="225"
    />
    <div class="card-body">
      <span class="card-tag">デザイン</span>
      <h3 class="card-title">読みやすいUIをつくる余白設計の基本</h3>
      <p class="card-excerpt">
        余白は「何もない場所」ではなく情報を整理する道具です。実例で学ぶ余白設計の考え方。
      </p>
      <div class="card-meta">
        <time datetime="2026-05-01">2026年5月1日</time> ・ 5分で読めます
      </div>
    </div>
  </a>
</article>

<style>
  .card {
    max-width: 360px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .card:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
  .card a {
    color: inherit;
    text-decoration: none;
  }
  .card-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
  }
  .card-body {
    padding: 20px;
  }
  .card-tag {
    font-size: 12px;
    color: #4f46e5;
    font-weight: 600;
  }
  .card-title {
    margin: 8px 0;
    font-size: 18px;
    line-height: 1.5;
  }
  .card-excerpt {
    margin: 0 0 16px;
    font-size: 14px;
    color: #6b7280;
    line-height: 1.7;
  }
  .card-meta {
    font-size: 12px;
    color: #9ca3af;
  }
</style>`,
    tailwind: `<ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
  <li>
    <article
      class="group overflow-hidden rounded-2xl border border-gray-200 bg-white
             transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <a href="/articles/design-tips" class="block">
        <img
          src="/images/thumbnail.jpg"
          alt=""
          class="aspect-video w-full object-cover
                 transition duration-300 group-hover:scale-105"
        />
        <div class="p-5">
          <span class="text-xs font-semibold text-indigo-600">デザイン</span>
          <h3 class="mt-2 font-bold leading-snug line-clamp-2">
            読みやすいUIをつくる余白設計の基本
          </h3>
          <p class="mt-2 text-sm text-gray-600 line-clamp-2">
            余白は「何もない場所」ではなく情報を整理する道具です。実例で学ぶ余白設計の考え方。
          </p>
          <div class="mt-4 text-xs text-gray-400">
            <time datetime="2026-05-01">2026年5月1日</time> ・ 5分で読めます
          </div>
        </div>
      </a>
    </article>
  </li>
  <!-- 同じ構造のカードを繰り返す -->
</ul>`,
    react: `"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  href: string;
};

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border
                 border-gray-200 bg-white transition
                 hover:-translate-y-0.5 hover:shadow-lg
                 focus-within:ring-2 focus-within:ring-indigo-500"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-rose-600
                           px-2.5 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
        {/* お気に入りボタン：カード全体リンクの上に重ねる */}
        <button
          type="button"
          aria-pressed={liked}
          aria-label={
            liked
              ? \`\${product.name}をお気に入りから削除\`
              : \`\${product.name}をお気に入りに追加\`
          }
          onClick={() => setLiked((v) => !v)}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2
                     shadow hover:bg-white"
        >
          <Heart
            aria-hidden
            className={\`size-4 \${
              liked ? "fill-rose-500 text-rose-500" : "text-gray-500"
            }\`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-snug">
          {/* 疑似要素でカード全体をクリック可能に */}
          <a
            href={product.href}
            className="after:absolute after:inset-0 after:content-['']
                       focus:outline-none"
          >
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-lg font-bold">
          ¥{product.price.toLocaleString()}
          <span className="text-xs font-normal text-gray-500">（税込）</span>
        </p>
      </div>
    </article>
  );
}`,
    shadcn: `// npx shadcn@latest add card badge button
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ArticleCard() {
  return (
    <Card className="max-w-sm overflow-hidden pt-0">
      <img
        src="/images/thumbnail.jpg"
        alt=""
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          デザイン
        </Badge>
        <CardTitle className="leading-snug">
          読みやすいUIをつくる余白設計の基本
        </CardTitle>
        <CardDescription>
          余白は「何もない場所」ではなく情報を整理する道具です。実例で学ぶ余白設計の考え方。
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground">
        <time dateTime="2026-05-01">2026年5月1日</time> ・ 5分で読めます
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          記事を読む
        </Button>
      </CardFooter>
    </Card>
  );
}`,
  },
  related: ["badge", "avatar", "skeleton", "carousel", "pricing-table", "testimonials"],
  views: 57300,
  favorites: 2460,
  collections: ["saas-ui", "ec-ui", "mobile-ui"],
  gradient: "from-violet-500/15 via-purple-500/10 to-fuchsia-500/15",
  difficulty: 1,
  updatedAt: "2026-07-21",
};
