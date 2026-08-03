import type { UIItem } from "@/types/ui";

export const activityFeed: UIItem = {
  slug: "activity-feed",
  name: "Activity Feed",
  nameJa: "アクティビティフィード",
  description:
    "ユーザーやシステムの行動履歴を時系列で表示するUI。SaaSの管理画面やSNSの通知に必須。",
  category: "timeline",
  tags: ["時系列", "履歴", "通知", "ログ", "SaaS"],
  aliases: [
    "誰が何をしたか流れてくるやつ",
    "更新履歴が並んでいる画面",
    "タイムラインみたいな操作ログ",
    "「〇〇さんがコメントしました」が並ぶUI",
    "最近のアクティビティ一覧",
    "行動履歴のリスト",
  ],
  whatIs: [
    "アクティビティフィード（Activity Feed）は、ユーザーやチーム、システムが行った操作・イベントを新しい順（または古い順）に並べて表示するUIコンポーネントです。「Activity（活動）」の「Feed（供給・流れ）」という名前の通り、活動の記録が川の流れのように次々と供給されるイメージから名付けられました。FacebookのNews Feedの登場以降、この呼び名が一般に定着しています。",
    "「田中さんがタスクを完了しました・3分前」のように、アバター＋行動主体＋動詞＋対象＋相対時刻という定型文で1件を構成するのが基本形です。GitHubのリポジトリのアクティビティ、Notionの更新履歴、Slackの通知一覧など、コラボレーションツールでは中核的な役割を担っています。",
    "見た目はタイムラインUIと似ていますが、タイムラインが「プロジェクトの節目」など編集された時系列を見せるのに対し、アクティビティフィードは自動的に記録されたイベントログを網羅的に見せる点が異なります。フィルタリングやグルーピング、無限スクロールとの併用が実務では重要になります。",
  ],
  features: [
    "イベントを時系列（通常は新しい順）に一覧表示する",
    "アバター・アイコンでイベントの種類や行動主体をひと目で識別できる",
    "「3分前」「昨日」などの相対時刻表示を用いることが多い",
    "縦の接続線（コネクタ）で項目同士のつながりを視覚化するデザインが定番",
    "「コメント」「更新」「削除」などイベント種別でのフィルタリングを備えることが多い",
    "同一ユーザーの連続操作を「田中さんが3件のファイルを更新」のようにまとめる集約表示",
  ],
  merits: [
    "チームの状況把握（何が起きたか）を1画面で完結でき、確認コストが下がる",
    "監査ログとしての性質を持ち、トラブル時の原因追跡に役立つ",
    "更新がある＝サービスが動いている感覚を与え、再訪問の動機づけになる",
    "構造が単純なリストなので、無限スクロールやリアルタイム更新と組み合わせやすい",
    "アバターと定型文の組み合わせにより、多量の情報でも流し読みしやすい",
  ],
  demerits: [
    "イベントを無差別に流すとノイズが多くなり、重要な情報が埋もれる",
    "相対時刻だけだと「正確にいつか」が分からず、監査用途では不十分になる",
    "リアルタイム更新を入れると、読んでいる途中で項目が押し流されるストレスが生じる",
    "イベント文言の設計（誰が・何を・どこで）を怠ると意味不明なログの羅列になる",
    "大量データではページネーションやAPI設計まで含めた実装コストが高い",
  ],
  bestPractices: [
    "「田中さんが〈タスク名〉を完了しました」のように、対象へのリンクを含む一貫した文型で書く",
    "連続する同種イベントは「＋3件」のように集約し、フィードの縦の長さを抑える",
    "相対時刻を表示しつつ、hover時のツールチップやtitle属性で絶対時刻も確認できるようにする",
    "「すべて」「コメントのみ」「自分宛て」などのフィルタを用意し、ノイズを制御できるようにする",
    "新着はリアルタイムに割り込ませず「新しいアクティビティが3件」のボタン表示にして、読書位置を守る",
    "日付ごとに「今日」「昨日」の見出しでグルーピングすると流し読みしやすくなる",
  ],
  useCases: [
    "GitHub — リポジトリのコミット・Issue・PRのアクティビティ表示",
    "Notion — ページ右上の「更新履歴」パネル",
    "Slack — 「アクティビティ」タブでのメンション・リアクション一覧",
    "Salesforce — 商談レコードの活動タイムライン",
    "Stripe Dashboard — 決済・返金などのイベントログ",
  ],
  accessibility: [
    "フィード全体は <ul> / <li> のリスト構造にし、支援技術に件数と順序を伝える",
    "リアルタイム追加を行う領域には aria-live=\"polite\" を検討し、読み上げの割り込みを制御する",
    "相対時刻は <time datetime=\"...\"> でマークアップし、機械可読な絶対時刻を持たせる",
    "アバター画像には行動主体の名前をaltとして付与する（装飾扱いにしない）",
    "「もっと見る」ボタンはキーボード操作可能な <button> にし、読み込み中は aria-busy を付ける",
  ],
  figma: [
    "1件分の行（アバター＋テキスト＋時刻）をComponent化し、Auto Layout（縦）でフィードを組む",
    "イベント種別（コメント/更新/削除など）をVariantsにし、アイコンと色をまとめて切り替える",
    "縦の接続線はアバター列のFrameにLine（またはborder）を置き、Fill Containerで高さに追従させる",
    "テキストはComponent Property（Text）にして、実データに近い長さで折り返しを確認する",
    "「今日」「昨日」の日付見出しも別Componentにしておくと実装時の構造と一致させやすい",
  ],
  code: {
    html: `<ul class="activity-feed" aria-label="最近のアクティビティ">
  <li class="item">
    <img class="avatar" src="/avatars/tanaka.png" alt="田中" />
    <div class="body">
      <p><strong>田中</strong> さんが <a href="#">デザイン仕様書</a> にコメントしました</p>
      <time datetime="2026-07-01T10:24:00+09:00">3分前</time>
    </div>
  </li>
  <li class="item">
    <img class="avatar" src="/avatars/suzuki.png" alt="鈴木" />
    <div class="body">
      <p><strong>鈴木</strong> さんがタスク <a href="#">LPの実装</a> を完了しました</p>
      <time datetime="2026-07-01T09:58:00+09:00">29分前</time>
    </div>
  </li>
</ul>

<style>
  .activity-feed {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .activity-feed .item {
    position: relative;
    display: flex;
    gap: 12px;
    padding: 12px 0 20px;
  }
  /* 縦の接続線 */
  .activity-feed .item:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 17px;
    top: 48px;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
  }
  .activity-feed .avatar {
    width: 36px;
    height: 36px;
    border-radius: 9999px;
    flex-shrink: 0;
  }
  .activity-feed p {
    margin: 0;
    font-size: 14px;
  }
  .activity-feed time {
    font-size: 12px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<ul aria-label="最近のアクティビティ" class="max-w-md">
  <li class="relative flex gap-3 pb-6">
    <!-- 接続線 -->
    <span aria-hidden="true"
          class="absolute left-[17px] top-12 bottom-0 w-0.5 bg-gray-200"></span>
    <img src="/avatars/tanaka.png" alt="田中"
         class="size-9 shrink-0 rounded-full ring-2 ring-white" />
    <div class="min-w-0">
      <p class="text-sm text-gray-700">
        <span class="font-semibold text-gray-900">田中</span> さんが
        <a href="#" class="font-medium text-fuchsia-600 hover:underline">デザイン仕様書</a>
        にコメントしました
      </p>
      <time datetime="2026-07-01T10:24:00+09:00"
            class="mt-0.5 block text-xs text-gray-500">3分前</time>
    </div>
  </li>
  <li class="relative flex gap-3">
    <img src="/avatars/suzuki.png" alt="鈴木"
         class="size-9 shrink-0 rounded-full ring-2 ring-white" />
    <div class="min-w-0">
      <p class="text-sm text-gray-700">
        <span class="font-semibold text-gray-900">鈴木</span> さんがタスク
        <a href="#" class="font-medium text-fuchsia-600 hover:underline">LPの実装</a>
        を完了しました
      </p>
      <time datetime="2026-07-01T09:58:00+09:00"
            class="mt-0.5 block text-xs text-gray-500">29分前</time>
    </div>
  </li>
</ul>`,
    react: `"use client";

import { useState } from "react";

type Activity = {
  id: string;
  actor: string;
  avatarUrl: string;
  action: string;
  target: string;
  targetHref: string;
  datetime: string; // ISO 8601
  relative: string; // "3分前" など
};

export function ActivityFeed({ initialItems }: { initialItems: Activity[] }) {
  const [items] = useState(initialItems);
  const [loading, setLoading] = useState(false);

  return (
    <section aria-label="最近のアクティビティ" className="max-w-md">
      <ul aria-live="polite" aria-busy={loading}>
        {items.map((item, i) => (
          <li key={item.id} className="relative flex gap-3 pb-6 last:pb-0">
            {i < items.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[17px] top-12 bottom-0 w-0.5 bg-gray-200"
              />
            )}
            <img
              src={item.avatarUrl}
              alt={item.actor}
              className="size-9 shrink-0 rounded-full ring-2 ring-white"
            />
            <div className="min-w-0">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">{item.actor}</span>
                {" さんが "}
                <a
                  href={item.targetHref}
                  className="font-medium text-fuchsia-600 hover:underline"
                >
                  {item.target}
                </a>
                {\` \${item.action}\`}
              </p>
              <time
                dateTime={item.datetime}
                title={new Date(item.datetime).toLocaleString("ja-JP")}
                className="mt-0.5 block text-xs text-gray-500"
              >
                {item.relative}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setLoading(true)}
        className="mt-4 w-full rounded-xl border border-gray-200 py-2 text-sm
                   font-medium text-gray-600 hover:bg-gray-50"
      >
        {loading ? "読み込み中…" : "もっと見る"}
      </button>
    </section>
  );
}`,
    shadcn: `// shadcn/uiにActivity Feed専用コンポーネントは無いため、
// Avatar + Button を組み合わせて実装します。
// npx shadcn@latest add avatar button
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: "1",
    actor: "田中",
    avatarUrl: "/avatars/tanaka.png",
    text: "デザイン仕様書にコメントしました",
    relative: "3分前",
    datetime: "2026-07-01T10:24:00+09:00",
  },
  {
    id: "2",
    actor: "鈴木",
    avatarUrl: "/avatars/suzuki.png",
    text: "タスク「LPの実装」を完了しました",
    relative: "29分前",
    datetime: "2026-07-01T09:58:00+09:00",
  },
];

export function ActivityFeed() {
  return (
    <section aria-label="最近のアクティビティ" className="max-w-md">
      <ul>
        {activities.map((a, i) => (
          <li key={a.id} className="relative flex gap-3 pb-6 last:pb-0">
            {i < activities.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[17px] top-12 bottom-0 w-0.5 bg-border"
              />
            )}
            <Avatar className="ring-2 ring-background">
              <AvatarImage src={a.avatarUrl} alt={a.actor} />
              <AvatarFallback>{a.actor.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm">
                <span className="font-semibold">{a.actor}</span> さんが{a.text}
              </p>
              <time dateTime={a.datetime} className="text-xs text-muted-foreground">
                {a.relative}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="outline" className="mt-4 w-full">
        もっと見る
      </Button>
    </section>
  );
}`,
  },
  related: ["timeline", "notification-center", "avatar", "kpi-card"],
  views: 8400,
  favorites: 340,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-fuchsia-500/15 via-pink-500/10 to-rose-500/15",
  difficulty: 2,
  updatedAt: "2026-05-14",
};
