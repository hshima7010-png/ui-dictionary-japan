import type { UIItem } from "@/types/ui";

export const productTour: UIItem = {
  slug: "product-tour",
  name: "Product Tour",
  nameJa: "プロダクトツアー（コーチマーク）",
  description:
    "画面上の要素を順番にハイライトし、吹き出しで操作を案内するガイド型オンボーディングUI。",
  category: "onboarding",
  tags: ["オンボーディング", "コーチマーク", "ツアー", "ガイド"],
  aliases: [
    "初回に出てくる使い方の説明",
    "ボタンを順番に教えてくれる吹き出し",
    "ここを押してくださいって出るやつ",
    "画面の一部だけ明るくなる案内",
    "新機能の紹介ポップアップ",
  ],
  whatIs: [
    "プロダクトツアー（Product Tour）は、初回利用時や新機能リリース時に、画面上の要素をスポットライトで順番にハイライトしながら、吹き出し（ツールチップ）で機能や操作を案内するガイド型のオンボーディングUIです。観光の「ツアー」のようにプロダクト内を順路に沿って案内することからこの名が付きました。個々の吹き出しは、スポーツのコーチが図に書き込む指示になぞらえて「コーチマーク（Coach Mark）」とも呼ばれます。",
    "構成要素は、対象要素以外を暗くするオーバーレイ、対象を切り抜いて目立たせるスポットライト、説明文と「次へ」「スキップ」ボタンを持つ吹き出し、そして「2 / 5」のようなステップ表示です。Slackは初回ログイン時にチャンネルや入力欄を順に案内し、Notionも新機能リリース時にポップオーバー型の案内を表示します。Intercom・Appcues・Pendoといった専用SaaSが存在するほど、グロース施策として一般化した手法です。",
    "一方で、ユーザーの操作を中断して押し付けるツアーは「ツアー疲れ」を招くことが知られています。近年は全機能を一括説明する長いツアーではなく、ユーザーが該当機能に近づいたタイミングで1〜2ステップだけ案内する「コンテキストに応じたガイド」への移行が進んでおり、設計思想そのものが問われるUIです。",
  ],
  features: [
    "対象要素以外をオーバーレイで暗くし、スポットライトで注目を誘導する",
    "吹き出しに説明文・「次へ／戻る」・「スキップ」・ステップ数を表示する",
    "対象要素の位置に応じて吹き出しの表示位置（上下左右）を自動調整する",
    "スクロールが必要な要素へは自動スクロールして追従する",
    "「実際に操作させて次へ進む」インタラクティブ型と「読むだけ」の説明型がある",
    "表示履歴を保存し、完了・スキップ済みユーザーには再表示しない制御を持つ",
  ],
  merits: [
    "ドキュメントを読ませずに、実際の画面上で直接操作を教えられる",
    "重要機能の発見率を高め、アクティベーション改善に直結する",
    "新機能リリース時の告知として、対象ユーザーにピンポイントで届けられる",
    "スポットライトによる視線誘導で、複雑な画面でも迷わせない",
    "ステップごとの離脱率を計測でき、オンボーディングの改善サイクルを回せる",
  ],
  demerits: [
    "ユーザーの目的の操作を中断するため、長いツアーは高確率でスキップ・離脱される",
    "ツアーで説明した内容は操作を伴わないと記憶に残りにくい",
    "対象要素のDOM変更でツアーが壊れやすく、保守コストが高い",
    "画面サイズやレイアウト変化への追従（位置再計算）の実装難度が高い",
    "頻繁に表示すると「また案内か」という学習性の無視・ツアー疲れを招く",
  ],
  bestPractices: [
    "ステップ数は3〜5個までに絞り、全機能の説明ではなく最初の価値体験に集中させる",
    "「スキップ」を全ステップで目立つ位置に置き、ユーザーの主導権を奪わない",
    "読ませるだけでなく、実際にクリック・入力させて進むインタラクティブ型を優先する",
    "一括ツアーよりも、機能に触れる文脈で出す1〜2ステップのコーチマークに分割する",
    "表示済みフラグを永続化し、同じツアーを二度表示しない。再閲覧はヘルプから可能にする",
    "対象要素が存在しない・非表示の場合のフォールバック（ステップを飛ばす等）を実装する",
  ],
  useCases: [
    "Slack — 初回ログイン時にチャンネル・メッセージ入力欄を順番に案内",
    "Notion — 新機能リリース時のポップオーバー型コーチマーク",
    "Figma — 初回起動時のツールバー案内と操作を促すガイド",
    "Googleドキュメント — 新UI移行時の「新しくなりました」ツアー",
    "Intercom / Appcues / Pendo — ノーコードでツアーを構築できる専用SaaS",
  ],
  accessibility: [
    "吹き出しは role=\"dialog\" と aria-labelledby / aria-describedby でマークアップする",
    "ツアー表示中はフォーカスを吹き出し内に移動し、Escキーでいつでも終了できるようにする",
    "「ステップ2 / 5」のような進行状況をテキストで提供し、スクリーンリーダーでも把握できるようにする",
    "オーバーレイで暗くなった背景要素は inert や aria-hidden で操作対象から外す",
    "スポットライトの視覚効果に依存せず、説明文だけで対象が特定できる文言にする",
    "自動スクロールやアニメーションは prefers-reduced-motion に配慮する",
  ],
  figma: [
    "オーバーレイは黒40〜60%のレイヤーで作り、スポットライト部分はマスクまたは切り抜きで表現する",
    "吹き出しコンポーネントに矢印の向き（上下左右）のVariantsを用意し、どの位置でも使えるようにする",
    "ステップ表示・次へ・スキップを含めた吹き出しをAuto Layoutで組み、文章量の変化に耐えるようにする",
    "各ステップを別フレームにし、プロトタイプの「次へ」クリックで遷移させてツアー全体を再現する",
    "Smart Animateでスポットライトの移動を補間すると、実装後の挙動イメージを共有しやすい",
  ],
  code: {
    html: `<!-- ステップ1つ分の構造。位置はJSで対象要素に合わせて計算する -->
<div class="tour-overlay" aria-hidden="true"></div>

<div class="tour-spotlight" aria-hidden="true" style="top: 96px; left: 24px;
     width: 220px; height: 48px;"></div>

<div class="tour-popover" role="dialog"
     aria-labelledby="tour-title" aria-describedby="tour-desc"
     style="top: 156px; left: 24px;">
  <p class="step">ステップ 1 / 3</p>
  <h2 id="tour-title">まずはプロジェクトを作成</h2>
  <p id="tour-desc">このボタンから最初のプロジェクトを作成できます。</p>
  <div class="actions">
    <button type="button" class="skip">スキップ</button>
    <button type="button" class="next">次へ</button>
  </div>
</div>

<style>
  .tour-overlay {
    position: fixed; inset: 0; background: rgba(17, 24, 39, 0.5); z-index: 90;
  }
  .tour-spotlight {
    position: fixed; z-index: 91; border-radius: 12px;
    box-shadow: 0 0 0 9999px rgba(17, 24, 39, 0.5);
    background: transparent; pointer-events: none;
  }
  .tour-popover {
    position: fixed; z-index: 92; width: 280px; background: #fff;
    border-radius: 16px; padding: 20px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
  .step { font-size: 11px; font-weight: 700; color: #7c3aed;
          letter-spacing: 0.05em; margin-bottom: 8px; }
  .tour-popover h2 { font-size: 15px; margin-bottom: 6px; }
  .tour-popover p:not(.step) { font-size: 13px; color: #6b7280; line-height: 1.6; }
  .actions { display: flex; justify-content: space-between; margin-top: 16px; }
  .skip { border: none; background: none; color: #9ca3af; font-size: 13px;
          cursor: pointer; }
  .next { border: none; background: #7c3aed; color: #fff; border-radius: 8px;
          padding: 8px 16px; font-size: 13px; font-weight: 600; cursor: pointer; }
</style>`,
    tailwind: `<!-- オーバーレイ（スポットライトはbox-shadowの切り抜きで表現） -->
<div
  aria-hidden="true"
  class="fixed z-[91] rounded-xl shadow-[0_0_0_9999px_rgba(17,24,39,0.5)]
         pointer-events-none"
  style="top: 96px; left: 24px; width: 220px; height: 48px;"
></div>

<!-- コーチマーク（吹き出し） -->
<div
  role="dialog"
  aria-labelledby="tour-title"
  aria-describedby="tour-desc"
  class="fixed z-[92] w-72 rounded-2xl bg-white p-5 shadow-2xl"
  style="top: 156px; left: 24px;"
>
  <p class="text-[11px] font-bold tracking-wider text-violet-600">
    ステップ 1 / 3
  </p>
  <h2 id="tour-title" class="mt-2 text-sm font-bold">
    まずはプロジェクトを作成
  </h2>
  <p id="tour-desc" class="mt-1 text-[13px] leading-relaxed text-gray-500">
    このボタンから最初のプロジェクトを作成できます。
  </p>
  <div class="mt-4 flex items-center justify-between">
    <button type="button" class="text-[13px] text-gray-400 hover:text-gray-600">
      スキップ
    </button>
    <button
      type="button"
      class="rounded-lg bg-violet-600 px-4 py-2 text-[13px] font-semibold
             text-white hover:bg-violet-700"
    >
      次へ
    </button>
  </div>
</div>`,
    react: `"use client";

import { useCallback, useEffect, useState } from "react";

type TourStep = {
  /** ハイライト対象のCSSセレクター */
  target: string;
  title: string;
  description: string;
};

export function ProductTour({
  steps,
  onFinish,
}: {
  steps: TourStep[];
  onFinish: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const step = steps[index];
  const isLast = index === steps.length - 1;

  const measure = useCallback(() => {
    const el = document.querySelector(step.target);
    if (!el) return setRect(null);
    el.scrollIntoView({ block: "center", behavior: "smooth" });
    setRect(el.getBoundingClientRect());
  }, [step.target]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFinish();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onFinish]);

  if (!rect) return null;

  return (
    <>
      {/* スポットライト（巨大なbox-shadowで周囲を暗転） */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[91] rounded-xl
                   shadow-[0_0_0_9999px_rgba(17,24,39,0.5)] transition-all duration-300"
        style={{
          top: rect.top - 6,
          left: rect.left - 6,
          width: rect.width + 12,
          height: rect.height + 12,
        }}
      />

      <div
        role="dialog"
        aria-labelledby="tour-title"
        aria-describedby="tour-desc"
        className="fixed z-[92] w-72 rounded-2xl bg-white p-5 shadow-2xl"
        style={{ top: rect.bottom + 12, left: rect.left }}
      >
        <p className="text-[11px] font-bold tracking-wider text-violet-600">
          ステップ {index + 1} / {steps.length}
        </p>
        <h2 id="tour-title" className="mt-2 text-sm font-bold">
          {step.title}
        </h2>
        <p id="tour-desc" className="mt-1 text-[13px] leading-relaxed text-gray-500">
          {step.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onFinish}
            className="text-[13px] text-gray-400 hover:text-gray-600"
          >
            スキップ
          </button>
          <button
            type="button"
            autoFocus
            onClick={() => (isLast ? onFinish() : setIndex((i) => i + 1))}
            className="rounded-lg bg-violet-600 px-4 py-2 text-[13px]
                       font-semibold text-white hover:bg-violet-700"
          >
            {isLast ? "完了" : "次へ"}
          </button>
        </div>
      </div>
    </>
  );
}`,
    shadcn: `// shadcn/uiに専用コンポーネントは無いため、Popoverを土台に構築します
// （本格的な実装には driver.js / react-joyride などの専用ライブラリも有力です）
// npx shadcn@latest add popover button
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function CoachMark({
  open,
  onNext,
  onSkip,
  children,
}: {
  open: boolean;
  onNext: () => void;
  onSkip: () => void;
  children: React.ReactNode; // ハイライト対象の要素
}) {
  return (
    <Popover open={open}>
      <PopoverAnchor asChild>
        <div className={open ? "relative z-[91] rounded-xl ring-4 ring-violet-400" : ""}>
          {children}
        </div>
      </PopoverAnchor>
      <PopoverContent
        side="bottom"
        align="start"
        className="w-72"
        aria-labelledby="tour-title"
      >
        <p className="text-[11px] font-bold tracking-wider text-violet-600">
          ステップ 1 / 3
        </p>
        <h2 id="tour-title" className="mt-2 text-sm font-bold">
          まずはプロジェクトを作成
        </h2>
        <p className="mt-1 text-[13px] text-muted-foreground">
          このボタンから最初のプロジェクトを作成できます。
        </p>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onSkip}>
            スキップ
          </Button>
          <Button size="sm" onClick={onNext}>
            次へ
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
  },
  related: ["tooltip", "popover", "onboarding-checklist", "modal"],
  views: 8300,
  favorites: 290,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-indigo-500/15 via-violet-500/10 to-fuchsia-500/15",
  difficulty: 3,
  updatedAt: "2026-05-27",
};
