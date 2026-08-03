import { DynamicIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { collections } from "@/data/collections";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "コレクション — テーマ別UIまとめ",
  description:
    "Apple風、Shopify風、SaaS、管理画面など、テーマ別にUIパターンをまとめたコレクション一覧。",
  path: "/collections",
});

export default function CollectionsPage() {
  return (
    <div className="container py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">コレクション</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          「Apple風のサイトを作りたい」「管理画面のUIをまとめて見たい」——目的別にUIパターンをキュレーションしました。
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((col, i) => (
          <Reveal key={col.slug} delay={(i % 3) * 0.05}>
            <Link
              href={`/collections/${col.slug}`}
              className={`card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${col.gradient} bg-card p-7 shadow-soft`}
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-card/90 text-primary shadow-soft backdrop-blur">
                <DynamicIcon name={col.icon} className="size-6" />
              </span>
              <h2 className="mt-5 text-lg font-bold group-hover:text-primary">{col.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {col.description}
              </p>
              <p className="mt-5 flex items-center gap-1 text-sm font-medium text-primary">
                {col.itemSlugs.length} UIパターンを見る
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
