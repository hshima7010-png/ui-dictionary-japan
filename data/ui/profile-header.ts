import type { UIItem } from "@/types/ui";

export const profileHeader: UIItem = {
  slug: "profile-header",
  name: "Profile Header",
  nameJa: "プロフィールヘッダー",
  description:
    "アバター・名前・自己紹介・統計をまとめた、プロフィールページ最上部の顔となるUI。",
  category: "profile",
  tags: ["プロフィール", "アバター", "カバー画像", "SNS"],
  aliases: [
    "プロフィールページの上の部分",
    "アイコンと名前とフォロワー数が出ているところ",
    "カバー画像とアバターが重なっているやつ",
    "自己紹介が書いてあるヘッダー",
    "マイページの上のエリア",
  ],
  whatIs: [
    "プロフィールヘッダー（Profile Header）は、ユーザーやチームのプロフィールページ最上部に置かれる、アバター・表示名・自己紹介文・所属・統計情報（フォロワー数など）・アクションボタン（フォロー／編集）をまとめた領域です。プロフィールページの「ヘッダー（頭部）」に当たることからこう呼ばれ、そのユーザーが何者かを一瞬で伝える「顔」の役割を担います。",
    "定番の構成は、X（旧Twitter）やFacebookに代表される「カバー画像の下辺にアバターを重ねる」レイアウトです。GitHubでは大きめのアバターと自己紹介・所属・フォロワー数を縦に並べ、その下にリポジトリなどのタブが続きます。SlackやNotionのメンバープロフィールでも、アバターと役職・連絡手段を最上部にまとめる同様のパターンが使われています。",
    "閲覧者が「他人のプロフィールを見る場合」と「自分のプロフィールを見る場合」で必要なアクションが変わる（フォローする／編集する）ため、同じレイアウトの中で状態によってボタンを出し分ける設計が求められる点が、このUI特有の難しさです。",
  ],
  features: [
    "カバー画像にアバターを重ねる、SNSで定着したレイアウトパターンを持つ",
    "表示名・ユーザーID・自己紹介・所在地・リンクなど複数のメタ情報を階層的に配置する",
    "フォロワー数・投稿数などの統計を数値＋ラベルの組で横並びに表示する",
    "本人か他人かによって「編集」「フォロー」などアクションボタンが切り替わる",
    "認証バッジやオンライン状態などのステータス表示を組み込める",
    "直下にタブを置き、投稿・いいねなどのコンテンツ切り替えの起点になる",
  ],
  merits: [
    "ユーザーの人となりを1画面で伝えられ、フォローや連絡などの次の行動につなげやすい",
    "SNSで広く定着したレイアウトのため、初見でも情報の位置が予測できる",
    "統計情報の表示が信頼性や活動量のシグナルとして機能する",
    "カバー画像やアバターで個性を表現でき、ユーザーの愛着形成に寄与する",
    "タブと組み合わせることで、大量のコンテンツへの入り口を整理できる",
  ],
  demerits: [
    "カバー画像＋アバターの重なりはレスポンシブ対応の難易度が高い",
    "情報を詰め込みすぎると、モバイルでファーストビューの大半を占有してしまう",
    "ユーザー生成のカバー画像は品質がばらつき、テキストの可読性を損なうことがある",
    "フォロワー数などの統計表示が、数値の少ないユーザーには心理的負担になる",
    "未設定項目（自己紹介なし・画像なし）が多いと寂しい印象になり、デフォルト設計が必須",
  ],
  bestPractices: [
    "アバターは必ずイニシャルや生成パターンのフォールバックを用意し、未設定でも成立させる",
    "カバー画像の上に重ねるテキストは避けるか、オーバーレイで確実にコントラストを確保する",
    "本人閲覧時は「プロフィールを編集」、他人閲覧時は「フォロー」と、主ボタンを文脈で切り替える",
    "統計数値は桁が大きくなったら「1.2万」のように省略表記し、正確な値はツールチップで補う",
    "モバイルではカバー画像の高さを抑え、コンテンツへの到達を妨げない",
    "自己紹介文は行数制限＋「もっと見る」で折りたたみ、ヘッダーの高さを安定させる",
  ],
  useCases: [
    "X（旧Twitter） — カバー画像＋アバター＋フォロー統計の代表的レイアウト",
    "GitHub — アバター・所属・フォロワーを左カラムにまとめた開発者プロフィール",
    "LinkedIn — 経歴の要約と「つながりを申請」ボタンを備えたビジネス向けヘッダー",
    "note・Qiita — 著者ページ上部のプロフィールとフォローボタン",
    "SlackのメンバープロフィールUI — 役職・現地時間・連絡手段をコンパクトに表示",
  ],
  accessibility: [
    "アバター画像には「山田太郎のプロフィール画像」など人物が特定できるaltを設定する",
    "装飾目的のカバー画像は alt=\"\" にし、スクリーンリーダーの読み上げ対象から外す",
    "表示名はページの主見出し（h1）としてマークアップし、文書構造を明確にする",
    "統計は「1,234 フォロワー」のように数値とラベルを1つの要素として読み上げられるようにする",
    "フォロー状態の切り替えは aria-pressed やテキスト変更で支援技術にも伝える",
    "ボタンやリンクのフォーカスリングがカバー画像上でも視認できる色にする",
  ],
  figma: [
    "カバー画像・アバター行・情報ブロックを縦の Auto Layout で組み、アバターはネガティブマージンで重ねる",
    "アバターに「画像あり／イニシャル」のVariantsを作り、未設定状態も必ずデザインする",
    "「本人閲覧／他人閲覧／フォロー中」のVariantsを用意し、ボタンの出し分けを明示する",
    "統計はテキストの桁数を変えたパターン（0、999、1.2万）で崩れないか確認する",
    "自己紹介の最大行数を決め、長文時の折りたたみ表示をデザインに含める",
  ],
  code: {
    html: `<header class="profile-header">
  <div class="cover" role="img" aria-label=""></div>
  <div class="body">
    <img class="avatar" src="/avatar.png" alt="山田太郎のプロフィール画像"
         width="96" height="96" />
    <div class="actions">
      <button type="button" class="follow" aria-pressed="false">フォロー</button>
    </div>
    <h1>山田 太郎</h1>
    <p class="username">@taro_design</p>
    <p class="bio">プロダクトデザイナー。UIとアクセシビリティについて発信しています。</p>
    <ul class="stats">
      <li><strong>128</strong> 投稿</li>
      <li><strong>1,234</strong> フォロワー</li>
      <li><strong>321</strong> フォロー中</li>
    </ul>
  </div>
</header>

<style>
  .profile-header { max-width: 640px; margin: 0 auto; }
  .cover {
    height: 160px; border-radius: 16px 16px 0 0;
    background: linear-gradient(135deg, #8b5cf6, #d946ef);
  }
  .body { padding: 0 24px 24px; }
  .avatar {
    border-radius: 50%; border: 4px solid #fff;
    margin-top: -48px; display: block;
  }
  .actions { display: flex; justify-content: flex-end; margin-top: -40px; }
  .follow {
    padding: 8px 20px; border-radius: 9999px; border: none;
    background: #111827; color: #fff; font-weight: 600; cursor: pointer;
  }
  h1 { font-size: 22px; margin: 16px 0 0; }
  .username { color: #6b7280; font-size: 14px; margin: 2px 0 12px; }
  .bio { font-size: 14px; line-height: 1.7; }
  .stats { display: flex; gap: 20px; list-style: none; padding: 0; margin: 16px 0 0; }
  .stats li { font-size: 14px; color: #6b7280; }
  .stats strong { color: #111827; }
</style>`,
    tailwind: `<header class="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white">
  <div class="h-40 bg-gradient-to-br from-violet-500 to-fuchsia-500"></div>

  <div class="px-6 pb-6">
    <div class="flex items-end justify-between">
      <img
        src="/avatar.png"
        alt="山田太郎のプロフィール画像"
        class="-mt-12 size-24 rounded-full border-4 border-white object-cover"
      />
      <button
        type="button"
        aria-pressed="false"
        class="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold
               text-white transition hover:bg-gray-700"
      >
        フォロー
      </button>
    </div>

    <h1 class="mt-4 text-xl font-bold">山田 太郎</h1>
    <p class="text-sm text-gray-500">@taro_design</p>
    <p class="mt-3 text-sm leading-relaxed">
      プロダクトデザイナー。UIとアクセシビリティについて発信しています。
    </p>

    <ul class="mt-4 flex gap-5 text-sm text-gray-500">
      <li><strong class="text-gray-900">128</strong> 投稿</li>
      <li><strong class="text-gray-900">1,234</strong> フォロワー</li>
      <li><strong class="text-gray-900">321</strong> フォロー中</li>
    </ul>
  </div>
</header>`,
    react: `"use client";

import { useState } from "react";

type Stat = { label: string; value: string };

export function ProfileHeader({
  name,
  username,
  bio,
  avatarUrl,
  stats,
  isOwner = false,
}: {
  name: string;
  username: string;
  bio?: string;
  avatarUrl?: string;
  stats: Stat[];
  isOwner?: boolean;
}) {
  const [following, setFollowing] = useState(false);

  return (
    <header className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div aria-hidden="true" className="h-40 bg-gradient-to-br from-violet-500 to-fuchsia-500" />

      <div className="px-6 pb-6">
        <div className="flex items-end justify-between">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={\`\${name}のプロフィール画像\`}
              className="-mt-12 size-24 rounded-full border-4 border-white object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="-mt-12 flex size-24 items-center justify-center rounded-full
                         border-4 border-white bg-violet-600 text-3xl font-bold text-white"
            >
              {name.charAt(0)}
            </div>
          )}

          {isOwner ? (
            <a
              href="/settings/profile"
              className="rounded-full border border-gray-300 px-5 py-2 text-sm
                         font-semibold hover:bg-gray-50"
            >
              プロフィールを編集
            </a>
          ) : (
            <button
              type="button"
              aria-pressed={following}
              onClick={() => setFollowing((v) => !v)}
              className={\`rounded-full px-5 py-2 text-sm font-semibold transition
                          \${following
                            ? "border border-gray-300 text-gray-900 hover:bg-gray-50"
                            : "bg-gray-900 text-white hover:bg-gray-700"}\`}
            >
              {following ? "フォロー中" : "フォロー"}
            </button>
          )}
        </div>

        <h1 className="mt-4 text-xl font-bold">{name}</h1>
        <p className="text-sm text-gray-500">@{username}</p>
        {bio && <p className="mt-3 text-sm leading-relaxed">{bio}</p>}

        <ul className="mt-4 flex gap-5 text-sm text-gray-500">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong className="text-gray-900">{stat.value}</strong> {stat.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}`,
    shadcn: `// npx shadcn@latest add avatar button badge
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProfileHeader() {
  return (
    <header className="mx-auto max-w-2xl overflow-hidden rounded-2xl border bg-card">
      <div aria-hidden className="h-40 bg-gradient-to-br from-violet-500 to-fuchsia-500" />
      <div className="px-6 pb-6">
        <div className="flex items-end justify-between">
          <Avatar className="-mt-12 size-24 border-4 border-background">
            <AvatarImage src="/avatar.png" alt="山田太郎のプロフィール画像" />
            <AvatarFallback className="text-2xl">山</AvatarFallback>
          </Avatar>
          <Button className="rounded-full">フォロー</Button>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <h1 className="text-xl font-bold">山田 太郎</h1>
          <Badge variant="secondary">PRO</Badge>
        </div>
        <p className="text-sm text-muted-foreground">@taro_design</p>
        <p className="mt-3 text-sm leading-relaxed">
          プロダクトデザイナー。UIとアクセシビリティについて発信しています。
        </p>

        <ul className="mt-4 flex gap-5 text-sm text-muted-foreground">
          <li><strong className="text-foreground">128</strong> 投稿</li>
          <li><strong className="text-foreground">1,234</strong> フォロワー</li>
          <li><strong className="text-foreground">321</strong> フォロー中</li>
        </ul>
      </div>
    </header>
  );
}`,
  },
  related: ["avatar", "badge", "tabs", "user-menu"],
  views: 9600,
  favorites: 340,
  collections: ["saas-ui", "mobile-ui"],
  gradient: "from-fuchsia-500/15 via-purple-500/10 to-violet-500/15",
  difficulty: 1,
  updatedAt: "2026-04-22",
};
