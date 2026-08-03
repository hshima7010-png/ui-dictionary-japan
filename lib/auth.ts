/**
 * NextAuth 設定（Supabase接続時に有効化）
 *
 * 1. `npm install next-auth@beta @auth/prisma-adapter`
 * 2. `.env` に AUTH_SECRET / AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET を設定
 * 3. 下のコメントを解除し、app/api/auth/[...nextauth]/route.ts を作成:
 *
 *    import { handlers } from "@/lib/auth";
 *    export const { GET, POST } = handlers;
 *
 * モック環境では認証なしで動作するため、このファイルは設定の雛形のみ提供します。
 */

// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";
//
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [Google],
//   callbacks: {
//     session({ session, user }) {
//       session.user.id = user.id;
//       return session;
//     },
//   },
// });

export const AUTH_ENABLED = false as const;
