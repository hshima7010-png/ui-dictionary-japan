import { DictionaryExplorer } from "@/components/dictionary/dictionary-explorer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "UI辞典 — 全UIパターン一覧",
  description:
    "Accordion、Bottom Sheet、Command PaletteなどのUIパターンを名前・カテゴリ・自然な日本語で検索。意味から実装コードまで解説します。",
  path: "/dictionary",
});

export default async function DictionaryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { q, category } = await searchParams;

  return (
    <div className="container py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">UI辞典</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          すべてのUIパターンを名前・カテゴリ・タグから探せます。名前が分からないときは「下から出てくるメニュー」のような説明でもOK。
        </p>
      </header>
      <div className="mt-10">
        <DictionaryExplorer initialQuery={q ?? ""} initialCategory={category ?? ""} />
      </div>
    </div>
  );
}
