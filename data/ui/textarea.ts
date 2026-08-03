import type { UIItem } from "@/types/ui";

export const textarea: UIItem = {
  slug: "textarea",
  name: "Textarea",
  nameJa: "テキストエリア",
  description:
    "複数行の長文テキストを入力するためのフォーム部品。お問い合わせや自由記述欄の定番。",
  category: "inputs",
  tags: ["入力", "フォーム", "複数行", "長文"],
  aliases: [
    "長い文章を書くところ",
    "お問い合わせ内容を書く大きい枠",
    "何行も書ける入力欄",
    "自由記述の欄",
    "コメントを書くスペース",
    "備考欄みたいな大きなボックス",
  ],
  whatIs: [
    "テキストエリア（Textarea）は、複数行にわたる長文テキストを入力するためのUIコンポーネントです。名前はHTMLの <textarea> 要素そのものに由来しており、「Text（テキスト）を書くためのArea（領域）」という意味です。1行入力のテキストフィールドに対して、こちらは高さを持つ「面」として設計されています。",
    "お問い合わせフォームの本文、レビュー投稿、プロフィールの自己紹介、コードやログの貼り付けなど、内容の長さが予測できない自由記述に使われます。改行を含む入力を受け付ける点がテキストフィールドとの最大の違いで、Enterキーは送信ではなく改行として機能します。",
    "近年はチャットUIの普及に伴い、入力量に応じて高さが自動で伸びる「オートグロー（auto-grow）」型のテキストエリアが主流になりつつあります。CSSの field-sizing: content プロパティによりJavaScriptなしでの自動リサイズも可能になってきています。",
  ],
  features: [
    "改行を含む複数行のテキストを入力できる",
    "rows属性やCSSで初期の高さを制御でき、resizeプロパティでユーザーのリサイズ可否を指定できる",
    "入力量に応じて高さが自動で伸びる「オートグロー」実装がチャットUIで一般的",
    "maxlengthと文字数カウンターを組み合わせて入力上限を可視化できる",
    "Enterは改行として動作するため、送信にはボタンまたはCmd/Ctrl+Enterを使う",
    "スペルチェックやIME変換など、OS・ブラウザの長文入力支援がそのまま使える",
  ],
  merits: [
    "長さの予測できない自由な意見・感想・詳細情報を受け取れる唯一の手段である",
    "十分な広さを確保することで「たくさん書いてよい」というアフォーダンスを伝えられる",
    "文字数カウンターとの併用で、投稿系サービスの入力体験を細かく設計できる",
    "HTML標準要素のため実装コストが低く、支援技術との互換性も高い",
    "オートグロー化すればモバイルでも画面を圧迫せずに長文入力に対応できる",
  ],
  demerits: [
    "自由記述はユーザーの負担が大きく、必須にすると離脱率が上がりやすい",
    "入力内容の構造化ができないため、集計・分析がしにくい",
    "初期の高さが小さすぎると書く気を削ぎ、大きすぎるとフォームが間延びする",
    "モバイルではキーボードとの位置関係で入力中の文章が見えにくくなることがある",
    "リサイズハンドルの挙動がブラウザごとに異なり、レイアウト崩れの原因になり得る",
  ],
  bestPractices: [
    "想定する回答の長さに合わせて初期の高さ（rows）を設定する。目安は3〜5行",
    "resize-y（縦方向のみリサイズ可）にして、横方向のレイアウト崩れを防ぐ",
    "文字数制限がある場合は、残り文字数をリアルタイム表示して送信エラーを未然に防ぐ",
    "自由記述はできる限り任意項目にし、必須にする場合は理由と記入例を示す",
    "チャットや投稿UIではオートグローを実装し、最大高さを超えたらスクロールに切り替える",
    "下書きの自動保存（localStorage等）を実装し、誤操作による長文消失を防ぐ",
  ],
  useCases: [
    "GitHubのIssue・PRコメント欄 — Markdown対応のオートグロー型テキストエリア",
    "Googleフォームの記述式回答 — 回答の長さに応じて伸びる自由記述欄",
    "ECサイトのレビュー投稿フォーム — 文字数カウンター付きの感想入力欄",
    "お問い合わせフォームの本文欄 — 最も一般的なテキストエリアの用途",
    "ChatGPTなどAIチャットの入力欄 — Cmd+Enter送信のオートグロー実装",
  ],
  accessibility: [
    "<label> を必ず関連付け、何を書くべきかをラベルと説明文で明確に伝える",
    "文字数制限は maxlength だけに頼らず、aria-describedby で上限をテキストでも伝える",
    "残り文字数の動的な変化は aria-live=\"polite\" 領域で通知し、逐一読み上げすぎないようにする",
    "エラー時は aria-invalid と aria-describedby でエラーメッセージを紐付ける",
    "キーボード操作を上書きしない。Enter送信にする場合は改行手段（Shift+Enter）を必ず残す",
  ],
  figma: [
    "Auto Layoutでラベル・入力領域・カウンターを縦に組み、入力領域はFill幅にする",
    "Variantsで default / focus / filled / error / disabled を用意し、テキストフィールドと状態名を揃える",
    "入力領域の高さはHugではなく固定値にし、rows 3〜5行相当（88〜120px）を目安にする",
    "右下のリサイズハンドル（グリップアイコン）を含めるかは実装方針に合わせて決める",
    "文字数カウンターは右下配置にし、上限接近時の警告色Variantも作っておく",
  ],
  code: {
    html: `<div class="field">
  <label for="message">お問い合わせ内容</label>
  <textarea
    id="message"
    name="message"
    rows="5"
    maxlength="1000"
    placeholder="できるだけ詳しくご記入ください"
    required
  ></textarea>
  <p class="counter"><span id="count">0</span> / 1000</p>
</div>

<script>
  const textarea = document.getElementById("message");
  const count = document.getElementById("count");
  textarea.addEventListener("input", () => {
    count.textContent = textarea.value.length;
  });
</script>

<style>
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 480px;
  }
  .field label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }
  .field textarea {
    padding: 12px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    font-size: 16px;
    line-height: 1.6;
    resize: vertical;
    min-height: 120px;
  }
  .field textarea:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  }
  .counter {
    font-size: 12px;
    color: #6b7280;
    text-align: right;
  }
</style>`,
    tailwind: `<div class="flex max-w-lg flex-col gap-1.5">
  <label for="message" class="text-sm font-semibold text-gray-700">
    お問い合わせ内容
  </label>
  <textarea
    id="message"
    name="message"
    rows="5"
    maxlength="1000"
    placeholder="できるだけ詳しくご記入ください"
    required
    class="min-h-30 resize-y rounded-xl border border-gray-300 px-3.5 py-3
           text-base leading-relaxed placeholder:text-gray-400
           focus:border-emerald-500 focus:outline-none
           focus:ring-4 focus:ring-emerald-500/20"
  ></textarea>
  <p class="text-right text-xs text-gray-500">0 / 1000</p>
</div>`,
    react: `"use client";

import { useId, useRef, useState } from "react";

type AutoGrowTextareaProps = {
  label: string;
  maxLength?: number;
  placeholder?: string;
};

export function AutoGrowTextarea({
  label,
  maxLength = 1000,
  placeholder,
}: AutoGrowTextareaProps) {
  const id = useId();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    // オートグロー：高さをリセットしてから内容に合わせる
    const el = ref.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = \`\${Math.min(el.scrollHeight, 320)}px\`;
    }
  };

  return (
    <div className="flex max-w-lg flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        rows={3}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-describedby={\`\${id}-counter\`}
        onChange={handleInput}
        className="resize-none overflow-hidden rounded-xl border
                   border-gray-300 px-3.5 py-3 text-base leading-relaxed
                   focus:border-emerald-500 focus:outline-none
                   focus:ring-4 focus:ring-emerald-500/20"
      />
      <p
        id={\`\${id}-counter\`}
        aria-live="polite"
        className={\`text-right text-xs \${
          value.length > maxLength * 0.9 ? "text-amber-600" : "text-gray-500"
        }\`}
      >
        {value.length} / {maxLength}
      </p>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add textarea label
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactTextarea() {
  return (
    <div className="grid w-full max-w-lg gap-1.5">
      <Label htmlFor="message">お問い合わせ内容</Label>
      <Textarea
        id="message"
        rows={5}
        maxLength={1000}
        placeholder="できるだけ詳しくご記入ください"
        required
      />
      <p className="text-right text-xs text-muted-foreground">
        1,000文字まで入力できます。
      </p>
    </div>
  );
}`,
  },
  related: ["text-field", "form-validation", "chat-input"],
  views: 12800,
  favorites: 510,
  collections: ["saas-ui"],
  gradient: "from-teal-500/15 via-emerald-500/10 to-cyan-500/15",
  difficulty: 1,
  updatedAt: "2026-04-25",
};
