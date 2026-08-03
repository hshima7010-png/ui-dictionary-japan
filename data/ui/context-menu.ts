import type { UIItem } from "@/types/ui";

export const contextMenu: UIItem = {
  slug: "context-menu",
  name: "Context Menu",
  nameJa: "コンテキストメニュー",
  description:
    "右クリックや長押しで表示される文脈依存のメニュー。対象への操作を素早く呼び出せる。",
  category: "navigation",
  tags: ["右クリック", "メニュー", "長押し", "ショートカット", "デスクトップUI"],
  aliases: [
    "右クリックで出るメニュー",
    "長押しすると出てくるメニュー",
    "右クリメニュー",
    "ファイルを右クリックしたときのやつ",
    "その場で操作を選べるメニュー",
    "サブメニューが横に伸びるメニュー",
  ],
  whatIs: [
    "コンテキストメニュー（Context Menu）は、要素の右クリック（モバイルでは長押し）によって、その場に表示されるメニューです。「コンテキスト（文脈）」の名の通り、クリックした対象に応じて内容が変わるのが最大の特徴で、ファイルなら「名前の変更」「削除」、テキストなら「コピー」「翻訳」といった、その対象に意味のある操作だけが並びます。",
    "デスクトップOSで長年使われてきた操作体系をWebに持ち込んだもので、FigmaやNotion、Google Driveのような「アプリらしい」Webサービスでは標準装備になりつつあります。ツールバーに全ボタンを並べる代わりに、操作を文脈の中へ隠すことで、画面をシンプルに保ちながら上級者の操作効率を高められます。",
    "実装面では、ブラウザ標準のcontextmenuイベントを乗っ取ってカスタムメニューを表示します。画面端でのはみ出し回避（衝突判定）、キーボード操作、サブメニューの開閉など考慮点が多く、Radix UIなどのヘッドレスライブラリを土台にするのが現実的です。",
  ],
  features: [
    "右クリック（contextmenuイベント）またはモバイルの長押しで、カーソル位置に表示される",
    "クリックした対象（ファイル・行・テキストなど）によってメニュー項目が動的に変わる",
    "サブメニュー、区切り線、チェック項目、キーボードショートカット表示などの構成要素を持つ",
    "画面端では表示位置を自動反転し、メニューがはみ出さないように調整される",
    "Escキーやメニュー外クリックで閉じ、破壊的操作（削除など）は赤系の色で区別されることが多い",
  ],
  merits: [
    "対象に関係する操作だけが表示されるため、目的の操作に最短で到達できる",
    "ツールバーやボタン群を減らせて、画面のノイズを大幅に削減できる",
    "デスクトップOSと同じ操作体系なので、パワーユーザーには説明不要で伝わる",
    "一覧画面の各行に操作ボタンを並べる必要がなくなり、データテーブルと相性が良い",
    "ショートカットキーの表記を添えることで、キーボード操作への学習動線にもなる",
  ],
  demerits: [
    "右クリックで開けること自体に気づけない「発見可能性」の低さが最大の弱点",
    "ブラウザ標準の右クリックメニュー（画像保存・翻訳など）を奪うことへの不満が生じ得る",
    "モバイルの長押しはOSのテキスト選択やプレビューと競合しやすく、体験設計が難しい",
    "タッチデバイス・キーボード・スクリーンリーダーそれぞれへの対応コストが高い",
    "項目が増えすぎると結局探すのが大変になり、文脈依存の利点が薄れる",
  ],
  bestPractices: [
    "コンテキストメニュー「でしか」実行できない操作を作らない。必ずボタンやメニューなど別経路も用意する",
    "項目は多くても10個程度に抑え、区切り線で「編集系」「表示系」「破壊系」をグループ化する",
    "削除などの破壊的操作は末尾に置き、赤系の色と確認ダイアログで誤操作を防ぐ",
    "テキスト入力欄やリンク上では標準の右クリックメニューを奪わない（乗っ取る範囲を限定する）",
    "よく使う操作にはショートカットキーを添えて表示し、学習を促す",
    "サブメニューは1階層までにとどめ、ホバー移動時に閉じにくい斜め移動の猶予（safe triangle）を確保する",
  ],
  useCases: [
    "Figma — レイヤーやオブジェクトの右クリックでコピー・ロック・グループ化などを提供",
    "Google Drive — ファイル右クリックで共有・名前変更・ダウンロードなどを集約",
    "Notion — ブロックの右クリック／長押しで複製・移動・色変更を提供",
    "GitHub — ファイルツリーの各行にコンテキストメニューでコピー系操作を提供",
    "Slack — メッセージの右クリックでリアクション・スレッド返信・リンクコピー",
  ],
  accessibility: [
    "メニューにはrole=\"menu\"、各項目にはrole=\"menuitem\"を付与し、矢印キーで項目間を移動できるようにする",
    "Shift+F10またはコンテキストメニューキーでも開けるようにし、マウス専用にしない",
    "開いたら最初の項目へフォーカスを移し、Escで閉じたらトリガー元へフォーカスを戻す",
    "無効な項目はDOMから消すのではなくaria-disabled=\"true\"で示すと、存在自体は伝わる",
    "破壊的操作は色だけで区別せず、アイコンや「削除」という明確なラベルを併用する",
  ],
  figma: [
    "メニュー本体はAuto Layout（縦、padding 6〜8、gap 2）で組み、角丸12px＋ドロップシャドウでレイヤー感を出す",
    "メニュー項目をComponent化し、hover / disabled / destructiveのVariantsを用意する",
    "ショートカット表記は項目の右端にSpace Between配置し、テキスト色を弱め（gray-400相当）にする",
    "サブメニュー付き項目には右向きシェブロンを配置し、プロトタイプではOpen Overlayで表現する",
    "区切り線は高さ1pxのRectangleを左右いっぱいに伸ばし、上下にpaddingを取る",
  ],
  code: {
    html: `<div id="target" class="target">ここを右クリック</div>

<ul id="menu" class="context-menu" role="menu" hidden>
  <li role="menuitem" tabindex="-1">コピー</li>
  <li role="menuitem" tabindex="-1">複製</li>
  <li class="separator" role="separator"></li>
  <li role="menuitem" tabindex="-1" class="danger">削除</li>
</ul>

<style>
  .context-menu {
    position: fixed;
    min-width: 180px;
    margin: 0;
    padding: 6px;
    list-style: none;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgb(0 0 0 / 0.12);
  }
  .context-menu [role="menuitem"] {
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
  }
  .context-menu [role="menuitem"]:hover {
    background: #f3f4f6;
  }
  .context-menu .danger { color: #dc2626; }
  .context-menu .separator {
    height: 1px;
    margin: 6px 4px;
    background: #e5e7eb;
  }
</style>

<script>
  const target = document.getElementById("target");
  const menu = document.getElementById("menu");

  target.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    menu.hidden = false;
    // 画面端でのはみ出しを防ぐ
    const x = Math.min(e.clientX, innerWidth - menu.offsetWidth - 8);
    const y = Math.min(e.clientY, innerHeight - menu.offsetHeight - 8);
    menu.style.left = x + "px";
    menu.style.top = y + "px";
    menu.querySelector('[role="menuitem"]').focus();
  });

  document.addEventListener("click", () => (menu.hidden = true));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") menu.hidden = true;
  });
</script>`,
    tailwind: `<!-- 表示位置はJSでstyle.left / style.topを設定する -->
<ul
  role="menu"
  class="fixed z-50 min-w-45 rounded-xl border border-gray-200 bg-white
         p-1.5 shadow-xl shadow-black/10"
>
  <li
    role="menuitem"
    tabindex="-1"
    class="flex cursor-pointer items-center justify-between rounded-lg
           px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100
           focus:outline-none"
  >
    コピー
    <kbd class="text-xs text-gray-400">⌘C</kbd>
  </li>
  <li
    role="menuitem"
    tabindex="-1"
    class="cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
  >
    複製
  </li>
  <li role="separator" class="mx-1 my-1.5 h-px bg-gray-200"></li>
  <li
    role="menuitem"
    tabindex="-1"
    class="cursor-pointer rounded-lg px-3 py-2 text-sm text-red-600
           hover:bg-red-50"
  >
    削除
  </li>
</ul>`,
    react: `"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type MenuItem = {
  label: string;
  shortcut?: string;
  destructive?: boolean;
  onSelect: () => void;
};

export function ContextMenuArea({
  items,
  children,
}: {
  items: MenuItem[];
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => setPos(null), []);

  useEffect(() => {
    if (!pos) return;
    menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("click", close);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("click", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [pos, close]);

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setPos({
          x: Math.min(e.clientX, window.innerWidth - 200),
          y: Math.min(e.clientY, window.innerHeight - 160),
        });
      }}
    >
      {children}
      {pos && (
        <ul
          ref={menuRef}
          role="menu"
          aria-label="コンテキストメニュー"
          style={{ left: pos.x, top: pos.y }}
          className="fixed z-50 min-w-45 rounded-xl border border-gray-200
                     bg-white p-1.5 shadow-xl shadow-black/10"
        >
          {items.map((item) => (
            <li key={item.label} role="none">
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  item.onSelect();
                  close();
                }}
                className={\`flex w-full items-center justify-between rounded-lg
                            px-3 py-2 text-left text-sm focus:outline-none
                            \${
                              item.destructive
                                ? "text-red-600 hover:bg-red-50 focus:bg-red-50"
                                : "hover:bg-gray-100 focus:bg-gray-100"
                            }\`}
              >
                {item.label}
                {item.shortcut && (
                  <kbd className="text-xs text-gray-400">{item.shortcut}</kbd>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add context-menu
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function FileContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex h-36 w-full items-center justify-center rounded-xl
                   border border-dashed text-sm text-muted-foreground"
      >
        ここを右クリック
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem>
          コピー
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>複製</ContextMenuItem>
        <ContextMenuItem>名前を変更</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">削除</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
  },
  related: ["dropdown-menu", "popover", "command-palette", "data-table"],
  views: 19600,
  favorites: 820,
  collections: ["admin-ui", "saas-ui"],
  gradient: "from-orange-500/15 via-amber-500/10 to-yellow-500/15",
  difficulty: 2,
  updatedAt: "2026-05-14",
};
