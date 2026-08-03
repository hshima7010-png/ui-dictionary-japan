import type { UIItem } from "@/types/ui";

export const faq: UIItem = {
  slug: "faq",
  name: "FAQ Section",
  nameJa: "FAQセクション",
  description:
    "よくある質問と回答をまとめたセクション。疑問の自己解決とサポート負荷軽減の要。",
  category: "faq",
  tags: ["よくある質問", "サポート", "SEO", "自己解決"],
  aliases: [
    "よくある質問のページ",
    "Q&Aのコーナー",
    "質問と答えが並んでるセクション",
    "疑問を解決するところ",
    "ヘルプの質問一覧",
    "質問をクリックすると答えが開くページ",
  ],
  whatIs: [
    "FAQセクション（FAQ Section）は、「よくある質問（Frequently Asked Questions）」とその回答をまとめて掲載するUIセクションです。FAQという頭字語は、インターネット黎明期のメーリングリストやネットニュースで、同じ質問が繰り返されるのを防ぐために質問集を用意した文化に由来し、Web以前から続く歴史ある情報設計パターンです。",
    "ユーザーは購入や登録の直前に「送料は？」「解約できる？」といった細かな疑問でつまずきます。FAQセクションはこうした疑問をその場で自己解決させることで、離脱を防ぎ、同時にサポートチームへの問い合わせを減らすという、ユーザーと事業者の双方にメリットのある仕組みです。",
    "UIとしては、質問をクリックすると回答が開くアコーディオン型が最も一般的で、質問数が多い場合はカテゴリタブや検索バーと組み合わせます。またFAQPage構造化データ（JSON-LD）でマークアップすると検索結果でリッチリザルト表示が狙えるため、SEOの観点からも重要度の高いセクションです。",
  ],
  features: [
    "質問と回答のペアをリスト形式で提示する",
    "アコーディオンと組み合わせて質問だけを一覧できるのが定番",
    "質問数が多い場合はカテゴリ分けやFAQ内検索を備える",
    "LPの下部・料金表の直後など、疑問が生まれる場所の近くに配置される",
    "FAQPage構造化データによりGoogle検索でのリッチリザルトが狙える",
    "「解決しましたか？」のフィードバックボタンで内容を改善していける",
  ],
  merits: [
    "ユーザーが疑問を自己解決でき、問い合わせ対応のコストを削減できる",
    "購入・登録直前の不安を解消し、コンバージョン率の改善に寄与する",
    "検索ニーズに合致した質問文はSEOのロングテールキーワード獲得に強い",
    "実際の問い合わせを反映して育てることで、サポート品質の資産になる",
    "アコーディオン型なら多数の質問をコンパクトに収納できる",
  ],
  demerits: [
    "質問数が増えすぎると目当ての質問を探すのが困難になる",
    "実際には聞かれていない「事業者が言いたいこと」を並べると信頼を損なう",
    "回答の更新を怠ると、実際の仕様と食い違い問い合わせが逆に増える",
    "本来はUI改善で解消すべき問題をFAQで補うと、根本的な使いにくさが放置される",
  ],
  bestPractices: [
    "実際の問い合わせログから頻度の高い質問を選ぶ。想像で質問を作らない",
    "質問文はユーザーの言葉で書く（「解約方法」ではなく「解約はどこからできますか？」）",
    "回答は結論から書き、詳細はヘルプ記事へのリンクに逃がして1回答を短く保つ",
    "質問が10個を超えるならカテゴリ分けや検索機能の導入を検討する",
    "料金・解約・セキュリティなどコンバージョンを左右する質問はLPにも抜粋して置く",
    "FAQPage構造化データ（JSON-LD）を出力し、リッチリザルト表示を狙う",
  ],
  useCases: [
    "AppleのサポートFAQ — 製品別によくある質問をカテゴリ分けして提示",
    "Amazonのヘルプページ — 注文・配送・返品の質問をトピック別に整理",
    "Stripeのドキュメント — 決済・入金に関するFAQを開発者向けに展開",
    "国内SaaSのLP — 料金セクション直後に「よくあるご質問」を配置する定番構成",
    "ECサイトの商品ページ — サイズ感や配送に関するQ&Aを商品情報の下に掲載",
  ],
  accessibility: [
    "セクション見出し（h2「よくある質問」）から質問（h3）へと見出し階層を正しく組む",
    "アコーディオン型ではトリガーをbutton要素にし、aria-expandedで開閉状態を伝える",
    "aria-controlsで質問ボタンと回答パネルを関連付ける",
    "回答内のリンクは「こちら」ではなくリンク先が分かるテキストにする",
    "FAQ内検索を付ける場合は検索結果件数の変化をaria-liveで通知する",
  ],
  figma: [
    "質問1件（トリガー行＋回答パネル）をComponent化し、Variantsでopen/closedを切り替える",
    "セクション全体はAuto Layout（縦方向）で組み、質問の追加・削除に強くする",
    "カテゴリタブと組み合わせる場合はタブのComponentと状態管理を先に設計する",
    "回答テキストが長文になった場合の行間（1.7〜1.8程度）と読みやすさを確認する",
    "モバイル幅で質問文が2行に折り返した際のアイコン位置ずれをチェックする",
  ],
  code: {
    html: `<section class="faq" aria-labelledby="faq-heading">
  <h2 id="faq-heading">よくある質問</h2>

  <details>
    <summary>無料トライアル期間中に解約できますか？</summary>
    <p>はい、トライアル期間中はいつでも解約でき、料金は一切発生しません。</p>
  </details>

  <details>
    <summary>支払い方法には何がありますか？</summary>
    <p>クレジットカード（Visa / Mastercard / JCB / AMEX）と請求書払いに対応しています。</p>
  </details>

  <details>
    <summary>プランはいつでも変更できますか？</summary>
    <p>はい、設定画面からいつでもアップグレード・ダウングレードが可能です。差額は日割りで精算されます。</p>
  </details>
</section>

<!-- SEO: FAQPage構造化データ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "無料トライアル期間中に解約できますか？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "はい、トライアル期間中はいつでも解約でき、料金は一切発生しません。"
    }
  }]
}
</script>

<style>
  .faq {
    max-width: 720px;
    margin: 0 auto;
  }
  .faq h2 {
    text-align: center;
    margin-bottom: 32px;
  }
  .faq details {
    border-bottom: 1px solid #e5e7eb;
  }
  .faq summary {
    padding: 20px 0;
    font-weight: 600;
    cursor: pointer;
  }
  .faq details p {
    margin: 0;
    padding: 0 0 20px;
    color: #6b7280;
    line-height: 1.8;
  }
</style>`,
    tailwind: `<section aria-labelledby="faq-heading" class="mx-auto max-w-3xl">
  <h2 id="faq-heading" class="mb-10 text-center text-3xl font-bold">
    よくある質問
  </h2>

  <div class="divide-y divide-gray-200">
    <details class="group py-5">
      <summary
        class="flex cursor-pointer list-none items-center justify-between
               font-semibold [&::-webkit-details-marker]:hidden"
      >
        無料トライアル期間中に解約できますか？
        <span
          class="ml-4 shrink-0 text-gray-400 transition-transform
                 duration-300 group-open:rotate-45"
          aria-hidden="true"
        >＋</span>
      </summary>
      <p class="mt-3 leading-relaxed text-gray-600">
        はい、トライアル期間中はいつでも解約でき、料金は一切発生しません。
      </p>
    </details>

    <details class="group py-5">
      <summary
        class="flex cursor-pointer list-none items-center justify-between
               font-semibold [&::-webkit-details-marker]:hidden"
      >
        支払い方法には何がありますか？
        <span
          class="ml-4 shrink-0 text-gray-400 transition-transform
                 duration-300 group-open:rotate-45"
          aria-hidden="true"
        >＋</span>
      </summary>
      <p class="mt-3 leading-relaxed text-gray-600">
        クレジットカード（Visa / Mastercard / JCB / AMEX）と請求書払いに対応しています。
      </p>
    </details>

    <details class="group py-5">
      <summary
        class="flex cursor-pointer list-none items-center justify-between
               font-semibold [&::-webkit-details-marker]:hidden"
      >
        プランはいつでも変更できますか？
        <span
          class="ml-4 shrink-0 text-gray-400 transition-transform
                 duration-300 group-open:rotate-45"
          aria-hidden="true"
        >＋</span>
      </summary>
      <p class="mt-3 leading-relaxed text-gray-600">
        はい、設定画面からいつでもアップグレード・ダウングレードが可能です。
      </p>
    </details>
  </div>

  <p class="mt-10 text-center text-sm text-gray-500">
    解決しない場合は
    <a href="/contact" class="font-medium text-indigo-600 underline">
      お問い合わせフォーム
    </a>
    からご連絡ください。
  </p>
</section>`,
    react: `"use client";

import { useId, useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

type QA = { question: string; answer: string };

const faqs: QA[] = [
  {
    question: "無料トライアル期間中に解約できますか？",
    answer: "はい、トライアル期間中はいつでも解約でき、料金は一切発生しません。",
  },
  {
    question: "支払い方法には何がありますか？",
    answer:
      "クレジットカード（Visa / Mastercard / JCB / AMEX）と請求書払いに対応しています。",
  },
  {
    question: "プランはいつでも変更できますか？",
    answer:
      "はい、設定画面からいつでもアップグレード・ダウングレードが可能です。差額は日割りで精算されます。",
  },
  {
    question: "データのエクスポートはできますか？",
    answer: "CSV・JSON形式でいつでも全データをエクスポートできます。",
  },
];

export function FaqSection() {
  const baseId = useId();
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      faqs.filter(
        (qa) =>
          qa.question.includes(query) || qa.answer.includes(query)
      ),
    [query]
  );

  return (
    <section aria-labelledby={\`\${baseId}-heading\`} className="mx-auto max-w-3xl">
      <h2 id={\`\${baseId}-heading\`} className="mb-8 text-center text-3xl font-bold">
        よくある質問
      </h2>

      {/* FAQ内検索 */}
      <div className="relative mb-8">
        <Search
          aria-hidden
          className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpenIndex(null);
          }}
          placeholder="質問を検索（例：解約）"
          aria-label="よくある質問を検索"
          className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4
                     focus:border-indigo-500 focus:outline-none
                     focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <p aria-live="polite" className="sr-only">
        {filtered.length}件の質問が見つかりました
      </p>

      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
        {filtered.map((qa, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={qa.question}>
              <button
                type="button"
                id={\`\${baseId}-q-\${i}\`}
                aria-expanded={isOpen}
                aria-controls={\`\${baseId}-a-\${i}\`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4
                           text-left font-semibold hover:bg-gray-50"
              >
                {qa.question}
                <ChevronDown
                  aria-hidden
                  className={\`size-4 shrink-0 text-gray-500 transition-transform
                              duration-300 \${isOpen ? "rotate-180" : ""}\`}
                />
              </button>
              <div
                role="region"
                id={\`\${baseId}-a-\${i}\`}
                aria-labelledby={\`\${baseId}-q-\${i}\`}
                hidden={!isOpen}
                className="px-5 pb-4 leading-relaxed text-gray-600"
              >
                {qa.answer}
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-5 py-8 text-center text-gray-500">
            該当する質問が見つかりませんでした。
          </p>
        )}
      </div>
    </section>
  );
}`,
    shadcn: `// npx shadcn@latest add accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "無料トライアル期間中に解約できますか？",
    answer: "はい、トライアル期間中はいつでも解約でき、料金は一切発生しません。",
  },
  {
    question: "支払い方法には何がありますか？",
    answer:
      "クレジットカード（Visa / Mastercard / JCB / AMEX）と請求書払いに対応しています。",
  },
  {
    question: "プランはいつでも変更できますか？",
    answer:
      "はい、設定画面からいつでもアップグレード・ダウングレードが可能です。",
  },
];

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
      <h2 id="faq-heading" className="mb-8 text-center text-3xl font-bold">
        よくある質問
      </h2>
      <Accordion type="multiple" className="w-full">
        {faqs.map((qa, i) => (
          <AccordionItem key={qa.question} value={\`item-\${i}\`}>
            <AccordionTrigger className="text-left">
              {qa.question}
            </AccordionTrigger>
            <AccordionContent>{qa.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}`,
  },
  related: ["accordion", "search-bar", "tabs", "pricing-table", "empty-state"],
  views: 26900,
  favorites: 1130,
  collections: ["saas-ui", "ec-ui"],
  gradient: "from-sky-500/15 via-blue-500/10 to-indigo-500/15",
  difficulty: 1,
  updatedAt: "2026-07-03",
};
