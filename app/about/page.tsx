import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/utils";
import { BookOpenText, Code2, Search, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About — UI Dictionary Japanについて",
  description:
    "UI Dictionary Japanは「UIを探す・学ぶ・実装する」をひとつにした日本語のUI辞典です。運営方針・利用規約・プライバシーポリシーを掲載しています。",
  path: "/about",
});

const values = [
  {
    icon: Search,
    title: "探せる",
    body: "名前が分からなくても「下から出てくるメニュー」のような日本語で検索できます。",
  },
  {
    icon: BookOpenText,
    title: "学べる",
    body: "意味・由来からメリット・デメリット、ベストプラクティスまで体系的に解説します。",
  },
  {
    icon: Code2,
    title: "実装できる",
    body: "HTML / Tailwind / React / shadcn/ui のコードをコピーしてすぐ使えます。",
  },
];

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>

      <section className="mt-10">
        <p className="text-lg leading-[1.9]">
          <strong>{SITE.name}</strong>は、「このUIなんて名前？」という
          デザイナー・エンジニアの日常的な疑問を一瞬で解決するためのUI辞典です。
          名前を知ることは、チームで会話するための共通言語を持つこと。
          わたしたちは<strong>UIを探す・学ぶ・実装する</strong>という3つの体験を、
          日本語でひとつにつなげます。
        </p>
      </section>

      <section aria-labelledby="values" className="mt-14">
        <h2 id="values" className="flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="size-5 text-primary" aria-hidden />
          提供する価値
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <v.icon className="size-6 text-primary" aria-hidden />
              <h3 className="mt-4 font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="terms" id="terms" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-bold">利用規約</h2>
        <div className="mt-4 space-y-4 text-sm leading-[1.9] text-muted-foreground">
          <p>
            本サイトに掲載されている解説文・コードサンプルは、個人・商用を問わず自由にご利用いただけます。コードサンプルの利用による損害について、運営は責任を負いません。
          </p>
          <p>
            投稿機能をご利用の場合、投稿者は投稿内容が第三者の権利を侵害していないことを保証するものとします。スクリーンショットの掲載は引用の要件を満たす形で行い、権利者からの削除依頼には速やかに対応します。
          </p>
        </div>
      </section>

      <section aria-labelledby="privacy" id="privacy" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-bold">プライバシーポリシー</h2>
        <div className="mt-4 space-y-4 text-sm leading-[1.9] text-muted-foreground">
          <p>
            本サイトは、サービス改善のためにアクセス解析ツールを使用することがあります。お気に入り・閲覧履歴はお使いのブラウザ内にのみ保存され、ログインしない限りサーバーには送信されません。
          </p>
          <p>
            投稿時にご提供いただいたメールアドレスは、審査結果のご連絡にのみ使用し、第三者に提供することはありません。
          </p>
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-muted/60 p-8 text-center">
        <p className="font-semibold">UIの発見を、みんなの資産に。</p>
        <p className="mt-2 text-sm text-muted-foreground">
          掲載リクエスト・誤りの指摘は投稿フォームからお寄せください。
        </p>
        <Link
          href="/submit"
          className="mt-6 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          投稿フォームへ
        </Link>
      </section>
    </div>
  );
}
