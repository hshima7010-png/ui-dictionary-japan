import type { UIItem } from "@/types/ui";

export const searchBar: UIItem = {
  slug: "search-bar",
  name: "Search Bar",
  nameJa: "検索バー",
  description:
    "キーワードでコンテンツを探すための入力UI。サジェストや履歴表示で探す体験を支える。",
  category: "search",
  tags: ["検索", "入力", "サジェスト", "ナビゲーション"],
  aliases: [
    "虫眼鏡アイコンの入力欄",
    "キーワードを打って探すやつ",
    "検索窓",
    "打つと候補が出てくる入力ボックス",
    "サイト内検索のフォーム",
    "上にある検索ボックス",
  ],
  whatIs: [
    "検索バー（Search Bar）は、キーワードを入力してサイトやアプリ内のコンテンツを探すためのUIコンポーネントです。「bar（棒）」という名前は、画面の上部に横長の棒状に配置されることに由来します。虫眼鏡アイコンは1980年代のGUIから使われ続けており、今や世界共通で「検索」を意味する記号として定着しています。",
    "現代の検索バーは単なる入力欄ではなく、「探す体験」全体を担うコンポーネントに進化しています。入力中に候補を提示するオートコンプリート（サジェスト）、過去の検索履歴、人気キーワード、入力ミスの補正など、Googleが確立した検索体験がサイト内検索にも期待されるようになりました。",
    "コンテンツ量の多いサービスでは、検索はナビゲーションと並ぶ2大導線です。ECサイトでは検索利用者の購入率が非利用者より大幅に高いという調査が多く、検索バーの見つけやすさ・使いやすさが売上に直結します。近年は⌘Kで起動するコマンドパレット型の検索も、SaaSを中心に急速に普及しています。",
  ],
  features: [
    "テキスト入力とサブミットで検索を実行する基本構造を持つ",
    "入力中にリアルタイムで候補を表示するオートコンプリート機能を備えることが多い",
    "検索履歴・人気キーワードをフォーカス時に提示できる",
    "入力内容を1タップで消せるクリアボタン（×）を備える",
    "モバイルでは虫眼鏡アイコンをタップして展開するパターンもある",
    "⌘K / Ctrl+Kのショートカットでフォーカスできるものが増えている",
  ],
  merits: [
    "目的が明確なユーザーを最短でコンテンツに到達させられる",
    "サジェストにより入力の手間とタイプミスを減らし、検索成功率を高められる",
    "検索クエリのログはユーザーニーズを知る貴重なデータ資産になる",
    "ナビゲーションで探しにくいロングテールのコンテンツへの導線になる",
    "ECでは検索利用ユーザーの購入意欲が高く、コンバージョンに直結する",
  ],
  demerits: [
    "検索結果が「0件」の体験はユーザーの離脱に直結しやすい",
    "表記ゆれ・同義語・タイプミスへの対応など、良い検索の実装コストは高い",
    "サジェストのAPI呼び出しはデバウンスしないとサーバー負荷と遅延を招く",
    "小さすぎる検索バーやアイコンだけの表示は、検索機能の存在に気づかれにくい",
  ],
  bestPractices: [
    "コンテンツ量の多いサイトでは検索バーを常時表示にし、アイコン格納は避ける",
    "プレースホルダーには検索対象の例を示す（例：「商品名・ブランド名で検索」）",
    "サジェストは入力後200〜300msのデバウンスを入れてAPI呼び出しを間引く",
    "0件時は「見つかりませんでした」で終わらせず、条件緩和や人気商品を提案する",
    "type=\"search\"とenterkeyhint=\"search\"でモバイルのキーボードを検索用に最適化する",
    "クリアボタンを付け、検索のやり直しを1タップで行えるようにする",
  ],
  useCases: [
    "Amazon・楽天のヘッダー検索 — サジェスト・カテゴリ絞り込み付きの常設検索バー",
    "YouTubeの検索バー — 入力候補と検索履歴を組み合わせた提案",
    "Notionの⌘K検索 — コマンドパレット型のページ横断検索",
    "GitHubのグローバル検索 — リポジトリ・コード・Issueを横断するスコープ切り替え",
    "食べログ・ホットペッパー — エリア＋キーワードの複合検索バー",
  ],
  accessibility: [
    "検索領域をrole=\"search\"（またはsearch要素）でランドマーク化する",
    "入力欄には視覚的ラベルまたはaria-labelで「何を検索するか」を明示する",
    "サジェストはWAI-ARIAのcombobox（aria-expanded / aria-activedescendant）パターンで実装する",
    "候補は矢印キーで移動、Enterで確定、Escで閉じられるようにする",
    "検索結果件数の変化はaria-liveで通知する",
    "クリアボタンにはaria-label=\"検索キーワードを消去\"を付ける",
  ],
  figma: [
    "入力欄はAuto Layout（虫眼鏡アイコン＋テキスト＋クリアボタン）で組む",
    "Variantsで「default / focus / filled / suggesting」の状態を定義する",
    "サジェストパネルは別Componentにし、入力欄の下にAbsolute positionで重ねる",
    "フォーカス状態はborderの色変更＋外側のリング（Drop Shadowで代用）で表現する",
    "プレースホルダーと入力済みテキストの色差（gray-400 vs gray-900）を明確にする",
  ],
  code: {
    html: `<search>
  <form action="/search" method="get" role="search">
    <label for="site-search" class="visually-hidden">サイト内検索</label>
    <div class="search-bar">
      <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="search"
        id="site-search"
        name="q"
        placeholder="商品名・ブランド名で検索"
        enterkeyhint="search"
        autocomplete="off"
      />
      <button type="submit">検索</button>
    </div>
  </form>
</search>

<style>
  .search-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 480px;
    padding: 4px 4px 4px 16px;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    background: #fff;
  }
  .search-bar:focus-within {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  }
  .search-icon {
    color: #9ca3af;
    flex-shrink: 0;
  }
  .search-bar input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 15px;
    background: transparent;
  }
  .search-bar button {
    padding: 8px 20px;
    border: none;
    border-radius: 999px;
    background: #4f46e5;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
</style>`,
    tailwind: `<form action="/search" method="get" role="search" class="max-w-lg">
  <label for="site-search" class="sr-only">サイト内検索</label>
  <div
    class="flex items-center gap-2 rounded-full border border-gray-300
           bg-white py-1 pl-4 pr-1
           focus-within:border-indigo-500
           focus-within:ring-2 focus-within:ring-indigo-500/20"
  >
    <svg class="size-[18px] shrink-0 text-gray-400" fill="none"
         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
         aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <input
      type="search"
      id="site-search"
      name="q"
      placeholder="商品名・ブランド名で検索"
      enterkeyhint="search"
      autocomplete="off"
      class="w-full bg-transparent text-[15px] outline-none
             placeholder:text-gray-400
             [&::-webkit-search-cancel-button]:hidden"
    />
    <button
      type="submit"
      class="shrink-0 rounded-full bg-indigo-600 px-5 py-2 text-sm
             font-semibold text-white hover:bg-indigo-500"
    >
      検索
    </button>
  </div>
</form>`,
    react: `"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Search, X } from "lucide-react";

const SUGGESTIONS = [
  "ワイヤレスイヤホン",
  "ワイヤレス充電器",
  "ノートパソコン スタンド",
  "ノイズキャンセリング ヘッドホン",
  "キーボード メカニカル",
];

export function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const listboxId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [candidates, setCandidates] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // 200msデバウンスでサジェストを絞り込み（実際はAPI呼び出し）
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        setCandidates(SUGGESTIONS.filter((s) => s.includes(query.trim())));
      } else {
        setCandidates([]);
      }
      setActiveIndex(-1);
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  const submit = (value: string) => {
    setOpen(false);
    onSearch(value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open || candidates.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % candidates.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? candidates.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      setQuery(candidates[activeIndex]);
      submit(candidates[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <form
      role="search"
      className="relative max-w-lg"
      onSubmit={(e) => {
        e.preventDefault();
        submit(query);
      }}
    >
      <div
        className="flex items-center gap-2 rounded-full border border-gray-300
                   bg-white py-2.5 pl-4 pr-3
                   focus-within:border-indigo-500
                   focus-within:ring-2 focus-within:ring-indigo-500/20"
      >
        <Search aria-hidden className="size-[18px] shrink-0 text-gray-400" />
        <input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-label="サイト内検索"
          aria-expanded={open && candidates.length > 0}
          aria-controls={listboxId}
          aria-activedescendant={
            activeIndex >= 0 ? \`\${listboxId}-opt-\${activeIndex}\` : undefined
          }
          aria-autocomplete="list"
          enterKeyHint="search"
          autoComplete="off"
          placeholder="商品名・ブランド名で検索"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent text-[15px] outline-none
                     placeholder:text-gray-400
                     [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            aria-label="検索キーワードを消去"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100"
          >
            <X aria-hidden className="size-4" />
          </button>
        )}
      </div>

      {open && candidates.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="検索候補"
          className="absolute inset-x-0 top-full z-10 mt-2 overflow-hidden
                     rounded-2xl border border-gray-200 bg-white shadow-lg"
        >
          {candidates.map((candidate, i) => (
            <li
              key={candidate}
              id={\`\${listboxId}-opt-\${i}\`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={() => {
                setQuery(candidate);
                submit(candidate);
              }}
              className={\`flex cursor-pointer items-center gap-2 px-4 py-3
                          text-sm \${
                            i === activeIndex ? "bg-indigo-50" : "hover:bg-gray-50"
                          }\`}
            >
              <Search aria-hidden className="size-4 text-gray-400" />
              {candidate}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}`,
    shadcn: `// npx shadcn@latest add command dialog
// ⌘Kで開くコマンドパレット型の検索
"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function SearchCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-64 items-center justify-between rounded-lg border
                   px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
      >
        検索…
        <kbd className="rounded border bg-muted px-1.5 text-xs">⌘K</kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="ページ・商品・ヘルプを検索…" />
        <CommandList>
          <CommandEmpty>見つかりませんでした。</CommandEmpty>
          <CommandGroup heading="ページ">
            <CommandItem>ダッシュボード</CommandItem>
            <CommandItem>注文管理</CommandItem>
            <CommandItem>顧客一覧</CommandItem>
          </CommandGroup>
          <CommandGroup heading="ヘルプ">
            <CommandItem>料金プランについて</CommandItem>
            <CommandItem>解約方法</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}`,
  },
  related: ["command-palette", "navbar", "empty-state", "dropdown-menu", "data-table", "faq"],
  views: 52800,
  favorites: 2280,
  collections: ["ec-ui", "ai-ui", "saas-ui"],
  gradient: "from-fuchsia-500/15 via-pink-500/10 to-rose-500/15",
  difficulty: 2,
  updatedAt: "2026-07-15",
};
