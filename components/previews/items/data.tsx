import {
  Avatar,
  Chip,
  Line,
  MiniField,
  Surface,
} from "@/components/previews/frame";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

/** データ表示系のプレビュー。 */

export function DatePickerPreview() {
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  // 7月のカレンダー（1日が水曜始まり想定）
  const cells = Array.from({ length: 35 }, (_, i) => i - 2);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-1">
      <span className="w-[152px]">
        <MiniField state="focus" className="gap-1">
          <Calendar className="size-2.5 shrink-0 text-primary" />
          <span className="text-foreground/75">2026/07/05 〜 07/16</span>
        </MiniField>
      </span>
      <Surface className="w-[152px] p-1.5">
        <span className="mb-1 flex items-center justify-between px-0.5">
          <ChevronLeft className="size-2.5 text-foreground/40" />
          <span className="text-[8px] font-bold text-foreground/80">
            2026年7月
          </span>
          <ChevronRight className="size-2.5 text-foreground/40" />
        </span>
        <span className="grid grid-cols-7 gap-px">
          {days.map((d) => (
            <span
              key={d}
              className="text-center text-[6px] font-medium text-foreground/35"
            >
              {d}
            </span>
          ))}
          {cells.map((n, i) => {
            const inRange = n >= 5 && n <= 16;
            const isEdge = n === 5 || n === 16;
            return (
              <span
                key={i}
                className={`flex h-3 items-center justify-center text-[6.5px] ${
                  n < 1 || n > 31
                    ? "text-transparent"
                    : isEdge
                      ? "rounded-sm bg-primary font-bold text-primary-foreground"
                      : inRange
                        ? "bg-primary/15 text-primary"
                        : "text-foreground/55"
                }`}
              >
                {n < 1 || n > 31 ? "." : n}
              </span>
            );
          })}
        </span>
      </Surface>
    </div>
  );
}

