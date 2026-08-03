import type { UIItem } from "@/types/ui";

export const datePicker: UIItem = {
  slug: "date-picker",
  name: "Date Picker",
  nameJa: "デートピッカー",
  description:
    "入力欄からミニカレンダーを開いて日付を選択するUI。予約・フォームの定番コンポーネント。",
  category: "calendar",
  tags: ["日付選択", "フォーム", "カレンダー", "入力"],
  aliases: [
    "日付を選ぶカレンダーの小窓",
    "生年月日を入れるときに出るカレンダー",
    "チェックイン日を選ぶやつ",
    "入力欄を押すと出てくるカレンダー",
    "日付選択のポップアップ",
    "カレンダーから日にちを選ぶ入力欄",
  ],
  whatIs: [
    "デートピッカー（Date Picker）は、テキスト入力欄をクリック／タップするとミニカレンダーがポップアップし、そこから日付を選択できるフォームコンポーネントです。名前は英語の「date（日付）」と「picker（選び取るもの）」の組み合わせに由来し、「日付ピッカー」「カレンダーピッカー」とも呼ばれます。",
    "手入力に伴う形式の揺れ（2026/7/1、7月1日、07-01…）や存在しない日付の入力を防ぎ、常に正しい形式の日付を受け取れるのが本質的な価値です。単一日付の選択のほか、チェックイン／チェックアウトのような期間選択（レンジピッカー）、時刻も選ぶ日時ピッカーなどの派生形があります。",
    "HTML標準の input type=\"date\" でも基本機能は実現できますが、ブラウザごとに見た目や挙動が大きく異なるため、デザインの統一が求められるプロダクトではreact-day-pickerなどのライブラリやshadcn/uiのCalendar + Popover構成による自作が主流です。誕生日のような遠い過去の日付ではカレンダーよりセレクトや手入力が速いなど、用途による使い分けが重要なコンポーネントでもあります。",
  ],
  features: [
    "入力欄のクリックでミニカレンダーがポップオーバー表示される",
    "月移動・年移動のナビゲーションと「今日」の強調表示を持つ",
    "選択可能な範囲（最小日・最大日・定休日など）を制限できる",
    "単一日付・期間（レンジ）・複数日付などの選択モードがある",
    "手入力との併用（テキスト入力もカレンダー選択も可能）に対応できる",
    "HTML標準の input type=\"date\" ならネイティブUIが利用できる",
  ],
  merits: [
    "日付形式の揺れや「2月30日」のような不正な日付の入力を根本的に防げる",
    "カレンダー表示により曜日を確認しながら選べる（予約・イベントで特に有効）",
    "選択可能日を視覚的に制限でき、無効な予約日の選択をUIの段階で排除できる",
    "手入力より操作が簡単で、モバイルでのタップ操作と相性が良い",
    "期間選択では開始日と終了日の関係（逆転防止）をUIが保証してくれる",
  ],
  demerits: [
    "生年月日など遠い過去の日付では、月送りの連打が必要になり著しく非効率",
    "ポップオーバーの位置調整・フォーカス管理など、自作の実装コストが高い",
    "input type=\"date\" はブラウザ間で見た目・挙動の差が大きい",
    "小さなセルのタップ操作は、運動機能に制約のあるユーザーには負担になる",
    "キーボード・スクリーンリーダー対応が不完全なライブラリも多く選定に注意が要る",
  ],
  bestPractices: [
    "近い未来の日付（予約・配送）はカレンダー、遠い過去（生年月日）はセレクトや手入力を使う",
    "手入力も許可し、フォーマット例（例：2026/07/15）をプレースホルダーやヒントで示す",
    "選択不可の日（過去日・定休日・満室日）はグレーアウトし、理由が伝わる工夫をする",
    "期間選択では選択中の範囲をハイライトし、泊数など選択結果の要約を表示する",
    "モバイルではネイティブのinput type=\"date\"も有力候補。OSの最適化されたUIを活用する",
    "タイムゾーンの影響を受けないよう、日付のみの値は「YYYY-MM-DD」文字列で保持する",
  ],
  useCases: [
    "Airbnb / Booking.com — チェックイン・チェックアウトの期間選択ピッカー",
    "航空券予約サイト — 往復日程の選択と料金カレンダーの組み合わせ",
    "Google Analytics — レポート期間を指定するレンジピッカー",
    "病院予約システム — 診療日のみ選択可能にしたカレンダー",
    "経費精算SaaS — 利用日の入力欄に付くミニカレンダー",
  ],
  accessibility: [
    "トリガーボタンに aria-haspopup=\"dialog\" と aria-expanded を設定し、開閉状態を伝える",
    "カレンダーを開いたらフォーカスを移動し、Escapeで閉じてトリガーへフォーカスを戻す",
    "日付グリッドは矢印キーで日、PageUp/PageDownで月を移動できるようにする",
    "各日付ボタンに「2026年7月15日 水曜日」のような読み上げテキストを付与する",
    "選択不可の日は aria-disabled を設定し、理由をテキストでも提供する",
    "カレンダー操作が難しいユーザーのため、テキスト直接入力の代替手段を残す",
  ],
  figma: [
    "入力欄＋ポップオーバーのカレンダーを別コンポーネントに分け、組み合わせて使う構造にする",
    "日付セルはVariants（default / hover / selected / today / disabled / 範囲内）で状態を網羅する",
    "期間選択の「開始日・終了日・中間ハイライト」の3スタイルを用意し、角丸の繋がりに注意する",
    "月切替のプロトタイプはVariant切替＋Smart Animateで擬似的に再現できる",
    "エラー状態（未選択のまま送信など）の入力欄デザインもセットで用意する",
  ],
  code: {
    html: `<!-- 最も手軽なのはHTML標準のinput type="date" -->
<div class="field">
  <label for="checkin">チェックイン日</label>
  <input
    type="date"
    id="checkin"
    name="checkin"
    min="2026-07-01"
    max="2026-12-31"
    value="2026-07-15"
  />
  <p class="hint">本日以降の日付を選択してください</p>
</div>

<style>
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 280px;
  }
  .field label {
    font-size: 14px;
    font-weight: 600;
  }
  .field input[type="date"] {
    padding: 10px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 16px; /* iOSのズーム防止に16px以上 */
    font-family: inherit;
  }
  .field input[type="date"]:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  .hint {
    font-size: 12px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<!-- トリガー入力欄 + ポップオーバー式カレンダーの骨格 -->
<div class="relative max-w-xs">
  <label for="date" class="mb-1.5 block text-sm font-semibold">
    予約日
  </label>
  <button
    type="button"
    id="date"
    aria-haspopup="dialog"
    aria-expanded="true"
    class="flex w-full items-center justify-between rounded-xl border
           border-gray-300 px-3.5 py-2.5 text-left text-base
           hover:border-gray-400 focus:outline-none focus:ring-4
           focus:ring-blue-100"
  >
    2026/07/15
    <svg class="size-4 text-gray-400" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  </button>

  <!-- ポップオーバー（開いた状態） -->
  <div
    role="dialog"
    aria-label="日付を選択"
    class="absolute z-10 mt-2 w-72 rounded-2xl border border-gray-200
           bg-white p-4 shadow-lg"
  >
    <div class="mb-2 flex items-center justify-between">
      <button type="button" aria-label="前の月"
        class="rounded-lg p-1.5 hover:bg-gray-100">‹</button>
      <p class="text-sm font-bold">2026年7月</p>
      <button type="button" aria-label="次の月"
        class="rounded-lg p-1.5 hover:bg-gray-100">›</button>
    </div>
    <div class="grid grid-cols-7 gap-1 text-center text-sm">
      <!-- 選択中の日 -->
      <button type="button" aria-pressed="true"
        class="rounded-full bg-blue-600 py-1.5 font-bold text-white">
        15
      </button>
      <!-- 通常の日 -->
      <button type="button"
        class="rounded-full py-1.5 hover:bg-gray-100">16</button>
      <!-- 選択不可の日 -->
      <button type="button" disabled
        class="rounded-full py-1.5 text-gray-300">17</button>
    </div>
  </div>
</div>`,
    react: `"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

export function DatePicker({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (d: Date) => void;
}) {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(() => value ?? new Date());
  const rootRef = useRef<HTMLDivElement>(null);

  // 外側クリックとEscapeで閉じる
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const isSameDay = (a: Date | null, b: Date) =>
    !!a &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <div ref={rootRef} className="relative max-w-xs">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl
                   border border-gray-300 px-3.5 py-2.5 text-left
                   focus:outline-none focus:ring-4 focus:ring-blue-100"
      >
        {value
          ? \`\${value.getFullYear()}/\${value.getMonth() + 1}/\${value.getDate()}\`
          : "日付を選択"}
        <CalendarDays className="size-4 text-gray-400" aria-hidden />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="日付を選択"
          className="absolute z-10 mt-2 w-72 rounded-2xl border
                     border-gray-200 bg-white p-4 shadow-lg"
        >
          <div className="mb-2 flex items-center justify-between">
            <button type="button" aria-label="前の月"
              onClick={() => setCursor(new Date(year, month - 1, 1))}
              className="rounded-lg p-1.5 hover:bg-gray-100">‹</button>
            <p className="text-sm font-bold" aria-live="polite">
              {year}年{month + 1}月
            </p>
            <button type="button" aria-label="次の月"
              onClick={() => setCursor(new Date(year, month + 1, 1))}
              className="rounded-lg p-1.5 hover:bg-gray-100">›</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs
                          font-semibold text-gray-500">
            {["日", "月", "火", "水", "木", "金", "土"].map((w) => (
              <span key={w} className="py-1">{w}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {Array.from({ length: firstDay }, (_, i) => (
              <span key={\`empty-\${i}\`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const d = new Date(year, month, i + 1);
              const selected = isSameDay(value, d);
              return (
                <button
                  key={i}
                  type="button"
                  aria-pressed={selected}
                  aria-label={\`\${year}年\${month + 1}月\${i + 1}日\`}
                  onClick={() => {
                    onChange(d);
                    setOpen(false);
                  }}
                  className={\`rounded-full py-1.5 \${
                    selected
                      ? "bg-blue-600 font-bold text-white"
                      : "hover:bg-gray-100"
                  }\`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add calendar popover button
// shadcn/ui公式のDate Pickerパターン：Calendar + Popoverの組み合わせ
"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerDemo() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-60 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon aria-hidden />
          {date
            ? format(date, "yyyy年M月d日(E)", { locale: ja })
            : "日付を選択"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ja}
          // 過去日を選択不可にする例
          disabled={{ before: new Date() }}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}`,
  },
  related: ["calendar-view", "select", "text-field", "popover"],
  views: 43200,
  favorites: 1990,
  collections: ["saas-ui", "finance-ui", "medical-ui"],
  gradient: "from-cyan-500/15 via-teal-500/10 to-sky-500/15",
  difficulty: 2,
  updatedAt: "2026-07-11",
};
