import { searchUI } from "@/lib/search";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

/**
 * GET /api/search?q=下から出てくるメニュー
 * リアルタイム検索API（外部クライアント・将来のモバイルアプリ用）
 */
export function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  const limit = Math.min(Number(req.nextUrl.searchParams.get("limit") ?? 8), 20);

  const results = searchUI(q, limit).map((r) => ({
    slug: r.item.slug,
    name: r.item.name,
    nameJa: r.item.nameJa,
    description: r.item.description,
    category: r.item.category,
    matchedBy: r.matchedBy,
    matchedAlias: r.matchedAlias ?? null,
    url: `/dictionary/${r.item.slug}`,
  }));

  return NextResponse.json(
    { query: q, count: results.length, results },
    { headers: { "Cache-Control": "public, max-age=60, s-maxage=300" } },
  );
}
