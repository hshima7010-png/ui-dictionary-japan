import {
  Avatar,
  Chip,
  Line,
  MiniButton,
  MiniField,
  Surface,
} from "@/components/previews/frame";
import {
  Bell,
  Check,
  ChevronDown,
  Heart,
  Plus,
  Search,
  Settings,
  Share2,
  Star,
  Trash2,
  X,
  Zap,
} from "lucide-react";

/** ページ・セクション系（追加分）のプレビュー。 */

export function CtaSectionPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <span className="relative block w-[216px] overflow-hidden rounded-xl bg-gradient-to-br from-primary to-accent px-4 py-4 text-center">
        <span className="absolute -right-4 -top-4 size-16 rounded-full bg-white/10" />
        <span className="absolute -bottom-6 -left-2 size-14 rounded-full bg-white/10" />
        <span className="relative block text-[12px] font-bold leading-tight text-white">
          今日からUIの名前に
          <br />
          迷わなくなる
        </span>
        <span className="relative mt-1 block text-[7.5px] text-white/75">
          クレジットカード不要・30秒で開始
        </span>
        <span className="relative mt-2.5 flex items-center justify-center gap-1.5">
          <span className="rounded-md bg-white px-2.5 py-1.5 text-[9px] font-bold text-primary transition-transform duration-300 group-hover:scale-105">
            無料で始める
          </span>
          <span className="rounded-md border border-white/40 px-2.5 py-1.5 text-[9px] font-semibold text-white">
            資料請求
          </span>
        </span>
      </span>
    </div>
  );
}

export function PricingTablePreview() {
  const plans = [
    { n: "Free", p: "¥0", feats: 2, pop: false },
    { n: "Pro", p: "¥1,980", feats: 3, pop: true },
    { n: "Team", p: "¥4,800", feats: 3, pop: false },
  ];

  return (
    <div className="flex h-full items-center justify-center gap-1.5">
      {plans.map((pl) => (
        <Surface
          key={pl.n}
          className={`relative w-[66px] space-y-1.5 p-2 ${
            pl.pop
              ? "border-primary ring-2 ring-primary/20 transition-transform duration-300 group-hover:-translate-y-1"
              : ""
          }`}
        >
          {pl.pop && (
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-1.5 py-px text-[5.5px] font-bold text-primary-foreground">
              人気
            </span>
          )}
          <span className="block pt-0.5 text-center text-[7.5px] font-bold text-foreground/70">
            {pl.n}
          </span>
          <span className="block text-center">
            <span className="text-[13px] font-bold leading-none text-foreground/90">
              {pl.p}
            </span>
            <span className="block text-[5.5px] text-foreground/40">／月</span>
          </span>
          <span className="block space-y-0.5 border-t border-border pt-1.5">
            {Array.from({ length: pl.feats }).map((_, i) => (
              <span key={i} className="flex items-center gap-1">
                <Check
                  className={`size-2 shrink-0 ${
                    pl.pop ? "text-primary" : "text-emerald-500"
                  }`}
                  strokeWidth={3}
                />
                <Line w="w-full" />
              </span>
            ))}
          </span>
          <MiniButton
            tone={pl.pop ? "primary" : "outline"}
            className="w-full py-1 text-[7px]"
          >
            選択する
          </MiniButton>
        </Surface>
      ))}
    </div>
  );
}

