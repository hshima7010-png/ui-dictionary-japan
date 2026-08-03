import { Line, MiniButton, Surface } from "@/components/previews/frame";
import { X } from "lucide-react";

/** オーバーレイ系のプレビュー。 */

export function ModalPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[124px] w-[212px] overflow-hidden rounded-lg border border-border bg-card">
        {/* 背後のページ */}
        <div className="space-y-1.5 p-2.5">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-5/6" />
          <Line w="w-2/3" />
        </div>
        {/* 背景の暗幕 */}
        <div className="absolute inset-0 bg-dark/45 backdrop-blur-[1px]" />
        {/* ダイアログ — ホバーでせり上がる */}
        <Surface className="absolute left-1/2 top-1/2 w-[160px] -translate-x-1/2 -translate-y-1/2 space-y-2 p-2.5 transition-transform duration-300 group-hover:-translate-y-[calc(50%+4px)] group-hover:scale-[1.04]">
          <span className="flex items-start gap-1.5">
            <span className="flex-1 text-[10px] font-bold text-foreground/85">
              変更を保存しますか？
            </span>
            <X className="size-2.5 shrink-0 text-foreground/40" />
          </span>
          <span className="block space-y-1">
            <Line w="w-full" />
            <Line w="w-3/5" />
          </span>
          <span className="flex justify-end gap-1.5 pt-0.5">
            <MiniButton tone="outline">キャンセル</MiniButton>
            <MiniButton tone="primary">保存する</MiniButton>
          </span>
        </Surface>
      </div>
    </div>
  );
}

export function PopoverPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-0">
      {/* 吹き出し本体 */}
      <Surface className="relative w-[164px] space-y-1.5 p-2.5 transition-transform duration-300 group-hover:-translate-y-1">
        <span className="block text-[9px] font-bold text-foreground/85">
          共有リンクを作成
        </span>
        <span className="block space-y-1">
          <Line w="w-full" />
          <Line w="w-3/4" />
        </span>
        <span className="flex items-center gap-1.5 pt-0.5">
          <span className="flex h-5 flex-1 items-center rounded border border-border px-1.5 text-[8px] text-foreground/45">
            https://…/abc123
          </span>
          <MiniButton tone="primary">コピー</MiniButton>
        </span>
        {/* 三角の矢印 */}
        <span className="absolute -bottom-[5px] left-1/2 size-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-card" />
      </Surface>
      {/* トリガーボタン */}
      <MiniButton
        tone="outline"
        className="mt-2.5 px-2.5 py-1.5 shadow-soft"
      >
        共有
      </MiniButton>
    </div>
  );
}
