import type { UIItem } from "@/types/ui";

export const accordion: UIItem = {
  slug: "accordion",
  name: "Accordion",
  nameJa: "アコーディオン",
  description:
    "見出しをクリックするとコンテンツが開閉するUI。FAQや長い情報の整理に最適。",
  category: "faq",
  tags: ["開閉", "FAQ", "情報整理", "disclosure"],
  aliases: [
    "クリックすると開くやつ",
    "開いたり閉じたりするメニュー",
    "折りたたみメニュー",
    "質問を押すと答えが出るUI",
    "プラスを押すと広がるやつ",
  ],
  whatIs: [
    "アコーディオン（Accordion）は、見出し（トリガー）をクリック／タップすると、隠れていたコンテンツ（パネル）が展開・収納されるUIコンポーネントです。楽器のアコーディオンが伸び縮みする様子に由来して名付けられました。",
    "限られた画面スペースに多くの情報を整理して収めることができるため、FAQページ、商品詳細のスペック表示、モバイルのナビゲーションメニューなど、幅広い場面で使われています。",
    "HTML標準の <details> / <summary> 要素だけでも実装でき、WAI-ARIAのDisclosureパターンとしても定義されている、歴史が長く安定したUIパターンです。",
  ],
  features: [
    "見出しクリックでコンテンツを展開・収納できる",
    "複数パネルの同時展開を許可する「multiple」型と、常に1つだけ開く「single」型がある",
    "展開状態を示す矢印（シェブロン）やプラスアイコンの回転アニメーションを伴うことが多い",
    "HTML標準の <details> 要素でJavaScriptなしでも実装可能",
    "キーボード（Enter / Space）だけで操作できる",
  ],
  merits: [
    "縦に長くなりがちなページを圧縮でき、全体の見通しが良くなる",
    "ユーザーが「読みたい情報だけ」を選んで開けるため認知負荷が下がる",
    "モバイルの狭い画面と相性が良い",
    "FAQをアコーディオン化してFAQPageの構造化データを併用するとリッチリザルト表示が狙える",
    "実装コストが低く、アクセシビリティ対応のパターンも確立されている",
  ],
  demerits: [
    "コンテンツが隠れるため、重要な情報の見落としにつながる可能性がある",
    "ページ内検索（Ctrl+F）で閉じたパネル内のテキストがヒットしにくい（ブラウザによる）",
    "開閉の操作が1ステップ増えるため、全文を読ませたい文章には不向き",
    "印刷時に閉じたコンテンツが出力されない実装だと問題になる",
  ],
  bestPractices: [
    "本当に隠すべき情報か検討する。ユーザー全員に読ませたい内容はアコーディオンにしない",
    "トリガー全体（見出し行全体）をクリック可能な領域にする。アイコンだけをクリック対象にしない",
    "開閉状態がひと目で分かるよう、シェブロンの回転など明確な視覚フィードバックを付ける",
    "アニメーションは200〜300ms程度に抑え、prefers-reduced-motionを尊重する",
    "FAQでは「single型で他を自動的に閉じる」より「multiple型」の方が比較読みしやすいことが多い",
    "SEOが重要なコンテンツは、DOM上には常に存在させ、CSSで開閉を表現する",
  ],
  useCases: [
    "AppleのサポートFAQ — 質問一覧をアコーディオンで整理",
    "Amazonの商品詳細 — スペックや配送情報の折りたたみ",
    "Stripe Docs — サイドバーのセクション開閉",
    "モバイルECサイトのフィルターパネル — 絞り込み条件のグループ開閉",
    "利用規約・プライバシーポリシーの章ごとの折りたたみ",
  ],
  accessibility: [
    "トリガーは <button> 要素にし、aria-expanded で開閉状態を伝える",
    "aria-controls でトリガーとパネルを関連付ける",
    "パネル側には role=\"region\" と aria-labelledby を付与すると支援技術で文脈が伝わる",
    "Enter / Space での開閉、Tabでのフォーカス移動を保証する",
    "<details>/<summary> を使う場合は標準でキーボード対応されるが、見た目のカスタマイズ性とのトレードオフを検討する",
  ],
  figma: [
    "Auto Layout（縦方向）でトリガー行とパネルを組み、パネルの表示/非表示をVariantsで管理する",
    "Component Propertyに「open: boolean」を作り、Instance側で開閉を切り替えられるようにする",
    "シェブロンの回転はVariant間でSmart Animate（Ease Out, 250ms）を設定するとプロトタイプで自然に見える",
    "開閉それぞれの状態でテキストが折り返した場合の高さ変化を確認しておく",
  ],
  code: {
    html: `<!-- JavaScript不要：HTML標準のdetails/summary -->
<details class="accordion">
  <summary>返品は可能ですか？</summary>
  <div class="panel">
    <p>商品到着後14日以内であれば返品を承ります。</p>
  </div>
</details>

<style>
  .accordion {
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
  }
  .accordion summary {
    padding: 16px 20px;
    font-weight: 600;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .accordion summary::after {
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid #6b7280;
    border-bottom: 2px solid #6b7280;
    transform: rotate(45deg);
    transition: transform 0.25s;
  }
  .accordion[open] summary::after {
    transform: rotate(-135deg);
  }
  .accordion .panel {
    padding: 0 20px 16px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<details class="group rounded-2xl border border-gray-200 open:shadow-sm">
  <summary
    class="flex cursor-pointer list-none items-center justify-between
           px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden"
  >
    返品は可能ですか？
    <svg
      class="size-4 text-gray-500 transition-transform duration-300
             group-open:rotate-180"
      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  </summary>
  <div class="px-5 pb-4 text-gray-600">
    商品到着後14日以内であれば返品を承ります。
  </div>
</details>`,
    react: `"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { question: string; answer: string };

export function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={\`\${baseId}-panel-\${i}\`}
              id={\`\${baseId}-trigger-\${i}\`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4
                         text-left font-semibold hover:bg-gray-50"
            >
              {item.question}
              <ChevronDown
                aria-hidden
                className={\`size-4 shrink-0 text-gray-500 transition-transform
                            duration-300 \${isOpen ? "rotate-180" : ""}\`}
              />
            </button>
            <div
              role="region"
              id={\`\${baseId}-panel-\${i}\`}
              aria-labelledby={\`\${baseId}-trigger-\${i}\`}
              hidden={!isOpen}
              className="px-5 pb-4 text-gray-600"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>返品は可能ですか？</AccordionTrigger>
        <AccordionContent>
          商品到着後14日以内であれば返品を承ります。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>送料はいくらですか？</AccordionTrigger>
        <AccordionContent>
          全国一律550円。5,000円以上のご購入で送料無料です。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
  },
  related: ["tabs", "faq", "drawer", "dropdown-menu"],
  views: 48200,
  favorites: 1840,
  collections: ["saas-ui", "ec-ui"],
  gradient: "from-blue-500/15 via-indigo-500/10 to-violet-500/15",
  difficulty: 1,
  updatedAt: "2026-07-18",
};
