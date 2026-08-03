import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center py-28 text-center">
      <span className="flex size-16 items-center justify-center rounded-3xl bg-muted">
        <SearchX className="size-7 text-muted-foreground" aria-hidden />
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">ページが見つかりません</h1>
      <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
        お探しのページは移動または削除された可能性があります。UI辞典から探し直してみてください。
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          ホームへ戻る
        </Link>
        <Link
          href="/dictionary"
          className="inline-flex h-11 items-center rounded-xl border border-border bg-card px-6 text-sm font-medium transition-colors hover:bg-muted"
        >
          UI辞典を見る
        </Link>
      </div>
    </div>
  );
}
