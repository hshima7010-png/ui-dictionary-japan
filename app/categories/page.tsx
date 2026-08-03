import { DynamicIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { categories, categoryGroups } from "@/data/categories";
import { getItemsByCategory } from "@/data/ui";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "カテゴリー一覧",
  description:
    "ボタン、ナビゲーション、フォーム、モーダルなど、UIパターンをカテゴリーから探せます。",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <div className="container py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">カテゴリー</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          UIパターンを{categories.length}のカテゴリーに整理しています。作りたい画面や要素から探してみてください。
        </p>
      </header>

      <div className="mt-12 space-y-14">
        {categoryGroups.map((group) => {
          const groupCategories = categories.filter((c) => c.group === group);
          if (groupCategories.length === 0) return null;
          return (
            <section key={group} aria-labelledby={`group-${group}`}>
              <Reveal>
                <h2 id={`group-${group}`} className="text-xl font-bold tracking-tight">
                  {group}
                </h2>
              </Reveal>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {groupCategories.map((cat, i) => {
                  const count = getItemsByCategory(cat.slug).length;
                  return (
                    <Reveal key={cat.slug} delay={i * 0.03}>
                      <Link
                        href={`/categories/${cat.slug}`}
                        className="card-hover group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                      >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary dark:bg-primary-900/30">
                          <DynamicIcon name={cat.icon} className="size-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-baseline gap-2">
                            <span className="font-semibold group-hover:text-primary">
                              {cat.nameJa}
                            </span>
                            <span className="text-xs text-muted-foreground">{cat.name}</span>
                          </span>
                          <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-muted-foreground">
                            {cat.description}
                          </span>
                          {count > 0 && (
                            <span className="mt-2 block text-xs font-medium text-primary">
                              {count}件のUI
                            </span>
                          )}
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
