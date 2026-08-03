import type { UIItem } from "@/types/ui";

export const timeline: UIItem = {
  slug: "timeline",
  name: "Timeline",
  nameJa: "タイムライン",
  description:
    "出来事を時系列に沿って縦や横に並べるUI。履歴・進捗・沿革を直感的に伝えられる。",
  category: "timeline",
  tags: ["時系列", "履歴", "アクティビティ", "沿革"],
  aliases: [
    "時系列で縦に並ぶやつ",
    "線でつながった履歴表示",
    "会社の沿革みたいな表示",
    "配送状況が順番に出る画面",
    "活動履歴のリスト",
    "点と線でつながった経歴表示",
  ],
  whatIs: [
    "タイムライン（Timeline）は、出来事やアクティビティを時間軸に沿って並べ、点（ドット）と線（コネクタ）で繋いで表現するUIコンポーネントです。「time（時間）」と「line（線）」の組み合わせで、歴史年表のように時間の流れを1本の線として可視化することに由来します。SNSの投稿フィードも「タイムライン」と呼ばれますが、UIコンポーネントとしては年表型の表現を指すのが一般的です。",
    "「いつ・何が起きたか」という情報は表形式よりも線で繋いだ形式の方が圧倒的に把握しやすく、注文の配送状況、プロジェクトの活動履歴、会社沿革、職務経歴、リリースノートなど、時間の前後関係が意味を持つあらゆる情報に適しています。",
    "縦型が最も一般的で、各項目は日時・タイトル・説明・アイコンで構成されます。実装はリスト構造にCSSで線とドットを描くだけとシンプルで、セマンティクスも <ol>（順序付きリスト）で自然に表現できるため、難易度の低さに対して情報伝達力が高いパターンです。",
  ],
  features: [
    "出来事を時系列順に並べ、ドットとコネクタ線で連続性を表現する",
    "各項目に日時・タイトル・説明・アイコン・ステータス色を持たせられる",
    "縦型（モバイル向き）と横型（進捗ステップ向き）のレイアウトがある",
    "左右交互に項目を配置する「交互型（alternate）」で大画面を活かせる",
    "完了・進行中・未来をドットの色や塗りで区別できる",
    "無限スクロールと組み合わせてアクティビティフィードとして拡張できる",
  ],
  merits: [
    "時間の前後関係・因果関係がひと目で理解できる",
    "表形式よりも視線誘導が自然で、モバイルの縦スクロールと相性が良い",
    "「今どこまで進んでいるか」を示す進捗表現としても機能する",
    "項目ごとに情報量を変えられる柔軟性がある（短い通知から長い説明まで）",
    "実装が単純なリスト＋CSSで完結し、保守コストが低い",
  ],
  demerits: [
    "項目数が多くなると縦に非常に長くなり、目的の時点を探しにくい",
    "並列で起きた出来事（同時刻の複数イベント）の表現が苦手",
    "横型タイムラインはモバイルで破綻しやすく、レスポンシブ対応が必要",
    "装飾（線・ドット）が主役になりすぎると、肝心の内容が読みにくくなる",
    "時系列以外の並び替え（重要度順など）と両立できない",
  ],
  bestPractices: [
    "最新の項目を上に置くか（アクティビティ履歴）、古い順にするか（沿革・手順）を用途で決め、一貫させる",
    "日時は「3時間前」のような相対表記と絶対表記（title属性やツールチップ）を併用する",
    "項目数が多い場合は「もっと見る」やページネーションで分割し、初期表示を絞る",
    "ステータス（完了・進行中・エラー）をドットの色だけでなくアイコンやテキストでも区別する",
    "セマンティクスは <ol> と <li> で組み、線とドットは装飾として擬似要素で描く",
    "交互型レイアウトはデスクトップ限定にし、モバイルでは左寄せ1列に畳む",
  ],
  useCases: [
    "ヤマト運輸・Amazonの配送追跡 — 「発送済み→輸送中→配達完了」を時系列表示",
    "GitHub — Issue・PR上のコメントやコミットのアクティビティタイムライン",
    "Stripe Dashboard — 支払いオブジェクトのイベント履歴表示",
    "コーポレートサイトの会社沿革ページ — 創業からの歩みを年表形式で紹介",
    "LinkedIn・Wantedlyの職務経歴 — 経歴を時系列で表示するプロフィール",
    "SaaSのリリースノート／チェンジログページ",
  ],
  accessibility: [
    "時系列リストは <ol> でマークアップし、順序に意味があることを支援技術に伝える",
    "日時は <time dateTime=\"...\"> 要素で機械可読にする",
    "ドットや線などの装飾要素には aria-hidden=\"true\" を付け、読み上げノイズを防ぐ",
    "ステータスを色だけで伝えず、テキストラベルやアイコン（aria-label付き）を併記する",
    "自動更新されるアクティビティフィードでは aria-live=\"polite\" の適用を検討する",
    "コントラスト比を確保する。薄いグレーの日時テキストは4.5:1を下回りがちなので注意する",
  ],
  figma: [
    "1項目を「ドット＋線」列と「コンテンツ」列の横並びAuto Layoutで組み、縦に積む",
    "線は幅2pxの矩形をFill containerで伸ばすと、コンテンツの高さに追従する",
    "ドットはstatus（done / current / upcoming）のVariantを持つコンポーネントにする",
    "最後の項目だけ線を非表示にするため、線のレイヤーをBoolean Propertyで制御する",
    "日時・タイトル・説明のテキストスタイルを段階付けし、視線の階層を作る",
  ],
  code: {
    html: `<ol class="timeline">
  <li class="item done">
    <div class="marker" aria-hidden="true"></div>
    <div class="content">
      <time datetime="2026-07-01T10:00">7月1日 10:00</time>
      <h3>ご注文を受け付けました</h3>
      <p>注文番号 #12345 を受け付けました。</p>
    </div>
  </li>
  <li class="item done">
    <div class="marker" aria-hidden="true"></div>
    <div class="content">
      <time datetime="2026-07-02T09:30">7月2日 9:30</time>
      <h3>商品を発送しました</h3>
      <p>ヤマト運輸にてお届けします。</p>
    </div>
  </li>
  <li class="item current">
    <div class="marker" aria-hidden="true"></div>
    <div class="content">
      <time datetime="2026-07-03T08:00">7月3日 8:00</time>
      <h3>配達中</h3>
      <p>本日中にお届け予定です。</p>
    </div>
  </li>
</ol>

<style>
  .timeline { list-style: none; margin: 0; padding: 0; }
  .item {
    position: relative;
    padding: 0 0 32px 32px;
  }
  /* コネクタ線 */
  .item::before {
    content: "";
    position: absolute; left: 7px; top: 8px; bottom: 0;
    width: 2px; background: #e5e7eb;
  }
  .item:last-child::before { display: none; }
  .marker {
    position: absolute; left: 0; top: 4px;
    width: 16px; height: 16px; border-radius: 9999px;
    background: #fff; border: 2px solid #d1d5db;
  }
  .item.done .marker { background: #10b981; border-color: #10b981; }
  .item.current .marker { border-color: #10b981; }
  .content time { font-size: 12px; color: #6b7280; }
  .content h3 { margin: 4px 0; font-size: 15px; }
  .content p { margin: 0; color: #6b7280; font-size: 14px; }
</style>`,
    tailwind: `<ol class="max-w-md">
  <!-- 完了した項目 -->
  <li class="relative pb-8 pl-8">
    <span class="absolute bottom-0 left-[7px] top-2 w-0.5 bg-gray-200"
          aria-hidden="true"></span>
    <span class="absolute left-0 top-1 size-4 rounded-full border-2
                 border-emerald-500 bg-emerald-500" aria-hidden="true"></span>
    <time datetime="2026-07-01T10:00" class="text-xs text-gray-500">
      7月1日 10:00
    </time>
    <h3 class="mt-1 font-semibold">ご注文を受け付けました</h3>
    <p class="text-sm text-gray-600">注文番号 #12345 を受け付けました。</p>
  </li>

  <!-- 進行中の項目 -->
  <li class="relative pb-8 pl-8">
    <span class="absolute bottom-0 left-[7px] top-2 w-0.5 bg-gray-200"
          aria-hidden="true"></span>
    <span class="absolute left-0 top-1 size-4 rounded-full border-2
                 border-emerald-500 bg-white" aria-hidden="true"></span>
    <time datetime="2026-07-03T08:00" class="text-xs text-gray-500">
      7月3日 8:00
    </time>
    <h3 class="mt-1 font-semibold">配達中</h3>
    <p class="text-sm text-gray-600">本日中にお届け予定です。</p>
  </li>

  <!-- 未来の項目（線なし） -->
  <li class="relative pl-8">
    <span class="absolute left-0 top-1 size-4 rounded-full border-2
                 border-gray-300 bg-white" aria-hidden="true"></span>
    <p class="text-sm font-medium text-gray-400">配達完了</p>
  </li>
</ol>`,
    react: `"use client";

import { Check } from "lucide-react";

type TimelineItem = {
  datetime: string;
  label: string;
  title: string;
  description?: string;
  status: "done" | "current" | "upcoming";
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="max-w-md" aria-label="配送状況">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={i} className={\`relative pl-8 \${isLast ? "" : "pb-8"}\`}>
            {!isLast && (
              <span
                aria-hidden="true"
                className={\`absolute bottom-0 left-[7px] top-2 w-0.5
                            \${item.status === "done"
                              ? "bg-emerald-500"
                              : "bg-gray-200"}\`}
              />
            )}
            <span
              aria-hidden="true"
              className={\`absolute left-0 top-1 flex size-4 items-center
                          justify-center rounded-full border-2
                          \${item.status === "done"
                            ? "border-emerald-500 bg-emerald-500"
                            : item.status === "current"
                              ? "border-emerald-500 bg-white"
                              : "border-gray-300 bg-white"}\`}
            >
              {item.status === "done" && (
                <Check className="size-2.5 text-white" strokeWidth={3} />
              )}
            </span>
            <time dateTime={item.datetime} className="text-xs text-gray-500">
              {item.label}
            </time>
            <h3
              className={\`mt-1 text-sm font-semibold
                          \${item.status === "upcoming" ? "text-gray-400" : ""}\`}
            >
              {item.title}
              {item.status === "current" && (
                <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5
                                 text-xs font-medium text-emerald-600">
                  進行中
                </span>
              )}
            </h3>
            {item.description && (
              <p className="mt-0.5 text-sm text-gray-600">{item.description}</p>
            )}
          </li>
        );
      })}
    </ol>
  );
}`,
    shadcn: `// shadcn/uiに専用のTimelineコンポーネントはないため、
// 既存プリミティブ（Badge等）と組み合わせて構築するのが定石です
// npx shadcn@latest add badge
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const events = [
  {
    datetime: "2026-07-01T10:00",
    label: "7月1日 10:00",
    title: "ご注文を受け付けました",
    status: "done" as const,
  },
  {
    datetime: "2026-07-02T09:30",
    label: "7月2日 9:30",
    title: "商品を発送しました",
    status: "done" as const,
  },
  {
    datetime: "2026-07-03T08:00",
    label: "7月3日 8:00",
    title: "配達中",
    status: "current" as const,
  },
];

export function OrderTimeline() {
  return (
    <ol className="max-w-md" aria-label="配送状況">
      {events.map((event, i) => (
        <li
          key={event.datetime}
          className={cn("relative pl-8", i < events.length - 1 && "pb-8")}
        >
          {i < events.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[7px] top-2 w-0.5 bg-border"
            />
          )}
          <span
            aria-hidden="true"
            className={cn(
              "absolute left-0 top-1 size-4 rounded-full border-2",
              event.status === "done"
                ? "border-primary bg-primary"
                : "border-primary bg-background"
            )}
          />
          <time dateTime={event.datetime}
                className="text-xs text-muted-foreground">
            {event.label}
          </time>
          <h3 className="mt-1 text-sm font-semibold">
            {event.title}
            {event.status === "current" && (
              <Badge variant="secondary" className="ml-2">進行中</Badge>
            )}
          </h3>
        </li>
      ))}
    </ol>
  );
}`,
  },
  related: ["stepper", "progress-bar", "card", "empty-state"],
  views: 12300,
  favorites: 470,
  collections: ["saas-ui", "admin-ui", "ec-ui"],
  gradient: "from-emerald-500/15 via-green-500/10 to-lime-500/15",
  difficulty: 1,
  updatedAt: "2026-05-15",
};
