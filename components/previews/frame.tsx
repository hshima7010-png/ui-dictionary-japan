import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * UIプレビューの共通描画枠とミニ部品。
 *
 * 各プレビューは 260×144px の論理サイズ内に描き、PreviewFrame が
 * カード用（等倍）と詳細ページ用（拡大）にスケールする。
 * 色は必ずデザイントークン（--card / --border / primary など）経由で指定し、
 * ライト・ダーク両テーマに自動追従させる。
 * 装飾要素のため aria-hidden と pointer-events-none で支援技術・操作から除外する。
 */

/** 全プレビュー共通の論理サイズ */
export const PREVIEW_WIDTH = 260;
export const PREVIEW_HEIGHT = 144;

export type PreviewSize = "card" | "hero";

const DEFAULT_GRADIENT = "from-blue-500/15 via-indigo-500/10 to-violet-500/15";

export function PreviewFrame({
  children,
  gradient,
  size = "card",
  className,
}: {
  children: ReactNode;
  /** UIItem.gradient — 背景にごく薄く敷いて既存の色の個性を残す */
  gradient?: string;
  size?: PreviewSize;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-muted/60",
        size === "card" ? "h-44" : "h-64 sm:h-80",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-40",
          gradient ?? DEFAULT_GRADIENT,
        )}
      />
      <div aria-hidden className="preview-dots absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none relative shrink-0"
        style={{
          width: PREVIEW_WIDTH,
          height: PREVIEW_HEIGHT,
          transform: `scale(${size === "card" ? 1 : 1.6})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ミニ部品 — 100件のプレビューで見た目を揃えるための共通パーツ          */
/* ------------------------------------------------------------------ */

/** 浮いたパネル（ダイアログ・カード・ドロップダウンの土台） */
export function Surface({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** ダミーのテキスト行 */
export function Line({
  w = "w-full",
  tone = "muted",
  className,
}: {
  w?: string;
  tone?: "muted" | "strong";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block h-1.5 rounded-full",
        tone === "strong" ? "bg-foreground/40" : "bg-foreground/15",
        w,
        className,
      )}
    />
  );
}

/** ミニボタン */
export function MiniButton({
  children,
  tone = "primary",
  className,
}: {
  children?: ReactNode;
  tone?: "primary" | "outline" | "soft" | "ghost";
  className?: string;
}) {
  const tones = {
    primary: "bg-primary text-primary-foreground",
    outline: "border border-border bg-card text-foreground/70",
    soft: "bg-foreground/10 text-foreground/70",
    ghost: "text-primary",
  } as const;

  return (
    <span
      className={cn(
        "flex items-center justify-center gap-1 rounded-md px-2 py-1 text-[9px] font-semibold leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** ミニ入力欄 */
export function MiniField({
  children,
  state = "idle",
  className,
}: {
  children?: ReactNode;
  state?: "idle" | "focus" | "error" | "success";
  className?: string;
}) {
  const states = {
    idle: "border-border",
    focus: "border-primary ring-2 ring-primary/20",
    error: "border-red-500/70 ring-2 ring-red-500/15",
    success: "border-emerald-500/70",
  } as const;

  return (
    <span
      className={cn(
        "flex h-6 items-center gap-1.5 rounded-md border bg-card px-2 text-[9px] leading-none text-foreground/45",
        states[state],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** ミニラベル・チップ */
export function Chip({
  children,
  tone = "soft",
  className,
}: {
  children?: ReactNode;
  tone?: "soft" | "primary" | "danger";
  className?: string;
}) {
  const tones = {
    soft: "bg-foreground/10 text-foreground/60",
    primary: "bg-primary/15 text-primary",
    danger: "bg-red-500/15 text-red-500",
  } as const;

  return (
    <span
      className={cn(
        "rounded-full px-1.5 py-0.5 text-[8px] font-semibold leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** 丸いアバター代替 */
export function Avatar({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "block shrink-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40",
        className,
      )}
    />
  );
}
