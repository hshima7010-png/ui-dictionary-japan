import { Line, MiniButton, Surface } from "@/components/previews/frame";
import {
  ArrowUp,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  Settings,
  User,
} from "lucide-react";

/** ナビゲーション系（追加分）のプレビュー。 */

export function SidebarPreview() {
  const items = [
    { icon: Home, l: "ダッシュボード", on: true },
    { icon: BarChart3, l: "分析" },
    { icon: User, l: "メンバー" },
    { icon: Settings, l: "設定" },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="flex h-[124px] w-[212px] overflow-hidden">
        <span className="w-[84px] shrink-0 space-y-0.5 border-r border-border bg-foreground/[0.03] p-1.5">
          <span className="mb-1.5 flex items-center gap-1 px-1">
            <span className="size-3 rounded bg-gradient-to-br from-primary to-accent" />
            <span className="text-[8px] font-bold text-foreground/80">Acme</span>
          </span>
          {items.map((it) => (
            <span
              key={it.l}
              className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[7.5px] ${
                it.on
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-foreground/55"
              }`}
            >
              <it.icon className="size-2.5 shrink-0" />
              {it.l}
            </span>
          ))}
        </span>
        <span className="flex-1 space-y-1.5 p-2">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-4/5" />
          <span className="block h-8 rounded bg-foreground/5" />
        </span>
      </Surface>
    </div>
  );
}

export function CarouselPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <span className="relative flex w-[212px] items-center gap-1.5">
        {/* 前へ */}
        <span className="absolute -left-1 z-10 flex size-4 items-center justify-center rounded-full bg-card shadow-card">
          <ChevronLeft className="size-2.5 text-foreground/60" />
        </span>
        {/* スライド群 — ホバーで左へ流れる */}
        <span className="flex gap-1.5 overflow-hidden transition-transform duration-500 group-hover:-translate-x-6">
          {[1, 0.85, 0.7, 0.55].map((o, i) => (
            <span
              key={i}
              className="h-16 w-[68px] shrink-0 rounded-md bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10"
              style={{ opacity: o }}
            />
          ))}
        </span>
        <span className="absolute -right-1 z-10 flex size-4 items-center justify-center rounded-full bg-card shadow-card">
          <ChevronRight className="size-2.5 text-foreground/60" />
        </span>
      </span>
      {/* ドットインジケーター */}
      <span className="flex items-center gap-1">
        <span className="h-1 w-3 rounded-full bg-primary" />
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-1 rounded-full bg-foreground/25" />
        ))}
      </span>
    </div>
  );
}

export function StickyHeaderPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[124px] w-[204px] overflow-hidden rounded-lg border border-border bg-card">
        {/* スクロールしても残るヘッダー */}
        <span className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-border bg-card/80 px-2 py-1.5 shadow-soft backdrop-blur">
          <span className="text-[8px] font-bold text-foreground/80">Logo</span>
          <span className="text-[7.5px] text-foreground/45">製品</span>
          <span className="text-[7.5px] text-foreground/45">料金</span>
          <MiniButton tone="primary" className="ml-auto px-1.5 py-0.5 text-[7px]">
            登録
          </MiniButton>
        </span>
        {/* スクロールして下に潜り込むコンテンツ */}
        <span className="absolute inset-x-0 top-0 block space-y-1.5 p-2.5 pt-2 transition-transform duration-500 group-hover:-translate-y-3">
          <span className="block h-4" />
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-4/5" />
          <Line w="w-full" />
          <Line w="w-3/5" />
          <Line w="w-full" />
        </span>
        <span className="absolute bottom-1 right-1.5 text-[6.5px] text-foreground/35">
          position: sticky
        </span>
      </div>
    </div>
  );
}

export function BreadcrumbPreview() {
  const crumbs = ["ホーム", "レディース", "トップス", "ニット"];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <span className="flex w-[212px] flex-wrap items-center gap-1">
        {crumbs.map((c, i) => (
          <span key={c} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight className="size-2 shrink-0 text-foreground/30" />
            )}
            <span
              className={`text-[8px] ${
                i === crumbs.length - 1
                  ? "font-semibold text-foreground/80"
                  : "text-primary"
              }`}
            >
              {c}
            </span>
          </span>
        ))}
      </span>
      <span className="w-[212px] space-y-1.5 border-t border-border pt-2.5">
        <Line w="w-2/5" tone="strong" />
        <Line w="w-full" />
        <Line w="w-3/4" />
      </span>
    </div>
  );
}

export function BottomNavigationPreview() {
  const tabs = [
    { icon: Home, l: "ホーム", on: true },
    { icon: Search, l: "さがす" },
    { icon: BarChart3, l: "レポート" },
    { icon: User, l: "マイページ" },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[136px] w-[86px] overflow-hidden rounded-xl border-2 border-foreground/20 bg-card">
        <span className="block space-y-1.5 p-1.5">
          <Line w="w-2/3" tone="strong" />
          <Line w="w-full" />
          <Line w="w-4/5" />
          <span className="block h-8 rounded bg-foreground/5" />
        </span>
        {/* 下部に固定されるタブバー */}
        <span className="absolute inset-x-0 bottom-0 flex items-stretch border-t border-border bg-card/90 backdrop-blur">
          {tabs.map((t) => (
            <span
              key={t.l}
              className={`flex flex-1 flex-col items-center gap-0.5 py-1 ${
                t.on ? "text-primary" : "text-foreground/40"
              }`}
            >
              <t.icon className="size-2.5" />
              <span className="text-[5.5px] font-medium">{t.l}</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function PaginationPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <span className="flex items-center gap-1">
        <span className="flex size-5 items-center justify-center rounded-md border border-border text-foreground/40">
          <ChevronLeft className="size-2.5" />
        </span>
        {["1", "…", "4", "5", "6", "…", "20"].map((p, i) => (
          <span
            key={i}
            className={`flex size-5 items-center justify-center rounded-md text-[8px] ${
              p === "5"
                ? "bg-primary font-bold text-primary-foreground"
                : p === "…"
                  ? "text-foreground/30"
                  : "text-foreground/60 group-hover:bg-foreground/5"
            }`}
          >
            {p}
          </span>
        ))}
        <span className="flex size-5 items-center justify-center rounded-md border border-border text-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5">
          <ChevronRight className="size-2.5" />
        </span>
      </span>
      <span className="text-[7.5px] text-foreground/40">
        81〜100件 / 全384件
      </span>
    </div>
  );
}

export function LoadMorePreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[188px] overflow-hidden p-2">
        <span className="block space-y-1.5">
          {[1, 1, 0.5].map((o, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 border-b border-border pb-1.5 last:border-b-0"
              style={{ opacity: o }}
            >
              <span className="size-5 shrink-0 rounded bg-gradient-to-br from-primary/25 to-accent/15" />
              <span className="flex-1 space-y-1">
                <Line w="w-2/3" tone="strong" />
                <Line w="w-full" />
              </span>
            </span>
          ))}
        </span>
        <span className="mt-2 flex flex-col items-center gap-1">
          <MiniButton
            tone="outline"
            className="px-3 py-1.5 transition-transform duration-300 group-hover:translate-y-0.5"
          >
            もっと見る
          </MiniButton>
          <span className="text-[6.5px] text-foreground/35">
            20 / 384件を表示中
          </span>
        </span>
      </Surface>
    </div>
  );
}

export function BackToTopPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[126px] w-[172px] overflow-hidden rounded-lg border border-border bg-card">
        <span className="block space-y-1.5 p-2.5">
          {[0.35, 0.5, 0.65, 0.8, 1].map((o, i) => (
            <span key={i} className="block space-y-1.5" style={{ opacity: o }}>
              <Line w="w-full" />
              <Line w={i % 2 === 0 ? "w-4/5" : "w-2/3"} />
            </span>
          ))}
        </span>
        {/* 右下に浮かぶボタン — ホバーで持ち上がる */}
        <span className="absolute bottom-2 right-2 flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-300 group-hover:-translate-y-1">
          <ArrowUp className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

export function TableOfContentsPreview() {
  const items = [
    { l: "はじめに", depth: 0 },
    { l: "導入手順", depth: 0, on: true },
    { l: "環境変数の設定", depth: 1 },
    { l: "よくある質問", depth: 0 },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="flex w-[204px] gap-2 p-2.5">
        <span className="flex-1 space-y-1.5">
          <Line w="w-3/5" tone="strong" />
          <Line w="w-full" />
          <Line w="w-full" />
          <Line w="w-4/5" />
          <Line w="w-full" />
          <Line w="w-2/3" />
        </span>
        <span className="w-[84px] shrink-0 border-l border-border pl-2">
          <span className="mb-1 block text-[6.5px] font-bold uppercase tracking-wider text-foreground/35">
            目次
          </span>
          {items.map((it) => (
            <span
              key={it.l}
              className={`block border-l-2 py-0.5 text-[7px] ${
                it.depth === 1 ? "pl-2.5" : "pl-1.5"
              } ${
                it.on
                  ? "border-primary font-semibold text-primary"
                  : "border-transparent text-foreground/50"
              }`}
            >
              {it.l}
            </span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function ScrollspyPreview() {
  const items = [
    { l: "概要", on: false },
    { l: "セットアップ", on: true },
    { l: "API", on: false },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="relative flex w-[204px] gap-2 overflow-hidden p-2.5">
        {/* スクロールする本文 */}
        <span className="flex-1 space-y-1.5 transition-transform duration-500 group-hover:-translate-y-2">
          <Line w="w-2/5" tone="strong" />
          <Line w="w-full" />
          <Line w="w-3/4" />
          <span className="block pt-0.5" />
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-4/5" />
        </span>
        {/* 現在地が動くナビ */}
        <span className="w-[76px] shrink-0 border-l border-border pl-2">
          <span className="mb-1 block text-[6.5px] font-bold uppercase tracking-wider text-foreground/35">
            このページ
          </span>
          {items.map((it) => (
            <span
              key={it.l}
              className={`-ml-2 block border-l-2 py-0.5 pl-2 text-[7.5px] transition-colors duration-300 ${
                it.on
                  ? "border-primary font-semibold text-primary"
                  : "border-transparent text-foreground/45"
              }`}
            >
              {it.l}
            </span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function StepperPreview() {
  const steps = ["カート", "配送先", "支払い", "確認"];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <span className="flex w-[220px] items-start">
        {steps.map((s, i) => (
          <span key={s} className="flex flex-1 items-start last:flex-none">
            <span className="flex w-9 flex-col items-center gap-1">
              <span
                className={`flex size-5 items-center justify-center rounded-full text-[8px] font-bold ${
                  i < 2
                    ? "bg-primary text-primary-foreground"
                    : i === 2
                      ? "border-2 border-primary bg-card text-primary"
                      : "border border-foreground/25 bg-card text-foreground/40"
                }`}
              >
                {i < 2 ? <Check className="size-3" strokeWidth={3.5} /> : i + 1}
              </span>
              <span
                className={`text-[7px] ${
                  i <= 2
                    ? "font-semibold text-foreground/70"
                    : "text-foreground/40"
                }`}
              >
                {s}
              </span>
            </span>
            {i < steps.length - 1 && (
              <span
                className={`mt-2.5 h-0.5 flex-1 rounded-full ${
                  i < 1 ? "bg-primary" : "bg-foreground/15"
                }`}
              />
            )}
          </span>
        ))}
      </span>
      <span className="w-[200px] space-y-1.5 border-t border-border pt-2.5">
        <Line w="w-1/3" tone="strong" />
        <Line w="w-full" />
      </span>
    </div>
  );
}

export function SegmentedControlPreview() {
  const segs = ["日", "週", "月"];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <span className="flex rounded-lg bg-foreground/10 p-0.5">
        {segs.map((s, i) => (
          <span
            key={s}
            className={`rounded-md px-3.5 py-1 text-[9px] font-semibold ${
              i === 1
                ? "bg-card text-foreground/85 shadow-sm"
                : "text-foreground/50"
            }`}
          >
            {s}
          </span>
        ))}
      </span>
      {/* 選択に応じたコンテンツ */}
      <span className="flex w-[168px] items-end justify-between gap-1">
        {[40, 62, 35, 78, 55, 90, 48].map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${
              i === 5 ? "bg-primary" : "bg-primary/25"
            }`}
            style={{ height: `${h * 0.42}px` }}
          />
        ))}
      </span>
      <span className="text-[7px] text-foreground/35">今週の推移</span>
    </div>
  );
}
