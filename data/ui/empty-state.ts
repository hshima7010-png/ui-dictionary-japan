import type { UIItem } from "@/types/ui";

export const emptyState: UIItem = {
  slug: "empty-state",
  name: "Empty State",
  nameJa: "エンプティステート",
  description:
    "データが空のときに表示する案内UI。次の行動を促し、離脱と混乱を防ぐ。",
  category: "empty-state",
  tags: ["空状態", "オンボーディング", "ガイド", "ゼロデータ"],
  aliases: [
    "「まだ何もありません」って出る画面",
    "データが空っぽのときの表示",
    "検索結果が0件のときの画面",
    "初回に出るイラスト付きの案内",
    "何も登録してないときのプレースホルダー画面",
    "ゼロ件表示",
  ],
  whatIs: [
    "エンプティステート（Empty State）は、リストや検索結果、受信箱などにまだ表示すべきデータが存在しないときに、空白のかわりに表示する案内用のUIです。empty（空の）+ state（状態）という言葉のとおり「空の状態」をデザインの対象として捉える考え方で、「ゼロデータ状態（Zero Data State）」や「ブランクステート（Blank Slate）」とも呼ばれます。",
    "何も表示されない真っ白な画面は、ユーザーに「壊れているのか」「自分の操作が間違っていたのか」という不安を与えます。エンプティステートは「なぜ空なのか」を説明し、「次に何をすればよいか」をCTA（行動喚起ボタン）で示すことで、この不安を学習の機会に変えます。",
    "空になる理由は大きく分けて「初回利用（まだ作成していない）」「検索・フィルターの結果が0件」「ユーザーが全件処理した（受信箱ゼロなどポジティブな空）」「エラーで取得できない」の4種類があり、それぞれ伝えるべきメッセージと導線が異なります。オンボーディングの成否を左右する重要画面として、近年デザインシステムでも独立コンポーネントとして定義されることが増えています。",
  ],
  features: [
    "アイコンやイラストで状況を和らげ、視線を集める",
    "「なぜ空なのか」を短い見出しと説明文で伝える",
    "「最初のプロジェクトを作成」など、次の行動につながるCTAボタンを備える",
    "初回利用・検索0件・完了済み・エラーなど、空の理由ごとに内容を出し分ける",
    "検索0件時には条件緩和の提案やスペルチェック、人気コンテンツへの誘導を含めることがある",
    "サンプルデータの投入やチュートリアルへのリンクを組み合わせるバリエーションがある",
  ],
  merits: [
    "真っ白な画面による「壊れている」という誤解と不安を防げる",
    "初回ユーザーに機能の使い方と価値を教えるオンボーディングの場になる",
    "CTAで次の行動へ直結させるため、アクティベーション率の改善に効く",
    "検索0件時に代替案を提示すれば、離脱せずに探索を続けてもらえる",
    "ブランドのトーンを伝えるイラストやコピーで、プロダクトの個性を表現できる",
  ],
  demerits: [
    "空の理由ごとにデザイン・文言を用意する必要があり、設計コストがかかる",
    "凝ったイラストが機能の理解を妨げたり、ロード容量を増やしたりすることがある",
    "毎日見る画面（受信箱など）で装飾過多だと、繰り返し目にするうちに煩わしくなる",
    "エラー由来の空をポジティブな文言で覆い隠すと、ユーザーが問題に気づけなくなる",
    "多言語化するとコピーの長さが変わり、レイアウトが崩れやすい",
  ],
  bestPractices: [
    "「初回」「0件」「完了」「エラー」の4種類を区別し、それぞれ専用のメッセージを書く",
    "見出しは状況の説明、本文は理由と解決策、ボタンは具体的な動詞（例:「商品を登録する」）にする",
    "CTAは1つに絞り、迷わせない。補助リンク（ドキュメントなど）はテキストリンクで添える",
    "検索0件では「条件をクリア」「キーワードの候補」「人気の項目」など復帰の導線を必ず置く",
    "受信箱ゼロのような達成の空は、祝福のトーンで努力を認めるコピーにする",
    "イラストは装飾ではなく状況の理解を助けるものに限定し、altテキストは空にして読み上げを省く",
  ],
  useCases: [
    "Slack — 新規ワークスペースでチャンネルが空のとき、最初の投稿やメンバー招待を促す",
    "Notion — 空のページに「テンプレートから始める」などの選択肢を提示",
    "Gmail — 受信トレイを全処理すると「すべて完了しました」と晴れやかなイラストを表示",
    "Airbnb — 検索0件時に条件の緩和（日付・エリアの変更）を提案",
    "Shopify管理画面 — 商品未登録時に「商品を追加」ボタンとガイドリンクを表示",
  ],
  accessibility: [
    "見出しは適切なレベルの見出し要素（h2など）でマークアップし、文書構造に組み込む",
    "装飾イラストには alt=\"\" または aria-hidden=\"true\" を付け、読み上げの冗長化を防ぐ",
    "検索結果が0件になったことは aria-live=\"polite\" の領域で通知し、視覚に頼らず伝える",
    "CTAボタンはキーボードで到達・操作でき、フォーカスリングが明確に見えるようにする",
    "テキストのコントラスト比は本文4.5:1以上を確保する。薄いグレーの説明文で妥協しない",
  ],
  figma: [
    "アイコン・見出し・本文・CTAを縦のAuto Layout（gap: 12〜16、中央揃え）で組む",
    "「初回」「0件」「完了」「エラー」の4状態をVariantsで管理し、文言の出し分けを設計段階で決める",
    "本文の最大幅を320〜400px程度に制限し、長文でも読みやすい行長を保つ",
    "イラストはコンポーネント化してInstance Swapで差し替えられるようにする",
    "コンテナ最小高さ（例: 320px）を決めて、リスト表示時とのレイアウト差を確認する",
  ],
  code: {
    html: `<section class="empty-state">
  <div class="icon" aria-hidden="true">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
         stroke="#9ca3af" stroke-width="1.5">
      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  </div>
  <h2>まだプロジェクトがありません</h2>
  <p>最初のプロジェクトを作成して、チームでの作業を始めましょう。</p>
  <button type="button" class="cta">プロジェクトを作成する</button>
  <a href="/docs/getting-started" class="link">使い方ガイドを見る</a>
</section>

<style>
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 64px 24px;
    text-align: center;
  }
  .empty-state .icon {
    display: grid;
    place-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f3f4f6;
    margin-bottom: 8px;
  }
  .empty-state h2 { font-size: 18px; margin: 0; }
  .empty-state p { color: #6b7280; max-width: 360px; margin: 0 0 12px; }
  .empty-state .cta {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background: #111827;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  .empty-state .link {
    margin-top: 8px;
    font-size: 14px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<section class="flex flex-col items-center gap-2 px-6 py-16 text-center">
  <div aria-hidden="true"
       class="mb-2 grid size-20 place-items-center rounded-full bg-gray-100">
    <svg class="size-10 text-gray-400" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0
               2-2V9a2 2 0 0 0-2-2Zm-4 0V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  </div>
  <h2 class="text-lg font-semibold text-gray-900">
    まだプロジェクトがありません
  </h2>
  <p class="max-w-sm text-sm text-gray-600">
    最初のプロジェクトを作成して、チームでの作業を始めましょう。
  </p>
  <button type="button"
          class="mt-3 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold
                 text-white transition-colors hover:bg-gray-700">
    プロジェクトを作成する
  </button>
  <a href="/docs/getting-started"
     class="mt-2 text-sm text-gray-500 underline-offset-4 hover:underline">
    使い方ガイドを見る
  </a>
</section>`,
    react: `"use client";

import { FolderPlus, SearchX, Plus, RotateCcw } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  variant?: "first-use" | "no-results";
  onAction: () => void;
};

const CONTENT = {
  "first-use": {
    icon: <FolderPlus aria-hidden className="size-10 text-gray-400" />,
    title: "まだプロジェクトがありません",
    body: "最初のプロジェクトを作成して、チームでの作業を始めましょう。",
    action: "プロジェクトを作成する",
    actionIcon: <Plus aria-hidden className="size-4" />,
  },
  "no-results": {
    icon: <SearchX aria-hidden className="size-10 text-gray-400" />,
    title: "条件に一致する結果がありません",
    body: "キーワードを変えるか、フィルターを解除して再度お試しください。",
    action: "フィルターをクリア",
    actionIcon: <RotateCcw aria-hidden className="size-4" />,
  },
} satisfies Record<string, {
  icon: ReactNode; title: string; body: string;
  action: string; actionIcon: ReactNode;
}>;

export function EmptyState({ variant = "first-use", onAction }: Props) {
  const c = CONTENT[variant];

  return (
    <section
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-2 px-6 py-16 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-2 grid size-20 place-items-center rounded-full bg-gray-100"
      >
        {c.icon}
      </div>
      <h2 className="text-lg font-semibold text-gray-900">{c.title}</h2>
      <p className="max-w-sm text-sm text-gray-600">{c.body}</p>
      <button
        type="button"
        onClick={onAction}
        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-gray-900
                   px-5 py-2.5 text-sm font-semibold text-white
                   transition-colors hover:bg-gray-700 focus-visible:outline-2
                   focus-visible:outline-offset-2"
      >
        {c.actionIcon}
        {c.action}
      </button>
    </section>
  );
}`,
    shadcn: `// npx shadcn@latest add empty button
// shadcn/uiには Empty コンポーネントが用意されている
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { FolderPlus } from "lucide-react";

export function ProjectEmptyState() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderPlus aria-hidden />
        </EmptyMedia>
        <EmptyTitle>まだプロジェクトがありません</EmptyTitle>
        <EmptyDescription>
          最初のプロジェクトを作成して、チームでの作業を始めましょう。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>プロジェクトを作成する</Button>
        <Button variant="link" asChild>
          <a href="/docs/getting-started">使い方ガイドを見る</a>
        </Button>
      </EmptyContent>
    </Empty>
  );
}`,
  },
  related: ["skeleton", "toast", "search-bar", "card", "data-table"],
  views: 14900,
  favorites: 640,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-violet-500/15 via-purple-500/10 to-fuchsia-500/15",
  difficulty: 1,
  updatedAt: "2026-06-16",
};
