import type { UIItem } from "@/types/ui";

export const typingIndicator: UIItem = {
  slug: "typing-indicator",
  name: "Typing Indicator",
  nameJa: "入力中インジケーター",
  description:
    "相手やAIが返信を作成中であることを、揺れる3つのドットなどで伝えるフィードバックUI。",
  category: "ai-ui",
  tags: ["AI", "チャット", "ローディング", "フィードバック"],
  aliases: [
    "点が3つぴょこぴょこ動くやつ",
    "相手が入力中って分かる表示",
    "AIが考え中のときに出るやつ",
    "返信を書いてるときのアニメーション",
    "チャットの待機中マーク",
  ],
  whatIs: [
    "入力中インジケーター（Typing Indicator）は、チャットで会話相手（人間またはAI）がメッセージを作成中であることを、上下に揺れる3つのドットのアニメーションなどで伝えるフィードバックUIです。「相手がタイピング（Typing）していることを示すインジケーター（Indicator）」がそのまま名前になっており、iMessageの3ドットの吹き出しによって世界的に定着したことから「タイピングバブル」とも呼ばれます。",
    "人間同士のチャット（LINE・Slack・iMessageなど）では「相手が返信を書いている」というソーシャルな合図として機能し、返信を待つべきかどうかの判断を助けます。AIチャットではChatGPTやClaudeが応答生成の開始前にこの種のインジケーターを表示し、「リクエストは受け付けられ、AIが処理中である」ことを伝えます。近年のAI UIでは、単なるドットではなく「考え中…」「検索しています…」のようにAIの内部状態をテキストで示すステータス表示へと進化しています。",
    "システムの状態を可視化するという意味で、これはニールセンのユーザビリティ10原則の第1原則「システム状態の可視性」を体現するUIです。表示がなければユーザーは「送信できていないのでは」と不安になり再送信やページ更新をしてしまうため、小さな見た目に反して体験への影響が大きいコンポーネントです。",
  ],
  features: [
    "3つのドットが順番に上下する、世界共通で認知されたアニメーション",
    "会話ログの相手側（左側）に、メッセージバブルと同じ見た目の器で表示される",
    "AIチャットでは「考え中…」「検索中…」などステータステキスト付きに拡張できる",
    "相手の入力開始・停止イベントに連動してリアルタイムに出没する",
    "CSSアニメーションだけで実装でき、JavaScriptはほぼ不要",
    "ストリーミング応答が始まるとインジケーターから本文表示へ滑らかに置き換わる",
  ],
  merits: [
    "「システムが動いている」ことが伝わり、待ち時間の不安と再送信・離脱を防げる",
    "返信が来る予兆が分かるため、ユーザーが会話を切り上げるタイミングを判断できる",
    "実装コストが極めて低い（CSSアニメーションのみで完結）",
    "iMessage以来の定着したパターンで、説明なしで意味が通じる",
    "AIの処理状態をテキスト併記で示せば、長い待ち時間でも体感を改善できる",
  ],
  demerits: [
    "表示だけで応答が長時間来ないと、かえって不満・不信を増幅させる",
    "人間同士のチャットでは「読んでいるのに返していない」ことが伝わるプレッシャーにもなる",
    "常に動き続けるアニメーションは、注意を引きすぎたり前庭障害のあるユーザーの負担になったりする",
    "スクリーンリーダーには何も伝わらないため、テキストによる代替が必須",
    "入力開始・停止イベントの頻繁な出没はチカチカとした不快なUIになりやすい",
  ],
  bestPractices: [
    "アニメーションは1〜1.4秒周期の穏やかな速度にし、prefers-reduced-motion では静的表示に切り替える",
    "AIチャットでは数秒以上かかる処理に「検索中…」などの状態テキストを併記する",
    "表示の出没にディレイ（数百ms）を入れ、瞬間的なチラつきを防ぐ",
    "一定時間（例: 30秒）応答がない場合はタイムアウトのエラーメッセージに切り替える",
    "メッセージバブルと同じ位置・同じ器で表示し、「返信の予告」であることを視覚的に一致させる",
    "role=\"status\" と sr-only テキストで、支援技術にも「作成中」を伝える",
  ],
  useCases: [
    "iMessage — 3ドットの吹き出しによるタイピングバブルの原型",
    "ChatGPT / Claude — 応答生成開始前のインジケーターと状態テキスト表示",
    "Slack — メッセージ入力欄下部の「〇〇さんが入力中…」テキスト表示",
    "LINE — トーク画面での「入力中」表示",
    "Intercomなどのサポートチャット — オペレーター返信作成中の表示",
  ],
  accessibility: [
    "コンテナに role=\"status\" と aria-live=\"polite\" を設定し、状態変化を通知する",
    "ドットのアニメーション自体は aria-hidden にし、「AIが回答を作成中です」の sr-only テキストを併記する",
    "prefers-reduced-motion: reduce ではアニメーションを止め、静的な表示に切り替える",
    "点滅は1秒間に3回以下に抑え、発作誘発リスクを避ける（WCAG 2.3.1）",
    "頻繁な出没のたびに読み上げが走らないよう、通知のタイミングを制御する",
    "色だけに依存せず、形状（ドット）とテキストで状態を伝える",
  ],
  figma: [
    "ドット3つをAuto Layout（gap 4〜6px）で並べ、メッセージバブルと同じ器のコンポーネントに入れる",
    "上下の揺れはSmart Animateでは表現しにくいため、ドットのY位置を変えた3フレームをループ再生（After Delay）で繋ぐ",
    "「ドットのみ／状態テキスト付き」のVariantsを用意し、AIチャット用の拡張に備える",
    "プロトタイプでは「インジケーター表示→メッセージ表示」の置き換わりまで再現すると実装者に意図が伝わる",
    "ダークモード用にドットとバブル背景のコントラストを両テーマで確認する",
  ],
  code: {
    html: `<div class="typing" role="status" aria-live="polite">
  <div class="bubble" aria-hidden="true">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
  <span class="sr-only">AIが回答を作成中です</span>
</div>

<style>
  .typing .bubble {
    display: inline-flex; gap: 5px; align-items: center;
    background: #f3f4f6; border-radius: 16px 16px 16px 4px;
    padding: 14px 16px;
  }
  .dot {
    width: 8px; height: 8px; border-radius: 50%; background: #9ca3af;
    animation: bounce 1.2s infinite ease-in-out;
  }
  .dot:nth-child(2) { animation-delay: 0.15s; }
  .dot:nth-child(3) { animation-delay: 0.3s; }
  @keyframes bounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
    30% { transform: translateY(-5px); opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    .dot { animation: none; opacity: 0.7; }
  }
  .sr-only {
    position: absolute; width: 1px; height: 1px; overflow: hidden;
    clip: rect(0 0 0 0); white-space: nowrap;
  }
</style>`,
    tailwind: `<!-- tailwind.config で animation-delay 用のユーティリティが無くても
     arbitrary value（[animation-delay:150ms]）で対応できます -->
<div role="status" aria-live="polite" class="inline-flex">
  <div
    aria-hidden="true"
    class="flex items-center gap-1.5 rounded-2xl rounded-bl-sm
           bg-gray-100 px-4 py-3.5
           motion-reduce:[&>span]:animate-none"
  >
    <span class="size-2 animate-bounce rounded-full bg-gray-400"></span>
    <span class="size-2 animate-bounce rounded-full bg-gray-400
                 [animation-delay:150ms]"></span>
    <span class="size-2 animate-bounce rounded-full bg-gray-400
                 [animation-delay:300ms]"></span>
  </div>
  <span class="sr-only">AIが回答を作成中です</span>
</div>`,
    react: `"use client";

export function TypingIndicator({
  label = "AIが回答を作成中です",
  statusText,
}: {
  /** スクリーンリーダー向けの説明 */
  label?: string;
  /** 「検索中…」などの視覚的な状態テキスト（省略可） */
  statusText?: string;
}) {
  return (
    <div role="status" aria-live="polite" className="flex items-end gap-2">
      <div
        aria-hidden="true"
        className="flex size-8 shrink-0 items-center justify-center
                   rounded-full bg-violet-100 text-xs font-bold text-violet-600"
      >
        AI
      </div>

      <div
        aria-hidden="true"
        className="flex items-center gap-2 rounded-2xl rounded-bl-sm
                   bg-gray-100 px-4 py-3.5"
      >
        <span className="flex items-center gap-1.5 motion-reduce:[&>span]:animate-none">
          <span className="size-2 animate-bounce rounded-full bg-gray-400" />
          <span className="size-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
          <span className="size-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
        </span>
        {statusText && (
          <span className="text-xs text-gray-500">{statusText}</span>
        )}
      </div>

      <span className="sr-only">{label}</span>
    </div>
  );
}

// 使用例: AIの応答待ちの間だけ表示する
// {isGenerating && <TypingIndicator statusText="考え中…" />}`,
    shadcn: `// shadcn/uiに専用コンポーネントは無いため、Tailwindで実装します
// （バブル部分にはAvatarと組み合わせるのが定番です）
// npx shadcn@latest add avatar
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TypingIndicator() {
  return (
    <div role="status" aria-live="polite" className="flex items-end gap-2">
      <Avatar className="size-8">
        <AvatarImage src="/ai-avatar.png" alt="" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm
                   bg-muted px-4 py-3.5 motion-reduce:[&>span]:animate-none"
      >
        <span className="size-2 animate-bounce rounded-full bg-muted-foreground/60" />
        <span className="size-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:150ms]" />
        <span className="size-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:300ms]" />
      </div>
      <span className="sr-only">AIが回答を作成中です</span>
    </div>
  );
}`,
  },
  related: ["message-bubble", "chat-input", "skeleton", "spinner"],
  views: 5900,
  favorites: 260,
  collections: ["ai-ui"],
  gradient: "from-fuchsia-500/15 via-violet-500/10 to-purple-500/15",
  difficulty: 1,
  updatedAt: "2026-04-11",
};
