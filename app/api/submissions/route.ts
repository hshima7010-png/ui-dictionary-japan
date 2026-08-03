import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/submissions — UI投稿の受付
 *
 * モック実装：バリデーションのみ行い、成功レスポンスを返します。
 * Supabase接続時は services/submissions.ts 経由で
 * submissions テーブルに INSERT し、審査キューに載せてください。
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const errors: string[] = [];
  const title = String(body.title ?? "").trim();
  const url = String(body.url ?? "").trim();
  const description = String(body.description ?? "").trim();
  const email = String(body.email ?? "").trim();
  const category = String(body.category ?? "").trim();

  if (!title || title.length > 80) errors.push("title");
  if (!/^https?:\/\/.+/.test(url)) errors.push("url");
  if (!description || description.length > 500) errors.push("description");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push("email");
  if (!category) errors.push("category");

  if (errors.length > 0) {
    return NextResponse.json({ error: "validation_failed", fields: errors }, { status: 422 });
  }

  // TODO(supabase): ここで submissions テーブルへ INSERT する
  // await createSubmission({ title, url, description, email, category, tags });

  return NextResponse.json({ ok: true, status: "pending_review" }, { status: 201 });
}
