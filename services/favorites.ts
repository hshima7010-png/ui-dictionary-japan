/**
 * お気に入りサービス。
 *
 * モック環境ではクライアントの localStorage（hooks/use-favorites.ts）を使用。
 * Supabase + NextAuth 接続時は以下の実装に切り替え、
 * use-favorites.ts 内の localStorage 呼び出しをこのAPIのfetchに置き換えます。
 *
 * TODO(supabase):
 *   export async function listFavorites(userId: string) {
 *     return prisma.favorite.findMany({ where: { userId }, include: { item: true } });
 *   }
 *   export async function toggleFavorite(userId: string, itemId: string) {
 *     const existing = await prisma.favorite.findUnique({
 *       where: { userId_itemId: { userId, itemId } },
 *     });
 *     if (existing) {
 *       await prisma.favorite.delete({ where: { userId_itemId: { userId, itemId } } });
 *       return { favorited: false };
 *     }
 *     await prisma.favorite.create({ data: { userId, itemId } });
 *     return { favorited: true };
 *   }
 */
export {};
