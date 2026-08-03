import type { UIItem } from "@/types/ui";

export const infiniteScroll: UIItem = {
  slug: "infinite-scroll",
  name: "Infinite Scroll",
  nameJa: "無限スクロール",
  description:
    "ページ末尾に到達すると次のコンテンツを自動読み込みするUI。SNSフィードの定番。",
  category: "pagination",
  tags: ["スクロール", "自動読み込み", "フィード", "ページネーション"],
  aliases: [
    "スクロールすると勝手に増えるやつ",
    "下までいくと次が読み込まれるやつ",
    "終わりがないタイムライン",
    "ずっとスクロールできるページ",
    "自動でコンテンツが追加される一覧",
    "InstagramやXみたいなフィードの読み込み",
  ],
  whatIs: [
    "無限スクロール（Infinite Scroll）は、ユーザーがページの末尾付近までスクロールすると、次のコンテンツが自動的に読み込まれて一覧が延長されていくUIパターンです。「無限に続くかのようにスクロールできる」体験からこの名前が付きました。考案者としては、UXデザイナーのAza Raskin氏が2006年に提唱したことが広く知られています。",
    "「次のページへ」ボタンをクリックする従来のページネーションと異なり、ユーザーの操作を中断させずにコンテンツを供給し続けられるため、X（旧Twitter）やInstagram、Pinterestなど、回遊時間を最大化したいフィード型サービスのほぼ標準となっています。",
    "実装面では、かつてはscrollイベントの監視が主流でしたが、現在はIntersection Observer APIで「番兵（sentinel）要素」の画面内進入を検知する方式が定番です。パフォーマンスに優れ、スロットリングの考慮も不要になります。一方で「フッターに到達できない」「戻る操作で位置が失われる」などの副作用が大きいUIでもあり、採用判断には慎重さが求められます。",
  ],
  features: [
    "ページ末尾付近への到達を検知し、次のデータを自動フェッチして一覧に追記する",
    "Intersection Observer APIによる番兵要素の監視が現代の標準実装",
    "読み込み中はスピナーやスケルトンスクリーンをリスト末尾に表示する",
    "「すべて読み込みました」という終端表示（エンドメッセージ）を持つ",
    "仮想スクロール（virtualization）と組み合わせてDOMノード数を抑制できる",
    "URLへのページ状態反映（?page=3 など）やスクロール位置復元を組み合わせる実装もある",
  ],
  merits: [
    "クリック操作なしでコンテンツを閲覧し続けられ、回遊時間・接触コンテンツ数が伸びやすい",
    "モバイルの「親指でスクロールし続ける」操作モデルと極めて相性が良い",
    "ページ遷移が発生しないため、読み込みの心理的な待ち時間を感じさせにくい",
    "Pinterestのようなカード型・発見型のブラウジング体験に最適",
    "ページ番号の概念を意識させず、探索的な閲覧に集中させられる",
  ],
  demerits: [
    "フッターに永遠に到達できない「フッター問題」が発生する（フッター重要情報の配置に注意）",
    "詳細ページから戻った際にスクロール位置が失われると体験が大きく損なわれる",
    "「全体のどのあたりを見ているか」が分からず、特定アイテムへの再訪が困難",
    "DOMが肥大化しメモリ消費・描画性能が悪化しやすい（仮想化なしの場合）",
    "SEO面で2ページ目以降のコンテンツがクロールされにくく、対策が必要",
    "ダークパターン的に滞在時間を引き延ばす設計だと批判されることがある",
  ],
  bestPractices: [
    "目的達成型（検索結果・EC一覧）にはページネーションか「もっと見る」を、探索型フィードには無限スクロールを、と用途で使い分ける",
    "scrollイベントではなくIntersection Observerで実装し、末尾より少し手前（例: 800px）で先読みを開始する",
    "history.replaceStateやキャッシュを用いて、詳細ページから戻ったときのスクロール位置と読み込み済みデータを復元する",
    "読み込み中はスケルトンを表示し、失敗時は「再試行」ボタンを用意して静かに失敗させない",
    "フッターが必要なページでは無限スクロールを避けるか、フッターをサイドバー等へ移設する",
    "aria-live領域で「20件を追加読み込みしました」のように支援技術へ通知する",
  ],
  useCases: [
    "X（旧Twitter）のタイムライン — スクロールに応じてポストを無限に供給",
    "Instagramのフィード・発見タブ — 画像グリッドの自動読み込み",
    "Pinterestのホームフィード — Masonryレイアウト＋無限スクロールの代名詞的存在",
    "Google画像検索 — 一定回数までは自動読み込み、その後「もっと見る」に切り替えるハイブリッド型",
    "noteやMediumの記事一覧 — カード型フィードの追加読み込み",
  ],
  accessibility: [
    "追加読み込みの発生をaria-live=\"polite\"のステータス領域で通知する（例:「新しく20件読み込みました」）",
    "読み込み中インジケーターにはrole=\"status\"を付与し、視覚以外でも状態が伝わるようにする",
    "キーボードユーザーがフッターへ到達する手段（スキップリンクや「もっと見る」への切り替え）を確保する",
    "リストにはrole=\"feed\"とrole=\"article\"（各アイテム）の付与を検討し、支援技術のフィードナビゲーションを有効にする",
    "自動読み込みを停止できる設定や、代替のページネーションを提供するとWCAGの観点でも望ましい",
    "フォーカスが追加コンテンツの読み込みで失われたり飛んだりしないよう、DOM追記はフォーカス位置の後方に行う",
  ],
  figma: [
    "リストアイテムをComponent化し、Auto Layout（縦方向）で並べてフィード全体を構成する",
    "末尾にスケルトン状態のアイテム（グレーの矩形＋シマー）を2〜3個置き、読み込み中の見た目を再現する",
    "プロトタイプでは「After Delay」トリガーとSmart Animateを使い、スケルトンが実コンテンツへ差し替わる流れを表現できる",
    "Scroll Behaviorを「Vertical scrolling」に設定したフレームで、実際のスクロール感を検証する",
    "「読み込み失敗＋再試行ボタン」状態のVariantも用意し、エラー時の見た目を先に設計しておく",
  ],
  code: {
    html: `<!-- Intersection Observerによる無限スクロール -->
<ul id="feed" class="feed"></ul>
<div id="sentinel" class="sentinel" aria-hidden="true"></div>
<p id="status" role="status" aria-live="polite" class="status"></p>

<style>
  .feed { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
  .feed li {
    padding: 16px 20px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
  }
  .sentinel { height: 1px; }
  .status { color: #6b7280; text-align: center; padding: 16px; }
</style>

<script>
  const feed = document.getElementById("feed");
  const status = document.getElementById("status");
  let page = 0;
  let loading = false;
  let done = false;

  async function loadMore() {
    if (loading || done) return;
    loading = true;
    status.textContent = "読み込み中…";
    // 実際はAPIから取得する
    const items = await fetchItems(page++);
    for (const item of items) {
      const li = document.createElement("li");
      li.textContent = item.title;
      feed.appendChild(li);
    }
    status.textContent = items.length + "件を追加読み込みしました";
    if (page >= 5) {
      done = true;
      status.textContent = "すべて読み込みました";
      observer.disconnect();
    }
    loading = false;
  }

  const observer = new IntersectionObserver(
    (entries) => entries[0].isIntersecting && loadMore(),
    { rootMargin: "800px 0px" } // 末尾の800px手前で先読み
  );
  observer.observe(document.getElementById("sentinel"));

  function fetchItems(p) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(
        Array.from({ length: 10 }, (_, i) => ({ title: "アイテム " + (p * 10 + i + 1) }))
      ), 600)
    );
  }
</script>`,
    tailwind: `<!-- フィード本体 -->
<ul class="grid gap-3">
  <li class="rounded-xl border border-gray-200 p-5">アイテム 1</li>
  <li class="rounded-xl border border-gray-200 p-5">アイテム 2</li>
  <li class="rounded-xl border border-gray-200 p-5">アイテム 3</li>
</ul>

<!-- 読み込み中：リスト末尾のスケルトン -->
<div class="mt-3 grid gap-3" aria-hidden="true">
  <div class="h-16 animate-pulse rounded-xl bg-gray-100"></div>
  <div class="h-16 animate-pulse rounded-xl bg-gray-100"></div>
</div>

<!-- 番兵要素（Intersection Observerで監視する） -->
<div data-sentinel class="h-px"></div>

<!-- 支援技術向けステータス -->
<p role="status" aria-live="polite" class="py-4 text-center text-sm text-gray-500">
  読み込み中…
</p>`,
    react: `"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Post = { id: number; title: string };

async function fetchPosts(page: number): Promise<Post[]> {
  // 実際はAPIコールに置き換える
  await new Promise((r) => setTimeout(r, 600));
  if (page >= 5) return [];
  return Array.from({ length: 10 }, (_, i) => ({
    id: page * 10 + i,
    title: \`投稿 \${page * 10 + i + 1}\`,
  }));
}

export function InfiniteScrollFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(0);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const next = await fetchPosts(pageRef.current);
    pageRef.current += 1;
    if (next.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prev) => [...prev, ...next]);
    }
    setIsLoading(false);
  }, [isLoading, hasMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && loadMore(),
      { rootMargin: "800px 0px" } // 手前で先読み
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <section aria-label="フィード">
      <ul role="feed" aria-busy={isLoading} className="grid gap-3">
        {posts.map((post) => (
          <li key={post.id}>
            <article className="rounded-xl border border-gray-200 p-5">
              {post.title}
            </article>
          </li>
        ))}
      </ul>

      {isLoading && (
        <div className="mt-3 grid gap-3" aria-hidden>
          <div className="h-16 animate-pulse rounded-xl bg-gray-100" />
          <div className="h-16 animate-pulse rounded-xl bg-gray-100" />
        </div>
      )}

      <div ref={sentinelRef} className="h-px" aria-hidden />

      <p role="status" aria-live="polite" className="py-4 text-center text-sm text-gray-500">
        {isLoading
          ? "読み込み中…"
          : hasMore
            ? \`\${posts.length}件を表示中\`
            : "すべて読み込みました"}
      </p>
    </section>
  );
}`,
    shadcn: `// shadcn/uiに無限スクロール専用コンポーネントはないため、
// Skeletonと組み合わせた自前実装が定番です。
// npx shadcn@latest add skeleton card

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Post = { id: number; title: string };

export function InfiniteFeed({
  loadPage,
}: {
  loadPage: (page: number) => Promise<Post[]>;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(0);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const next = await loadPage(pageRef.current++);
    next.length === 0 ? setHasMore(false) : setPosts((p) => [...p, ...next]);
    setIsLoading(false);
  }, [isLoading, hasMore, loadPage]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && loadMore(),
      { rootMargin: "800px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loadMore]);

  return (
    <div role="feed" aria-busy={isLoading} className="grid gap-3">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-5">{post.title}</CardContent>
        </Card>
      ))}
      {isLoading && (
        <>
          <Skeleton className="h-16 rounded-xl" />
          <Skeleton className="h-16 rounded-xl" />
        </>
      )}
      <div ref={sentinelRef} className="h-px" aria-hidden />
    </div>
  );
}`,
  },
  related: ["pagination", "load-more", "skeleton", "pull-to-refresh"],
  views: 44200,
  favorites: 1770,
  collections: ["ec-ui", "mobile-ui", "saas-ui"],
  gradient: "from-cyan-500/15 via-sky-500/10 to-blue-500/15",
  difficulty: 2,
  updatedAt: "2026-07-12",
};
