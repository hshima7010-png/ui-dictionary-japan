import { Badge } from "@/components/ui/badge";
import { rankingItems, uiItems } from "@/data/ui";
import { buildMetadata } from "@/lib/seo";
import { formatViews } from "@/lib/utils";
import {
  BookOpenText,
  Eye,
  Heart,
  Inbox,
  ShieldAlert,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata = {
  ...buildMetadata({
    title: "管理画面",
    description: "UI Dictionary Japan 管理画面（デモ）",
    path: "/admin",
  }),
  robots: { index: false, follow: false },
};

/** モックの投稿キュー */
const mockSubmissions = [
  { id: "sub_01", title: "Notionのサイドピーク", category: "モーダル", email: "d***@example.com", status: "審査待ち", date: "2026-07-30" },
  { id: "sub_02", title: "楽天のメガメニュー", category: "ナビゲーション", email: "k***@example.jp", status: "審査待ち", date: "2026-07-29" },
  { id: "sub_03", title: "SmartHRのステッパー", category: "オンボーディング", email: "m***@example.com", status: "承認済み", date: "2026-07-27" },
  { id: "sub_04", title: "メルカリの下部ナビ", category: "ナビゲーション", email: "t***@example.jp", status: "差し戻し", date: "2026-07-25" },
];

export default function AdminPage() {
  const totalViews = uiItems.reduce((a, i) => a + i.views, 0);
  const totalFavs = uiItems.reduce((a, i) => a + i.favorites, 0);

  const stats = [
    { icon: BookOpenText, label: "公開中のUI", value: String(uiItems.length), delta: "+3 今月" },
    { icon: Eye, label: "総閲覧数", value: formatViews(totalViews), delta: "+12.4% 前月比" },
    { icon: Heart, label: "お気に入り合計", value: formatViews(totalFavs), delta: "+8.1% 前月比" },
    { icon: Users, label: "登録ユーザー", value: "2,418", delta: "+96 今月" },
  ];

  return (
    <div className="container py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">管理画面</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            UI・投稿・ユーザーの管理（このページはデモです。本番では NextAuth の admin ロールで保護してください）
          </p>
        </div>
        <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
          <ShieldAlert className="size-3.5 text-amber-500" aria-hidden />
          デモモード — 認証未接続
        </Badge>
      </div>

      {/* 統計 */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <s.icon className="size-4 text-primary" aria-hidden />
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* 投稿キュー */}
        <section aria-labelledby="queue-heading" className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 id="queue-heading" className="flex items-center gap-2 font-bold">
              <Inbox className="size-4 text-primary" aria-hidden />
              投稿の審査キュー
            </h2>
            <Badge variant="primary">{mockSubmissions.filter((s) => s.status === "審査待ち").length}件 審査待ち</Badge>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th scope="col" className="px-6 py-3 font-medium">タイトル</th>
                  <th scope="col" className="px-4 py-3 font-medium">カテゴリ</th>
                  <th scope="col" className="px-4 py-3 font-medium">投稿者</th>
                  <th scope="col" className="px-4 py-3 font-medium">日付</th>
                  <th scope="col" className="px-6 py-3 text-right font-medium">状態</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockSubmissions.map((s) => (
                  <tr key={s.id} className="transition-colors hover:bg-muted/50">
                    <td className="px-6 py-3.5 font-medium">{s.title}</td>
                    <td className="px-4 py-3.5 text-muted-foreground">{s.category}</td>
                    <td className="px-4 py-3.5 text-muted-foreground">{s.email}</td>
                    <td className="px-4 py-3.5 text-muted-foreground">{s.date}</td>
                    <td className="px-6 py-3.5 text-right">
                      <Badge
                        variant={
                          s.status === "承認済み" ? "success" : s.status === "審査待ち" ? "primary" : "default"
                        }
                      >
                        {s.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 人気UI */}
        <section aria-labelledby="top-heading" className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 id="top-heading" className="flex items-center gap-2 font-bold">
            <TrendingUp className="size-4 text-primary" aria-hidden />
            閲覧数トップ5
          </h2>
          <ol className="mt-5 space-y-4">
            {rankingItems.slice(0, 5).map((item, i) => (
              <li key={item.slug} className="flex items-center gap-3">
                <span className="w-5 text-sm font-bold text-muted-foreground">{i + 1}</span>
                <span className="flex-1 truncate text-sm font-medium">{item.name}</span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted" aria-hidden>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${Math.round((item.views / rankingItems[0].views) * 100)}%` }}
                  />
                </div>
                <span className="w-14 text-right text-xs text-muted-foreground">
                  {formatViews(item.views)}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
