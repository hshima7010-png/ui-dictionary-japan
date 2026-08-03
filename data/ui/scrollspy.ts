import type { UIItem } from "@/types/ui";

export const scrollspy: UIItem = {
  slug: "scrollspy",
  name: "Scrollspy",
  nameJa: "スクロールスパイ",
  description:
    "スクロール位置に応じて目次やナビの現在地をハイライトするUI。長いページの迷子を防ぐ。",
  category: "navigation",
  tags: ["スクロール", "現在地表示", "目次", "IntersectionObserver", "ドキュメント"],
  aliases: [
    "スクロールすると目次の色が変わるやつ",
    "今読んでいる場所が光るナビ",
    "ページ内の現在地ハイライト",
    "スクロール連動ナビゲーション",
    "読んでいるセクションを追いかける目次",
  ],
  whatIs: [
    "スクロールスパイ（Scrollspy）は、ページのスクロール位置を監視（spy）し、いま画面に表示されているセクションに対応するナビゲーション項目を自動的にハイライトするUIパターンです。「スクロールを見張る（spy）」という動作がそのまま名前になっており、Bootstrapが同名のプラグインを提供したことで広く知られるようになりました。",
    "長いドキュメントページやランディングページでは、読み進めるうちに自分がどこにいるのか分からなくなりがちです。スクロールスパイは目次（Table of Contents）やサイドバーと組み合わせて「現在地」を常に示すことで、この迷子問題を解決します。項目クリックによるスムーズスクロールとセットで実装されるのが一般的です。",
    "かつてはscrollイベントと座標計算で実装されていましたが、現在はIntersection Observer APIを使うのが定石です。スクロールのたびに計算が走らないためパフォーマンスが良く、数十行のコードで安定した現在地判定を実現できます。",
  ],
  features: [
    "スクロール位置と連動して、対応するナビ項目にactiveスタイルが自動で付く",
    "目次・サイドバー・ヘッダー内ナビなど、リンク一覧を持つUIと組み合わせて使う",
    "Intersection Observerで各セクションの見出しの出入りを監視するのが現在の主流実装",
    "ナビ項目のクリックでスムーズスクロールし、URLのハッシュ（#section-id）を同期させることが多い",
    "アクティブ項目の左にバーを表示したり、色や太字で強調するなど表現のバリエーションが豊富",
  ],
  merits: [
    "長いページでも「いまどこを読んでいるか」が常に分かり、迷子を防げる",
    "ページの全体構造が目次として見えるため、読む前に情報量を把握できる",
    "読みたいセクションへ1クリックでジャンプでき、回遊効率が上がる",
    "Intersection Observerベースならスクロールイベント連打による負荷がなく軽量",
    "ドキュメントやヘルプセンターの「読み物としての信頼感」を高める定番の演出になる",
  ],
  demerits: [
    "セクションの高さがまちまちだと、境界付近でハイライトがちらつきやすい",
    "追従ヘッダーがある場合、scroll-margin-topを設定しないとジャンプ先の見出しが隠れる",
    "短いページや見出しが少ないページでは実装コストに見合う効果がない",
    "ページ末尾の短いセクションは「画面上部に到達しない」ためアクティブにならない問題への対処が必要",
    "モバイルでは目次を常時表示する幅がなく、別UI（ドロップダウン等）への切り替えが必要になる",
  ],
  bestPractices: [
    "判定にはIntersection ObserverのrootMarginを使い、「画面上部から20〜30%の帯」に入った見出しをアクティブにすると自然に感じられる",
    "追従ヘッダー分のオフセットをscroll-margin-top（またはscroll-padding-top）で確保する",
    "アクティブ項目は色だけでなく、太字や左ボーダーなど複数の手がかりで示す",
    "クリック時はURLハッシュを更新し、リロードや共有でも同じ位置に戻れるようにする",
    "見出し階層は2階層（h2 / h3）までに抑え、目次が長くなりすぎないようにする",
    "ページ最下部では最後の項目を強制的にアクティブにするフォールバックを入れる",
  ],
  useCases: [
    "Stripe Docs — 右サイドの「On this page」がスクロールに追従してハイライト",
    "MDN Web Docs — 記事右側の目次で現在のセクションを強調表示",
    "Bootstrap Docs — 自社のScrollspyプラグインをドキュメント自身で使用",
    "noteやZennなどの記事プラットフォーム — 長文記事の横に追従目次を表示",
    "製品LP — 「機能・料金・FAQ」のヘッダーナビがスクロールと連動してアクティブ化",
  ],
  accessibility: [
    "ナビゲーションは <nav aria-label=\"目次\"> で囲み、リンクのリストとしてマークアップする",
    "アクティブな項目には aria-current=\"true\"（またはlocation）を付与し、視覚以外でも現在地を伝える",
    "ハイライトの色は背景とのコントラスト比を確保し、色覚多様性に配慮して太字などを併用する",
    "スムーズスクロールはprefers-reduced-motionを尊重し、瞬間移動にフォールバックする",
    "ジャンプ後にフォーカスが置き去りにならないよう、対象見出しにtabindex=\"-1\"を付けてfocus()を呼ぶ",
  ],
  figma: [
    "目次コンポーネントはAuto Layout（縦、gap 4）で組み、項目をComponent化してactive / defaultのVariantsを作る",
    "アクティブ表示の左バーは幅2〜3pxのRectangleを項目の左に配置し、Variantで表示を切り替える",
    "階層（h2 / h3）はインデント量をSpacingトークンで統一し、ネストをProperty化すると管理しやすい",
    "プロトタイプでは長文フレームにScroll toのインタラクションを設定するとジャンプ挙動を再現できる",
    "本文サンプルは実際の想定文字量で作り、目次が画面の高さを超えた場合のスクロール挙動も確認する",
  ],
  code: {
    html: `<nav class="toc" aria-label="目次">
  <a href="#intro" class="toc-link">はじめに</a>
  <a href="#pricing" class="toc-link">料金プラン</a>
  <a href="#faq" class="toc-link">よくある質問</a>
</nav>

<main>
  <section id="intro"><h2>はじめに</h2>…</section>
  <section id="pricing"><h2>料金プラン</h2>…</section>
  <section id="faq"><h2>よくある質問</h2>…</section>
</main>

<style>
  html { scroll-behavior: smooth; }
  section { scroll-margin-top: 80px; } /* 追従ヘッダー分のオフセット */
  .toc {
    position: sticky;
    top: 96px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .toc-link {
    padding: 6px 12px;
    color: #6b7280;
    text-decoration: none;
    border-left: 2px solid transparent;
  }
  .toc-link.active {
    color: #ea580c;
    font-weight: 600;
    border-left-color: #ea580c;
  }
</style>

<script>
  const links = document.querySelectorAll(".toc-link");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const isActive =
            link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", isActive);
          if (isActive) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    // 画面上部20%〜下部60%を「現在地判定の帯」にする
    { rootMargin: "-20% 0px -60% 0px" }
  );
  document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
</script>`,
    tailwind: `<!-- activeの付け替えはIntersection Observerで行う -->
<div class="mx-auto flex max-w-5xl gap-10">
  <nav aria-label="目次" class="sticky top-24 hidden h-fit w-56 lg:block">
    <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
      On this page
    </p>
    <ul class="space-y-1 border-l border-gray-200">
      <li>
        <a
          href="#intro"
          aria-current="true"
          class="-ml-px block border-l-2 border-orange-500 py-1 pl-4
                 text-sm font-semibold text-orange-600"
        >
          はじめに
        </a>
      </li>
      <li>
        <a
          href="#pricing"
          class="-ml-px block border-l-2 border-transparent py-1 pl-4
                 text-sm text-gray-500 hover:border-gray-300
                 hover:text-gray-900"
        >
          料金プラン
        </a>
      </li>
      <li>
        <a
          href="#faq"
          class="-ml-px block border-l-2 border-transparent py-1 pl-4
                 text-sm text-gray-500 hover:border-gray-300
                 hover:text-gray-900"
        >
          よくある質問
        </a>
      </li>
    </ul>
  </nav>
  <main class="min-w-0 flex-1 scroll-smooth">
    <section id="intro" class="scroll-mt-24">…</section>
    <section id="pricing" class="scroll-mt-24">…</section>
    <section id="faq" class="scroll-mt-24">…</section>
  </main>
</div>`,
    react: `"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; label: string };

export function Scrollspy({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav aria-label="目次" className="sticky top-24 h-fit w-56">
      <ul className="space-y-1 border-l border-gray-200">
        {headings.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={\`#\${id}\`}
                aria-current={isActive ? "true" : undefined}
                className={\`-ml-px block border-l-2 py-1 pl-4 text-sm
                            transition-colors \${
                              isActive
                                ? "border-orange-500 font-semibold text-orange-600"
                                : "border-transparent text-gray-500 hover:text-gray-900"
                            }\`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}`,
    shadcn: `// shadcn/uiに専用のScrollspyコンポーネントはありません。
// scroll-areaと組み合わせ、判定ロジックは自前のIntersection Observerで実装します。
// npx shadcn@latest add scroll-area
"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const HEADINGS = [
  { id: "intro", label: "はじめに" },
  { id: "pricing", label: "料金プラン" },
  { id: "faq", label: "よくある質問" },
];

export function TocScrollspy() {
  const [activeId, setActiveId] = useState(HEADINGS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: "-20% 0px -60% 0px" }
    );
    HEADINGS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollArea className="sticky top-24 h-[calc(100vh-8rem)] w-56">
      <nav aria-label="目次">
        <ul className="space-y-1 border-l">
          {HEADINGS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={\`#\${id}\`}
                aria-current={activeId === id ? "true" : undefined}
                className={cn(
                  "-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm text-muted-foreground",
                  activeId === id &&
                    "border-primary font-semibold text-foreground"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}`,
  },
  related: ["table-of-contents", "sticky-header", "sidebar", "tabs"],
  views: 8900,
  favorites: 310,
  collections: ["saas-ui", "stripe-ui"],
  gradient: "from-yellow-500/15 via-amber-500/10 to-orange-500/15",
  difficulty: 2,
  updatedAt: "2026-04-22",
};
