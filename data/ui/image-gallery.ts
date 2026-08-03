import type { UIItem } from "@/types/ui";

export const imageGallery: UIItem = {
  slug: "image-gallery",
  name: "Image Gallery",
  nameJa: "画像ギャラリー（商品画像）",
  description:
    "メイン画像とサムネイル一覧で複数の商品画像を切り替えるUI。ECの商品ページの中核。",
  category: "e-commerce",
  tags: ["EC", "商品画像", "ギャラリー", "サムネイル", "ズーム"],
  aliases: [
    "商品ページの大きい写真と小さい写真が並んでいるやつ",
    "サムネイルをクリックすると大きい画像が切り替わるUI",
    "商品写真をスワイプで見られるやつ",
    "写真の一覧ビュー",
    "拡大ズームできる商品画像",
    "メイン画像とサブ画像のセット",
  ],
  whatIs: [
    "画像ギャラリー（Image Gallery）は、複数の画像を「大きなメイン画像＋サムネイル一覧」の組み合わせで閲覧させるUIコンポーネントです。美術品を並べて鑑賞する画廊（gallery）に由来する名前で、写真を陳列して見せる場という意味がそのままUIに転用されました。ECの商品ページでは、商品を多角的に見せるための中核コンポーネントです。",
    "代表例はAmazonの商品ページで、左側にサムネイルを縦に並べ、ホバーで即座にメイン画像が切り替わり、メイン画像へのマウスオーバーで拡大ズームが表示されます。楽天市場も同様のサムネイル切り替え型が標準です。Shopifyのテーマでは、デスクトップは縦積みやグリッド、モバイルではスワイプ可能なカルーセル＋ドットインジケーターに切り替わるレスポンシブなギャラリーが定番となっています。",
    "触れない・試着できないというECの弱点を補う役割を持つため、着用イメージ・素材の質感・サイズ比較・使用シーンなど「見せる順番」の設計が売上に直結します。動画や360度ビューをギャラリーに混在させるケースも増えており、遅延読み込み（lazy loading)やレイアウトシフト対策など、パフォーマンス実装の巧拙が問われるコンポーネントでもあります。",
  ],
  features: [
    "メイン画像＋サムネイル一覧の2層構造で複数画像を切り替えられる",
    "サムネイルのクリック／ホバーでメイン画像が即座に切り替わる",
    "ホバーズーム・ピンチズーム・タップで開くライトボックスなど拡大手段を持つ",
    "モバイルではスワイプ操作のカルーセル＋ドットインジケーターに変形する",
    "画像に加えて動画・360度ビューを同じギャラリーに混在できる",
    "カラーバリエーション選択と連動して画像セットを差し替えられる",
  ],
  merits: [
    "商品を多角的に見せられ、実物を触れないECの不安を軽減できる",
    "着用イメージやサイズ比較の写真がCVR（購入率）を直接押し上げる",
    "拡大ズームで素材感・縫製などの品質を確認でき、返品率の低下につながる",
    "サムネイルが「何枚目に何があるか」の目次として機能し、目的の画像に速く辿り着ける",
    "モバイルのスワイプ操作と相性が良く、自然なジェスチャーで閲覧できる",
  ],
  demerits: [
    "高解像度画像が多いとページが重くなり、LCP（表示速度指標）を悪化させやすい",
    "画像サイズが不揃いだと切り替えのたびにレイアウトが揺れる",
    "ズーム・スワイプ・ライトボックスを備えた完全な実装は工数が大きい",
    "キーボード・スクリーンリーダー対応が漏れやすい（サムネイルのフォーカス管理など）",
    "画像点数が多すぎるとサムネイルが溢れ、スクロールや折りたたみの追加設計が必要になる",
  ],
  bestPractices: [
    "1枚目は白背景の全体像、以降は着用・ディテール・サイズ比較・使用シーンの順に構成する",
    "メイン画像の領域はアスペクト比を固定し、切り替え時のレイアウトシフトを防ぐ",
    "2枚目以降は loading=\"lazy\" とsrcsetで遅延・最適化読み込みする",
    "選択中のサムネイルは枠線などで明示し、現在位置（3/8など）を示す",
    "モバイルではスワイプを第一操作にし、サムネイルは補助に回す",
    "ズームはデスクトップはホバー、モバイルはピンチ＋ダブルタップに対応する",
  ],
  useCases: [
    "Amazon — サムネイル縦並び＋ホバー切り替え＋ホバーズームの定番構成",
    "楽天市場 — サムネイル切り替え型の商品画像ギャラリー",
    "Shopifyストア（Dawnテーマ等）— デスクトップ縦積み／モバイルカルーセルの可変ギャラリー",
    "ZOZOTOWN — 着用画像中心のスワイプ型ギャラリー",
    "Airbnb — 宿泊施設のグリッド型フォトギャラリーと全画面ライトボックス",
  ],
  accessibility: [
    "商品画像のaltは「商品名＋何を写しているか」（例: トートバッグの内ポケット部分）にする",
    "サムネイルは button 要素にし、選択状態を aria-pressed または aria-current で伝える",
    "矢印キーでのサムネイル移動、Enterでの選択などキーボード操作を保証する",
    "画像切り替え時は aria-live で「3枚目/8枚中」を通知するか、メイン画像のaltを更新する",
    "ライトボックスはフォーカストラップとEscでの閉鎖を実装する",
    "スワイプ操作にはボタンによる代替（前へ/次へ）を必ず用意する",
  ],
  figma: [
    "メイン画像は4:5や1:1などアスペクト比を決めてフレームを固定する",
    "サムネイルをComponent化し、default / selected のVariantを枠線で区別する",
    "選択中サムネイルとメイン画像の対応をInteractive Componentsで再現できる",
    "モバイル用はカルーセル＋ドットのフレームを別に作り、Breakpointごとの挙動を明記する",
    "画像はFillのImageで統一し、実データ比率の画像を流し込んで崩れを確認する",
    "ライトボックス（全画面表示）のオーバーレイフレームも忘れずに用意する",
  ],
  code: {
    html: `<div class="gallery">
  <figure class="gallery-main">
    <img id="main-image" src="/img/bag-1.jpg"
         alt="キャンバストートバッグの全体（正面）" width="600" height="750" />
  </figure>
  <div class="gallery-thumbs" role="group" aria-label="商品画像を選択">
    <button type="button" class="thumb is-selected" aria-pressed="true"
            data-src="/img/bag-1.jpg" data-alt="キャンバストートバッグの全体（正面）">
      <img src="/img/bag-1-thumb.jpg" alt="全体（正面）" width="72" height="90" />
    </button>
    <button type="button" class="thumb" aria-pressed="false"
            data-src="/img/bag-2.jpg" data-alt="キャンバストートバッグの内ポケット部分">
      <img src="/img/bag-2-thumb.jpg" alt="内ポケット" width="72" height="90" loading="lazy" />
    </button>
    <button type="button" class="thumb" aria-pressed="false"
            data-src="/img/bag-3.jpg" data-alt="キャンバストートバッグの着用イメージ">
      <img src="/img/bag-3-thumb.jpg" alt="着用イメージ" width="72" height="90" loading="lazy" />
    </button>
  </div>
</div>

<style>
  .gallery { max-width: 480px; }
  .gallery-main {
    margin: 0;
    aspect-ratio: 4 / 5; /* レイアウトシフト防止 */
    border-radius: 16px;
    overflow: hidden;
    background: #f9fafb;
  }
  .gallery-main img { width: 100%; height: 100%; object-fit: cover; }
  .gallery-thumbs { display: flex; gap: 8px; margin-top: 12px; }
  .thumb {
    padding: 0; border: 2px solid transparent; border-radius: 10px;
    overflow: hidden; cursor: pointer; background: none;
  }
  .thumb.is-selected { border-color: #db2777; }
  .thumb img { display: block; }
</style>

<script>
  const mainImage = document.getElementById("main-image");
  document.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document.querySelectorAll(".thumb").forEach((t) => {
        t.classList.remove("is-selected");
        t.setAttribute("aria-pressed", "false");
      });
      thumb.classList.add("is-selected");
      thumb.setAttribute("aria-pressed", "true");
      mainImage.src = thumb.dataset.src;
      mainImage.alt = thumb.dataset.alt;
    });
  });
</script>`,
    tailwind: `<div class="max-w-md">
  <!-- メイン画像（アスペクト比固定でシフト防止） -->
  <figure class="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-50">
    <img
      src="/img/bag-1.jpg"
      alt="キャンバストートバッグの全体（正面）"
      class="size-full object-cover"
    />
  </figure>

  <!-- サムネイル行 -->
  <div class="mt-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="商品画像を選択">
    <button
      type="button"
      aria-pressed="true"
      class="shrink-0 overflow-hidden rounded-xl border-2 border-pink-600"
    >
      <img src="/img/bag-1-thumb.jpg" alt="全体（正面）" class="h-24 w-20 object-cover" />
    </button>
    <button
      type="button"
      aria-pressed="false"
      class="shrink-0 overflow-hidden rounded-xl border-2 border-transparent
             hover:border-gray-300"
    >
      <img src="/img/bag-2-thumb.jpg" alt="内ポケット" loading="lazy"
           class="h-24 w-20 object-cover" />
    </button>
    <button
      type="button"
      aria-pressed="false"
      class="shrink-0 overflow-hidden rounded-xl border-2 border-transparent
             hover:border-gray-300"
    >
      <img src="/img/bag-3-thumb.jpg" alt="着用イメージ" loading="lazy"
           class="h-24 w-20 object-cover" />
    </button>
  </div>

  <!-- 現在位置 -->
  <p class="mt-2 text-center text-sm text-gray-500">1 / 3</p>
</div>`,
    react: `"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { src: string; thumb: string; alt: string };

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  const go = (next: number) =>
    setIndex((next + images.length) % images.length);

  return (
    <div className="max-w-md" aria-label="商品画像ギャラリー">
      {/* メイン画像 */}
      <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-50">
        <img
          src={current.src}
          alt={current.alt}
          className="size-full object-cover"
        />
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="前の画像"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full
                     bg-white/80 p-2 shadow hover:bg-white"
        >
          <ChevronLeft aria-hidden className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="次の画像"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full
                     bg-white/80 p-2 shadow hover:bg-white"
        >
          <ChevronRight aria-hidden className="size-5" />
        </button>
      </figure>

      {/* スクリーンリーダー向けの現在位置通知 */}
      <p aria-live="polite" className="sr-only">
        {index + 1}枚目/{images.length}枚中: {current.alt}
      </p>

      {/* サムネイル */}
      <div
        role="group"
        aria-label="商品画像を選択"
        className="mt-3 flex gap-2 overflow-x-auto pb-1"
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
            aria-label={\`\${i + 1}枚目: \${img.alt}\`}
            className={\`shrink-0 overflow-hidden rounded-xl border-2 transition-colors \${
              i === index
                ? "border-pink-600"
                : "border-transparent hover:border-gray-300"
            }\`}
          >
            <img
              src={img.thumb}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              className="h-24 w-20 object-cover"
            />
          </button>
        ))}
      </div>

      <p className="mt-2 text-center text-sm text-gray-500">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add carousel dialog
// Carousel（Embla製）を商品ギャラリーに、Dialogをライトボックスに使う
"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  { src: "/img/bag-1.jpg", alt: "キャンバストートバッグの全体（正面）" },
  { src: "/img/bag-2.jpg", alt: "キャンバストートバッグの内ポケット部分" },
  { src: "/img/bag-3.jpg", alt: "キャンバストートバッグの着用イメージ" },
];

export function ProductImageGallery() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="max-w-md">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.src}>
              {/* タップで拡大表示（ライトボックス） */}
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" aria-label={\`\${img.alt}を拡大表示\`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="aspect-[4/5] w-full rounded-2xl object-cover"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-2">
                  <img src={img.src} alt={img.alt} className="w-full rounded-xl" />
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="前の画像" />
        <CarouselNext aria-label="次の画像" />
      </Carousel>

      {/* サムネイル */}
      <div className="mt-3 flex gap-2" role="group" aria-label="商品画像を選択">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => api?.scrollTo(i)}
            className="overflow-hidden rounded-xl border-2 border-transparent
                       focus-visible:border-pink-600"
          >
            <img src={img.src} alt={img.alt} className="h-24 w-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}`,
  },
  related: ["carousel", "product-card", "modal", "skeleton"],
  views: 27600,
  favorites: 1140,
  collections: ["ec-ui", "shopify-ui", "mobile-ui"],
  gradient: "from-rose-500/15 via-fuchsia-500/10 to-indigo-500/15",
  difficulty: 3,
  updatedAt: "2026-06-30",
};
