import type { UIItem } from "@/types/ui";

export const banner: UIItem = {
  slug: "banner",
  name: "Banner",
  nameJa: "バナー通知",
  description:
    "ページ内に帯状に常駐して重要な状態や注意を伝える通知UI。トーストと違い自動では消えない。",
  category: "toast",
  tags: ["通知", "警告", "ステータス", "帯状UI"],
  aliases: [
    "画面の上に出る帯状のお知らせ",
    "消えない通知の帯",
    "警告の黄色い帯",
    "メール未認証ですと出続けるやつ",
    "ページ内に貼り付く注意書き",
    "横長のお知らせ枠",
  ],
  whatIs: [
    "バナー通知（Banner）は、ページやセクションの上部に帯状に表示され、重要な状態・警告・案内をユーザーに伝え続ける通知UIです。名前は「横断幕・旗（banner）」に由来し、横長の帯がページに掲げられる見た目から名付けられました。info（案内）／success（成功）／warning（注意）／error（エラー）の4種の意味カラーを持つのが一般的です。",
    "似た帯状UIであるアナウンスメントバー（announcement-bar）との違いは目的と位置です。アナウンスメントバーはサイト最上部（ヘッダーの上）に置かれるマーケティング目的の告知帯（セール・キャンペーン情報など）であるのに対し、バナー通知はページのコンテンツ領域内に置かれ、「メール未認証」「支払い失敗」「メンテナンス予定」など、ユーザーの状態やシステムの状況に関わる機能的な通知を担います。",
    "トーストやスナックバーが数秒で自動消滅する一時通知であるのに対し、バナーは問題が解消されるかユーザーが明示的に閉じるまで表示され続ける持続型の通知です。「見逃されては困るが、操作を中断させるほどではない」という中程度の重要度の情報に最適な位置づけです。",
  ],
  features: [
    "ページやセクションの上部に横幅いっぱいの帯として表示される",
    "info / success / warning / error の意味カラーとアイコンで重要度を伝える",
    "自動では消えず、状態解消またはユーザーの閉じる操作まで持続する",
    "「再送信する」「詳細を見る」などのアクションボタンを内包できる",
    "閉じるボタンの有無を通知の重要度に応じて制御できる（強制表示型も可能）",
    "ページ単位・アプリ全体・カード内など表示スコープを選べる",
  ],
  merits: [
    "トーストと違い読み逃しがなく、対応が必要な状態を確実に伝えられる",
    "モーダルと違い操作をブロックしないため、作業の文脈を壊さない",
    "意味カラーの体系により、重要度がひと目で判別できる",
    "解決アクションをその場に置けるため、問題解消までの導線が短い",
    "画面上部という一等地を使うことで、視認性が安定して高い",
  ],
  demerits: [
    "常時表示のため、乱用するとバナー慣れ（バナーブラインドネス）で無視されるようになる",
    "複数のバナーが積み重なると画面上部を圧迫し、本来のコンテンツが押し下げられる",
    "閉じた後の再表示ポリシー（いつ・どの条件で再表示するか）の設計が漏れがち",
    "広告の「バナー」と用語が紛らわしく、チーム内で認識がずれることがある",
    "表示・非表示でレイアウトシフトが発生しやすい",
  ],
  bestPractices: [
    "同時に表示するバナーは1つに絞り、複数ある場合は重要度の最も高いものを優先する",
    "一時的な操作結果はトースト、持続的な状態はバナーと、使い分けの基準をチームで揃える",
    "「何が起きているか＋どうすればよいか」をワンセットで書き、解決アクションを併設する",
    "ユーザーが対処できない情報（メンテ告知など）には閉じるボタンを付け、選択権を残す",
    "warning / error では色に加えてアイコンと文言で意味を伝え、色覚多様性に配慮する",
    "閉じた状態をローカルストレージ等に記録し、同じ通知を何度も再表示しない",
  ],
  useCases: [
    "GitHub — メール未認証時に「Verify your email address」バナーを全ページ上部に表示",
    "Stripe Dashboard — テストモード中であることを示すオレンジの帯",
    "Google Workspace — サブスクリプションの支払い失敗を管理画面上部で警告",
    "SaaS管理画面 — 計画メンテナンスの日時告知バナー",
    "ECサイトのマイページ — 住所未登録や本人確認未完了の案内帯",
  ],
  accessibility: [
    "警告・エラーの動的表示には role=\"alert\"、情報系には role=\"status\" を使い分ける",
    "ページ読み込み時から存在する静的なバナーにはライブリージョンは不要。見出しや文書構造で伝える",
    "色だけに頼らず、アイコン＋テキストで種別（警告・エラー等）を明示する",
    "閉じるボタンには aria-label=\"通知を閉じる\" を付け、キーボードで操作可能にする",
    "テキストと背景のコントラスト比4.5:1以上を、淡色背景（黄・赤の薄色）でも確保する",
    "バナー内のアクションはTab順序に自然に含め、フォーカスリングを視認できるようにする",
  ],
  figma: [
    "info / success / warning / errorの4種をVariantsで作り、色はsemantic tokenに紐づける",
    "アイコン＋テキスト＋アクション＋閉じるボタンをAuto Layoutで組み、要素の表示切替をbooleanプロパティ化する",
    "テキストが2行に折り返した際のアイコン位置（上揃え）と高さ変化を確認する",
    "モバイル幅ではアクションボタンをテキスト下に回り込ませるレイアウトも用意する",
    "アナウンスメントバーとは別コンポーネントとして管理し、命名で役割の混同を防ぐ",
  ],
  code: {
    html: `<div class="banner banner-warning" role="alert">
  <svg class="banner-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2 1 21h22L12 2Zm1 14h-2v2h2v-2Zm0-7h-2v5h2V9Z"/>
  </svg>
  <p class="banner-text">
    メールアドレスが未認証です。一部の機能が制限されています。
  </p>
  <button type="button" class="banner-action">認証メールを再送信</button>
  <button type="button" class="banner-close" aria-label="通知を閉じる">
    ×
  </button>
</div>

<style>
  .banner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 14px;
  }
  .banner-warning {
    background: #fffbeb;
    border: 1px solid #fde68a;
    color: #92400e;
  }
  .banner-icon { width: 20px; height: 20px; flex-shrink: 0; }
  .banner-text { flex: 1; }
  .banner-action {
    background: none;
    border: none;
    font-weight: 600;
    color: #92400e;
    text-decoration: underline;
    cursor: pointer;
    white-space: nowrap;
  }
  .banner-close {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: inherit;
    line-height: 1;
  }
</style>`,
    tailwind: `<!-- warning バナー -->
<div
  role="alert"
  class="flex items-center gap-3 rounded-xl border border-amber-200
         bg-amber-50 px-4 py-3 text-sm text-amber-800"
>
  <svg class="size-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2 1 21h22L12 2Zm1 14h-2v2h2v-2Zm0-7h-2v5h2V9Z" />
  </svg>
  <p class="flex-1">
    メールアドレスが未認証です。一部の機能が制限されています。
  </p>
  <button
    type="button"
    class="whitespace-nowrap font-semibold underline underline-offset-2
           hover:text-amber-950"
  >
    認証メールを再送信
  </button>
  <button
    type="button"
    aria-label="通知を閉じる"
    class="rounded-md p-1 hover:bg-amber-100"
  >
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke-linecap="round" />
    </svg>
  </button>
</div>`,
    react: `"use client";

import { useState } from "react";
import { TriangleAlert, Info, CircleCheck, CircleX, X } from "lucide-react";

type Variant = "info" | "success" | "warning" | "error";

const styles: Record<Variant, string> = {
  info: "border-sky-200 bg-sky-50 text-sky-800",
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
  error: "border-red-200 bg-red-50 text-red-800",
};

const icons: Record<Variant, React.ElementType> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
};

export function Banner({
  variant = "info",
  children,
  action,
  dismissible = true,
}: {
  variant?: Variant;
  children: React.ReactNode;
  action?: React.ReactNode;
  dismissible?: boolean;
}) {
  const [visible, setVisible] = useState(true);
  const Icon = icons[variant];
  if (!visible) return null;

  return (
    <div
      role={variant === "error" || variant === "warning" ? "alert" : "status"}
      className={\`flex items-center gap-3 rounded-xl border px-4 py-3
                  text-sm \${styles[variant]}\`}
    >
      <Icon className="size-5 shrink-0" aria-hidden />
      <p className="flex-1">{children}</p>
      {action}
      {dismissible && (
        <button
          type="button"
          aria-label="通知を閉じる"
          onClick={() => setVisible(false)}
          className="rounded-md p-1 hover:bg-black/5"
        >
          <X className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}

// 使用例
export function EmailVerificationBanner() {
  return (
    <Banner
      variant="warning"
      action={
        <button
          type="button"
          className="whitespace-nowrap font-semibold underline underline-offset-2"
        >
          認証メールを再送信
        </button>
      }
    >
      メールアドレスが未認証です。一部の機能が制限されています。
    </Banner>
  );
}`,
    shadcn: `// npx shadcn@latest add alert
// shadcn/uiではAlertコンポーネントがバナー通知に相当します。
import { TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function VerifyEmailBanner() {
  return (
    <Alert className="border-amber-200 bg-amber-50 text-amber-800">
      <TriangleAlert className="size-4" aria-hidden />
      <AlertTitle>メールアドレスが未認証です</AlertTitle>
      <AlertDescription className="flex flex-wrap items-center gap-3 text-amber-800">
        一部の機能が制限されています。受信トレイをご確認ください。
        <Button
          variant="link"
          size="sm"
          className="h-auto p-0 font-semibold text-amber-900"
        >
          認証メールを再送信
        </Button>
      </AlertDescription>
    </Alert>
  );
}`,
  },
  related: ["toast", "snackbar", "announcement-bar", "alert-dialog"],
  views: 9800,
  favorites: 410,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-rose-500/15 via-pink-500/10 to-red-500/15",
  difficulty: 1,
  updatedAt: "2026-05-30",
};
