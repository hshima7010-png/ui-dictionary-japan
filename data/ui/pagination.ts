import type { UIItem } from "@/types/ui";

export const pagination: UIItem = {
  slug: "pagination",
  name: "Pagination",
  nameJa: "ページネーション",
  description:
    "大量のコンテンツをページ単位に分割して移動するUI。検索結果や一覧画面の定番。",
  category: "pagination",
  tags: ["ナビゲーション", "一覧", "分割", "ページ送り"],
  aliases: [
    "検索結果の下にある数字のボタンの列",
    "次のページに進むやつ",
    "1 2 3って並んでるページ切り替え",
    "一覧の下のページ番号",
    "前へ・次へのボタン",
    "ページを分けて表示する仕組み",
  ],
  whatIs: [
    "ページネーション（Pagination）は、大量のコンテンツを一定件数ごとのページに分割し、ページ番号や「前へ／次へ」ボタンで移動できるようにするナビゲーションUIです。名前は英語のpage（ページ）に「〜化すること」を意味する接尾辞が付いたpaginate（ページ分けする）に由来し、もともとは書籍の「ページ付け・丁付け」を指す出版用語でした。",
    "検索結果、ECの商品一覧、管理画面のデータテーブルなど、1画面に収まらない件数のアイテムを扱うほぼすべての場面で使われます。ユーザーは全体のボリュームを把握しながら、任意のページへ直接ジャンプできます。",
    "近年は無限スクロールや「もっと見る」ボタンに置き換えられる場面も増えましたが、「特定の位置に戻れる」「フッターに到達できる」「URLでページを共有できる」といった特性から、目的検索型のサイトや業務システムでは依然として第一選択のパターンです。",
  ],
  features: [
    "ページ番号の一覧と「前へ／次へ」ボタンで構成される",
    "現在ページをハイライトし、aria-current=\"page\"で示す",
    "ページ数が多い場合は「1 … 4 5 6 … 20」のように省略記号でまとめる",
    "総件数や「1〜20件 / 384件中」のような表示範囲を併記するバリエーションがある",
    "オフセット方式とカーソル方式（無限リスト向き）の2つの実装方式がある",
    "URLのクエリパラメータ（?page=3）と同期させるとブックマークや共有が可能になる",
  ],
  merits: [
    "全体件数とその中での現在位置を把握でき、ユーザーに終わりの見通しを与えられる",
    "特定ページへの直接ジャンプやURL共有・ブックマークができる",
    "無限スクロールと違いフッターに確実に到達でき、サイト全体の導線を壊さない",
    "1回のデータ取得件数を固定できるため、サーバー負荷とレスポンスが安定する",
    "「さっき見た商品は3ページ目」のように位置の記憶を頼りに戻れる",
  ],
  demerits: [
    "ページ遷移のたびにクリックと読み込みが発生し、連続的な閲覧体験が途切れる",
    "モバイルでは数字ボタンが小さくなりやすく、タップ精度の問題が出る",
    "無限スクロールに比べ、ザッピング的にたくさん眺める用途では回遊が伸びにくい",
    "オフセット方式では、閲覧中にデータが追加されると項目の重複・欠落が起きることがある",
    "最終ページ付近のオフセットクエリはDB負荷が高くなりやすい（LIMIT/OFFSET問題）",
  ],
  bestPractices: [
    "現在ページを視覚的に明確にし、リンクとの区別（塗り・枠・太字）をはっきり付ける",
    "「前へ／次へ」は必ず用意し、先頭・末尾では非活性ではなく非表示かdisabledを明示する",
    "表示するページ番号は現在ページの前後1〜2個＋先頭・末尾に絞り、省略記号でまとめる",
    "各ボタンのタップ領域は40〜44pxを確保し、モバイルでは番号を減らして間隔を広げる",
    "ページ状態はURLに反映し、リロード・共有・ブラウザバックで同じページに戻れるようにする",
    "目的検索型の一覧はページネーション、発見型のフィードは無限スクロールと使い分ける",
  ],
  useCases: [
    "Google検索 — 検索結果のページ送り（モバイルは「もっと見る」に移行）",
    "Amazonの商品一覧 — カテゴリ・検索結果のページ切り替え",
    "楽天市場 — 大量の商品一覧を番号付きページネーションで分割",
    "GitHubのIssue一覧 — Older/Newerによるカーソルベースのページ送り",
    "管理画面のデータテーブル — 表示件数の切り替えと組み合わせたページ移動",
  ],
  accessibility: [
    "全体を <nav aria-label=\"ページネーション\"> で囲み、ランドマークとして識別できるようにする",
    "現在ページには aria-current=\"page\" を付与する",
    "「前へ」「次へ」がアイコンのみの場合は aria-label で目的を伝える",
    "無効化したボタンは disabled または aria-disabled を設定し、フォーカス順序を混乱させない",
    "ページ遷移後はコンテンツ先頭へフォーカスを移すか、aria-liveで結果の更新を通知する",
    "省略記号（…）は装飾として扱い、読み上げで意味を持たないよう aria-hidden を付ける",
  ],
  figma: [
    "ページ番号ボタンを1つのコンポーネントにし、default / current / hover のVariantを作る",
    "Auto Layout（横方向、gap: 4〜8）で番号・矢印・省略記号を並べ、個数の増減に対応させる",
    "現在ページはFillとテキスト色をトークン（primary系）で切り替え、コントラスト比4.5:1以上を確認する",
    "「1 … 5 6 7 … 20」など番号パターン違いのフレームを複数用意し、実装者に省略ルールを伝える",
    "モバイル幅のフレームで「前へ / 3 / 20 / 次へ」のような簡略Variantも作っておく",
  ],
  code: {
    html: `<nav aria-label="ページネーション">
  <ul class="pagination">
    <li><a href="?page=1" aria-label="前のページ">&laquo;</a></li>
    <li><a href="?page=1">1</a></li>
    <li><span class="ellipsis" aria-hidden="true">…</span></li>
    <li><a href="?page=4">4</a></li>
    <li><a href="?page=5" aria-current="page">5</a></li>
    <li><a href="?page=6">6</a></li>
    <li><span class="ellipsis" aria-hidden="true">…</span></li>
    <li><a href="?page=20">20</a></li>
    <li><a href="?page=6" aria-label="次のページ">&raquo;</a></li>
  </ul>
</nav>

<style>
  .pagination {
    display: flex;
    gap: 4px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .pagination a,
  .pagination .ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    border-radius: 10px;
    color: #374151;
    text-decoration: none;
    font-size: 14px;
  }
  .pagination a:hover {
    background: #f3f4f6;
  }
  .pagination a[aria-current="page"] {
    background: #111827;
    color: #fff;
    font-weight: 600;
  }
</style>`,
    tailwind: `<nav aria-label="ページネーション">
  <ul class="flex items-center gap-1">
    <li>
      <a href="?page=4" aria-label="前のページ"
         class="flex size-10 items-center justify-center rounded-lg
                text-gray-500 hover:bg-gray-100">
        <svg class="size-4" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6" />
        </svg>
      </a>
    </li>
    <li>
      <a href="?page=1"
         class="flex size-10 items-center justify-center rounded-lg
                text-sm text-gray-700 hover:bg-gray-100">1</a>
    </li>
    <li aria-hidden="true"
        class="flex size-10 items-center justify-center text-gray-400">…</li>
    <li>
      <a href="?page=5" aria-current="page"
         class="flex size-10 items-center justify-center rounded-lg
                bg-gray-900 text-sm font-semibold text-white">5</a>
    </li>
    <li>
      <a href="?page=6"
         class="flex size-10 items-center justify-center rounded-lg
                text-sm text-gray-700 hover:bg-gray-100">6</a>
    </li>
    <li aria-hidden="true"
        class="flex size-10 items-center justify-center text-gray-400">…</li>
    <li>
      <a href="?page=20"
         class="flex size-10 items-center justify-center rounded-lg
                text-sm text-gray-700 hover:bg-gray-100">20</a>
    </li>
    <li>
      <a href="?page=6" aria-label="次のページ"
         class="flex size-10 items-center justify-center rounded-lg
                text-gray-500 hover:bg-gray-100">
        <svg class="size-4" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6" />
        </svg>
      </a>
    </li>
  </ul>
</nav>`,
    react: `"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

/** 現在ページの前後と先頭・末尾を残し、間を null（省略記号）に置き換える */
function getPageList(page: number, total: number): (number | null)[] {
  const pages = new Set([1, total, page - 1, page, page + 1]);
  const list: (number | null)[] = [];
  let prev = 0;
  for (let i = 1; i <= total; i++) {
    if (!pages.has(i)) continue;
    if (i - prev > 1) list.push(null);
    list.push(i);
    prev = i;
  }
  return list;
}

export function Pagination({ page, totalPages, onChange }: Props) {
  const items = getPageList(page, totalPages);

  return (
    <nav aria-label="ページネーション">
      <ul className="flex items-center gap-1">
        <li>
          <button
            type="button"
            aria-label="前のページ"
            disabled={page === 1}
            onClick={() => onChange(page - 1)}
            className="flex size-10 items-center justify-center rounded-lg
                       text-gray-500 hover:bg-gray-100 disabled:opacity-40
                       disabled:hover:bg-transparent"
          >
            <ChevronLeft aria-hidden className="size-4" />
          </button>
        </li>
        {items.map((p, i) =>
          p === null ? (
            <li key={\`gap-\${i}\`} aria-hidden="true"
                className="flex size-10 items-center justify-center text-gray-400">
              …
            </li>
          ) : (
            <li key={p}>
              <button
                type="button"
                aria-current={p === page ? "page" : undefined}
                onClick={() => onChange(p)}
                className={\`flex size-10 items-center justify-center rounded-lg
                            text-sm \${
                              p === page
                                ? "bg-gray-900 font-semibold text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }\`}
              >
                {p}
              </button>
            </li>
          )
        )}
        <li>
          <button
            type="button"
            aria-label="次のページ"
            disabled={page === totalPages}
            onClick={() => onChange(page + 1)}
            className="flex size-10 items-center justify-center rounded-lg
                       text-gray-500 hover:bg-gray-100 disabled:opacity-40
                       disabled:hover:bg-transparent"
          >
            <ChevronRight aria-hidden className="size-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
}`,
    shadcn: `// npx shadcn@latest add pagination
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function ProductListPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="?page=4" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=5" isActive>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=6">6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="?page=6" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
  },
  related: ["data-table", "breadcrumb", "search-bar", "card", "tabs"],
  views: 26800,
  favorites: 1120,
  collections: ["ec-ui", "admin-ui"],
  gradient: "from-sky-500/15 via-blue-500/10 to-indigo-500/15",
  difficulty: 2,
  updatedAt: "2026-06-05",
};
