import type { UIItem } from "@/types/ui";

export const notificationCenter: UIItem = {
  slug: "notification-center",
  name: "Notification Center",
  nameJa: "通知センター",
  description:
    "ベルアイコンから開く通知の一覧パネル。未読管理と履歴の蓄積で見逃しを防ぐ。",
  category: "toast",
  tags: ["通知", "ベルアイコン", "未読バッジ", "履歴"],
  aliases: [
    "ベルのマークを押すと出てくる通知一覧",
    "通知がたまっていくところ",
    "未読の赤い数字が付くベル",
    "お知らせの一覧パネル",
    "通知ボックス",
    "アプリ内のお知らせ画面",
  ],
  whatIs: [
    "通知センター（Notification Center）は、アプリケーション内で発生した通知を時系列で蓄積し、ベルアイコンなどから一覧できるパネル型のUIです。名称は2011年にAppleがiOS 5で導入した「Notification Center（通知センター）」に由来し、以降OSレベルの通知ハブを指す言葉として定着した後、WebアプリのUIパターン名としても広く使われるようになりました。",
    "トーストやスナックバーが「その瞬間に伝えて消える」一時的な通知であるのに対し、通知センターは「あとから読み返せる」永続的な通知の受け皿です。未読件数のバッジ、既読／未読の管理、通知種別ごとのフィルタリング、すべて既読にする一括操作などを備え、通知の見逃しを構造的に防ぎます。",
    "SaaSやコラボレーションツールではエンゲージメントの中核を担う機能であり、メンション・コメント・承認依頼といった「ユーザーの行動を促す情報」を集約します。近年はKnockやNovuなど通知基盤のSaaSも登場し、リアルタイム配信（WebSocket）・既読同期・チャネル横断（メール／プッシュ／アプリ内）をまとめて設計するのが標準的になっています。",
  ],
  features: [
    "ベルアイコン+未読件数バッジという世界共通のアイコン言語で入口を示す",
    "通知を時系列（新しい順）で一覧し、未読には視覚的なマーカーを付ける",
    "「すべて既読にする」一括操作と、個別の既読／削除操作を備える",
    "メンション・コメント・システム通知など種別ごとのタブやフィルターを持つことが多い",
    "各通知はクリックで該当コンテンツへ直接遷移できるディープリンクを持つ",
    "WebSocketなどによるリアルタイム受信で、開いている間も新着が追加される",
  ],
  merits: [
    "一時通知（トースト）を見逃しても、あとから必ず確認できる安全網になる",
    "未読バッジが再訪問の動機になり、エンゲージメントを高める",
    "通知を1か所に集約することで、メール通知への依存を減らせる",
    "種別フィルターにより、大量の通知の中から重要なものを見つけやすい",
    "既読状態をサーバーで管理すれば、デバイスをまたいで同期できる",
  ],
  demerits: [
    "既読管理・リアルタイム配信・無限スクロールなど実装コストが非常に高い",
    "通知の設計を誤ると未読バッジが溜まり続け、ユーザーが通知を無視する学習をしてしまう",
    "重要度の異なる通知が混在すると、本当に重要な通知が埋もれる",
    "通知の粒度・頻度・オプトアウト設定など、UI以外の設計課題が多い",
    "モバイルの狭い画面ではパネル型よりフルスクリーン遷移が必要になり、実装が分岐する",
  ],
  bestPractices: [
    "未読バッジは件数を表示し、99件を超えたら「99+」に丸める",
    "通知1件にはアクター（誰が）・アクション（何をした）・対象（どこで）・時刻を含める",
    "「すべて既読にする」を必ず用意する。溜まった未読はユーザーの心理的負担になる",
    "重要度の低い通知はまとめる（「3人がいいねしました」のようなグルーピング）",
    "通知ゼロの状態にはエンプティステートを設計し、不安を与えない文言を添える",
    "通知設定（種別ごとのオン／オフ）への導線をパネル内に置き、ミュートの選択肢を提供する",
  ],
  useCases: [
    "GitHub — Inbox形式の通知センターでPRレビュー依頼やメンションを集約",
    "Slack — アクティビティタブにメンション・リアクション・スレッド返信を集約",
    "Notion — 更新・メンション・リマインダーを「受信トレイ」で一元管理",
    "X（旧Twitter） — いいね・リポスト・フォローを種別タブ付きで一覧",
    "Backlog / Jira などのプロジェクト管理ツール — 課題の担当変更やコメントの通知一覧",
  ],
  accessibility: [
    "ベルボタンには aria-label=\"通知（未読5件）\" のように未読数を含めたラベルを付ける",
    "パネルには role=\"dialog\"（またはメニュー相当の適切なロール）と aria-labelledby を設定する",
    "新着通知のリアルタイム追加は aria-live=\"polite\" の領域で控えめに知らせる",
    "未読／既読を色だけで区別しない。ドットやテキスト（未読ラベル)を併用する",
    "通知リストはキーボードで巡回でき、各通知のアクション（既読化・削除）にも到達できるようにする",
    "パネルを閉じたらフォーカスをベルボタンへ戻す",
  ],
  figma: [
    "ベルアイコン+バッジをコンポーネント化し、「count: text」「hasUnread: boolean」のPropertyを持たせる",
    "通知1件の行コンポーネント（アバター・本文・時刻・未読ドット）を先に作り、パネルはそのリストで構成する",
    "未読／既読をVariantsで切り替え、背景色とドットの両方が変わるようにする",
    "パネルはAuto Layout+最大高さ設定で、Prototype時に内部スクロールを設定する",
    "通知ゼロのエンプティステートVariantも用意し、開発者に全状態を伝える",
  ],
  code: {
    html: `<!-- 通知センター（ベル+パネル） -->
<div class="notif-root">
  <button id="bell" aria-haspopup="dialog" aria-expanded="false"
          aria-label="通知（未読2件）">
    🔔<span class="badge">2</span>
  </button>

  <div id="panel" class="panel" role="dialog" aria-label="通知一覧" hidden>
    <header>
      <h2>通知</h2>
      <button type="button" id="read-all">すべて既読にする</button>
    </header>
    <ul>
      <li class="unread">
        <p><strong>田中さん</strong>があなたをメンションしました</p>
        <time>5分前</time>
      </li>
      <li class="unread">
        <p><strong>佐藤さん</strong>がコメントを追加しました</p>
        <time>1時間前</time>
      </li>
      <li>
        <p>週次レポートが生成されました</p>
        <time>昨日</time>
      </li>
    </ul>
  </div>
</div>

<script>
  const bell = document.getElementById("bell");
  const panel = document.getElementById("panel");
  bell.onclick = () => {
    const open = panel.hidden;
    panel.hidden = !open;
    bell.setAttribute("aria-expanded", String(open));
  };
</script>

<style>
  .notif-root { position: relative; display: inline-block; }
  .badge {
    position: absolute; top: -4px; right: -4px;
    background: #e11d48; color: #fff;
    font-size: 11px; border-radius: 999px;
    padding: 1px 5px;
  }
  .panel {
    position: absolute; right: 0; top: calc(100% + 8px);
    width: 320px; background: #fff;
    border: 1px solid #e5e7eb; border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
  .panel header {
    display: flex; justify-content: space-between;
    align-items: center; padding: 12px 16px;
    border-bottom: 1px solid #e5e7eb;
  }
  .panel ul { max-height: 320px; overflow-y: auto; }
  .panel li { padding: 12px 16px; border-bottom: 1px solid #f3f4f6; }
  .panel li.unread { background: #fff1f2; }
</style>`,
    tailwind: `<div class="relative inline-block">
  <button
    aria-haspopup="dialog"
    aria-expanded="true"
    aria-label="通知（未読2件）"
    class="relative rounded-full p-2 hover:bg-gray-100"
  >
    <svg class="size-5" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2
               c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
    </svg>
    <span class="absolute -right-0.5 -top-0.5 rounded-full bg-rose-600
                 px-1.5 text-[11px] font-semibold text-white">2</span>
  </button>

  <div
    role="dialog"
    aria-label="通知一覧"
    class="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border
           border-gray-200 bg-white shadow-xl"
  >
    <header class="flex items-center justify-between border-b
                   border-gray-200 px-4 py-3">
      <h2 class="text-sm font-semibold">通知</h2>
      <button class="text-xs font-medium text-rose-600 hover:underline">
        すべて既読にする
      </button>
    </header>
    <ul class="max-h-80 divide-y divide-gray-100 overflow-y-auto">
      <li class="bg-rose-50/60 px-4 py-3">
        <p class="text-sm"><b>田中さん</b>があなたをメンションしました</p>
        <time class="text-xs text-gray-500">5分前</time>
      </li>
      <li class="px-4 py-3">
        <p class="text-sm">週次レポートが生成されました</p>
        <time class="text-xs text-gray-500">昨日</time>
      </li>
    </ul>
  </div>
</div>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Bell } from "lucide-react";

type Notification = {
  id: string;
  body: string;
  time: string;
  read: boolean;
};

export function NotificationCenter({
  initial,
}: {
  initial: Notification[];
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initial);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const unread = items.filter((n) => !n.read).length;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={\`通知（未読\${unread}件）\`}
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-2 hover:bg-gray-100"
      >
        <Bell aria-hidden className="size-5" />
        {unread > 0 && (
          <span
            aria-hidden
            className="absolute -right-0.5 -top-0.5 rounded-full bg-rose-600
                       px-1.5 text-[11px] font-semibold text-white"
          >
            {unread > 99 ? "99+" : unread}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          id={panelId}
          aria-label="通知一覧"
          className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl
                     border border-gray-200 bg-white shadow-xl"
        >
          <header className="flex items-center justify-between border-b
                             border-gray-200 px-4 py-3">
            <h2 className="text-sm font-semibold">通知</h2>
            <button
              type="button"
              onClick={() =>
                setItems((prev) => prev.map((n) => ({ ...n, read: true })))
              }
              className="text-xs font-medium text-rose-600 hover:underline"
            >
              すべて既読にする
            </button>
          </header>
          <ul
            aria-live="polite"
            className="max-h-80 divide-y divide-gray-100 overflow-y-auto"
          >
            {items.length === 0 && (
              <li className="px-4 py-8 text-center text-sm text-gray-500">
                新しい通知はありません
              </li>
            )}
            {items.map((n) => (
              <li
                key={n.id}
                className={\`px-4 py-3 \${n.read ? "" : "bg-rose-50/60"}\`}
              >
                <p className="text-sm">
                  {!n.read && <span className="sr-only">未読: </span>}
                  {n.body}
                </p>
                <time className="text-xs text-gray-500">{n.time}</time>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}`,
    shadcn: `// shadcn/ui に「Notification Center」の単体コンポーネントはありません。
// Popover + Badge + ScrollArea を組み合わせて構築するのが定番です。
// npx shadcn@latest add popover badge scroll-area button
"use client";

import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function NotificationCenter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="通知（未読2件）"
        >
          <Bell aria-hidden className="size-5" />
          <Badge
            className="absolute -right-1 -top-1 h-5 min-w-5 justify-center
                       rounded-full bg-rose-600 px-1"
          >
            2
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <header className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-sm font-semibold">通知</h2>
          <Button variant="link" size="sm" className="h-auto p-0 text-xs">
            すべて既読にする
          </Button>
        </header>
        <ScrollArea className="h-80">
          <ul className="divide-y" aria-live="polite">
            <li className="bg-rose-50/60 px-4 py-3 text-sm">
              <b>田中さん</b>があなたをメンションしました
              <time className="block text-xs text-muted-foreground">
                5分前
              </time>
            </li>
            <li className="px-4 py-3 text-sm">
              週次レポートが生成されました
              <time className="block text-xs text-muted-foreground">
                昨日
              </time>
            </li>
          </ul>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}`,
  },
  related: ["toast", "activity-feed", "badge", "snackbar"],
  views: 9800,
  favorites: 340,
  collections: ["saas-ui", "admin-ui", "ai-ui"],
  gradient: "from-pink-500/15 via-rose-500/10 to-red-400/15",
  difficulty: 3,
  updatedAt: "2026-04-22",
};
