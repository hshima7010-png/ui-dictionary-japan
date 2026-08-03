import type { UIItem } from "@/types/ui";

export const messageBubble: UIItem = {
  slug: "message-bubble",
  name: "Message Bubble",
  nameJa: "メッセージバブル",
  description:
    "チャットの発言を吹き出しで表示するUI。左右の配置と色で発言者を区別する。",
  category: "ai-ui",
  tags: ["AI", "チャット", "吹き出し", "会話"],
  aliases: [
    "チャットの吹き出し",
    "LINEみたいな会話の表示",
    "自分の発言が右に出るやつ",
    "AIの返事が表示される枠",
    "会話が左右に分かれて出るUI",
  ],
  whatIs: [
    "メッセージバブル（Message Bubble）は、チャットにおける1つの発言を、角丸の吹き出し状のコンテナで表示するUIコンポーネントです。マンガの吹き出し（Speech Bubble）のように発言を泡（Bubble）状の形で包むことからこの名が付きました。「自分の発言は右側・アクセントカラー、相手の発言は左側・グレー系」という配置と配色のルールで、発言者をひと目で区別できるのが最大の特徴です。",
    "LINEやiMessageで世界的に定着したパターンですが、AIチャットの登場で設計は多様化しています。ChatGPTやClaudeでは、ユーザーの発言は従来どおりバブルで表示しつつ、AIの応答はバブルに包まず全幅で表示するハイブリッド型が主流です。AIの応答は長文になりやすく、コードブロック・表・箇条書きなどのリッチなMarkdownを含むため、幅の狭い吹き出しよりもドキュメント的な表示が適しているからです。",
    "バブルには本文のほか、送信時刻・既読状態・アバターなどのメタ情報が付随します。AI応答の場合はさらに、コピー・再生成・フィードバック（高評価／低評価）ボタンや、ストリーミング表示（文字が流れるように表示される演出）への対応が求められ、単純な見た目に反して考慮事項の多いコンポーネントです。",
  ],
  features: [
    "自分は右・相手は左という配置ルールで発言者を瞬時に区別できる",
    "自分の発言はアクセントカラー、相手はグレー系という配色の慣習がある",
    "送信時刻・既読・配信状態などのメタ情報を添えられる",
    "AIチャットではMarkdownレンダリング（コードブロック・表・リスト）に対応する",
    "AI応答にはコピー・再生成・フィードバックなどのアクションボタンが付く",
    "連続する同一発言者のバブルはグルーピングし、アバターや時刻を間引ける",
  ],
  merits: [
    "会話の流れと発言者の区別が視覚的に一瞬で把握できる",
    "LINEやiMessageで学習済みのパターンのため、説明不要で使える",
    "バブル単位でホバーアクション（コピー・返信・リアクション）を割り当てやすい",
    "最大幅の制御により、1行の文字数が抑えられ長文でも読みやすい",
    "アバターやネームプレートと組み合わせて、グループ会話にも拡張できる",
  ],
  demerits: [
    "コードブロックや表を含む長文AI応答では、バブルの幅制限が読みやすさを損なう",
    "左右交互のジグザグ視線移動は、長い会話の読み返しではむしろ疲れる",
    "背景色付きバブル内のテキストは、コントラスト不足になりやすい",
    "ストリーミング表示・Markdown・仮想スクロールを組み合わせると実装が複雑化する",
    "スクリーンリーダーには「左右の配置」が伝わらないため、別途発言者情報が必要",
  ],
  bestPractices: [
    "バブルの最大幅は容器の70〜80%に抑え、1行が長くなりすぎないようにする",
    "AIの長文応答はバブルに包まず全幅表示にする（ChatGPT/Claude型）ことを検討する",
    "自分側バブルの背景色と文字色はWCAGのコントラスト比4.5:1以上を確保する",
    "連続する同一発言者のメッセージはグルーピングし、アバター・時刻表示を間引く",
    "AI応答にはコピー・再生成ボタンをホバー（モバイルでは常時）表示する",
    "新着メッセージへの自動スクロールは、ユーザーが上方を読んでいる間は抑制する",
  ],
  useCases: [
    "LINE / iMessage — 左右配置＋配色による吹き出しチャットの原型",
    "ChatGPT — ユーザー発言はバブル、AI応答は全幅表示のハイブリッド型",
    "Claude — Markdownレンダリングとコピー・再生成アクションを備えたAI応答表示",
    "Slack — 左揃え＋アバター＋スレッドで構成されるビジネスチャット型の変種",
    "Intercom / Zendesk — サポートチャットでのオペレーター・ユーザーの区別表示",
  ],
  accessibility: [
    "会話ログ全体に role=\"log\" と aria-live=\"polite\" を設定し、新着を自動で読み上げる",
    "発言者の区別を左右の配置や色だけに頼らず、「あなた」「AI」などのテキストを併記または sr-only で提供する",
    "バブル背景と文字のコントラスト比4.5:1以上を確保する",
    "送信時刻は <time> 要素でマークアップし、datetime属性を付与する",
    "コピー・再生成などのアイコンボタンには aria-label を設定する",
    "ストリーミング中の逐次読み上げは冗長になるため、完了時にまとめて通知する工夫をする",
  ],
  figma: [
    "バブルをAuto Layout（Hug×Hug）で作り、max-widthをかけてテキスト量に応じて伸びる構造にする",
    "「自分／相手／AI」のVariantsを作り、配色・角丸・配置（左右）を切り替えられるようにする",
    "角丸は「発言者側の下角だけ小さくする」定番スタイル（例: 16/16/4/16）をCorner Radiusの個別指定で再現する",
    "時刻・既読・アバターの表示有無をBoolean Propertyで制御し、グルーピング表示を再現する",
    "長文・コードブロック入り・1文字だけ、の3パターンでレイアウト崩れを確認する",
  ],
  code: {
    html: `<div class="chat" role="log" aria-live="polite">
  <!-- 相手（AI）のメッセージ -->
  <div class="message received">
    <img class="avatar" src="/ai-avatar.png" alt="" width="32" height="32" />
    <div>
      <span class="sr-only">AIの発言:</span>
      <div class="bubble">
        こんにちは！何かお手伝いできることはありますか？
      </div>
      <time class="meta" datetime="2026-07-10T14:03">14:03</time>
    </div>
  </div>

  <!-- 自分のメッセージ -->
  <div class="message sent">
    <div>
      <span class="sr-only">あなたの発言:</span>
      <div class="bubble">
        Reactのパフォーマンス改善について教えてください。
      </div>
      <time class="meta" datetime="2026-07-10T14:04">14:04 ✓既読</time>
    </div>
  </div>
</div>

<style>
  .chat { display: flex; flex-direction: column; gap: 16px;
          max-width: 640px; margin: 0 auto; padding: 24px; }
  .message { display: flex; gap: 8px; }
  .message.sent { justify-content: flex-end; }
  .avatar { border-radius: 50%; align-self: flex-end; }
  .bubble {
    max-width: 480px; padding: 10px 16px; font-size: 14px; line-height: 1.7;
  }
  .received .bubble {
    background: #f3f4f6; color: #111827;
    border-radius: 16px 16px 16px 4px;
  }
  .sent .bubble {
    background: #7c3aed; color: #fff;
    border-radius: 16px 16px 4px 16px;
  }
  .meta { display: block; font-size: 11px; color: #9ca3af; margin-top: 4px; }
  .sent .meta { text-align: right; }
  .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden;
             clip: rect(0 0 0 0); white-space: nowrap; }
</style>`,
    tailwind: `<div role="log" aria-live="polite"
     class="mx-auto flex max-w-2xl flex-col gap-4 p-6">

  <!-- 相手（AI）のメッセージ -->
  <div class="flex items-end gap-2">
    <img src="/ai-avatar.png" alt="" class="size-8 rounded-full" />
    <div>
      <span class="sr-only">AIの発言:</span>
      <div class="max-w-[80%] min-w-0 rounded-2xl rounded-bl-sm bg-gray-100
                  px-4 py-2.5 text-sm leading-relaxed text-gray-900">
        こんにちは！何かお手伝いできることはありますか？
      </div>
      <time datetime="2026-07-10T14:03" class="mt-1 block text-[11px] text-gray-400">
        14:03
      </time>
    </div>
  </div>

  <!-- 自分のメッセージ -->
  <div class="flex justify-end">
    <div class="flex max-w-[80%] flex-col items-end">
      <span class="sr-only">あなたの発言:</span>
      <div class="rounded-2xl rounded-br-sm bg-violet-600 px-4 py-2.5
                  text-sm leading-relaxed text-white">
        Reactのパフォーマンス改善について教えてください。
      </div>
      <time datetime="2026-07-10T14:04" class="mt-1 text-[11px] text-gray-400">
        14:04 ・既読
      </time>
    </div>
  </div>
</div>`,
    react: `"use client";

import { Copy, RotateCcw } from "lucide-react";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string; // ISO文字列
};

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function MessageBubble({
  message,
  onCopy,
  onRegenerate,
}: {
  message: ChatMessage;
  onCopy?: (content: string) => void;
  onRegenerate?: (id: string) => void;
}) {
  const isUser = message.role === "user";

  return (
    <div className={\`group flex \${isUser ? "justify-end" : "items-end gap-2"}\`}>
      {!isUser && (
        <div
          aria-hidden="true"
          className="flex size-8 shrink-0 items-center justify-center
                     rounded-full bg-violet-100 text-xs font-bold text-violet-600"
        >
          AI
        </div>
      )}

      <div className={\`flex max-w-[80%] flex-col \${isUser ? "items-end" : "items-start"}\`}>
        <span className="sr-only">
          {isUser ? "あなたの発言:" : "AIの発言:"}
        </span>
        <div
          className={\`px-4 py-2.5 text-sm leading-relaxed \${
            isUser
              ? "rounded-2xl rounded-br-sm bg-violet-600 text-white"
              : "rounded-2xl rounded-bl-sm bg-gray-100 text-gray-900"
          }\`}
        >
          {message.content}
        </div>

        <div className="mt-1 flex items-center gap-2">
          <time dateTime={message.time} className="text-[11px] text-gray-400">
            {formatTime(message.time)}
          </time>
          {!isUser && (
            <span className="flex gap-1 opacity-0 transition-opacity
                             group-hover:opacity-100 group-focus-within:opacity-100">
              <button
                type="button"
                aria-label="メッセージをコピー"
                onClick={() => onCopy?.(message.content)}
                className="rounded p-1 text-gray-400 hover:bg-gray-100
                           hover:text-gray-600"
              >
                <Copy aria-hidden className="size-3.5" />
              </button>
              <button
                type="button"
                aria-label="回答を再生成"
                onClick={() => onRegenerate?.(message.id)}
                className="rounded p-1 text-gray-400 hover:bg-gray-100
                           hover:text-gray-600"
              >
                <RotateCcw aria-hidden className="size-3.5" />
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ChatLog({ messages }: { messages: ChatMessage[] }) {
  return (
    <div role="log" aria-live="polite" className="flex flex-col gap-4 p-6">
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
    </div>
  );
}`,
    shadcn: `// shadcn/uiに専用コンポーネントは無いため、Avatar + Tailwindで構築します
// npx shadcn@latest add avatar button tooltip
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export function MessageBubble({
  role,
  content,
  time,
}: {
  role: "user" | "assistant";
  content: string;
  time: string;
}) {
  const isUser = role === "user";

  return (
    <div className={\`group flex \${isUser ? "justify-end" : "items-end gap-2"}\`}>
      {!isUser && (
        <Avatar className="size-8">
          <AvatarImage src="/ai-avatar.png" alt="" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      <div className={\`flex max-w-[80%] flex-col \${isUser ? "items-end" : ""}\`}>
        <span className="sr-only">{isUser ? "あなたの発言:" : "AIの発言:"}</span>
        <div
          className={\`px-4 py-2.5 text-sm leading-relaxed \${
            isUser
              ? "rounded-2xl rounded-br-sm bg-primary text-primary-foreground"
              : "rounded-2xl rounded-bl-sm bg-muted"
          }\`}
        >
          {content}
        </div>
        <div className="mt-1 flex items-center gap-1">
          <time className="text-[11px] text-muted-foreground">{time}</time>
          {!isUser && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="メッセージをコピー"
              className="size-6 opacity-0 group-hover:opacity-100"
            >
              <Copy aria-hidden className="size-3.5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}`,
  },
  related: ["chat-input", "typing-indicator", "avatar", "toast"],
  views: 30900,
  favorites: 1300,
  collections: ["ai-ui", "mobile-ui"],
  gradient: "from-purple-600/15 via-violet-500/10 to-fuchsia-500/15",
  difficulty: 1,
  updatedAt: "2026-06-25",
};
