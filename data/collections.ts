import type { Collection } from "@/types/ui";

export const collections: Collection[] = [
  {
    slug: "apple-ui",
    name: "Apple風UI",
    description: "余白・タイポグラフィ・繊細なアニメーションで魅せるApple的デザイン",
    longDescription:
      "Appleのプロダクトページに共通するのは、大胆な余白、階層の明確なタイポグラフィ、そしてスクロールに連動した繊細なアニメーションです。このコレクションでは、Apple風の世界観をWebで再現するために欠かせないUIパターンを集めました。",
    gradient: "from-gray-500/20 via-slate-400/10 to-zinc-500/20",
    icon: "Apple",
    itemSlugs: ["hero-section", "carousel", "segmented-control", "tabs", "card"],
  },
  {
    slug: "shopify-ui",
    name: "Shopify風UI",
    description: "コンバージョンを最大化するECストアの定番UIパターン",
    longDescription:
      "Shopifyストア制作で頻出するUIをまとめたコレクションです。商品カード、レビュー表示、カート導線など、購入率に直結するパターンを、Liquidテーマにも移植しやすい形で解説しています。",
    gradient: "from-emerald-500/20 via-green-400/10 to-lime-500/20",
    icon: "ShoppingBag",
    itemSlugs: ["card", "carousel", "badge", "testimonials", "faq", "bottom-sheet"],
  },
  {
    slug: "stripe-ui",
    name: "Stripe風UI",
    description: "開発者に愛される、グラデーションと精密さのデザイン",
    longDescription:
      "Stripeは「美しいドキュメント」「グラデーション」「精密なテーブル」で知られています。SaaSのマーケティングサイトや料金ページを作るときに参考になるUIパターンを集めました。",
    gradient: "from-indigo-500/20 via-violet-400/10 to-purple-500/20",
    icon: "CreditCard",
    itemSlugs: ["pricing-table", "hero-section", "navbar", "data-table", "tabs"],
  },
  {
    slug: "ai-ui",
    name: "AIサービスUI",
    description: "ChatGPT以降のAIプロダクトに共通するUIパターン",
    longDescription:
      "チャット入力、ストリーミング表示、コマンドパレット、スケルトンローディング——AIプロダクトには独特のUI文法があります。生成AI時代のプロダクトを作るための必修パターン集です。",
    gradient: "from-sky-500/20 via-cyan-400/10 to-teal-500/20",
    icon: "Bot",
    itemSlugs: ["command-palette", "search-bar", "skeleton", "toast", "empty-state"],
  },
  {
    slug: "saas-ui",
    name: "SaaS UI",
    description: "BtoB SaaSの管理画面・マーケサイトの定番構成",
    longDescription:
      "SaaSプロダクトに必要なUIは驚くほど共通しています。オンボーディング、設定画面、料金表、通知——このコレクションを押さえれば、SaaSのUI設計の8割はカバーできます。",
    gradient: "from-blue-500/20 via-indigo-400/10 to-violet-500/20",
    icon: "Layers",
    itemSlugs: ["pricing-table", "stepper", "data-table", "sidebar", "modal", "toast", "accordion"],
  },
  {
    slug: "ec-ui",
    name: "EC UI",
    description: "カゴ落ちを防ぎ購入体験を高めるECサイトのUI",
    longDescription:
      "ECサイトのUIは売上に直結します。商品一覧のカード設計、絞り込み、カート、チェックアウトのステッパーまで、購入ファネルに沿ってUIパターンを整理しました。",
    gradient: "from-orange-500/20 via-amber-400/10 to-yellow-500/20",
    icon: "Store",
    itemSlugs: ["card", "carousel", "pagination", "stepper", "badge", "accordion", "bottom-sheet"],
  },
  {
    slug: "admin-ui",
    name: "管理画面UI",
    description: "業務効率を左右するダッシュボード・管理画面の設計",
    longDescription:
      "管理画面は「毎日使うUI」です。データテーブル、サイドバー、フィルター、トースト通知など、業務システムやダッシュボードに欠かせないパターンを実装例つきでまとめました。",
    gradient: "from-slate-500/20 via-gray-400/10 to-neutral-500/20",
    icon: "LayoutDashboard",
    itemSlugs: ["data-table", "sidebar", "dropdown-menu", "toast", "modal", "skeleton", "empty-state"],
  },
  {
    slug: "mobile-ui",
    name: "モバイルUI",
    description: "親指で操作しやすいモバイルアプリの定番UI",
    longDescription:
      "モバイルには「片手で届く範囲」という物理的制約があります。ボトムシート、FAB、スワイプ操作など、モバイルならではのUIパターンとその使いどころを解説します。",
    gradient: "from-pink-500/20 via-rose-400/10 to-red-500/20",
    icon: "Smartphone",
    itemSlugs: ["bottom-sheet", "floating-action-button", "drawer", "segmented-control", "toast"],
  },
  {
    slug: "finance-ui",
    name: "金融UI",
    description: "信頼性と正確さが求められる金融サービスのUI",
    longDescription:
      "金融サービスのUIには「不安を与えない」設計が求められます。数値の見せ方、確認ダイアログ、進捗表示など、フィンテックプロダクトで重視されるパターンを集めました。",
    gradient: "from-emerald-600/20 via-teal-500/10 to-green-500/20",
    icon: "Landmark",
    itemSlugs: ["data-table", "stepper", "modal", "progress-bar", "timeline"],
  },
  {
    slug: "medical-ui",
    name: "医療UI",
    description: "誰でも迷わず使える医療・ヘルスケアのUI設計",
    longDescription:
      "医療系サービスは幅広い年齢層が利用するため、アクセシビリティと分かりやすさが最優先です。予約フロー、問診フォーム、通知など、ヘルスケア領域の実例をもとに解説します。",
    gradient: "from-cyan-500/20 via-sky-400/10 to-blue-500/20",
    icon: "HeartPulse",
    itemSlugs: ["stepper", "faq", "empty-state", "progress-bar", "breadcrumb"],
  },
  {
    slug: "education-ui",
    name: "教育UI",
    description: "学習継続を支えるEdTechプロダクトのUI",
    longDescription:
      "教育サービスのUIは「継続したくなる」仕掛けが鍵です。進捗の可視化、達成バッジ、タイムラインなど、学習体験を高めるUIパターンをまとめました。",
    gradient: "from-violet-500/20 via-purple-400/10 to-fuchsia-500/20",
    icon: "GraduationCap",
    itemSlugs: ["progress-bar", "timeline", "badge", "stepper", "carousel"],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
