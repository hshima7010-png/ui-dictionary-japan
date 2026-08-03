import type { UIItem } from "@/types/ui";

export const avatar: UIItem = {
  slug: "avatar",
  name: "Avatar",
  nameJa: "アバター",
  description:
    "ユーザーを表す円形のプロフィール画像UI。画像がない場合はイニシャルで代替表示する。",
  category: "avatar",
  tags: ["プロフィール", "ユーザー", "画像", "イニシャル"],
  aliases: [
    "丸いプロフィール画像",
    "ユーザーの顔写真アイコン",
    "イニシャルが入った丸",
    "メンバーの写真が重なってるやつ",
    "アカウントの丸いアイコン",
    "プロフィールの顔マーク",
  ],
  whatIs: [
    "アバター（Avatar）は、ユーザーを視覚的に表すプロフィール画像のUIコンポーネントです。語源はサンスクリット語の「アヴァターラ（神の化身）」で、仮想世界における「ユーザーの分身」という意味からこの名前が付きました。現在のUIでは円形にトリミングされた顔写真やイラストが主流です。",
    "アバターの重要な設計要素が「フォールバック」です。画像が未設定・読み込み失敗の場合に、名前のイニシャル（「田中」→「田」、「Taro Yamada」→「TY」）や汎用の人型アイコンを表示することで、UIの一貫性を保ちます。イニシャルの背景色をユーザーIDから決定論的に生成し、同じユーザーには常に同じ色を割り当てる手法も広く使われています。",
    "単体で使うほか、複数のアバターを少しずつ重ねて表示する「アバターグループ（アバタースタック）」で参加メンバーを表現したり、右下に小さなドットを重ねてオンライン状態を示したりと、コラボレーションツールやSNSでは欠かせない存在です。",
  ],
  features: [
    "円形（または角丸矩形）にトリミングしたプロフィール画像を表示する",
    "画像がない場合はイニシャルや人型アイコンにフォールバックする",
    "xs〜xlなど複数サイズをデザインシステムで定義して使い分ける",
    "複数を重ねる「アバターグループ」で参加者・メンバーを表現できる",
    "右下のステータスドットでオンライン/オフラインを示せる",
    "クリックでプロフィールやアカウントメニューを開くトリガーにもなる",
  ],
  merits: [
    "「誰の」情報かが一目で分かり、コメント欄やメンバー一覧の視認性が上がる",
    "顔写真によってサービスに人間味と信頼感が生まれる",
    "イニシャルフォールバックにより、画像未設定でもUIの見た目が破綻しない",
    "アバターグループは「他に誰がいるか」を省スペースで伝えられる",
    "円形は視線を集めやすく、リスト内のアンカー（目印）として機能する",
  ],
  demerits: [
    "小さいサイズでは顔の判別が難しく、同系色のアバターは見分けにくい",
    "画像の読み込みに失敗した際のフォールバック処理を怠ると壊れた印象を与える",
    "ユーザー投稿画像には不適切コンテンツ対策（モデレーション）が必要になる",
    "アバターグループの重なりが多すぎると個々の識別性が失われる",
  ],
  bestPractices: [
    "サイズはデザイントークンで統一する（例：24 / 32 / 40 / 48 / 64px）",
    "イニシャルの背景色はユーザーIDのハッシュから決定論的に生成し、毎回同じ色にする",
    "画像はaspect-ratio 1:1でトリミングし、object-fit: coverで中央を切り出す",
    "アバターグループは表示数に上限を設け、超過分は「+5」の集約表示にする",
    "ステータスドットは背景色と同色の縁取り（ring）を付けて視認性を上げる",
    "1文字イニシャル（日本語名）と2文字イニシャル（英語名）の両方をテストする",
  ],
  useCases: [
    "Slack — メッセージ送信者のアバターとオンラインステータスドット",
    "GitHub — コミット作者・レビュアーのアバターとContributor一覧",
    "Notion — ページ右上に閲覧中メンバーのアバターグループを表示",
    "Google Workspace — 右上のアカウントアバターからプロフィールメニューを開く",
    "FigmaのマルチプレイヤーUI — 編集中ユーザーのアバターをツールバーに列挙",
  ],
  accessibility: [
    "意味を持つアバター画像にはalt属性で人物名を設定する（例：alt=\"田中太郎\"）",
    "名前テキストが隣にある場合は alt=\"\" にして二重読み上げを防ぐ",
    "イニシャル表示にはaria-labelで正式な名前を補う",
    "ステータスドットは色だけでなくsr-onlyテキストで「オンライン」等を伝える",
    "アバターがボタンを兼ねる場合はbutton要素にし、aria-labelで操作内容を示す",
  ],
  figma: [
    "EllipseにImage Fill（Crop: Fill）を設定した円をComponent化する",
    "Variantsで「type: image / initials / icon」のフォールバック3状態を定義する",
    "サイズはComponent Property（size: 24/32/40/48）で切り替えられるようにする",
    "ステータスドットはBooleanプロパティ「online」でオンオフできるようにする",
    "アバターグループはAuto Layoutのネガティブgap（-8など）で重なりを表現する",
  ],
  code: {
    html: `<!-- 画像あり -->
<span class="avatar">
  <img src="/avatars/tanaka.jpg" alt="田中太郎" />
</span>

<!-- イニシャルフォールバック -->
<span class="avatar avatar-initials" role="img" aria-label="佐藤花子">佐</span>

<!-- オンラインステータス付き -->
<span class="avatar with-status">
  <img src="/avatars/suzuki.jpg" alt="鈴木一郎" />
  <span class="status online"></span>
  <span class="visually-hidden">オンライン</span>
</span>

<style>
  .avatar {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background: #f3f4f6;
  }
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .avatar-initials {
    background: #e0e7ff;
    color: #4338ca;
    font-weight: 600;
    font-size: 16px;
  }
  .with-status {
    overflow: visible;
  }
  .with-status img {
    border-radius: 50%;
  }
  .status {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  .status.online { background: #22c55e; }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
</style>`,
    tailwind: `<!-- 画像あり -->
<img
  src="/avatars/tanaka.jpg"
  alt="田中太郎"
  class="size-10 rounded-full object-cover"
/>

<!-- イニシャルフォールバック -->
<span
  role="img"
  aria-label="佐藤花子"
  class="flex size-10 items-center justify-center rounded-full
         bg-indigo-100 font-semibold text-indigo-700"
>
  佐
</span>

<!-- オンラインステータス付き -->
<span class="relative inline-block">
  <img
    src="/avatars/suzuki.jpg"
    alt="鈴木一郎"
    class="size-10 rounded-full object-cover"
  />
  <span
    class="absolute bottom-0 right-0 size-3 rounded-full
           bg-green-500 ring-2 ring-white"
    aria-hidden="true"
  ></span>
  <span class="sr-only">オンライン</span>
</span>

<!-- アバターグループ -->
<div class="flex -space-x-2">
  <img src="/avatars/a.jpg" alt="田中太郎"
       class="size-8 rounded-full object-cover ring-2 ring-white" />
  <img src="/avatars/b.jpg" alt="佐藤花子"
       class="size-8 rounded-full object-cover ring-2 ring-white" />
  <img src="/avatars/c.jpg" alt="鈴木一郎"
       class="size-8 rounded-full object-cover ring-2 ring-white" />
  <span class="flex size-8 items-center justify-center rounded-full
               bg-gray-100 text-xs font-medium text-gray-600
               ring-2 ring-white">
    +5
  </span>
</div>`,
    react: `"use client";

import { useState } from "react";

type AvatarProps = {
  src?: string;
  name: string;
  size?: number;
  online?: boolean;
};

/** 名前から決定論的に背景色を選ぶ */
function colorFromName(name: string) {
  const colors = [
    "bg-indigo-100 text-indigo-700",
    "bg-rose-100 text-rose-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-sky-100 text-sky-700",
  ];
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) | 0;
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({ src, name, size = 40, online }: AvatarProps) {
  const [error, setError] = useState(false);
  const showImage = src && !error;
  const initial = name.slice(0, 1).toUpperCase();

  return (
    <span
      className="relative inline-block shrink-0"
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          onError={() => setError(true)}
          className="size-full rounded-full object-cover"
        />
      ) : (
        <span
          role="img"
          aria-label={name}
          className={\`flex size-full items-center justify-center
                      rounded-full font-semibold \${colorFromName(name)}\`}
          style={{ fontSize: size * 0.4 }}
        >
          {initial}
        </span>
      )}
      {online !== undefined && (
        <>
          <span
            aria-hidden
            className={\`absolute bottom-0 right-0 size-1/4 rounded-full
                        ring-2 ring-white
                        \${online ? "bg-green-500" : "bg-gray-300"}\`}
          />
          <span className="sr-only">
            {online ? "オンライン" : "オフライン"}
          </span>
        </>
      )}
    </span>
  );
}

// 使用例
export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Avatar src="/avatars/tanaka.jpg" name="田中太郎" online />
      <Avatar name="佐藤花子" size={48} />
      <Avatar name="Suzuki Ichiro" size={32} online={false} />
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add avatar
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function UserAvatar() {
  return (
    <div className="flex items-center gap-4">
      {/* 画像 + フォールバック */}
      <Avatar>
        <AvatarImage src="/avatars/tanaka.jpg" alt="田中太郎" />
        <AvatarFallback>田</AvatarFallback>
      </Avatar>

      {/* アバターグループ */}
      <div className="flex -space-x-2">
        {["田", "佐", "鈴"].map((initial) => (
          <Avatar key={initial} className="ring-2 ring-background">
            <AvatarFallback>{initial}</AvatarFallback>
          </Avatar>
        ))}
        <Avatar className="ring-2 ring-background">
          <AvatarFallback className="text-xs">+5</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}`,
  },
  related: ["badge", "card", "dropdown-menu", "navbar", "testimonials"],
  views: 24600,
  favorites: 980,
  collections: ["saas-ui", "mobile-ui"],
  gradient: "from-rose-500/15 via-pink-500/10 to-fuchsia-500/15",
  difficulty: 1,
  updatedAt: "2026-06-25",
};