export function ComparisonTablePreview() {
  const rows = [
    { l: "ユーザー数", v: ["3", "20", "無制限"] },
    { l: "API連携", v: ["x", "o", "o"] },
    { l: "優先サポート", v: ["x", "x", "o"] },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[212px] overflow-hidden">
        <span className="flex items-center border-b border-border bg-foreground/[0.03] px-2 py-1">
          <span className="flex-1 text-[7px] font-semibold text-foreground/50">
            機能
          </span>
          {["Free", "Pro", "Team"].map((h, i) => (
            <span
              key={h}
              className={`w-[42px] text-center text-[7px] font-bold ${
                i === 1 ? "text-primary" : "text-foreground/55"
              }`}
            >
              {h}
            </span>
          ))}
        </span>
        {rows.map((r) => (
          <span
            key={r.l}
            className="flex items-center border-b border-border px-2 py-1.5 last:border-b-0"
          >
            <span className="flex-1 text-[7.5px] text-foreground/65">
              {r.l}
            </span>
            {r.v.map((v, i) => (
              <span
                key={i}
                className={`flex w-[42px] justify-center ${
                  i === 1 ? "bg-primary/5" : ""
                }`}
              >
                {v === "o" ? (
                  <Check
                    className={`size-2.5 ${
                      i === 1 ? "text-primary" : "text-emerald-500"
                    }`}
                    strokeWidth={3}
                  />
                ) : v === "x" ? (
                  <X className="size-2.5 text-foreground/20" strokeWidth={3} />
                ) : (
                  <span className="text-[7.5px] font-bold text-foreground/75">
                    {v}
                  </span>
                )}
              </span>
            ))}
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function FaqPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      <span className="block text-[10px] font-bold text-foreground/85">
        よくある質問
      </span>
      <Surface className="w-[204px] divide-y divide-border p-0">
        {[
          { q: "無料プランはありますか？", open: true },
          { q: "解約はいつでもできますか？", open: false },
          { q: "請求書払いに対応していますか？", open: false },
        ].map((f) => (
          <span key={f.q} className="block px-2 py-1.5">
            <span className="flex items-center gap-1.5">
              <span
                className={`flex-1 text-[8px] ${
                  f.open
                    ? "font-bold text-foreground/85"
                    : "text-foreground/60"
                }`}
              >
                {f.q}
              </span>
              <ChevronDown
                className={`size-2.5 shrink-0 ${
                  f.open ? "rotate-180 text-primary" : "text-foreground/35"
                }`}
              />
            </span>
            {f.open && (
              <span className="mt-1 block space-y-1">
                <Line w="w-full" />
                <Line w="w-3/4" />
              </span>
            )}
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function FeatureSectionPreview() {
  const feats = [
    { icon: Zap, t: "高速検索" },
    { icon: Search, t: "自然言語対応" },
    { icon: Settings, t: "コード出力" },
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <span className="block text-center">
        <Chip tone="primary">FEATURES</Chip>
        <span className="mt-1 block text-[10px] font-bold text-foreground/85">
          必要な機能が、すべて揃う
        </span>
      </span>
      <span className="flex w-[216px] gap-1.5">
        {feats.map((f, i) => (
          <Surface
            key={f.t}
            className={`flex-1 space-y-1 p-2 ${
              i === 0
                ? "transition-transform duration-300 group-hover:-translate-y-1"
                : ""
            }`}
          >
            <span className="flex size-5 items-center justify-center rounded-md bg-primary/10">
              <f.icon className="size-2.5 text-primary" />
            </span>
            <span className="block text-[7.5px] font-bold text-foreground/80">
              {f.t}
            </span>
            <span className="block space-y-1">
              <Line w="w-full" />
              <Line w="w-2/3" />
            </span>
          </Surface>
        ))}
      </span>
    </div>
  );
}

export function TestimonialsPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <span className="block text-[9px] font-bold text-foreground/85">
        お客様の声
      </span>
      <span className="flex w-[216px] gap-1.5">
        {[
          { n: "佐藤 花子", c: "株式会社A / デザイナー" },
          { n: "鈴木 一郎", c: "B社 / PM" },
        ].map((t, i) => (
          <Surface
            key={t.n}
            className={`flex-1 space-y-1.5 p-2 ${
              i === 0
                ? "transition-transform duration-300 group-hover:-translate-y-1"
                : ""
            }`}
          >
            <span className="flex gap-px">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="size-2 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="block space-y-1">
              <Line w="w-full" />
              <Line w="w-full" />
              <Line w="w-3/5" />
            </span>
            <span className="flex items-center gap-1 border-t border-border pt-1.5">
              <Avatar className="size-4" />
              <span className="min-w-0">
                <span className="block truncate text-[6.5px] font-bold text-foreground/80">
                  {t.n}
                </span>
                <span className="block truncate text-[5.5px] text-foreground/40">
                  {t.c}
                </span>
              </span>
            </span>
          </Surface>
        ))}
      </span>
    </div>
  );
}

export function ReviewCardPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[196px] space-y-1.5 p-2.5 transition-transform duration-300 group-hover:-translate-y-1">
        <span className="flex items-start gap-1.5">
          <Avatar className="size-6 shrink-0" />
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-1">
              <span className="truncate text-[8px] font-bold text-foreground/85">
                田中 美咲
              </span>
              <span className="shrink-0 rounded-full bg-emerald-500/15 px-1 py-px text-[5.5px] font-bold text-emerald-500">
                購入済み
              </span>
            </span>
            <span className="flex items-center gap-1">
              <span className="flex gap-px">
                {[0, 1, 2, 3].map((s) => (
                  <Star key={s} className="size-2 fill-amber-400 text-amber-400" />
                ))}
                <Star className="size-2 fill-foreground/10 text-foreground/20" />
              </span>
              <span className="text-[5.5px] text-foreground/35">2026年6月</span>
            </span>
          </span>
        </span>
        <span className="block text-[8px] font-bold text-foreground/80">
          期待以上の使い心地でした
        </span>
        <span className="block space-y-1">
          <Line w="w-full" />
          <Line w="w-full" />
          <Line w="w-2/3" />
        </span>
        <span className="flex items-center gap-2 border-t border-border pt-1.5 text-[6.5px] text-foreground/40">
          <span>参考になった（24）</span>
          <span className="ml-auto">報告する</span>
        </span>
      </Surface>
    </div>
  );
}

export function LogoCloudPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <span className="block text-[7.5px] font-medium tracking-wide text-foreground/40">
        3,000社以上に導入されています
      </span>
      <span className="grid w-[216px] grid-cols-4 gap-x-2 gap-y-2.5">
        {[
          "ACME",
          "Globex",
          "Initech",
          "Umbrella",
          "Soylent",
          "Hooli",
          "Vehement",
          "Massive",
        ].map((n, i) => (
          <span
            key={n}
            className={`flex items-center justify-center gap-0.5 text-[7px] font-bold text-foreground/35 transition-colors duration-300 ${
              i < 4 ? "group-hover:text-foreground/65" : ""
            }`}
          >
            <span className="size-2 rounded-sm bg-foreground/20" />
            {n}
          </span>
        ))}
      </span>
    </div>
  );
}

export function NewsletterSignupPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[204px] space-y-2 p-3 text-center">
        <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-primary/10">
          <Bell className="size-3 text-primary" />
        </span>
        <span className="block text-[9.5px] font-bold text-foreground/85">
          週1回、UIの新常識をお届け
        </span>
        <span className="block text-[7px] text-foreground/45">
          登録者12,400人・いつでも解除できます
        </span>
        <span className="flex items-center gap-1 pt-0.5">
          <MiniField className="h-6 flex-1">you@example.com</MiniField>
          <MiniButton
            tone="primary"
            className="h-6 shrink-0 px-2 transition-transform duration-300 group-hover:scale-105"
          >
            登録
          </MiniButton>
        </span>
      </Surface>
    </div>
  );
}

