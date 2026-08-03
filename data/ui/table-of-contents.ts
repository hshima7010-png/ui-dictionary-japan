import type { UIItem } from "@/types/ui";

export const tableOfContents: UIItem = {
  slug: "table-of-contents",
  name: "Table of Contents",
  nameJa: "目次",
  description:
    "ページ内の見出し一覧を提示しジャンプできるUI。長文コンテンツの全体像と現在地を示す。",
  category: "navigation",
  tags: ["目次", "ページ内リンク", "アンカー", "長文", "ドキュメント"],
  aliases: [
    "記事の横に出る見出し一覧",
    "ページ内ジャンプできるリスト",
    "この記事の内容が並んでいるやつ",
    "見出しをクリックすると飛べるリスト",
    "On this pageのやつ",
    "もくじ",
  ],
  whatIs: [
    "目次（Table of Contents、略してToC）は、ページ内の見出しを一覧化し、クリックで該当セクションへジャンプできるナビゲーションUIです。書籍の巻頭に置かれる「目次」をそのままWebへ持ち込んだもので、英語名のTable of Contentsは「内容（Contents）の一覧表（Table)」を意味します。英語圏のドキュメントサイトでは「On this page」の見出しで表示されることも多くあります。",
    "長文の記事・技術ドキュメント・ヘルプページでは、読み始める前に「何がどの順で書かれているか」を把握できることが読了率を左右します。目次は全体像の提示と、読みたい箇所への直接ジャンプという2つの役割を同時に果たします。",
    "配置には、記事冒頭に置くインライン型と、画面横に追従表示するサイドバー型の2系統があります。サイドバー型はスクロールスパイと組み合わせて現在地をハイライトするのが定番で、見出しからの自動生成（h2/h3の抽出）で運用コストを下げるのが現代的な実装です。",
  ],
  features: [
    "ページ内の見出し（h2 / h3）を階層付きリストとして一覧表示する",
    "各項目はアンカーリンク（#id）になっており、クリックで該当セクションへジャンプできる",
    "記事冒頭に置くインライン型と、画面横に追従するサイドバー型の2パターンがある",
    "スクロールスパイと組み合わせて現在読んでいるセクションをハイライトできる",
    "見出し要素からの自動生成が可能で、CMSや MarkdownパイプラインではプラグインとしてToC生成が定番",
    "長い目次を「目次を開く」で折りたたむ（details/summary）バリエーションもある",
  ],
  merits: [
    "読む前にコンテンツの全体像と分量を把握でき、読者の見通しが良くなる",
    "必要なセクションへ直接ジャンプでき、辞書的な「拾い読み」に対応できる",
    "スクロールスパイ併用で現在地が分かり、長文でも迷子にならない",
    "見出し構造を整理する動機になり、結果としてコンテンツ品質とSEOの両方に効く",
    "Googleの検索結果にページ内リンク（サイトリンク）として表示される可能性がある",
  ],
  demerits: [
    "見出しが2〜3個しかないページでは冗長で、かえってノイズになる",
    "サイドバー型は表示幅を要求するため、モバイルでは別の見せ方（折りたたみ等）が必要",
    "見出しテキストが長いと目次が崩れやすく、文言の調整が必要になる",
    "追従ヘッダーと併用する場合、ジャンプ位置の補正（scroll-margin-top）を忘れると見出しが隠れる",
    "自動生成に頼ると、h2/h3の使い方が乱れた記事ではそのまま乱れた目次になる",
  ],
  bestPractices: [
    "目次に載せる階層はh2〜h3の2階層までにする。h4以下まで載せると一覧性が失われる",
    "見出しのid生成ルール（日本語見出しのslug化）を決め、URL共有に耐えるアンカーにする",
    "サイドバー型はスクロールスパイと組み合わせ、現在地をハイライトする",
    "モバイルでは記事冒頭の折りたたみ（details/summary）に切り替えるか、フローティングボタンから開く",
    "追従ヘッダーがある場合はscroll-margin-topをヘッダー高さ＋余白ぶん設定する",
    "「まとめ」「FAQ」など読者が探しがちなセクションが目次から拾えるよう見出し文言を設計する",
  ],
  useCases: [
    "Wikipedia — 記事冒頭の折りたたみ可能な階層目次の代表例",
    "Zenn・Qiita — 技術記事のサイドバーに追従目次＋現在地ハイライト",
    "MDN Web Docs — 「In this article」として記事横に目次を常時表示",
    "Stripe Docs — 右カラムの「On this page」でAPIドキュメントを回遊しやすく",
    "企業のオウンドメディア — SEO記事の冒頭に「この記事でわかること」として目次を設置",
  ],
  accessibility: [
    "<nav aria-label=\"目次\"> でランドマーク化し、見出し（「目次」）を付けてリストでマークアップする",
    "階層は入れ子の <ul>/<ol> で表現し、インデントの見た目だけで階層を表さない",
    "現在地ハイライトにはaria-current=\"true\"を併用し、色以外でも伝える",
    "ジャンプ後は対象見出しにフォーカスを移す（tabindex=\"-1\"＋focus()）ことでスクリーンリーダーにも位置変化を伝える",
    "スムーズスクロールはprefers-reduced-motionを尊重する",
    "折りたたみ型はaria-expandedまたはdetails/summaryで開閉状態を支援技術に伝える",
  ],
  figma: [
    "目次項目をComponent化し、depth（h2 / h3）とactiveのPropertyをVariantsで管理する",
    "Auto Layout（縦、gap 4〜8）で組み、h3項目はpadding-leftをトークン化してインデントを統一する",
    "サイドバー型は幅240〜280pxで固定し、本文カラムとのGapを含めてレイアウトグリッドに載せる",
    "長い見出し（2行折り返し）のサンプルを必ず入れ、行間と折り返し時の見た目を確認する",
    "モバイル用に折りたたみ型（closed / open）のVariantsも用意し、プロトタイプで開閉を再現する",
  ],
  code: {
    html: `<nav class="toc" aria-labelledby="toc-heading">
  <h2 id="toc-heading">目次</h2>
  <ol>
    <li><a href="#what">目次とは</a></li>
    <li>
      <a href="#how">作り方</a>
      <ol>
        <li><a href="#how-inline">インライン型</a></li>
        <li><a href="#how-sidebar">サイドバー型</a></li>
      </ol>
    </li>
    <li><a href="#faq">よくある質問</a></li>
  </ol>
</nav>

<article>
  <h2 id="what">目次とは</h2>
  <h2 id="how">作り方</h2>
  <h3 id="how-inline">インライン型</h3>
  <h3 id="how-sidebar">サイドバー型</h3>
  <h2 id="faq">よくある質問</h2>
</article>

<style>
  html { scroll-behavior: smooth; }
  article h2, article h3 { scroll-margin-top: 80px; }
  .toc {
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 20px 24px;
    background: #fffbeb;
  }
  .toc h2 {
    margin: 0 0 12px;
    font-size: 16px;
  }
  .toc ol {
    margin: 0;
    padding-left: 20px;
    display: grid;
    gap: 6px;
  }
  .toc a {
    color: #b45309;
    text-decoration: none;
  }
  .toc a:hover { text-decoration: underline; }
</style>`,
    tailwind: `<nav
  aria-labelledby="toc-heading"
  class="rounded-2xl border border-amber-200 bg-amber-50 p-6"
>
  <h2 id="toc-heading" class="mb-3 text-base font-bold text-gray-900">
    目次
  </h2>
  <ol class="list-decimal space-y-1.5 pl-5 text-sm">
    <li>
      <a href="#what" class="text-amber-700 hover:underline">目次とは</a>
    </li>
    <li>
      <a href="#how" class="text-amber-700 hover:underline">作り方</a>
      <ol class="mt-1.5 list-[lower-alpha] space-y-1.5 pl-5">
        <li>
          <a href="#how-inline" class="text-amber-700 hover:underline">
            インライン型
          </a>
        </li>
        <li>
          <a href="#how-sidebar" class="text-amber-700 hover:underline">
            サイドバー型
          </a>
        </li>
      </ol>
    </li>
    <li>
      <a href="#faq" class="text-amber-700 hover:underline">よくある質問</a>
    </li>
  </ol>
</nav>

<!-- 本文側の見出しには scroll-mt-20 を付けてヘッダー分を補正 -->`,
    react: `"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; text: string; level: 2 | 3 };

/** 記事DOMからh2/h3を抽出して目次を自動生成する */
export function TableOfContents({
  containerSelector = "article",
}: {
  containerSelector?: string;
}) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(
        \`\${containerSelector} h2[id], \${containerSelector} h3[id]\`
      )
    );
    setItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent ?? "",
        level: h.tagName === "H2" ? 2 : 3,
      }))
    );

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: "-20% 0px -60% 0px" }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [containerSelector]);

  if (items.length < 3) return null; // 見出しが少ないページでは出さない

  return (
    <nav aria-label="目次" className="sticky top-24 h-fit w-60">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide
                    text-gray-400">
        On this page
      </p>
      <ul className="space-y-1 border-l border-gray-200 text-sm">
        {items.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={\`#\${id}\`}
              aria-current={activeId === id ? "true" : undefined}
              className={\`-ml-px block border-l-2 py-1
                          \${level === 3 ? "pl-8" : "pl-4"}
                          \${
                            activeId === id
                              ? "border-amber-500 font-semibold text-amber-700"
                              : "border-transparent text-gray-500 hover:text-gray-900"
                          }\`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}`,
    shadcn: `// shadcn/uiに専用のToCコンポーネントはありません。
// collapsibleを使ったモバイル向け折りたたみ目次の例です。
// npx shadcn@latest add collapsible button
"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ITEMS = [
  { id: "what", text: "目次とは" },
  { id: "how", text: "作り方" },
  { id: "faq", text: "よくある質問" },
];

export function MobileToc() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="rounded-2xl border">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between px-4 py-6"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2 font-bold">
            <List aria-hidden className="size-4" />
            目次
          </span>
          <ChevronDown
            aria-hidden
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent asChild>
        <nav aria-label="目次" className="px-4 pb-4">
          <ol className="list-decimal space-y-1.5 pl-5 text-sm">
            {ITEMS.map(({ id, text }) => (
              <li key={id}>
                <a href={\`#\${id}\`} className="text-primary hover:underline">
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
  },
  related: ["scrollspy", "sidebar", "breadcrumb", "accordion"],
  views: 12800,
  favorites: 560,
  collections: ["saas-ui", "education-ui"],
  gradient: "from-orange-400/15 via-amber-400/10 to-lime-500/15",
  difficulty: 2,
  updatedAt: "2026-05-30",
};
