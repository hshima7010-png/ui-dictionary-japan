import { Avatar, Chip, Line, MiniButton, Surface } from "@/components/previews/frame";
import { Star } from "lucide-react";

/** 基本要素のプレビュー。ホバー時の動きは group-hover:（カード側の group）で付ける。 */

export function ButtonPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-2">
        <MiniButton
          tone="primary"
          className="px-3 py-1.5 shadow-card transition-transform duration-300 group-hover:scale-110"
        >
          今すぐ始める
        </MiniButton>
        <MiniButton tone="outline" className="px-3 py-1.5">
          詳しく見る
        </MiniButton>
      </div>
      <div className="flex items-center gap-2">
        <MiniButton tone="soft">Secondary</MiniButton>
        <MiniButton tone="ghost">Ghost</MiniButton>
        <span className="flex items-center gap-1 rounded-md bg-foreground/10 px-2 py-1 text-[9px] font-semibold leading-none text-foreground/35">
          <span className="size-2 animate-spin rounded-full border-[1.5px] border-foreground/30 border-t-transparent" />
          送信中
        </span>
      </div>
    </div>
  );
}

export function CardPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[170px] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1.5">
        <div className="h-14 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10" />
        <div className="space-y-1.5 p-2.5">
          <Line w="w-4/5" tone="strong" />
          <Line w="w-full" />
          <Line w="w-2/3" />
          <div className="flex items-center gap-1.5 pt-1">
            <Avatar className="size-3.5" />
            <Line w="w-10" />
          </div>
        </div>
      </Surface>
    </div>
  );
}

export function SpinnerPreview() {
  return (
    <div className="flex h-full items-center justify-center gap-7">
      {/* リング */}
      <span className="size-7 animate-spin rounded-full border-2 border-foreground/15 border-t-primary" />
      {/* ドット */}
      <span className="flex items-end gap-1">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-1.5 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </span>
      {/* バー */}
      <span className="relative h-1.5 w-12 overflow-hidden rounded-full bg-foreground/15">
        <span className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-primary" />
      </span>
    </div>
  );
}

export function StarRatingPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
        ))}
        {/* 5つ目はホバーで点灯 */}
        <Star className="size-5 fill-foreground/10 text-foreground/20 transition-colors duration-300 group-hover:fill-amber-400 group-hover:text-amber-400" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[11px] font-bold text-foreground/70">4.2</span>
        <span className="text-[9px] text-foreground/40">1,284件のレビュー</span>
      </div>
      <div className="flex items-center gap-1">
        <Chip tone="primary">星4以上</Chip>
        <Chip>星3以上</Chip>
      </div>
    </div>
  );
}
