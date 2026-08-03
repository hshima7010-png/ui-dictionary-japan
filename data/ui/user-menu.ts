import type { UIItem } from "@/types/ui";

export const userMenu: UIItem = {
  slug: "user-menu",
  name: "User Menu",
  nameJa: "ユーザーメニュー",
  description:
    "アバターをクリックすると開く、アカウント設定やログアウトをまとめたメニュー。",
  category: "profile",
  tags: ["アカウント", "ドロップダウン", "ナビゲーション", "認証"],
  aliases: [
    "右上のアイコンを押すと出るメニュー",
    "アバターから開くやつ",
    "ログアウトボタンがあるところ",
    "アカウントメニュー",
    "プロフィール画像を押したときのメニュー",
    "自分の設定に飛べるメニュー",
  ],
  whatIs: [
    "ユーザーメニュー（User Menu）は、画面右上（またはサイドバー下部）に配置されたアバターやユーザー名をクリックすると開く、アカウント関連の操作をまとめたドロップダウンメニューです。「ログイン中のユーザー（User）に紐づくメニュー」であることからこの名で呼ばれ、アカウントメニュー、アバターメニューとも呼ばれます。",
    "典型的な中身は、ユーザー名とメールアドレスの表示、プロフィール・アカウント設定へのリンク、テーマ切り替え、プラン・請求情報、そしてログアウトです。Slackではワークスペース右上のアバターから在席ステータス変更や環境設定にアクセスでき、Notionではサイドバー上部のワークスペース名からアカウント切り替えを行えます。GitHubやLinearでも、右上アバターのメニューが設定とログアウトへの入り口として定着しています。",
    "ログイン後のあらゆる画面に常駐する数少ないUIであるため、「どのサービスでも右上のアバターを押せばログアウトできる」というユーザーの学習済みメンタルモデルに沿って設計することが重要です。奇抜な配置や構成はむしろ迷いを生みます。",
  ],
  features: [
    "アバター・ユーザー名をトリガーとするドロップダウン形式で、全画面に常駐する",
    "メニュー冒頭にユーザー名・メールアドレスを表示し、「誰でログインしているか」を確認できる",
    "設定・プロフィール・請求・ヘルプなど関連リンクをセパレーターでグループ化できる",
    "複数アカウント・複数ワークスペースの切り替え機能を内包できる",
    "ログアウトは最下部に置くのが事実上の標準",
    "テーマ切り替えや言語設定などのサブメニューを持たせられる",
  ],
  merits: [
    "アカウント関連操作を1か所に集約でき、ヘッダーのスペースを節約できる",
    "「右上のアバター＝アカウントメニュー」という強い慣習があり、学習コストがほぼゼロ",
    "現在のログインアカウントを常時確認でき、アカウント間違いの事故を防げる",
    "利用頻度の低い操作（ログアウト・請求など）を隠しつつ、確実にたどり着ける導線を確保できる",
    "ドロップダウンメニューの実装パターンを流用でき、実装コストが低い",
  ],
  demerits: [
    "メニューに項目を詰め込みすぎると、目的の操作を探すのに時間がかかる",
    "アバター画像が未設定のユーザーには、そこがメニューだと気づかれにくいことがある",
    "ホバーで開く実装にすると、モバイルで動作せず誤タップも誘発する",
    "設定画面と項目が重複しやすく、情報設計が曖昧になりがち",
    "ネストしたサブメニューはモバイルでの操作性が著しく落ちる",
  ],
  bestPractices: [
    "トリガーはホバーではなくクリック／タップで開く。Escキーと外側クリックで閉じられるようにする",
    "メニュー冒頭にユーザー名とメールアドレスを表示し、アカウントの取り違えを防ぐ",
    "項目は7個前後までに絞り、セパレーターで「アカウント」「設定」「その他」に分類する",
    "ログアウトは最下部に配置し、破壊的操作として赤系の色は使わず通常の項目として扱う",
    "アバター未設定時はイニシャル入りのフォールバックを表示し、押せる見た目を保つ",
    "モバイルではドロップダウンではなくボトムシートに切り替えると操作しやすい",
  ],
  useCases: [
    "GitHub — 右上アバターからプロフィール・設定・ログアウトにアクセス",
    "Slack — 右上アバターからステータス変更・環境設定・サインアウト",
    "Notion — サイドバーのワークスペース名からアカウント・ワークスペース切り替え",
    "Google 各サービス — 右上アバターにアカウント切り替えと「ログアウト」を集約",
    "Linear — サイドバー左上のメニューから設定・招待・ログアウトへ導線",
  ],
  accessibility: [
    "トリガーは <button> にし、aria-haspopup=\"menu\" と aria-expanded を付与する",
    "メニューには role=\"menu\"、各項目には role=\"menuitem\" を設定する",
    "矢印キーで項目間を移動、Enterで実行、Escで閉じてトリガーへフォーカスを戻す",
    "アバター画像には「ユーザーメニューを開く」などの意味が伝わるアクセシブルネームを付ける",
    "フォーカスをメニュー内にトラップせず、Tabで自然に抜けられるようにする",
    "現在のアカウント情報は視覚だけでなくテキストとして読み上げ可能にする",
  ],
  figma: [
    "トリガー（アバター）とメニュー本体を別コンポーネントにし、Variantsで開閉状態を管理する",
    "メニュー項目は「アイコン＋ラベル＋ショートカット表示」の Auto Layout コンポーネントとして共通化する",
    "セパレーターや項目のホバー状態もVariantsに含め、実装者が状態を把握できるようにする",
    "アバターはイニシャル表示のフォールバックVariantを用意しておく",
    "プロトタイプでは「クリックで開く→Escで閉じる」のインタラクションを設定し、挙動を再現する",
  ],
  code: {
    html: `<div class="user-menu">
  <button
    class="trigger"
    aria-haspopup="menu"
    aria-expanded="false"
    aria-controls="user-menu-list"
    onclick="const open = this.getAttribute('aria-expanded') === 'true';
             this.setAttribute('aria-expanded', String(!open));
             document.getElementById('user-menu-list').hidden = open;"
  >
    <img src="/avatar.png" alt="" width="36" height="36" />
    <span class="sr-only">ユーザーメニューを開く</span>
  </button>

  <div id="user-menu-list" role="menu" hidden>
    <div class="account">
      <p class="name">山田 太郎</p>
      <p class="email">taro@example.com</p>
    </div>
    <hr />
    <a role="menuitem" href="/profile">プロフィール</a>
    <a role="menuitem" href="/settings">設定</a>
    <hr />
    <button role="menuitem" type="button">ログアウト</button>
  </div>
</div>

<style>
  .user-menu { position: relative; display: inline-block; }
  .trigger { border: none; background: none; cursor: pointer; padding: 0; }
  .trigger img { border-radius: 50%; }
  [role="menu"] {
    position: absolute; right: 0; top: calc(100% + 8px); width: 240px;
    background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,.08); padding: 8px; z-index: 50;
  }
  .account { padding: 8px 12px; }
  .name { font-weight: 600; font-size: 14px; }
  .email { color: #6b7280; font-size: 12px; }
  [role="menuitem"] {
    display: block; width: 100%; text-align: left; padding: 8px 12px;
    border-radius: 8px; font-size: 14px; color: #111827;
    text-decoration: none; border: none; background: none; cursor: pointer;
  }
  [role="menuitem"]:hover { background: #f3f4f6; }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 8px 0; }
  .sr-only {
    position: absolute; width: 1px; height: 1px; overflow: hidden;
    clip: rect(0 0 0 0); white-space: nowrap;
  }
</style>`,
    tailwind: `<div class="relative inline-block">
  <button
    aria-haspopup="menu"
    aria-expanded="true"
    class="rounded-full ring-offset-2 transition hover:ring-2 hover:ring-violet-300
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
  >
    <img src="/avatar.png" alt="" class="size-9 rounded-full" />
    <span class="sr-only">ユーザーメニューを開く</span>
  </button>

  <div
    role="menu"
    class="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border
           border-gray-200 bg-white p-2 shadow-lg"
  >
    <div class="px-3 py-2">
      <p class="text-sm font-semibold">山田 太郎</p>
      <p class="text-xs text-gray-500">taro@example.com</p>
    </div>
    <hr class="my-2 border-gray-100" />
    <a role="menuitem" href="/profile"
       class="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
      プロフィール
    </a>
    <a role="menuitem" href="/settings"
       class="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
      設定
    </a>
    <hr class="my-2 border-gray-100" />
    <button role="menuitem" type="button"
            class="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100">
      ログアウト
    </button>
  </div>
</div>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";

type MenuItem = { label: string; onSelect: () => void };

export function UserMenu({
  name,
  email,
  avatarUrl,
  items,
}: {
  name: string;
  email: string;
  avatarUrl?: string;
  items: MenuItem[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex size-9 items-center justify-center overflow-hidden
                   rounded-full bg-violet-600 text-sm font-bold text-white
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-violet-500 focus-visible:ring-offset-2"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="" className="size-full object-cover" />
        ) : (
          name.charAt(0)
        )}
        <span className="sr-only">ユーザーメニューを開く</span>
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="アカウント"
          className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl
                     border border-gray-200 bg-white p-2 shadow-lg"
        >
          <div className="px-3 py-2">
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
          <hr className="my-2 border-gray-100" />
          {items.map((item) => (
            <button
              key={item.label}
              role="menuitem"
              type="button"
              onClick={() => {
                setOpen(false);
                item.onSelect();
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm
                         hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add dropdown-menu avatar
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User } from "lucide-react";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full focus-visible:outline-none
                           focus-visible:ring-2 focus-visible:ring-ring">
          <Avatar className="size-9">
            <AvatarImage src="/avatar.png" alt="" />
            <AvatarFallback>山</AvatarFallback>
          </Avatar>
          <span className="sr-only">ユーザーメニューを開く</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel>
          <p className="text-sm font-semibold">山田 太郎</p>
          <p className="text-xs font-normal text-muted-foreground">
            taro@example.com
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User aria-hidden /> プロフィール
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings aria-hidden /> 設定
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut aria-hidden /> ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
  },
  related: ["dropdown-menu", "avatar", "navbar", "settings-page"],
  views: 17800,
  favorites: 680,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-purple-500/15 via-violet-500/10 to-indigo-500/15",
  difficulty: 2,
  updatedAt: "2026-06-09",
};
