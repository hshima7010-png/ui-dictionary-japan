import {
  Avatar,
  Chip,
  Line,
  MiniButton,
  Surface,
} from "@/components/previews/frame";
import { Star } from "lucide-react";

/** ページ・セクション系のプレビュー。 */

export function HeroSectionPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[212px] overflow-hidden px-3 py-3.5 text-center">
        <span className="mx-auto mb-2 block w-fit">
          <Chip tone="primary">✦ 新機能をリリース</Chip>
        </span>
        <span className="mx-auto block text-[13px] font-bold leading-tight text-foreground/85">
          このUI、
          <span className="gradient-text">なんて名前？</span>
        </span>
        <span className="mx-auto mt-1.5 block space-y-1">
          <Line w="w-4/5" className="mx-auto" />
          <Line w="w-3/5" className="mx-auto" />
        </span>
        <span className="mt-2.5 flex items-center justify-center gap-1.5">
          <MiniButton
            tone="primary"
            className="px-2.5 py-1.5 transition-transform duration-300 group-hover:scale-105"
          >
            無料で使ってみる
          </MiniButton>
          <MiniButton tone="outline" className="px-2.5 py-1.5">
            デモを見る
          </MiniButton>
        </span>
      </Surface>
    </div>
  );
}

export function FooterPreview() {
  const columns = [
    { title: "製品", items: 3 },
    { title: "会社", items: 3 },
    { title: "サポート", items: 3 },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[220px] overflow-hidden">
        <div className="flex gap-3 p-3">
          {/* ロゴ列 */}
          <span className="w-[54px] shrink-0 space-y-1.5">
            <span className="flex items-center gap-1">
              <span className="size-3 rounded bg-gradient-to-br from-primary to-accent" />
              <span className="text-[8px] font-bold text-foreground/80">Logo</span>
            </span>
            <Line w="w-full" />
            <Line w="w-3/4" />
            <span className="flex gap-1 pt-0.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-2.5 rounded-full bg-foreground/15 transition-colors duration-300 group-hover:bg-primary/40"
                />
              ))}
            </span>
          </span>
          {/* リンク列 */}
          {columns.map((c) => (
            <span key={c.title} className="flex-1 space-y-1.5">
              <span className="block text-[8px] font-semibold text-foreground/70">
                {c.title}
              </span>
              {Array.from({ length: c.items }).map((_, i) => (
                <Line key={i} w={i % 2 === 0 ? "w-4/5" : "w-3/5"} />
              ))}
            </span>
          ))}
        </div>
        {/* 下部のコピーライト帯 */}
        <div className="flex items-center justify-between border-t border-border px-3 py-1.5">
          <span className="text-[7px] text-foreground/40">
            © 2026 UI Dictionary
          </span>
          <span className="flex gap-2">
            <span className="text-[7px] text-foreground/40">利用規約</span>
            <span className="text-[7px] text-foreground/40">プライバシー</span>
          </span>
        </div>
      </Surface>
    </div>
  );
}

export function SettingsPagePreview() {
  const rows = [
    { label: "メール通知", on: true },
    { label: "2段階認証", on: false },
    { label: "公開プロフィール", on: true },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="flex h-[120px] w-[216px] overflow-hidden">
        {/* サイドナビ */}
        <span className="w-[62px] shrink-0 space-y-0.5 border-r border-border bg-foreground/[0.03] p-1.5">
          {["アカウント", "通知", "セキュリティ", "請求"].map((m, i) => (
            <span
              key={m}
              className={`block rounded px-1.5 py-1 text-[7.5px] ${
                i === 1
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-foreground/50"
              }`}
            >
              {m}
            </span>
          ))}
        </span>
        {/* 設定行 */}
        <span className="flex-1 space-y-0.5 p-2">
          <span className="block pb-1 text-[9px] font-bold text-foreground/80">
            通知
          </span>
          {rows.map((r, i) => (
            <span
              key={r.label}
              className="flex items-center gap-2 border-t border-border py-1.5 first:border-t-0"
            >
              <span className="flex-1 text-[8px] text-foreground/65">
                {r.label}
              </span>
              {/* トグル — 2行目がホバーでオンになる */}
              <span
                className={`relative h-3 w-5 shrink-0 rounded-full transition-colors duration-300 ${
                  r.on
                    ? "bg-primary"
                    : i === 1
                      ? "bg-foreground/20 group-hover:bg-primary"
                      : "bg-foreground/20"
                }`}
              >
                <span
                  className={`absolute top-0.5 size-2 rounded-full bg-white shadow-sm transition-all duration-300 ${
                    r.on
                      ? "left-[10px]"
                      : i === 1
                        ? "left-0.5 group-hover:left-[10px]"
                        : "left-0.5"
                  }`}
                />
              </span>
            </span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function ProductCardPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[132px] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1.5">
        <span className="relative block h-[62px] bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10">
          <span className="absolute left-1.5 top-1.5">
            <Chip tone="danger">30% OFF</Chip>
          </span>
          <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-card/85 text-[8px] shadow-sm backdrop-blur">
            ♡
          </span>
        </span>
        <span className="block space-y-1 p-2">
          <span className="block truncate text-[9px] font-semibold text-foreground/85">
            ワイヤレスイヤホン
          </span>
          <span className="flex items-center gap-0.5">
            {[0, 1, 2, 3].map((i) => (
              <Star key={i} className="size-2 fill-amber-400 text-amber-400" />
            ))}
            <Star className="size-2 fill-foreground/10 text-foreground/20" />
            <span className="ml-0.5 text-[7px] text-foreground/40">(128)</span>
          </span>
          <span className="flex items-baseline gap-1">
            <span className="text-[11px] font-bold text-foreground/90">
              ¥8,980
            </span>
            <span className="text-[7.5px] text-foreground/35 line-through">
              ¥12,800
            </span>
          </span>
          <MiniButton tone="primary" className="mt-0.5 w-full py-1">
            カートに入れる
          </MiniButton>
        </span>
      </Surface>
    </div>
  );
}

export function InfiniteScrollPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="relative h-[126px] w-[196px] overflow-hidden">
        <span className="block space-y-0 p-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="flex items-center gap-2 border-b border-border py-1.5 last:border-b-0"
              style={{ opacity: 1 - i * 0.12 }}
            >
              <Avatar className="size-5" />
              <span className="flex-1 space-y-1">
                <Line w="w-2/3" tone="strong" />
                <Line w="w-full" />
              </span>
            </span>
          ))}
        </span>
        {/* 下端のローディング — 常時回転 */}
        <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-card via-card/95 to-transparent pb-2 pt-5">
          <span className="size-2.5 animate-spin rounded-full border-[1.5px] border-foreground/15 border-t-primary" />
          <span className="text-[8px] text-foreground/45">読み込み中…</span>
        </span>
      </Surface>
    </div>
  );
}
