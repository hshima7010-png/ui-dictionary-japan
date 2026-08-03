"use client";

import { useSearch } from "@/components/search/search-dialog";
import { naturalExamples } from "@/lib/search";
import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const placeholders = [
  "検索例：Accordion",
  "検索例：Bottom Sheet",
  "検索例：Command Palette",
  "検索例：Carousel",
  "検索例：Timeline",
  "検索例：Floating Action Button",
  "「下から出てくるメニュー」でもOK",
];

export function HeroSearch() {
  const { open } = useSearch();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % placeholders.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* 巨大検索バー */}
      <motion.button
        type="button"
        onClick={open}
        aria-label="UIを検索する"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="group flex h-16 w-full items-center gap-4 rounded-2xl border border-border bg-card px-5 text-left shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow sm:h-[72px] sm:px-6"
      >
        <Search className="size-5 shrink-0 text-primary sm:size-6" aria-hidden />
        <span className="relative h-6 flex-1 overflow-hidden text-[15px] text-muted-foreground sm:text-lg">
          {placeholders.map((p, i) => (
            <span
              key={p}
              aria-hidden={i !== index}
              className="absolute inset-0 transition-all duration-500"
              style={{
                opacity: i === index ? 1 : 0,
                transform: `translateY(${i === index ? 0 : 12}px)`,
              }}
            >
              {p}
            </span>
          ))}
        </span>
        <kbd className="hidden shrink-0 rounded-lg border border-border bg-muted px-2.5 py-1.5 font-mono text-xs text-muted-foreground sm:block">
          ⌘K
        </kbd>
      </motion.button>

      {/* 自然言語検索の例 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-2"
      >
        <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" aria-hidden />
          AI検索：
        </span>
        {naturalExamples.slice(0, 3).map((ex) => (
          <button
            key={ex.query}
            type="button"
            onClick={open}
            className="group flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground shadow-soft transition-all hover:border-primary/40 hover:text-foreground"
          >
            「{ex.query}」
            <ArrowRight className="size-3 text-primary transition-transform group-hover:translate-x-0.5" aria-hidden />
            <span className="font-semibold text-primary">{ex.answer}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
