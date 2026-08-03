import type { UIItem } from "@/types/ui";

export const loadMore: UIItem = {
  slug: "load-more",
  name: "Load More",
  nameJa: "もっと見るボタン",
  description:
    "クリックで次のコンテンツを追加読み込みするボタン。無限スクロールとページネーションの中間解。",
  category: "pagination",
  tags: ["追加読み込み", "ボタン", "一覧", "ページネーション"],
  aliases: [
    "もっと見るって書いてあるボタン",
    "押すと続きが出てくるやつ",
    "一覧の下にある続きを読むボタン",
    "さらに表示ボタン",
    "残りを全部見るためのボタン",
    "クリックで記事が増えるボタン",
  ],
  whatIs: [
    "もっと見るボタン（Load More）は、一覧の末尾に置かれたボタンをクリック／タップすると、次のコンテンツがその場に追加読み込みされるUIパターンです。英語の「Load More（さらに読み込む）」をそのままボタンラベルにしたことが名前の由来で、日本語UIでは「もっと見る」「さらに表示」「続きを読む」などのラベルが使われます。",
    "自動で読み込みが走る無限スクロールと、ページを完全に切り替えるページネーションのちょうど中間に位置する方式です。「続きを見るかどうか」の主導権がユーザーにあるため、意図しない読み込みやフッター到達不能問題を避けつつ、ページ遷移なしの滑らかな閲覧体験を提供できます。",
    "ECの商品一覧やメディアの記事一覧など「ある程度目的を持って眺めるが、全件を一気に見せる必要はない」場面で特に有効です。Baymard Instituteの調査でも、EC商品一覧では「Load More＋遅延読み込み」がページネーションや無限スクロールより優れた方式として推奨されており、実務での採用例が年々増えています。",
  ],
  features: [
    "一覧末尾のボタンクリックで次のN件をその場に追記する",
    "読み込み中はボタンをローディング状態（スピナー＋disabled相当）に切り替える",
    "「表示中 24 / 120件」のような進捗表示を併設できる",
    "全件読み込み後はボタンを非表示にするか「すべて表示しました」に置き換える",
    "URLクエリ（?page=3 など）と同期させれば、リロードや共有にも耐えられる",
    "SEO用に <a href> ベースで実装し、JSで挙動を上書きするプログレッシブエンハンスメントが可能",
  ],
  merits: [
    "読み込みの主導権がユーザーにあり、意図しないコンテンツ増加が起きない",
    "無限スクロールと違いフッターへ確実に到達できる",
    "ページ遷移がないため、直前のアイテムと比較しながら続きを見られる",
    "実装が単純で、スクロール検知やスクロール位置復元の複雑さが少ない",
    "「あと何件あるか」を添えれば、ユーザーが閲覧コストを判断できる",
    "aタグベースにすればクローラーも次ページを辿れ、SEOと両立しやすい",
  ],
  demerits: [
    "クリックという操作コストが1回ごとに発生し、探索型フィードでは体験が途切れる",
    "読み込みを重ねるとDOMが肥大化し、ローエンド端末で性能が劣化する",
    "特定のアイテムに再訪したいとき、何回ボタンを押したかを再現しにくい（URL同期なしの場合）",
    "詳細ページから戻った際、読み込み済み状態が失われる実装だと不満につながる",
    "「もっと見る」のラベルだけでは何がどれだけ増えるのか分からないことがある",
  ],
  bestPractices: [
    "「もっと見る（残り96件）」のように、押した結果何が起きるかをラベルで予告する",
    "1回の読み込み件数は初期表示と同程度（12〜24件など）にし、レイアウトのまとまりを保つ",
    "読み込み中はボタン内にスピナーを表示し、aria-busyやaria-disabledで状態を伝える",
    "追加されたコンテンツの先頭へフォーカスを移動させ、キーボードユーザーが迷子にならないようにする",
    "history.replaceStateでURLに状態を反映し、リロード・戻る操作・リンク共有に耐えられるようにする",
    "全件表示後はボタンを消すだけでなく「以上、全120件です」と終端を明示する",
  ],
  useCases: [
    "ユニクロや無印良品のECサイト商品一覧 — 「もっと見る」による追加読み込み",
    "YouTubeのコメント欄 — 「返信をさらに表示」で段階的に読み込み",
    "Google画像検索 — 自動読み込みが一定回数続いた後に「もっと見る」ボタンへ切り替え",
    "noteのマガジン記事一覧 — 「もっとみる」で記事カードを追加表示",
    "GitHubのNotificationsやActivity — 「Load more」で履歴を段階的に取得",
  ],
  accessibility: [
    "ボタンは必ず <button> 要素で実装し、リンク風の見た目でもrole違反を起こさない",
    "読み込み中はaria-busy=\"true\"を設定し、二重送信をロジック側でも防ぐ",
    "読み込み完了をaria-liveのステータス領域で通知する（例:「12件を追加しました」）",
    "追加読み込み後、新規コンテンツの先頭要素にtabindex=\"-1\"を付けてフォーカスを移すと操作の連続性が保たれる",
    "色だけでなくテキストでもローディング状態を伝える（「読み込み中…」）",
    "残り件数の表示は視覚だけでなくaria-labelにも含め、スクリーンリーダーに文脈を伝える",
  ],
  figma: [
    "ボタンをComponent化し、Default / Hover / Loading / Hiddenの4状態をVariantsで管理する",
    "Loading状態にはスピナーを配置し、プロトタイプでSmart Animate＋After Delayを使えば読み込みの流れを再現できる",
    "一覧グリッドはAuto Layout＋Wrapで組み、アイテム追加時の高さ変化を確認しておく",
    "「表示中 24 / 120件」の進捗テキストをボタン上部に置いたパターンも用意し、A/B比較できるようにする",
    "全件表示後の終端メッセージ（「以上、全120件です」）のフレームも作成しておくと実装時に迷わない",
  ],
  code: {
    html: `<ul id="list" class="list">
  <li>商品 1</li>
  <li>商品 2</li>
  <li>商品 3</li>
</ul>

<p id="progress" class="progress">表示中 3 / 30件</p>

<button id="load-more" type="button" class="load-more">
  もっと見る（残り27件）
</button>
<p id="status" role="status" aria-live="polite" class="sr-only"></p>

<style>
  .list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
  .list li { padding: 16px 20px; border: 1px solid #e5e7eb; border-radius: 12px; }
  .progress { text-align: center; color: #6b7280; font-size: 14px; }
  .load-more {
    display: block;
    margin: 8px auto 0;
    padding: 12px 32px;
    border: 1px solid #d1d5db;
    border-radius: 9999px;
    background: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  .load-more:hover { background: #f9fafb; }
  .load-more[aria-busy="true"] { opacity: 0.6; cursor: wait; }
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    clip-path: inset(50%); overflow: hidden;
  }
</style>

<script>
  const list = document.getElementById("list");
  const btn = document.getElementById("load-more");
  const progress = document.getElementById("progress");
  const status = document.getElementById("status");
  const TOTAL = 30;

  btn.addEventListener("click", async () => {
    if (btn.getAttribute("aria-busy") === "true") return;
    btn.setAttribute("aria-busy", "true");
    btn.textContent = "読み込み中…";

    await new Promise((r) => setTimeout(r, 600)); // 実際はAPI呼び出し
    const current = list.children.length;
    const count = Math.min(6, TOTAL - current);
    for (let i = 0; i < count; i++) {
      const li = document.createElement("li");
      li.textContent = "商品 " + (current + i + 1);
      list.appendChild(li);
    }

    const shown = list.children.length;
    progress.textContent = "表示中 " + shown + " / " + TOTAL + "件";
    status.textContent = count + "件を追加しました";
    btn.setAttribute("aria-busy", "false");

    if (shown >= TOTAL) {
      btn.remove();
      progress.textContent = "以上、全" + TOTAL + "件です";
    } else {
      btn.textContent = "もっと見る（残り" + (TOTAL - shown) + "件）";
    }
  });
</script>`,
    tailwind: `<ul class="grid gap-3">
  <li class="rounded-xl border border-gray-200 p-5">商品 1</li>
  <li class="rounded-xl border border-gray-200 p-5">商品 2</li>
  <li class="rounded-xl border border-gray-200 p-5">商品 3</li>
</ul>

<p class="mt-4 text-center text-sm text-gray-500">表示中 3 / 30件</p>

<!-- 通常状態 -->
<button
  type="button"
  class="mx-auto mt-2 block rounded-full border border-gray-300 bg-white
         px-8 py-3 font-semibold hover:bg-gray-50
         focus-visible:outline focus-visible:outline-2
         focus-visible:outline-offset-2 focus-visible:outline-sky-500"
>
  もっと見る（残り27件）
</button>

<!-- 読み込み中状態 -->
<button
  type="button"
  aria-busy="true"
  disabled
  class="mx-auto mt-2 flex items-center gap-2 rounded-full border
         border-gray-300 bg-white px-8 py-3 font-semibold opacity-60"
>
  <svg class="size-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25" />
    <path fill="currentColor" class="opacity-75" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
  </svg>
  読み込み中…
</button>`,
    react: `"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";

type Item = { id: number; name: string };
const TOTAL = 30;
const PAGE_SIZE = 6;

async function fetchItems(offset: number): Promise<Item[]> {
  // 実際はAPIコールに置き換える
  await new Promise((r) => setTimeout(r, 600));
  return Array.from(
    { length: Math.min(PAGE_SIZE, TOTAL - offset) },
    (_, i) => ({ id: offset + i, name: \`商品 \${offset + i + 1}\` })
  );
}

export function LoadMoreList() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const firstNewItemRef = useRef<HTMLLIElement>(null);

  const remaining = TOTAL - items.length;

  const handleLoadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const next = await fetchItems(items.length);
    setItems((prev) => [...prev, ...next]);
    setMessage(\`\${next.length}件を追加しました\`);
    setIsLoading(false);
    // 追加分の先頭へフォーカスを移し、キーボード操作の連続性を保つ
    requestAnimationFrame(() => firstNewItemRef.current?.focus());
  };

  const firstNewIndex = items.length - (items.length % PAGE_SIZE || PAGE_SIZE);

  return (
    <section aria-label="商品一覧">
      <ul className="grid gap-3">
        {items.map((item, i) => (
          <li
            key={item.id}
            ref={i === firstNewIndex ? firstNewItemRef : undefined}
            tabIndex={-1}
            className="rounded-xl border border-gray-200 p-5 outline-sky-500"
          >
            {item.name}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-center text-sm text-gray-500">
        {remaining > 0
          ? \`表示中 \${items.length} / \${TOTAL}件\`
          : \`以上、全\${TOTAL}件です\`}
      </p>

      {remaining > 0 && (
        <button
          type="button"
          onClick={handleLoadMore}
          aria-busy={isLoading}
          disabled={isLoading}
          className="mx-auto mt-2 flex items-center gap-2 rounded-full border
                     border-gray-300 bg-white px-8 py-3 font-semibold
                     hover:bg-gray-50 disabled:opacity-60"
        >
          {isLoading && <Loader2 aria-hidden className="size-4 animate-spin" />}
          {isLoading ? "読み込み中…" : \`もっと見る（残り\${remaining}件）\`}
        </button>
      )}

      <p role="status" aria-live="polite" className="sr-only">
        {message}
      </p>
    </section>
  );
}`,
    shadcn: `// shadcn/uiに「Load More」専用コンポーネントはないため、
// ButtonとSkeletonを組み合わせて実装するのが定番です。
// npx shadcn@latest add button skeleton

"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Item = { id: number; name: string };

export function LoadMoreProducts({
  loadPage,
  total,
}: {
  loadPage: (offset: number) => Promise<Item[]>;
  total: number;
}) {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const remaining = total - items.length;

  const handleClick = async () => {
    setIsLoading(true);
    const next = await loadPage(items.length);
    setItems((prev) => [...prev, ...next]);
    setIsLoading(false);
  };

  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl border p-5">
          {item.name}
        </div>
      ))}

      {isLoading && (
        <>
          <Skeleton className="h-16 rounded-xl" />
          <Skeleton className="h-16 rounded-xl" />
        </>
      )}

      {remaining > 0 && (
        <Button
          variant="outline"
          size="lg"
          onClick={handleClick}
          disabled={isLoading}
          aria-busy={isLoading}
          className="mx-auto rounded-full"
        >
          {isLoading && <Loader2 aria-hidden className="animate-spin" />}
          もっと見る（残り{remaining}件）
        </Button>
      )}
    </div>
  );
}`,
  },
  related: ["pagination", "infinite-scroll", "skeleton", "spinner"],
  views: 18600,
  favorites: 740,
  collections: ["ec-ui", "mobile-ui"],
  gradient: "from-sky-500/15 via-cyan-500/10 to-teal-500/15",
  difficulty: 1,
  updatedAt: "2026-06-25",
};
