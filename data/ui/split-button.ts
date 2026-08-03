import type { UIItem } from "@/types/ui";

export const splitButton: UIItem = {
  slug: "split-button",
  name: "Split Button",
  nameJa: "スプリットボタン",
  description:
    "メインアクションとドロップダウンを分割した二段構えのボタン。関連アクションを省スペースで集約。",
  category: "buttons",
  tags: ["ドロップダウン", "複合アクション", "ツールバー", "省スペース"],
  aliases: [
    "横に矢印が付いてるボタン",
    "押す場所が2つに分かれたボタン",
    "保存と保存オプションが一緒になったやつ",
    "右側だけメニューが開くボタン",
    "メインの操作とその他の操作がセットのボタン",
  ],
  whatIs: [
    "スプリットボタン（Split Button）は、1つのボタンを「メインアクション部」と「ドロップダウントリガー部（矢印）」の2つの領域に分割（split）した複合コンポーネントです。名前は文字どおりボタンが縦の区切り線で2つに割れている見た目に由来します。左側を押せば既定のアクションが即実行され、右側の矢印を押せば関連アクションの一覧が開きます。",
    "「返信」と「全員に返信／転送」、「保存」と「名前を付けて保存／テンプレートとして保存」のように、1つの主要アクションと複数の派生アクションをまとめたい場面で真価を発揮します。Microsoft OfficeのリボンUIやGitHubの「Code」ボタンなど、デスクトップ由来の生産性ツールで長く使われてきたパターンです。",
    "通常のドロップダウンボタンとの違いは「最頻出のアクションをワンクリックで実行できる」点にあります。その一方で、2つのクリック領域を持つことがユーザーに伝わりにくいという課題もあり、区切り線やホバー時の領域ハイライトで構造を明示する工夫が求められます。",
  ],
  features: [
    "メインアクション部と矢印部が視覚的な区切り線で分割されている",
    "メイン部のクリックで既定アクションが即実行される",
    "矢印部のクリックで関連アクションのドロップダウンメニューが開く",
    "最後に選んだアクションを既定アクションとして記憶する実装もある",
    "hover時に押下対象の領域だけがハイライトされ、2領域であることを伝える",
    "キーボードでは2つの独立したフォーカス可能要素として扱われる",
  ],
  merits: [
    "最頻出アクションを1クリックで実行しつつ、派生アクションも同じ場所に集約できる",
    "ボタンを何個も並べるよりツールバーの占有面積を大幅に節約できる",
    "既定アクションが明示されるため、初心者は迷わず、上級者は素早く操作できる",
    "「公開する／下書き保存／予約公開」のような状態分岐と相性が良い",
    "関連アクションのグルーピングにより情報設計が整理される",
  ],
  demerits: [
    "2つのクリック領域があることに気づかないユーザーが一定数いる",
    "矢印部のヒット領域が狭くなりがちで、モバイルでは誤タップしやすい",
    "実装がボタン＋メニューの複合になり、フォーカス管理などの難易度が上がる",
    "既定アクションの選定を誤ると、大多数のユーザーに余計なクリックを強いる",
    "スクリーンリーダー利用者には構造の説明が難しく、丁寧なラベル設計が必要",
  ],
  bestPractices: [
    "既定アクションには利用頻度が最も高いものを置き、ログを基に見直す",
    "メイン部と矢印部の間に必ず区切り線を入れ、ホバーで領域を個別にハイライトする",
    "矢印部には「その他の保存オプション」などaria-labelで独立した名前を付ける",
    "モバイルでは矢印部のタップ領域を44px以上確保するか、別UIへの置き換えを検討する",
    "メニュー内の項目は動詞で統一し、既定アクションと粒度を揃える",
    "破壊的な派生アクション（完全に削除など）はメニュー内で区切り線と赤色で分離する",
  ],
  useCases: [
    "GitHubの「Code」ボタン — クローンURLコピーとZIPダウンロードなどの派生操作",
    "Outlookの「返信」ボタン — 返信／全員に返信／転送の切り替え",
    "Google Driveの「新規」まわり — 新規作成とテンプレートからの作成",
    "CMSの公開ボタン — 「公開する」と「予約公開／下書きとして保存」",
    "IDEの実行ボタン — 「Run」と実行構成の選択メニュー",
  ],
  accessibility: [
    "メイン部と矢印部を別々の<button>にし、それぞれ独立してフォーカスできるようにする",
    "矢印部にはaria-haspopup=\"menu\"とaria-expandedを付与し、開閉状態を伝える",
    "矢印部のaria-labelは「その他のオプション」など役割が分かる文言にする",
    "メニューは矢印キーで項目移動、Escapeで閉じてトリガーへフォーカスを戻す",
    "2つのボタンをrole=\"group\"とaria-labelで束ね、関連性を支援技術に伝える",
  ],
  figma: [
    "メイン部と矢印部を別レイヤーで作り、Auto Layout（gap: 0）で結合する",
    "区切り線は矢印部の左borderで表現すると、角丸の破綻を防ぎやすい",
    "hover状態のVariantを「メイン部hover」「矢印部hover」の2種類用意する",
    "ドロップダウンメニューは別コンポーネントにし、プロトタイプでOpen Overlayを設定する",
    "角丸はグループ全体で統一し、左端・右端のみ丸めるようRadiusを個別指定する",
  ],
  code: {
    html: `<div class="split-btn" role="group" aria-label="保存オプション">
  <button type="button" class="split-main">保存する</button>
  <button type="button" class="split-arrow"
          aria-haspopup="menu" aria-expanded="false"
          aria-label="その他の保存オプション">
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  </button>
</div>

<style>
  .split-btn { display: inline-flex; }
  .split-main, .split-arrow {
    border: none;
    background: #2563eb;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 16px;
  }
  .split-main { border-radius: 10px 0 0 10px; }
  .split-arrow {
    border-radius: 0 10px 10px 0;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px 10px;
    display: inline-flex;
    align-items: center;
  }
  .split-main:hover, .split-arrow:hover { background: #1d4ed8; }
</style>`,
    tailwind: `<div class="inline-flex" role="group" aria-label="保存オプション">
  <button
    type="button"
    class="rounded-l-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold
           text-white transition hover:bg-blue-700
           focus-visible:z-10 focus-visible:outline focus-visible:outline-2
           focus-visible:outline-offset-2 focus-visible:outline-blue-600"
  >
    保存する
  </button>
  <button
    type="button"
    aria-haspopup="menu"
    aria-expanded="false"
    aria-label="その他の保存オプション"
    class="rounded-r-xl border-l border-white/30 bg-blue-600 px-2.5
           text-white transition hover:bg-blue-700
           focus-visible:z-10 focus-visible:outline focus-visible:outline-2
           focus-visible:outline-offset-2 focus-visible:outline-blue-600"
  >
    <svg aria-hidden="true" class="size-4" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  </button>
</div>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Option = { label: string; onSelect: () => void };

export function SplitButton({
  label,
  onMain,
  options,
}: {
  label: string;
  onMain: () => void;
  options: Option[];
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative inline-flex" role="group" aria-label={label}>
      <button
        type="button"
        onClick={onMain}
        className="rounded-l-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold
                   text-white transition hover:bg-blue-700"
      >
        {label}
      </button>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="その他のオプション"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className="rounded-r-xl border-l border-white/30 bg-blue-600 px-2.5
                   text-white transition hover:bg-blue-700"
      >
        <ChevronDown aria-hidden className="size-4" />
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 top-full z-10 mt-2 w-56 rounded-xl
                     border border-gray-200 bg-white p-1 shadow-lg"
        >
          {options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              role="menuitem"
              onClick={() => {
                opt.onSelect();
                setOpen(false);
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm
                         hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add button dropdown-menu
// shadcn/uiに専用コンポーネントはないため、Button + DropdownMenuで構成します
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function SplitButtonDemo() {
  return (
    <div className="inline-flex" role="group" aria-label="保存オプション">
      <Button className="rounded-r-none">保存する</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-l-none border-l border-white/30 px-2"
            aria-label="その他の保存オプション"
          >
            <ChevronDown aria-hidden />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>名前を付けて保存</DropdownMenuItem>
          <DropdownMenuItem>テンプレートとして保存</DropdownMenuItem>
          <DropdownMenuItem>下書きとして保存</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}`,
  },
  related: ["button", "dropdown-menu", "icon-button", "context-menu"],
  views: 5600,
  favorites: 230,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-indigo-500/15 via-blue-500/10 to-cyan-500/15",
  difficulty: 2,
  updatedAt: "2026-04-26",
};
