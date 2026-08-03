import type { UIItem } from "@/types/ui";

export const backToTop: UIItem = {
  slug: "back-to-top",
  name: "Back to Top",
  nameJa: "トップへ戻るボタン",
  description:
    "ページ最上部へワンクリックで戻れるボタン。長いページのスクロール負担を解消する。",
  category: "navigation",
  tags: ["スクロール", "ページトップ", "フローティング", "長いページ"],
  aliases: [
    "ページの上に戻るボタン",
    "右下に出てくる上矢印のボタン",
    "スクロールすると現れる丸いボタン",
    "一番上まで一気に戻れるやつ",
    "ページトップボタン",
  ],
  whatIs: [
    "トップへ戻るボタン（Back to Top）は、クリックひとつでページの最上部までスクロールして戻れるボタンです。英語名の「Back to Top（一番上へ戻る）」がそのまま名前になっており、日本では「ページトップボタン」の呼び名でも定着しています。画面の右下に固定表示されるのが典型的な配置です。",
    "無限スクロールのフィードや長い記事、商品一覧など、縦に長いページでは「上に戻る」だけで何度もスワイプが必要になります。このボタンはその往復コストをワンタップに圧縮するもので、ヘッダーの検索窓やナビゲーションへ戻りたいユーザーの導線としても機能します。",
    "実装自体はscrollTo({ top: 0 })を呼ぶだけと非常にシンプルですが、「一定量スクロールしたら表示する」「フッター付近では他の固定要素と重ねない」「スムーズスクロールの動きを尊重する」といった、出し方・消し方の設計にこそ品質差が出るUIです。",
  ],
  features: [
    "画面右下（稀に左下）に固定表示され、スクロールしても位置が変わらない",
    "ページ上部では非表示で、1〜2画面分スクロールするとフェードインして現れる",
    "クリックするとスムーズスクロールでページ最上部へ戻る",
    "上向き矢印（シェブロン）アイコンが世界共通の記号として使われる",
    "実装はscrollTo APIとIntersection Observer（表示判定）の組み合わせで完結する",
  ],
  merits: [
    "長いページでの「上に戻る」操作を何十回ものスワイプから1タップに短縮できる",
    "ヘッダーの検索・ナビゲーションへの再アクセスが容易になり、回遊性が上がる",
    "実装コストが極めて低く、既存ページに後付けしやすい",
    "無限スクロールやロングLPなど「戻るのが大変なページ」の不満を確実に解消できる",
    "右下配置＋上矢印という様式が完全に定着しており、学習コストがゼロに近い",
  ],
  demerits: [
    "画面の一角を常に占有し、コンテンツやフッターのリンクに被ることがある",
    "チャットウィジェットやFAB（フローティングアクションボタン）と定位置が競合しやすい",
    "モバイルではブラウザ標準の「ステータスバータップで最上部へ」（iOS）と機能が重複する",
    "短いページに表示すると単なるノイズになる",
    "誤タップで最上部へ飛ばされると、読んでいた位置を失うストレスが大きい",
  ],
  bestPractices: [
    "表示のしきい値はビューポート1〜2画面分（またはヘッダーが見えなくなった時点）にし、最初から出しっぱなしにしない",
    "44×44px以上のタップ領域を確保し、画面端から16〜24pxのマージンを取る",
    "チャットボタンなど他のフローティング要素と重ねない。共存する場合は縦に並べるかオフセットする",
    "スムーズスクロールを使いつつ、prefers-reduced-motion時は瞬時に移動させる",
    "スクロール後はフォーカスをページ先頭（本文コンテナやスキップリンク先）へ移し、キーボード利用者が迷子にならないようにする",
    "表示・非表示はopacityとvisibilityの組み合わせでアニメーションさせ、非表示中はクリックもフォーカスも受けないようにする",
  ],
  useCases: [
    "Amazon — 商品一覧・詳細ページ下部の「トップに戻る」バーとボタン",
    "YouTube — モバイルアプリでフィードを深くスクロールすると上部タップで最上部へ",
    "ニュースサイトやブログ — 長文記事の右下に定番の丸型ボタンを配置",
    "楽天市場 — 縦に長い商品ページの右下にページトップボタンを常設",
    "ドキュメントサイト — 目次と併用し、記事末尾から先頭へ戻る導線を確保",
  ],
  accessibility: [
    "実装は必ず <button> 要素にし、「ページの先頭へ戻る」など目的が分かるaria-labelを付ける",
    "非表示状態ではvisibility: hiddenやhidden属性でフォーカス対象からも除外する",
    "クリック後はtabindex=\"-1\"を付けたページ先頭要素にフォーカスを移動し、支援技術に位置の変化を伝える",
    "アイコンのみのボタンでもコントラスト比3:1以上（非テキストコントラスト）を確保する",
    "prefers-reduced-motionが指定されている場合はscroll-behaviorをautoに切り替える",
  ],
  figma: [
    "48×48pxの円形Frameに上向きシェブロンを中央配置し、Componentとして登録する",
    "hidden / visibleのVariantsを作り、opacityとY位置（+8px）を変えてSmart Animateでフェードインを再現する",
    "プロトタイプでは長いスクロールフレームに「Scrolls to → Top」のインタラクションを設定する",
    "Fixed position（Position: Fixed）を有効にし、スクロールしても右下に固定されることを確認する",
    "ドロップシャドウ（Y=4, Blur=16, 10%黒）を付け、背景コンテンツの上でも視認できるか白背景・写真背景の両方で確認する",
  ],
  code: {
    html: `<button id="backToTop" class="back-to-top" aria-label="ページの先頭へ戻る" hidden>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="m5 15 7-7 7 7" />
  </svg>
</button>

<style>
  .back-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 9999px;
    background: #ea580c;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 16px rgb(0 0 0 / 0.2);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(8px);
  }
  .back-to-top.visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .back-to-top { transition: none; }
  }
</style>

<script>
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const show = window.scrollY > window.innerHeight;
    btn.hidden = false;
    btn.classList.toggle("visible", show);
    if (!show) btn.hidden = true;
  }, { passive: true });

  btn.addEventListener("click", () => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    document.querySelector("main")?.focus();
  });
</script>`,
    tailwind: `<!-- 表示切り替え（invisible/opacity-0の付け外し）はJSで行う -->
<button
  type="button"
  aria-label="ページの先頭へ戻る"
  class="fixed bottom-5 right-5 z-40 flex size-12 items-center
         justify-center rounded-full bg-orange-600 text-white
         shadow-lg shadow-black/20 transition-all duration-300
         hover:bg-orange-700 focus-visible:outline-2
         focus-visible:outline-offset-2 focus-visible:outline-orange-600
         data-[hidden=true]:invisible data-[hidden=true]:translate-y-2
         data-[hidden=true]:opacity-0 motion-reduce:transition-none"
  data-hidden="true"
>
  <svg
    class="size-5" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" stroke-width="2" aria-hidden="true"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="m5 15 7-7 7 7" />
  </svg>
</button>`,
    react: `"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop({ threshold = 1 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    // キーボード利用者のためにフォーカスを先頭へ戻す
    document.getElementById("top")?.focus();
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページの先頭へ戻る"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={\`fixed bottom-5 right-5 z-40 flex size-12 items-center
                  justify-center rounded-full bg-orange-600 text-white
                  shadow-lg shadow-black/20 transition-all duration-300
                  hover:bg-orange-700 motion-reduce:transition-none
                  \${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }\`}
    >
      <ArrowUp aria-hidden className="size-5" />
    </button>
  );
}`,
    shadcn: `// shadcn/uiに専用のBack to Topコンポーネントはありません。
// Buttonコンポーネントを土台に、表示判定を組み合わせて実装します。
// npx shadcn@latest add button
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      size="icon"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="ページの先頭へ戻る"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-5 right-5 z-40 size-12 rounded-full shadow-lg transition-all",
        !visible && "invisible translate-y-2 opacity-0"
      )}
    >
      <ArrowUp aria-hidden className="size-5" />
    </Button>
  );
}`,
  },
  related: ["floating-action-button", "infinite-scroll", "footer", "sticky-header"],
  views: 15200,
  favorites: 640,
  collections: ["ec-ui", "mobile-ui"],
  gradient: "from-amber-400/15 via-orange-400/10 to-rose-500/15",
  difficulty: 1,
  updatedAt: "2026-04-09",
};
