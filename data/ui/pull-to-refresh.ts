import type { UIItem } from "@/types/ui";

export const pullToRefresh: UIItem = {
  slug: "pull-to-refresh",
  name: "Pull to Refresh",
  nameJa: "プルトゥリフレッシュ",
  description:
    "画面を下に引っ張って離すと最新データを再読み込みするモバイル定番のジェスチャーUI。",
  category: "loading",
  tags: ["ジェスチャー", "更新", "モバイル", "リスト"],
  aliases: [
    "下に引っ張って更新するやつ",
    "画面を引っ張るとリロードされる機能",
    "スワイプで最新に更新",
    "引っ張って離すと読み込むアレ",
    "タイムラインを下げて更新する操作",
    "引き下げリロード",
  ],
  whatIs: [
    "プルトゥリフレッシュ（Pull to Refresh）は、リストやフィードの先頭で画面を下方向に引っ張り（Pull）、指を離すと最新データを再読み込み（Refresh）するジェスチャーUIです。名前は操作そのものを表す「引っ張って更新する」という英語に由来し、「引っ張って更新」「引き下げ更新」とも呼ばれます。",
    "2008年にTweetie（後の公式Twitterアプリ）の開発者Loren Brichterが考案したパターンとして知られ、その後iOS標準のUIRefreshControl、AndroidのSwipeRefreshLayoutとして各OSに取り込まれました。現在ではメール、SNS、ニュースなど時系列コンテンツを扱うモバイルアプリの事実上の標準操作になっています。",
    "引っ張り量に応じてインジケーターが変化し、しきい値を超えて離すと更新が始まる、という一連のフィードバックが操作の気持ちよさを生みます。更新ボタンを画面に置かずに済むため、コンテンツ領域を最大限使えるのも特徴です。",
  ],
  features: [
    "リスト先頭からの下方向スワイプという自然なジェスチャーで更新を実行できる",
    "引っ張り量に連動してインジケーターが伸びる・回転するなどの追従フィードバックがある",
    "しきい値を超えて離すと更新開始、超えなければキャンセルされる",
    "更新中はスピナーが表示され、完了するとリストが最新状態に置き換わる",
    "iOS（UIRefreshControl）・Android（SwipeRefreshLayout）に標準実装がある",
    "触覚フィードバック（ハプティクス）と組み合わせて操作の確定感を出せる",
  ],
  merits: [
    "更新ボタンをUIに常設せずに済み、コンテンツ表示領域を広く保てる",
    "「最新を見たい」という欲求と「引っ張る」動作が直感的に結びつき、学習コストが低い",
    "モバイルユーザーの大半がすでに知っている操作で、説明なしで使ってもらえる",
    "引っ張りの物理的な手応えが操作の楽しさ・アプリの品質感につながる",
    "更新のタイミングをユーザー自身が制御でき、ポーリングより通信量を抑えられる",
  ],
  demerits: [
    "機能の存在が画面上に見えないため、知らないユーザーには発見されにくい",
    "スクロールと操作が重なるため、実装が悪いと誤発動やスクロールの引っかかりが起きる",
    "デスクトップ（マウス操作）には馴染まず、代替の更新手段が別途必要になる",
    "ブラウザ標準のプルダウンリロード（Chrome等）と競合し、意図しないページ全体リロードを招くことがある",
    "時系列フィード以外（設定画面など）に付けると意味が伝わらず混乱を生む",
  ],
  bestPractices: [
    "適用対象は時系列で更新されるリスト（フィード・受信箱・通知）に限定する",
    "しきい値は60〜80px程度にし、引っ張り量とインジケーターの状態変化を必ず連動させる",
    "更新中もリストの既存コンテンツは表示したままにし、完了後に差分を上に追加する",
    "更新完了時に「新着10件」などの結果フィードバックを短く表示すると効果が伝わる",
    "Webで自作する場合は overscroll-behavior-y: contain でブラウザ標準リロードとの競合を防ぐ",
    "新着確認の代替手段（自動更新や更新ボタン）も用意し、ジェスチャー必須にしない",
  ],
  useCases: [
    "X（旧Twitter）— タイムラインを引っ張って新着ポストを取得する発祥のパターン",
    "Gmailアプリ — 受信トレイを引き下げてメールを再同期",
    "Instagram — フィード先頭で引っ張ると新しい投稿とストーリーズを更新",
    "スマートニュースなどのニュースアプリ — 引き下げで最新記事を取得",
    "Slackモバイル — チャンネル一覧やスレッドの引き下げ再読み込み",
  ],
  accessibility: [
    "更新中のインジケーターには role=\"status\" とテキスト（「更新中…」）を付け、状態を支援技術に伝える",
    "ジェスチャーが使えないユーザー向けに、ボタンやメニューなど代替の更新手段を必ず用意する",
    "スクリーンリーダーのスワイプ操作と競合しないよう、標準コンポーネント（UIRefreshControl等）を優先する",
    "更新完了は aria-live リージョンで「更新が完了しました」と通知する",
    "引っ張りアニメーションは prefers-reduced-motion 環境で簡略化する",
  ],
  figma: [
    "「通常」「引っ張り中」「更新中」「完了」の4状態をVariantsで作り、状態遷移を整理する",
    "引っ張り中はリスト全体をY方向にオフセットし、隙間にインジケーターを配置する構造にする",
    "プロトタイプはOn Drag + Smart Animateで引っ張り追従を近似できるが、しきい値挙動は再現困難な旨を注記する",
    "インジケーターの引っ張り量による変化（矢印→回転スピナー）をコンポーネントとして分離しておく",
    "実機の慣性スクロールと干渉するため、最終的な操作感の検証は実装ビルドで行うようメモを残す",
  ],
  code: {
    html: `<!-- 構造とCSSの骨格。実際の引っ張り検知はJSで行う -->
<div class="ptr-container" id="ptr">
  <div class="ptr-indicator" role="status" aria-hidden="true">
    <span class="ptr-spinner"></span>
    <span class="ptr-text">引っ張って更新</span>
  </div>
  <ul class="feed">
    <li>最新の記事タイトル 1</li>
    <li>最新の記事タイトル 2</li>
    <li>最新の記事タイトル 3</li>
  </ul>
</div>

<style>
  .ptr-container {
    height: 100dvh;
    overflow-y: auto;
    /* ブラウザ標準のプルダウンリロードを無効化 */
    overscroll-behavior-y: contain;
  }
  .ptr-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 56px;
    margin-top: -56px; /* 通常時は画面外に隠す */
    color: #6b7280;
    font-size: 13px;
    transition: margin-top 0.2s;
  }
  .ptr-container.pulling .ptr-indicator {
    margin-top: 0;
  }
  .ptr-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
  }
  .ptr-container.refreshing .ptr-spinner {
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .feed li {
    padding: 16px;
    border-bottom: 1px solid #f3f4f6;
    list-style: none;
  }
</style>`,
    tailwind: `<div
  class="h-dvh overflow-y-auto overscroll-y-contain"
  id="ptr-container"
>
  <!-- 引っ張り中に現れるインジケーター -->
  <div
    role="status"
    class="-mt-14 flex h-14 items-center justify-center gap-2
           text-sm text-gray-500 transition-[margin-top] duration-200"
    data-ptr-indicator
  >
    <span
      class="size-[18px] rounded-full border-2 border-gray-200
             border-t-blue-500 data-[refreshing]:animate-spin"
    ></span>
    引っ張って更新
  </div>

  <ul class="divide-y divide-gray-100">
    <li class="p-4">最新の記事タイトル 1</li>
    <li class="p-4">最新の記事タイトル 2</li>
    <li class="p-4">最新の記事タイトル 3</li>
  </ul>
</div>`,
    react: `"use client";

import { useRef, useState } from "react";

const THRESHOLD = 70;

export function PullToRefreshList({
  onRefresh,
  children,
}: {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const [pullDistance, setPullDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0 && !refreshing) {
      startY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null) return;
    const diff = e.touches[0].clientY - startY.current;
    // 抵抗感を出すため引っ張り量を減衰させる
    setPullDistance(diff > 0 ? Math.min(diff * 0.5, 110) : 0);
  };

  const handleTouchEnd = async () => {
    if (pullDistance >= THRESHOLD) {
      setRefreshing(true);
      setPullDistance(56);
      try {
        await onRefresh();
      } finally {
        setRefreshing(false);
      }
    }
    setPullDistance(0);
    startY.current = null;
  };

  const armed = pullDistance >= THRESHOLD;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="h-dvh overflow-y-auto overscroll-y-contain"
    >
      <div
        role="status"
        aria-live="polite"
        style={{ height: pullDistance }}
        className="flex items-center justify-center gap-2 overflow-hidden
                   text-sm text-gray-500 transition-[height] duration-150"
      >
        <span
          aria-hidden
          className={\`size-[18px] rounded-full border-2 border-gray-200
                      border-t-blue-500 \${refreshing ? "animate-spin" : ""}\`}
          style={{
            transform: refreshing
              ? undefined
              : \`rotate(\${pullDistance * 3}deg)\`,
          }}
        />
        {refreshing ? "更新中…" : armed ? "離して更新" : "引っ張って更新"}
      </div>
      {children}
    </div>
  );
}`,
    shadcn: `// shadcn/uiにPull to Refresh用コンポーネントはありません。
// 上記Reactの自作実装をベースに、更新中の表示だけ
// lucide-reactのLoader2を使うと統一感が出ます。
"use client";

import { useState } from "react";
import { Loader2, ArrowDown } from "lucide-react";
import { PullToRefreshList } from "./pull-to-refresh-list";

export function Feed() {
  const [items, setItems] = useState(["記事A", "記事B", "記事C"]);

  const refresh = async () => {
    const res = await fetch("/api/feed");
    setItems(await res.json());
  };

  return (
    <PullToRefreshList onRefresh={refresh}>
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item} className="p-4 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </PullToRefreshList>
  );
}

// インジケーター例：
// 引っ張り中 → <ArrowDown className="size-4" aria-hidden />
// 更新中     → <Loader2 className="size-4 animate-spin" aria-hidden />`,
  },
  related: ["infinite-scroll", "spinner", "skeleton", "load-more"],
  views: 12400,
  favorites: 520,
  collections: ["mobile-ui"],
  gradient: "from-cyan-500/15 via-sky-500/10 to-indigo-500/15",
  difficulty: 3,
  updatedAt: "2026-05-14",
};
