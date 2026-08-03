import type { UIItem } from "@/types/ui";

export const commandPalette: UIItem = {
  slug: "command-palette",
  name: "Command Palette",
  nameJa: "コマンドパレット",
  description:
    "Cmd+Kで呼び出す検索型メニュー。あらゆる機能へキーボードだけで一直線に到達できる。",
  category: "command-menu",
  tags: ["キーボード", "検索", "ショートカット", "パワーユーザー"],
  aliases: [
    "Cmd+Kで開く検索窓",
    "コマンドKのやつ",
    "キーボードで何でも呼び出せる検索",
    "打ち込むと機能が出てくる箱",
    "ショートカットで開く万能メニュー",
    "アプリ内のなんでも検索",
  ],
  whatIs: [
    "コマンドパレット（Command Palette）は、キーボードショートカット（多くは Cmd+K / Ctrl+K）で呼び出し、テキスト入力で機能・ページ・データを横断検索して即座に実行できるUIコンポーネントです。「パレット」は画家が絵の具を並べる板のことで、テキストエディタのSublime Textが「コマンドを並べた板」としてこの名前を広め、VS Codeが決定的に普及させました。",
    "従来はメニューバーを何階層もたどって到達していた機能に、名前をタイプするだけで一直線にアクセスできるのが最大の価値です。近年はLinear、Notion、Figma、GitHub、StripeなどのSaaSがこぞって採用し、「Cmd+Kを押せば何でもできる」という共通言語がプロダクト横断で成立しつつあります。",
    "検索・ナビゲーション・アクション実行・設定変更までを1つの入力欄に集約するため、機能が増え続けるプロダクトのUIをシンプルに保つ「逃がし弁」としても機能します。あいまい検索（fuzzy search）や最近使った項目の表示、AIアシスタントの入り口としての拡張など、進化が続いているパターンです。",
  ],
  features: [
    "Cmd+K / Ctrl+K などのショートカットで画面のどこからでも呼び出せる",
    "あいまい検索（fuzzy search）により正確な名前を覚えていなくても目的の項目に辿り着ける",
    "矢印キーで候補を移動し、Enterで実行するキーボード完結の操作体系",
    "候補を「ページ」「アクション」「最近の項目」などのグループに分けて表示できる",
    "各候補の右側にショートカットキーのヒントを併記し、学習を促せる",
    "選択した候補からさらに絞り込むネスト（多段ページ）構造にも対応できる",
  ],
  merits: [
    "深い階層のメニューを経由せず、あらゆる機能へ最短で到達できる",
    "パワーユーザーの操作速度を劇的に向上させ、プロダクトへの定着を促す",
    "機能が増えてもUIの見た目を複雑にせずに済む（画面上のボタンを増やさなくてよい）",
    "機能名で検索されるため、ユーザーが「その機能の存在」を発見するきっかけになる",
    "検索・ナビゲーション・コマンド実行を1つのUIに統合でき、実装の重複が減る",
  ],
  demerits: [
    "存在自体に気づかれにくく、ショートカットを知らない初心者には発見性が低い",
    "候補のインデックス化・あいまい検索・スコアリングなど、裏側の実装コストが高い",
    "登録コマンドの命名が乱れると検索でヒットせず、かえって使いにくくなる",
    "マウス中心のユーザーやモバイルユーザーには恩恵が小さい",
    "既存のブラウザショートカット（Ctrl+Kなど）を上書きすることへの賛否がある",
  ],
  bestPractices: [
    "検索バーやヘルプメニューに「⌘K」のヒントを常時表示し、機能の存在を知らせる",
    "空の状態では「最近使った項目」や「よく使うアクション」を表示し、白紙にしない",
    "コマンド名は動詞から始める（「テーマを変更」「Issueを作成」）ことで検索と読み上げの両方が明快になる",
    "完全一致だけでなく、同義語・略語・ローマ字でもヒットするようキーワードを持たせる",
    "候補が0件のときは「該当なし」で終わらせず、全体検索やヘルプへの導線を出す",
    "実行に確認が必要な破壊的操作は、パレットから直接実行させずに確認ダイアログを挟む",
  ],
  useCases: [
    "VS Code — Ctrl+Shift+Pのコマンドパレットであらゆるエディタ機能を実行",
    "Linear — Cmd+KでIssueの作成・ステータス変更・担当者変更までキーボードで完結",
    "Notion — Cmd+Pでページ検索、スラッシュコマンドと連携した操作体系",
    "GitHub — Cmd+Kでリポジトリ・Issue・PRを横断検索",
    "Stripe Dashboard — 顧客・支払い・設定ページへの高速ジャンプ",
    "Raycast / Alfred — OSレベルのランチャーとしてコマンドパレット体験を一般化",
  ],
  accessibility: [
    "role=\"dialog\" と aria-modal=\"true\" のダイアログとして実装し、開いたら入力欄へフォーカスを移す",
    "候補リストには role=\"listbox\"、各候補には role=\"option\" を付与し、aria-activedescendant で選択中の候補を伝える",
    "入力欄に aria-expanded と aria-controls を設定し、コンボボックスパターンに準拠する",
    "矢印キー・Enter・Escの操作を必ずサポートし、Tabでフォーカスが背景に抜けないようにする",
    "候補件数の変化を aria-live で通知すると、スクリーンリーダーでも絞り込みの結果が分かる",
    "ショートカットは Cmd+K だけでなく、メニューやボタンからも開けるようにして代替手段を残す",
  ],
  figma: [
    "中央配置のダイアログ（幅560〜640px）＋背景スクリムのオーバーレイとしてフレームを組む",
    "候補行はAuto Layoutでアイコン＋テキスト＋ショートカットヒントを横並びにし、コンポーネント化して使い回す",
    "選択中の行はVariant（state: default / active）で背景色を切り替え、キーボード移動をプロトタイプで再現する",
    "入力中の絞り込みは、検索語ごとのフレームを用意してAfter delayやKeyboardトリガーで繋ぐと擬似的に表現できる",
    "グループ見出し（「最近の項目」「アクション」）は小さめのグレーテキストで統一し、実装時のマークアップと揃える",
  ],
  code: {
    html: `<div id="overlay" class="overlay" hidden></div>
<div
  id="palette"
  class="palette"
  role="dialog"
  aria-modal="true"
  aria-label="コマンドパレット"
  hidden
>
  <input
    id="palette-input"
    type="text"
    placeholder="コマンドを検索..."
    role="combobox"
    aria-expanded="true"
    aria-controls="palette-list"
    autocomplete="off"
  />
  <ul id="palette-list" role="listbox" aria-label="コマンド候補">
    <li role="option" tabindex="-1">新規ドキュメントを作成</li>
    <li role="option" tabindex="-1">ダークモードに切り替え</li>
    <li role="option" tabindex="-1">設定を開く</li>
  </ul>
</div>

<style>
  .overlay {
    position: fixed; inset: 0;
    background: rgb(0 0 0 / 0.5);
  }
  .palette {
    position: fixed; left: 50%; top: 20%;
    transform: translateX(-50%);
    width: min(560px, 90vw);
    background: #fff; border-radius: 12px;
    box-shadow: 0 20px 60px rgb(0 0 0 / 0.3);
    overflow: hidden;
  }
  .palette input {
    width: 100%; padding: 16px;
    border: 0; border-bottom: 1px solid #e5e7eb;
    font-size: 16px; outline: none;
  }
  .palette li {
    padding: 12px 16px; cursor: pointer; list-style: none;
  }
  .palette li:hover,
  .palette li[aria-selected="true"] {
    background: #f3f4f6;
  }
</style>

<script>
  const palette = document.getElementById("palette");
  const overlay = document.getElementById("overlay");
  const input = document.getElementById("palette-input");

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      palette.hidden = overlay.hidden = false;
      input.focus();
    }
    if (e.key === "Escape") {
      palette.hidden = overlay.hidden = true;
    }
  });

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll("#palette-list li").forEach((li) => {
      li.hidden = !li.textContent.toLowerCase().includes(q);
    });
  });
</script>`,
    tailwind: `<!-- 背景スクリム -->
<div class="fixed inset-0 z-40 bg-black/50" aria-hidden="true"></div>

<!-- コマンドパレット本体 -->
<div
  role="dialog"
  aria-modal="true"
  aria-label="コマンドパレット"
  class="fixed left-1/2 top-[20%] z-50 w-[min(560px,90vw)]
         -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-2xl
         ring-1 ring-black/5"
>
  <div class="flex items-center gap-2 border-b border-gray-200 px-4">
    <svg class="size-4 text-gray-400" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="7" />
      <path stroke-linecap="round" d="m20 20-3.5-3.5" />
    </svg>
    <input
      type="text"
      placeholder="コマンドを検索..."
      class="w-full py-4 text-sm outline-none placeholder:text-gray-400"
    />
    <kbd class="rounded border border-gray-300 px-1.5 py-0.5 text-xs
                text-gray-500">Esc</kbd>
  </div>

  <ul class="max-h-72 overflow-y-auto p-2 text-sm">
    <li class="px-3 py-1.5 text-xs font-medium text-gray-400">アクション</li>
    <li class="flex cursor-pointer items-center justify-between rounded-lg
               bg-gray-100 px-3 py-2.5">
      新規ドキュメントを作成
      <kbd class="text-xs text-gray-400">⌘N</kbd>
    </li>
    <li class="flex cursor-pointer items-center justify-between rounded-lg
               px-3 py-2.5 hover:bg-gray-100">
      ダークモードに切り替え
      <kbd class="text-xs text-gray-400">⌘⇧D</kbd>
    </li>
    <li class="cursor-pointer rounded-lg px-3 py-2.5 hover:bg-gray-100">
      設定を開く
    </li>
  </ul>
</div>`,
    react: `"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

type Command = { id: string; label: string; shortcut?: string; run: () => void };

export function CommandPalette({ commands }: { commands: Command[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const filtered = useMemo(
    () =>
      commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase())
      ),
    [commands, query]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="コマンドパレット"
        className="fixed left-1/2 top-[20%] z-50 w-[min(560px,90vw)]
                   -translate-x-1/2 overflow-hidden rounded-xl bg-white
                   shadow-2xl ring-1 ring-black/5"
      >
        <input
          ref={inputRef}
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={
            filtered[activeIndex] ? \`\${listId}-\${filtered[activeIndex].id}\` : undefined
          }
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActiveIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && filtered[activeIndex]) {
              filtered[activeIndex].run();
              setOpen(false);
            }
          }}
          placeholder="コマンドを検索..."
          className="w-full border-b border-gray-200 px-4 py-4 text-sm
                     outline-none"
        />
        <ul id={listId} role="listbox" className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-gray-400">
              該当するコマンドがありません
            </li>
          )}
          {filtered.map((cmd, i) => (
            <li
              key={cmd.id}
              id={\`\${listId}-\${cmd.id}\`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => {
                cmd.run();
                setOpen(false);
              }}
              className={\`flex cursor-pointer items-center justify-between
                          rounded-lg px-3 py-2.5 text-sm
                          \${i === activeIndex ? "bg-gray-100" : ""}\`}
            >
              {cmd.label}
              {cmd.shortcut && (
                <kbd className="text-xs text-gray-400">{cmd.shortcut}</kbd>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}`,
    shadcn: `// npx shadcn@latest add command
"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

export function AppCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="コマンドを検索..." />
      <CommandList>
        <CommandEmpty>該当するコマンドがありません</CommandEmpty>
        <CommandGroup heading="アクション">
          <CommandItem onSelect={() => setOpen(false)}>
            新規ドキュメントを作成
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            ダークモードに切り替え
            <CommandShortcut>⌘⇧D</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="ナビゲーション">
          <CommandItem onSelect={() => setOpen(false)}>設定を開く</CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            ダッシュボードへ移動
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}`,
  },
  related: ["search-bar", "dropdown-menu", "modal", "navbar"],
  views: 17800,
  favorites: 760,
  collections: ["saas-ui", "ai-ui", "admin-ui"],
  gradient: "from-violet-500/15 via-purple-500/10 to-fuchsia-500/15",
  difficulty: 3,
  updatedAt: "2026-05-24",
};
