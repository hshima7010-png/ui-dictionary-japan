import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn/ui-style class combiner */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 12,345 → "1.2万" style Japanese number formatting */
export function formatViews(n: number): string {
  if (n >= 10000) return `${(n / 10000).toFixed(1).replace(/\.0$/, "")}万`;
  if (n >= 1000) return n.toLocaleString("ja-JP");
  return String(n);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export const SITE = {
  name: "UI Dictionary Japan",
  tagline: "UIを探す・学ぶ・実装する",
  description:
    "「このUIなんて名前？」を一瞬で解決。意味・使い方・メリット・デメリットから、HTML / Tailwind / React / shadcn/ui の実装コードまで掲載した日本最大級のUIライブラリ。",
  url: "https://ui-dictionary.jp",
  ogImage: "/og.png",
  twitter: "@uidictionaryjp",
} as const;
