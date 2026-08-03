import type { UIItem } from "@/types/ui";

export const bottomNavigation: UIItem = {
  slug: "bottom-navigation",
  name: "Bottom Navigation",
  nameJa: "ボトムナビゲーション",
  description:
    "画面下部に主要機能へのタブを固定表示するモバイルUI。親指で届く位置に置く定番ナビゲーション。",
  category: "navigation",
  tags: ["ナビゲーション", "モバイル", "タブバー", "固定表示"],
  aliases: [
    "スマホの下にあるタブ",
    "画面下のアイコンが並んだバー",
    "アプリの下メニュー",
    "タブバー",
    "下に固定されてるナビ",
    "親指で押せる下のボタン列",
  ],
  whatIs: [
    "ボトムナビゲーション（Bottom Navigation）は、モバイル画面の下部に主要な移動先を3〜5個のタブとして固定表示するナビゲーションUIです。名前は「画面のボトム（下部）に置かれるナビゲーション」というそのままの構造に由来し、iOSのHuman Interface Guidelinesでは「タブバー（Tab Bar）」、MaterialDesignでは「ボトムナビゲーション」ないし「ナビゲーションバー」と呼ばれています。",
    "スマートフォンの大画面化により、画面上部は親指が届きにくい「デッドゾーン」になりました。ボトムナビゲーションは最も操作しやすい画面下部に主要導線を常設することで、片手操作でのアプリ内移動を高速化します。ハンバーガーメニューが「隠すナビ」であるのに対し、こちらは「常に見せるナビ」であり、両者は補完関係にあります。",
    "ネイティブアプリの標準パターンとして定着した後、PWAやモバイルWebにも広く輸入されました。現在ではX（旧Twitter）、Instagram、LINE、メルカリなど、日常的に使われるアプリのほぼすべてが採用している、モバイルUXの土台と言えるパターンです。",
  ],
  features: [
    "画面下部に固定され、スクロールしても常に表示される",
    "アイコン＋短いラベルの組み合わせで3〜5個の主要導線を並べる",
    "選択中のタブは色・塗りつぶしアイコン・インジケーターで強調される",
    "タブ切り替えは画面遷移ではなく「ビューの切り替え」として瞬時に行われる",
    "通知バッジをアイコン右上に重ねて未読数などを伝えられる",
    "iOSのセーフエリア（ホームインジケーター領域）を考慮したパディングが必要",
  ],
  merits: [
    "親指が自然に届く位置にあり、片手操作での到達性が最も高い",
    "主要機能が常に見えているため、アプリの全体像と現在地が把握しやすい",
    "ハンバーガーメニューと比べてナビゲーションの利用率・回遊率が上がりやすい",
    "タブ切り替えが1タップで完結し、移動コストが最小になる",
    "OS標準パターンのため学習コストがほぼゼロ",
  ],
  demerits: [
    "置ける項目は実質5個までで、それ以上は「その他」タブに逃がすことになる",
    "画面下部の領域を常時50〜80px占有し、コンテンツ表示域が減る",
    "階層の深いナビゲーション構造をそのまま表現できない",
    "デスクトップでは不自然なパターンのため、レスポンシブで別ナビへの切り替えが必要",
    "キーボード表示時やランドスケープ時の挙動設計に配慮が要る",
  ],
  bestPractices: [
    "タブは3〜5個に絞り、最も使われる機能から順に並べる",
    "アイコンだけにせず必ず短いテキストラベルを添える（アイコンの解釈は人によって揺れる）",
    "選択中タブは色＋塗りつぶしアイコンなど複数の手がかりで示し、色だけに頼らない",
    "iOSでは env(safe-area-inset-bottom) でホームインジケーター分の余白を確保する",
    "タブをタップしたら該当ビューの先頭へ、再タップでスクロールトップへ戻す慣習に従う",
    "一時的な状態（再生中バーなど）はナビの直上に重ね、ナビ自体は不変に保つ",
  ],
  useCases: [
    "Instagram — ホーム／検索／投稿／リール／プロフィールの5タブ構成",
    "LINE — ホーム／トーク／VOOM／ニュース／ウォレットを下部タブで切り替え",
    "メルカリ — ホーム／さがす／出品／支払い／マイページの主要導線を常設",
    "X（旧Twitter） — タイムラインと通知・DMをバッジ付きタブで表示",
    "PayPayなど決済アプリ — ホームと決済機能への最短導線を下部に配置",
  ],
  accessibility: [
    "コンテナは <nav> にし、aria-label=\"メインナビゲーション\" を付与する",
    "現在地のタブには aria-current=\"page\" を設定して選択状態を伝える",
    "アイコンのみの表示にする場合も、スクリーンリーダー向けのラベルを必ず持たせる",
    "タップ／クリック領域は44×44px以上を確保し、隣接タブとの誤タップを防ぐ",
    "バッジの数値は aria-label に含めて「通知 3件の未読」のように読み上げさせる",
    "選択状態を色だけで表現せず、アイコンの塗りやインジケーターバーを併用する",
  ],
  figma: [
    "タブ1個を「icon＋label」のコンポーネントにし、selected: boolean のPropertyを持たせる",
    "バーはAuto Layout（横方向・等間隔）で組み、幅375px／390pxのフレームで検証する",
    "iOS用にはホームインジケーター領域（34px）を含めた高さで作り、セーフエリアを可視化する",
    "選択タブの切り替えはVariants＋プロトタイプの「Change to」でインタラクションを再現する",
    "バッジはアイコンの右上にAbsolute positionで重ね、0件時の非表示Variantも用意する",
    "スクロールするコンテンツの上に固定表示する挙動は「Fixed（Sticky）」設定で確認する",
  ],
  code: {
    html: `<nav class="bottom-nav" aria-label="メインナビゲーション">
  <a href="/" class="tab is-active" aria-current="page">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"/></svg>
    <span>ホーム</span>
  </a>
  <a href="/search" class="tab">
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2"/></svg>
    <span>さがす</span>
  </a>
  <a href="/notifications" class="tab">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6zM10 19a2 2 0 0 0 4 0"/></svg>
    <span>通知</span>
    <i class="badge" aria-label="3件の未読">3</i>
  </a>
  <a href="/mypage" class="tab">
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
    <span>マイページ</span>
  </a>
</nav>

<style>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background: #fff;
    border-top: 1px solid #e5e7eb;
    padding-bottom: env(safe-area-inset-bottom);
  }
  .tab {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px 0 6px;
    color: #9ca3af;
    text-decoration: none;
    font-size: 10px;
  }
  .tab svg { width: 24px; height: 24px; fill: currentColor; }
  .tab.is-active { color: #f59e0b; }
  .badge {
    position: absolute;
    top: 4px;
    left: calc(50% + 6px);
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: 8px;
    background: #ef4444;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    line-height: 16px;
    text-align: center;
  }
</style>`,
    tailwind: `<nav
  class="fixed inset-x-0 bottom-0 z-40 flex border-t border-gray-200
         bg-white pb-[env(safe-area-inset-bottom)]"
  aria-label="メインナビゲーション"
>
  <a
    href="/"
    aria-current="page"
    class="flex flex-1 flex-col items-center gap-0.5 py-2 text-amber-500"
  >
    <svg class="size-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" />
    </svg>
    <span class="text-[10px] font-medium">ホーム</span>
  </a>
  <a
    href="/search"
    class="flex flex-1 flex-col items-center gap-0.5 py-2 text-gray-400
           hover:text-gray-600"
  >
    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2"
         viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" />
    </svg>
    <span class="text-[10px] font-medium">さがす</span>
  </a>
  <a
    href="/notifications"
    class="relative flex flex-1 flex-col items-center gap-0.5 py-2
           text-gray-400 hover:text-gray-600"
  >
    <span
      class="absolute left-[calc(50%+6px)] top-1 flex h-4 min-w-4
             items-center justify-center rounded-full bg-red-500 px-1
             text-[10px] text-white"
      aria-label="3件の未読"
    >3</span>
    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2"
         viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6zM10 19a2 2 0 0 0 4 0" />
    </svg>
    <span class="text-[10px] font-medium">通知</span>
  </a>
</nav>`,
    react: `"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Search, Bell, User } from "lucide-react";

const tabs = [
  { href: "/", label: "ホーム", icon: Home },
  { href: "/search", label: "さがす", icon: Search },
  { href: "/notifications", label: "通知", icon: Bell, badge: 3 },
  { href: "/mypage", label: "マイページ", icon: User },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="メインナビゲーション"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-gray-200
                 bg-white pb-[env(safe-area-inset-bottom)]"
    >
      {tabs.map(({ href, label, icon: Icon, badge }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            aria-label={badge ? \`\${label}（\${badge}件の未読）\` : label}
            className={\`relative flex flex-1 flex-col items-center gap-0.5
                        py-2 text-[10px] font-medium
                        \${isActive ? "text-amber-500" : "text-gray-400"}\`}
          >
            {badge ? (
              <span
                aria-hidden
                className="absolute left-[calc(50%+6px)] top-1 flex h-4
                           min-w-4 items-center justify-center rounded-full
                           bg-red-500 px-1 text-[10px] text-white"
              >
                {badge}
              </span>
            ) : null}
            <Icon
              aria-hidden
              className="size-6"
              strokeWidth={isActive ? 2.5 : 2}
            />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}`,
    shadcn: `// shadcn/ui にボトムナビゲーション専用のコンポーネントはありません。
// Badge を組み合わせた Tailwind 実装が実用的です。
// npx shadcn@latest add badge
import Link from "next/link";
import { Home, Search, Bell, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "ホーム", icon: Home },
  { href: "/search", label: "さがす", icon: Search },
  { href: "/notifications", label: "通知", icon: Bell, badge: 3 },
  { href: "/mypage", label: "マイページ", icon: User },
];

export function BottomNav({ current }: { current: string }) {
  return (
    <nav
      aria-label="メインナビゲーション"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t bg-background
                 pb-[env(safe-area-inset-bottom)]"
    >
      {tabs.map(({ href, label, icon: Icon, badge }) => (
        <Link
          key={href}
          href={href}
          aria-current={current === href ? "page" : undefined}
          className={cn(
            "relative flex flex-1 flex-col items-center gap-0.5 py-2",
            "text-[10px] font-medium",
            current === href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {badge ? (
            <Badge
              variant="destructive"
              className="absolute left-[calc(50%+6px)] top-1 h-4 min-w-4
                         justify-center px-1 text-[10px]"
            >
              {badge}
            </Badge>
          ) : null}
          <Icon aria-hidden className="size-6" />
          {label}
        </Link>
      ))}
    </nav>
  );
}`,
  },
  related: ["navbar", "tabs", "hamburger-menu", "floating-action-button"],
  views: 18900,
  favorites: 790,
  collections: ["mobile-ui", "apple-ui"],
  gradient: "from-yellow-500/15 via-amber-500/10 to-orange-500/15",
  difficulty: 2,
  updatedAt: "2026-05-22",
};
