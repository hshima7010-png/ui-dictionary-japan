"use client";

import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { categories } from "@/data/categories";
import { uiItems } from "@/data/ui";
import { normalize, searchUI } from "@/lib/search";
import { cn } from "@/lib/utils";
import { ArrowDownWideNarrow, LayoutGrid, Rows3, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

type SortKey = "popular" | "name" | "updated";

const usedCategories = categories.filter((c) =>
  uiItems.some((i) => i.category === c.slug),
);

export function DictionaryExplorer({
  initialQuery = "",
  initialCategory = "",
}: {
  initialQuery?: string;
  initialCategory?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortKey>("popular");
  const [view, setView] = useState<"grid" | "list">("grid");

  const items = useMemo(() => {
    let list = query.trim()
      ? searchUI(query, 100).map((r) => r.item)
      : [...uiItems];

    if (category) list = list.filter((i) => i.category === category);

    if (!query.trim() || sort !== "popular") {
      list.sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "updated") return a.updatedAt < b.updatedAt ? 1 : -1;
        return b.views - a.views;
      });
    }
    return list;
  }, [query, category, sort]);

  return (
    <div>
      {/* ツールバー */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* 検索 */}
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="名前・タグ・「下から出てくるメニュー」のような説明で絞り込み"
            aria-label="UIを検索"
            className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-10 text-sm shadow-soft outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/50 focus:shadow-glow"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="検索をクリア"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted-foreground hover:bg-muted"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* ソート */}
          <label className="flex h-12 items-center gap-2 rounded-2xl border border-border bg-card px-4 text-sm shadow-soft">
            <ArrowDownWideNarrow className="size-4 text-muted-foreground" aria-hidden />
            <span className="sr-only">並び替え</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent text-sm outline-none"
            >
              <option value="popular">人気順</option>
              <option value="name">名前順</option>
              <option value="updated">更新順</option>
            </select>
          </label>
          {/* 表示切替 */}
          <div className="flex h-12 items-center gap-1 rounded-2xl border border-border bg-card p-1.5 shadow-soft" role="group" aria-label="表示形式">
            <button
              type="button"
              aria-label="グリッド表示"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
              className={cn(
                "flex h-full items-center rounded-xl px-3 transition-colors",
                view === "grid" ? "bg-muted text-foreground" : "text-muted-foreground",
              )}
            >
              <LayoutGrid className="size-4" />
            </button>
            <button
              type="button"
              aria-label="リスト表示"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
              className={cn(
                "flex h-full items-center rounded-xl px-3 transition-colors",
                view === "list" ? "bg-muted text-foreground" : "text-muted-foreground",
              )}
            >
              <Rows3 className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* カテゴリーフィルター */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="カテゴリーで絞り込み">
        <FilterChip active={category === ""} onClick={() => setCategory("")}>
          すべて
        </FilterChip>
        {usedCategories.map((c) => (
          <FilterChip
            key={c.slug}
            active={category === c.slug}
            onClick={() => setCategory(category === c.slug ? "" : c.slug)}
          >
            {c.nameJa}
          </FilterChip>
        ))}
      </div>

      {/* 件数 */}
      <p className="mt-4 text-sm text-muted-foreground" role="status">
        {items.length}件のUIパターン
        {normalize(query) && `（「${query}」で検索）`}
      </p>

      {/* 一覧 */}
      {items.length === 0 ? (
        <div className="mt-12 flex flex-col items-center rounded-3xl border border-dashed border-border py-20 text-center">
          <Search className="size-8 text-muted-foreground/50" aria-hidden />
          <p className="mt-4 font-semibold">一致するUIが見つかりませんでした</p>
          <p className="mt-1 text-sm text-muted-foreground">
            キーワードを変えるか、「下から出てくるメニュー」のような説明で試してみてください
          </p>
        </div>
      ) : view === "grid" ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <UIItemCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-6 grid gap-3">
          {items.map((item) => (
            <UIItemCard key={item.slug} item={item} variant="compact" />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
        active
          ? "border-primary bg-primary text-white shadow-soft"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
