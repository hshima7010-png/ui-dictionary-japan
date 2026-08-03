"use client";

import { useSearch } from "@/components/search/search-dialog";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenText, Heart, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/dictionary", label: "辞典" },
  { href: "/categories", label: "カテゴリー" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/collections", label: "コレクション" },
  { href: "/blog", label: "ブログ" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const { open } = useSearch();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/60">
      <nav
        aria-label="グローバルナビゲーション"
        className="container flex h-16 items-center justify-between gap-4"
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 font-bold">
          <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-soft">
            <BookOpenText className="size-4" aria-hidden />
          </span>
          <span className="hidden text-[15px] tracking-tight sm:block">
            UI Dictionary <span className="gradient-text">Japan</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                  pathname.startsWith(l.href)
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={open}
            aria-label="UIを検索（⌘K）"
            className="flex h-9 items-center gap-2 rounded-xl border border-border bg-card px-3 text-sm text-muted-foreground shadow-soft transition-all hover:border-primary/40 hover:text-foreground"
          >
            <Search className="size-4" aria-hidden />
            <span className="hidden md:block">検索...</span>
            <kbd className="hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] md:block">
              ⌘K
            </kbd>
          </button>
          <Link
            href="/favorites"
            aria-label="お気に入り"
            className="inline-flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Heart className="size-4" aria-hidden />
          </Link>
          <ThemeToggle />
          <Link
            href="/submit"
            className="hidden h-9 items-center rounded-xl bg-primary px-4 text-sm font-medium text-white shadow-soft transition-all hover:bg-primary-700 hover:shadow-glow sm:inline-flex"
          >
            UIを投稿
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/60 lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-xl px-4 py-3 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/submit"
                  className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center font-medium text-white"
                >
                  UIを投稿
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
