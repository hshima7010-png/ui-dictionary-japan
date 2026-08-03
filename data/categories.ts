import type { Category } from "@/types/ui";

export const categories: Category[] = [
  // ── 基本要素 ──
  { slug: "buttons", name: "Buttons", nameJa: "ボタン", description: "アクションを実行するための最も基本的な操作要素", icon: "MousePointerClick", group: "基本要素" },
  { slug: "inputs", name: "Inputs", nameJa: "入力", description: "テキスト・数値・選択などユーザー入力を受け取る要素", icon: "TextCursorInput", group: "基本要素" },
  { slug: "forms", name: "Forms", nameJa: "フォーム", description: "複数の入力を束ねて送信するためのUIパターン", icon: "ClipboardList", group: "基本要素" },
  { slug: "cards", name: "Cards", nameJa: "カード", description: "情報をひとまとまりに区切って見せるコンテナ", icon: "LayoutGrid", group: "基本要素" },
  { slug: "avatar", name: "Avatar", nameJa: "アバター", description: "ユーザーやチームを表す画像・イニシャル表示", icon: "CircleUserRound", group: "基本要素" },
  { slug: "badge", name: "Badge", nameJa: "バッジ", description: "状態やカテゴリを示す小さなラベル", icon: "BadgeCheck", group: "基本要素" },
  { slug: "chip", name: "Chip", nameJa: "チップ", description: "タグ選択やフィルターに使う小型の操作要素", icon: "Tags", group: "基本要素" },
  { slug: "search", name: "Search", nameJa: "検索", description: "検索バー・サジェスト・フィルターまわりのUI", icon: "Search", group: "基本要素" },

  // ── ナビゲーション ──
  { slug: "navigation", name: "Navigation", nameJa: "ナビゲーション", description: "サイト内の移動を支えるUI全般", icon: "Compass", group: "ナビゲーション" },
  { slug: "navbar", name: "Navbar", nameJa: "ナビバー", description: "画面上部に固定されるグローバルナビゲーション", icon: "PanelTop", group: "ナビゲーション" },
  { slug: "sidebar", name: "Sidebar", nameJa: "サイドバー", description: "管理画面などで使う縦型ナビゲーション", icon: "PanelLeft", group: "ナビゲーション" },
  { slug: "footer", name: "Footer", nameJa: "フッター", description: "ページ末尾のリンク集・企業情報エリア", icon: "PanelBottom", group: "ナビゲーション" },
  { slug: "breadcrumb", name: "Breadcrumb", nameJa: "パンくず", description: "現在地の階層を示すナビゲーション", icon: "ChevronsRight", group: "ナビゲーション" },
  { slug: "tabs", name: "Tabs", nameJa: "タブ", description: "同一画面内でコンテンツを切り替えるUI", icon: "Columns3", group: "ナビゲーション" },
  { slug: "pagination", name: "Pagination", nameJa: "ページネーション", description: "長い一覧をページ単位に分割して移動するUI", icon: "ArrowRightLeft", group: "ナビゲーション" },
  { slug: "command-menu", name: "Command Menu", nameJa: "コマンドメニュー", description: "⌘Kで呼び出すキーボード操作型メニュー", icon: "Command", group: "ナビゲーション" },

  // ── オーバーレイ ──
  { slug: "dialogs", name: "Dialogs", nameJa: "ダイアログ", description: "確認・警告など画面に重ねて表示するUI", icon: "MessageSquare", group: "オーバーレイ" },
  { slug: "modal", name: "Modal", nameJa: "モーダル", description: "背景を覆って操作を求めるオーバーレイ", icon: "AppWindow", group: "オーバーレイ" },
  { slug: "drawer", name: "Drawer", nameJa: "ドロワー", description: "画面端からスライドして現れるパネル", icon: "PanelRightOpen", group: "オーバーレイ" },
  { slug: "toast", name: "Toast", nameJa: "トースト", description: "操作結果を一時的に知らせる通知", icon: "Bell", group: "オーバーレイ" },
  { slug: "loading", name: "Loading", nameJa: "ローディング", description: "読み込み中であることを伝える表現", icon: "LoaderCircle", group: "フィードバック" },

  // ── データ表示 ──
  { slug: "table", name: "Table", nameJa: "テーブル", description: "行と列でデータを整理して表示するUI", icon: "Table2", group: "データ表示" },
  { slug: "timeline", name: "Timeline", nameJa: "タイムライン", description: "時系列でイベントを並べる表示", icon: "GitCommitVertical", group: "データ表示" },
  { slug: "charts", name: "Charts", nameJa: "チャート", description: "グラフ・データビジュアライゼーション", icon: "ChartLine", group: "データ表示" },
  { slug: "calendar", name: "Calendar", nameJa: "カレンダー", description: "日付選択・予定表示のUI", icon: "CalendarDays", group: "データ表示" },
  { slug: "progress", name: "Progress", nameJa: "プログレス", description: "進捗状況を可視化するUI", icon: "Gauge", group: "フィードバック" },
  { slug: "skeleton", name: "Skeleton", nameJa: "スケルトン", description: "読み込み中にレイアウトの骨組みを見せるUI", icon: "RectangleEllipsis", group: "フィードバック" },
  { slug: "empty-state", name: "Empty State", nameJa: "エンプティステート", description: "データが無い状態を前向きに伝える画面", icon: "Inbox", group: "フィードバック" },
  { slug: "error", name: "Error", nameJa: "エラー", description: "エラー発生を適切に伝えて復帰を促すUI", icon: "TriangleAlert", group: "フィードバック" },

  // ── ページ・セクション ──
  { slug: "landing-page", name: "Landing Page", nameJa: "LP", description: "コンバージョンを目的とした縦長ページ", icon: "Rocket", group: "ページ・セクション" },
  { slug: "hero", name: "Hero", nameJa: "ヒーロー", description: "ファーストビューを飾る主役セクション", icon: "Sparkles", group: "ページ・セクション" },
  { slug: "pricing", name: "Pricing", nameJa: "料金表", description: "プラン比較・価格提示のセクション", icon: "CreditCard", group: "ページ・セクション" },
  { slug: "testimonials", name: "Testimonials", nameJa: "お客様の声", description: "利用者の声で信頼を高めるセクション", icon: "Quote", group: "ページ・セクション" },
  { slug: "faq", name: "FAQ", nameJa: "よくある質問", description: "質問と回答をまとめたセクション", icon: "CircleHelp", group: "ページ・セクション" },
  { slug: "onboarding", name: "Onboarding", nameJa: "オンボーディング", description: "初回利用者を成功体験まで導く一連のUI", icon: "Footprints", group: "ページ・セクション" },
  { slug: "authentication", name: "Authentication", nameJa: "認証", description: "ログイン・サインアップまわりのUI", icon: "KeyRound", group: "ページ・セクション" },
  { slug: "checkout", name: "Checkout", nameJa: "チェックアウト", description: "購入完了までの決済フローUI", icon: "ShoppingCart", group: "ページ・セクション" },
  { slug: "settings", name: "Settings", nameJa: "設定", description: "アカウント・環境設定画面のUI", icon: "Settings2", group: "ページ・セクション" },
  { slug: "dashboard", name: "Dashboard", nameJa: "ダッシュボード", description: "KPIや状態を一望する管理画面", icon: "LayoutDashboard", group: "ページ・セクション" },
  { slug: "profile", name: "Profile", nameJa: "プロフィール", description: "ユーザー情報を表示・編集する画面", icon: "UserRound", group: "ページ・セクション" },

  // ── 業種・特化 ──
  { slug: "analytics", name: "Analytics", nameJa: "アナリティクス", description: "分析・レポート系プロダクトのUI", icon: "ChartNoAxesCombined", group: "業種・特化" },
  { slug: "e-commerce", name: "E-commerce", nameJa: "EC", description: "ネットショップ特有のUIパターン", icon: "Store", group: "業種・特化" },
  { slug: "ai-ui", name: "AI UI", nameJa: "AI UI", description: "チャット・生成AIプロダクトのUIパターン", icon: "Bot", group: "業種・特化" },
  { slug: "shopify-ui", name: "Shopify UI", nameJa: "Shopify UI", description: "Shopifyストア構築でよく使うUI", icon: "ShoppingBag", group: "業種・特化" },
  { slug: "line-ui", name: "LINE UI", nameJa: "LINE UI", description: "LINEミニアプリ・リッチメニュー系のUI", icon: "MessageCircle", group: "業種・特化" },
];

export const categoryGroups = [
  "基本要素",
  "ナビゲーション",
  "オーバーレイ",
  "データ表示",
  "フィードバック",
  "ページ・セクション",
  "業種・特化",
] as const;

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
