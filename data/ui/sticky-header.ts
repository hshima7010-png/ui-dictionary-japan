import type { UIItem } from "@/types/ui";

export const stickyHeader: UIItem = {
  slug: "sticky-header",
  name: "Sticky Header",
  nameJa: "追従ヘッダー",
  description:
    "スクロールしても画面上部に固定表示され続けるヘッダー。ナビや検索へ常時アクセスできる。",
  category: "navbar",
  tags: ["固定ヘッダー", "スクロール", "ナビゲーション", "position: sticky"],
  aliases: [
    "スクロールしてもついてくるヘッダー",
    "上に固定されたメニューバー",
    "画面上部に張り付くナビ",
    "下にスクロールすると隠れて上に戻すと出るヘッダー",
    "固定ヘッダー",
    "スティッキーナビ",
  ],
  whatIs: [
    "追従ヘッダー（Sticky Header）は、ページをスクロールしても画面の最上部に固定表示され続けるヘッダーです。英語の「sticky（くっつく、粘着する）」が名前の由来で、CSSのposition: stickyの普及とともに呼び名としても定着しました。「固定ヘッダー」「Fixed Header」もほぼ同義で使われます。",
    "ナビゲーション・検索窓・カートボタンなど、ユーザーがいつでも使いたい機能を常に手の届く位置に置けるのが最大の価値です。特に縦に長いECの商品一覧やメディア記事では、ヘッダーへ戻るためのスクロールコストを丸ごと削減できます。",
    "一方で画面の上部を常時占有するため、モバイルでは表示領域とのトレードオフが問題になります。そこで「下スクロールで隠れ、上スクロールで再表示する」出し入れ式や、スクロール後に高さを縮めるコンパクト化など、占有面積を抑える改良パターンが多数生まれています。",
  ],
  features: [
    "スクロール位置に関わらず画面上部に固定され、ナビゲーションへ常時アクセスできる",
    "CSSのposition: sticky（またはfixed）だけで基本形を実装できる",
    "スクロール開始後に影や背景（半透明＋ぼかし）を付けて「浮いている」ことを示す演出が定番",
    "下スクロールで隠れ、上スクロールで現れる「出し入れ式（auto-hide）」の変種がある",
    "スクロールに応じてロゴやヘッダーの高さを縮小するコンパクト化パターンもある",
    "ページ内リンクと併用する場合はscroll-padding-topでジャンプ位置の補正が必要",
  ],
  merits: [
    "ナビ・検索・カートなど主要導線へのアクセスがスクロール位置に関係なく維持される",
    "「メニューに戻るために最上部へスクロールする」コストを完全に排除できる",
    "現在地表示（スクロールスパイ）と組み合わせると長いページの回遊性が大きく向上する",
    "ECではカート・検索への常時導線がCVRに直結しやすい",
    "position: stickyならJavaScript不要で実装でき、レイアウトずれの心配も少ない",
  ],
  demerits: [
    "画面の縦領域を常時占有し、特にモバイル横向きでは圧迫感が大きい",
    "ページ内アンカーへのジャンプ時、見出しがヘッダーの下に隠れる問題が起きやすい",
    "高さのあるヘッダーを固定すると、コンテンツへの没入感を削ぐ",
    "出し入れ式は実装が複雑になり、スクロール方向判定のチューニングが必要",
    "固定要素が増える（ヘッダー＋アナウンスバー＋CTAバー）と画面が「額縁」だらけになる",
  ],
  bestPractices: [
    "高さは56〜72px程度に抑え、モバイルではさらにコンパクトにする",
    "スクロール開始後に影または背景のぼかし（backdrop-blur）を付け、コンテンツとの前後関係を明示する",
    "ページ内リンクを使うページではhtmlにscroll-padding-topを設定し、見出しの隠れを防ぐ",
    "長い記事やフィードでは出し入れ式（下スクロールで隠す）を検討し、閲覧領域を優先する",
    "z-indexの管理をトークン化し、モーダル・ドロップダウンとの重なり順を破綻させない",
    "スクロール判定はIntersection Observerか、scrollイベント＋requestAnimationFrameの間引きで行う",
  ],
  useCases: [
    "Amazon — 検索窓とカートを含むヘッダーを常時固定し、どこからでも検索可能に",
    "Apple — 製品ページで薄いグローバルナビが半透明ブラーとともに追従",
    "Medium・note — 記事を下に読み進めると隠れ、上に戻ると現れる出し入れ式ヘッダー",
    "Stripe Docs — 追従ヘッダー＋サイドバー＋目次の3点固定でドキュメントを回遊しやすく",
    "ECの商品詳細 — スクロール後に商品名と購入ボタンだけのコンパクトバーへ変形",
  ],
  accessibility: [
    "ヘッダーは <header> 要素＋ナビは <nav> でマークアップし、ランドマークとして認識させる",
    "スキップリンク（「本文へスキップ」）を用意し、キーボード利用者が毎回ナビを通過しなくて済むようにする",
    "ページ内リンクのジャンプ先が固定ヘッダーに隠れないよう、scroll-padding-topを必ず設定する",
    "出し入れ式でも、キーボードフォーカスがヘッダー内に入ったときは必ず表示状態に戻す",
    "半透明背景を使う場合、下を通過するコンテンツ次第で文字のコントラストが不足しないか確認する",
    "拡大表示（200%ズーム）時に固定ヘッダーが画面の大半を占有しないか確認する",
  ],
  figma: [
    "ヘッダーをComponent化し、default / scrolled（影・背景付き）/ hiddenの3 Variantsを用意する",
    "プロトタイプではヘッダーをFixed position（Position: Fixed）に設定するとスクロール追従を再現できる",
    "scrolled状態はbackground blurエフェクト＋Y=1pxの薄い影で「浮き」を表現する",
    "本文フレームの上端にヘッダー高さ分のスペーサーを置き、コンテンツの隠れをデザイン段階で確認する",
    "ヘッダー・アナウンスバー・モーダルの重なり順をページとして重ねて検証しておく",
  ],
  code: {
    html: `<header class="sticky-header" id="siteHeader">
  <a href="/" class="logo">Example</a>
  <nav aria-label="グローバルナビゲーション">
    <a href="/features">機能</a>
    <a href="/pricing">料金</a>
    <a href="/docs">ドキュメント</a>
  </nav>
</header>

<main>…長いコンテンツ…</main>

<style>
  html {
    /* ページ内リンクのジャンプ位置をヘッダー分補正 */
    scroll-padding-top: 72px;
  }
  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 24px;
    background: rgb(255 255 255 / 0.85);
    backdrop-filter: blur(8px);
    transition: box-shadow 0.2s;
  }
  .sticky-header.scrolled {
    box-shadow: 0 1px 8px rgb(0 0 0 / 0.08);
  }
  .sticky-header nav {
    display: flex;
    gap: 24px;
  }
  .sticky-header a {
    color: #374151;
    text-decoration: none;
    font-weight: 500;
  }
</style>

<script>
  // スクロール開始後に影を付ける
  const header = document.getElementById("siteHeader");
  const sentinel = document.createElement("div");
  document.body.prepend(sentinel);

  new IntersectionObserver(([entry]) => {
    header.classList.toggle("scrolled", !entry.isIntersecting);
  }).observe(sentinel);
</script>`,
    tailwind: `<!-- scrolledの付け替え（shadow等）はJSまたはscroll-driven animationsで -->
<header
  class="sticky top-0 z-40 flex h-16 items-center justify-between
         bg-white/85 px-6 backdrop-blur-md
         shadow-none transition-shadow duration-200
         data-[scrolled=true]:shadow-md data-[scrolled=true]:shadow-black/5"
  data-scrolled="false"
>
  <a href="/" class="text-lg font-bold">Example</a>
  <nav aria-label="グローバルナビゲーション" class="hidden gap-6 md:flex">
    <a href="/features" class="text-sm font-medium text-gray-600
                               hover:text-gray-900">機能</a>
    <a href="/pricing" class="text-sm font-medium text-gray-600
                              hover:text-gray-900">料金</a>
    <a href="/docs" class="text-sm font-medium text-gray-600
                           hover:text-gray-900">ドキュメント</a>
  </nav>
  <button
    type="button"
    class="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold
           text-white hover:bg-orange-700"
  >
    無料で始める
  </button>
</header>

<!-- ページ内リンクを使う場合はルートに scroll-pt-16 を付ける -->
<!-- <html class="scroll-pt-16 scroll-smooth"> -->`,
    react: `"use client";

import { useEffect, useRef, useState } from "react";

export function StickyHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // 下スクロールで隠し、上スクロールで表示（出し入れ式）
      if (y > 120) setHidden(y > lastY.current);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ヘッダー内にフォーカスが入ったら必ず表示する
  const handleFocus = () => setHidden(false);

  return (
    <header
      ref={headerRef}
      onFocus={handleFocus}
      className={\`sticky top-0 z-40 flex h-16 items-center justify-between
                  bg-white/85 px-6 backdrop-blur-md transition-all
                  duration-300 motion-reduce:transition-none
                  \${scrolled ? "shadow-md shadow-black/5" : ""}
                  \${hidden ? "-translate-y-full" : "translate-y-0"}\`}
    >
      <a href="/" className="text-lg font-bold">
        Example
      </a>
      <nav
        aria-label="グローバルナビゲーション"
        className="hidden gap-6 md:flex"
      >
        {children}
      </nav>
    </header>
  );
}`,
    shadcn: `// npx shadcn@latest add navigation-menu button
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40 flex h-16 items-center justify-between
                 border-b bg-background/85 px-6 backdrop-blur-md"
    >
      <Link href="/" className="text-lg font-bold">
        Example
      </Link>
      <NavigationMenu aria-label="グローバルナビゲーション">
        <NavigationMenuList>
          {["機能", "料金", "ドキュメント"].map((label) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink
                href="#"
                className={navigationMenuTriggerStyle()}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button>無料で始める</Button>
    </header>
  );
}`,
  },
  related: ["navbar", "mega-menu", "scrollspy", "hamburger-menu"],
  views: 31400,
  favorites: 1130,
  collections: ["saas-ui", "ec-ui", "apple-ui"],
  gradient: "from-amber-500/15 via-yellow-500/10 to-orange-500/15",
  difficulty: 2,
  updatedAt: "2026-06-08",
};