export function CheckoutFormPreview() {
  return (
    <div className="flex h-full items-center justify-center gap-1.5">
      {/* 入力側 */}
      <Surface className="w-[124px] space-y-1.5 p-2">
        <span className="block text-[7.5px] font-bold text-foreground/80">
          お支払い情報
        </span>
        <MiniField className="h-5 justify-between">
          <span>カード番号</span>
          <span className="flex gap-0.5">
            <span className="h-1.5 w-2.5 rounded-sm bg-primary/40" />
            <span className="h-1.5 w-2.5 rounded-sm bg-amber-500/40" />
          </span>
        </MiniField>
        <span className="flex gap-1">
          <MiniField className="h-5 flex-1">MM / YY</MiniField>
          <MiniField className="h-5 w-10">CVC</MiniField>
        </span>
        <span className="flex items-center gap-1 pt-0.5">
          <span className="flex size-2.5 items-center justify-center rounded-sm border border-primary bg-primary">
            <Check className="size-2 text-primary-foreground" strokeWidth={4} />
          </span>
          <span className="text-[6px] text-foreground/50">
            請求先も同じ住所を使う
          </span>
        </span>
      </Surface>
      {/* 注文サマリー */}
      <Surface className="w-[92px] space-y-1 bg-foreground/[0.03] p-2">
        <span className="block text-[7px] font-bold text-foreground/70">
          注文内容
        </span>
        {[
          { l: "商品（2点）", v: "¥10,260" },
          { l: "送料", v: "無料" },
          { l: "消費税", v: "¥1,026" },
        ].map((r) => (
          <span
            key={r.l}
            className="flex items-center justify-between text-[6px] text-foreground/50"
          >
            {r.l}
            <span className="text-foreground/70">{r.v}</span>
          </span>
        ))}
        <span className="flex items-center justify-between border-t border-border pt-1 text-[7px] font-bold text-foreground/85">
          合計
          <span>¥11,286</span>
        </span>
        <MiniButton tone="primary" className="w-full py-1 text-[7px]">
          注文を確定する
        </MiniButton>
      </Surface>
    </div>
  );
}

