import type { UIItem } from "@/types/ui";

export const errorPage: UIItem = {
  slug: "error-page",
  name: "Error Page",
  nameJa: "エラーページ（404/500）",
  description:
    "ページが見つからない・サーバーエラー時に表示する専用ページ。復帰導線の設計が鍵。",
  category: "error",
  tags: ["404", "500", "エラー", "リカバリー"],
  aliases: [
    "ページが見つかりませんの画面",
    "404のページ",
    "リンク切れで出てくる画面",
    "サーバーエラーの画面",
    "お探しのページは存在しませんと出るやつ",
    "Not Foundページ",
  ],
  whatIs: [
    "エラーページ（Error Page）は、ユーザーのリクエストを正常に処理できなかったときに表示する専用ページです。名前はHTTPのエラーレスポンスに由来し、代表的なものに「404 Not Found（ページが見つからない）」と「500 Internal Server Error（サーバー内部エラー）」があります。数字はHTTPステータスコードそのもので、「404ページ」という呼び名としてそのままUI用語に定着しました。",
    "404はユーザー側の要因（URLの打ち間違い・リンク切れ・削除済みページ）、500はサービス側の要因（サーバー障害・バグ）で発生します。原因が異なるため、伝えるべきメッセージと導線も変える必要があります。404では検索やトップページへの誘導、500では「復旧作業中」であることと再試行・ステータスページへの案内が定石です。",
    "行き止まりになりがちな画面だからこそ、ブランドの個性を発揮できる場でもあります。GitHubのスター・ウォーズ風404やLEGOのミニフィグ404のように、遊び心のあるエラーページはSNSで話題になり、ブランド好感度の向上にも寄与します。",
  ],
  features: [
    "HTTPステータスコード（404 / 500など）に対応した専用レイアウトを持つ",
    "エラーの内容を平易な言葉で説明する見出しと補足文で構成される",
    "トップへ戻る・検索する・人気ページを見るなどの復帰導線を備える",
    "イラストやアニメーションでブランドの個性を表現しやすい",
    "Next.jsのnot-found.tsx / error.tsxなど、フレームワーク側に定義の仕組みがある",
    "500系ではステータスページや問い合わせへのリンクを併設することが多い",
  ],
  merits: [
    "行き止まりからの復帰導線を示し、ユーザーの離脱を防げる",
    "技術的なエラー表示（生のスタックトレース等）を隠し、安心感と安全性を保てる",
    "遊び心のあるデザインで、ネガティブな体験をブランド体験に転換できる",
    "404を正しいステータスコードで返すことで、検索エンジンに削除ページを正しく伝えられる",
    "検索窓や人気コンテンツを置けば、離脱寸前のユーザーを回遊に繋げられる",
  ],
  demerits: [
    "凝った演出に力を入れすぎると、肝心の復帰導線が埋もれてしまう",
    "システム障害（500）の最中はユーモアが逆効果になり、不信感を煽ることがある",
    "404をステータスコード200で返す「ソフト404」はSEO上の問題を引き起こす",
    "デザインだけ整えても、リンク切れ自体を放置していては根本解決にならない",
    "多言語サイトではエラーページの翻訳・出し分けが漏れやすい",
  ],
  bestPractices: [
    "何が起きたかを専門用語なしで説明する（「お探しのページが見つかりませんでした」）",
    "404にはトップへ戻るボタン＋検索窓＋人気ページへのリンクなど複数の復帰導線を置く",
    "500では原因がユーザーにないことを明記し、時間をおいた再試行とステータスページを案内する",
    "サイト共通のヘッダー・ナビゲーションを残し、どこへでも移動できる状態を保つ",
    "正しいHTTPステータスコード（404 / 500）を返し、ソフト404を避ける",
    "エラーページの表示回数を計測し、リンク切れの多いURLはリダイレクトで根本対処する",
  ],
  useCases: [
    "GitHubの404 — スター・ウォーズ風パララックスイラストで有名なエラーページ",
    "Amazonの404 — 社員の愛犬の写真を表示し、トップへの導線を添える",
    "Airbnbの404 — アイスクリームを落とす女の子のアニメーションと主要リンク集",
    "Slackの障害時ページ — status.slack.comへ誘導し復旧状況を可視化",
    "メディアサイトの404 — 検索窓と人気記事一覧で回遊に繋げる構成",
  ],
  accessibility: [
    "<title>と<h1>にエラー内容を明記し、ページ遷移直後に状況が伝わるようにする",
    "見出し→説明→アクションの順に論理的なDOM構造を保ち、スクリーンリーダーで迷わせない",
    "イラストは装飾なら alt=\"\"、意味を持つなら適切な代替テキストを付ける",
    "復帰導線のボタン・リンクはキーボードのみで到達・操作できるようにする",
    "自動リダイレクトを行う場合は猶予を十分に取り、その旨をテキストで予告する",
  ],
  figma: [
    "404と500を同一コンポーネントのVariantsとして作り、コード・見出し・導線を差し替えられるようにする",
    "ステータスコードの大型タイポグラフィ＋イラスト＋アクション群の3ブロック構成をAuto Layoutで組む",
    "モバイル幅（375px）でイラストとボタンが縦積みになるレスポンシブ挙動を確認する",
    "空状態（empty-state）と共通のイラストトーンを使い、エラー系画面の世界観を揃える",
    "ダークモード用のカラーバリエーションもVariantsで用意しておくと実装時に迷わない",
  ],
  code: {
    html: `<main class="error-page">
  <p class="error-code">404</p>
  <h1>お探しのページが見つかりませんでした</h1>
  <p class="error-desc">
    URLが変更されたか、ページが削除された可能性があります。
  </p>
  <div class="error-actions">
    <a href="/" class="btn-primary">トップページへ戻る</a>
    <a href="/search" class="btn-secondary">サイト内を検索する</a>
  </div>
</main>

<style>
  .error-page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
  }
  .error-code {
    font-size: 96px;
    font-weight: 800;
    color: #e5e7eb;
    line-height: 1;
  }
  .error-page h1 {
    margin-top: 16px;
    font-size: 24px;
    font-weight: 700;
  }
  .error-desc {
    margin-top: 8px;
    color: #6b7280;
  }
  .error-actions {
    display: flex;
    gap: 12px;
    margin-top: 32px;
  }
  .btn-primary {
    background: #111827;
    color: #fff;
    padding: 12px 24px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
  }
  .btn-secondary {
    color: #111827;
    padding: 12px 24px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    text-decoration: none;
    font-weight: 600;
  }
</style>`,
    tailwind: `<main
  class="flex min-h-dvh flex-col items-center justify-center
         px-6 text-center"
>
  <p class="text-8xl font-extrabold leading-none text-gray-200">404</p>
  <h1 class="mt-4 text-2xl font-bold text-gray-900">
    お探しのページが見つかりませんでした
  </h1>
  <p class="mt-2 text-gray-500">
    URLが変更されたか、ページが削除された可能性があります。
  </p>
  <div class="mt-8 flex flex-col gap-3 sm:flex-row">
    <a
      href="/"
      class="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white
             hover:bg-gray-700"
    >
      トップページへ戻る
    </a>
    <a
      href="/search"
      class="rounded-xl border border-gray-200 px-6 py-3 font-semibold
             text-gray-900 hover:bg-gray-50"
    >
      サイト内を検索する
    </a>
  </div>
</main>`,
    react: `"use client";

// Next.js App Router: app/error.tsx（500系の実行時エラー用）
// 404は app/not-found.tsx に同様のUIを配置します。
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラー監視サービスへの送信
    console.error(error);
  }, [error]);

  return (
    <main
      role="alert"
      className="flex min-h-dvh flex-col items-center justify-center
                 px-6 text-center"
    >
      <p className="text-8xl font-extrabold leading-none text-gray-200">
        500
      </p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">
        一時的な問題が発生しています
      </h1>
      <p className="mt-2 max-w-md text-gray-500">
        ご迷惑をおかけしています。お客様の操作に問題はありません。
        しばらく時間をおいて、もう一度お試しください。
      </p>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-gray-900 px-6 py-3 font-semibold
                     text-white hover:bg-gray-700"
        >
          再読み込みする
        </button>
        <a
          href="https://status.example.com"
          className="rounded-xl border border-gray-200 px-6 py-3
                     font-semibold text-gray-900 hover:bg-gray-50"
        >
          稼働状況を確認
        </a>
      </div>
    </main>
  );
}`,
    shadcn: `// npx shadcn@latest add button
// app/not-found.tsx（Next.js App Router）
import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      className="flex min-h-dvh flex-col items-center justify-center
                 px-6 text-center"
    >
      <SearchX
        className="size-16 text-muted-foreground/40"
        aria-hidden
      />
      <p className="mt-6 text-sm font-semibold text-muted-foreground">
        404 Not Found
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">
        お探しのページが見つかりませんでした
      </h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        URLが変更されたか、ページが削除された可能性があります。
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">トップページへ戻る</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/search">サイト内を検索する</Link>
        </Button>
      </div>
    </main>
  );
}`,
  },
  related: ["empty-state", "inline-error", "toast", "alert-dialog"],
  views: 31500,
  favorites: 1260,
  collections: ["saas-ui", "ec-ui"],
  gradient: "from-rose-500/15 via-red-500/10 to-orange-500/15",
  difficulty: 1,
  updatedAt: "2026-06-21",
};
