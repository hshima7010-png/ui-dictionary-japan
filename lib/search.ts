import type { UIItem } from "@/types/ui";
import { uiItems } from "@/data/ui";

export interface SearchResult {
  item: UIItem;
  score: number;
  /** どのフィールドでマッチしたか（UI上の説明用） */
  matchedBy: "name" | "alias" | "tag" | "description";
  /** マッチしたエイリアス（自然言語検索のとき表示する） */
  matchedAlias?: string;
}

/** ひらがな→カタカナ変換など日本語検索の正規化 */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .trim()
    // 全角英数 → 半角
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0),
    )
    // ひらがな → カタカナ
    .replace(/[ぁ-ゖ]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) + 0x60),
    )
    .replace(/\s+/g, " ");
}

/**
 * ハイブリッド検索:
 * 1. 英語名・日本語名の前方/部分一致（最優先）
 * 2. 自然言語エイリアスの部分一致（「下から出てくるメニュー」→ Bottom Sheet）
 * 3. タグ・説明文の部分一致
 */
export function searchUI(query: string, limit = 8): SearchResult[] {
  const q = normalize(query);
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const item of uiItems) {
    const name = normalize(item.name);
    const nameJa = normalize(item.nameJa);

    // 1) 名前マッチ
    if (name.startsWith(q) || nameJa.startsWith(q)) {
      results.push({ item, score: 100, matchedBy: "name" });
      continue;
    }
    if (name.includes(q) || nameJa.includes(q) || normalize(item.slug).includes(q)) {
      results.push({ item, score: 80, matchedBy: "name" });
      continue;
    }
    // 「Netflixみたいなカルーセル」のように、クエリの中にUI名が含まれるケース
    // （エイリアスの部分一致=70より弱くする: 「丸いボタン」はButtonよりRadio Buttonのエイリアスを優先）
    if (
      (name.length >= 3 && q.includes(name)) ||
      (nameJa.length >= 3 && q.includes(nameJa))
    ) {
      results.push({ item, score: 65, matchedBy: "name" });
      continue;
    }

    // 2) 自然言語エイリアス（AI検索）
    //    部分一致（強い） > bigram類似（ゆるい）の2段階でスコアリング
    let aliasScore = 0;
    let matchedAlias: string | undefined;
    for (const a of item.aliases) {
      const na = normalize(a);
      if (na.includes(q) || q.includes(na)) {
        aliasScore = 70;
        matchedAlias = a;
        break;
      }
      const overlap = overlapScore(na, q);
      if (overlap >= 0.5 && 50 + overlap * 10 > aliasScore) {
        aliasScore = 50 + overlap * 10;
        matchedAlias = a;
      }
    }
    if (matchedAlias) {
      results.push({ item, score: aliasScore, matchedBy: "alias", matchedAlias });
      continue;
    }

    // 3) タグ・説明
    if (item.tags.some((t) => normalize(t).includes(q))) {
      results.push({ item, score: 40, matchedBy: "tag" });
      continue;
    }
    if (normalize(item.description).includes(q)) {
      results.push({ item, score: 20, matchedBy: "description" });
    }
  }

  return results
    .sort((a, b) => b.score - a.score || b.item.views - a.item.views)
    .slice(0, limit);
}

/**
 * 2-gram（バイグラム）の重なり率で「Netflixみたいなカルーセル」のような
 * ゆるい自然文クエリとエイリアスの類似度を測る軽量スコア。
 */
function overlapScore(a: string, b: string): number {
  const bigrams = (s: string) => {
    const set = new Set<string>();
    for (let i = 0; i < s.length - 1; i++) set.add(s.slice(i, i + 2));
    return set;
  };
  const A = bigrams(a);
  const B = bigrams(b);
  if (A.size === 0 || B.size === 0) return 0;
  let hit = 0;
  for (const g of A) if (B.has(g)) hit++;
  return hit / Math.min(A.size, B.size);
}

/** 検索例（Heroのプレースホルダー・サジェスト用） */
export const searchExamples = [
  "Accordion",
  "Bottom Sheet",
  "Command Palette",
  "Carousel",
  "Timeline",
  "Floating Action Button",
] as const;

export const naturalExamples = [
  { query: "下から出てくるメニュー", answer: "Bottom Sheet" },
  { query: "右から出てくるパネル", answer: "Drawer" },
  { query: "Netflixみたいなカルーセル", answer: "Carousel" },
  { query: "読み込み中のちらちらするやつ", answer: "Skeleton" },
  { query: "⌘Kで開く検索", answer: "Command Palette" },
] as const;
