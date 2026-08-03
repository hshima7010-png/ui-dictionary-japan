import {
  Chip,
  Line,
  MiniButton,
  MiniField,
  Surface,
} from "@/components/previews/frame";
import {
  AlertCircle,
  Check,
  ChevronDown,
  Eye,
  Minus,
  Search,
  UploadCloud,
  X,
} from "lucide-react";

/** 入力・フォーム部品のプレビュー。 */

export function SelectPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-[168px]">
        <span className="mb-1 block text-[8px] font-medium text-foreground/50">
          お届け先の都道府県
        </span>
        <MiniField state="focus" className="justify-between">
          <span className="text-foreground/75">東京都</span>
          <ChevronDown className="size-2.5 rotate-180 text-foreground/45" />
        </MiniField>
        <Surface className="mt-1 p-1">
          {["東京都", "神奈川県", "千葉県"].map((o, i) => (
            <span
              key={o}
              className={`flex items-center justify-between rounded px-1.5 py-1 text-[9px] ${
                i === 0
                  ? "bg-primary/10 font-semibold text-primary"
                  : i === 1
                    ? "text-foreground/60 group-hover:bg-foreground/5"
                    : "text-foreground/60"
              }`}
            >
              {o}
              {i === 0 && <Check className="size-2.5" />}
            </span>
          ))}
        </Surface>
      </div>
    </div>
  );
}

