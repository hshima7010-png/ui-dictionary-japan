import type { UIItem } from "@/types/ui";

export const reviewCard: UIItem = {
  slug: "review-card",
  name: "Review Card",
  nameJa: "レビューカード",
  description:
    "星評価・本文・投稿者情報を1枚にまとめたカード。購入の意思決定を後押しする。",
  category: "testimonials",
  tags: ["レビュー", "口コミ", "カード", "EC", "ソーシャルプルーフ"],
  aliases: [
    "商品ページの口コミ一覧に並んでいるやつ",
    "星と感想がセットになったカード",
    "購入者の声のボックス",
    "レビュー欄の1件1件の枠",
    "口コミカード",
    "参考になったボタンが付いた感想欄",
  ],
  whatIs: [
    "レビューカード（Review Card)は、1件のユーザーレビューを「星評価・タイトル・本文・投稿者情報・投稿日」といった要素でカード状にまとめたUIコンポーネントです。カードUIの一種で、レビュー（review: 批評・評価）を表示することに特化した型としてこの名前で呼ばれます。企業側が選んだ推薦の声を載せるテスティモニアルと異なり、一般ユーザーの投稿を並べる点が特徴です。",
    "ECにおける役割は「ソーシャルプルーフ（社会的証明）」の提供です。Amazonのレビューカードは星・タイトル・本文に加えて「認証済み購入」バッジや「参考になった」投票を備え、レビュー自体の信頼性を担保する仕組みが作り込まれています。楽天市場でも購入者レビューが購買判断の中心にあり、Shopifyストアでは Judge.me や Loox などのアプリが写真付きレビューカードのグリッド表示を提供しています。",
    "設計上のポイントは、本文の長さが1行〜数千字までばらつく前提でレイアウトを組むことです。一定行数での切り詰めと「続きを読む」、写真サムネイル、ショップからの返信など、可変要素が多いコンポーネントであり、レビュー構造化データ（Review / AggregateRating）との併用でSEO効果も狙えます。",
  ],
  features: [
    "星評価・タイトル・本文・投稿者・投稿日を1枚のカードに集約する",
    "「認証済み購入」バッジで実購入者のレビューであることを示せる",
    "「参考になった」投票ボタンでレビューの有用性を集合知で評価できる",
    "ユーザー投稿の写真・動画サムネイルを添付できる",
    "長文は行数制限＋「続きを読む」で切り詰めて一覧性を保つ",
    "ショップ・運営からの返信をスレッド状にぶら下げられる",
  ],
  merits: [
    "第三者の実体験というソーシャルプルーフがCVRを直接押し上げる",
    "サイズ感や使用感など、商品説明では伝わらない生の情報を補完できる",
    "低評価レビューの存在がかえって全体の信頼性を高める",
    "ユーザー投稿がそのままコンテンツになり、SEOに効く独自テキストが増える",
    "カード単位で独立しているため、一覧・グリッド・カルーセルに柔軟に展開できる",
  ],
  demerits: [
    "レビューが集まるまでは空欄になり、逆に不安を与える（コールドスタート問題）",
    "サクラ・やらせレビューが混ざると信頼が一気に崩れる",
    "長文・写真・返信など可変要素が多く、レイアウト崩れの温床になりやすい",
    "低評価レビューへの対応（返信・表示順）の運用コストがかかる",
    "件数が多い場合、並び順・フィルタのUIを別途設計する必要がある",
  ],
  bestPractices: [
    "星・タイトル・本文・投稿者・日付の情報階層を固定し、視線の流れを一定にする",
    "「認証済み購入」バッジや購入バリエーション（色・サイズ）を表示して信頼性を高める",
    "本文は3〜5行で切り詰め、「続きを読む」で展開できるようにする",
    "「参考になった」投票を付け、有用なレビューを上位に並べる",
    "低評価レビューを隠さず、星別フィルタで自由に読めるようにする",
    "投稿日を明示し、新しいレビューが上位に来る並び順を既定にする",
  ],
  useCases: [
    "Amazon — 認証済み購入バッジ＋参考になった投票付きレビューカード",
    "楽天市場 — 購入者レビュー一覧と注文内容（色・サイズ）の表示",
    "Shopifyストア — Judge.me / Looxによる写真付きレビューカードのグリッド",
    "食べログ・Googleマップ — 店舗レビューのカード表示と返信スレッド",
    "Booking.com — 良かった点/気になった点を分けたレビューカード",
  ],
  accessibility: [
    "1件を article 要素でマークアップし、aria-label で「山田さんのレビュー」など識別名を与える",
    "星評価は画像や記号の羅列でなく「5つ星中4」とテキストで伝わるようにする",
    "「参考になった」ボタンは button 要素にし、押下済み状態を aria-pressed で表現する",
    "「続きを読む」は aria-expanded を付け、展開後もフォーカス位置を維持する",
    "レビュー写真には「投稿者による商品写真」など意味のあるaltを付ける",
    "投稿日は time 要素＋datetime属性でマークアップする",
  ],
  figma: [
    "Auto Layout（縦）でヘッダー行（星・タイトル）→本文→フッター行（投稿者・投票）を組む",
    "本文テキストはmax linesを設定し、切り詰め時の見え方を確認する",
    "星評価・アバター・バッジは別コンポーネントにしてネストする",
    "本文の長さ違い（1行/5行/写真付き）のVariantを作り、一覧での高さ揺れを検証する",
    "グリッド表示とリスト表示の両方のフレームを用意し、幅の変化に耐えるか確認する",
  ],
  code: {
    html: `<article class="review-card" aria-label="田中さんのレビュー">
  <header class="review-header">
    <span class="stars" role="img" aria-label="5つ星中4">
      <span aria-hidden="true">★★★★☆</span>
    </span>
    <h3 class="review-title">サイズ感がちょうど良い</h3>
  </header>

  <p class="review-body">
    普段Mサイズですが、レビューを参考にMを購入してぴったりでした。
    生地がしっかりしていて、洗濯しても型崩れしません。
  </p>

  <footer class="review-footer">
    <img class="avatar" src="/img/avatar-tanaka.jpg" alt="" width="32" height="32" />
    <div class="meta">
      <span class="author">田中さん</span>
      <span class="badge">認証済み購入</span>
      <time datetime="2026-06-12">2026年6月12日</time>
    </div>
    <button type="button" class="helpful" aria-pressed="false">
      参考になった（12）
    </button>
  </footer>
</article>

<style>
  .review-card {
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 20px;
    background: #fff;
  }
  .review-header { display: flex; align-items: center; gap: 12px; }
  .stars { color: #f59e0b; letter-spacing: 2px; }
  .review-title { margin: 0; font-size: 16px; }
  .review-body { color: #4b5563; line-height: 1.7; margin: 12px 0; }
  .review-footer { display: flex; align-items: center; gap: 12px; }
  .avatar { border-radius: 9999px; }
  .meta { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #6b7280; }
  .badge {
    background: #fdf2f8; color: #be185d;
    padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600;
  }
  .helpful {
    margin-left: auto;
    border: 1px solid #d1d5db; border-radius: 9999px;
    background: none; padding: 6px 12px; font-size: 13px; cursor: pointer;
  }
  .helpful[aria-pressed="true"] { border-color: #db2777; color: #db2777; }
</style>`,
    tailwind: `<article
  class="rounded-2xl border border-gray-200 bg-white p-5"
  aria-label="田中さんのレビュー"
>
  <!-- 星＋タイトル -->
  <header class="flex items-center gap-3">
    <span role="img" aria-label="5つ星中4" class="tracking-widest text-amber-400">
      <span aria-hidden="true">★★★★☆</span>
    </span>
    <h3 class="font-semibold">サイズ感がちょうど良い</h3>
  </header>

  <!-- 本文（3行で切り詰め） -->
  <p class="mt-3 line-clamp-3 leading-relaxed text-gray-600">
    普段Mサイズですが、レビューを参考にMを購入してぴったりでした。
    生地がしっかりしていて、洗濯しても型崩れしません。
    色違いでリピートを検討しています。
  </p>
  <button type="button" class="mt-1 text-sm text-pink-600 underline" aria-expanded="false">
    続きを読む
  </button>

  <!-- 投稿者情報＋投票 -->
  <footer class="mt-4 flex items-center gap-3">
    <img src="/img/avatar-tanaka.jpg" alt="" class="size-8 rounded-full object-cover" />
    <div class="flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
      <span class="font-medium text-gray-800">田中さん</span>
      <span class="rounded-full bg-pink-50 px-2 py-0.5 text-xs font-semibold text-pink-700">
        認証済み購入
      </span>
      <time datetime="2026-06-12">2026年6月12日</time>
    </div>
    <button
      type="button"
      aria-pressed="false"
      class="ml-auto rounded-full border border-gray-300 px-3 py-1.5 text-sm
             text-gray-600 hover:border-pink-500 hover:text-pink-600"
    >
      参考になった（12）
    </button>
  </footer>
</article>`,
    react: `"use client";

import { useState } from "react";
import { ThumbsUp } from "lucide-react";

export type Review = {
  id: string;
  rating: number; // 1〜5
  title: string;
  body: string;
  author: string;
  avatarUrl?: string;
  date: string; // ISO形式
  verified: boolean;
  helpfulCount: number;
};

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const [voted, setVoted] = useState(false);
  const helpful = review.helpfulCount + (voted ? 1 : 0);
  const isLong = review.body.length > 100;

  return (
    <article
      aria-label={\`\${review.author}さんのレビュー\`}
      className="rounded-2xl border border-gray-200 bg-white p-5"
    >
      <header className="flex items-center gap-3">
        <span
          role="img"
          aria-label={\`5つ星中\${review.rating}\`}
          className="tracking-widest text-amber-400"
        >
          <span aria-hidden>
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </span>
        </span>
        <h3 className="font-semibold">{review.title}</h3>
      </header>

      <p
        className={\`mt-3 leading-relaxed text-gray-600 \${
          expanded ? "" : "line-clamp-3"
        }\`}
      >
        {review.body}
      </p>
      {isLong && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-sm text-pink-600 underline"
        >
          {expanded ? "折りたたむ" : "続きを読む"}
        </button>
      )}

      <footer className="mt-4 flex items-center gap-3">
        {review.avatarUrl && (
          <img
            src={review.avatarUrl}
            alt=""
            className="size-8 rounded-full object-cover"
          />
        )}
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
          <span className="font-medium text-gray-800">{review.author}さん</span>
          {review.verified && (
            <span className="rounded-full bg-pink-50 px-2 py-0.5 text-xs font-semibold text-pink-700">
              認証済み購入
            </span>
          )}
          <time dateTime={review.date}>
            {new Date(review.date).toLocaleDateString("ja-JP")}
          </time>
        </div>
        <button
          type="button"
          aria-pressed={voted}
          onClick={() => setVoted((v) => !v)}
          className={\`ml-auto flex items-center gap-1.5 rounded-full border px-3
                      py-1.5 text-sm transition-colors \${
                        voted
                          ? "border-pink-500 text-pink-600"
                          : "border-gray-300 text-gray-600 hover:border-pink-500"
                      }\`}
        >
          <ThumbsUp aria-hidden className="size-4" />
          参考になった（{helpful}）
        </button>
      </footer>
    </article>
  );
}`,
    shadcn: `// npx shadcn@latest add card avatar badge button
import { ThumbsUp } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function ReviewCard() {
  return (
    <Card aria-label="田中さんのレビュー">
      <CardHeader className="flex-row items-center gap-3 space-y-0 pb-3">
        <span role="img" aria-label="5つ星中4" className="tracking-widest text-amber-400">
          <span aria-hidden>★★★★☆</span>
        </span>
        <h3 className="font-semibold">サイズ感がちょうど良い</h3>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="line-clamp-3 leading-relaxed text-muted-foreground">
          普段Mサイズですが、レビューを参考にMを購入してぴったりでした。
          生地がしっかりしていて、洗濯しても型崩れしません。
        </p>
      </CardContent>

      <CardFooter className="gap-3">
        <Avatar className="size-8">
          <AvatarImage src="/img/avatar-tanaka.jpg" alt="" />
          <AvatarFallback>田</AvatarFallback>
        </Avatar>
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">田中さん</span>
          <Badge variant="secondary">認証済み購入</Badge>
          <time dateTime="2026-06-12">2026年6月12日</time>
        </div>
        <Button variant="outline" size="sm" className="ml-auto rounded-full">
          <ThumbsUp aria-hidden className="size-4" />
          参考になった（12）
        </Button>
      </CardFooter>
    </Card>
  );
}`,
  },
  related: ["star-rating", "testimonials", "card", "avatar"],
  views: 15200,
  favorites: 620,
  collections: ["ec-ui", "saas-ui"],
  gradient: "from-fuchsia-500/15 via-purple-500/10 to-pink-500/15",
  difficulty: 1,
  updatedAt: "2026-04-15",
};
