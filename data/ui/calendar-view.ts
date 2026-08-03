import type { UIItem } from "@/types/ui";

export const calendarView: UIItem = {
  slug: "calendar-view",
  name: "Calendar",
  nameJa: "カレンダービュー",
  description:
    "月・週・日のグリッドで予定やデータを俯瞰するUI。スケジュール管理の中核パターン。",
  category: "calendar",
  tags: ["予定表", "スケジュール", "グリッド", "時間管理"],
  aliases: [
    "予定が並ぶカレンダーの画面",
    "月表示のスケジュール表",
    "Googleカレンダーみたいな画面",
    "日付のマス目に予定が入るやつ",
    "週表示のタイムテーブル",
    "予約状況が見られるカレンダー",
  ],
  whatIs: [
    "カレンダービュー（Calendar View）は、月・週・日といった時間軸のグリッド上に予定やイベントを配置し、スケジュール全体を俯瞰できるようにするUIコンポーネントです。名前は暦を意味する「Calendar」に由来し、その語源はローマ暦で月の初日を指した「calendae（カレンダエ）」に遡ります。紙のカレンダーや手帳のメタファーをそのまま画面に持ち込んだ、直感性の高いパターンです。",
    "単一の日付を選択するために小さな月間カレンダーを表示するデートピッカーとは役割が異なり、カレンダービューは予定・予約・タスクといったデータの表示と操作（作成・移動・リサイズ）そのものが主目的です。月表示で全体を俯瞰し、週・日表示で時間単位の詳細を管理するというビュー切替が基本構造になります。",
    "GoogleカレンダーやOutlookに代表されるスケジュール管理のほか、予約システムの空き状況表示、プロジェクトの締切管理、勤怠・シフト管理など、時間を軸に持つあらゆるデータの可視化に応用されます。ドラッグ&ドロップによる予定の移動など、リッチなインタラクションを伴う実装難度の高いコンポーネントです。",
  ],
  features: [
    "月・週・日・アジェンダ（リスト）など複数のビューを切り替えられる",
    "グリッドのセル（日付・時間帯）にイベントをチップ状に配置して表示する",
    "前月・翌月への移動と「今日」への即時ジャンプナビゲーションを持つ",
    "ドラッグ&ドロップで予定の移動、端のドラッグで時間変更ができる実装が多い",
    "終日イベント・複数日にまたがるイベントの帯表示に対応する",
    "祝日・営業日・空き状況など、日付単位のメタ情報を色や記号で表現できる",
  ],
  merits: [
    "時間軸に沿った情報を一望でき、予定の過密・空きが直感的に分かる",
    "紙のカレンダーという普遍的なメタファーのため、説明なしで使い方が伝わる",
    "予約・シフト・締切など、時間を持つあらゆるドメインに応用が利く",
    "ドラッグ操作による予定変更は、フォーム入力よりはるかに速い",
    "週・日ビューでは時間の重なり（ダブルブッキング）を視覚的に検出できる",
  ],
  demerits: [
    "セルへのイベント詰め込み・重なり処理・複数日帯など、実装難度が非常に高い",
    "モバイルの狭い画面では月表示のセル内に情報をほとんど出せない",
    "タイムゾーンや夏時間、月またぎの週の扱いなど、日付計算の罠が多い",
    "1日に大量のイベントがあると「+5件」のような省略が必要になり一覧性が落ちる",
    "キーボード操作・スクリーンリーダー対応まで含めると開発コストが大きい",
  ],
  bestPractices: [
    "ゼロから自作せず、FullCalendarやReact Big Calendarなど実績あるライブラリを検討する",
    "「今日」を色やリングで強調し、現在地を常に見失わせない",
    "モバイルでは月グリッドにドットのみ表示し、タップで下部にその日の予定リストを出す構成にする",
    "イベントの色分けはカテゴリ数を絞り（5色程度）、凡例を添える",
    "空のセルのクリック／ドラッグで新規予定を作成できるようにし、作成導線を短くする",
    "日付や時刻はサーバーではUTC、表示時にユーザーのタイムゾーンへ変換する方針を最初に固める",
  ],
  useCases: [
    "Googleカレンダー — 月・週・日ビューとドラッグ操作によるスケジュール管理の代表例",
    "Notionカレンダービュー — データベースの日付プロパティをカレンダー表示",
    "Airbnb — 宿泊料金と空き状況を月間カレンダーで表示",
    "病院・美容院の予約システム — 空き枠の可視化と予約受付",
    "勤怠・シフト管理SaaS — スタッフの出勤予定を週次グリッドで管理",
  ],
  accessibility: [
    "グリッドには role=\"grid\"、各日付セルには role=\"gridcell\" を与え、構造を支援技術に伝える",
    "矢印キーで日付間、PageUp/PageDownで月間を移動できるキーボード操作を実装する",
    "各セルには「7月15日 火曜日 予定2件」のように読み上げ用の aria-label を付与する",
    "今日・選択中・イベント有無を色だけでなく形状（リング・ドット）やテキストでも示す",
    "ビュー切替（月/週/日）の変更結果を aria-live で通知する",
    "ドラッグ&ドロップ操作には、メニューからの日時変更などキーボード代替手段を用意する",
  ],
  figma: [
    "日付セルを1コンポーネント化し、状態（default / today / selected / 他月 / イベント有）をVariantsで管理する",
    "7列グリッドはAuto LayoutよりGridレイアウト機能を使うと行の高さが揃えやすい",
    "イベントチップは別コンポーネントにし、色をカテゴリのsemantic tokenと紐づける",
    "月によって行数が5行・6行と変わるため、両パターンでレイアウト崩れを確認する",
    "週ビューは時間軸（縦）の1時間=固定高でルーラーを作り、イベントの高さ=時間長で表現する",
    "「+5件」の省略表示と、クリックで開くその日の詳細ポップオーバーもセットでデザインする",
  ],
  code: {
    html: `<div class="calendar">
  <div class="calendar-header">
    <button type="button" aria-label="前の月">‹</button>
    <h2>2026年7月</h2>
    <button type="button" aria-label="次の月">›</button>
  </div>
  <table class="calendar-grid">
    <thead>
      <tr>
        <th>日</th><th>月</th><th>火</th><th>水</th>
        <th>木</th><th>金</th><th>土</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="other-month">28</td><td class="other-month">29</td>
        <td class="other-month">30</td><td>1</td><td>2</td><td>3</td><td>4</td>
      </tr>
      <tr>
        <td>5</td><td>6</td><td>7</td>
        <td class="today">8<span class="event">定例MTG</span></td>
        <td>9</td><td>10</td><td>11</td>
      </tr>
      <!-- 以降の週も同様 -->
    </tbody>
  </table>
</div>

<style>
  .calendar { max-width: 640px; font-size: 14px; }
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .calendar-grid { width: 100%; border-collapse: collapse; }
  .calendar-grid th {
    padding: 8px;
    color: #6b7280;
    font-weight: 600;
    font-size: 12px;
  }
  .calendar-grid td {
    height: 88px;
    padding: 6px;
    border: 1px solid #f3f4f6;
    vertical-align: top;
  }
  .other-month { color: #d1d5db; }
  .today { background: #eff6ff; font-weight: 700; }
  .event {
    display: block;
    margin-top: 4px;
    padding: 2px 6px;
    background: #3b82f6;
    color: #fff;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 500;
  }
</style>`,
    tailwind: `<div class="max-w-2xl">
  <div class="mb-3 flex items-center justify-between">
    <button type="button" aria-label="前の月"
      class="rounded-lg p-2 hover:bg-gray-100">‹</button>
    <h2 class="font-bold">2026年7月</h2>
    <button type="button" aria-label="次の月"
      class="rounded-lg p-2 hover:bg-gray-100">›</button>
  </div>

  <div class="grid grid-cols-7 text-center text-xs font-semibold text-gray-500">
    <div class="py-2 text-red-500">日</div>
    <div class="py-2">月</div><div class="py-2">火</div>
    <div class="py-2">水</div><div class="py-2">木</div>
    <div class="py-2">金</div>
    <div class="py-2 text-sky-500">土</div>
  </div>

  <div class="grid grid-cols-7 border-l border-t border-gray-100 text-sm">
    <!-- 通常の日 -->
    <div class="h-22 border-b border-r border-gray-100 p-1.5">7</div>
    <!-- 今日 + イベント -->
    <div class="h-22 border-b border-r border-gray-100 bg-blue-50 p-1.5">
      <span class="inline-flex size-6 items-center justify-center
                   rounded-full bg-blue-600 font-bold text-white">8</span>
      <span class="mt-1 block truncate rounded-md bg-blue-500 px-1.5
                   py-0.5 text-[11px] font-medium text-white">
        定例MTG
      </span>
    </div>
    <!-- 他の月の日 -->
    <div class="h-22 border-b border-r border-gray-100 p-1.5 text-gray-300">
      1
    </div>
    <!-- 以降のセルも同様 -->
  </div>
</div>`,
    react: `"use client";

import { useMemo, useState } from "react";

type CalendarEvent = { date: string; title: string };

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

export function CalendarView({ events }: { events: CalendarEvent[] }) {
  const [cursor, setCursor] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const cells = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const start = new Date(year, month, 1 - firstDay);
    // 6週 x 7日 = 42セルで固定し、月ごとの高さ変化を防ぐ
    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, [cursor]);

  const fmt = (d: Date) =>
    \`\${d.getFullYear()}-\${String(d.getMonth() + 1).padStart(2, "0")}-\${String(
      d.getDate()
    ).padStart(2, "0")}\`;
  const todayKey = fmt(new Date());

  const move = (diff: number) =>
    setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + diff, 1));

  return (
    <div className="max-w-2xl">
      <div className="mb-3 flex items-center justify-between">
        <button type="button" aria-label="前の月" onClick={() => move(-1)}
          className="rounded-lg p-2 hover:bg-gray-100">‹</button>
        <h2 className="font-bold" aria-live="polite">
          {cursor.getFullYear()}年{cursor.getMonth() + 1}月
        </h2>
        <button type="button" aria-label="次の月" onClick={() => move(1)}
          className="rounded-lg p-2 hover:bg-gray-100">›</button>
      </div>

      <div role="grid" aria-label="月間カレンダー">
        <div role="row" className="grid grid-cols-7 text-center text-xs
                                   font-semibold text-gray-500">
          {WEEKDAYS.map((w) => (
            <div key={w} role="columnheader" className="py-2">{w}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 border-l border-t border-gray-100">
          {cells.map((d) => {
            const key = fmt(d);
            const dayEvents = events.filter((e) => e.date === key);
            const isToday = key === todayKey;
            const isOtherMonth = d.getMonth() !== cursor.getMonth();
            return (
              <div
                key={key}
                role="gridcell"
                aria-label={\`\${d.getMonth() + 1}月\${d.getDate()}日 予定\${dayEvents.length}件\`}
                className={\`min-h-20 border-b border-r border-gray-100 p-1.5
                            text-sm \${isOtherMonth ? "text-gray-300" : ""}
                            \${isToday ? "bg-blue-50" : ""}\`}
              >
                <span
                  className={\`inline-flex size-6 items-center justify-center
                              rounded-full \${
                                isToday ? "bg-blue-600 font-bold text-white" : ""
                              }\`}
                >
                  {d.getDate()}
                </span>
                {dayEvents.slice(0, 2).map((e) => (
                  <span key={e.title}
                    className="mt-0.5 block truncate rounded-md bg-blue-500
                               px-1.5 py-0.5 text-[11px] font-medium text-white">
                    {e.title}
                  </span>
                ))}
                {dayEvents.length > 2 && (
                  <span className="text-[11px] text-gray-500">
                    +{dayEvents.length - 2}件
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add calendar
// shadcn/uiのCalendar（react-day-basedの日付選択）は単一日付の
// 選択UIです。イベント表示付きのカレンダービューにするには、
// DayContentのカスタムレンダリングでドットや件数を重ねます。
"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const eventDates = ["2026-07-08", "2026-07-15", "2026-07-22"];

export function EventCalendar() {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  const hasEvent = (date: Date) =>
    eventDates.includes(
      \`\${date.getFullYear()}-\${String(date.getMonth() + 1).padStart(2, "0")}-\${String(date.getDate()).padStart(2, "0")}\`
    );

  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={setSelected}
      modifiers={{ hasEvent }}
      modifiersClassNames={{
        hasEvent:
          "relative after:absolute after:bottom-1 after:left-1/2 " +
          "after:size-1 after:-translate-x-1/2 after:rounded-full " +
          "after:bg-blue-500",
      }}
      className="rounded-xl border"
    />
  );
}

// 本格的な予定管理（週ビュー・D&D）にはFullCalendarや
// React Big Calendarなど専用ライブラリの採用を推奨します。`,
  },
  related: ["date-picker", "data-table", "timeline", "kanban-board"],
  views: 22600,
  favorites: 950,
  collections: ["saas-ui", "education-ui", "medical-ui"],
  gradient: "from-sky-500/15 via-blue-500/10 to-cyan-500/15",
  difficulty: 3,
  updatedAt: "2026-06-09",
};
