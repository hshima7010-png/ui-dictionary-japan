/**
 * Prisma クライアントのシングルトン（Supabase接続時に有効化）
 *
 * 1. `.env` に DATABASE_URL / DIRECT_URL を設定
 * 2. `npm run db:generate && npm run db:push`
 * 3. 下のコメントを解除
 *
 * モック環境ではDBを使用しないため、雛形のみ提供します。
 */

// import { PrismaClient } from "@prisma/client";
//
// const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
//
// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === "development" ? ["query", "warn"] : ["error"],
//   });
//
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export {};
