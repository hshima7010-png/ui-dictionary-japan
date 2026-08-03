import type { UIItem } from "@/types/ui";

export const starRating: UIItem = {
  slug: "star-rating",
  name: "Star Rating",
  nameJa: "星評価",
  description:
    "5つの星で評価を表示・入力するUI。ECのレビューやアプリ評価の世界標準。",
  category: "e-commerce",
  tags: ["レビュー", "評価", "星", "EC", "レーティング"],
  aliases: [
    "星いくつのやつ",
    "レビューの星マーク",
    "5段階評価の星",
    "星4.5とか出てくる評価表示",
    "タップして星を付ける入力欄",
    "商品の下に付いている星の点数",
  ],
  whatIs: [
    "星評価（Star Rating）は、5つ（まれに10個）の星アイコンで評価の高さを表現・入力するUIコンポーネントです。ホテルの格付けやミシュランガイドなど「星の数＝品質」という文化的な共通認識に由来し、映画批評やホテル評価で使われてきた星印がそのままデジタルUIに持ち込まれました。読み取り専用の「表示用」と、ユーザーが星を選んで投稿する「入力用」の2つの役割があります。",
    "ECにおいては購入意思決定を左右する最重要要素のひとつです。Amazonは星の平均値とレビュー件数、さらに星ごとの件数分布バーをセットで表示し、楽天市場も検索結果から商品ページまで一貫して星評価を表示します。Shopifyでは Judge.me や Loox などのレビューアプリを通じて星評価を組み込むのが定番で、商品カード・商品詳細・レビュー一覧のあらゆる場所に登場します。",
    "表示用は「星4.2」のような小数を部分塗りの星で表現するのが一般的で、SEO面では構造化データ（AggregateRating）と組み合わせると検索結果にリッチリザルトとして星が表示されます。入力用は radiogroup として実装するのがアクセシビリティ上の定石で、見た目の簡単さに反して丁寧な実装が求められるコンポーネントです。",
  ],
  features: [
    "5つの星アイコンの塗りつぶし数で評価の高さを表現する",
    "平均値4.2のような小数は星の部分塗り（半星・グラデーション）で表示できる",
    "表示用（読み取り専用）と入力用（クリック/タップで選択）の2モードがある",
    "入力用ではホバーで星がプレビュー的に塗られるインタラクションが定番",
    "レビュー件数（例: ★4.2 (1,234件)）とセットで表示されることが多い",
    "星ごとの件数分布バー（5つ星が何%か）と組み合わせて詳細を示せる",
  ],
  merits: [
    "文化を問わず直感的に理解される、世界標準の評価表現",
    "数字を読まなくても視覚的に品質の目安が伝わり、比較検討が速くなる",
    "省スペースで商品カードや検索結果にも埋め込める",
    "構造化データと併用すれば検索結果に星が出て、CTR向上が期待できる",
    "入力もワンタップで完了するため、レビュー投稿のハードルが低い",
  ],
  demerits: [
    "5段階では表現が粗く、「星4.2と4.4の差」の実感は伝わりにくい",
    "評価が高評価側に偏りやすく（J字分布）、平均値だけでは実態を誤解させる",
    "件数なしの星表示は信頼性が低い（★5でも1件なら参考にならない）",
    "モバイルで星1つずつのタップ精度を確保するのが意外と難しい",
    "入力用の実装をdivのクリックで済ませると、キーボード・スクリーンリーダーで操作不能になる",
  ],
  bestPractices: [
    "星の平均値には必ずレビュー件数を併記する（★4.2 (1,234件)）",
    "表示用の小数はwidthクリップやグラデーションで部分塗りにし、四捨五入で盛らない",
    "入力用は radiogroup（5つのradio）として実装し、キーボード操作を保証する",
    "入力時はホバー/フォーカスで塗りをプレビューし、確定操作を明確にする",
    "星ごとの分布バーを併設すると、平均値だけでは見えない偏りを伝えられる",
    "商品ページでは AggregateRating の構造化データを出力しリッチリザルトを狙う",
  ],
  useCases: [
    "Amazon — 商品タイトル直下の星評価＋件数＋星別分布バー",
    "楽天市場 — 検索結果・商品ページ・ショップ評価の星表示",
    "App Store / Google Play — アプリ評価の表示と、アプリ内評価ダイアログでの入力",
    "食べログ・Googleマップ — 店舗評価の表示とレビュー投稿時の星入力",
    "Shopifyストア — Judge.me / Looxなどレビューアプリによる星表示",
  ],
  accessibility: [
    "表示用は星の画像に頼らず「5つ星中4.2、レビュー1,234件」を aria-label やテキストで提供する",
    "入力用は fieldset + 5つの radio で構成し、legend で「評価を選択」と明示する",
    "各radioには「星1（不満）」〜「星5（大満足）」のようなラベルを付ける",
    "矢印キーで選択を変更でき、選択状態がフォーカスリングで視認できるようにする",
    "塗り／未塗りの星は色差だけでなく輪郭・塗りつぶしの形状差でも区別する",
    "ホバーのみに依存したプレビューにせず、フォーカスでも同じ挙動を提供する",
  ],
  figma: [
    "星1個をComponent化し、fill / half / empty の3 Variantを用意する",
    "5個をAuto Layout（横、gap 2〜4px)で並べ、親コンポーネントのPropertyで評価値を切り替える",
    "0.5刻み（0〜5で11パターン）のVariantを作っておくと表示用としてすぐ使える",
    "半星はマスク（星形にクリップした矩形）で作ると塗り幅の調整がしやすい",
    "件数テキストとセットのコンポーネントも作り、商品カードなどで使い回す",
  ],
  code: {
    html: `<!-- 表示用: 部分塗り（4.2）はwidthでクリップ -->
<div class="star-rating" role="img" aria-label="5つ星中4.2、レビュー1,234件">
  <div class="stars">
    <span class="base" aria-hidden="true">★★★★★</span>
    <span class="fill" aria-hidden="true" style="width: 84%">★★★★★</span>
  </div>
  <span class="count">4.2（1,234件）</span>
</div>

<style>
  .star-rating {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .stars {
    position: relative;
    font-size: 20px;
    line-height: 1;
  }
  .stars .base { color: #e5e7eb; }
  .stars .fill {
    position: absolute;
    top: 0; left: 0;
    overflow: hidden;
    white-space: nowrap;
    color: #f59e0b;
  }
  .count {
    font-size: 14px;
    color: #6b7280;
  }
</style>

<!-- 入力用: radiogroupで実装 -->
<fieldset class="star-input">
  <legend>この商品を評価する</legend>
  <input type="radio" name="rating" id="star5" value="5" /><label for="star5" title="星5（大満足）">★</label>
  <input type="radio" name="rating" id="star4" value="4" /><label for="star4" title="星4（満足）">★</label>
  <input type="radio" name="rating" id="star3" value="3" /><label for="star3" title="星3（普通）">★</label>
  <input type="radio" name="rating" id="star2" value="2" /><label for="star2" title="星2（不満）">★</label>
  <input type="radio" name="rating" id="star1" value="1" /><label for="star1" title="星1（非常に不満）">★</label>
</fieldset>

<style>
  /* 右から左に並べ、選択した星以下をすべて塗る定番テクニック */
  .star-input { border: 0; display: inline-flex; flex-direction: row-reverse; }
  .star-input input { position: absolute; opacity: 0; }
  .star-input label { font-size: 28px; color: #e5e7eb; cursor: pointer; }
  .star-input input:checked ~ label,
  .star-input label:hover,
  .star-input label:hover ~ label { color: #f59e0b; }
  .star-input input:focus-visible + label { outline: 2px solid #db2777; border-radius: 4px; }
</style>`,
    tailwind: `<!-- 表示用スターレーティング（4.2 / 5） -->
<div
  class="inline-flex items-center gap-2"
  role="img"
  aria-label="5つ星中4.2、レビュー1,234件"
>
  <div class="relative text-xl leading-none" aria-hidden="true">
    <span class="text-gray-200">★★★★★</span>
    <!-- 4.2 / 5 = 84% -->
    <span
      class="absolute inset-y-0 left-0 w-[84%] overflow-hidden
             whitespace-nowrap text-amber-400"
    >
      ★★★★★
    </span>
  </div>
  <span class="text-sm font-medium">4.2</span>
  <a href="#reviews" class="text-sm text-gray-500 underline hover:text-gray-700">
    1,234件のレビュー
  </a>
</div>

<!-- 星別の分布バー -->
<div class="mt-4 max-w-xs space-y-1.5">
  <div class="flex items-center gap-2 text-sm">
    <span class="w-8 text-gray-600">★5</span>
    <div class="h-2 flex-1 rounded-full bg-gray-100">
      <div class="h-full w-[62%] rounded-full bg-amber-400"></div>
    </div>
    <span class="w-10 text-right text-gray-500 tabular-nums">62%</span>
  </div>
  <div class="flex items-center gap-2 text-sm">
    <span class="w-8 text-gray-600">★4</span>
    <div class="h-2 flex-1 rounded-full bg-gray-100">
      <div class="h-full w-[23%] rounded-full bg-amber-400"></div>
    </div>
    <span class="w-10 text-right text-gray-500 tabular-nums">23%</span>
  </div>
</div>`,
    react: `"use client";

import { useId, useState } from "react";
import { Star } from "lucide-react";

/** 表示用: 小数対応の読み取り専用星評価 */
export function StarRatingDisplay({
  rating,
  count,
  max = 5,
}: {
  rating: number; // 例: 4.2
  count?: number;
  max?: number;
}) {
  const percentage = (rating / max) * 100;
  return (
    <div className="inline-flex items-center gap-2">
      <div
        role="img"
        aria-label={\`\${max}つ星中\${rating}\${count != null ? \`、レビュー\${count.toLocaleString()}件\` : ""}\`}
        className="relative inline-flex"
      >
        <div className="flex text-gray-200" aria-hidden>
          {Array.from({ length: max }, (_, i) => (
            <Star key={i} className="size-5 fill-current" strokeWidth={0} />
          ))}
        </div>
        <div
          className="absolute inset-y-0 left-0 flex overflow-hidden text-amber-400"
          style={{ width: \`\${percentage}%\` }}
          aria-hidden
        >
          {Array.from({ length: max }, (_, i) => (
            <Star key={i} className="size-5 shrink-0 fill-current" strokeWidth={0} />
          ))}
        </div>
      </div>
      <span className="text-sm font-medium tabular-nums">{rating.toFixed(1)}</span>
      {count != null && (
        <span className="text-sm text-gray-500">（{count.toLocaleString()}件）</span>
      )}
    </div>
  );
}

/** 入力用: radiogroupベースの星評価入力 */
export function StarRatingInput({
  value,
  onChange,
  name = "rating",
}: {
  value: number;
  onChange: (value: number) => void;
  name?: string;
}) {
  const [hovered, setHovered] = useState(0);
  const baseId = useId();
  const labels = ["非常に不満", "不満", "普通", "満足", "大満足"];

  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-1 text-sm font-medium">この商品を評価する</legend>
      <div
        role="radiogroup"
        aria-label="星の数で評価"
        className="flex gap-1"
        onMouseLeave={() => setHovered(0)}
      >
        {labels.map((label, i) => {
          const starValue = i + 1;
          const active = starValue <= (hovered || value);
          return (
            <label
              key={starValue}
              htmlFor={\`\${baseId}-\${starValue}\`}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(starValue)}
            >
              <input
                type="radio"
                id={\`\${baseId}-\${starValue}\`}
                name={name}
                value={starValue}
                checked={value === starValue}
                onChange={() => onChange(starValue)}
                className="sr-only"
                aria-label={\`星\${starValue}（\${label}）\`}
              />
              <Star
                aria-hidden
                strokeWidth={active ? 0 : 1.5}
                className={\`size-8 transition-colors \${
                  active ? "fill-amber-400 text-amber-400" : "text-gray-300"
                }\`}
              />
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}`,
    shadcn: `// shadcn/uiに星評価の公式コンポーネントは無いため、
// RadioGroup（npx shadcn@latest add radio-group label）を土台に実装する
"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function StarRatingField() {
  const [value, setValue] = useState("0");
  const rating = Number(value);

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">この商品を評価する</p>
      <RadioGroup
        value={value}
        onValueChange={setValue}
        aria-label="星の数で評価"
        className="flex gap-1"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star}>
            <RadioGroupItem
              value={String(star)}
              id={\`star-\${star}\`}
              className="sr-only"
            />
            <Label htmlFor={\`star-\${star}\`} className="cursor-pointer">
              <Star
                aria-hidden
                strokeWidth={star <= rating ? 0 : 1.5}
                className={
                  star <= rating
                    ? "size-8 fill-amber-400 text-amber-400"
                    : "size-8 text-muted-foreground/40"
                }
              />
              <span className="sr-only">星{star}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
      {rating > 0 && (
        <p className="text-sm text-muted-foreground">選択中: 星{rating}</p>
      )}
    </div>
  );
}`,
  },
  related: ["review-card", "product-card", "slider", "badge"],
  views: 44300,
  favorites: 1950,
  collections: ["ec-ui", "shopify-ui"],
  gradient: "from-pink-500/15 via-rose-500/10 to-amber-500/15",
  difficulty: 2,
  updatedAt: "2026-05-27",
};
