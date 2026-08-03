import type { UIItem } from "@/types/ui";

export const footer: UIItem = {
  slug: "footer",
  name: "Footer",
  nameJa: "フッター",
  description:
    "ページ最下部に置く共通領域。サイトマップ・会社情報・法的リンクの定位置。",
  category: "footer",
  tags: ["ページ下部", "サイトマップ", "会社情報", "法的リンク", "レイアウト"],
  aliases: [
    "ページの一番下にあるやつ",
    "サイトの下のリンク集",
    "会社情報が載っている下の部分",
    "コピーライトが書いてあるところ",
    "ページ下部の黒い帯",
    "サイトの巻末",
  ],
  whatIs: [
    "フッター（Footer)は、すべてのページの最下部に共通して表示される領域です。「foot（足）」が語源で、書類の下部余白を指す印刷用語の「フッター」がそのままWebに持ち込まれました。ヘッダーと対をなす、Webページの最も基本的な構成要素のひとつです。",
    "掲載される内容は、サイトマップ的なリンク集、会社概要・利用規約・プライバシーポリシーなどの法的リンク、SNSアイコン、ニュースレター登録、コピーライト表記など多岐にわたります。ECサイトでは特定商取引法に基づく表記、コーポレートサイトでは会社情報と、業種によって「必ず置くべきもの」が変わるのも特徴です。",
    "ユーザーは「ページを最後まで見たが目的を果たせなかった」ときにフッターへ到達することが多く、フッターは実質的な「最後のセーフティネット」として機能します。ここで問い合わせ先やサイトマップを提供できるかどうかが、離脱かコンバージョンかの分かれ目になることもあります。",
  ],
  features: [
    "全ページ共通でページ最下部に配置され、サイト全体の「巻末」として機能する",
    "リンクをカテゴリごとの列（カラム）に整理するマルチカラム構成が定番",
    "利用規約・プライバシーポリシー・特商法表記など、法的に必要なリンクの定位置",
    "SNSアイコン・ニュースレター登録・言語切替などの補助機能を収容できる",
    "最下段にコピーライト表記（© 年 社名）を置くのが世界共通の慣習",
    "セマンティックには <footer> 要素（role=\"contentinfo\"に相当）でマークアップする",
  ],
  merits: [
    "ヘッダーに入り切らないリンクの受け皿になり、サイト全体の回遊性を高める",
    "「最後まで読んだが解決しなかった」ユーザーへの最後の導線（問い合わせ・FAQ）になる",
    "会社情報や法的リンクを常設することで、サイトの信頼性・透明性を担保できる",
    "全ページ共通のため、1回の実装・更新がサイト全体に波及しメンテナンス効率が良い",
    "内部リンクを整理して張れるため、クローラビリティ（SEO）にも寄与する",
  ],
  demerits: [
    "「とりあえずフッターに入れる」が続くとリンクが肥大化し、探しにくくなる",
    "ページ最下部までスクロールしないと見えないため、重要な導線の一次配置には不向き",
    "無限スクロールのページではフッターに永遠に到達できない問題が起きる",
    "モバイルでは縦に非常に長くなりやすく、折りたたみ（アコーディオン化）の検討が必要",
    "全ページ共通ゆえに、変更の影響範囲が大きく調整に関係者が増えがち",
  ],
  bestPractices: [
    "リンクは「製品」「会社情報」「サポート」「法的情報」など4〜5カテゴリに分類し、各列に見出しを付ける",
    "1列あたりのリンクは7個前後までに抑え、単なるリンクの物置にしない",
    "モバイルでは各カテゴリをアコーディオンで折りたたむか、1〜2カラムに再構成する",
    "ECサイトでは特定商取引法に基づく表記・返品ポリシーへのリンクを必ず含める",
    "無限スクロールと併用する場合はフッターを別ページに逃すか、サイドやヘッダーに法的リンクの代替導線を作る",
    "コピーライトの年は自動更新にし、古い年号のまま放置しない",
  ],
  useCases: [
    "Apple — 全製品カテゴリを網羅した巨大なサイトマップ型フッター",
    "Stripe — 多言語・多国対応の切替と製品リンクを整理したマルチカラムフッター",
    "楽天市場 — 特商法表記・ヘルプ・会社情報を集約したEC型フッター",
    "SaaSプロダクトLP — ニュースレター登録フォームとSNSリンクを備えたフッター",
    "メディアサイト — カテゴリ一覧と運営者情報・広告掲載案内を並べたフッター",
  ],
  accessibility: [
    "サイト全体のフッターは <footer> 要素でマークアップする（body直下でrole=\"contentinfo\"として認識される）",
    "リンク群はカテゴリごとに <nav aria-label=\"フッターナビゲーション\"> と見出しで構造化する",
    "SNSアイコンリンクには「X（旧Twitter）」などサービス名のアクセシブルネームを付ける",
    "暗い背景色を使う場合もテキストのコントラスト比4.5:1以上を維持する（薄いグレー文字に注意）",
    "モバイルでアコーディオン化する場合はaria-expandedで開閉状態を伝える",
  ],
  figma: [
    "全体を横Auto Layoutの列グループ＋最下段の横並び（コピーライト・SNS）の2段構成で組む",
    "リンク列を「見出し＋リンクのAuto Layout（縦、gap 12）」のComponentにし、列の増減に対応する",
    "デスクトップ（4〜5列）とモバイル（1列またはアコーディオン）の2バリアントを最初から用意する",
    "色はセマンティックトークン（surface-inverse等）で管理し、ダークフッター・ライトフッター両対応にする",
    "実データ量（最長の会社名・リンク名）を流し込み、折り返し時の崩れを確認する",
  ],
  code: {
    html: `<footer class="site-footer">
  <div class="footer-grid">
    <nav aria-label="製品">
      <h2>製品</h2>
      <ul>
        <li><a href="/features">機能一覧</a></li>
        <li><a href="/pricing">料金プラン</a></li>
        <li><a href="/changelog">更新履歴</a></li>
      </ul>
    </nav>
    <nav aria-label="会社情報">
      <h2>会社情報</h2>
      <ul>
        <li><a href="/about">会社概要</a></li>
        <li><a href="/careers">採用情報</a></li>
        <li><a href="/news">ニュース</a></li>
      </ul>
    </nav>
    <nav aria-label="サポート">
      <h2>サポート</h2>
      <ul>
        <li><a href="/help">ヘルプセンター</a></li>
        <li><a href="/contact">お問い合わせ</a></li>
        <li><a href="/status">稼働状況</a></li>
      </ul>
    </nav>
    <nav aria-label="法的情報">
      <h2>法的情報</h2>
      <ul>
        <li><a href="/terms">利用規約</a></li>
        <li><a href="/privacy">プライバシーポリシー</a></li>
        <li><a href="/tokushoho">特定商取引法に基づく表記</a></li>
      </ul>
    </nav>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 Example, Inc.</p>
  </div>
</footer>

<style>
  .site-footer {
    background: #111827;
    color: #d1d5db;
    padding: 48px 24px 24px;
  }
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 32px;
    max-width: 1120px;
    margin: 0 auto;
  }
  .site-footer h2 {
    font-size: 14px;
    color: #fff;
    margin: 0 0 12px;
  }
  .site-footer ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 8px;
  }
  .site-footer a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 14px;
  }
  .site-footer a:hover { color: #fff; }
  .footer-bottom {
    max-width: 1120px;
    margin: 32px auto 0;
    padding-top: 24px;
    border-top: 1px solid #374151;
    font-size: 13px;
    color: #9ca3af;
  }
</style>`,
    tailwind: `<footer class="bg-gray-900 text-gray-300">
  <div class="mx-auto max-w-6xl px-6 py-12">
    <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
      <nav aria-label="製品">
        <h2 class="mb-3 text-sm font-semibold text-white">製品</h2>
        <ul class="space-y-2 text-sm">
          <li><a href="/features" class="hover:text-white">機能一覧</a></li>
          <li><a href="/pricing" class="hover:text-white">料金プラン</a></li>
          <li><a href="/changelog" class="hover:text-white">更新履歴</a></li>
        </ul>
      </nav>
      <nav aria-label="会社情報">
        <h2 class="mb-3 text-sm font-semibold text-white">会社情報</h2>
        <ul class="space-y-2 text-sm">
          <li><a href="/about" class="hover:text-white">会社概要</a></li>
          <li><a href="/careers" class="hover:text-white">採用情報</a></li>
        </ul>
      </nav>
      <nav aria-label="サポート">
        <h2 class="mb-3 text-sm font-semibold text-white">サポート</h2>
        <ul class="space-y-2 text-sm">
          <li><a href="/help" class="hover:text-white">ヘルプセンター</a></li>
          <li><a href="/contact" class="hover:text-white">お問い合わせ</a></li>
        </ul>
      </nav>
      <nav aria-label="法的情報">
        <h2 class="mb-3 text-sm font-semibold text-white">法的情報</h2>
        <ul class="space-y-2 text-sm">
          <li><a href="/terms" class="hover:text-white">利用規約</a></li>
          <li><a href="/privacy" class="hover:text-white">プライバシーポリシー</a></li>
        </ul>
      </nav>
    </div>
    <div
      class="mt-10 flex flex-col items-center justify-between gap-4
             border-t border-gray-700 pt-6 text-sm text-gray-400
             sm:flex-row"
    >
      <p>&copy; 2026 Example, Inc.</p>
      <div class="flex gap-4">
        <a href="https://x.com/example" aria-label="X（旧Twitter）"
           class="hover:text-white">X</a>
        <a href="https://github.com/example" aria-label="GitHub"
           class="hover:text-white">GitHub</a>
      </div>
    </div>
  </div>
</footer>`,
    react: `"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export function Footer({ columns }: { columns: FooterColumn[] }) {
  // モバイルではアコーディオン、デスクトップでは常時展開
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-2 md:grid-cols-4 md:gap-8">
          {columns.map(({ heading, links }) => {
            const isOpen = open === heading;
            return (
              <nav key={heading} aria-label={heading}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : heading)}
                  className="flex w-full items-center justify-between py-3
                             text-sm font-semibold text-white md:pointer-events-none
                             md:py-0 md:pb-3"
                >
                  {heading}
                  <ChevronDown
                    aria-hidden
                    className={\`size-4 transition-transform md:hidden
                                \${isOpen ? "rotate-180" : ""}\`}
                  />
                </button>
                <ul
                  className={\`space-y-2 pb-4 text-sm md:block md:pb-0
                              \${isOpen ? "block" : "hidden"}\`}
                >
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} className="hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>
        <div
          className="mt-8 border-t border-gray-700 pt-6 text-sm
                     text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Example, Inc.</p>
        </div>
      </div>
    </footer>
  );
}`,
    shadcn: `// shadcn/uiに専用のFooterコンポーネントはありません。
// Separator等を土台に、Tailwindでレイアウトを組みます。
// npx shadcn@latest add separator button input
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="text-lg font-bold">Example</p>
            <p className="mt-2 text-sm text-muted-foreground">
              最新情報をニュースレターでお届けします。
            </p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                aria-label="メールアドレス"
              />
              <Button type="submit">登録</Button>
            </form>
          </div>
          {[
            { heading: "製品", links: ["機能一覧", "料金プラン"] },
            { heading: "会社情報", links: ["会社概要", "採用情報"] },
            { heading: "法的情報", links: ["利用規約", "プライバシー"] },
          ].map(({ heading, links }) => (
            <nav key={heading} aria-label={heading}>
              <h2 className="mb-3 text-sm font-semibold">{heading}</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {links.map((label) => (
                  <li key={label}>
                    <a href="#" className="hover:text-foreground">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Example, Inc.
        </p>
      </div>
    </footer>
  );
}`,
  },
  related: ["navbar", "newsletter-signup", "logo-cloud", "breadcrumb"],
  views: 57300,
  favorites: 2290,
  collections: ["saas-ui", "ec-ui", "stripe-ui"],
  gradient: "from-orange-500/15 via-red-500/10 to-amber-500/15",
  difficulty: 1,
  updatedAt: "2026-06-25",
};
