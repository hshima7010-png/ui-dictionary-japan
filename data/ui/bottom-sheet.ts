import type { UIItem } from "@/types/ui";

export const bottomSheet: UIItem = {
  slug: "bottom-sheet",
  name: "Bottom Sheet",
  nameJa: "ボトムシート",
  description:
    "画面下部からスライドして現れるパネル。モバイルで文脈を保ったまま補助操作を提示できる。",
  category: "drawer",
  tags: ["モバイル", "オーバーレイ", "スワイプ", "パネル"],
  aliases: [
    "下から出てくるメニュー",
    "下からスライドしてくるパネル",
    "スワイプで閉じるシート",
    "スマホで下ににゅっと出るやつ",
    "画面下半分に被さるウィンドウ",
    "引っ張って閉じるモーダル",
  ],
  whatIs: [
    "ボトムシート（Bottom Sheet）は、画面の下端からスライドして現れるパネル型のUIコンポーネントです。「シート（sheet）」は紙の一枚を意味し、画面の上に薄い紙が一枚重なるように下（bottom）から差し込まれるイメージから名付けられました。Material Designで正式にパターン化され、iOSでも「シート」として標準搭載されたことで、モバイルUIの定番となっています。",
    "背景のコンテンツを完全に隠すモーダルと異なり、元の画面の一部を見せたまま補助的な情報や操作を提示できるのが特徴です。地図アプリの店舗詳細、ECアプリのサイズ選択、シェアメニューなど「元の文脈を保ちながら次の操作をさせたい」場面で広く使われます。",
    "操作を遮断する「モーダル型」と、背景を操作できる「ノンモーダル型（永続型）」の2種類があり、多くの実装ではドラッグハンドルを掴んで高さを変えたり、下にスワイプして閉じたりできます。親指が届きやすい画面下部に操作を集約できるため、片手操作との相性が非常に良いパターンです。",
  ],
  features: [
    "画面下端からスライドインし、下スワイプやオーバーレイのタップで閉じられる",
    "半分表示・全画面表示など、複数のスナップポイント（高さ）を持てる",
    "上部にドラッグハンドル（グラバー）を表示し、掴んで動かせることを示唆する",
    "背景を暗くするモーダル型と、背景を操作できるノンモーダル型がある",
    "親指の可動域（サムゾーン）に操作要素を集約できる",
    "iOS・Androidの両OSでネイティブに標準化されたパターンである",
  ],
  merits: [
    "元の画面が背後に見えるため、ユーザーが文脈を見失いにくい",
    "画面下部に配置されるため片手・親指での操作がしやすい",
    "スナップポイントによって情報量を段階的に開示できる",
    "スワイプで閉じる操作が直感的で、モバイルユーザーの学習コストが低い",
    "画面遷移を挟まずに補助タスクを完了でき、離脱を減らせる",
  ],
  demerits: [
    "デスクトップの大画面では横長になりすぎて不格好になりやすい（ダイアログへの出し分けが必要）",
    "スナップポイントやドラッグ操作の実装が複雑で、自前実装のコストが高い",
    "シート内に縦スクロールがあると、閉じるスワイプと競合しやすい",
    "画面の下部を覆うため、背後の重要な情報やボタンを隠してしまうことがある",
    "多段のシートを重ねると階層が分かりにくくなる",
  ],
  bestPractices: [
    "上部にドラッグハンドルを表示し、スワイプで操作できることを視覚的に伝える",
    "スワイプだけに頼らず、閉じるボタンやオーバーレイタップでも閉じられるようにする",
    "デスクトップではダイアログ、モバイルではボトムシートと画面幅で出し分ける",
    "シート内のスクロールとシートを閉じるジェスチャーが競合しないよう、スクロール位置が先頭のときだけ閉じられるようにする",
    "重要な決定（削除の確認など）にはノンモーダル型ではなくモーダル型を使う",
    "開いている間は背景のスクロールをロックし、iOSのセーフエリア（ホームバー）分の余白を確保する",
  ],
  useCases: [
    "Googleマップ — 店舗をタップすると詳細情報がボトムシートで表示され、上にドラッグすると全画面に展開",
    "Instagram — シェアメニューやコメント一覧をボトムシートで表示",
    "Uber / タクシーアプリ — 地図を見せたまま配車オプションを下部シートで選択",
    "Apple マップ・株価アプリ — ノンモーダルなシートを常駐させ、検索や詳細を段階的に表示",
    "ECアプリのカート追加 — サイズ・カラー選択をボトムシートで完結させ、商品ページから離脱させない",
  ],
  accessibility: [
    "モーダル型では role=\"dialog\" と aria-modal=\"true\" を付与し、背景コンテンツへのフォーカス移動を防ぐ",
    "開いたときにシート内の先頭要素へフォーカスを移し、閉じたら元のトリガーへ戻す",
    "Escキーで閉じられるようにする（外部キーボード接続時のため、モバイルでも重要）",
    "スワイプ操作ができないユーザーのために、閉じるボタンを必ず視覚的に配置する",
    "aria-labelledby でシートのタイトルと関連付け、スクリーンリーダーに目的を伝える",
    "prefers-reduced-motion が有効な場合はスライドアニメーションを簡略化する",
  ],
  figma: [
    "デバイスフレームの上にシートをオーバーレイとして重ね、Y座標のVariantsで「半開き / 全開」の状態を管理する",
    "プロトタイプのOpen overlay設定で「Bottom sheet」の位置指定＋背景を40%程度の黒でスクリムにする",
    "Smart Animate（Ease Out, 300ms）でY方向の移動を繋ぐと、実機に近いスライド感が再現できる",
    "ドラッグハンドルは幅32〜48px・高さ4px・角丸のバーをコンポーネント化して使い回す",
    "iOSのホームインジケータ分（34px）の下余白をAuto Layoutのpaddingで確保しておく",
  ],
  code: {
    html: `<button id="open-sheet" class="open-btn">シートを開く</button>

<div id="overlay" class="overlay" hidden></div>
<div
  id="sheet"
  class="sheet"
  role="dialog"
  aria-modal="true"
  aria-labelledby="sheet-title"
  hidden
>
  <div class="handle" aria-hidden="true"></div>
  <h2 id="sheet-title">配送方法を選択</h2>
  <p>通常配送（無料）または お急ぎ便（+350円）を選べます。</p>
  <button id="close-sheet" class="close-btn">閉じる</button>
</div>

<style>
  .overlay {
    position: fixed; inset: 0;
    background: rgb(0 0 0 / 0.4);
  }
  .sheet {
    position: fixed; left: 0; right: 0; bottom: 0;
    background: #fff;
    border-radius: 20px 20px 0 0;
    padding: 12px 20px calc(20px + env(safe-area-inset-bottom));
    box-shadow: 0 -8px 30px rgb(0 0 0 / 0.15);
    animation: slide-up 0.3s ease-out;
  }
  .handle {
    width: 40px; height: 4px;
    background: #d1d5db; border-radius: 9999px;
    margin: 0 auto 12px;
  }
  @keyframes slide-up {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
</style>

<script>
  const sheet = document.getElementById("sheet");
  const overlay = document.getElementById("overlay");
  const toggle = (open) => {
    sheet.hidden = !open;
    overlay.hidden = !open;
  };
  document.getElementById("open-sheet").addEventListener("click", () => toggle(true));
  document.getElementById("close-sheet").addEventListener("click", () => toggle(false));
  overlay.addEventListener("click", () => toggle(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggle(false);
  });
</script>`,
    tailwind: `<!-- オーバーレイ -->
<div class="fixed inset-0 z-40 bg-black/40" aria-hidden="true"></div>

<!-- ボトムシート -->
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="sheet-title"
  class="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-white
         pb-[calc(1.25rem+env(safe-area-inset-bottom))] shadow-2xl
         animate-in slide-in-from-bottom duration-300"
>
  <!-- ドラッグハンドル -->
  <div class="mx-auto mt-3 h-1 w-10 rounded-full bg-gray-300"></div>

  <div class="space-y-4 px-5 pt-4">
    <h2 id="sheet-title" class="text-lg font-bold">配送方法を選択</h2>
    <ul class="space-y-2">
      <li class="rounded-xl border border-gray-200 p-4">通常配送（無料）</li>
      <li class="rounded-xl border border-gray-200 p-4">お急ぎ便（+350円）</li>
    </ul>
    <button
      class="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white
             hover:bg-gray-800"
    >
      決定する
    </button>
  </div>
</div>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";

export function BottomSheet({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const sheetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    sheetRef.current?.focus();
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
        className="rounded-xl bg-gray-900 px-4 py-2 text-white"
      >
        シートを開く
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-white
                       pb-[calc(1.25rem+env(safe-area-inset-bottom))]
                       shadow-2xl outline-none"
          >
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-gray-300" />
            <div className="px-5 pt-4">
              <div className="flex items-center justify-between">
                <h2 id={titleId} className="text-lg font-bold">
                  {title}
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="シートを閉じる"
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
              <div className="mt-3">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}`,
    shadcn: `// npx shadcn@latest add drawer
// shadcn/uiのDrawerはVaul製で、モバイルのボトムシートとして動作します
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function ShippingSheet() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">配送方法を選ぶ</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>配送方法を選択</DrawerTitle>
          <DrawerDescription>
            お届け先とご希望日時に合わせてお選びください。
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-2 px-4">
          <div className="rounded-xl border p-4">通常配送（無料）</div>
          <div className="rounded-xl border p-4">お急ぎ便（+350円）</div>
        </div>
        <DrawerFooter>
          <Button>決定する</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
  },
  related: ["drawer", "modal", "dropdown-menu", "floating-action-button"],
  views: 21400,
  favorites: 890,
  collections: ["mobile-ui", "apple-ui", "ec-ui"],
  gradient: "from-sky-500/15 via-cyan-500/10 to-teal-500/15",
  difficulty: 2,
  updatedAt: "2026-06-12",
};