export function DataTablePreview() {
  const rows = [
    { n: "佐藤 花子", s: "有効", on: true },
    { n: "鈴木 一郎", s: "保留" },
    { n: "田中 美咲", s: "有効" },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[216px] overflow-hidden">
        {/* ツールバー */}
        <span className="flex items-center gap-1.5 border-b border-border px-2 py-1.5">
          <span className="text-[8px] font-bold text-foreground/80">
            メンバー
          </span>
          <Chip tone="primary">1件選択中</Chip>
          <MoreHorizontal className="ml-auto size-3 text-foreground/35" />
        </span>
        {/* ヘッダー行 */}
        <span className="flex items-center gap-1.5 border-b border-border bg-foreground/[0.03] px-2 py-1">
          <span className="size-2 shrink-0 rounded-sm border border-foreground/25" />
          <span className="flex-1 text-[7px] font-semibold text-foreground/50">
            名前 ↓
          </span>
          <span className="w-10 text-[7px] font-semibold text-foreground/50">
            状態
          </span>
          <span className="w-8 text-right text-[7px] font-semibold text-foreground/50">
            権限
          </span>
        </span>
        {rows.map((r) => (
          <span
            key={r.n}
            className={`flex items-center gap-1.5 border-b border-border px-2 py-1.5 last:border-b-0 ${
              r.on ? "bg-primary/5" : ""
            }`}
          >
            <span
              className={`flex size-2 shrink-0 items-center justify-center rounded-sm border ${
                r.on ? "border-primary bg-primary" : "border-foreground/25"
              }`}
            />
            <span className="flex flex-1 items-center gap-1">
              <Avatar className="size-3.5" />
              <span className="text-[7.5px] text-foreground/75">{r.n}</span>
            </span>
            <span className="w-10">
              <span
                className={`rounded-full px-1 py-px text-[6px] font-semibold ${
                  r.s === "有効"
                    ? "bg-emerald-500/15 text-emerald-500"
                    : "bg-amber-500/15 text-amber-500"
                }`}
              >
                {r.s}
              </span>
            </span>
            <span className="w-8 text-right text-[7px] text-foreground/45">
              編集者
            </span>
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function LineChartPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[204px] p-2.5">
        <span className="mb-1.5 flex items-center justify-between">
          <span className="text-[8px] font-bold text-foreground/80">
            月間セッション
          </span>
          <span className="flex items-center gap-0.5 text-[7px] font-bold text-emerald-500">
            <ArrowUp className="size-2" />
            12.4%
          </span>
        </span>
        <svg viewBox="0 0 180 56" className="w-full" aria-hidden>
          {/* グリッド */}
          {[0, 18, 36, 54].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="180"
              y2={y}
              className="stroke-foreground/10"
              strokeWidth="0.5"
            />
          ))}
          {/* 面 */}
          <path
            d="M0 44 L30 36 L60 40 L90 24 L120 28 L150 12 L180 8 L180 56 L0 56 Z"
            className="fill-primary/15"
          />
          {/* 線 */}
          <polyline
            points="0,44 30,36 60,40 90,24 120,28 150,12 180,8"
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="150" cy="12" r="3" className="fill-primary" />
        </svg>
        <span className="mt-1 flex justify-between text-[6px] text-foreground/35">
          {["1月", "3月", "5月", "7月"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function BarChartPreview() {
  const bars = [48, 72, 35, 88, 60, 95, 52];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[196px] p-2.5">
        <span className="mb-2 block text-[8px] font-bold text-foreground/80">
          曜日別の注文数
        </span>
        <span className="flex h-[54px] items-end justify-between gap-1.5">
          {bars.map((h, i) => (
            <span key={i} className="flex flex-1 flex-col items-center gap-1">
              <span
                className={`w-full rounded-t-sm transition-all duration-300 ${
                  i === 5 ? "bg-primary" : "bg-primary/30"
                } ${i === 5 ? "group-hover:bg-accent" : ""}`}
                style={{ height: `${h * 0.42}px` }}
              />
            </span>
          ))}
        </span>
        <span className="mt-1 flex justify-between border-t border-border pt-1">
          {["月", "火", "水", "木", "金", "土", "日"].map((d) => (
            <span
              key={d}
              className="flex-1 text-center text-[6px] text-foreground/35"
            >
              {d}
            </span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function DonutChartPreview() {
  // 円周 = 2πr = 2 * π * 16 ≒ 100.5
  const segments = [
    { v: 45, cls: "stroke-primary", offset: 0 },
    { v: 30, cls: "stroke-accent", offset: 45 },
    { v: 25, cls: "stroke-primary-300", offset: 75 },
  ];

  return (
    <div className="flex h-full items-center justify-center gap-4">
      <span className="relative block size-[76px]">
        <svg viewBox="0 0 40 40" className="size-full -rotate-90" aria-hidden>
          {segments.map((s) => (
            <circle
              key={s.offset}
              cx="20"
              cy="20"
              r="16"
              fill="none"
              strokeWidth="6"
              className={s.cls}
              strokeDasharray={`${s.v} ${100 - s.v}`}
              strokeDashoffset={-s.offset}
              pathLength={100}
            />
          ))}
        </svg>
        <span className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[13px] font-bold leading-none text-foreground/85">
            ¥2.4M
          </span>
          <span className="text-[6px] text-foreground/40">総売上</span>
        </span>
      </span>
      <span className="space-y-1.5">
        {[
          { l: "直販", v: "45%", cls: "bg-primary" },
          { l: "代理店", v: "30%", cls: "bg-accent" },
          { l: "その他", v: "25%", cls: "bg-primary-300" },
        ].map((r) => (
          <span key={r.l} className="flex items-center gap-1.5">
            <span className={`size-2 rounded-sm ${r.cls}`} />
            <span className="text-[7.5px] text-foreground/60">{r.l}</span>
            <span className="text-[7.5px] font-bold text-foreground/80">
              {r.v}
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}

export function SparklinePreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[196px] divide-y divide-border p-0">
        {[
          {
            l: "売上",
            v: "¥482K",
            d: "+8.2%",
            up: true,
            pts: "0,18 15,14 30,16 45,9 60,11 75,4 90,2",
          },
          {
            l: "解約率",
            v: "1.8%",
            d: "-0.4%",
            up: false,
            pts: "0,4 15,7 30,5 45,11 60,9 75,15 90,17",
          },
        ].map((r) => (
          <span key={r.l} className="flex items-center gap-2 px-2.5 py-2">
            <span className="flex-1">
              <span className="block text-[7px] text-foreground/45">{r.l}</span>
              <span className="block text-[11px] font-bold leading-tight text-foreground/85">
                {r.v}
              </span>
            </span>
            {/* 軸もラベルもない極小グラフ */}
            <svg viewBox="0 0 90 20" className="h-5 w-[70px]" aria-hidden>
              <polyline
                points={r.pts}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={r.up ? "stroke-emerald-500" : "stroke-red-500"}
              />
            </svg>
            <span
              className={`flex shrink-0 items-center gap-0.5 text-[7px] font-bold ${
                r.up ? "text-emerald-500" : "text-red-500"
              }`}
            >
              {r.up ? (
                <ArrowUp className="size-2" />
              ) : (
                <ArrowDown className="size-2" />
              )}
              {r.d}
            </span>
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function KpiCardPreview() {
  const cards = [
    { l: "月間売上", v: "¥2.4M", d: "+12.4%", up: true },
    { l: "新規ユーザー", v: "1,284", d: "+5.1%", up: true },
    { l: "解約率", v: "1.8%", d: "-0.4%", up: false },
  ];

  return (
    <div className="flex h-full items-center justify-center gap-1.5">
      {cards.map((c, i) => (
        <Surface
          key={c.l}
          className={`w-[68px] space-y-1 p-2 ${
            i === 0
              ? "transition-transform duration-300 group-hover:-translate-y-1"
              : ""
          }`}
        >
          <span className="block text-[6.5px] text-foreground/45">{c.l}</span>
          <span className="block text-[13px] font-bold leading-none text-foreground/90">
            {c.v}
          </span>
          <span
            className={`flex items-center gap-0.5 text-[6.5px] font-bold ${
              c.up ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {c.up ? <ArrowUp className="size-2" /> : <ArrowDown className="size-2" />}
            {c.d}
          </span>
          {/* ミニスパークライン */}
          <svg viewBox="0 0 60 14" className="h-3 w-full" aria-hidden>
            <polyline
              points={
                c.up ? "0,12 15,9 30,10 45,4 60,2" : "0,3 15,6 30,5 45,10 60,12"
              }
              fill="none"
              strokeWidth="2"
              className={c.up ? "stroke-primary/50" : "stroke-red-500/50"}
            />
          </svg>
        </Surface>
      ))}
    </div>
  );
}

export function KanbanBoardPreview() {
  const cols = [
    { t: "未着手", n: 3, tone: "bg-foreground/25" },
    { t: "進行中", n: 2, tone: "bg-primary" },
    { t: "完了", n: 2, tone: "bg-emerald-500" },
  ];

  return (
    <div className="flex h-full items-center justify-center gap-1.5">
      {cols.map((c, ci) => (
        <span
          key={c.t}
          className="w-[66px] space-y-1 rounded-md bg-foreground/5 p-1.5"
        >
          <span className="flex items-center gap-1 px-0.5">
            <span className={`size-1.5 rounded-full ${c.tone}`} />
            <span className="text-[6.5px] font-bold text-foreground/60">
              {c.t}
            </span>
            <span className="ml-auto text-[6px] text-foreground/35">{c.n}</span>
          </span>
          {Array.from({ length: c.n }).map((_, i) => (
            <Surface
              key={i}
              className={`space-y-1 p-1.5 ${
                ci === 1 && i === 0
                  ? "rotate-2 shadow-lift transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3"
                  : ""
              }`}
            >
              <Line w="w-full" tone="strong" />
              <Line w="w-2/3" />
              <span className="flex items-center gap-1 pt-0.5">
                <Avatar className="size-2.5" />
                <span className="rounded-full bg-primary/15 px-1 py-px text-[5px] font-bold text-primary">
                  UI
                </span>
              </span>
            </Surface>
          ))}
        </span>
      ))}
    </div>
  );
}

export function CalendarViewPreview() {
  const events = [
    { day: 2, row: 0, w: "w-[92%]", cls: "bg-primary" },
    { day: 4, row: 1, w: "w-[46%]", cls: "bg-accent" },
    { day: 0, row: 2, w: "w-[70%]", cls: "bg-emerald-500" },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[216px] p-2">
        <span className="mb-1 flex items-center justify-between">
          <span className="text-[8px] font-bold text-foreground/80">
            2026年7月
          </span>
          <span className="flex rounded bg-foreground/10 p-px">
            {["月", "週", "日"].map((v, i) => (
              <span
                key={v}
                className={`rounded px-1 py-px text-[6px] ${
                  i === 0 ? "bg-card font-bold text-foreground/80" : "text-foreground/45"
                }`}
              >
                {v}
              </span>
            ))}
          </span>
        </span>
        <span className="grid grid-cols-7 border-l border-t border-border">
          {["月", "火", "水", "木", "金", "土", "日"].map((d) => (
            <span
              key={d}
              className="border-b border-r border-border bg-foreground/[0.03] py-0.5 text-center text-[6px] font-medium text-foreground/40"
            >
              {d}
            </span>
          ))}
          {Array.from({ length: 21 }).map((_, i) => (
            <span
              key={i}
              className="relative h-[18px] border-b border-r border-border px-px pt-px"
            >
              <span className="block text-[5.5px] text-foreground/35">
                {i + 1}
              </span>
              {events
                .filter((e) => e.row === Math.floor(i / 7) && e.day === i % 7)
                .map((e) => (
                  <span
                    key={e.day}
                    className={`absolute inset-x-px top-[7px] block h-[6px] rounded-sm ${e.w} ${e.cls}`}
                  />
                ))}
            </span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function TimelinePreview() {
  const items = [
    { t: "会社設立", d: "2019年4月", on: true },
    { t: "シリーズA調達", d: "2022年9月" },
    { t: "ユーザー10万人突破", d: "2026年3月" },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[196px] p-3">
        {items.map((it, i) => (
          <span key={it.t} className="flex gap-2">
            {/* 軸と点 */}
            <span className="flex w-3 shrink-0 flex-col items-center">
              <span
                className={`size-2.5 shrink-0 rounded-full ring-2 ${
                  it.on
                    ? "bg-primary ring-primary/25"
                    : "bg-card ring-foreground/20"
                }`}
              />
              {i < items.length - 1 && (
                <span className="w-px flex-1 bg-border" />
              )}
            </span>
            <span className={`flex-1 ${i < items.length - 1 ? "pb-3" : ""}`}>
              <span className="block text-[8.5px] font-bold text-foreground/80">
                {it.t}
              </span>
              <span className="mb-1 block text-[6.5px] text-foreground/40">
                {it.d}
              </span>
              <Line w="w-4/5" />
            </span>
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function ActivityFeedPreview() {
  const rows = [
    { n: "佐藤", a: "がタスクを完了しました", t: "3分前" },
    { n: "鈴木", a: "がファイルを追加しました", t: "1時間前" },
    { n: "田中", a: "がコメントしました", t: "昨日" },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[200px] p-2.5">
        <span className="mb-1.5 block text-[8px] font-bold text-foreground/80">
          アクティビティ
        </span>
        {rows.map((r, i) => (
          <span key={r.n} className="flex gap-1.5">
            <span className="flex w-4 shrink-0 flex-col items-center">
              <Avatar className="size-4 shrink-0" />
              {i < rows.length - 1 && <span className="w-px flex-1 bg-border" />}
            </span>
            <span className={`flex-1 ${i < rows.length - 1 ? "pb-2" : ""}`}>
              <span className="block text-[7.5px] leading-snug text-foreground/65">
                <span className="font-bold text-foreground/85">{r.n}さん</span>
                {r.a}
              </span>
              <span className="block text-[6.5px] text-foreground/35">
                {r.t}
              </span>
            </span>
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function AvatarPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      {/* サイズ違い */}
      <span className="flex items-end gap-2">
        <Avatar className="size-5" />
        <Avatar className="size-7" />
        <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
          YT
        </span>
        {/* オンライン状態つき */}
        <span className="relative">
          <Avatar className="size-9" />
          <span className="absolute -bottom-px -right-px size-2.5 rounded-full border-2 border-card bg-emerald-500" />
        </span>
      </span>
      {/* 重なり（グループ） */}
      <span className="flex items-center">
        {[0, 1, 2].map((i) => (
          <Avatar
            key={i}
            className="-ml-1.5 size-6 border-2 border-card first:ml-0"
          />
        ))}
        <span className="-ml-1.5 flex size-6 items-center justify-center rounded-full border-2 border-card bg-foreground/10 text-[7px] font-bold text-foreground/60">
          +12
        </span>
      </span>
    </div>
  );
}

export function BadgePreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <span className="flex flex-wrap items-center justify-center gap-1.5">
        <Chip tone="primary">NEW</Chip>
        <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-500">
          公開中
        </span>
        <span className="rounded-full bg-amber-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-amber-500">
          下書き
        </span>
        <Chip tone="danger">停止中</Chip>
        <span className="rounded-full border border-border px-1.5 py-0.5 text-[8px] font-semibold text-foreground/55">
          アーカイブ
        </span>
      </span>
      {/* 数値バッジ（オーバーレイ） */}
      <span className="flex items-center gap-4 pt-1">
        <span className="relative flex size-7 items-center justify-center rounded-md border border-border bg-card">
          <span className="text-[9px] text-foreground/50">✉</span>
          <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-red-500 px-1 text-[6.5px] font-bold text-white">
            12
          </span>
        </span>
        <span className="relative flex size-7 items-center justify-center rounded-md border border-border bg-card">
          <span className="text-[9px] text-foreground/50">♡</span>
          {/* ドット型 */}
          <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-primary ring-2 ring-card" />
        </span>
      </span>
    </div>
  );
}
