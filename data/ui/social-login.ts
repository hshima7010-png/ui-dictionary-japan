import type { UIItem } from "@/types/ui";

export const socialLogin: UIItem = {
  slug: "social-login",
  name: "Social Login",
  nameJa: "ソーシャルログイン",
  description:
    "GoogleやAppleなど外部アカウントで認証するUI。登録の手間を減らしCVRを高める。",
  category: "authentication",
  tags: ["認証", "OAuth", "ログイン", "会員登録", "CVR改善"],
  aliases: [
    "Googleでログインするボタン",
    "LINEで登録できるやつ",
    "外部アカウントでサインインする仕組み",
    "パスワードなしで入れるログイン",
    "SNS連携ログイン",
    "Appleでサインインのボタン",
  ],
  whatIs: [
    "ソーシャルログイン（Social Login）は、Google・Apple・LINE・X などの外部サービスのアカウントを使って、新規登録やログインを行える認証UIです。「ソーシャルメディアのアカウントを利用したログイン」であることからこの名が付き、技術的にはOAuth 2.0 / OpenID Connectといった認可・認証プロトコルの上に成り立っています。",
    "ユーザーはメールアドレスの入力やパスワードの新規作成をせずに、数タップで登録・ログインを完了できます。フォーム入力の離脱が大きいモバイルでは特に効果が高く、ECやSaaSの会員登録フローでは定番の選択肢になりました。日本国内ではLINEログインの存在感が大きく、海外向けサービスとはプロバイダー構成が変わる点が特徴です。",
    "一方で、実装はボタンを並べるだけでは終わりません。プロバイダーごとのブランドガイドライン（ロゴ・文言・配色の規定）、Appleの「Sign in with Apple」必須要件（iOSアプリで他社ソーシャルログインを提供する場合）、既存メールアカウントとの名寄せなど、設計段階で決めるべき論点が多いUIでもあります。",
  ],
  features: [
    "Google・Apple・LINEなど複数のIDプロバイダーのボタンを縦または横に並べて提示する",
    "OAuth 2.0 / OpenID Connectのリダイレクトまたはポップアップフローで認証する",
    "各プロバイダーの公式ブランドガイドラインに沿ったロゴ・配色・文言が求められる",
    "メール＋パスワード認証と併設し、「または」の区切り線（divider）で分けるレイアウトが定番",
    "前回使用したログイン方法を記憶して「前回はGoogleでログインしました」と表示する実装もある",
    "ワンタップ系（Google One Tap、LINEの自動ログイン）と組み合わせるとさらに摩擦を減らせる",
  ],
  merits: [
    "パスワード作成・記憶が不要になり、登録完了率（CVR）が大きく向上する",
    "パスワードを自社で保管しないため、漏えいリスクと管理コストを減らせる",
    "プロバイダー側の2段階認証をそのまま活用でき、セキュリティ水準を底上げできる",
    "メールアドレス確認済みの情報を受け取れるため、確認メールのステップを省略できる場合がある",
    "モバイルでは入力フォームを最小化でき、離脱ポイントを大幅に削減できる",
  ],
  demerits: [
    "プロバイダー障害・仕様変更・アカウントBANの影響を自社サービスが直接受ける",
    "選択肢が多すぎると「どれで登録したか忘れる」問題が起き、重複アカウントの原因になる",
    "各社ブランドガイドライン準拠のデザイン制約が強く、ボタンの見た目を自由にできない",
    "OAuthフローやアカウント名寄せの実装・テストコストは意外と高い",
    "プライバシーへの懸念からソーシャル連携を避けるユーザーも一定数存在する",
  ],
  bestPractices: [
    "プロバイダーは3〜4個までに絞る。ターゲット層の利用率データ（日本ならGoogle・LINE・Appleが軸）で選ぶ",
    "「Googleで続行」のように登録とログインを区別しない文言にすると、既存ユーザーの迷いを減らせる",
    "前回使用したログイン方法をローカルに記憶し、バッジやソート順で提示して重複登録を防ぐ",
    "メール認証も必ず併設する。ソーシャルログインのみだと企業ユーザーや非利用者を取りこぼす",
    "iOSアプリで他社ソーシャルログインを出す場合はSign in with Appleの併設が審査要件になる点に注意する",
    "同一メールアドレスのアカウント名寄せ（アカウントリンク）の挙動を事前に設計し、エラー文言まで用意する",
  ],
  useCases: [
    "Spotify — Google / Facebook / Appleを縦に並べ、メール登録は下部に控えめに配置",
    "メルカリ — 日本のユーザーに合わせてLINE・Google・Apple・Facebookを提供",
    "Notion — GoogleとAppleに絞り、業務ユーザー向けにSSO（SAML）も併設",
    "Airbnb — 前回のログイン方法を記憶して優先表示し、重複アカウントを抑止",
    "食べログ・ホットペッパーなど国内予約系 — LINEログインで会員登録の離脱を削減",
  ],
  accessibility: [
    "各ボタンには「Googleでログイン」のようにプロバイダー名を含むアクセシブルネームを付ける（ロゴ画像だけにしない）",
    "ロゴ画像には適切なalt、装飾扱いの場合はaria-hidden=\"true\"と空altを設定する",
    "ブランドカラーのボタンでも文字色とのコントラスト比4.5:1以上を確認する（特に白背景ボタンの枠線）",
    "「または」の区切り線は視覚だけでなく、スクリーンリーダーにも読まれるテキストとして配置する",
    "認証ポップアップやリダイレクトから戻った際、フォーカスと通知（成功・失敗）を適切に伝える",
  ],
  figma: [
    "各プロバイダー公式のブランドリソース（Google Identity、Apple Design Resources、LINEログインボタンデザインガイドライン）から正規のロゴ素材を取得する",
    "ボタンをComponent化し、Property「provider」のVariantsでGoogle / Apple / LINEなどを切り替えられるようにする",
    "Auto Layout（縦、gap 12）でボタン群を組み、幅はFillにしてフォーム幅と揃える",
    "「または」dividerはラインとテキストを横Auto Layoutで組み、線側をFillにすると幅が可変になる",
    "ライト／ダークテーマ両方でロゴ規定（白抜き・黒抜き）を満たすか、Variantで両対応を用意して確認する",
  ],
  code: {
    html: `<div class="social-login">
  <button type="button" class="social-btn google" aria-label="Googleでログイン">
    <img src="/icons/google.svg" alt="" aria-hidden="true" width="20" height="20" />
    Googleで続行
  </button>
  <button type="button" class="social-btn apple" aria-label="Appleでログイン">
    <img src="/icons/apple.svg" alt="" aria-hidden="true" width="20" height="20" />
    Appleで続行
  </button>
  <div class="divider" role="separator" aria-label="または">
    <span>または</span>
  </div>
  <button type="button" class="social-btn email">メールアドレスで続行</button>
</div>

<style>
  .social-login {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 360px;
  }
  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #d1d5db;
    background: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  .social-btn.apple {
    background: #000;
    color: #fff;
    border-color: #000;
  }
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #9ca3af;
    font-size: 13px;
  }
  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }
</style>`,
    tailwind: `<div class="flex w-full max-w-sm flex-col gap-3">
  <button
    type="button"
    class="flex items-center justify-center gap-2.5 rounded-xl border
           border-gray-300 bg-white px-4 py-3 font-semibold
           hover:bg-gray-50 focus-visible:outline-2
           focus-visible:outline-offset-2 focus-visible:outline-amber-500"
  >
    <img src="/icons/google.svg" alt="" aria-hidden="true" class="size-5" />
    Googleで続行
  </button>
  <button
    type="button"
    class="flex items-center justify-center gap-2.5 rounded-xl bg-black
           px-4 py-3 font-semibold text-white hover:bg-gray-900"
  >
    <img src="/icons/apple.svg" alt="" aria-hidden="true" class="size-5" />
    Appleで続行
  </button>
  <div class="flex items-center gap-3 text-sm text-gray-400">
    <span class="h-px flex-1 bg-gray-200"></span>
    または
    <span class="h-px flex-1 bg-gray-200"></span>
  </div>
  <button
    type="button"
    class="rounded-xl border border-gray-300 px-4 py-3 font-semibold
           hover:bg-gray-50"
  >
    メールアドレスで続行
  </button>
</div>`,
    react: `"use client";

import { useEffect, useState } from "react";

type Provider = "google" | "apple" | "line";

const PROVIDERS: { id: Provider; label: string; icon: string }[] = [
  { id: "google", label: "Googleで続行", icon: "/icons/google.svg" },
  { id: "apple", label: "Appleで続行", icon: "/icons/apple.svg" },
  { id: "line", label: "LINEで続行", icon: "/icons/line.svg" },
];

export function SocialLogin({
  onSelect,
}: {
  onSelect: (provider: Provider) => Promise<void>;
}) {
  const [loading, setLoading] = useState<Provider | null>(null);
  const [lastUsed, setLastUsed] = useState<Provider | null>(null);

  useEffect(() => {
    setLastUsed(localStorage.getItem("lastLoginProvider") as Provider | null);
  }, []);

  const handleClick = async (provider: Provider) => {
    setLoading(provider);
    try {
      localStorage.setItem("lastLoginProvider", provider);
      await onSelect(provider);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {PROVIDERS.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleClick(id)}
          disabled={loading !== null}
          aria-busy={loading === id}
          className="relative flex items-center justify-center gap-2.5
                     rounded-xl border border-gray-300 bg-white px-4 py-3
                     font-semibold hover:bg-gray-50 disabled:opacity-60"
        >
          <img src={icon} alt="" aria-hidden="true" className="size-5" />
          {loading === id ? "接続中…" : label}
          {lastUsed === id && (
            <span
              className="absolute right-3 rounded-full bg-amber-100 px-2
                         py-0.5 text-xs font-medium text-amber-700"
            >
              前回使用
            </span>
          )}
        </button>
      ))}
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add button separator
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SocialLoginCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Button variant="outline" size="lg" className="gap-2.5">
        <img src="/icons/google.svg" alt="" aria-hidden="true" className="size-5" />
        Googleで続行
      </Button>
      <Button size="lg" className="gap-2.5 bg-black hover:bg-gray-900">
        <img src="/icons/apple.svg" alt="" aria-hidden="true" className="size-5" />
        Appleで続行
      </Button>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Separator className="flex-1" />
        または
        <Separator className="flex-1" />
      </div>
      <Button variant="outline" size="lg">
        メールアドレスで続行
      </Button>
    </div>
  );
}`,
  },
  related: ["login-form", "password-input", "otp-input", "button"],
  views: 52800,
  favorites: 2380,
  collections: ["saas-ui", "ec-ui", "finance-ui"],
  gradient: "from-amber-500/15 via-orange-500/10 to-red-500/15",
  difficulty: 3,
  updatedAt: "2026-07-02",
};
