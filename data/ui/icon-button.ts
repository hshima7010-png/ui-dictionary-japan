import type { UIItem } from "@/types/ui";

export const iconButton: UIItem = {
  slug: "icon-button",
  name: "Icon Button",
  nameJa: "アイコンボタン",
  description:
    "アイコンだけで構成されたコンパクトなボタン。ツールバーやヘッダーの省スペース化に必須。",
  category: "buttons",
  tags: ["アイコン", "ツールバー", "省スペース", "アクション"],
  aliases: [
    "絵だけのボタン",
    "ゴミ箱マークの押すやつ",
    "文字がないボタン",
    "ハートマークを押すやつ",
    "設定の歯車ボタン",
    "三点リーダーのボタン",
  ],
  whatIs: [
    "アイコンボタン（Icon Button）は、テキストラベルを持たず、アイコン（図記号）のみでアクションを表現するボタンです。名前はそのまま「アイコン＋ボタン」の組み合わせで、絵文字的な記号（icon）が操作の意味を担うことに由来します。ゴミ箱＝削除、鉛筆＝編集、ハート＝お気に入りといった共通言語の上に成り立つUIです。",
    "テキストボタンに比べて占有面積が圧倒的に小さいため、ツールバー、テーブルの行アクション、モバイルヘッダーなど、スペースが限られた場所で多用されます。ホバー時に背景が丸く浮かび上がるスタイルは、Material Designの普及とともに事実上の標準になりました。",
    "一方で「アイコンの意味が伝わるか」は常に議論の的です。Nielsen Norman Groupなどの調査でも、普遍的に理解されるアイコンはごく少数とされており、ツールチップやaria-labelによる補完がアイコンボタン設計の必須条件とされています。",
  ],
  features: [
    "正方形（多くは32〜48px）のコンパクトなヒット領域を持つ",
    "ホバー時に円形・角丸の背景色が現れるスタイルが一般的",
    "ghost / outline / filled などテキストボタンと同じバリアント体系を持てる",
    "ツールチップと組み合わせて意味を補完することが多い",
    "トグル型（お気に入りのオン／オフなど）としても使われ、aria-pressedで状態を表す",
  ],
  merits: [
    "省スペースで、ツールバーに多数のアクションを並べられる",
    "言語に依存しないため、多言語対応時にレイアウトが崩れない",
    "視覚的ノイズが少なく、洗練された画面密度を実現できる",
    "ゴミ箱・鉛筆・検索など定番アイコンは瞬時に認識される",
    "モバイルのヘッダーやカード上のアクションと相性が良い",
  ],
  demerits: [
    "意味が自明でないアイコンはユーザーに伝わらず、機能が使われなくなる",
    "aria-labelを忘れるとスクリーンリーダーには「ボタン」としか読まれない",
    "見た目を小さくしすぎるとタップ領域不足で誤操作が増える",
    "同じアイコンでもプロダクトによって意味が異なる場合があり混乱を招く",
    "重要なCTAには不向きで、テキストボタンより注目度・クリック率が下がる",
  ],
  bestPractices: [
    "アイコンの見た目は20〜24pxでも、ヒット領域は最低44×44pxを確保する",
    "必ずaria-labelを付け、デスクトップではツールチップでラベルを補完する",
    "破壊的アクション（削除）はホバー時に赤系の色でリスクを予告する",
    "意味が伝わりにくい機能はアイコン＋テキストのボタンに切り替える勇気を持つ",
    "トグル型はaria-pressedと塗り／線の切り替えで状態を二重に表現する",
    "同一ツールバー内でアイコンのスタイル（線の太さ・角丸）を統一する",
  ],
  useCases: [
    "Gmailのメール一覧 — ホバーで現れるアーカイブ・削除・スヌーズのアイコン群",
    "X（旧Twitter）の投稿 — いいね・リポスト・共有のトグル型アイコンボタン",
    "Figmaのツールバー — 選択・フレーム・ペンなどツール切り替えのアイコン群",
    "iOSのナビゲーションバー — 戻る・共有・その他メニューのアイコン",
    "管理画面のデータテーブル — 行末の編集・複製・削除アクション",
  ],
  accessibility: [
    "aria-labelで「削除」「編集」など具体的な操作名を必ず指定する",
    "アイコンのSVGにはaria-hidden=\"true\"を付け、二重読み上げを防ぐ",
    "トグル型はaria-pressed（またはaria-label自体の切り替え）で状態を伝える",
    "focus-visibleでフォーカスリングを表示し、キーボード操作者を迷わせない",
    "ツールチップはホバーだけでなくフォーカス時にも表示されるようにする",
  ],
  figma: [
    "44×44pxのフレームに24pxアイコンを中央配置し、Auto Layoutで組む",
    "アイコンはInstance Swap Propertyにして、1コンポーネントで全アイコンに対応させる",
    "hover / pressed / disabled のVariantを作り、背景色トークンだけを差し替える",
    "トグル型は「selected: boolean」プロパティで塗りアイコンと線アイコンを切り替える",
    "ツールチップ付きの状態もプロトタイプ（Mouse Enter → Open Overlay）で再現しておく",
  ],
  code: {
    html: `<button type="button" class="icon-btn" aria-label="削除">
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  </svg>
</button>

<style>
  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 9999px;
    background: transparent;
    color: #6b7280;
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s;
  }
  .icon-btn:hover {
    background: #fee2e2;
    color: #dc2626;
  }
  .icon-btn:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
</style>`,
    tailwind: `<button
  type="button"
  aria-label="削除"
  class="inline-flex size-11 items-center justify-center rounded-full
         text-gray-500 transition hover:bg-red-50 hover:text-red-600
         focus-visible:outline focus-visible:outline-2
         focus-visible:outline-offset-2 focus-visible:outline-blue-600"
>
  <svg aria-hidden="true" class="size-5" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  </svg>
</button>`,
    react: `"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export function FavoriteButton({ label = "お気に入りに追加" }: { label?: string }) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={pressed}
      aria-label={label}
      onClick={() => setPressed((p) => !p)}
      className="inline-flex size-11 items-center justify-center rounded-full
                 text-gray-500 transition hover:bg-pink-50 hover:text-pink-600
                 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <Heart
        aria-hidden
        className={\`size-5 transition \${
          pressed ? "fill-pink-500 text-pink-500" : ""
        }\`}
      />
    </button>
  );
}`,
    shadcn: `// npx shadcn@latest add button tooltip
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash2 } from "lucide-react";

export function IconButtonDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="削除">
          <Trash2 aria-hidden />
        </Button>
      </TooltipTrigger>
      <TooltipContent>削除</TooltipContent>
    </Tooltip>
  );
}`,
  },
  related: ["button", "floating-action-button", "tooltip", "navbar"],
  views: 18400,
  favorites: 790,
  collections: ["saas-ui", "mobile-ui", "admin-ui"],
  gradient: "from-sky-500/15 via-blue-500/10 to-indigo-500/15",
  difficulty: 1,
  updatedAt: "2026-06-14",
};