export function ImageGalleryPreview() {
  return (
    <div className="flex h-full items-center justify-center gap-1.5">
      {/* サムネイル列 */}
      <span className="flex flex-col gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`size-6 rounded bg-gradient-to-br from-primary/30 to-accent/20 ${
              i === 0 ? "ring-2 ring-primary" : "opacity-60"
            }`}
          />
        ))}
      </span>
      {/* メイン画像 */}
      <span className="relative block size-[112px] overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10">
        <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-card/85 shadow-sm backdrop-blur">
          <Heart className="size-2 text-foreground/50" />
        </span>
        {/* 拡大鏡のヒント */}
        <span className="absolute bottom-1.5 left-1.5 rounded bg-dark/60 px-1 py-px text-[5.5px] text-white">
          ホバーで拡大
        </span>
        <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" />
      </span>
    </div>
  );
}

export function ProfileHeaderPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[204px] overflow-hidden">
        {/* カバー画像 */}
        <span className="block h-9 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/20" />
        <span className="relative block px-2.5 pb-2">
          <span className="absolute -top-4 left-2.5">
            <Avatar className="size-9 border-2 border-card" />
          </span>
          <span className="flex justify-end gap-1 pt-1">
            <MiniButton tone="outline" className="px-1.5 py-0.5 text-[7px]">
              <Share2 className="size-2" />
            </MiniButton>
            <MiniButton tone="primary" className="px-2 py-0.5 text-[7px]">
              フォロー
            </MiniButton>
          </span>
          <span className="mt-0.5 block text-[9px] font-bold text-foreground/85">
            山田 太郎
          </span>
          <span className="block text-[6.5px] text-foreground/40">
            @taro ・ プロダクトデザイナー
          </span>
          <span className="mt-1 block">
            <Line w="w-4/5" />
          </span>
          <span className="mt-1.5 flex gap-2.5">
            {[
              { n: "128", l: "投稿" },
              { n: "1.2万", l: "フォロワー" },
              { n: "342", l: "フォロー中" },
            ].map((s) => (
              <span key={s.l} className="flex items-baseline gap-0.5">
                <span className="text-[8px] font-bold text-foreground/85">
                  {s.n}
                </span>
                <span className="text-[6px] text-foreground/40">{s.l}</span>
              </span>
            ))}
          </span>
        </span>
      </Surface>
    </div>
  );
}

export function OnboardingChecklistPreview() {
  const tasks = [
    { l: "アカウントを作成", done: true },
    { l: "プロフィールを設定", done: true },
    { l: "チームを招待", done: false, next: true },
    { l: "最初のプロジェクト作成", done: false },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[196px] space-y-1.5 p-2.5">
        <span className="flex items-center justify-between">
          <span className="text-[8.5px] font-bold text-foreground/85">
            セットアップ
          </span>
          <span className="text-[7px] font-bold text-primary">2 / 4</span>
        </span>
        <span className="block h-1 overflow-hidden rounded-full bg-foreground/15">
          <span className="block h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-accent" />
        </span>
        <span className="block space-y-1 pt-0.5">
          {tasks.map((t) => (
            <span
              key={t.l}
              className={`flex items-center gap-1.5 rounded px-1 py-1 ${
                t.next ? "bg-primary/5" : ""
              }`}
            >
              <span
                className={`flex size-3 shrink-0 items-center justify-center rounded-full ${
                  t.done
                    ? "bg-emerald-500 text-white"
                    : t.next
                      ? "border-2 border-primary"
                      : "border border-foreground/25"
                }`}
              >
                {t.done && <Check className="size-2" strokeWidth={4} />}
              </span>
              <span
                className={`flex-1 text-[7.5px] ${
                  t.done
                    ? "text-foreground/35 line-through"
                    : t.next
                      ? "font-semibold text-foreground/80"
                      : "text-foreground/55"
                }`}
              >
                {t.l}
              </span>
              {t.next && (
                <MiniButton tone="primary" className="px-1.5 py-0.5 text-[6px]">
                  開始
                </MiniButton>
              )}
            </span>
          ))}
        </span>
      </Surface>
    </div>
  );
}

export function MessageBubblePreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <span className="w-[200px] space-y-1.5">
        {/* 相手 */}
        <span className="flex items-end gap-1">
          <Avatar className="size-4 shrink-0" />
          <span className="max-w-[65%] space-y-1 rounded-lg rounded-bl-sm border border-border bg-card px-2 py-1.5">
            <Line w="w-full" />
            <Line w="w-3/5" />
          </span>
          <span className="self-end text-[5.5px] text-foreground/30">14:02</span>
        </span>
        {/* 自分 */}
        <span className="flex items-end justify-end gap-1">
          <span className="self-end text-[5.5px] text-foreground/30">既読</span>
          <span className="max-w-[65%] space-y-1 rounded-lg rounded-br-sm bg-primary px-2 py-1.5">
            <span className="block h-1.5 w-full rounded-full bg-white/70" />
            <span className="block h-1.5 w-2/3 rounded-full bg-white/50" />
          </span>
        </span>
        {/* 相手（連続） */}
        <span className="flex items-end gap-1 pl-5">
          <span className="max-w-[55%] rounded-lg rounded-bl-sm border border-border bg-card px-2 py-1.5">
            <Line w="w-full" />
          </span>
        </span>
      </span>
    </div>
  );
}

export function IconButtonPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      {/* ツールバー */}
      <Surface className="flex items-center gap-0.5 p-1">
        {[Search, Heart, Share2, Settings].map((Icon, i) => (
          <span
            key={i}
            className={`flex size-6 items-center justify-center rounded-md ${
              i === 1
                ? "bg-primary/10 text-primary"
                : "text-foreground/50 group-hover:bg-foreground/5"
            }`}
          >
            <Icon className="size-3" />
          </span>
        ))}
        <span className="mx-0.5 h-4 w-px bg-border" />
        <span className="flex size-6 items-center justify-center rounded-md text-red-500">
          <Trash2 className="size-3" />
        </span>
      </Surface>
      {/* バリエーション */}
      <span className="flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-card">
          <Plus className="size-3" />
        </span>
        <span className="flex size-6 items-center justify-center rounded-md border border-border bg-card text-foreground/60">
          <Plus className="size-3" />
        </span>
        <span className="flex size-6 items-center justify-center rounded-full bg-foreground/10 text-foreground/60">
          <Plus className="size-3" />
        </span>
        <span className="rounded bg-dark px-1.5 py-0.5 text-[6px] text-white">
          aria-label 必須
        </span>
      </span>
    </div>
  );
}

export function FloatingActionButtonPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[128px] w-[176px] overflow-hidden rounded-lg border border-border bg-card">
        <span className="block space-y-1.5 p-2.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex items-center gap-1.5">
              <Avatar className="size-5" />
              <span className="flex-1 space-y-1">
                <Line w="w-2/3" tone="strong" />
                <Line w="w-full" />
              </span>
            </span>
          ))}
        </span>
        {/* ホバーで開くミニメニュー */}
        <span className="absolute bottom-11 right-3 flex flex-col items-end gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {["写真", "メモ"].map((l) => (
            <span
              key={l}
              className="flex items-center gap-1 rounded-full bg-card px-1.5 py-1 text-[6px] font-semibold text-foreground/70 shadow-card"
            >
              {l}
            </span>
          ))}
        </span>
        {/* FAB本体 */}
        <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-300 group-hover:rotate-45">
          <Plus className="size-4" />
        </span>
      </div>
    </div>
  );
}

export function SplitButtonPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      {/* 分割ボタン */}
      <span className="flex items-stretch overflow-hidden rounded-md shadow-card">
        <span className="flex items-center bg-primary px-3 py-1.5 text-[9px] font-bold text-primary-foreground">
          保存する
        </span>
        <span className="w-px bg-white/25" />
        <span className="flex items-center bg-primary px-1.5 text-primary-foreground">
          <ChevronDown className="size-2.5 transition-transform duration-300 group-hover:rotate-180" />
        </span>
      </span>
      {/* 付随メニュー */}
      <Surface className="mt-1 w-[124px] p-1">
        {["下書きとして保存", "複製して保存", "テンプレート化"].map((m, i) => (
          <span
            key={m}
            className={`block rounded px-1.5 py-1 text-[8px] ${
              i === 0
                ? "bg-primary/10 font-medium text-primary"
                : "text-foreground/60"
            }`}
          >
            {m}
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function RichMenuPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      {/* LINEトーク画面 */}
      <div className="relative flex h-[136px] w-[92px] flex-col overflow-hidden rounded-xl border-2 border-foreground/20 bg-[#8CABD8]/30">
        {/* トーク履歴 */}
        <span className="flex-1 space-y-1 p-1.5">
          <span className="ml-auto block w-2/3 rounded-lg rounded-br-sm bg-[#06C755] px-1.5 py-1">
            <span className="block h-1 w-full rounded-full bg-white/70" />
          </span>
          <span className="block w-3/4 rounded-lg rounded-bl-sm bg-card px-1.5 py-1">
            <Line w="w-full" />
          </span>
        </span>
        {/* リッチメニュー（2×3グリッド） */}
        <span className="grid grid-cols-3 gap-px bg-border p-px">
          {[
            "予約",
            "メニュー",
            "アクセス",
            "クーポン",
            "お問合せ",
            "公式サイト",
          ].map((l, i) => (
            <span
              key={l}
              className={`flex flex-col items-center justify-center gap-0.5 bg-card py-1.5 ${
                i === 0 ? "transition-colors duration-300 group-hover:bg-primary/10" : ""
              }`}
            >
              <span className="size-2 rounded-sm bg-primary/30" />
              <span className="text-[4.5px] font-medium text-foreground/60">
                {l}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function AnnouncementBarPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[212px] overflow-hidden">
        {/* 最上部の細い告知帯 */}
        <span className="flex items-center gap-1 bg-gradient-to-r from-primary to-accent px-2 py-1">
          <span className="flex-1 truncate text-center text-[7px] font-bold text-white">
            🎉 全品送料無料キャンペーン開催中（7/31まで）
          </span>
          <X className="size-2 shrink-0 text-white/70" />
        </span>
        {/* その下の通常ヘッダー */}
        <span className="flex items-center gap-2 border-b border-border px-2 py-1.5">
          <span className="text-[8px] font-bold text-foreground/80">SHOP</span>
          <span className="text-[7px] text-foreground/45">新着</span>
          <span className="text-[7px] text-foreground/45">セール</span>
          <Search className="ml-auto size-2.5 text-foreground/45" />
        </span>
        <span className="block space-y-1.5 p-2.5">
          <Line w="w-1/2" tone="strong" />
          <Line w="w-full" />
          <Line w="w-3/4" />
        </span>
      </Surface>
    </div>
  );
}
