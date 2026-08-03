/**
 * UI Dictionary Japan — Core domain types
 */

export type CodeLanguage =
  | "html"
  | "tailwind"
  | "react"
  | "nextjs"
  | "shadcn"
  | "vue"
  | "svelte"
  | "flutter"
  | "swiftui"
  | "compose";

export const CODE_LANGUAGE_LABELS: Record<CodeLanguage, string> = {
  html: "HTML",
  tailwind: "Tailwind",
  react: "React",
  nextjs: "Next.js",
  shadcn: "shadcn/ui",
  vue: "Vue",
  svelte: "Svelte",
  flutter: "Flutter",
  swiftui: "SwiftUI",
  compose: "Compose",
};

export interface CodeSnippets {
  html?: string;
  tailwind?: string;
  react?: string;
  nextjs?: string;
  shadcn?: string;
  vue?: string;
  svelte?: string;
  flutter?: string;
  swiftui?: string;
  compose?: string;
}

export interface UIItem {
  /** URL slug (kebab-case, English) */
  slug: string;
  /** English canonical name e.g. "Accordion" */
  name: string;
  /** Japanese name e.g. "アコーディオン" */
  nameJa: string;
  /** One-line description (~60 chars, used in cards & meta description) */
  description: string;
  /** Category slug */
  category: string;
  /** Tag slugs */
  tags: string[];
  /**
   * Natural-language aliases for AI search.
   * e.g. ["下から出てくるメニュー", "スワイプで閉じるパネル"]
   */
  aliases: string[];
  /** ## UIとは？ — 2〜4 paragraphs */
  whatIs: string[];
  /** ## 特徴 */
  features: string[];
  /** ## メリット */
  merits: string[];
  /** ## デメリット */
  demerits: string[];
  /** ## ベストプラクティス */
  bestPractices: string[];
  /** ## 使用例 — 実在サービスでの使われ方 */
  useCases: string[];
  /** ## アクセシビリティ */
  accessibility: string[];
  /** ## Figma — Figmaでの作り方Tips */
  figma: string[];
  /** ## 実装コード */
  code: CodeSnippets;
  /** Related UI slugs */
  related: string[];
  /** Mock popularity score (views) — drives ranking */
  views: number;
  /** Mock favorites count */
  favorites: number;
  /** Collection slugs this item belongs to */
  collections?: string[];
  /** Preview card gradient (tailwind classes) */
  gradient?: string;
  /** Difficulty 1-3 */
  difficulty?: 1 | 2 | 3;
  /** ISO date */
  updatedAt: string;
}

export interface Category {
  slug: string;
  name: string;
  nameJa: string;
  description: string;
  icon: string; // lucide icon name
  group: "基本要素" | "ナビゲーション" | "オーバーレイ" | "データ表示" | "フィードバック" | "ページ・セクション" | "業種・特化";
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  gradient: string;
  icon: string;
  itemSlugs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: string;
  tags: string[];
  content: { heading: string; body: string[] }[];
  relatedItems: string[];
}
