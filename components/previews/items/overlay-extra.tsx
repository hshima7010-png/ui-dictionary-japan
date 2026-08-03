import {
  Avatar,
  Chip,
  Line,
  MiniButton,
  MiniField,
  Surface,
} from "@/components/previews/frame";
import {
  AlertTriangle,
  ChevronRight,
  Command,
  Copy,
  LogOut,
  Search,
  Settings,
  Trash2,
  X,
} from "lucide-react";

/** オーバーレイ系（追加分）のプレビュー。 */

export function AlertDialogPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[124px] w-[212px] overflow-hidden rounded-lg border border-border bg-card">
        <div className="space-y-1.5 p-2.5">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-4/5" />
        </div>
        <div className="absolute inset-0 bg-dark/50" />
        <Surface className="absolute left-1/2 top-1/2 w-[164px] -translate-x-1/2 -translate-y-1/2 space-y-2 p-2.5">
          <span className="flex items-start gap-1.5">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/15">
              <AlertTriangle className="size-2.5 text-red-500" />
            </span>
            <span className="flex-1 text-[10px] font-bold leading-tight text-foreground/85">
              このプロジェクトを削除しますか？
            </span>
          </span>
          <span className="block text-[7.5px] leading-snug text-foreground/50">
            削除すると元に戻せません。関連する12件のファイルもすべて失われます。
          </span>
          <span className="flex justify-end gap-1.5 pt-0.5">
            <MiniButton tone="outline">キャンセル</MiniButton>
            <MiniButton
              tone="primary"
              className="bg-red-500 transition-transform duration-300 group-hover:scale-105"
            >
              削除する
            </MiniButton>
          </span>
        </Surface>
      </div>
    </div>
  );
}

export function TooltipPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-0">
      <span className="relative rounded-md bg-dark px-2 py-1 text-[8px] font-medium text-white shadow-lift">
        クリップボードにコピー
        <span className="absolute -bottom-[3px] left-1/2 size-1.5 -translate-x-1/2 rotate-45 bg-dark" />
      </span>
      <span className="mt-2.5 flex size-7 items-center justify-center rounded-md border border-border bg-card text-foreground/60 shadow-soft transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
        <Copy className="size-3.5" />
      </span>
      <span className="mt-2 text-[7px] text-foreground/35">
        ホバー・フォーカスの両方で表示する
      </span>
    </div>
  );
}

export function DropdownMenuPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <MiniButton tone="outline" className="px-2.5 py-1.5 shadow-soft">
        操作
        <span className="ml-0.5 text-[7px] opacity-60">▾</span>
      </MiniButton>
      <Surface className="mt-1 w-[136px] p-1 transition-transform duration-300 group-hover:translate-y-0.5">
        {[
          { l: "編集する", k: "E" },
          { l: "複製する", k: "D" },
        ].map((m, i) => (
          <span
            key={m.l}
            className={`flex items-center justify-between rounded px-1.5 py-1 text-[9px] ${
              i === 0
                ? "bg-primary/10 font-medium text-primary"
                : "text-foreground/65"
            }`}
          >
            {m.l}
            <span className="text-[7px] text-foreground/35">⌘{m.k}</span>
          </span>
        ))}
        <span className="my-1 block h-px bg-border" />
        <span className="flex items-center gap-1.5 rounded px-1.5 py-1 text-[9px] text-red-500">
          <Trash2 className="size-2.5" />
          削除する
        </span>
      </Surface>
    </div>
  );
}

export function ContextMenuPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[124px] w-[204px] overflow-hidden rounded-lg border border-border bg-card">
        {/* 対象のコンテンツ */}
        <div className="space-y-1.5 p-2.5">
          <Line w="w-2/5" tone="strong" />
          <span className="block h-8 w-16 rounded bg-primary/15 ring-2 ring-primary/40" />
          <Line w="w-3/4" />
        </div>
        {/* 右クリック位置のメニュー */}
        <Surface className="absolute left-[68px] top-[42px] w-[112px] p-1">
          {["切り取り", "コピー", "貼り付け"].map((m, i) => (
            <span
              key={m}
              className={`flex items-center justify-between rounded px-1.5 py-1 text-[8.5px] ${
                i === 1
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-foreground/65"
              }`}
            >
              {m}
            </span>
          ))}
          <span className="my-0.5 block h-px bg-border" />
          <span className="flex items-center justify-between rounded px-1.5 py-1 text-[8.5px] text-foreground/65">
            共有
            <ChevronRight className="size-2.5 opacity-50" />
          </span>
        </Surface>
        {/* カーソル */}
        <span className="absolute left-[62px] top-[38px] text-[9px]">▶</span>
      </div>
    </div>
  );
}

