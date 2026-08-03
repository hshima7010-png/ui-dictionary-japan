import { Badge } from "@/components/ui/badge";
import { getCategory } from "@/data/categories";
import { rankingItems } from "@/data/ui";
import { buildMetadata } from "@/lib/seo";
import { cn, formatViews } from "@/lib/utils";
import { Crown, Eye, Heart, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "人気ランキング — よく見られているUIパターン",
  description: "閲覧数をもとにした人気UIパターンのランキング。今デザイナーが調べているUIがわかります。",
  path: "/ranking",
});

const medalStyles = [
  "bg-gradient-to-br from-amber-300 to-yellow-500 text-white shadow-lift",
  "bg-gradient-to-br from-slate-300 to-slate-400 text-white shadow-card",
  "bg-gradient-to-br from-orange-300 to-amber-600 text-white shadow-card",
];

export default function RankingPage() {
  return (
    <div className="container max-w-4xl py-12 sm:py-16">
      <header>
        <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          <TrendingUp className="size-4" aria-hidden />
          Ranking
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">人気ランキング</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          閲覧数をもとにした全UIパターンのランキングです。「今、現場で調べられているUI」がひと目でわかります。
        </p>
      </header>

      <ol className="mt-10 space-y-3">
        {rankingItems.map((item, i) => {
          const cat = getCategory(item.category);
          return (
            <li key={item.slug}>
              <Link
                href={`/dictionary/${item.slug}`}
                className="card-hover group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft sm:gap-6 sm:p-5"
              >
                <span
                  aria-label={`${i + 1}位`}
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl font-bold",
                    i < 3 ? medalStyles[i] : "bg-muted text-muted-foreground",
                  )}
                >
                  {i < 3 ? <Crown className="size-5" aria-hidden /> : i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-bold group-hover:text-primary">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.nameJa}</span>
                  </span>
                  <span className="mt-0.5 line-clamp-1 block text-sm text-muted-foreground">
                    {item.description}
                  </span>
                </span>
                {cat && (
                  <Badge variant="primary" className="hidden shrink-0 sm:inline-flex">
                    {cat.nameJa}
                  </Badge>
                )}
                <span className="flex shrink-0 flex-col items-end gap-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
                  <span className="flex items-center gap-1">
                    <Eye className="size-3.5" aria-hidden />
                    {formatViews(item.views)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="size-3.5" aria-hidden />
                    {formatViews(item.favorites)}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
