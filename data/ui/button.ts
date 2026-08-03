import type { UIItem } from "@/types/ui";

export const button: UIItem = {
  slug: "button",
  name: "Button",
  nameJa: "ボタン",
  description:
    "クリックでアクションを実行する最も基本的なUI。すべてのインターフェースの起点。",
  category: "buttons",
  tags: ["アクション", "CTA", "クリック", "基本要素"],
  aliases: [
    "押すやつ",
    "クリックして送信するやつ",
    "アクションを実行するパーツ",
    "四角い押せる部品",
    "送信ボタンみたいなやつ",
    "タップして何かが起きるUI",
  ],
  whatIs: [
    "ボタン（Button）は、クリックやタップによって「送信する」「保存する」「削除する」といったアクションを即座に実行させる、UIの中で最も基本的かつ重要なコンポーネントです。名前は物理世界の押しボタン（push button）に由来し、エレベーターや家電のボタンを押すと機械が反応する、というメンタルモデルをそのまま画面上に持ち込んだものです。",
    "一般的に、最重要アクションを示す「プライマリボタン」、補助的な操作の「セカンダリボタン」、控えめな「ゴーストボタン／テキストボタン」、破壊的操作を警告する「デンジャーボタン」といったバリエーションを階層的に使い分けます。この視覚的な優先度設計が、ユーザーを迷わせない画面づくりの土台になります。",
    "混同されがちなリンク（<a>要素）との違いも重要です。リンクは「別の場所へ移動する」ためのもの、ボタンは「その場でアクションを起こす」ためのものであり、HTMLセマンティクス上もキーボード操作上も明確に区別すべき存在です。",
  ],
  features: [
    "Primary / Secondary / Ghost / Danger など役割ごとのバリアントを持つ",
    "default / hover / active / focus / disabled / loading の状態変化を視覚的に表現する",
    "サイズ展開（sm / md / lg）とアイコン付き・アイコンのみの派生がある",
    "<button>要素を使えばEnter / Spaceキーでの実行が標準で保証される",
    "type属性（button / submit / reset）でフォーム内での挙動を制御できる",
    "loading中はスピナー表示と多重送信防止をセットで行うことが多い",
  ],
  merits: [
    "「押せば何かが起きる」という共通認識が浸透しており、学習コストがほぼゼロ",
    "視覚的階層（色・塗り・サイズ）でユーザーの次の行動を自然に誘導できる",
    "デザインシステムの最小単位として整備すれば、プロダクト全体の一貫性が生まれる",
    "CTAボタンの文言・色・配置の改善はコンバージョン率に直結しやすい",
    "HTML標準要素ベースならアクセシビリティ対応のコストが極めて低い",
  ],
  demerits: [
    "1画面にプライマリボタンを複数置くと視覚的階層が崩れ、ユーザーが迷う",
    "「OK / キャンセル」など曖昧なラベルは操作ミスを誘発する",
    "divやspanで自作した「なんちゃってボタン」はキーボード・支援技術で操作できない",
    "タップ領域が小さすぎるとモバイルで誤タップ・押し逃しが多発する",
    "装飾過多なボタンはページ全体のノイズになり、本当のCTAが埋もれる",
  ],
  bestPractices: [
    "1画面（1セクション）のプライマリボタンは原則1つに絞る",
    "ラベルは「保存する」「注文を確定する」など動詞で始め、結果が予測できる文言にする",
    "タップ領域は最低44×44px（Apple HIG）〜48×48px（Material）を確保する",
    "破壊的操作（削除など）は赤系の色と確認ダイアログをセットにする",
    "送信中はdisabled＋スピナーで多重クリックを防ぎ、処理中であることを伝える",
    "focus-visibleでキーボードフォーカスリングを明示し、outlineを消したまま放置しない",
  ],
  useCases: [
    "Stripeのダッシュボード — 紫のプライマリボタンと控えめなセカンダリの明確な階層",
    "AmazonのECサイト — 「カートに入れる」「今すぐ買う」の2大CTAの色分け",
    "Google検索 — 「Google 検索」「I'm Feeling Lucky」というボタンラベルの古典",
    "Notionの設定画面 — ゴーストボタン中心の控えめなボタン設計",
    "銀行アプリの振込確認 — 破壊的・不可逆操作前の確認ボタン",
  ],
  accessibility: [
    "必ず<button>要素（またはrole=\"button\"＋キーボード対応）で実装し、divのonClickだけで済ませない",
    "アイコンのみのボタンにはaria-labelで操作名を必ず付与する",
    "disabled時もコントラスト比を極端に落としすぎず、状態が読み取れるようにする",
    "loading中はaria-busy=\"true\"を付与し、スクリーンリーダーに処理中を伝える",
    "テキストと背景のコントラスト比はWCAGのAA基準（4.5:1）以上を確保する",
    "フォーカスリングは背景色とのコントラストを確保し、focus-visibleで表示する",
  ],
  figma: [
    "Variantsで「variant（primary/secondary/ghost/danger）× size × state」のマトリクスを作る",
    "Auto Layoutのpaddingでサイズを定義し、テキスト長に応じて幅が伸びるHugにする",
    "色はローカルスタイル／Variablesで管理し、hover色はプライマリの明度違いで統一する",
    "アイコン付きバリアントはComponent Propertyの「Instance Swap」でアイコン差し替え可能にする",
    "state=focusのバリアントにフォーカスリング（2pxオフセットのstroke）も用意しておく",
  ],
  code: {
    html: `<button type="button" class="btn btn-primary">
  変更を保存する
</button>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.15s, transform 0.1s;
  }
  .btn-primary {
    background: #2563eb;
    color: #fff;
  }
  .btn-primary:hover {
    background: #1d4ed8;
  }
  .btn-primary:active {
    transform: scale(0.98);
  }
  .btn-primary:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>`,
    tailwind: `<button
  type="button"
  class="inline-flex items-center justify-center gap-2 rounded-xl
         bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white
         transition hover:bg-blue-700 active:scale-[0.98]
         focus-visible:outline focus-visible:outline-2
         focus-visible:outline-offset-2 focus-visible:outline-blue-600
         disabled:cursor-not-allowed disabled:opacity-50"
>
  変更を保存する
</button>

<!-- セカンダリ -->
<button
  type="button"
  class="inline-flex items-center justify-center gap-2 rounded-xl
         border border-gray-300 bg-white px-5 py-2.5 text-sm
         font-semibold text-gray-700 transition hover:bg-gray-50"
>
  キャンセル
</button>`,
    react: `"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

type Props = {
  children: React.ReactNode;
  onAction: () => Promise<void>;
};

export function SubmitButton({ children, onAction }: Props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onAction();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
      className="inline-flex items-center justify-center gap-2 rounded-xl
                 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white
                 transition hover:bg-blue-700 active:scale-[0.98]
                 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-blue-600
                 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading && <Loader2 aria-hidden className="size-4 animate-spin" />}
      {loading ? "保存中…" : children}
    </button>
  );
}`,
    shadcn: `// npx shadcn@latest add button
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export function ButtonDemo() {
  return (
    <div className="flex items-center gap-3">
      <Button>
        <Save aria-hidden />
        変更を保存する
      </Button>
      <Button variant="secondary">下書きに戻す</Button>
      <Button variant="outline">キャンセル</Button>
      <Button variant="destructive">削除する</Button>
      <Button variant="ghost">スキップ</Button>
    </div>
  );
}`,
  },
  related: ["icon-button", "split-button", "floating-action-button", "cta-section"],
  views: 46800,
  favorites: 2110,
  collections: ["saas-ui", "ec-ui", "stripe-ui"],
  gradient: "from-blue-500/15 via-indigo-500/10 to-sky-500/15",
  difficulty: 1,
  updatedAt: "2026-07-22",
};
