import type { UIItem } from "@/types/ui";

export const popover: UIItem = {
  slug: "popover",
  name: "Popover",
  nameJa: "ポップオーバー",
  description:
    "トリガー要素の近くに浮かび上がる小型パネル。補足情報や軽い操作の表示に最適。",
  category: "dialogs",
  tags: ["浮遊パネル", "オーバーレイ", "補足情報", "anchor"],
  aliases: [
    "クリックすると横に出てくる小窓",
    "ボタンの近くにふわっと出るパネル",
    "吹き出しみたいな小さいウィンドウ",
    "アイコンを押すと出てくる説明ボックス",
    "ツールチップより大きい浮くやつ",
    "矢印付きの小さなパネル",
  ],
  whatIs: [
    "ポップオーバー（Popover）は、ボタンやアイコンなどのトリガー要素をクリック／タップすると、その要素の近く（アンカー位置）に浮かび上がる小型のパネルです。「pop over（ひょいと上に現れる）」という英語表現に由来し、iOSのUIPopoverPresentationControllerによって名称が広く定着しました。トリガーとの位置関係を保ったまま表示される点が、画面中央に出るモーダルとの大きな違いです。",
    "ツールチップがホバーで表示される「読むだけ」の補足であるのに対し、ポップオーバーはクリックで開き、内部にリンク・フォーム・ボタンなどのインタラクティブな要素を含められます。日付選択のカレンダー、カラーピッカー、共有メニュー、ユーザーカードのプレビューなど、「モーダルを出すほどではないが、ツールチップでは足りない」中間領域を担うUIです。",
    "2024年にHTML標準のPopover API（popover属性とpopovertarget属性）が主要ブラウザに揃い、JavaScriptなしでも最前面レイヤー（top layer）への表示や外側クリックでの自動クローズが実現できるようになりました。CSS Anchor Positioningとの組み合わせにより、ライブラリに頼らない実装が現実的になった、いま最も進化が著しいUIパターンのひとつです。",
  ],
  features: [
    "トリガー要素のそばにアンカーされて表示され、位置関係で文脈が伝わる",
    "外側クリックまたはEscキーで閉じる「light dismiss」挙動が基本",
    "内部にボタン・リンク・フォームなどのインタラクティブ要素を配置できる",
    "画面端では表示位置が自動反転（フリップ）する実装が一般的",
    "HTML標準のPopover APIならJavaScriptなしでtop layer表示が可能",
    "矢印（キャレット）でトリガーとの結びつきを視覚的に示すことが多い",
  ],
  merits: [
    "ページ遷移やモーダル表示なしに、その場で補足情報や操作を提供できる",
    "トリガーの近くに出るため、視線移動が最小限で済む",
    "モーダルと違い背景を暗転させないので、作業の流れを中断しにくい",
    "ツールチップと違いタップで開けるため、タッチデバイスでも確実に操作できる",
    "Popover APIの登場でアクセシブルな実装のハードルが大きく下がった",
  ],
  demerits: [
    "小さな画面では表示領域が足りず、コンテンツが窮屈になりやすい",
    "位置計算（衝突検知・反転・スクロール追従）の自前実装は難易度が高い",
    "開いていることに気づかれにくく、閉じ方が分からないユーザーもいる",
    "ネストしたポップオーバーはフォーカス管理が複雑になり、事故が起きやすい",
    "ホバー起動にするとツールチップと挙動が混ざり、タッチ環境で破綻する",
  ],
  bestPractices: [
    "起動はクリック／タップに統一する。ホバー起動は読むだけのツールチップに譲る",
    "外側クリックとEscキーの両方で閉じられるようにし、閉じたらトリガーへフォーカスを戻す",
    "コンテンツは1トピックに絞る。スクロールが必要になる量ならモーダルやドロワーを検討する",
    "画面端での自動反転を必ず確認する。Floating UIなどの実績あるライブラリか、CSS Anchor Positioningを使う",
    "モバイルではポップオーバーの代わりにボトムシートへ切り替えるレスポンシブ戦略も有効",
    "破壊的操作の確認には使わない。誤タップで閉じてしまうため、確認はアラートダイアログで行う",
  ],
  useCases: [
    "GitHub — ユーザー名にホバー/クリックで表示されるプロフィールカード（hovercard）",
    "Notion — テキスト選択時に現れる書式設定メニューや共有ポップオーバー",
    "Google カレンダー — 予定をクリックすると出る詳細プレビューパネル",
    "Stripe Dashboard — 期間選択ボタンから開く日付レンジピッカー",
    "X（旧Twitter） — 共有アイコンから開くリポスト／引用メニュー",
  ],
  accessibility: [
    "トリガーには aria-haspopup=\"dialog\" と aria-expanded を付与し、開閉状態を支援技術へ伝える",
    "パネルには role=\"dialog\" と aria-labelledby（または aria-label）を設定する",
    "開いたらパネル内へフォーカスを移動し、閉じたらトリガーへフォーカスを戻す",
    "Escキーで閉じられることを保証する（Popover APIのauto状態なら標準対応）",
    "フォーカス可能要素を含まない表示専用の場合は、role=\"tooltip\" 的な扱いとの混同に注意し設計を分ける",
    "スクリーンリーダーの読み上げ順を考慮し、DOM上はトリガーの直後にパネルを配置するのが安全",
  ],
  figma: [
    "パネルをAuto Layoutで組み、矢印（キャレット）は別レイヤーにしてVariantsで上下左右の向きを切り替える",
    "Component Propertyで「placement: top / bottom / left / right」を定義すると使い回しやすい",
    "プロトタイプは「Open overlay」ではなくClickで「Change to」を使うと、トリガー近傍への表示位置を再現しやすい",
    "shadow（Drop shadow: Y=8, Blur=24, 8%程度）とborderを併用すると背景から自然に浮く",
    "画面端に配置したインスタンスで反転パターンのモックも作り、開発者に衝突時の挙動を伝える",
  ],
  code: {
    html: `<!-- HTML標準のPopover API（JavaScript不要） -->
<button popovertarget="share-popover" class="trigger">共有</button>

<div id="share-popover" popover class="popover">
  <p class="popover-title">このページを共有</p>
  <button type="button">リンクをコピー</button>
  <button type="button">Xでポスト</button>
</div>

<style>
  .popover {
    margin: 8px auto;
    padding: 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  .popover-title {
    font-weight: 600;
    margin-bottom: 8px;
  }
  /* 開閉アニメーション */
  .popover {
    opacity: 0;
    transition: opacity 0.15s, display 0.15s allow-discrete;
  }
  .popover:popover-open {
    opacity: 1;
  }
</style>`,
    tailwind: `<div class="relative inline-block">
  <button
    popovertarget="tw-popover"
    class="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white
           hover:bg-gray-700"
  >
    共有
  </button>

  <div
    id="tw-popover"
    popover
    class="w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-xl
           open:opacity-100"
  >
    <p class="mb-2 text-sm font-semibold text-gray-900">このページを共有</p>
    <div class="flex flex-col gap-1">
      <button class="rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50">
        リンクをコピー
      </button>
      <button class="rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50">
        Xでポスト
      </button>
    </div>
  </div>
</div>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";

export function Popover({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

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
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium
                   text-white hover:bg-gray-700"
      >
        {label}
      </button>
      {open && (
        <div
          role="dialog"
          id={panelId}
          aria-label={label}
          className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl
                     border border-gray-200 bg-white p-4 shadow-xl"
        >
          {children}
        </div>
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add popover
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function SharePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">共有</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <p className="mb-2 text-sm font-semibold">このページを共有</p>
        <div className="flex flex-col gap-1">
          <Button variant="ghost" className="justify-start">
            リンクをコピー
          </Button>
          <Button variant="ghost" className="justify-start">
            Xでポスト
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
  },
  related: ["tooltip", "dropdown-menu", "modal", "context-menu"],
  views: 54600,
  favorites: 2180,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-rose-500/15 via-red-500/10 to-pink-500/15",
  difficulty: 2,
  updatedAt: "2026-07-21",
};