export function DrawerPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[122px] w-[204px] overflow-hidden rounded-lg border border-border bg-card">
        <div className="space-y-1.5 p-2.5">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-3/4" />
        </div>
        <div className="absolute inset-0 bg-dark/40" />
        {/* 右からスライドインするパネル */}
        <div className="absolute inset-y-0 right-0 w-[124px] space-y-2 border-l border-border bg-card p-2.5 shadow-lift transition-transform duration-300 group-hover:translate-x-0">
          <span className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-foreground/85">
              フィルター
            </span>
            <X className="size-2.5 text-foreground/40" />
          </span>
          <span className="block space-y-1.5">
            <Line w="w-full" />
            <Line w="w-4/5" />
            <Line w="w-full" />
            <Line w="w-2/3" />
          </span>
          <MiniButton tone="primary" className="w-full py-1">
            適用する
          </MiniButton>
        </div>
      </div>
    </div>
  );
}

export function BottomSheetPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      {/* スマホ枠 */}
      <div className="relative h-[136px] w-[80px] overflow-hidden rounded-xl border-2 border-foreground/20 bg-card">
        <div className="space-y-1 p-1.5">
          <Line w="w-2/3" tone="strong" />
          <Line w="w-full" />
        </div>
        <div className="absolute inset-0 bg-dark/40" />
        {/* 下から出てくるシート — ホバーでさらに上がる */}
        <div className="absolute inset-x-0 bottom-0 space-y-1.5 rounded-t-xl border-t border-border bg-card p-2 shadow-lift transition-all duration-300 group-hover:pb-4">
          <span className="mx-auto block h-0.5 w-6 rounded-full bg-foreground/25" />
          <span className="block pt-0.5 text-[7.5px] font-bold text-foreground/80">
            共有方法を選択
          </span>
          {["リンクをコピー", "メールで送信"].map((m) => (
            <span
              key={m}
              className="flex items-center gap-1 text-[7px] text-foreground/60"
            >
              <span className="size-2.5 rounded bg-foreground/10" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CommandPalettePreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[128px] w-[212px] overflow-hidden rounded-lg bg-dark/45">
        <Surface className="absolute inset-x-3 top-3 overflow-hidden p-0 shadow-lift">
          <span className="flex items-center gap-1.5 border-b border-border px-2 py-1.5">
            <Search className="size-2.5 shrink-0 text-foreground/40" />
            <span className="flex-1 text-[9px] text-foreground/70">
              設定
              <span className="ml-px inline-block h-2.5 w-px translate-y-[2px] animate-pulse bg-primary" />
            </span>
            <span className="rounded border border-border px-1 text-[6.5px] text-foreground/40">
              ESC
            </span>
          </span>
          <span className="block p-1">
            <span className="block px-1.5 pb-0.5 pt-1 text-[6.5px] font-semibold text-foreground/35">
              移動
            </span>
            {[
              { icon: Settings, l: "設定を開く", k: "⌘," },
              { icon: Command, l: "設定 › 通知", k: "" },
            ].map((r, i) => (
              <span
                key={r.l}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[8.5px] ${
                  i === 0
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-foreground/60"
                }`}
              >
                <r.icon className="size-2.5 shrink-0 opacity-70" />
                <span className="flex-1">{r.l}</span>
                {r.k && (
                  <span className="text-[6.5px] text-foreground/35">{r.k}</span>
                )}
              </span>
            ))}
          </span>
        </Surface>
      </div>
    </div>
  );
}

export function MegaMenuPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[224px] overflow-hidden">
        <span className="flex items-center gap-2.5 border-b border-border px-2.5 py-1.5">
          <span className="text-[8px] font-bold text-foreground/80">Logo</span>
          <span className="relative text-[8px] font-semibold text-primary">
            製品
            <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-primary" />
          </span>
          <span className="text-[8px] text-foreground/45">料金</span>
          <span className="text-[8px] text-foreground/45">会社情報</span>
        </span>
        {/* 展開する大型パネル */}
        <span className="flex gap-2.5 p-2.5">
          {[
            { t: "分析", n: 3 },
            { t: "自動化", n: 3 },
            { t: "連携", n: 2 },
          ].map((c) => (
            <span key={c.t} className="flex-1 space-y-1.5">
              <span className="block text-[7.5px] font-bold text-foreground/70">
                {c.t}
              </span>
              {Array.from({ length: c.n }).map((_, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span className="size-2.5 shrink-0 rounded bg-primary/15" />
                  <Line w={i % 2 === 0 ? "w-full" : "w-3/4"} />
                </span>
              ))}
            </span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function UserMenuPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Avatar className="size-7 ring-2 ring-primary/30" />
      <Surface className="mt-1.5 w-[136px] p-1 transition-transform duration-300 group-hover:translate-y-0.5">
        <span className="flex items-center gap-1.5 px-1.5 py-1">
          <Avatar className="size-5" />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[8px] font-semibold text-foreground/80">
              山田 太郎
            </span>
            <span className="block truncate text-[7px] text-foreground/40">
              taro@example.com
            </span>
          </span>
        </span>
        <span className="my-0.5 block h-px bg-border" />
        {[
          { icon: Settings, l: "アカウント設定" },
          { icon: LogOut, l: "ログアウト" },
        ].map((m, i) => (
          <span
            key={m.l}
            className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[8.5px] ${
              i === 0 ? "text-foreground/65" : "text-red-500"
            }`}
          >
            <m.icon className="size-2.5 opacity-70" />
            {m.l}
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function ProductTourPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[126px] w-[208px] overflow-hidden rounded-lg border border-border bg-card">
        {/* 背景UI */}
        <span className="flex items-center gap-1.5 border-b border-border px-2 py-1.5">
          <span className="text-[8px] font-bold text-foreground/60">Logo</span>
          {/* ハイライトされた対象 */}
          <span className="relative ml-auto rounded bg-primary px-1.5 py-1 text-[7px] font-semibold text-primary-foreground ring-4 ring-primary/25">
            新規作成
            <span className="absolute -inset-1 animate-pulse rounded-md ring-2 ring-primary/50" />
          </span>
        </span>
        <span className="block space-y-1.5 p-2 opacity-30">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-3/4" />
        </span>
        {/* コーチマークの吹き出し */}
        <Surface className="absolute right-2 top-[38px] w-[124px] space-y-1.5 p-2 shadow-lift">
          <span className="absolute -top-[5px] right-6 size-2 rotate-45 border-l border-t border-border bg-card" />
          <span className="block text-[8px] font-bold text-foreground/85">
            ここから作成できます
          </span>
          <span className="block space-y-1">
            <Line w="w-full" />
            <Line w="w-2/3" />
          </span>
          <span className="flex items-center justify-between pt-0.5">
            <span className="flex gap-0.5">
              <span className="size-1 rounded-full bg-primary" />
              <span className="size-1 rounded-full bg-foreground/20" />
              <span className="size-1 rounded-full bg-foreground/20" />
            </span>
            <MiniButton tone="primary" className="px-1.5 py-0.5 text-[7px]">
              次へ
            </MiniButton>
          </span>
        </Surface>
      </div>
    </div>
  );
}

export function CartDrawerPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[128px] w-[208px] overflow-hidden rounded-lg border border-border bg-card">
        <span className="block space-y-1.5 p-2.5">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
        </span>
        <span className="absolute inset-0 bg-dark/40" />
        <div className="absolute inset-y-0 right-0 flex w-[132px] flex-col border-l border-border bg-card shadow-lift">
          <span className="flex items-center justify-between border-b border-border px-2 py-1.5">
            <span className="text-[8.5px] font-bold text-foreground/85">
              カート（2）
            </span>
            <X className="size-2.5 text-foreground/40" />
          </span>
          <span className="flex-1 space-y-1.5 p-2">
            {[
              { n: "ワイヤレスイヤホン", p: "¥8,980" },
              { n: "USB-Cケーブル", p: "¥1,280" },
            ].map((it) => (
              <span key={it.n} className="flex items-center gap-1.5">
                <span className="size-6 shrink-0 rounded bg-gradient-to-br from-primary/25 to-accent/15" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[7px] text-foreground/70">
                    {it.n}
                  </span>
                  <span className="block text-[7.5px] font-bold text-foreground/85">
                    {it.p}
                  </span>
                </span>
              </span>
            ))}
          </span>
          <span className="space-y-1 border-t border-border p-2">
            <span className="flex items-center justify-between text-[7.5px]">
              <span className="text-foreground/50">小計</span>
              <span className="font-bold text-foreground/85">¥10,260</span>
            </span>
            <MiniButton
              tone="primary"
              className="w-full py-1 transition-transform duration-300 group-hover:scale-105"
            >
              レジに進む
            </MiniButton>
          </span>
        </div>
        <span className="absolute left-2 top-2">
          <Chip tone="primary">カートに追加しました</Chip>
        </span>
      </div>
    </div>
  );
}
