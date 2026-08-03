import type { UIItem } from "@/types/ui";

export const tooltip: UIItem = {
  slug: "tooltip",
  name: "Tooltip",
  nameJa: "ツールチップ",
  description:
    "ホバーやフォーカスで表示される小さな補足説明。アイコンの意味やヒントを伝える。",
  category: "dialogs",
  tags: ["補足説明", "ホバー", "ヒント", "ポップアップ"],
  aliases: [
    "マウスを乗せると出る小さい説明",
    "アイコンにカーソルを合わせると出る吹き出し",
    "ホバーしたら出てくる黒い小窓",
    "ボタンの意味を教えてくれるポップアップ",
    "はてなマークを押すと出るヒント",
    "カーソルを重ねたときの注釈",
  ],
  whatIs: [
    "ツールチップ（Tooltip）は、要素にマウスカーソルを乗せた（ホバー）ときやキーボードフォーカスが当たったときに、その要素の名前や補足説明を小さな吹き出しで表示するUIコンポーネントです。名前はtool（道具）+ tip（ヒント・助言）の組み合わせで、「ツールバーのアイコンの意味を教えるヒント」として1990年代初頭のMicrosoft製品（ツールバー付きアプリケーション）で普及したことに由来します。",
    "アイコンのみのボタンのラベル表示、省略されたテキストの全文表示、専門用語の補足など、「常時表示するほどではないが、必要な人には伝えたい」情報の受け皿として使われます。表示は一時的で、カーソルが離れると消えるのが特徴です。",
    "類似のUIにポップオーバー（Popover）がありますが、ツールチップは「短いテキストのみ・操作不可・ホバーで表示」、ポップオーバーは「リッチな内容・操作可能・クリックで表示」と役割が区別されます。WAI-ARIAではrole=\"tooltip\"が定義されており、HTMLのtitle属性の代替として、スタイルとアクセシビリティを制御できる実装が推奨されています。",
  ],
  features: [
    "ホバーまたはキーボードフォーカスで表示され、離れると自動的に消える",
    "対象要素の上下左右いずれかに配置され、画面端では自動的に位置を反転する（フリップ）",
    "表示までに300〜700ms程度の遅延（ディレイ）を設けるのが一般的",
    "吹き出しの矢印（アロー）で対象要素との関連を示すことが多い",
    "テキストのみを含み、ボタンやリンクなどの操作可能な要素は含めない",
    "Escキーで消せることがWAI-ARIAの要件になっている",
  ],
  merits: [
    "UIを説明テキストで埋め尽くさず、画面をシンプルに保ったまま情報を補える",
    "アイコンのみのボタンでもラベルを提供でき、省スペースと分かりやすさを両立できる",
    "初心者へのヒント提供と、熟練者にとってのノイズ回避を同時に実現できる",
    "title属性と違い、表示タイミング・デザイン・位置を完全に制御できる",
    "キーボードフォーカスにも反応させれば、マウス以外のユーザーにも情報が届く",
  ],
  demerits: [
    "ホバー概念のないタッチデバイスでは基本的に機能しない",
    "表示が一時的なため、読んでいる途中で消えてしまうことがある",
    "重要な情報を入れると、ツールチップに気づかないユーザーが取り残される",
    "多用すると「どこに何が隠れているか分からない」宝探しのようなUIになる",
    "実装を誤ると、カーソルをツールチップ上に動かした瞬間に消えるなどの不具合が起きやすい",
  ],
  bestPractices: [
    "操作に必須の情報は入れない。ツールチップは「なくても使えるが、あると助かる」情報に限定する",
    "テキストは1〜2文・数十文字以内に収め、長くなるならポップオーバーやヘルプページに切り替える",
    "表示遅延は300〜500ms程度にし、連続ホバー時は2つ目以降を遅延なしで表示する",
    "ホバーとフォーカスの両方で表示し、EscキーとBlurで消せるようにする",
    "無効化（disabled）ボタンの理由説明に使う場合は、フォーカス可能なラッパーを用意する",
    "タッチデバイス向けには、同じ情報を別の手段（ラベル表示や詳細画面）でも提供する",
  ],
  useCases: [
    "GitHub — アイコンボタンやアバターへのホバーで名前・説明を表示",
    "Google ドキュメント — ツールバーの各アイコンに機能名とショートカットを表示",
    "Figma — ツールパネルのアイコンに機能名（ホバー時）を表示",
    "X（旧Twitter） — 投稿日時のホバーで正確な日時を表示",
    "SaaSのダッシュボード — グラフの指標名に付いた「?」アイコンで用語を解説",
  ],
  accessibility: [
    "ツールチップ要素に role=\"tooltip\" を付与し、トリガーから aria-describedby で参照する",
    "アイコンボタンの「名前」を伝える場合は aria-labelledby（または aria-label）を使い分ける",
    "マウスホバーだけでなくキーボードフォーカスでも表示する",
    "Escキーで閉じられるようにする（WCAG 1.4.13: ホバーまたはフォーカスで表示されるコンテンツ）",
    "カーソルをツールチップ本体に移動しても消えないようにする（同じくWCAG 1.4.13）",
    "トリガーはフォーカス可能な要素（buttonなど）にする。spanやdivに直接付けない",
  ],
  figma: [
    "吹き出し本体はAuto Layout（padding: 6〜8 / 10〜12）＋角丸6〜8pxで作り、テキスト量に追従させる",
    "矢印は回転した正方形かベクターで作り、本体と1コンポーネントにまとめる",
    "配置（top / bottom / left / right）をVariantsにし、画面端での反転パターンを表現できるようにする",
    "プロトタイプでは「While hovering」トリガー＋「Open overlay」でホバー表示を再現する",
    "背景はgray-900、テキストは白の組み合わせが定番。コントラスト比を確認しておく",
  ],
  code: {
    html: `<!-- CSSのみのツールチップ（ホバー＋フォーカス対応） -->
<button type="button" class="tooltip-trigger" aria-describedby="tip-save">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/>
    <path d="M17 21v-8H7v8M7 3v5h8"/>
  </svg>
  <span class="sr-only">保存</span>
  <span class="tooltip" role="tooltip" id="tip-save">保存（Ctrl+S）</span>
</button>

<style>
  .tooltip-trigger {
    position: relative;
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
  }
  .tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    padding: 6px 10px;
    border-radius: 8px;
    background: #111827;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.15s 0.3s; /* 300msの表示遅延 */
    pointer-events: none;
  }
  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #111827;
  }
  .tooltip-trigger:hover .tooltip,
  .tooltip-trigger:focus-visible .tooltip {
    opacity: 1;
    visibility: visible;
  }
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
  }
</style>`,
    tailwind: `<button
  type="button"
  aria-describedby="tip-save"
  class="group relative inline-grid size-10 place-items-center rounded-xl
         border border-gray-200 bg-white hover:bg-gray-50"
>
  <svg class="size-5 text-gray-700" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M17 21v-8H7v8M7 3v5h8" />
  </svg>
  <span class="sr-only">保存</span>
  <span
    role="tooltip"
    id="tip-save"
    class="pointer-events-none invisible absolute bottom-full left-1/2 mb-2
           -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-2.5
           py-1.5 text-xs text-white opacity-0 transition-opacity delay-300
           duration-150 group-hover:visible group-hover:opacity-100
           group-focus-visible:visible group-focus-visible:opacity-100
           after:absolute after:left-1/2 after:top-full after:-translate-x-1/2
           after:border-4 after:border-transparent after:border-t-gray-900"
  >
    保存（Ctrl+S）
  </span>
</button>`,
    react: `"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Props = {
  /** ツールチップの本文（短いテキストのみ） */
  content: string;
  children: ReactNode;
  delayMs?: number;
};

export function Tooltip({ content, children, delayMs = 300 }: Props) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const id = useId();

  const show = () => {
    timerRef.current = setTimeout(() => setOpen(true), delayMs);
  };
  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(false);
  };

  // WCAG 1.4.13: Escキーで閉じられるようにする
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {/* トリガー：aria-describedbyで本文と関連付ける */}
      <span aria-describedby={open ? id : undefined}>{children}</span>
      {open && (
        <span
          role="tooltip"
          id={id}
          className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2
                     whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1.5
                     text-xs text-white
                     after:absolute after:left-1/2 after:top-full
                     after:-translate-x-1/2 after:border-4
                     after:border-transparent after:border-t-gray-900"
        >
          {content}
        </span>
      )}
    </span>
  );
}

// 使用例
// <Tooltip content="保存（Ctrl+S）">
//   <button type="button" aria-label="保存">
//     <SaveIcon aria-hidden className="size-5" />
//   </button>
// </Tooltip>`,
    shadcn: `// npx shadcn@latest add tooltip button
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export function SaveButtonWithTooltip() {
  return (
    // delayDurationで表示遅延を調整（既定値は700ms）
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="保存">
            <Save aria-hidden className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          保存（Ctrl+S）
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
  },
  related: ["dropdown-menu", "modal", "toast", "badge", "command-palette"],
  views: 23900,
  favorites: 1010,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-cyan-500/15 via-sky-500/10 to-blue-500/15",
  difficulty: 2,
  updatedAt: "2026-05-21",
};
