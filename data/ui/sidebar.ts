import type { UIItem } from "@/types/ui";

export const sidebar: UIItem = {
  slug: "sidebar",
  name: "Sidebar",
  nameJa: "サイドバー",
  description:
    "画面の左右に縦に並ぶナビゲーション領域。管理画面やドキュメントの定番構造。",
  category: "sidebar",
  tags: ["ナビゲーション", "レイアウト", "管理画面", "縦型メニュー"],
  aliases: [
    "画面の左側に縦に並んでるメニュー",
    "管理画面の横のナビゲーション",
    "折りたたみできる左のパネル",
    "アイコンだけに細くできる横のメニュー",
    "ドキュメントサイトの左の目次",
    "左カラムのナビ",
  ],
  whatIs: [
    "サイドバー（Sidebar）は、画面の左端（または右端）に縦方向に配置され、ナビゲーションリンクや補助情報をまとめて表示する領域です。名前はside（横・脇）+ bar（棒・帯）の組み合わせで、新聞や雑誌のレイアウト用語として「本文の脇に置かれる補足記事の枠」を指していた言葉が、そのままGUIに転用されました。",
    "縦方向はスクロールで際限なく伸ばせるため、横幅に制約されるナビゲーションバーよりも多くの項目を扱えます。この特性から、機能数の多い管理画面（ダッシュボード）、階層の深いドキュメントサイト、チャンネル一覧を持つチャットツールなど、「常に全体のメニューを見せておきたい」アプリケーションの標準レイアウトになっています。",
    "近年は、アイコンのみの細い表示に折りたためるコラプシブル型、モバイルではドロワーとして振る舞うレスポンシブ型が主流です。shadcn/uiが高機能なSidebarコンポーネントを公式提供するなど、アプリケーションUIの中核コンポーネントとして設計パターンの標準化が進んでいます。",
  ],
  features: [
    "画面の左右いずれかに固定され、縦方向にメニュー項目を並べる",
    "アイコン＋ラベルの項目を、セクション見出しやグループで整理できる",
    "アイコンのみの細い表示に折りたためるコラプシブル型が主流",
    "モバイル幅ではドロワー（オーバーレイ）表示に切り替わる",
    "現在ページの項目をハイライトして現在地を示す",
    "上部にワークスペース切り替え、下部にユーザーメニューを置く構成が定番",
  ],
  merits: [
    "縦スクロールで項目数の制約が緩く、機能の多いアプリでも全体像を提示できる",
    "常時表示によりセクション間の移動が1クリックで完結し、作業効率が上がる",
    "階層構造（グループ・ネスト）を自然に表現でき、情報設計を反映しやすい",
    "折りたたみ機構により、作業時はコンテンツ領域を広く使える",
    "位置が固定されているため空間記憶が働き、繰り返し使うほど操作が速くなる",
  ],
  demerits: [
    "横幅を常に240〜280px程度消費し、コンテンツ領域が狭くなる",
    "モバイルではそのまま表示できず、ドロワー化などの追加実装が必要",
    "項目を無計画に追加していくと縦に伸び続け、探すコストが増大する",
    "アイコンのみの折りたたみ状態では、意味が伝わらない項目が操作不能同然になる",
    "折りたたみ状態の記憶、レスポンシブ切り替えなど状態管理の実装コストが高い",
  ],
  bestPractices: [
    "項目は使用頻度と業務フローに沿って並べ、関連項目をセクション見出しでグループ化する",
    "現在ページのハイライトは背景色＋テキスト色で明確にし、aria-current=\"page\"を付ける",
    "折りたたみ時はアイコンにツールチップでラベルを表示し、意味の喪失を防ぐ",
    "折りたたみ状態はlocalStorageやCookieに保存し、再訪時に復元する",
    "ネストは1階層まで。それ以上深くなる場合は情報設計の見直しを検討する",
    "モバイルではドロワーに切り替え、フォーカストラップとEscクローズを実装する",
  ],
  useCases: [
    "Slack — ワークスペースのチャンネル・DM一覧を縦に並べた代表例",
    "Notion — ページツリーをネスト表示し、ドラッグで並べ替えられるサイドバー",
    "GitHub — リポジトリ設定画面などのセクション切り替えナビ",
    "Google Analytics — レポート階層を折りたたみ付きサイドバーで表示",
    "Stripe Dashboard — 決済・顧客・商品など機能グループを縦に整理した管理画面ナビ",
  ],
  accessibility: [
    "<nav aria-label=\"サイドバー\"> などのランドマークでマークアップし、リンクはリスト（ul/li）で構造化する",
    "現在ページの項目に aria-current=\"page\" を付与する",
    "開閉トグルボタンに aria-expanded と分かりやすいラベルを付ける",
    "折りたたみ時のアイコンボタンにも aria-label でラベルを残す",
    "グループの開閉（ネスト）は aria-expanded 付きのbuttonで制御する",
    "モバイルのドロワー表示ではフォーカストラップ・Escクローズ・背景のinert化を実装する",
  ],
  figma: [
    "幅240〜280pxのフレームに縦Auto Layoutで「ヘッダー／メニュー／フッター」の3ブロックを組む",
    "メニュー項目（アイコン＋ラベル）をコンポーネント化し、default / hover / active / collapsed のVariantsを作る",
    "展開・折りたたみの2状態をVariantで作り、Smart Animateで幅の変化（240px→64px）を確認する",
    "セクション見出しとセパレーターもコンポーネント化し、並べ替えを容易にする",
    "コンテンツ領域と組み合わせたレイアウトグリッド（サイドバー固定＋残り可変）で全体フレームを作る",
  ],
  code: {
    html: `<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-header">Acme</div>
    <nav aria-label="サイドバー">
      <p class="section-label" id="nav-general">一般</p>
      <ul aria-labelledby="nav-general">
        <li><a href="/dashboard" aria-current="page">ダッシュボード</a></li>
        <li><a href="/orders">注文管理</a></li>
        <li><a href="/products">商品管理</a></li>
      </ul>
      <p class="section-label" id="nav-settings">設定</p>
      <ul aria-labelledby="nav-settings">
        <li><a href="/members">メンバー</a></li>
        <li><a href="/billing">請求</a></li>
      </ul>
    </nav>
  </aside>
  <main class="content">
    <h1>ダッシュボード</h1>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; }
  .sidebar {
    width: 256px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    background: #f9fafb;
    border-right: 1px solid #e5e7eb;
  }
  .sidebar-header {
    padding: 20px 16px;
    font-weight: 700;
    font-size: 18px;
  }
  .section-label {
    margin: 16px 16px 4px;
    font-size: 11px;
    font-weight: 600;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .sidebar ul { list-style: none; margin: 0; padding: 0 8px; }
  .sidebar a {
    display: block;
    padding: 8px 12px;
    border-radius: 8px;
    color: #4b5563;
    font-size: 14px;
    text-decoration: none;
  }
  .sidebar a:hover { background: #f3f4f6; color: #111827; }
  .sidebar a[aria-current="page"] {
    background: #e5e7eb;
    color: #111827;
    font-weight: 600;
  }
  .content { flex: 1; padding: 32px; }
</style>`,
    tailwind: `<div class="flex min-h-screen">
  <aside class="flex w-64 shrink-0 flex-col border-r border-gray-200 bg-gray-50">
    <div class="px-4 py-5 text-lg font-bold">Acme</div>

    <nav aria-label="サイドバー" class="flex-1 px-2">
      <p id="nav-general"
         class="mx-2 mb-1 mt-4 text-[11px] font-semibold uppercase
                tracking-wide text-gray-400">
        一般
      </p>
      <ul aria-labelledby="nav-general" class="grid gap-0.5">
        <li>
          <a href="/dashboard" aria-current="page"
             class="flex items-center gap-3 rounded-lg bg-gray-200 px-3 py-2
                    text-sm font-semibold text-gray-900">
            <svg class="size-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="3" width="7" height="9" rx="1" />
              <rect x="14" y="3" width="7" height="5" rx="1" />
              <rect x="14" y="12" width="7" height="9" rx="1" />
              <rect x="3" y="16" width="7" height="5" rx="1" />
            </svg>
            ダッシュボード
          </a>
        </li>
        <li>
          <a href="/orders"
             class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm
                    text-gray-600 hover:bg-gray-100 hover:text-gray-900">
            <svg class="size-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round"
                    d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6ZM3 6h18" />
              <path stroke-linecap="round" d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            注文管理
          </a>
        </li>
      </ul>
    </nav>

    <div class="border-t border-gray-200 p-3">
      <button type="button"
              class="flex w-full items-center gap-3 rounded-lg px-3 py-2
                     text-sm text-gray-600 hover:bg-gray-100">
        <span class="grid size-7 place-items-center rounded-full
                     bg-gray-300 text-xs font-bold">山</span>
        山田 太郎
      </button>
    </div>
  </aside>

  <main class="flex-1 p-8">
    <h1 class="text-2xl font-bold">ダッシュボード</h1>
  </main>
</div>`,
    react: `"use client";

import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Package,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  ShoppingCart,
} from "lucide-react";

const ITEMS = [
  { href: "/dashboard", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/orders", label: "注文管理", icon: ShoppingCart },
  { href: "/products", label: "商品管理", icon: Package },
  { href: "/settings", label: "設定", icon: Settings },
];

const STORAGE_KEY = "sidebar-collapsed";

export function Sidebar({ currentPath }: { currentPath: string }) {
  const [collapsed, setCollapsed] = useState(false);

  // 折りたたみ状態を復元・保存する
  useEffect(() => {
    setCollapsed(localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  const toggle = () => {
    setCollapsed((c) => {
      localStorage.setItem(STORAGE_KEY, c ? "0" : "1");
      return !c;
    });
  };

  return (
    <aside
      className={\`flex h-screen shrink-0 flex-col border-r border-gray-200
                  bg-gray-50 transition-[width] duration-200 \${
                    collapsed ? "w-16" : "w-64"
                  }\`}
    >
      <div className="flex items-center justify-between px-3 py-4">
        {!collapsed && <span className="px-1 text-lg font-bold">Acme</span>}
        <button
          type="button"
          onClick={toggle}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "サイドバーを開く" : "サイドバーを折りたたむ"}
          className="grid size-9 place-items-center rounded-lg text-gray-500
                     hover:bg-gray-100"
        >
          {collapsed ? (
            <PanelLeftOpen aria-hidden className="size-4" />
          ) : (
            <PanelLeftClose aria-hidden className="size-4" />
          )}
        </button>
      </div>

      <nav aria-label="サイドバー" className="flex-1 px-2">
        <ul className="grid gap-0.5">
          {ITEMS.map(({ href, label, icon: Icon }) => {
            const isCurrent = currentPath === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isCurrent ? "page" : undefined}
                  aria-label={collapsed ? label : undefined}
                  title={collapsed ? label : undefined}
                  className={\`flex items-center gap-3 rounded-lg px-3 py-2
                              text-sm \${
                                isCurrent
                                  ? "bg-gray-200 font-semibold text-gray-900"
                                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                              } \${collapsed ? "justify-center px-0" : ""}\`}
                >
                  <Icon aria-hidden className="size-4 shrink-0" />
                  {!collapsed && label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}`,
    shadcn: `// npx shadcn@latest add sidebar
// shadcn/uiのSidebarは折りたたみ・モバイルドロワー・状態保存を内蔵している
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
} from "lucide-react";

const ITEMS = [
  { href: "/dashboard", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/orders", label: "注文管理", icon: ShoppingCart },
  { href: "/products", label: "商品管理", icon: Package },
  { href: "/settings", label: "設定", icon: Settings },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="px-4 py-3 text-lg font-bold">
          Acme
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>一般</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {ITEMS.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild tooltip={item.label}>
                      <a href={item.href}>
                        <item.icon aria-hidden />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <main className="p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}`,
  },
  related: ["navbar", "drawer", "breadcrumb", "tabs", "command-palette", "accordion"],
  views: 37900,
  favorites: 1540,
  collections: ["admin-ui", "saas-ui"],
  gradient: "from-emerald-500/15 via-teal-500/10 to-cyan-500/15",
  difficulty: 2,
  updatedAt: "2026-07-22",
};
