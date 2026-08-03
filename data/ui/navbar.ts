import type { UIItem } from "@/types/ui";

export const navbar: UIItem = {
  slug: "navbar",
  name: "Navbar",
  nameJa: "ナビゲーションバー",
  description:
    "画面上部に固定されるサイトの主要導線。ロゴ・メニュー・CTAを束ねる顔となるUI。",
  category: "navbar",
  tags: ["ナビゲーション", "ヘッダー", "グローバルナビ", "固定表示"],
  aliases: [
    "上に固定されてるメニュー",
    "サイトの一番上にあるバー",
    "ロゴとメニューが並んでるヘッダー",
    "スクロールしてもついてくる上のメニュー",
    "グローバルナビゲーション",
    "ハンバーガーメニューがある上の帯",
  ],
  whatIs: [
    "ナビゲーションバー（Navbar）は、サイトやアプリの画面上部に配置され、ロゴ・主要ページへのリンク・検索・CTAボタンなどを横一列にまとめたナビゲーションUIです。名前はnavigation（航海術・案内）とbar（横棒）の組み合わせで、船の航海になぞらえて「サイト内を移動するための横長の帯」を意味します。日本では「グローバルナビゲーション（グロナビ）」や単に「ヘッダー」とも呼ばれます。",
    "ほぼすべてのWebサイトに存在する、いわばサイトの「顔」であり、ユーザーが最初に全体構造を把握し、迷ったときに立ち返る基準点になります。スクロールしても上部に留まる固定型（sticky/fixed）、下スクロールで隠れ上スクロールで再表示される出没型（auto-hide）など、表示挙動にも多くのバリエーションがあります。",
    "デスクトップでは横並びのリンク、モバイルではハンバーガーメニューへの格納というレスポンシブ対応が定番です。近年は、背景を半透明にしてぼかす「グラスモーフィズム」表現や、スクロールに応じて高さ・影が変化するマイクロインタラクションを備えた実装が主流になっています。",
  ],
  features: [
    "左にロゴ、中央〜右に主要リンク、右端にCTA・検索・アバターという構成が定番",
    "スクロールしても画面上部に固定されるsticky/fixed型が主流",
    "モバイルではリンク群をハンバーガーメニューやドロワーに格納する",
    "現在ページのリンクをハイライトし、サイト内の現在地を示す",
    "ドロップダウンやメガメニューと組み合わせて多階層のナビゲーションを提供できる",
    "スクロール量に応じて背景・影・高さが変化する演出がよく使われる",
  ],
  merits: [
    "どのページからでも主要導線に1クリックで到達でき、回遊性が大きく向上する",
    "常に同じ位置にあることで、ユーザーに安心感と現在地の基準点を与える",
    "ロゴとトーンを常時見せられるため、ブランド想起の強化につながる",
    "CTA（無料登録など）を全ページで露出でき、コンバージョン導線を確保できる",
    "ユーザーが慣習として理解している配置のため、学習コストがほぼゼロ",
  ],
  demerits: [
    "固定表示は画面の縦領域を常に消費し、特にモバイルでコンテンツ領域を圧迫する",
    "リンクを詰め込みすぎると選択肢過多になり、かえって迷いを生む",
    "ハンバーガーメニューに格納した項目は発見可能性が大きく下がる",
    "固定ヘッダーはページ内リンクのスクロール位置（アンカー）とぶつかりやすい（scroll-margin対応が必要）",
    "半透明・ぼかしなどの装飾はコントラスト不足や描画負荷の原因になり得る",
  ],
  bestPractices: [
    "リンクは5〜7個程度に厳選し、それ以上はドロップダウンやフッターに逃がす",
    "ロゴは必ずトップページへのリンクにする。ユーザーの共通認識になっている",
    "現在ページのリンクは色・下線などで示し、aria-current=\"page\"を付ける",
    "固定ヘッダーの高さぶん、アンカーリンク先に scroll-margin-top を設定する",
    "モバイルメニューはフォーカストラップとEscで閉じる操作を実装し、開いている間は背景スクロールを止める",
    "最重要のCTAは1つに絞って右端に置き、視覚的に他のリンクと差別化する",
  ],
  useCases: [
    "Stripe — グラデーションに馴染む半透明ナビと整理されたメガメニュー",
    "Apple — 極限まで絞られたリンクと検索・バッグアイコンのみのミニマルなグロナビ",
    "GitHub — リポジトリ内タブと組み合わせた2段構成のナビゲーション",
    "メルカリ — 検索バーを中央に据えたEC型ヘッダー",
    "SmartHR — 採用サイトなどでCTA（資料請求）を右端に固定した構成",
  ],
  accessibility: [
    "<header> 内の <nav aria-label=\"メイン\"> でマークアップし、ランドマークを明確にする",
    "現在ページのリンクに aria-current=\"page\" を付与する",
    "ハンバーガーボタンには aria-expanded と aria-controls、分かるラベル（「メニューを開く」）を付ける",
    "モバイルメニュー展開中はフォーカスをメニュー内に閉じ込め、Escキーで閉じられるようにする",
    "キーボード利用者向けに「本文へスキップ」リンクをナビの前に置く",
    "半透明背景でもテキストのコントラスト比4.5:1以上を保つ",
  ],
  figma: [
    "横方向のAuto Layoutで「ロゴ／リンク群／CTA」の3ブロックを組み、間隔はSpace Betweenで調整する",
    "リンクをコンポーネント化し、default / hover / current のVariantsを作る",
    "デスクトップ・タブレット・モバイルの3フレームで、ハンバーガー化する切り替え幅を明示する",
    "sticky表現はプロトタイプの「Fix position when scrolling」で確認する",
    "スクロール後の状態（背景色・影あり）をVariantで作り、Smart Animateで遷移を見せると実装者に意図が伝わる",
  ],
  code: {
    html: `<header class="navbar">
  <a href="/" class="brand">Acme</a>

  <nav aria-label="メイン">
    <ul class="links">
      <li><a href="/features" aria-current="page">機能</a></li>
      <li><a href="/pricing">料金</a></li>
      <li><a href="/docs">ドキュメント</a></li>
      <li><a href="/blog">ブログ</a></li>
    </ul>
  </nav>

  <a href="/signup" class="cta">無料で始める</a>
</header>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    height: 64px;
    padding: 0 24px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #e5e7eb;
  }
  .brand {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    text-decoration: none;
  }
  .links {
    display: flex;
    gap: 8px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .links a {
    padding: 8px 12px;
    border-radius: 8px;
    color: #4b5563;
    font-size: 14px;
    text-decoration: none;
  }
  .links a:hover { background: #f3f4f6; color: #111827; }
  .links a[aria-current="page"] { color: #111827; font-weight: 600; }
  .cta {
    padding: 8px 16px;
    border-radius: 10px;
    background: #111827;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }
  /* 固定ヘッダーとアンカーリンクの衝突対策 */
  :target { scroll-margin-top: 80px; }
</style>`,
    tailwind: `<header
  class="sticky top-0 z-50 flex h-16 items-center justify-between gap-6
         border-b border-gray-200 bg-white/85 px-6 backdrop-blur-md"
>
  <a href="/" class="text-lg font-bold text-gray-900">Acme</a>

  <nav aria-label="メイン" class="hidden md:block">
    <ul class="flex items-center gap-1">
      <li>
        <a href="/features" aria-current="page"
           class="rounded-lg px-3 py-2 text-sm font-semibold text-gray-900">
          機能
        </a>
      </li>
      <li>
        <a href="/pricing"
           class="rounded-lg px-3 py-2 text-sm text-gray-600
                  hover:bg-gray-100 hover:text-gray-900">
          料金
        </a>
      </li>
      <li>
        <a href="/docs"
           class="rounded-lg px-3 py-2 text-sm text-gray-600
                  hover:bg-gray-100 hover:text-gray-900">
          ドキュメント
        </a>
      </li>
      <li>
        <a href="/blog"
           class="rounded-lg px-3 py-2 text-sm text-gray-600
                  hover:bg-gray-100 hover:text-gray-900">
          ブログ
        </a>
      </li>
    </ul>
  </nav>

  <div class="flex items-center gap-3">
    <a href="/signup"
       class="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold
              text-white transition-colors hover:bg-gray-700">
      無料で始める
    </a>
    <!-- モバイル用ハンバーガー -->
    <button type="button" aria-label="メニューを開く" aria-expanded="false"
            class="grid size-10 place-items-center rounded-lg
                   hover:bg-gray-100 md:hidden">
      <svg class="size-5" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>`,
    react: `"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/features", label: "機能" },
  { href: "/pricing", label: "料金" },
  { href: "/docs", label: "ドキュメント" },
  { href: "/blog", label: "ブログ" },
];

export function Navbar({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  // メニュー展開中は背景スクロールを止め、Escで閉じる
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/85
                 backdrop-blur-md"
    >
      <div className="flex h-16 items-center justify-between gap-6 px-6">
        <a href="/" className="text-lg font-bold text-gray-900">
          Acme
        </a>

        <nav aria-label="メイン" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((link) => {
              const isCurrent = currentPath === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={\`rounded-lg px-3 py-2 text-sm \${
                      isCurrent
                        ? "font-semibold text-gray-900"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }\`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/signup"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold
                       text-white transition-colors hover:bg-gray-700"
          >
            無料で始める
          </a>
          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-lg
                       hover:bg-gray-100 md:hidden"
          >
            {open ? (
              <X aria-hidden className="size-5" />
            ) : (
              <Menu aria-hidden className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="メイン"
          className="border-t border-gray-200 md:hidden"
        >
          <ul className="grid gap-1 p-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={currentPath === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium
                             text-gray-900 hover:bg-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}`,
    shadcn: `// npx shadcn@latest add navigation-menu button sheet
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const LINKS = [
  { href: "/features", label: "機能" },
  { href: "/pricing", label: "料金" },
  { href: "/docs", label: "ドキュメント" },
  { href: "/blog", label: "ブログ" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between
                       gap-6 border-b bg-background/85 px-6 backdrop-blur-md">
      <a href="/" className="text-lg font-bold">Acme</a>

      {/* デスクトップ */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {LINKS.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                href={link.href}
                className={navigationMenuTriggerStyle()}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-3">
        <Button asChild>
          <a href="/signup">無料で始める</a>
        </Button>

        {/* モバイル：Sheet（ドロワー）に格納 */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden"
                    aria-label="メニューを開く">
              <Menu aria-hidden />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">メニュー</SheetTitle>
            <nav aria-label="メイン" className="mt-8 grid gap-1">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href}
                   className="rounded-lg px-3 py-3 text-sm font-medium
                              hover:bg-accent">
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}`,
  },
  related: ["sidebar", "dropdown-menu", "breadcrumb", "hero-section", "search-bar", "drawer"],
  views: 55600,
  favorites: 2280,
  collections: ["saas-ui", "stripe-ui", "apple-ui"],
  gradient: "from-rose-500/15 via-pink-500/10 to-fuchsia-500/15",
  difficulty: 2,
  updatedAt: "2026-07-11",
};
