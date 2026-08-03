import type { UIItem } from "@/types/ui";

export const carousel: UIItem = {
  slug: "carousel",
  name: "Carousel",
  nameJa: "カルーセル",
  description:
    "複数のコンテンツを横スライドで切り替えるUI。限られたスペースに多くの訴求を収められる。",
  category: "navigation",
  tags: ["スライダー", "画像", "横スクロール", "バナー"],
  aliases: [
    "横にスライドする画像",
    "くるくる回るバナー",
    "スワイプで切り替わる写真",
    "トップページで自動で動くやつ",
    "画像スライダー",
    "商品が横に流れるリスト",
  ],
  whatIs: [
    "カルーセル（Carousel）は、複数の画像やカードを同じ領域に重ねて配置し、横方向のスライドで順番に表示していくUIコンポーネントです。名前は遊園地の回転木馬（メリーゴーラウンド）に由来し、コンテンツがぐるぐると循環して表示される様子から名付けられました。「スライダー」とも呼ばれます。",
    "1つの領域に複数の訴求を詰め込めるため、ECサイトのメインバナー、商品ギャラリー、おすすめ商品のリスト、事例紹介など、あらゆるサイトで使われてきた定番パターンです。一方で「自動再生バナーはほとんどクリックされない」という調査が繰り返し報告されており、UX界隈では長年賛否が分かれる存在でもあります。",
    "近年はネイティブのCSS Scroll Snapで軽量に実装するアプローチが主流になりつつあり、モバイルでは「画面の端に次のカードを少し見せて」スワイプを促すデザインが標準化しています。使いどころと実装方法を選べば、今もモバイルECを中心に強力なパターンです。",
  ],
  features: [
    "限られた領域で複数のコンテンツを順番に表示できる",
    "前へ・次へボタン、ドットインジケーター、スワイプの3系統の操作を組み合わせられる",
    "自動再生（オートプレイ）とループ再生に対応できる",
    "1枚ずつ切り替える型と、複数カードを並べて横スクロールする型がある",
    "CSS Scroll Snapを使えばJavaScriptなしでもスワイプ動作を実装できる",
    "現在位置を示すインジケーターで全体量と現在地を伝えられる",
  ],
  merits: [
    "ファーストビューの限られたスペースに複数の訴求を収められる",
    "モバイルのスワイプ操作と親和性が高く、商品リストの回遊を促せる",
    "画像ギャラリーでは1枚ずつ大きく見せられ、視覚的なインパクトを出せる",
    "「次がまだある」ことをチラ見せで示すと、スクロールとは別軸の探索を生める",
    "社内の複数部署の掲載要望を1枠で調停できる（政治的解決策としての側面）",
  ],
  demerits: [
    "自動再生バナーの2枚目以降はクリック率が大きく落ちることが多くの調査で示されている",
    "自動で動くコンテンツは読んでいる途中に切り替わり、ユーザーにストレスを与える",
    "操作(前へ/次へ)が小さく、特にデスクトップでは見落とされやすい",
    "スライドが多いと読み込む画像が増え、LCPなどのパフォーマンス指標を悪化させやすい",
    "「とりあえずカルーセルに入れる」ことで情報の優先順位付けから逃げてしまいがち",
  ],
  bestPractices: [
    "自動再生は原則避ける。使う場合は5秒以上の間隔にし、ホバー／フォーカスで一時停止する",
    "次のスライドの端を少し見せて（peek）、スワイプできることを視覚的に示す",
    "ドットや「2 / 5」のようなインジケーターで全体量と現在地を必ず伝える",
    "最重要の訴求は1枚目に置く。2枚目以降には露出が大幅に減る前提で内容を決める",
    "モバイルはCSS Scroll Snap＋ネイティブスクロールで実装し、慣性スクロールを殺さない",
    "画像には width / height を指定してレイアウトシフトを防ぎ、2枚目以降は遅延読み込みする",
  ],
  useCases: [
    "Amazon・楽天市場のトップバナー — セールや特集の切り替え表示",
    "Netflix — 作品を横一列に並べたカルーセル行を縦に積むブラウズ画面",
    "Instagram — 複数枚投稿を左右スワイプで閲覧するカルーセル投稿",
    "App Store — 「今日のApp」や特集カードの横スクロールリスト",
    "ECの商品詳細ページ — 商品写真のギャラリーをスワイプで切り替え",
    "コーポレートサイトの導入事例・お客様の声のスライド表示",
  ],
  accessibility: [
    "ルート要素に role=\"region\" と aria-roledescription=\"carousel\"、aria-label を付与する",
    "各スライドに aria-roledescription=\"slide\" と「3 / 5」に相当する aria-label を付ける",
    "前へ・次へボタンは aria-label 付きの <button> にし、キーボードで操作可能にする",
    "自動再生がある場合は必ず一時停止ボタンを提供する（WCAG 2.2.2）",
    "非表示スライド内のリンクがTab順序に入らないよう inert や tabindex を管理する",
    "prefers-reduced-motion が有効なら自動再生を止め、スライドアニメーションを最小化する",
  ],
  figma: [
    "カードをAuto Layout（横方向、gap: 16）で並べ、親フレームでクリップして見切れを作る",
    "プロトタイプはドラッグトリガー＋Smart Animateで実機に近いスワイプ感を再現できる",
    "ドットインジケーターは active / inactive のVariantを作り、スライドごとのフレームで切り替える",
    "「次のカードのpeek幅（20〜40px）」を決めてからカード幅を逆算するとモバイルで破綻しない",
    "画像はFillの塗りにして差し替えを容易にし、コンポーネントのInstance Swapで運用する",
  ],
  code: {
    html: `<div class="carousel" role="region" aria-roledescription="carousel" aria-label="おすすめ商品">
  <div class="track" id="track">
    <div class="slide" role="group" aria-roledescription="slide" aria-label="1 / 3">
      <img src="/img/item1.jpg" alt="オーガニックコットンTシャツ" width="600" height="400" />
    </div>
    <div class="slide" role="group" aria-roledescription="slide" aria-label="2 / 3">
      <img src="/img/item2.jpg" alt="リネンシャツ" width="600" height="400" loading="lazy" />
    </div>
    <div class="slide" role="group" aria-roledescription="slide" aria-label="3 / 3">
      <img src="/img/item3.jpg" alt="デニムジャケット" width="600" height="400" loading="lazy" />
    </div>
  </div>
  <button class="nav prev" aria-label="前のスライド">‹</button>
  <button class="nav next" aria-label="次のスライド">›</button>
</div>

<style>
  .carousel { position: relative; max-width: 600px; }
  .track {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  .track::-webkit-scrollbar { display: none; }
  .slide {
    flex: 0 0 100%;
    scroll-snap-align: start;
  }
  .slide img { width: 100%; height: auto; border-radius: 12px; }
  .nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 40px; height: 40px; border-radius: 9999px;
    border: 0; background: rgb(255 255 255 / 0.9);
    font-size: 20px; cursor: pointer;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.15);
  }
  .prev { left: 8px; }
  .next { right: 8px; }
</style>

<script>
  const track = document.getElementById("track");
  const step = () => track.clientWidth;
  document.querySelector(".prev").addEventListener("click", () => {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });
  document.querySelector(".next").addEventListener("click", () => {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });
</script>`,
    tailwind: `<!-- CSS Scroll Snapベースの軽量カルーセル -->
<div
  role="region"
  aria-roledescription="carousel"
  aria-label="おすすめ商品"
  class="relative max-w-2xl"
>
  <div
    class="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth
           pb-2 [-ms-overflow-style:none] [scrollbar-width:none]
           [&::-webkit-scrollbar]:hidden"
  >
    <!-- 次のカードを少し見せる: basis-[85%] -->
    <div class="shrink-0 basis-[85%] snap-start rounded-2xl bg-gray-100 p-6
                sm:basis-[45%]">
      <img src="/img/item1.jpg" alt="オーガニックコットンTシャツ"
           class="aspect-[3/2] w-full rounded-xl object-cover" />
      <p class="mt-3 font-semibold">オーガニックコットンTシャツ</p>
      <p class="text-sm text-gray-500">¥3,900</p>
    </div>
    <div class="shrink-0 basis-[85%] snap-start rounded-2xl bg-gray-100 p-6
                sm:basis-[45%]">
      <img src="/img/item2.jpg" alt="リネンシャツ" loading="lazy"
           class="aspect-[3/2] w-full rounded-xl object-cover" />
      <p class="mt-3 font-semibold">リネンシャツ</p>
      <p class="text-sm text-gray-500">¥6,600</p>
    </div>
    <div class="shrink-0 basis-[85%] snap-start rounded-2xl bg-gray-100 p-6
                sm:basis-[45%]">
      <img src="/img/item3.jpg" alt="デニムジャケット" loading="lazy"
           class="aspect-[3/2] w-full rounded-xl object-cover" />
      <p class="mt-3 font-semibold">デニムジャケット</p>
      <p class="text-sm text-gray-500">¥12,100</p>
    </div>
  </div>

  <!-- ドットインジケーター -->
  <div class="mt-3 flex justify-center gap-2" aria-hidden="true">
    <span class="size-2 rounded-full bg-gray-800"></span>
    <span class="size-2 rounded-full bg-gray-300"></span>
    <span class="size-2 rounded-full bg-gray-300"></span>
  </div>
</div>`,
    react: `"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt: string };

export function Carousel({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, slides.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="画像ギャラリー"
      className="relative max-w-2xl"
    >
      <div
        ref={trackRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth
                   rounded-2xl [scrollbar-width:none]
                   [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={\`\${i + 1} / \${slides.length}\`}
            className="shrink-0 basis-full snap-start"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="前のスライド"
        disabled={index === 0}
        onClick={() => scrollTo(index - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full
                   bg-white/90 p-2 shadow disabled:opacity-40"
      >
        <ChevronLeft aria-hidden className="size-5" />
      </button>
      <button
        type="button"
        aria-label="次のスライド"
        disabled={index === slides.length - 1}
        onClick={() => scrollTo(index + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full
                   bg-white/90 p-2 shadow disabled:opacity-40"
      >
        <ChevronRight aria-hidden className="size-5" />
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={\`スライド\${i + 1}へ移動\`}
            aria-current={i === index}
            onClick={() => scrollTo(i)}
            className={\`size-2 rounded-full transition-colors
                        \${i === index ? "bg-gray-800" : "bg-gray-300"}\`}
          />
        ))}
      </div>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add carousel
// Embla Carouselベース。ドラッグ・キーボード操作・ループに対応
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function ProductCarousel() {
  const products = [
    { name: "オーガニックコットンTシャツ", price: "¥3,900" },
    { name: "リネンシャツ", price: "¥6,600" },
    { name: "デニムジャケット", price: "¥12,100" },
    { name: "ウールニット", price: "¥8,800" },
  ];

  return (
    <Carousel
      opts={{ align: "start", loop: false }}
      className="w-full max-w-2xl"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.name} className="basis-4/5 sm:basis-1/2">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-[3/2] rounded-xl bg-muted" />
                <p className="mt-3 font-semibold">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.price}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
  },
  related: ["tabs", "pagination", "hero-section", "card", "testimonials"],
  views: 34600,
  favorites: 1320,
  collections: ["ec-ui", "shopify-ui", "mobile-ui"],
  gradient: "from-orange-500/15 via-amber-500/10 to-yellow-500/15",
  difficulty: 2,
  updatedAt: "2026-06-30",
};
