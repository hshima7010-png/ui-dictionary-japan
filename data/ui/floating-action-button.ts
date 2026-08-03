import type { UIItem } from "@/types/ui";

export const floatingActionButton: UIItem = {
  slug: "floating-action-button",
  name: "Floating Action Button",
  nameJa: "フローティングアクションボタン",
  description:
    "画面右下に浮かぶ円形ボタン。その画面で最も重要なアクションを常に手の届く場所に置く。",
  category: "buttons",
  tags: ["FAB", "モバイル", "主要アクション", "Material Design"],
  aliases: [
    "右下に浮いてる丸いボタン",
    "画面の上に浮かんでいるプラスボタン",
    "スクロールしてもついてくるボタン",
    "新規作成の丸ボタン",
    "FABって呼ばれるやつ",
    "常に画面の隅にあるアクションボタン",
  ],
  whatIs: [
    "フローティングアクションボタン（Floating Action Button、略してFAB）は、コンテンツの上に浮かぶ（floating）ように配置された円形のボタンで、その画面における最も重要なアクション（action）を表します。2014年にGoogleがMaterial Designの中核コンポーネントとして発表したことで生まれた、比較的新しいパターンです。",
    "影（エレベーション）によって「他のUIよりも一段高い層に浮いている」ことを表現し、スクロールしても画面の同じ位置（多くは右下）に留まり続けます。Gmailの「作成」、Googleマップの「経路」ボタンのように、アプリの主目的となる1つのアクションへ最短でアクセスさせるのが役割です。",
    "タップすると複数のアクションが展開する「スピードダイヤル」型の派生や、スクロールに応じてラベルが伸縮する「拡張FAB（Extended FAB）」もあります。Material Design由来のためAndroidアプリで特に一般的ですが、Webやモバイルサイトでも「お問い合わせ」「チャット」ボタンなどとして広く応用されています。",
  ],
  features: [
    "画面右下などの固定位置に浮かび、スクロールしても常に表示され続ける",
    "円形＋アイコンのシンプルな形状と影で、他の要素より高い層にあることを表現する",
    "1画面につき1つだけ配置し、最重要アクションを示す",
    "アイコンとテキストラベルを併記する拡張FAB（Extended FAB）バリアントがある",
    "タップで複数のサブアクションが展開するスピードダイヤル型に発展できる",
    "スクロール方向に応じて隠す・縮めるなどの動的な振る舞いを付けられる",
  ],
  merits: [
    "最重要アクションが常に画面上にあり、ユーザーが迷わない",
    "親指が届きやすい右下配置で、モバイルの片手操作に最適",
    "画面のどこまでスクロールしていても即座にアクションを実行できる",
    "円形＋影の視覚的な強さで「これが主役のボタン」だと直感的に伝わる",
    "ツールバーやヘッダーのスペースを消費せずに主要アクションを置ける",
  ],
  demerits: [
    "コンテンツの上に浮かぶため、リスト末尾の項目や下部のボタンを隠してしまう",
    "アイコンだけでは意味が伝わりにくく、何のボタンか分からないことがある",
    "1画面1アクションの原則を破って複数置くと、重要度の設計が崩壊する",
    "iOSのヒューマンインターフェイスガイドラインには存在しない概念のため、iOSらしいデザインとは馴染みにくい",
    "デスクトップの大画面では右下が視線から遠く、発見されにくい",
  ],
  bestPractices: [
    "1画面に1つだけ配置し、「その画面の主目的」となるアクションに限定する",
    "削除やアーカイブなどの破壊的アクションにはFABを使わない",
    "アイコンは＋（作成）や✉（メッセージ）など誰でも分かるものにし、迷うならExtended FABでラベルを付ける",
    "リストの最下部が隠れないよう、コンテンツ側に十分な下部パディング（80px程度）を確保する",
    "下スクロールで隠し、上スクロールで再表示すると、閲覧の邪魔とアクセス性を両立できる",
    "セーフエリア（ホームバー）やボトムナビゲーションとの重なりを避けて配置する",
  ],
  useCases: [
    "Gmail（モバイル） — 右下の「作成」FABから新規メールを作成",
    "Googleマップ — 現在地ボタンや経路検索のFAB",
    "X（旧Twitter） — 右下の投稿作成ボタンとして定番化",
    "メモアプリ（Google Keepなど） — 新規メモ作成のFABとスピードダイヤル展開",
    "ECサイト・コーポレートサイト — 「チャットで相談」「お問い合わせ」の常設ボタン",
    "地図・配車アプリ — 現在地に戻る、フィルター切替などの補助FAB",
  ],
  accessibility: [
    "<button> 要素で実装し、アイコンのみの場合は必ず aria-label（例:「新規作成」）を付ける",
    "サイズは最低44×44px（推奨56px）とし、タッチターゲットの基準を満たす",
    "背景コンテンツとボタン色のコントラスト比3:1以上、アイコンと背景色は4.5:1以上を確保する",
    "スピードダイヤル型では aria-expanded と aria-controls で展開状態を伝える",
    "スクロールで隠す実装でも、キーボードフォーカス時には表示されるようにする",
    "position: fixed の要素は画面拡大（ズーム）時に領域を圧迫しやすいため、200%ズームでの表示を確認する",
  ],
  figma: [
    "56×56pxのフレームに24pxアイコンを中央配置し、角丸を最大にして円形を作る",
    "Drop shadow（Y: 4, Blur: 12, 色は黒の20%程度）でエレベーションを表現する",
    "size（56 / 40）とtype（icon / extended）のVariantを持つコンポーネントにする",
    "プロトタイプではFABをFixed position（Position: Fixed）に設定するとスクロールしても追従する",
    "スピードダイヤルの展開はVariant切替＋Smart Animateで、サブボタンが順に現れる様子を再現できる",
  ],
  code: {
    html: `<main class="content">
  <!-- FABに隠れないよう下部に余白を確保 -->
  <p>長いコンテンツ...</p>
</main>

<button class="fab" aria-label="新規メッセージを作成">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" d="M12 5v14M5 12h14" />
  </svg>
</button>

<style>
  .content {
    padding-bottom: 96px; /* FABの分の逃げ */
  }
  .fab {
    position: fixed;
    right: 20px;
    bottom: calc(20px + env(safe-area-inset-bottom));
    width: 56px;
    height: 56px;
    border: 0;
    border-radius: 9999px;
    background: #4f46e5;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.25);
    display: grid;
    place-items: center;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .fab svg { width: 24px; height: 24px; }
  .fab:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgb(0 0 0 / 0.3);
  }
  .fab:focus-visible {
    outline: 3px solid #a5b4fc;
    outline-offset: 2px;
  }
</style>`,
    tailwind: `<!-- 標準のFAB -->
<button
  aria-label="新規メッセージを作成"
  class="fixed bottom-5 right-5 z-40 grid size-14 place-items-center
         rounded-full bg-indigo-600 text-white shadow-lg shadow-black/25
         transition hover:scale-105 hover:bg-indigo-500
         focus-visible:outline focus-visible:outline-2
         focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
>
  <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" d="M12 5v14M5 12h14" />
  </svg>
</button>

<!-- 拡張FAB（Extended FAB）: ラベル付きで意味が明確 -->
<button
  class="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full
         bg-indigo-600 py-3.5 pl-4 pr-5 font-semibold text-white
         shadow-lg shadow-black/25 transition hover:bg-indigo-500"
>
  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" d="M12 5v14M5 12h14" />
  </svg>
  新規作成
</button>`,
    react: `"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

export function FloatingActionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  // 下スクロールで隠し、上スクロールで再表示する
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={\`fixed bottom-5 right-5 z-40 grid size-14 place-items-center
                  rounded-full bg-indigo-600 text-white shadow-lg
                  shadow-black/25 transition-all duration-300
                  hover:bg-indigo-500 focus-visible:translate-y-0
                  focus-visible:opacity-100 focus-visible:outline
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-400
                  \${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-24 opacity-0"}\`}
    >
      <Plus aria-hidden className="size-6" />
    </button>
  );
}

// 使用例
export function Page() {
  return (
    <main className="pb-24">
      {/* コンテンツ */}
      <FloatingActionButton
        label="新規メッセージを作成"
        onClick={() => console.log("compose")}
      />
    </main>
  );
}`,
    shadcn: `// shadcn/uiに専用のFABコンポーネントはないため、
// Button + Tooltip を組み合わせて構築します
// npx shadcn@latest add button tooltip
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Fab() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            aria-label="新規メッセージを作成"
            className="fixed bottom-5 right-5 z-40 size-14 rounded-full
                       shadow-lg shadow-black/25 transition
                       hover:scale-105"
          >
            <Plus aria-hidden className="size-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">新規メッセージを作成</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
  },
  related: ["bottom-sheet", "tooltip", "dropdown-menu", "navbar"],
  views: 15600,
  favorites: 590,
  collections: ["mobile-ui"],
  gradient: "from-pink-500/15 via-rose-500/10 to-red-500/15",
  difficulty: 1,
  updatedAt: "2026-07-05",
};
