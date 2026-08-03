import { Line, MiniButton, Surface } from "@/components/previews/frame";
import { ChevronDown } from "lucide-react";

/** ナビゲーション系のプレビュー。 */

export function NavbarPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[228px] overflow-hidden">
        {/* バー本体 */}
        <div className="flex items-center gap-2 border-b border-border px-2.5 py-2">
          <span className="flex items-center gap-1">
            <span className="size-3 rounded bg-gradient-to-br from-primary to-accent" />
            <span className="text-[9px] font-bold text-foreground/80">Logo</span>
          </span>
          <span className="ml-1 flex flex-1 items-center gap-2.5">
            <span className="relative text-[8px] font-semibold text-foreground/80">
              製品
              <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
            </span>
            <span className="text-[8px] text-foreground/45">料金</span>
            <span className="text-[8px] text-foreground/45">導入事例</span>
            <span className="text-[8px] text-foreground/45">ドキュメント</span>
          </span>
          <MiniButton
            tone="primary"
            className="px-1.5 py-1 text-[8px] transition-transform duration-300 group-hover:scale-105"
          >
            無料で試す
          </MiniButton>
        </div>
        {/* 下のコンテンツ（スクロールで隠れる想定） */}
        <div className="space-y-1.5 p-2.5 opacity-40">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-3/4" />
        </div>
      </Surface>
    </div>
  );
}

export function TabsPreview() {
  const tabs = ["概要", "レビュー", "仕様"];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[196px] overflow-hidden">
        <div className="flex border-b border-border px-2">
          {tabs.map((t, i) => (
            <span
              key={t}
              className={`relative px-2 py-1.5 text-[9px] ${
                i === 0
                  ? "font-semibold text-primary"
                  : "text-foreground/45"
              }`}
            >
              {t}
              {i === 0 && (
                /* ホバーで下線が2番目のタブへスライド */
                <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-[calc(100%+4px)]" />
              )}
            </span>
          ))}
        </div>
        <div className="space-y-1.5 p-2.5">
          <Line w="w-2/3" tone="strong" />
          <Line w="w-full" />
          <Line w="w-full" />
          <Line w="w-1/2" />
        </div>
      </Surface>
    </div>
  );
}

export function HamburgerMenuPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="relative h-[112px] w-[196px] overflow-hidden">
        {/* 下地のページ */}
        <div className="flex items-center gap-2 border-b border-border px-2.5 py-2">
          <span className="text-[9px] font-bold text-foreground/80">Logo</span>
          {/* ハンバーガー — ホバーで×に変形 */}
          <span className="ml-auto flex size-3.5 flex-col justify-center gap-[3px]">
            <span className="h-px w-full origin-center rounded-full bg-foreground/70 transition-transform duration-300 group-hover:translate-y-[4px] group-hover:rotate-45" />
            <span className="h-px w-full rounded-full bg-foreground/70 transition-opacity duration-300 group-hover:opacity-0" />
            <span className="h-px w-full origin-center rounded-full bg-foreground/70 transition-transform duration-300 group-hover:-translate-y-[4px] group-hover:-rotate-45" />
          </span>
        </div>
        <div className="space-y-1.5 p-2.5 opacity-40">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
        </div>
        {/* スライドインするパネル */}
        <div className="absolute inset-y-0 right-0 w-[104px] space-y-1.5 border-l border-border bg-card p-2.5 shadow-lift">
          {["ホーム", "製品", "料金", "お問い合わせ"].map((m, i) => (
            <span
              key={m}
              className={`block text-[9px] ${
                i === 0
                  ? "font-semibold text-primary"
                  : "text-foreground/60"
              }`}
            >
              {m}
            </span>
          ))}
        </div>
      </Surface>
    </div>
  );
}

export function AccordionPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="h-[124px] w-[204px] overflow-hidden p-2">
        {/* 1件目：開いた状態 */}
        <div className="rounded-md bg-foreground/5 px-2 py-1.5">
          <span className="flex items-center gap-1.5">
            <span className="flex-1 text-[9px] font-semibold text-foreground/80">
              送料はいくらですか？
            </span>
            <ChevronDown className="size-2.5 rotate-180 text-primary" />
          </span>
          <span className="mt-1.5 block space-y-1">
            <Line w="w-full" />
            <Line w="w-4/5" />
          </span>
        </div>
        {/* 2件目：ホバーで開く */}
        <div className="mt-1 border-t border-border px-2 pt-1.5">
          <span className="flex items-center gap-1.5">
            <span className="flex-1 text-[9px] text-foreground/60">
              返品はできますか？
            </span>
            <ChevronDown className="size-2.5 text-foreground/40 transition-transform duration-300 group-hover:rotate-180" />
          </span>
          <span className="mt-0 block max-h-0 space-y-1 overflow-hidden transition-all duration-300 group-hover:mt-1.5 group-hover:max-h-8">
            <Line w="w-full" />
            <Line w="w-2/3" />
          </span>
        </div>
        {/* 3件目 */}
        <div className="mt-1 border-t border-border px-2 pt-1.5">
          <span className="flex items-center gap-1.5">
            <span className="flex-1 text-[9px] text-foreground/60">
              領収書は発行できますか？
            </span>
            <ChevronDown className="size-2.5 text-foreground/40" />
          </span>
        </div>
      </Surface>
    </div>
  );
}
