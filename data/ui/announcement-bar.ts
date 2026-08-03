import type { UIItem } from "@/types/ui";

export const announcementBar: UIItem = {
  slug: "announcement-bar",
  name: "Announcement Bar",
  nameJa: "アナウンスバー",
  description:
    "ページ最上部に表示する細い告知帯。セール・送料無料・メンテ告知を全ページで訴求できる。",
  category: "shopify-ui",
  tags: ["告知", "セール", "Shopify", "プロモーション", "ページ上部"],
  aliases: [
    "サイトの一番上に出る細い帯",
    "送料無料って書いてあるバー",
    "セールのお知らせが流れる帯",
    "ヘッダーの上の告知スペース",
    "閉じるボタン付きのお知らせバー",
    "プロモーションバー",
  ],
  whatIs: [
    "アナウンスバー（Announcement Bar）は、ページの最上部（ヘッダーのさらに上）に表示される細い帯状の告知UIです。「アナウンス（お知らせ）を載せるバー」というそのままの命名で、Shopifyのテーマが標準セクションとして搭載したことにより、ECの世界で名称ごと定着しました。プロモーションバー、ヘッダーバーとも呼ばれます。",
    "「全品送料無料」「サマーセール開催中」「年末年始の配送について」といった、全ページで伝えたい短い情報を1行で訴求します。ページ内のどこにいても最初に目へ入る位置にあり、クリックでキャンペーンページへ誘導するリンクを兼ねることも多い、費用対効果の高い告知枠です。",
    "常時表示のシンプルな帯のほか、閉じるボタン付き、複数メッセージのカルーセル式、期限付きセールのカウントダウン付きなど多くの変種があります。閉じた状態をCookieやlocalStorageに記憶して再訪時に出さない、といった「しつこくしない」制御が体験品質を左右します。",
  ],
  features: [
    "ヘッダーの上（またはすぐ下）に高さ32〜44px程度の帯として全ページ共通で表示される",
    "テキスト1行＋任意のリンクという最小構成で、背景色で注目を集める",
    "閉じるボタンを付け、閉じた状態をlocalStorage等に保存して再表示を抑制できる",
    "複数のお知らせをカルーセルやマーキー風に順送りできるバリエーションがある",
    "セール終了までのカウントダウンタイマーを組み込むパターンもある",
    "Shopifyでは多くのテーマが標準セクションとして搭載し、管理画面から文言を変更できる",
  ],
  merits: [
    "全ページの最上部という最強の視認位置で、1つのメッセージを確実に届けられる",
    "送料無料ラインの告知は客単価（カゴの中身の積み増し）に直接効きやすい",
    "実装・運用コストが低く、キャンペーンの開始・終了に即応できる",
    "メンテナンスや配送遅延など「全員に伝えるべき運営情報」の定位置になる",
    "ポップアップと違い閲覧を中断させないため、嫌われにくい告知手段といえる",
  ],
  demerits: [
    "常設するとバナー無視（バナーブラインドネス）の対象になり、誰も読まなくなる",
    "ヘッダーと合わせて画面上部の占有が増え、モバイルのファーストビューを圧迫する",
    "複数メッセージを自動で順送りにすると、読み終わる前に切り替わるストレスが生じる",
    "追従ヘッダーと重ねる場合、スクロール時の挙動（残す・消す）の設計が必要になる",
    "彩度の高い背景色はブランドの世界観と衝突することがある",
  ],
  bestPractices: [
    "メッセージは1本に絞り、20〜30文字程度で完結させる。詳細はリンク先に任せる",
    "常設せず、期間・条件のある情報（セール・締切・障害告知）に限定して価値を保つ",
    "閉じるボタンを付ける場合は、閉じた状態を記憶して同一セッションで再表示しない",
    "自動でメッセージを切り替える場合は5秒以上の間隔を取り、一時停止手段を用意する",
    "追従ヘッダーと併用する場合、アナウンスバーはスクロールで流し、ヘッダーだけを固定するのが定石",
    "緊急告知（障害・配送遅延）はセール色と明確に区別できる配色ルールを決めておく",
  ],
  useCases: [
    "Shopifyストア全般 — 「¥10,000以上で送料無料」をトップに常時表示",
    "ユニクロ — 期間限定価格やキャンペーンの告知帯をヘッダー上に表示",
    "Amazon — プライムデーなど大型セール時の告知バー",
    "SaaSプロダクト — 「新機能リリース」「メンテナンス予定」の告知をアプリ全体に表示",
    "ニュースメディア — 号外・速報をヘッダー上の帯で告知",
  ],
  accessibility: [
    "装飾でなく情報を持つ帯なので、テキストと背景のコントラスト比4.5:1以上を確保する",
    "閉じるボタンには「お知らせを閉じる」というaria-labelを付け、44×44px相当のタップ領域を確保する",
    "自動切り替え（カルーセル式）はprefers-reduced-motionを尊重し、停止ボタンを用意する",
    "緊急性の高い動的な告知にはrole=\"status\"などのライブリージョンを検討する（乱用はしない）",
    "リンクを含む場合は「詳細を見る」だけでなく、何の詳細かが分かるリンクテキストにする",
  ],
  figma: [
    "幅Fill×高さ36〜40pxのAuto Layout（横、中央揃え）で組み、テキストと閉じるボタンをSpace Betweenで配置する",
    "info / sale / warningなど用途別のVariantsを作り、背景色をセマンティックトークンで管理する",
    "文言が長い場合の折り返し（モバイル2行）と、その際の高さ変化を確認しておく",
    "閉じるボタンの有無をBoolean Propertyにして、両パターンを1つのComponentで扱う",
    "ヘッダーと重ねたページ全体のフレームを作り、ファーストビューの圧迫感を実寸で確認する",
  ],
  code: {
    html: `<div class="announcement-bar" role="region" aria-label="お知らせ">
  <p>
    サマーセール開催中！全品20%OFF
    <a href="/sale">詳細を見る</a>
  </p>
  <button type="button" class="close" aria-label="お知らせを閉じる">
    &times;
  </button>
</div>

<style>
  .announcement-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    padding: 10px 48px;
    background: #ea580c;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
  .announcement-bar p { margin: 0; }
  .announcement-bar a {
    color: #fff;
    font-weight: 700;
    text-underline-offset: 2px;
  }
  .announcement-bar .close {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
</style>

<script>
  const bar = document.querySelector(".announcement-bar");
  const KEY = "announcement-dismissed-2026-summer";

  if (localStorage.getItem(KEY)) bar.remove();

  bar?.querySelector(".close").addEventListener("click", () => {
    localStorage.setItem(KEY, "1");
    bar.remove();
  });
</script>`,
    tailwind: `<div
  role="region"
  aria-label="お知らせ"
  class="relative flex items-center justify-center gap-2 bg-orange-600
         px-12 py-2.5 text-center text-sm text-white"
>
  <p>
    サマーセール開催中！全品20%OFF
    <a
      href="/sale"
      class="ml-1 font-bold underline underline-offset-2
             hover:text-orange-100"
    >
      詳細を見る
    </a>
  </p>
  <button
    type="button"
    aria-label="お知らせを閉じる"
    class="absolute right-2 top-1/2 flex size-8 -translate-y-1/2
           items-center justify-center rounded-full
           hover:bg-white/15 focus-visible:outline-2
           focus-visible:outline-white"
  >
    <svg
      class="size-4" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" stroke-width="2" aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12" />
    </svg>
  </button>
</div>`,
    react: `"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar({
  id,
  href,
  children,
}: {
  /** キャンペーンごとに変えるID。閉じた状態の記憶キーになる */
  id: string;
  href?: string;
  children: React.ReactNode;
}) {
  const storageKey = \`announcement-dismissed-\${id}\`;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(storageKey));
  }, [storageKey]);

  const dismiss = () => {
    localStorage.setItem(storageKey, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="お知らせ"
      className="relative flex items-center justify-center gap-2
                 bg-orange-600 px-12 py-2.5 text-center text-sm text-white"
    >
      <p>
        {children}
        {href && (
          <a
            href={href}
            className="ml-1.5 font-bold underline underline-offset-2
                       hover:text-orange-100"
          >
            詳細を見る
          </a>
        )}
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="お知らせを閉じる"
        className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2
                   items-center justify-center rounded-full
                   hover:bg-white/15"
      >
        <X aria-hidden className="size-4" />
      </button>
    </div>
  );
}

// 使用例:
// <AnnouncementBar id="2026-summer-sale" href="/sale">
//   サマーセール開催中！全品20%OFF
// </AnnouncementBar>`,
    shadcn: `// shadcn/uiに専用のAnnouncement Barコンポーネントはありません。
// Buttonを流用しつつTailwindで実装します（alertはページ内通知向きで用途が異なります）。
// npx shadcn@latest add button
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteAnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem("announcement-dismissed"));
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="お知らせ"
      className="relative bg-primary px-12 py-2.5 text-center text-sm
                 text-primary-foreground"
    >
      <p>
        ¥10,000以上のご購入で送料無料
        <a href="/shipping" className="ml-1.5 font-bold underline">
          配送について
        </a>
      </p>
      <Button
        variant="ghost"
        size="icon"
        aria-label="お知らせを閉じる"
        onClick={() => {
          localStorage.setItem("announcement-dismissed", "1");
          setVisible(false);
        }}
        className="absolute right-1 top-1/2 size-8 -translate-y-1/2
                   hover:bg-white/15 hover:text-primary-foreground"
      >
        <X aria-hidden className="size-4" />
      </Button>
    </div>
  );
}`,
  },
  related: ["banner", "toast", "snackbar", "cta-section"],
  views: 3600,
  favorites: 130,
  collections: ["shopify-ui", "ec-ui"],
  gradient: "from-rose-500/15 via-orange-500/10 to-amber-500/15",
  difficulty: 1,
  updatedAt: "2026-04-17",
};
