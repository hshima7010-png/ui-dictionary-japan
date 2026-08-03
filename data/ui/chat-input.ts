import type { UIItem } from "@/types/ui";

export const chatInput: UIItem = {
  slug: "chat-input",
  name: "Chat Input",
  nameJa: "チャット入力欄",
  description:
    "AIチャットやメッセージアプリの画面下部に固定される、自動リサイズ対応の入力エリア。",
  category: "ai-ui",
  tags: ["AI", "チャット", "テキストエリア", "送信"],
  aliases: [
    "AIに質問を打つところ",
    "メッセージを入力する下の欄",
    "ChatGPTの入力ボックス",
    "プロンプトを書くところ",
    "送信ボタンが付いた入力欄",
    "チャットの打ち込みスペース",
  ],
  whatIs: [
    "チャット入力欄（Chat Input）は、AIチャットやメッセージングアプリの画面下部に固定して配置される、メッセージ作成と送信のための複合入力UIです。「チャット（Chat）への入力（Input）」という機能そのままの名前で、プロンプト入力欄、メッセージコンポーザー（Composer）とも呼ばれます。テキストエリアを核に、送信ボタン、ファイル添付、モデル切り替えなどの機能が周囲に集約されます。",
    "ChatGPTやClaudeの入力欄は、このUIの現代的なリファレンスです。入力量に応じて1行から複数行へ自動的に高さが伸び、Enterで送信・Shift+Enterで改行という操作系が事実上の標準になっています。AI応答の生成中には送信ボタンが停止ボタンに変化し、ファイル添付や音声入力、モデル選択のメニューまで、小さな領域に多くの機能が同居します。SlackやLINEのメッセージ入力欄も同じ系譜のUIです。",
    "AIプロダクトにおいてチャット入力欄は「プロダクトへの入り口そのもの」であり、ユーザーが最も長く触れるUIです。プレースホルダーの文言ひとつで入力される質問の質が変わり、高さの伸び方ひとつで長文プロンプトの書きやすさが変わるため、細部の作り込みが体験全体を左右します。",
  ],
  features: [
    "入力量に応じて高さが自動で伸縮するオートリサイズ対応テキストエリア",
    "Enterで送信、Shift+Enterで改行というキーボード操作の事実上の標準",
    "AI生成中は送信ボタンが「停止」ボタンに切り替わる",
    "ファイル添付・画像アップロード・音声入力などの補助機能を内包する",
    "空入力時は送信ボタンを無効化し、無効な送信を防ぐ",
    "画面下部に固定され、キーボード表示時（モバイル）にも追従する",
  ],
  merits: [
    "画面下部固定という慣習的な配置により、迷わず入力を開始できる",
    "オートリサイズにより、短い質問から長文プロンプトまで同じUIで扱える",
    "送信・添付・停止など関連機能が1か所に集約され、視線移動が最小で済む",
    "プレースホルダーで入力例を示すことで、ユーザーの「何を書けばいいか」を支援できる",
    "会話ログと入力欄の分離が明確で、メンタルモデルがシンプル",
  ],
  demerits: [
    "オートリサイズ・IME対応・モバイルキーボード追従など、見た目以上に実装が複雑",
    "日本語入力では変換確定のEnterが送信と衝突しやすく、対策必須（isComposing判定）",
    "Enter送信は長文入力ユーザーの誤送信を招きやすい",
    "機能を詰め込みすぎるとボタンが密集し、モバイルで誤タップが増える",
    "最大高さの設計を誤ると、入力欄が会話ログを覆い隠してしまう",
  ],
  bestPractices: [
    "日本語IMEの変換確定Enterで送信しないよう、KeyboardEvent.isComposing を必ず判定する",
    "テキストエリアの最大高さを設け（6〜10行程度）、超えたら内部スクロールにする",
    "空入力・空白のみの入力では送信ボタンを disabled にする",
    "AI生成中は送信ボタンを停止ボタンに切り替え、ユーザーに制御権を残す",
    "プレースホルダーには「メッセージを入力…」だけでなく具体的な質問例を示すと入力を促せる",
    "送信後もフォーカスを入力欄に残し、連続した対話を妨げない",
  ],
  useCases: [
    "ChatGPT — オートリサイズ＋添付＋音声入力を備えたプロンプト入力欄の代表例",
    "Claude — 長文貼り付けのファイル化など、長いプロンプトに配慮した入力欄",
    "Slack — 書式ツールバーやメンション補完を備えたメッセージコンポーザー",
    "LINE — モバイルでのキーボード追従とスタンプ・カメラボタンの統合",
    "Intercomなどのチャットサポートウィジェット — 画面隅の小型チャット入力",
  ],
  accessibility: [
    "テキストエリアには aria-label（「メッセージを入力」など）で名前を付ける",
    "送信・添付・停止の各アイコンボタンに aria-label を設定する",
    "送信ボタンの disabled 状態は視覚（色）だけでなく aria-disabled でも伝える",
    "AIの応答生成状況は aria-live リージョンでスクリーンリーダーに通知する",
    "キーボードだけで添付・送信まで完結できるフォーカス順序を保証する",
    "文字数制限がある場合は残り文字数を aria-live で適宜通知する",
  ],
  figma: [
    "テキスト行・アクションボタン行をAuto Layoutで組み、テキストのHugで高さが伸びる構造にする",
    "「1行／複数行／最大高さ＋スクロール」の3状態をVariantsで用意する",
    "「通常／入力中／生成中（停止ボタン）／無効」のVariantsを作り、送信ボタンの状態遷移を定義する",
    "モバイル幅ではキーボード表示を想定したフレーム（下部固定）でプロトタイプを作る",
    "プレースホルダーと入力済みテキストの両状態を用意し、コントラストを確認する",
  ],
  code: {
    html: `<form class="chat-input" aria-label="メッセージ入力">
  <button type="button" class="icon-btn" aria-label="ファイルを添付">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l8.57-8.57a4 4 0 1 1 5.66 5.66l-8.58 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  </button>

  <textarea
    rows="1"
    placeholder="メッセージを入力…（Shift+Enterで改行）"
    aria-label="メッセージを入力"
    oninput="this.style.height = 'auto';
             this.style.height = Math.min(this.scrollHeight, 200) + 'px';"
  ></textarea>

  <button type="submit" class="send" aria-label="送信" disabled>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="m5 12 14 0M13 6l6 6-6 6" />
    </svg>
  </button>
</form>

<style>
  .chat-input {
    display: flex; align-items: flex-end; gap: 8px;
    max-width: 720px; margin: 0 auto; padding: 10px 12px;
    border: 1px solid #e5e7eb; border-radius: 24px;
    background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,.06);
  }
  textarea {
    flex: 1; border: none; resize: none; outline: none;
    font: inherit; line-height: 1.6; max-height: 200px; padding: 6px 0;
  }
  .icon-btn {
    border: none; background: none; color: #6b7280;
    padding: 8px; border-radius: 9999px; cursor: pointer;
  }
  .icon-btn:hover { background: #f3f4f6; }
  .send {
    border: none; background: #7c3aed; color: #fff;
    padding: 10px; border-radius: 9999px; cursor: pointer;
  }
  .send:disabled { background: #e5e7eb; color: #9ca3af; cursor: not-allowed; }
</style>`,
    tailwind: `<form
  aria-label="メッセージ入力"
  class="mx-auto flex max-w-3xl items-end gap-2 rounded-3xl border
         border-gray-200 bg-white px-3 py-2.5 shadow-lg"
>
  <button
    type="button"
    aria-label="ファイルを添付"
    class="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
  >
    <svg class="size-5" aria-hidden="true" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l8.57-8.57a4 4 0 1 1 5.66 5.66l-8.58 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  </button>

  <textarea
    rows="1"
    placeholder="メッセージを入力…（Shift+Enterで改行）"
    aria-label="メッセージを入力"
    class="max-h-52 flex-1 resize-none bg-transparent py-1.5 leading-relaxed
           outline-none placeholder:text-gray-400"
  ></textarea>

  <button
    type="submit"
    aria-label="送信"
    disabled
    class="rounded-full bg-violet-600 p-2.5 text-white transition
           hover:bg-violet-700 disabled:cursor-not-allowed
           disabled:bg-gray-200 disabled:text-gray-400"
  >
    <svg class="size-4" aria-hidden="true" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2.5">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </button>
</form>`,
    react: `"use client";

import { useRef, useState } from "react";
import { ArrowUp, Paperclip, Square } from "lucide-react";

export function ChatInput({
  onSend,
  onStop,
  isGenerating = false,
  placeholder = "メッセージを入力…（Shift+Enterで改行）",
}: {
  onSend: (message: string) => void;
  onStop?: () => void;
  isGenerating?: boolean;
  placeholder?: string;
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const canSend = value.trim().length > 0 && !isGenerating;

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = \`\${Math.min(el.scrollHeight, 208)}px\`;
  };

  const submit = () => {
    if (!canSend) return;
    onSend(value.trim());
    setValue("");
    requestAnimationFrame(resize);
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 日本語IMEの変換確定Enterでは送信しない
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <form
      aria-label="メッセージ入力"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="mx-auto flex max-w-3xl items-end gap-2 rounded-3xl border
                 border-gray-200 bg-white px-3 py-2.5 shadow-lg"
    >
      <button
        type="button"
        aria-label="ファイルを添付"
        className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
      >
        <Paperclip aria-hidden className="size-5" />
      </button>

      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        placeholder={placeholder}
        aria-label="メッセージを入力"
        onChange={(e) => {
          setValue(e.target.value);
          resize();
        }}
        onKeyDown={handleKeyDown}
        className="max-h-52 flex-1 resize-none bg-transparent py-1.5
                   leading-relaxed outline-none placeholder:text-gray-400"
      />

      {isGenerating ? (
        <button
          type="button"
          aria-label="生成を停止"
          onClick={onStop}
          className="rounded-full bg-gray-900 p-2.5 text-white transition
                     hover:bg-gray-700"
        >
          <Square aria-hidden className="size-4 fill-current" />
        </button>
      ) : (
        <button
          type="submit"
          aria-label="送信"
          disabled={!canSend}
          className="rounded-full bg-violet-600 p-2.5 text-white transition
                     hover:bg-violet-700 disabled:cursor-not-allowed
                     disabled:bg-gray-200 disabled:text-gray-400"
        >
          <ArrowUp aria-hidden className="size-4" />
        </button>
      )}
    </form>
  );
}`,
    shadcn: `// shadcn/uiに専用コンポーネントは無いため、Textarea + Buttonで構築します
// npx shadcn@latest add textarea button
import { useState } from "react";
import { ArrowUp, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatInput({ onSend }: { onSend: (message: string) => void }) {
  const [value, setValue] = useState("");
  const canSend = value.trim().length > 0;

  const submit = () => {
    if (!canSend) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <form
      aria-label="メッセージ入力"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="mx-auto flex max-w-3xl items-end gap-2 rounded-3xl border
                 bg-background px-3 py-2.5 shadow-lg"
    >
      <Button type="button" variant="ghost" size="icon"
              aria-label="ファイルを添付" className="rounded-full">
        <Paperclip aria-hidden />
      </Button>
      <Textarea
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            submit();
          }
        }}
        placeholder="メッセージを入力…"
        aria-label="メッセージを入力"
        className="max-h-52 min-h-0 flex-1 resize-none border-none shadow-none
                   focus-visible:ring-0"
      />
      <Button type="submit" size="icon" aria-label="送信"
              disabled={!canSend} className="rounded-full">
        <ArrowUp aria-hidden />
      </Button>
    </form>
  );
}`,
  },
  related: ["textarea", "message-bubble", "typing-indicator", "file-upload"],
  views: 56800,
  favorites: 2560,
  collections: ["ai-ui", "saas-ui"],
  gradient: "from-violet-600/15 via-purple-500/10 to-indigo-500/15",
  difficulty: 2,
  updatedAt: "2026-07-21",
};
