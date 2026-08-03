"use client";

import { getCategory } from "@/data/categories";
import { naturalExamples, searchUI, type SearchResult } from "@/lib/search";
import { cn, formatViews } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye, Search, Sparkles, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */
const SearchContext = createContext<{ open: () => void }>({ open: () => {} });
export const useSearch = () => useContext(SearchContext);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);

  // ⌘K / Ctrl+K で開く
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <SearchContext.Provider value={{ open }}>
      {children}
      <SearchDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SearchContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/* Dialog                                                              */
/* ------------------------------------------------------------------ */
function SearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchUI(query), [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => setActiveIndex(0), [query]);

  const go = useCallback(
    (r: SearchResult) => {
      onClose();
      router.push(`/dictionary/${r.item.slug}`);
    },
    [onClose, router],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      go(results[activeIndex]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-950/40 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="UIを検索"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            {/* input */}
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="UI名 または「下から出てくるメニュー」のような説明で検索"
                className="h-14 w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground/70"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="search-results"
                aria-activedescendant={
                  results[activeIndex] ? `result-${results[activeIndex].item.slug}` : undefined
                }
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="閉じる"
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* results */}
            <div id="search-results" role="listbox" aria-label="検索結果" className="max-h-[52vh] overflow-y-auto p-2">
              {query === "" ? (
                <NaturalHints onPick={setQuery} />
              ) : results.length === 0 ? (
                <p className="px-4 py-10 text-center text-sm text-muted-foreground">
                  「{query}」に一致するUIが見つかりませんでした
                </p>
              ) : (
                results.map((r, i) => {
                  const cat = getCategory(r.item.category);
                  return (
                    <button
                      key={r.item.slug}
                      id={`result-${r.item.slug}`}
                      role="option"
                      aria-selected={i === activeIndex}
                      onClick={() => go(r)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors",
                        i === activeIndex ? "bg-muted" : "hover:bg-muted/60",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-primary",
                          r.item.gradient ?? "from-blue-500/15 to-indigo-500/15",
                        )}
                      >
                        <Sparkles className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline gap-2">
                          <span className="font-semibold">{r.item.name}</span>
                          <span className="text-xs text-muted-foreground">{r.item.nameJa}</span>
                        </span>
                        {r.matchedBy === "alias" && r.matchedAlias ? (
                          <span className="mt-0.5 block truncate text-xs text-primary">
                            「{r.matchedAlias}」にマッチ
                          </span>
                        ) : (
                          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                            {cat?.nameJa} ・ {r.item.description}
                          </span>
                        )}
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                        <Eye className="size-3" aria-hidden />
                        {formatViews(r.item.views)}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* footer */}
            <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-3">
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono">↑↓</kbd>
                移動
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono">Enter</kbd>
                開く
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="size-3 text-primary" aria-hidden />
                自然な日本語でもOK
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NaturalHints({ onPick }: { onPick: (q: string) => void }) {
  return (
    <div className="px-2 py-2">
      <p className="px-2 pb-2 text-xs font-medium text-muted-foreground">
        こんな聞き方で探せます
      </p>
      {naturalExamples.map((ex) => (
        <button
          key={ex.query}
          onClick={() => onPick(ex.query)}
          className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted"
        >
          <span className="text-muted-foreground">「{ex.query}」</span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
            {ex.answer}
            <ArrowRight className="size-3" aria-hidden />
          </span>
        </button>
      ))}
    </div>
  );
}
