import type { UIItem } from "@/types/ui";

export const badge: UIItem = {
  slug: "badge",
  name: "Badge",
  nameJa: "バッジ",
  description:
    "ステータスやカテゴリを示す小さなラベルUI。「NEW」や未読数など一目で状態を伝える。",
  category: "badge",
  tags: ["ラベル", "ステータス", "通知", "タグ"],
  aliases: [
    "NEWって書いてある小さいラベル",
    "未読件数の赤い丸",
    "ステータスを色で表す小さなタグ",
    "アイコンの右上につく数字",
    "カテゴリ名が入った丸い枠",
    "「人気」とか「セール」の小さな表示",
  ],
  whatIs: [
    "バッジ（Badge）は、ステータス・カテゴリ・数値などの短い情報を、小さな色付きラベルとして表示するUIコンポーネントです。名前は軍隊や制服に付ける記章・徽章（badge）に由来し、「小さくても一目でその人（もの）の属性が分かる」という記章の役割をそのままUIに転用しています。",
    "バッジには大きく2系統あります。1つは「公開中」「下書き」「NEW」のようなテキストラベル型で、色と短い文字で状態やカテゴリを伝えます。もう1つはアプリアイコンやベルアイコンの右上に付く数値バッジ（通知バッジ）で、未読件数や新着数を示します。後者はiPhoneのホーム画面で世界的に定着したパターンです。",
    "小さな面積で大きな情報量を伝えられる反面、色の意味付け（緑=正常、赤=エラーなど）の一貫性が重要です。デザインシステムでは通常、意味ベースのバリアント（success / warning / error / info）として定義され、管理画面やECサイトのステータス表示に欠かせない存在となっています。",
  ],
  features: [
    "短いテキストや数値を小さな色付きラベルで表示する",
    "success / warning / error などの意味を色のバリアントで表現する",
    "アイコンの右上に重ねる通知バッジ（ドット型・数値型）としても使える",
    "角丸の度合い（ピル型・角丸矩形）でトーンを調整できる",
    "塗りつぶし・淡色背景・アウトラインなど強調度の異なるスタイルがある",
    "クリック可能なタグとして絞り込みの起点になる場合もある",
  ],
  merits: [
    "省スペースで状態やカテゴリを一目で伝えられる",
    "色による分類で、一覧の中から特定の状態の項目を素早く見つけられる",
    "通知バッジは新着への気づきを促し、再訪・開封のトリガーになる",
    "デザインシステムのバリアントとして定義すれば、状態表現をプロダクト全体で統一できる",
    "実装が非常に軽く、どんなコンポーネントにも組み合わせやすい",
  ],
  demerits: [
    "多用するとノイズになり、本当に重要なバッジが埋もれる",
    "色だけで意味を伝えると、色覚多様性のあるユーザーに区別できない",
    "通知バッジの数字が溜まりすぎると、心理的負担やバッジ無視（badge blindness）を招く",
    "小さな文字は多言語化で長さが変わると崩れやすい（英語→日本語で幅が変わるなど）",
  ],
  bestPractices: [
    "色の意味付けをプロダクト全体で統一する（緑=成功、黄=注意、赤=エラー、灰=無効）",
    "色だけに頼らず、必ずテキストまたはアイコンを添える",
    "1つの行・カードに載せるバッジは2個程度までに絞る",
    "通知バッジの数値は上限を設け「99+」のように丸める",
    "「NEW」バッジには表示期限を設け、いつまでも新着のままにしない",
    "淡色背景＋濃色テキスト（例：bg-green-100 + text-green-800）はコントラストを確保しやすい定番配色",
  ],
  useCases: [
    "iPhoneのホーム画面 — アプリアイコン右上の未読数バッジ",
    "Shopify管理画面 — 注文ステータス（未発送・発送済み）の色付きバッジ",
    "GitHub — Issue/PRのラベルとステータスバッジ（Open / Merged）",
    "ECサイトの商品一覧 — 「SALE」「送料無料」「残りわずか」の訴求バッジ",
    "Slack — チャンネル名の横の未読メンション数バッジ",
  ],
  accessibility: [
    "背景色と文字色のコントラスト比4.5:1以上を確保する（小さい文字ほど重要）",
    "色だけで意味を伝えない。「エラー」等のテキストやアイコンを併用する",
    "数値のみの通知バッジにはaria-labelで「未読メッセージ3件」のように意味を補う",
    "ドット型バッジ（数字なしの点）はsr-only テキストで状態を説明する",
    "装飾目的のバッジはaria-hiddenにして読み上げのノイズを減らす",
  ],
  figma: [
    "Auto Layout（padding 上下2〜4 / 左右8〜10、角丸999）でピル型のベースを作る",
    "Variantsで意味バリアント（default / success / warning / error）を定義する",
    "色はローカル変数（Variables）で意味名（bg/success等）を付けて管理すると一括変更できる",
    "数値バッジはmin-widthを設定し、1桁でも真円に近い形を保つ",
    "テキストの長さが変わっても崩れないよう、幅はHug contentsにする",
  ],
  code: {
    html: `<!-- ステータスバッジ -->
<span class="badge badge-success">公開中</span>
<span class="badge badge-warning">下書き</span>
<span class="badge badge-error">エラー</span>
<span class="badge badge-neutral">アーカイブ</span>

<!-- 通知バッジ付きアイコン -->
<button class="icon-button" aria-label="通知：未読3件">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
  <span class="notification-badge" aria-hidden="true">3</span>
</button>

<style>
  .badge {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.6;
  }
  .badge-success { background: #dcfce7; color: #166534; }
  .badge-warning { background: #fef9c3; color: #854d0e; }
  .badge-error   { background: #fee2e2; color: #991b1b; }
  .badge-neutral { background: #f3f4f6; color: #374151; }

  .icon-button {
    position: relative;
    padding: 8px;
    border: none;
    background: none;
    cursor: pointer;
  }
  .notification-badge {
    position: absolute;
    top: 2px;
    right: 2px;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: 999px;
    background: #ef4444;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
  }
</style>`,
    tailwind: `<!-- ステータスバッジ -->
<span class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5
             text-xs font-semibold text-green-800">
  公開中
</span>
<span class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5
             text-xs font-semibold text-yellow-800">
  下書き
</span>
<span class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5
             text-xs font-semibold text-red-800">
  エラー
</span>

<!-- ドット付きステータス -->
<span class="inline-flex items-center gap-1.5 rounded-full border
             border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700">
  <span class="size-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
  稼働中
</span>

<!-- 通知バッジ付きアイコン -->
<button type="button" class="relative p-2" aria-label="通知：未読3件">
  <svg class="size-6 text-gray-600" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
  <span class="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center
               justify-center rounded-full bg-red-500 px-1 text-[11px]
               font-bold text-white"
        aria-hidden="true">
    3
  </span>
</button>`,
    react: `"use client";

import { Bell } from "lucide-react";

type Variant = "success" | "warning" | "error" | "neutral";

const variantStyles: Record<Variant, string> = {
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  neutral: "bg-gray-100 text-gray-700",
};

export function Badge({
  variant = "neutral",
  children,
}: {
  variant?: Variant;
  children: React.ReactNode;
}) {
  return (
    <span
      className={\`inline-flex items-center rounded-full px-2.5 py-0.5
                  text-xs font-semibold \${variantStyles[variant]}\`}
    >
      {children}
    </span>
  );
}

export function NotificationBell({ count }: { count: number }) {
  const display = count > 99 ? "99+" : String(count);

  return (
    <button
      type="button"
      aria-label={
        count > 0 ? \`通知：未読\${count}件\` : "通知：未読はありません"
      }
      className="relative rounded-lg p-2 hover:bg-gray-100
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <Bell aria-hidden className="size-6 text-gray-600" />
      {count > 0 && (
        <span
          aria-hidden
          className="absolute right-1 top-1 flex h-[18px] min-w-[18px]
                     items-center justify-center rounded-full bg-red-500
                     px-1 text-[11px] font-bold text-white"
        >
          {display}
        </span>
      )}
    </button>
  );
}

// 使用例
export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="success">公開中</Badge>
      <Badge variant="warning">下書き</Badge>
      <Badge variant="error">エラー</Badge>
      <NotificationBell count={3} />
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add badge
import { Badge } from "@/components/ui/badge";

export function StatusBadges() {
  return (
    <div className="flex items-center gap-2">
      {/* 標準バリアント */}
      <Badge>デフォルト</Badge>
      <Badge variant="secondary">セカンダリ</Badge>
      <Badge variant="destructive">エラー</Badge>
      <Badge variant="outline">アウトライン</Badge>

      {/* カスタムカラー（意味ベースのステータス） */}
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        公開中
      </Badge>
      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
        下書き
      </Badge>
    </div>
  );
}`,
  },
  related: ["avatar", "card", "toast", "data-table", "tooltip"],
  views: 19800,
  favorites: 720,
  collections: ["admin-ui", "saas-ui"],
  gradient: "from-lime-500/15 via-green-500/10 to-emerald-500/15",
  difficulty: 1,
  updatedAt: "2026-05-30",
};
