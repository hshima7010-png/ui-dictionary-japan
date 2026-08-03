import type { UIItem } from "@/types/ui";

export const drawer: UIItem = {
  slug: "drawer",
  name: "Drawer",
  nameJa: "ドロワー",
  description:
    "画面の端からスライドして現れるパネル。ナビゲーションや設定・詳細を一時的に表示できる。",
  category: "drawer",
  tags: ["サイドパネル", "オーバーレイ", "ナビゲーション", "ハンバーガーメニュー"],
  aliases: [
    "横からスライドして出てくるメニュー",
    "ハンバーガーを押すと出てくるやつ",
    "引き出しみたいに開くパネル",
    "画面の脇から出てくるサイドメニュー",
    "スライドして開く設定画面",
    "端から被さってくるパネル",
  ],
  whatIs: [
    "ドロワー（Drawer）は、画面の端（主に左右）からスライドして現れるパネル型のUIコンポーネントです。名前は机やタンスの「引き出し（drawer）」に由来し、普段は収納されていて必要なときだけ引き出して使う様子から名付けられました。「スライドメニュー」「オフキャンバスメニュー」とも呼ばれます。",
    "モバイルでハンバーガーアイコン（三本線）から開くナビゲーションドロワーが最も有名ですが、用途はそれに限りません。管理画面で行をクリックすると右から現れる詳細パネル、ECサイトのカートパネル、フィルター設定など、「メイン画面の文脈を保ったままサブ画面を差し込む」あらゆる場面で使われます。",
    "モーダルのように背景をスクリムで覆ってブロックする「一時的（temporary）ドロワー」と、デスクトップで常時表示される「常設（persistent）ドロワー」があり、後者は一般に「サイドバー」と呼び分けられます。画面を覆う面積が縦一列に限定されるため、モーダルよりも多くの情報を収められるのが特徴です。",
  ],
  features: [
    "画面の左右（まれに上下）からスライドインし、オーバーレイとして重なる",
    "スクリム付きの一時表示型と、常時表示のサイドバー型がある",
    "縦一列のレイアウトで、ナビゲーションリンクやフォームを多く収められる",
    "スワイプジェスチャーやオーバーレイタップ、Escキーで閉じられる",
    "右側ドロワーは詳細表示・設定、左側ドロワーはナビゲーションという使い分けが定着している",
    "モーダルより画面占有が少なく、背景の文脈を残したまま表示できる",
  ],
  merits: [
    "ヘッダーに入り切らないナビゲーションや機能を画面外に退避でき、UIをすっきり保てる",
    "縦に長いコンテンツ（メニュー、フォーム、詳細情報）を丸ごと収められる",
    "ページ遷移せずに詳細確認や編集ができ、一覧↔詳細の往復が高速になる",
    "モバイル・デスクトップ両方で通用する汎用性の高いパターン",
    "開閉のスライドアニメーションで「どこから来てどこへ戻るか」が直感的に分かる",
  ],
  demerits: [
    "ハンバーガーメニューに隠したナビゲーションは発見性が下がり、利用率が落ちる",
    "ドロワー内のコンテンツはSEO・初見ユーザーへの訴求力が弱い",
    "左端からのスワイプがブラウザの「戻る」ジェスチャーと競合することがある",
    "多段ドロワー（ドロワーの中からさらにドロワー）を重ねると現在地を見失いやすい",
    "フォーカス管理・スクロールロックなどモーダルと同等の実装配慮が必要",
  ],
  bestPractices: [
    "頻繁に使う主要ナビゲーションはドロワーに隠さず、タブバーやヘッダーに露出させる",
    "ナビゲーションは左から、詳細・設定・カートは右から開くという慣習に従う",
    "開いている間は背景スクロールをロックし、スクリムのクリックとEscキーで閉じられるようにする",
    "スライドは200〜300msのease-outで、閉じる方向とスワイプ方向を一致させる",
    "ドロワーの幅はモバイルで画面の80〜85%に留め、背景を一部見せて文脈を保つ",
    "デスクトップでは常設サイドバー、モバイルではドロワーとブレークポイントで切り替える",
  ],
  useCases: [
    "モバイルのECサイト — ハンバーガーメニューからカテゴリナビゲーションを表示",
    "Shopifyのストア — カートに追加すると右からカートドロワーが開く",
    "Notion・Slack — モバイル表示でのチャンネル／ページ一覧のドロワー",
    "管理画面（Stripe, Vercelなど） — テーブル行のクリックで詳細を右パネル表示",
    "Googleアナリティクス — レポートのフィルター・設定パネル",
    "地図サービス — 検索結果一覧を左ドロワーで表示し、地図と並行して閲覧",
  ],
  accessibility: [
    "一時表示型は role=\"dialog\" と aria-modal=\"true\" を設定し、モーダルと同じフォーカス管理を行う",
    "開いたらドロワー内の先頭要素へフォーカスを移し、閉じたらトリガー（ハンバーガーボタン）へ戻す",
    "トリガーボタンには aria-expanded と aria-controls、aria-label（例:「メニューを開く」）を付与する",
    "Escキーで閉じられるようにし、Tabフォーカスがドロワー外へ抜けないようトラップする",
    "背景コンテンツに inert を適用し、スクリーンリーダーの仮想カーソルからも隔離する",
    "prefers-reduced-motion 有効時はスライドをフェードに置き換えるなど動きを抑える",
  ],
  figma: [
    "デバイスフレームと同じ高さのパネル（モバイルは幅80%、デスクトップは320〜400px）を用意する",
    "プロトタイプのOpen overlayでスライドイン方向（Move in: Right/Left, 250ms, Ease Out）を設定する",
    "スクリムは黒40%のレクタングルをオーバーレイ背景として設定し、クリックで閉じるを有効にする",
    "ナビゲーション項目はAuto Layoutでリスト化し、selected状態のVariantを用意する",
    "左ナビ用・右詳細用の2種類のテンプレートを作っておくと使い回しやすい",
  ],
  code: {
    html: `<button id="open-drawer" aria-expanded="false" aria-controls="drawer"
        aria-label="メニューを開く">
  ☰ メニュー
</button>

<div id="overlay" class="overlay" hidden></div>
<nav id="drawer" class="drawer" role="dialog" aria-modal="true"
     aria-label="メインメニュー" hidden>
  <div class="drawer-header">
    <span class="brand">MyShop</span>
    <button id="close-drawer" aria-label="メニューを閉じる">✕</button>
  </div>
  <ul>
    <li><a href="/new">新着アイテム</a></li>
    <li><a href="/mens">メンズ</a></li>
    <li><a href="/womens">レディース</a></li>
    <li><a href="/sale">セール</a></li>
  </ul>
</nav>

<style>
  .overlay {
    position: fixed; inset: 0;
    background: rgb(0 0 0 / 0.4);
    z-index: 40;
  }
  .drawer {
    position: fixed; top: 0; bottom: 0; left: 0;
    width: min(320px, 85vw);
    background: #fff;
    z-index: 50;
    box-shadow: 8px 0 30px rgb(0 0 0 / 0.15);
    animation: slide-in 0.25s ease-out;
  }
  @keyframes slide-in {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  .drawer-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 20px; border-bottom: 1px solid #e5e7eb;
  }
  .drawer ul { list-style: none; margin: 0; padding: 8px; }
  .drawer a {
    display: block; padding: 12px; border-radius: 10px;
    color: #111827; text-decoration: none;
  }
  .drawer a:hover { background: #f3f4f6; }
</style>

<script>
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("open-drawer");
  const toggle = (open) => {
    drawer.hidden = !open;
    overlay.hidden = !open;
    openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  openBtn.addEventListener("click", () => toggle(true));
  document.getElementById("close-drawer").addEventListener("click", () => toggle(false));
  overlay.addEventListener("click", () => toggle(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggle(false);
  });
</script>`,
    tailwind: `<!-- スクリム -->
<div class="fixed inset-0 z-40 bg-black/40" aria-hidden="true"></div>

<!-- 左ドロワー -->
<nav
  role="dialog"
  aria-modal="true"
  aria-label="メインメニュー"
  class="fixed inset-y-0 left-0 z-50 w-[min(320px,85vw)] bg-white
         shadow-2xl animate-in slide-in-from-left duration-250"
>
  <div class="flex items-center justify-between border-b border-gray-200
              px-5 py-4">
    <span class="text-lg font-bold">MyShop</span>
    <button
      aria-label="メニューを閉じる"
      class="rounded-full p-2 text-gray-500 hover:bg-gray-100"
    >
      <svg class="size-5" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
      </svg>
    </button>
  </div>

  <ul class="space-y-1 p-3">
    <li>
      <a href="/new"
         class="block rounded-xl px-4 py-3 font-medium hover:bg-gray-100">
        新着アイテム
      </a>
    </li>
    <li>
      <a href="/mens"
         class="block rounded-xl px-4 py-3 font-medium hover:bg-gray-100">
        メンズ
      </a>
    </li>
    <li>
      <a href="/womens"
         class="block rounded-xl px-4 py-3 font-medium hover:bg-gray-100">
        レディース
      </a>
    </li>
    <li>
      <a href="/sale"
         class="block rounded-xl px-4 py-3 font-medium text-red-600
                hover:bg-red-50">
        セール
      </a>
    </li>
  </ul>
</nav>`,
    react: `"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function Drawer({
  side = "left",
  title,
  children,
}: {
  side?: "left" | "right";
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label={\`\${title}を開く\`}
        className="rounded-xl border border-gray-300 p-2.5 hover:bg-gray-50"
      >
        <Menu aria-hidden className="size-5" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className={\`fixed inset-y-0 z-50 w-[min(320px,85vw)] bg-white
                        shadow-2xl outline-none
                        \${side === "left" ? "left-0" : "right-0"}\`}
          >
            <div className="flex items-center justify-between border-b
                            border-gray-200 px-5 py-4">
              <span className="text-lg font-bold">{title}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={\`\${title}を閉じる\`}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <X aria-hidden className="size-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-3">{children}</div>
          </div>
        </>
      )}
    </>
  );
}`,
    shadcn: `// npx shadcn@latest add sheet
// shadcn/uiではオーバーレイ型ドロワーは「Sheet」という名前です
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function NavigationDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="メニューを開く">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      {/* side="left" | "right" | "top" | "bottom" */}
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>MyShop</SheetTitle>
          <SheetDescription>カテゴリからさがす</SheetDescription>
        </SheetHeader>
        <nav className="mt-4 space-y-1">
          <a href="/new"
             className="block rounded-xl px-4 py-3 font-medium hover:bg-accent">
            新着アイテム
          </a>
          <a href="/mens"
             className="block rounded-xl px-4 py-3 font-medium hover:bg-accent">
            メンズ
          </a>
          <a href="/womens"
             className="block rounded-xl px-4 py-3 font-medium hover:bg-accent">
            レディース
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}`,
  },
  related: ["bottom-sheet", "modal", "sidebar", "navbar"],
  views: 28900,
  favorites: 1160,
  collections: ["mobile-ui", "ec-ui", "admin-ui"],
  gradient: "from-teal-500/15 via-emerald-500/10 to-cyan-500/15",
  difficulty: 2,
  updatedAt: "2026-06-08",
};