export function CheckboxPreview() {
  const rows = [
    { label: "利用規約に同意する", state: "checked" },
    { label: "メールマガジンを受け取る", state: "hover" },
    { label: "すべての通知", state: "mixed" },
  ] as const;

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[178px] space-y-2.5 p-3">
        {rows.map((r) => (
          <span key={r.label} className="flex items-center gap-2">
            <span
              className={`flex size-3.5 shrink-0 items-center justify-center rounded border transition-colors duration-300 ${
                r.state === "checked" || r.state === "mixed"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground/30 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
              }`}
            >
              {r.state === "mixed" ? (
                <Minus className="size-2.5" strokeWidth={3} />
              ) : r.state === "checked" ? (
                <Check className="size-2.5" strokeWidth={3} />
              ) : (
                <Check className="size-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
            </span>
            <span className="text-[9px] text-foreground/70">{r.label}</span>
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function TextFieldPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[176px] space-y-2.5 p-3">
        <span className="block space-y-1">
          <span className="block text-[8px] font-medium text-foreground/60">
            お名前
          </span>
          <MiniField>
            <span className="text-foreground/75">山田 太郎</span>
          </MiniField>
        </span>
        <span className="block space-y-1">
          <span className="flex items-center justify-between text-[8px] font-medium text-foreground/60">
            会社名
            <span className="font-normal text-foreground/35">任意</span>
          </span>
          <MiniField state="focus">
            <span className="text-foreground/75">株式会社</span>
            <span className="-ml-1 inline-block h-2.5 w-px animate-pulse bg-primary" />
          </MiniField>
          <span className="block text-[7.5px] text-foreground/40">
            登記上の正式名称を入力してください
          </span>
        </span>
      </Surface>
    </div>
  );
}

export function ToggleSwitchPreview() {
  const rows = [
    { label: "ダークモード", on: true },
    { label: "自動保存", on: false, animate: true },
    { label: "位置情報", on: false },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[178px] p-1.5">
        {rows.map((r) => (
          <span
            key={r.label}
            className="flex items-center gap-2 border-b border-border px-1.5 py-2 last:border-b-0"
          >
            <span className="flex-1 text-[9px] text-foreground/70">
              {r.label}
            </span>
            <span
              className={`relative h-3.5 w-6 shrink-0 rounded-full transition-colors duration-300 ${
                r.on
                  ? "bg-primary"
                  : r.animate
                    ? "bg-foreground/20 group-hover:bg-primary"
                    : "bg-foreground/20"
              }`}
            >
              <span
                className={`absolute top-0.5 size-2.5 rounded-full bg-white shadow-sm transition-all duration-300 ${
                  r.on
                    ? "left-3"
                    : r.animate
                      ? "left-0.5 group-hover:left-3"
                      : "left-0.5"
                }`}
              />
            </span>
          </span>
        ))}
      </Surface>
    </div>
  );
}

export function RadioButtonPreview() {
  const opts = [
    { label: "クレジットカード", sub: "手数料無料", on: true },
    { label: "銀行振込", sub: "3営業日以内", on: false },
    { label: "代金引換", sub: "手数料 ¥330", on: false },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[184px] space-y-1.5">
        {opts.map((o) => (
          <span
            key={o.label}
            className={`flex items-center gap-2 rounded-lg border bg-card px-2 py-1.5 ${
              o.on ? "border-primary ring-2 ring-primary/20" : "border-border"
            }`}
          >
            <span
              className={`flex size-3 shrink-0 items-center justify-center rounded-full border-2 ${
                o.on ? "border-primary" : "border-foreground/30"
              }`}
            >
              {o.on && <span className="size-1.5 rounded-full bg-primary" />}
            </span>
            <span className="flex-1">
              <span className="block text-[9px] font-semibold text-foreground/80">
                {o.label}
              </span>
              <span className="block text-[7.5px] text-foreground/40">
                {o.sub}
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function PasswordInputPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[176px] space-y-2 p-3">
        <span className="block text-[8px] font-medium text-foreground/60">
          パスワード
        </span>
        <MiniField state="focus" className="justify-between">
          <span className="tracking-[0.2em] text-foreground/75">••••••••••</span>
          <Eye className="size-2.5 shrink-0 text-foreground/45 transition-colors duration-300 group-hover:text-primary" />
        </MiniField>
        {/* 強度メーター */}
        <span className="flex gap-1">
          <span className="h-1 flex-1 rounded-full bg-emerald-500" />
          <span className="h-1 flex-1 rounded-full bg-emerald-500" />
          <span className="h-1 flex-1 rounded-full bg-emerald-500" />
          <span className="h-1 flex-1 rounded-full bg-foreground/15" />
        </span>
        <span className="flex items-center justify-between text-[7.5px]">
          <span className="text-emerald-500">強度: 強い</span>
          <span className="text-foreground/40">8文字以上</span>
        </span>
      </Surface>
    </div>
  );
}

export function SliderPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[188px] space-y-4 p-3">
        {/* 単一つまみ */}
        <span className="block space-y-2">
          <span className="flex items-center justify-between text-[8px]">
            <span className="font-medium text-foreground/60">音量</span>
            <span className="font-bold text-foreground/80">65</span>
          </span>
          <span className="relative block h-1 rounded-full bg-foreground/15">
            <span className="absolute inset-y-0 left-0 w-[65%] rounded-full bg-primary" />
            <span className="absolute -top-1 left-[65%] size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-card shadow-card transition-transform duration-300 group-hover:scale-125" />
          </span>
        </span>
        {/* レンジ */}
        <span className="block space-y-2">
          <span className="flex items-center justify-between text-[8px]">
            <span className="font-medium text-foreground/60">価格帯</span>
            <span className="font-bold text-foreground/80">¥3,000〜¥12,000</span>
          </span>
          <span className="relative block h-1 rounded-full bg-foreground/15">
            <span className="absolute inset-y-0 left-[20%] right-[25%] rounded-full bg-primary" />
            <span className="absolute -top-1 left-[20%] size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-card shadow-card" />
            <span className="absolute -top-1 left-[75%] size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-card shadow-card" />
          </span>
        </span>
      </Surface>
    </div>
  );
}

export function ComboboxPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-start pt-3">
      <div className="w-[176px]">
        <MiniField state="focus" className="justify-between">
          <span className="flex items-center gap-1.5">
            <Search className="size-2.5 text-foreground/40" />
            <span className="text-foreground/75">アコ</span>
            <span className="-ml-1 inline-block h-2.5 w-px animate-pulse bg-primary" />
          </span>
          <ChevronDown className="size-2.5 rotate-180 text-foreground/40" />
        </MiniField>
        <Surface className="mt-1 p-1">
          {[
            { pre: "アコ", post: "ーディオン" },
            { pre: "アコ", post: "ーディオンメニュー" },
          ].map((o) => (
            <span
              key={o.post}
              className="block rounded px-1.5 py-1 text-[9px] text-foreground/60 first:bg-primary/10"
            >
              <span className="font-bold text-primary">{o.pre}</span>
              {o.post}
            </span>
          ))}
          <span className="block px-1.5 pb-0.5 pt-1 text-[7px] text-foreground/35">
            2件が一致
          </span>
        </Surface>
      </div>
    </div>
  );
}

export function TextareaPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[184px]">
        <span className="mb-1 block text-[8px] font-medium text-foreground/60">
          お問い合わせ内容
        </span>
        <span className="relative block rounded-md border border-primary bg-card p-2 ring-2 ring-primary/20">
          <span className="block space-y-1.5">
            <Line w="w-full" tone="strong" />
            <Line w="w-11/12" />
            <Line w="w-full" />
            <Line w="w-2/3" />
          </span>
          {/* リサイズハンドル */}
          <span className="absolute bottom-0.5 right-0.5 size-1.5 border-b-2 border-r-2 border-foreground/25" />
        </span>
        <span className="mt-1 flex items-center justify-between text-[7.5px]">
          <span className="text-foreground/40">2,000文字まで入力できます</span>
          <span className="text-foreground/50">128 / 2000</span>
        </span>
      </div>
    </div>
  );
}

export function TagInputPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[188px]">
        <span className="mb-1 block text-[8px] font-medium text-foreground/60">
          スキル
        </span>
        <span className="flex flex-wrap items-center gap-1 rounded-md border border-primary bg-card p-1.5 ring-2 ring-primary/20">
          {["React", "TypeScript", "Figma"].map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 rounded bg-primary/10 px-1.5 py-0.5 text-[8px] font-semibold text-primary"
            >
              {t}
              <X className="size-2 opacity-60" />
            </span>
          ))}
          <span className="flex items-center py-0.5 text-[8px] text-foreground/40">
            Tail
            <span className="ml-px inline-block h-2.5 w-px animate-pulse bg-primary" />
          </span>
        </span>
        <span className="mt-1 block text-[7.5px] text-foreground/40">
          Enter または カンマ で確定
        </span>
      </div>
    </div>
  );
}

