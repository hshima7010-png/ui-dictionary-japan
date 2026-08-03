import { UIItemCard } from "@/components/dictionary/ui-item-card";
import { DynamicIcon } from "@/components/ui/icon";
import { collections, getCollection } from "@/data/collections";
import { getUIItem } from "@/data/ui";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = getCollection(slug);
  if (!col) return {};
  return buildMetadata({
    title: `${col.name} — UIコレクション`,
    description: col.description,
    path: `/collections/${col.slug}`,
  });
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = getCollection(slug);
  if (!col) notFound();

  const items = col.itemSlugs
    .map((s) => getUIItem(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "コレクション", path: "/collections" },
    { name: col.name, path: `/collections/${col.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbJsonLd(crumbs)) }}
      />
      <header className={`relative overflow-hidden border-b border-border bg-gradient-to-br ${col.gradient}`}>
        <div className="container py-12 sm:py-16">
          <nav aria-label="パンくずリスト">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="font-medium text-foreground">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.path} className="hover:text-foreground">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-8 flex items-start gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-card/90 text-primary shadow-soft backdrop-blur">
              <DynamicIcon name={col.icon} className="size-6" />
            </span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{col.name}</h1>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {col.longDescription}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-12">
        <p className="text-sm text-muted-foreground">{items.length}件のUIパターン</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <UIItemCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
