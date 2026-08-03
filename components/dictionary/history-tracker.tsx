"use client";

import { useHistory } from "@/hooks/use-favorites";
import { useEffect } from "react";

/** 詳細ページの閲覧を履歴に記録する（描画なし） */
export function HistoryTracker({ slug }: { slug: string }) {
  const { push } = useHistory();
  useEffect(() => {
    push(slug);
  }, [slug, push]);
  return null;
}
