import type { BlogPost } from "@/types/ui";

export const blogPosts: BlogPost[] = [
  {
    slug: "modal-vs-drawer-vs-bottom-sheet",
    title: "Modal・Drawer・Bottom Sheetの使い分け完全ガイド",
    excerpt:
      "「画面に重ねて出すUI」は3種類ある。それぞれの得意分野と、間違えると起きる問題を実例で解説します。",
    date: "2026-07-21",
    readingTime: 8,
    category: "UI設計",
    tags: ["Modal", "Drawer", "Bottom Sheet", "使い分け"],
    content: [
      {
        heading: "3つのオーバーレイUIの違い",
        body: [
          "Modal（モーダル）、Drawer（ドロワー）、Bottom Sheet（ボトムシート）は、いずれも「現在の画面に重ねて表示するUI」ですが、ユーザーに与える印象と適した用途は大きく異なります。",
          "Modalは画面中央に表示され、背景を暗くして「今この操作に集中してほしい」という強いメッセージを持ちます。確認ダイアログや重要な入力に向いています。",
          "Drawerは画面の左右からスライドして現れ、ナビゲーションや詳細パネルなど「メイン画面の文脈を保ったまま補足を見せたい」場面に適しています。",
          "Bottom Sheetは画面下部からせり上がるモバイル特有のパターンで、親指で操作しやすく、スワイプで直感的に閉じられるのが特長です。",
        ],
      },
      {
        heading: "選び方の判断基準",
        body: [
          "判断基準は「ユーザーの注意をどれだけ奪ってよいか」と「デバイス」の2軸で考えるとシンプルです。",
          "削除確認のような不可逆な操作にはModal。フィルターや補足情報のような「見ながら操作したい」ものにはDrawer。モバイルでの選択肢提示にはBottom Sheetが第一候補になります。",
          "迷ったら「PCではDrawer、モバイルではBottom Sheet」に出し分けるレスポンシブ戦略が近年の主流です。ライブラリではVaulなどがこのパターンを実装しています。",
        ],
      },
      {
        heading: "アクセシビリティの共通注意点",
        body: [
          "3つに共通して、フォーカストラップ（Tabキーの移動をオーバーレイ内に閉じ込める）、Escキーでの閉じる操作、閉じた後のフォーカス復帰の3点は必ず実装してください。",
          "role=\"dialog\" と aria-modal=\"true\" の付与、開いている間の背景スクロール固定も忘れがちなポイントです。",
        ],
      },
    ],
    relatedItems: ["modal", "drawer", "bottom-sheet"],
  },
  {
    slug: "skeleton-screen-guide",
    title: "スケルトンスクリーンはなぜ「速く感じる」のか — 体感速度の科学",
    excerpt:
      "スピナーよりスケルトンの方が速く感じるのはなぜか。知覚心理学の知見と、Next.jsでの実装パターンを解説。",
    date: "2026-07-08",
    readingTime: 6,
    category: "UX",
    tags: ["Skeleton", "ローディング", "体感速度", "Next.js"],
    content: [
      {
        heading: "スピナーの問題点",
        body: [
          "くるくる回るスピナーは「待たされている」という事実そのものに注意を向けさせます。研究では、同じ待ち時間でもスピナーはスケルトンより長く感じられる傾向が報告されています。",
          "スケルトンスクリーンは「これから表示される内容の骨組み」を先に見せることで、ユーザーの脳に「もうすぐ来る」という予測を与え、待ち時間の体感を短縮します。",
        ],
      },
      {
        heading: "Next.jsでの実装",
        body: [
          "App Routerでは loading.tsx を置くだけでルート単位のスケルトンが実装でき、Suspenseバウンダリと組み合わせればコンポーネント単位の部分的なローディングも表現できます。",
          "重要なのは、スケルトンの形状を実際のコンテンツとほぼ一致させることです。形が大きく変わると、かえってレイアウトシフトのような不快感を生みます。",
        ],
      },
      {
        heading: "使ってはいけない場面",
        body: [
          "処理時間が300ms未満で終わる場合、スケルトンは一瞬チラついて逆効果です。また、フォーム送信のような「処理の完了」を待つ場面では、進捗が分かるプログレスバーの方が適しています。",
        ],
      },
    ],
    relatedItems: ["skeleton", "progress-bar", "empty-state"],
  },
  {
    slug: "command-palette-trend",
    title: "なぜ全SaaSが⌘Kを実装するのか — Command Palette設計入門",
    excerpt:
      "Linear、Notion、GitHub、Figma——主要プロダクトが揃って採用するCommand Paletteの設計思想と実装のポイント。",
    date: "2026-06-19",
    readingTime: 7,
    category: "トレンド",
    tags: ["Command Palette", "キーボード", "SaaS", "生産性"],
    content: [
      {
        heading: "Command Paletteが解決する問題",
        body: [
          "機能が増えるほど、メニューの階層は深くなりUIは複雑になります。Command Paletteは「探す」を「打つ」に変えることで、この複雑さを一撃で解決します。",
          "VS Codeのコマンドパレットが原型となり、LinearやRaycastがプロダクト全体の操作モデルに昇華させました。今ではBtoB SaaSの標準装備と言える存在です。",
        ],
      },
      {
        heading: "設計のポイント",
        body: [
          "あいまい検索（fuzzy search）は必須です。「set」で「Settings」も「Reset password」もヒットさせる寛容さが体験を決めます。",
          "最近使ったコマンドを先頭に出す、アクションにキーボードショートカットを併記する、グループ見出しで分類する——この3点で完成度が大きく変わります。",
          "実装はcmdkライブラリ（shadcn/uiのCommandコンポーネントの中身）が事実上の標準です。",
        ],
      },
    ],
    relatedItems: ["command-palette", "search-bar", "modal"],
  },
  {
    slug: "japanese-typography-ui",
    title: "日本語UIのタイポグラフィ実践 — 欧文サイトをそのまま真似ると失敗する理由",
    excerpt:
      "行間・字間・フォントウェイト。英語圏のデザインシステムを日本語に適用するときに必ず調整すべき5つのポイント。",
    date: "2026-05-27",
    readingTime: 9,
    category: "デザイン",
    tags: ["タイポグラフィ", "日本語", "フォント", "デザインシステム"],
    content: [
      {
        heading: "日本語と欧文の構造的な違い",
        body: [
          "日本語の文字は正方形に近く、アセンダー・ディセンダーを持つ欧文と比べて行が「密」に見えます。欧文サイトのline-height: 1.5をそのまま使うと、日本語では窮屈に感じられることが多く、本文には1.7〜1.9が推奨されます。",
          "また日本語には斜体（イタリック）の文化がなく、強調は太字か色で行うのが自然です。",
        ],
      },
      {
        heading: "調整すべき5つのポイント",
        body: [
          "第一に行間。本文はline-height 1.7以上を基準にします。第二に文字サイズ。日本語は複雑な字形のため、欧文より1px大きめが読みやすくなります。",
          "第三にfont-feature-settings: \"palt\"による約物の詰め。見出しでは効果的ですが、本文で使うと可読性が落ちるため使い分けます。",
          "第四にフォントウェイト。日本語フォントはウェイトのバリエーションが少なく、太字が潰れやすいため、W6程度に留めるのが安全です。",
          "第五に英数字の混植。Noto Sans JPだけでなく、英数字にInterなどの欧文フォントを重ねると、数字の多いダッシュボードUIが引き締まります。",
        ],
      },
    ],
    relatedItems: ["hero-section", "card", "data-table"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
