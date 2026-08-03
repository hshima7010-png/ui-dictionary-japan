import {
  Avatar,
  Chip,
  Line,
  MiniButton,
  Surface,
} from "@/components/previews/frame";
import {
  ArrowDown,
  Bell,
  CheckCircle2,
  Inbox,
  Info,
  X,
} from "lucide-react";

/** フィードバック系のプレビュー。 */

export function ToastPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[126px] w-[204px] overflow-hidden rounded-lg border border-border bg-card">
        <span className="block space-y-1.5 p-2.5 opacity-45">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-3/4" />
          <Line w="w-2/3" />
        </span>
        {/* 右上に重なるトースト — ホバーで少し出てくる */}
        <span className="absolute right-2 top-2 block w-[124px] space-y-1">
          <Surface className="flex items-start gap-1.5 p-1.5 shadow-lift transition-transform duration-300 group-hover:-translate-x-1">
            <CheckCircle2 className="mt-px size-3 shrink-0 text-emerald-500" />
            <span className="min-w-0 flex-1">
              <span className="block text-[7.5px] font-bold text-foreground/85">
                保存しました
              </span>
              <span className="block text-[7px] text-foreground/45">
                変更内容が反映されました
              </span>
            </span>
            <X className="size-2 shrink-0 text-foreground/35" />
          </Surface>
          {/* 積み重なった2枚目 */}
          <Surface className="mx-1 flex items-center gap-1.5 p-1.5 opacity-70">
            <Info className="size-2.5 shrink-0 text-primary" />
            <span className="text-[7px] text-foreground/60">
              同期が完了しました
            </span>
          </Surface>
        </span>
      </div>
    </div>
  );
}

export function SnackbarPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[126px] w-[196px] overflow-hidden rounded-lg border border-border bg-card">
        <span className="block space-y-1.5 p-2.5 opacity-45">
          <Line w="w-2/5" tone="strong" />
          <Line w="w-full" />
          <Line w="w-3/4" />
        </span>
        {/* 画面下部の帯 — ホバーでせり上がる */}
        <span className="absolute inset-x-2 bottom-2 flex items-center gap-2 rounded-md bg-dark px-2 py-1.5 shadow-lift transition-transform duration-300 group-hover:-translate-y-1">
          <span className="flex-1 text-[8px] text-white">
            メッセージを削除しました
          </span>
          <span className="shrink-0 text-[8px] font-bold uppercase tracking-wide text-primary-300">
            元に戻す
          </span>
        </span>
      </div>
    </div>
  );
}

export function BannerPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[212px] overflow-hidden">
        {/* 帯状に常駐する通知 */}
        <span className="flex items-start gap-1.5 border-l-2 border-amber-500 bg-amber-500/10 px-2 py-1.5">
          <Info className="mt-px size-3 shrink-0 text-amber-500" />
          <span className="min-w-0 flex-1">
            <span className="block text-[8px] font-bold text-foreground/85">
              お支払い方法の更新が必要です
            </span>
            <span className="block text-[7px] leading-snug text-foreground/50">
              カードの有効期限が3日後に切れます
            </span>
          </span>
          <span className="shrink-0 text-[7.5px] font-bold text-primary">
            更新
          </span>
          <X className="size-2.5 shrink-0 text-foreground/35" />
        </span>
        <span className="block space-y-1.5 p-2.5">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-4/5" />
          <Line w="w-2/3" />
        </span>
      </Surface>
    </div>
  );
}

