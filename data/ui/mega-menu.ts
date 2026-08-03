import type { UIItem } from "@/types/ui";

export const megaMenu: UIItem = {
  slug: "mega-menu",
  name: "Mega Menu",
  nameJa: "メガメニュー",
  description:
    "ナビゲーション項目にホバー／クリックすると大型パネルが展開するメニュー。多階層サイトの全体像提示に最適。",
  category: "navigation",
  tags: ["ナビゲーション", "ドロップダウン", "大規模サイト", "EC"],
  aliases: [
    "ホバーすると大きく開くメニュー",
    "カテゴリが全部見える大きいメニュー",
    "ヘッダーから広がるパネルメニュー",
    "ECサイトの全カテゴリメニュー",
    "2列や3列に分かれたドロップダウン",
    "画面いっぱいに広がるナビゲーション",
  ],
  whatIs: [
    "メガメニュー（Mega Menu）は、グローバルナビゲーションの項目にホバーまたはクリックすると、複数カラムに整理された大型のパネルが展開されるナビゲーションUIです。通常のドロップダウンメニューが縦一列のリストであるのに対し、「メガ（巨大な）」の名が示す通り、画面幅いっぱいに近い面積を使って多数のリンクを一度に表示できることが名前の由来です。",
    "大規模ECサイトやコーポレートサイトのように、カテゴリが深く枝分かれする情報構造で特に威力を発揮します。カラム分割・見出し・アイコン・サムネイル画像・おすすめ商品枠などを組み合わせ、単なるリンク集ではなく「サイトの縮図」として機能させられる点が特徴です。",
    "ユーザビリティ研究で知られるNielsen Norman Groupも、適切に設計されたメガメニューは従来のドロップダウンより優れると評価しています。一方で、ホバー判定の誤作動（意図しない開閉）やモバイルでの扱いなど設計難易度は高く、ナビゲーションUIの中では上級パターンに位置づけられます。",
  ],
  features: [
    "ナビゲーション項目を起点に、複数カラム構成の大型パネルが展開する",
    "カテゴリ見出し・リンクグループ・画像・CTAなどを1枚のパネル内にレイアウトできる",
    "ホバートリガー型とクリックトリガー型があり、近年はクリック型が主流になりつつある",
    "パネル内で情報を2階層（見出し＋子リンク）まで一覧でき、深い階層移動を減らせる",
    "モバイルではアコーディオンやドロワーへ形を変えるレスポンシブ設計が前提となる",
    "「おすすめ」「新着」など編集枠を設けてマーチャンダイジングにも活用できる",
  ],
  merits: [
    "サイト全体のカテゴリ構造を一望でき、ユーザーが目的のページへ最短で到達できる",
    "縦一列のドロップダウンで起きがちな深いネスト（サブメニューの入れ子）を排除できる",
    "画像やアイコンを併用でき、テキストだけより選択肢の理解が速い",
    "主要ページへの内部リンクを全ページ共通で張れるため、SEO上の回遊性向上にも寄与する",
    "ECではセール枠や特集枠を組み込み、ナビゲーション自体を販促面として使える",
  ],
  demerits: [
    "ホバートリガーの場合、カーソルが通過しただけで開閉して煩わしい「誤爆」が起きやすい",
    "項目数が多すぎると選択肢過多となり、かえって認知負荷が上がる",
    "モバイルではそのまま使えず、別UIへの変換設計と実装コストが必ず発生する",
    "パネルが大きいためコンテンツを覆い隠し、下層の要素が操作できなくなる",
    "キーボード操作・スクリーンリーダー対応の実装難易度が通常のメニューより高い",
  ],
  bestPractices: [
    "ホバー型にする場合は開閉に150〜300ms程度のインテントディレイを設け、通過時の誤発動を防ぐ",
    "パネル内はカテゴリ見出しでグループ化し、1グループのリンクは5〜7個程度に抑える",
    "斜め移動でパネル外を通ってもすぐ閉じない「セーフトライアングル」の考慮を入れる",
    "タッチデバイスではホバーが存在しないため、1タップ目で開き2タップ目で遷移する挙動か、クリック型に統一する",
    "Escキーで閉じられるようにし、閉じたらトリガーへフォーカスを戻す",
    "全カテゴリを詰め込まず、アクセス解析に基づいて主要導線に絞る",
  ],
  useCases: [
    "Amazonの「すべて」メニュー — 全カテゴリを階層パネルで一覧",
    "ヨドバシカメラやビックカメラなど家電ECのカテゴリナビゲーション",
    "Adobe公式サイト — 製品群をアイコン付きのメガメニューで分類表示",
    "大学・官公庁サイト — 学部・手続きなど多数の下層ページへの入口を整理",
    "Stripeのプロダクトメニュー — アイコンと説明文付きの2カラムパネル",
  ],
  accessibility: [
    "トリガーは <button> にし、aria-expanded と aria-haspopup=\"true\" で状態を伝える",
    "パネルとトリガーを aria-controls で関連付け、開閉は hidden 属性やDOM制御で確実に切り替える",
    "Escキーでパネルを閉じ、フォーカスをトリガーへ戻す実装を必ず入れる",
    "パネル内のリンクはTabキーで順番に到達でき、パネル外へ抜けたら自動で閉じるようにする",
    "ホバーのみで開くメニューはキーボードユーザーが操作できないため、クリック／Enterでも必ず開けるようにする",
    "WAI-ARIAの「Disclosure Navigation Menu」パターンに準拠すると過剰なrole付与を避けられる",
  ],
  figma: [
    "ヘッダーとパネルを別コンポーネントに分け、Variantsで「closed / open」を切り替える",
    "パネル内はAuto Layout（横方向）でカラムを並べ、カラム内は縦方向のAuto Layoutでリンクを積む",
    "リンク行をコンポーネント化し、hover状態のVariantを用意してプロトタイプで遷移させる",
    "パネルの展開はSmart Animateより「Instant＋Dissolve（100ms）」の方が実挙動に近い",
    "実データ量（最長のカテゴリ名・最多のリンク数）を流し込んで折り返しと高さを検証する",
  ],
  code: {
    html: `<nav class="nav" aria-label="グローバルナビゲーション">
  <button class="nav-trigger" aria-expanded="false" aria-controls="mega-panel">
    製品
  </button>
  <div class="mega-panel" id="mega-panel" hidden>
    <div class="mega-col">
      <h3>決済</h3>
      <a href="#">オンライン決済</a>
      <a href="#">店頭決済</a>
      <a href="#">サブスクリプション</a>
    </div>
    <div class="mega-col">
      <h3>管理</h3>
      <a href="#">請求書</a>
      <a href="#">売上レポート</a>
      <a href="#">不正検知</a>
    </div>
  </div>
</nav>

<style>
  .nav { position: relative; }
  .nav-trigger {
    padding: 12px 16px;
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
  }
  .mega-panel {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    gap: 48px;
    min-width: 480px;
    padding: 24px 32px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgb(0 0 0 / 0.08);
  }
  .mega-col { display: flex; flex-direction: column; gap: 8px; }
  .mega-col h3 { font-size: 12px; color: #9ca3af; text-transform: uppercase; }
  .mega-col a { color: #374151; text-decoration: none; }
  .mega-col a:hover { color: #f59e0b; }
</style>

<script>
  const trigger = document.querySelector(".nav-trigger");
  const panel = document.getElementById("mega-panel");
  trigger.addEventListener("click", () => {
    const open = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  });
</script>`,
    tailwind: `<!-- group-hover を使ったホバー展開型（デモ用の最小構成） -->
<nav class="relative" aria-label="グローバルナビゲーション">
  <div class="group inline-block">
    <button
      class="rounded-lg px-4 py-3 font-semibold hover:bg-amber-50"
      aria-expanded="false"
      aria-haspopup="true"
    >
      製品
    </button>
    <div
      class="invisible absolute left-0 top-full z-50 grid w-[560px]
             grid-cols-3 gap-8 rounded-2xl border border-gray-200 bg-white
             p-8 opacity-0 shadow-xl transition-all duration-200
             group-hover:visible group-hover:opacity-100"
    >
      <div class="flex flex-col gap-2">
        <h3 class="text-xs font-semibold uppercase text-gray-400">決済</h3>
        <a href="#" class="text-gray-700 hover:text-amber-600">オンライン決済</a>
        <a href="#" class="text-gray-700 hover:text-amber-600">店頭決済</a>
        <a href="#" class="text-gray-700 hover:text-amber-600">サブスク</a>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="text-xs font-semibold uppercase text-gray-400">管理</h3>
        <a href="#" class="text-gray-700 hover:text-amber-600">請求書</a>
        <a href="#" class="text-gray-700 hover:text-amber-600">売上レポート</a>
      </div>
      <div class="rounded-xl bg-amber-50 p-4">
        <p class="text-sm font-semibold text-amber-800">新機能</p>
        <p class="mt-1 text-xs text-amber-700">AI不正検知がリリース</p>
      </div>
    </div>
  </div>
</nav>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Group = { heading: string; links: { label: string; href: string }[] };

export function MegaMenu({ label, groups }: { label: string; groups: Group[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // 外側クリックとEscで閉じる
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-lg px-4 py-3 font-semibold
                   hover:bg-amber-50"
      >
        {label}
        <ChevronDown
          aria-hidden
          className={\`size-4 transition-transform \${open ? "rotate-180" : ""}\`}
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute left-0 top-full z-50 grid w-[560px] grid-cols-3
                   gap-8 rounded-2xl border border-gray-200 bg-white p-8
                   shadow-xl"
      >
        {groups.map((group) => (
          <div key={group.heading} className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold uppercase text-gray-400">
              {group.heading}
            </h3>
            {group.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-amber-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add navigation-menu
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function SiteMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>製品</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[560px] grid-cols-2 gap-4 p-6">
              <NavigationMenuLink asChild>
                <a href="/payments" className="rounded-xl p-3 hover:bg-accent">
                  <div className="font-semibold">オンライン決済</div>
                  <p className="text-sm text-muted-foreground">
                    ECサイト向けの決済基盤
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a href="/billing" className="rounded-xl p-3 hover:bg-accent">
                  <div className="font-semibold">請求管理</div>
                  <p className="text-sm text-muted-foreground">
                    サブスクの請求を自動化
                  </p>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
  },
  related: ["navbar", "dropdown-menu", "hamburger-menu", "sidebar"],
  views: 12400,
  favorites: 520,
  collections: ["ec-ui", "saas-ui"],
  gradient: "from-amber-500/15 via-orange-500/10 to-yellow-500/15",
  difficulty: 3,
  updatedAt: "2026-06-14",
};
