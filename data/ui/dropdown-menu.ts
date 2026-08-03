import type { UIItem } from "@/types/ui";

export const dropdownMenu: UIItem = {
  slug: "dropdown-menu",
  name: "Dropdown Menu",
  nameJa: "ドロップダウンメニュー",
  description:
    "ボタンから垂れ下がるように現れる選択肢メニュー。操作の整理と省スペースの定番。",
  category: "navigation",
  tags: ["メニュー", "選択肢", "アクション", "コンテキストメニュー"],
  aliases: [
    "ボタンを押すと下に出てくるメニュー",
    "三点リーダー（…）を押すと出る選択肢",
    "クリックでパタッと開くリスト",
    "アバターを押すと出るアカウントメニュー",
    "右上の点々から出てくる操作一覧",
    "プルダウンメニュー",
  ],
  whatIs: [
    "ドロップダウンメニュー（Dropdown Menu）は、トリガーとなるボタンをクリック（またはホバー）すると、選択肢やアクションのリストが下方向に展開されるUIコンポーネントです。名前は英語のdrop down（垂れ下がる・落ちる）に由来し、メニューがトリガーから垂れ下がるように現れる様子を表しています。日本では「プルダウンメニュー」という呼び名も定着していますが、指すものはほぼ同じです。",
    "画面に常時表示するには多すぎる操作や選択肢を、必要なときだけ取り出せる形に格納できるため、アプリケーションのヘッダー（アカウントメニュー）、テーブル行の「…」ボタン、右クリックのコンテキストメニューなど、あらゆる場面で使われる基本パターンです。",
    "見た目が似ているUIに、フォームの選択コントロールであるセレクトボックス（<select>）がありますが、こちらは「値を1つ選ぶ入力部品」、ドロップダウンメニューは「アクションやナビゲーションの一覧」と役割が異なります。WAI-ARIAでもmenu/menuitemロールとして独立したパターンが定義されており、矢印キーでの項目移動など固有のキーボード操作が求められます。",
  ],
  features: [
    "トリガーのクリックで開閉し、外側クリックやEscキーで閉じる",
    "項目にはアイコン・ショートカット表記・区切り線（セパレーター）を添えられる",
    "サブメニュー（ネスト）、チェックボックス項目、ラジオ項目などの拡張パターンがある",
    "画面端ではメニューの展開方向が自動で反転する（衝突回避）",
    "矢印キーで項目間を移動し、Enterで実行するキーボード操作を備える",
    "破壊的操作（削除など）は赤字で表示し、他の項目と区別するのが慣例",
  ],
  merits: [
    "多数のアクションを1つのボタンに集約でき、画面のノイズを大幅に減らせる",
    "使用頻度の低い操作を隠しつつ、必要なときには2クリック以内で到達できる",
    "文脈ごとのメニュー（行単位の「…」など）で、対象と操作の関係が直感的に伝わる",
    "セパレーターやグループ見出しで操作を意味的に整理して見せられる",
    "モーダルより軽量で、開いたまま画面の文脈を保てる",
  ],
  demerits: [
    "選択肢が隠れているため、機能の存在に気づかれにくい（発見可能性の低下）",
    "項目が多すぎたり階層が深すぎたりすると、目的の操作を探すコストが上がる",
    "ホバーで開く実装はタッチデバイスと相性が悪く、操作ミスの原因になる",
    "フォーカス管理・キーボード操作・衝突回避など、正しく自作するのは意外と難しい",
    "頻繁に使う操作をメニュー内に隠すと、毎回の操作数が増えてストレスになる",
  ],
  bestPractices: [
    "開閉はホバーではなくクリックで行う。タッチ・マウス両方で安定して動作する",
    "項目数は多くても10個程度に抑え、それ以上は検索付きメニューや別画面に分ける",
    "関連する操作はセパレーターでグループ化し、よく使う操作を上部に置く",
    "削除などの破壊的操作は赤系の色で区別し、直後に確認ダイアログを挟む",
    "Esc・外側クリックで閉じ、閉じたあとはトリガーへフォーカスを戻す",
    "自作せずRadix UIやHeadless UIなど、アクセシビリティ実装済みのライブラリを使う",
  ],
  useCases: [
    "GitHub — リポジトリ画面の「Code」ボタンやアカウントメニュー",
    "Notion — ブロック左の「⋮⋮」から開くブロック操作メニュー",
    "Google Drive — ファイル右クリック／「…」からの共有・移動・削除メニュー",
    "macOSのメニューバー — ファイル・編集・表示などのアプリケーションメニュー",
    "管理画面のデータテーブル — 行末の「…」ボタンから編集・複製・削除を提供",
  ],
  accessibility: [
    "トリガーに aria-haspopup=\"menu\" と aria-expanded を付与し、開閉状態を伝える",
    "メニューに role=\"menu\"、各項目に role=\"menuitem\" を設定する",
    "開いたら最初の項目へフォーカスを移し、上下矢印キーで項目間を移動できるようにする",
    "Escキーで閉じてトリガーにフォーカスを戻す。Tabキーではメニューを閉じて次の要素へ進める",
    "文字キーによる頭文字ジャンプ（typeahead）があると項目が多いメニューで便利",
    "無効な項目は aria-disabled=\"true\" とし、フォーカスは受けるがEnterで実行されないようにする",
  ],
  figma: [
    "メニュー項目を1コンポーネント（Auto Layout横並び: アイコン＋ラベル＋ショートカット）で作り、hover / disabled / destructive のVariantsを持たせる",
    "メニュー本体は縦Auto Layout＋padding 4〜6、角丸8〜12px、シャドウ（Drop shadow: 0 8 24 rgba(0,0,0,0.12)）で浮かせる",
    "セパレーターは高さ1pxの塗り矩形をコンポーネント化してInstance Swapで挿入する",
    "プロトタイプは「Open overlay」＋「Manual」配置でトリガー直下に表示し、外側クリックで閉じる設定にする",
    "サブメニューがある場合は右端にシェブロンを置き、展開位置のフレームを別途用意する",
  ],
  code: {
    html: `<!-- HTML標準のPopover APIを使った軽量ドロップダウン -->
<button type="button" popovertarget="user-menu" class="menu-trigger">
  メニュー
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="m6 9 6 6 6-6"/>
  </svg>
</button>

<div id="user-menu" popover class="menu">
  <a href="/profile" class="item">プロフィール</a>
  <a href="/settings" class="item">設定</a>
  <hr class="separator" />
  <button type="button" class="item danger">ログアウト</button>
</div>

<style>
  .menu-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
  }
  .menu {
    margin: 0;
    padding: 6px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    min-width: 180px;
  }
  .menu .item {
    display: block;
    width: 100%;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background: none;
    color: #111827;
    font-size: 14px;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }
  .menu .item:hover { background: #f3f4f6; }
  .menu .item.danger { color: #dc2626; }
  .separator {
    margin: 6px 0;
    border: none;
    border-top: 1px solid #e5e7eb;
  }
</style>`,
    tailwind: `<!-- Popover API + Tailwind。anchor positioningが使えない環境では位置調整が必要 -->
<button
  type="button"
  popovertarget="user-menu"
  class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200
         bg-white px-3.5 py-2 text-sm font-medium hover:bg-gray-50"
>
  アカウント
  <svg class="size-3.5 text-gray-500" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
  </svg>
</button>

<div
  id="user-menu"
  popover
  class="min-w-45 rounded-xl border border-gray-200 bg-white p-1.5
         shadow-xl shadow-gray-900/10"
>
  <a href="/profile"
     class="block rounded-lg px-3 py-2 text-sm text-gray-900 hover:bg-gray-100">
    プロフィール
  </a>
  <a href="/settings"
     class="block rounded-lg px-3 py-2 text-sm text-gray-900 hover:bg-gray-100">
    設定
  </a>
  <hr class="my-1.5 border-gray-200" />
  <button
    type="button"
    class="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600
           hover:bg-red-50"
  >
    ログアウト
  </button>
</div>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type MenuItem = {
  label: string;
  onSelect: () => void;
  destructive?: boolean;
};

export function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: MenuItem[];
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();

  // 外側クリックで閉じる
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // 開いたら最初の項目にフォーカス
  useEffect(() => {
    if (open) itemRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + items.length) % items.length);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => {
          setActiveIndex(0);
          setOpen((o) => !o);
        }}
        className="inline-flex items-center gap-1.5 rounded-xl border
                   border-gray-200 bg-white px-3.5 py-2 text-sm font-medium
                   hover:bg-gray-50"
      >
        {label}
        <ChevronDown
          aria-hidden
          className={\`size-3.5 text-gray-500 transition-transform \${
            open ? "rotate-180" : ""
          }\`}
        />
      </button>

      {open && (
        <div
          role="menu"
          id={menuId}
          onKeyDown={onMenuKeyDown}
          className="absolute left-0 top-full z-50 mt-1.5 min-w-45 rounded-xl
                     border border-gray-200 bg-white p-1.5 shadow-xl
                     shadow-gray-900/10"
        >
          {items.map((item, i) => (
            <button
              key={item.label}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              type="button"
              role="menuitem"
              tabIndex={i === activeIndex ? 0 : -1}
              onClick={() => {
                item.onSelect();
                close();
              }}
              className={\`block w-full rounded-lg px-3 py-2 text-left text-sm
                          focus:outline-none \${
                            item.destructive
                              ? "text-red-600 hover:bg-red-50 focus:bg-red-50"
                              : "text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                          }\`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 使用例
// <DropdownMenu
//   label="アカウント"
//   items={[
//     { label: "プロフィール", onSelect: () => router.push("/profile") },
//     { label: "設定", onSelect: () => router.push("/settings") },
//     { label: "ログアウト", onSelect: logout, destructive: true },
//   ]}
// />`,
    shadcn: `// npx shadcn@latest add dropdown-menu button
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, User } from "lucide-react";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">アカウント</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>yamada@example.com</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User aria-hidden />
          プロフィール
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings aria-hidden />
          設定
          <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut aria-hidden />
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
  },
  related: ["navbar", "command-palette", "tooltip", "modal", "segmented-control", "avatar"],
  views: 31500,
  favorites: 1290,
  collections: ["saas-ui", "admin-ui", "apple-ui"],
  gradient: "from-indigo-500/15 via-violet-500/10 to-purple-500/15",
  difficulty: 2,
  updatedAt: "2026-06-25",
};
