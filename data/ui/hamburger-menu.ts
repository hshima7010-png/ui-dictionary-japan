import type { UIItem } from "@/types/ui";

export const hamburgerMenu: UIItem = {
  slug: "hamburger-menu",
  name: "Hamburger Menu",
  nameJa: "ハンバーガーメニュー",
  description:
    "三本線アイコンをタップするとナビゲーションが展開するUI。モバイルサイトの定番メニューパターン。",
  category: "navigation",
  tags: ["ナビゲーション", "モバイル", "アイコン", "ドロワー"],
  aliases: [
    "三本線のメニュー",
    "スマホの右上にある線が3つのボタン",
    "押すと横からメニューが出てくるやつ",
    "line 3本のアイコン",
    "モバイルの隠しメニュー",
    "サンドイッチみたいなアイコンのメニュー",
  ],
  whatIs: [
    "ハンバーガーメニュー（Hamburger Menu）は、水平の三本線アイコンをタップ／クリックするとナビゲーションメニューが展開されるUIパターンです。三本線がバンズ（パン）に具材を挟んだハンバーガーの断面に見えることが名前の由来で、アイコン自体は1981年にXerox Starのデザイナー、ノーム・コックスが考案したと言われる歴史あるものです。",
    "スマートフォンの普及とともに「狭い画面でナビゲーションを畳んでおく」手段として爆発的に広まり、現在ではWeb・アプリを問わずモバイルナビゲーションの事実上の標準となっています。タップすると画面端からドロワー（スライドパネル）が現れる実装が最も一般的です。",
    "一方で「メニューを隠すこと自体が発見性を下げる」という批判も長く議論されており、主要導線をタブバー（ボトムナビゲーション）に出し、補助的な項目だけをハンバーガーに収める設計が近年の主流です。認知度が非常に高い反面、万能ではないパターンとして理解しておくことが重要です。",
  ],
  features: [
    "三本線アイコンという世界共通で認知されたトリガーを使う",
    "タップすると画面端からドロワー、または全画面オーバーレイでメニューが展開する",
    "開閉時に三本線が「×」へ変形するアニメーションを伴うことが多い",
    "閉じている間はナビゲーションが画面を一切占有しない",
    "デスクトップでは水平ナビ、モバイルではハンバーガーというレスポンシブ切り替えが定番",
    "メニュー内にアカウント情報・設定・言語切替など雑多な項目も収納できる",
  ],
  merits: [
    "ナビゲーションを畳むことで、コンテンツに画面をフルに使える",
    "項目数が多くてもスクロール可能なドロワー内にすべて収納できる",
    "三本線アイコンの認知度が極めて高く、説明なしでもメニューだと伝わる",
    "デスクトップ／モバィルでナビゲーション構造を共通化でき、実装・運用コストが下がる",
    "地図アプリや写真アプリなど、コンテンツ没入型の画面と相性が良い",
  ],
  demerits: [
    "メニューが隠れるため、重要な導線の発見性・利用率が下がる（Out of sight, out of mind）",
    "目的のページに着くまで「開く→探す→タップ」と操作ステップが増える",
    "現在地（どのページにいるか）が閉じた状態では分からない",
    "画面上部に置かれることが多く、大画面スマホでは片手の親指が届きにくい",
    "全項目を放り込む「ゴミ箱化」が起きやすく、情報設計の崩壊を招きやすい",
  ],
  bestPractices: [
    "コンバージョンに直結する主要導線（検索・カートなど）はハンバーガーの外に出す",
    "アイコンには「メニュー」のテキストラベルを添えるとタップ率が上がるという調査結果を考慮する",
    "タップ領域は最低44×44px（できれば48px）を確保する",
    "開いたドロワーはオーバーレイの暗幕タップ・Escキー・×ボタンのいずれでも閉じられるようにする",
    "開いている間は背景のスクロールを固定（scroll lock）する",
    "三本線→×への変形アニメーションで開閉状態を明確にフィードバックする",
  ],
  useCases: [
    "ほぼすべてのモバイル向けコーポレートサイト・メディアサイトのグローバルナビ",
    "ユニクロのモバイルサイト — カテゴリ一覧を左ドロワーで展開",
    "YouTubeのデスクトップ版 — ハンバーガーでサイドバーの開閉を切り替え",
    "日経電子版などニュースアプリ — セクション一覧をドロワーに収納",
    "Notionのモバイルアプリ — ページツリーをハンバーガーから表示",
  ],
  accessibility: [
    "トリガーは <button> 要素とし、aria-expanded で開閉状態、aria-controls で対象を関連付ける",
    "アイコンのみの場合は aria-label=\"メニューを開く\" などのラベルを必ず付与する",
    "ドロワーを開いたらフォーカスをドロワー内へ移動し、フォーカストラップを設ける",
    "Escキーで閉じ、閉じたらフォーカスをトリガーへ戻す",
    "ドロワーには role=\"dialog\" と aria-modal=\"true\"、または <nav> ランドマークを適切に設定する",
    "prefers-reduced-motion 設定時はスライドアニメーションを無効化する",
  ],
  figma: [
    "三本線アイコンと×アイコンをVariantsで持つ「MenuButton」コンポーネントを作る",
    "ドロワーは別フレームで作り、プロトタイプの「Open overlay」＋「Move in（左から、300ms, Ease Out）」で再現する",
    "オーバーレイの暗幕は黒40%のRectangleを重ね、クリックで「Close overlay」を設定する",
    "メニュー項目はAuto Layoutで積み、項目コンポーネントにdefault / current / hoverのVariantを用意する",
    "実機幅（375px / 390px）のフレームでタップ領域が44px以上あるか確認する",
  ],
  code: {
    html: `<button
  class="hamburger"
  aria-expanded="false"
  aria-controls="drawer"
  aria-label="メニューを開く"
>
  <span></span><span></span><span></span>
</button>

<div class="overlay" hidden></div>
<nav class="drawer" id="drawer" aria-label="メインメニュー" hidden>
  <a href="/">ホーム</a>
  <a href="/products">製品</a>
  <a href="/pricing">料金</a>
  <a href="/contact">お問い合わせ</a>
</nav>

<style>
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 48px;
    height: 48px;
    padding: 14px 12px;
    background: none;
    border: none;
    cursor: pointer;
  }
  .hamburger span {
    height: 2px;
    background: #111827;
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s;
  }
  .hamburger[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  .hamburger[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
  .overlay {
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 0.4);
  }
  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 72px 24px 24px;
    background: #fff;
    box-shadow: -8px 0 24px rgb(0 0 0 / 0.12);
  }
  .drawer a {
    padding: 12px 16px;
    border-radius: 12px;
    color: #111827;
    text-decoration: none;
  }
  .drawer a:hover { background: #fef3c7; }
</style>

<script>
  const btn = document.querySelector(".hamburger");
  const drawer = document.getElementById("drawer");
  const overlay = document.querySelector(".overlay");
  const toggle = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    drawer.hidden = !open;
    overlay.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  };
  btn.addEventListener("click", () =>
    toggle(btn.getAttribute("aria-expanded") !== "true")
  );
  overlay.addEventListener("click", () => toggle(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { toggle(false); btn.focus(); }
  });
</script>`,
    tailwind: `<!-- peer-checked を使ったCSSのみのデモ（本番はJS制御を推奨） -->
<div>
  <input type="checkbox" id="menu-toggle" class="peer sr-only" />
  <label
    for="menu-toggle"
    class="fixed right-4 top-4 z-50 flex size-12 cursor-pointer
           flex-col items-center justify-center gap-1.5 rounded-xl
           bg-white shadow"
    aria-label="メニューを開く"
  >
    <span class="h-0.5 w-6 rounded bg-gray-900"></span>
    <span class="h-0.5 w-6 rounded bg-gray-900"></span>
    <span class="h-0.5 w-6 rounded bg-gray-900"></span>
  </label>

  <div
    class="invisible fixed inset-0 z-30 bg-black/40 opacity-0
           transition-opacity peer-checked:visible peer-checked:opacity-100"
  ></div>

  <nav
    class="fixed inset-y-0 right-0 z-40 flex w-72 translate-x-full
           flex-col gap-1 bg-white p-6 pt-20 shadow-2xl
           transition-transform duration-300 peer-checked:translate-x-0"
    aria-label="メインメニュー"
  >
    <a href="/" class="rounded-xl px-4 py-3 hover:bg-amber-50">ホーム</a>
    <a href="/products" class="rounded-xl px-4 py-3 hover:bg-amber-50">製品</a>
    <a href="/pricing" class="rounded-xl px-4 py-3 hover:bg-amber-50">料金</a>
    <a href="/contact" class="rounded-xl px-4 py-3 hover:bg-amber-50">
      お問い合わせ
    </a>
  </nav>
</div>`,
    react: `"use client";

import { useEffect, useId, useState } from "react";

const links = [
  { label: "ホーム", href: "/" },
  { label: "製品", href: "/products" },
  { label: "料金", href: "/pricing" },
  { label: "お問い合わせ", href: "/contact" },
];

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  // 開いている間は背景スクロールを固定し、Escで閉じる
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
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
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-4 top-4 z-50 flex size-12 flex-col
                   items-center justify-center gap-1.5 rounded-xl bg-white
                   shadow"
      >
        <span
          className={\`h-0.5 w-6 rounded bg-gray-900 transition-transform
                      \${open ? "translate-y-2 rotate-45" : ""}\`}
        />
        <span
          className={\`h-0.5 w-6 rounded bg-gray-900 transition-opacity
                      \${open ? "opacity-0" : ""}\`}
        />
        <span
          className={\`h-0.5 w-6 rounded bg-gray-900 transition-transform
                      \${open ? "-translate-y-2 -rotate-45" : ""}\`}
        />
      </button>

      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40"
        />
      )}

      <nav
        id={drawerId}
        aria-label="メインメニュー"
        className={\`fixed inset-y-0 right-0 z-40 flex w-72 flex-col gap-1
                    bg-white p-6 pt-20 shadow-2xl transition-transform
                    duration-300 \${open ? "translate-x-0" : "translate-x-full"}\`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-xl px-4 py-3 hover:bg-amber-50"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}`,
    shadcn: `// npx shadcn@latest add sheet button
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "ホーム", href: "/" },
  { label: "製品", href: "/products" },
  { label: "料金", href: "/pricing" },
  { label: "お問い合わせ", href: "/contact" },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="メニューを開く">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>メニュー</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}`,
  },
  related: ["drawer", "navbar", "bottom-navigation", "mega-menu"],
  views: 45600,
  favorites: 1980,
  collections: ["mobile-ui", "saas-ui"],
  gradient: "from-orange-500/15 via-amber-500/10 to-red-500/15",
  difficulty: 2,
  updatedAt: "2026-07-05",
};