export function OtpInputPreview() {
  const digits = ["4", "8", "2", "", "", ""];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <span className="text-[9px] font-semibold text-foreground/70">
        認証コードを入力
      </span>
      <span className="flex items-center gap-1.5">
        {digits.map((d, i) => (
          <span
            key={i}
            className={`flex size-7 items-center justify-center rounded-md border bg-card text-[12px] font-bold text-foreground/85 ${
              i === 3
                ? "border-primary ring-2 ring-primary/20"
                : "border-border"
            }`}
          >
            {d}
            {i === 3 && (
              <span className="inline-block h-3.5 w-px animate-pulse bg-primary" />
            )}
          </span>
        ))}
      </span>
      <span className="text-[7.5px] text-foreground/40">
        SMSに届いた6桁の番号を入力してください
      </span>
    </div>
  );
}

export function FileUploadPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[188px] space-y-1.5">
        {/* ドロップゾーン */}
        <span className="flex flex-col items-center gap-1 rounded-lg border-2 border-dashed border-foreground/20 bg-card/50 px-3 py-3 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/5">
          <UploadCloud className="size-4 text-foreground/35 transition-colors duration-300 group-hover:text-primary" />
          <span className="text-[8px] font-semibold text-foreground/60">
            ドラッグ＆ドロップ
          </span>
          <span className="text-[7px] text-foreground/40">
            または クリックして選択（最大10MB）
          </span>
        </span>
        {/* アップロード中のファイル */}
        <Surface className="flex items-center gap-1.5 p-1.5">
          <span className="flex size-5 shrink-0 items-center justify-center rounded bg-primary/10 text-[7px] font-bold text-primary">
            PDF
          </span>
          <span className="min-w-0 flex-1 space-y-1">
            <span className="flex items-center justify-between text-[7.5px]">
              <span className="truncate text-foreground/70">請求書_2026.pdf</span>
              <span className="shrink-0 text-foreground/40">68%</span>
            </span>
            <span className="block h-1 rounded-full bg-foreground/15">
              <span className="block h-1 w-[68%] rounded-full bg-primary" />
            </span>
          </span>
        </Surface>
      </div>
    </div>
  );
}

