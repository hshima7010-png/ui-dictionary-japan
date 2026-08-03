import { SITE } from "@/lib/utils";
import { BookOpenText } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "コンテンツ",
    links: [
      { href: "/dictionary", label: "UI辞典" },
      { href: "/categories", label: "カテゴリー" },
      { href: "/gallery", label: "ギャラリー" },
      { href: "/collections", label: "コレクション" },
      { href: "/ranking", label: "人気ランキング" },
    ],
  },
  {
    title: "参加する",
    links: [
      { href: "/submit", label: "UIを投稿" },
      { href: "/favorites", label: "お気に入り" },
      { href: "/blog", label: "ブログ" },
    ],
  },
  {
    title: "サイト情報",
    links: [
      { href: "/about", label: "About" },
      { href: "/about#terms", label: "利用規約" },
      { href: "/about#privacy", label: "プライバシーポリシー" },
      { href: "/rss.xml", label: "RSS" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-bold">
            <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <BookOpenText className="size-4" aria-hidden />
            </span>
            UI Dictionary Japan
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {SITE.tagline}。「このUIなんて名前？」を一瞬で解決する、日本最大級のUIライブラリ。
          </p>
        </div>
        {footerLinks.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-semibold">{group.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 UI Dictionary Japan. All rights reserved.</p>
          <p>Built with Next.js 15 / TailwindCSS / Supabase</p>
        </div>
      </div>
    </footer>
  );
}
