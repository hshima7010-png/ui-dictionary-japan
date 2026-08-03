import { getUIItem, rankingItems, uiItems } from "@/data/ui";
import type { UIItem } from "@/types/ui";

/**
 * UIアイテム取得サービス。
 * モック実装：ローカルデータを返す。
 *
 * TODO(supabase): Prisma実装に差し替え
 *   return prisma.uIItem.findMany({
 *     where: { status: "PUBLISHED" },
 *     include: { category: true, tags: { include: { tag: true } } },
 *   });
 */
export async function listUIItems(): Promise<UIItem[]> {
  return uiItems;
}

export async function findUIItem(slug: string): Promise<UIItem | undefined> {
  return getUIItem(slug);
}

export async function listRanking(limit = 30): Promise<UIItem[]> {
  // TODO(supabase): v_ranking_30d ビューを参照して直近30日の実閲覧数で並べる
  return rankingItems.slice(0, limit);
}

/**
 * 閲覧数のインクリメント。
 * TODO(supabase): view_logs へ INSERT（anonHashは日次ソルト付きハッシュ）
 */
export async function recordView(_slug: string): Promise<void> {
  // モックでは何もしない（クライアント側で履歴のみ記録）
}