export function InlineErrorPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[184px] space-y-2.5 p-3">
        <span className="block space-y-1">
          <span className="block text-[8px] font-medium text-foreground/60">
            電話番号
          </span>
          <MiniField state="error">
            <span className="text-foreground/75">090-1234</span>
          </MiniField>
          {/* エラーは入力欄の真下・アイコン付き */}
          <span className="flex items-start gap-1 text-[8px] font-medium leading-snug text-red-500">
            <AlertCircle className="mt-px size-2.5 shrink-0" />
            桁数が足りません。11桁で入力してください
          </span>
        </span>
        <span className="block space-y-1 opacity-60">
          <span className="block text-[8px] font-medium text-foreground/60">
            郵便番号
          </span>
          <MiniField>
            <span className="text-foreground/75">150-0001</span>
          </MiniField>
        </span>
      </Surface>
    </div>
  );
}

export function FilterPanelPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[152px] space-y-2 p-2.5">
        <span className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-foreground/80">
            絞り込み
          </span>
          <span className="text-[7.5px] text-primary">クリア</span>
        </span>
        <span className="block space-y-1 border-t border-border pt-1.5">
          <span className="block text-[8px] font-semibold text-foreground/60">
            カテゴリ
          </span>
          {[
            { l: "トップス", n: 128, on: true },
            { l: "アウター", n: 64, on: false },
          ].map((c) => (
            <span key={c.l} className="flex items-center gap-1.5">
              <span
                className={`flex size-2.5 shrink-0 items-center justify-center rounded-sm border ${
                  c.on
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-foreground/30"
                }`}
              >
                {c.on && <Check className="size-2" strokeWidth={4} />}
              </span>
              <span className="flex-1 text-[8px] text-foreground/65">{c.l}</span>
              <span className="text-[7px] text-foreground/35">{c.n}</span>
            </span>
          ))}
        </span>
        <span className="block space-y-1.5 border-t border-border pt-1.5">
          <span className="block text-[8px] font-semibold text-foreground/60">
            価格帯
          </span>
          <span className="relative block h-1 rounded-full bg-foreground/15">
            <span className="absolute inset-y-0 left-[15%] right-[30%] rounded-full bg-primary" />
            <span className="absolute -top-1 left-[15%] size-2.5 -translate-x-1/2 rounded-full border-2 border-primary bg-card" />
            <span className="absolute -top-1 left-[70%] size-2.5 -translate-x-1/2 rounded-full border-2 border-primary bg-card" />
          </span>
        </span>
        <span className="flex gap-1 pt-0.5">
          <Chip tone="primary">トップス ×</Chip>
        </span>
      </Surface>
    </div>
  );
}

export function MultiStepFormPreview() {
  const steps = ["カート", "配送", "支払い"];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[200px] space-y-2 p-2.5">
        {/* ステップ表示 */}
        <span className="flex items-center">
          {steps.map((s, i) => (
            <span key={s} className="flex flex-1 items-center last:flex-none">
              <span className="flex flex-col items-center gap-0.5">
                <span
                  className={`flex size-4 items-center justify-center rounded-full text-[7px] font-bold ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : i === 1
                        ? "border-2 border-primary text-primary"
                        : "border border-foreground/25 text-foreground/40"
                  }`}
                >
                  {i === 0 ? <Check className="size-2.5" strokeWidth={4} /> : i + 1}
                </span>
                <span
                  className={`text-[6.5px] ${
                    i <= 1 ? "font-semibold text-foreground/70" : "text-foreground/40"
                  }`}
                >
                  {s}
                </span>
              </span>
              {i < steps.length - 1 && (
                <span
                  className={`-mt-2 h-0.5 flex-1 ${
                    i === 0 ? "bg-primary" : "bg-foreground/15"
                  }`}
                />
              )}
            </span>
          ))}
        </span>
        {/* 現在ステップの中身 */}
        <span className="block space-y-1.5 border-t border-border pt-2">
          <MiniField className="h-5">お届け先の住所</MiniField>
          <MiniField className="h-5">建物名・部屋番号</MiniField>
        </span>
        <span className="flex items-center justify-between pt-0.5">
          <MiniButton tone="soft">戻る</MiniButton>
          <MiniButton
            tone="primary"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            次へ進む
          </MiniButton>
        </span>
      </Surface>
    </div>
  );
}
