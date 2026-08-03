"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "uidj:favorites";
const HISTORY_KEY = "uidj:history";

/**
 * お気に入り管理フック。
 * モック環境では localStorage に保存し、Supabase接続時は
 * services/favorites.ts のAPI呼び出しに差し替える設計。
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    }
    setReady(true);
  }, []);

  const toggle = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // storage full — noop
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites],
  );

  return { favorites, toggle, isFavorite, ready };
}

/** 閲覧履歴（最新20件） */
export function useHistory() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (raw) setHistory(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const push = useCallback((slug: string) => {
    setHistory((prev) => {
      const next = [slug, ...prev.filter((s) => s !== slug)].slice(0, 20);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      } catch {
        // noop
      }
      return next;
    });
  }, []);

  return { history, push };
}