export function NotificationCenterPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      {/* ベル + 未読バッジ */}
      <span className="relative flex size-6 items-center justify-center rounded-md border border-border bg-card text-foreground/60 shadow-soft">
        <Bell className="size-3" />
        <span className="absolute -right-1 -top-1 flex size-3 items-center justify-center rounded-full bg-red-500 text-[6px] font-bold text-white">
          3
        </span>
      </span>
      <Surface className="mt-1.5 w-[164px] p-1 transition-transform duration-300 group-hover:translate-y-0.5">
        <span className="flex items-center justify-between px-1.5 py-1">
          <span className="text-[8px] font-bold text-foreground/80">通知</span>
          <span className="text-[7px] text-primary">すべて既読にする</span>
        </span>
        {[
          { n: "佐藤さん", a: "がコメントしました", unread: true },
          { n: "鈴木さん", a: "があなたをメンション", unread: true },
          { n: "デプロイ", a: "が完了しました", unread: false },
        ].map((r) => (
          <span
            key={r.n}
            className={`flex items-start gap-1.5 rounded px-1.5 py-1 ${
              r.unread ? "bg-primary/5" : ""
            }`}
          >
            <Avatar className="mt-px size-4" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[7.5px] text-foreground/70">
                <span className="font-bold text-foreground/85">{r.n}</span>
                {r.a}
              </span>
              <span className="block text-[6.5px] text-foreground/35">
                5分前
              </span>
            </span>
            {r.unread && (
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
            )}
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function ProgressBarPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[188px] space-y-3 p-3">
        <span className="block space-y-1.5">
          <span className="flex items-center justify-between text-[8px]">
            <span className="font-medium text-foreground/65">
              アップロード中
            </span>
            <span className="font-bold text-foreground/85">72%</span>
          </span>
          <span className="block h-1.5 overflow-hidden rounded-full bg-foreground/15">
            <span className="block h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-accent" />
          </span>
        </span>
        {/* 不定（indeterminate） */}
        <span className="block space-y-1.5">
          <span className="block text-[8px] font-medium text-foreground/65">
            処理中（完了時間は不明）
          </span>
          <span className="relative block h-1.5 overflow-hidden rounded-full bg-foreground/15">
            <span className="absolute inset-y-0 left-0 w-1/3 animate-marquee rounded-full bg-primary/70" />
          </span>
        </span>
        {/* 円形 */}
        <span className="flex items-center gap-2">
          <span className="size-5 rounded-full border-2 border-foreground/15 border-t-primary" />
          <span className="text-[7.5px] text-foreground/45">
            円形バリエーション
          </span>
        </span>
      </Surface>
    </div>
  );
}

export function SkeletonPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[188px] space-y-2 p-3">
        <span className="flex items-center gap-2">
          <span className="relative size-7 shrink-0 overflow-hidden rounded-full bg-foreground/10">
            <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
          </span>
          <span className="flex-1 space-y-1.5">
            <span className="relative block h-2 overflow-hidden rounded-full bg-foreground/10">
              <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </span>
            <span className="relative block h-2 w-2/3 overflow-hidden rounded-full bg-foreground/10">
              <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </span>
          </span>
        </span>
        <span className="relative block h-12 overflow-hidden rounded-md bg-foreground/10">
          <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </span>
      </Surface>
    </div>
  );
}

export function EmptyStatePreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="flex w-[188px] flex-col items-center gap-2 px-3 py-4 text-center">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary/10">
          <Inbox className="size-4 text-primary/70" />
        </span>
        <span className="block text-[9.5px] font-bold text-foreground/85">
          まだプロジェクトがありません
        </span>
        <span className="block text-[7.5px] leading-snug text-foreground/45">
          最初のプロジェクトを作成すると、ここに一覧が表示されます
        </span>
        <MiniButton
          tone="primary"
          className="mt-0.5 px-2.5 py-1 transition-transform duration-300 group-hover:scale-105"
        >
          ＋ 新規プロジェクト
        </MiniButton>
      </Surface>
    </div>
  );
}

export function ErrorPagePreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="flex w-[196px] flex-col items-center gap-1.5 px-3 py-3.5 text-center">
        <span className="gradient-text text-[26px] font-bold leading-none">
          404
        </span>
        <span className="block text-[9px] font-bold text-foreground/85">
          ページが見つかりません
        </span>
        <span className="block text-[7.5px] leading-snug text-foreground/45">
          URLが変更されたか、削除された可能性があります
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <MiniButton tone="primary" className="px-2 py-1">
            トップへ戻る
          </MiniButton>
          <MiniButton tone="outline" className="px-2 py-1">
            検索する
          </MiniButton>
        </span>
      </Surface>
    </div>
  );
}

export function PullToRefreshPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      {/* スマホ枠 */}
      <div className="relative h-[136px] w-[84px] overflow-hidden rounded-xl border-2 border-foreground/20 bg-card">
        {/* 引っ張って現れるインジケーター */}
        <span className="absolute inset-x-0 top-1 flex flex-col items-center gap-0.5">
          <span className="flex size-5 items-center justify-center rounded-full bg-card shadow-card">
            <ArrowDown className="size-2.5 animate-bounce text-primary" />
          </span>
          <span className="text-[6px] text-foreground/45">離して更新</span>
        </span>
        {/* 引き下げられたコンテンツ */}
        <span className="absolute inset-x-0 top-[34px] block space-y-1.5 px-1.5 transition-transform duration-300 group-hover:translate-y-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex items-center gap-1">
              <Avatar className="size-4" />
              <span className="flex-1 space-y-1">
                <Line w="w-full" tone="strong" />
                <Line w="w-2/3" />
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function TypingIndicatorPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <span className="w-[188px] space-y-1.5">
        {/* 相手の直前の発言 */}
        <Surface className="w-2/3 space-y-1 rounded-bl-sm p-1.5">
          <Line w="w-full" />
          <Line w="w-3/5" />
        </Surface>
        {/* 入力中インジケーター */}
        <span className="flex items-center gap-1.5">
          <Avatar className="size-4 shrink-0" />
          <Surface className="flex items-center gap-1 rounded-bl-sm px-2 py-1.5">
            {[0, 160, 320].map((d) => (
              <span
                key={d}
                className="size-1.5 animate-bounce rounded-full bg-foreground/35"
                style={{ animationDelay: `${d}ms` }}
              />
            ))}
          </Surface>
        </span>
      </span>
      <span className="text-[7px] text-foreground/35">
        AIが入力中です…
      </span>
      <span className="w-[188px]">
        <Chip>aria-live=&quot;polite&quot; で読み上げる</Chip>
      </span>
    </div>
  );
}
