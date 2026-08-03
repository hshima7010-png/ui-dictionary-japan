import type { UIItem } from "@/types/ui";

export const otpInput: UIItem = {
  slug: "otp-input",
  name: "OTP Input",
  nameJa: "認証コード入力",
  description:
    "SMSやメールで届く6桁などの確認コードを1桁ずつのマスに入力させる認証UI。",
  category: "authentication",
  tags: ["認証", "2段階認証", "セキュリティ", "ワンタイムパスワード"],
  aliases: [
    "SMSで届く6桁の数字を入れるやつ",
    "1桁ずつマスが分かれている入力欄",
    "確認コードを入れる四角いマス",
    "二段階認証の数字を打つ画面",
    "ワンタイムパスワード入力",
    "メールに届いたコードを入力する欄",
  ],
  whatIs: [
    "認証コード入力（OTP Input）は、SMS・メール・認証アプリで届く数桁の確認コードを、1桁ずつ区切られたマスに入力させるUIコンポーネントです。OTPは One-Time Password（ワンタイムパスワード）の略で、「一度きりしか使えない使い捨ての合言葉」を意味します。有効期限が数分程度と短く、使い回しができないため、固定パスワードより安全な本人確認手段として普及しました。",
    "2段階認証（2FA）やパスワードレス認証の主役として、ログイン・会員登録・決済確認など重要な操作の直前に登場します。1桁ずつのマスに分かれた見た目は「6桁入力する」という作業量を視覚化し、入力位置の自動送りとあわせて短いコードの転記を素早く正確にします。",
    "モバイルでの決定的なベストプラクティスが autocomplete=\"one-time-code\"（iOS）とWebOTP API（Android）への対応です。これによりSMSに届いたコードがキーボード上部に候補表示され、ユーザーはタップ1つで入力を完了できます。見た目は6個のマスでも、実体は1つの入力として扱う実装が自動入力との相性で優れています。",
  ],
  features: [
    "1桁入力するたびに次のマスへフォーカスが自動で移動する",
    "Backspaceで前のマスへ戻り、削除しながら遡れる",
    "コピーしたコードのペーストで全マスが一括入力される",
    "autocomplete=\"one-time-code\" でSMSのコードがキーボード候補に表示される",
    "全桁そろった時点で自動送信するオプションを組み込める",
    "残り有効時間の表示と「コードを再送」ボタンを伴うことが多い",
  ],
  merits: [
    "桁数が視覚化され、「何文字入力するのか」がひと目で分かる",
    "自動フォーカス送りにより、短いコードの入力が高速に完了する",
    "OS連携の自動入力に対応すれば、ユーザーはタップ1つで入力完了できる",
    "1桁ずつ表示されるため、入力ミスの位置を特定しやすい",
    "使い捨てコードのため、入力内容を覗き見されても被害が限定的",
  ],
  demerits: [
    "分割マス実装は自動入力・ペースト・IMEとの相性問題が起きやすい",
    "SMSが届かない・遅延するケースの救済（再送・別手段）が必須になる",
    "自動フォーカス制御を誤ると、修正時に思い通りのマスへ戻れずストレスになる",
    "スクリーンリーダーには「6つの入力欄」と認識され、混乱を招く実装になりがち",
    "認証のたびに発生する追加ステップであり、頻繁だと確実に離脱要因になる",
  ],
  bestPractices: [
    "autocomplete=\"one-time-code\" と inputmode=\"numeric\" を必ず指定し、OSの自動入力と数字キーボードを引き出す",
    "ペースト対応は必須。ハイフンや空白を含むコードも正規化して受け入れる",
    "全桁入力で自動送信する場合も、誤送信に備えてエラー時にコードをクリアして再入力しやすくする",
    "「コードを再送」は30〜60秒のカウントダウン後に有効化し、連打による重複送信を防ぐ",
    "コードの有効期限を画面に明示し、期限切れ時は明確なエラーと再送導線を出す",
    "SMS以外の受け取り手段（メール・認証アプリ・バックアップコード）への切り替え導線を用意する",
  ],
  useCases: [
    "Google / Appleの2段階認証 — ログイン時の6桁コード入力",
    "銀行アプリの振込確認 — 取引時のワンタイムパスワード",
    "Slack / Notionのマジックリンク併用ログイン — メールで届くコード入力",
    "メルカリの電話番号認証 — SMSで届く4〜6桁コードの確認",
    "Stripeの3Dセキュア決済 — カード発行会社からのコード確認",
  ],
  accessibility: [
    "視覚的に分割されていても、支援技術には「認証コード（6桁）」という1つの入力として伝わる設計にする",
    "グループに fieldset / legend または aria-label で「確認コード」という目的を明示する",
    "自動フォーカス移動はスクリーンリーダー利用者を混乱させるため、単一input＋装飾で分割見た目を作る実装が堅牢",
    "エラー（コード不一致・期限切れ）は aria-live=\"assertive\" で即座に通知する",
    "残り時間のカウントダウンは頻繁に読み上げられないよう aria-live の対象から外す",
    "キーボードのみで入力・修正・再送・送信のすべてが完結することを確認する",
  ],
  figma: [
    "1桁分のマス（空・入力済み・フォーカス・エラー）をVariant化し、Auto Layoutで6個並べる",
    "フォーカス中のマスはリング（外周2px）とカーソルの点滅を表現し、現在位置を明確にする",
    "3桁-3桁のようにハイフンで区切るレイアウトも用意すると読みやすさの比較検討ができる",
    "エラー状態は全マス赤枠＋下部エラーテキストのセットで定義する",
    "再送ボタンのカウントダウン中（無効）と有効の2状態を作り、遷移をプロトタイプで示す",
  ],
  code: {
    html: `<form class="otp-form">
  <fieldset>
    <legend>確認コード</legend>
    <p id="otp-hint">SMSに届いた6桁のコードを入力してください</p>
    <!-- 単一inputを推奨: OS自動入力との相性が最良 -->
    <input
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
      pattern="\\d{6}"
      maxlength="6"
      required
      aria-describedby="otp-hint"
      class="otp-input"
      placeholder="000000"
    />
  </fieldset>
  <button type="submit">認証する</button>
</form>

<style>
  .otp-form fieldset {
    border: none;
    padding: 0;
  }
  .otp-form legend {
    font-weight: 700;
    font-size: 18px;
  }
  #otp-hint {
    color: #6b7280;
    font-size: 13px;
    margin: 8px 0 16px;
  }
  .otp-input {
    width: 100%;
    padding: 14px;
    font-size: 24px;
    letter-spacing: 0.6em;
    text-align: center;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-variant-numeric: tabular-nums;
  }
  .otp-input:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
  .otp-form button {
    width: 100%;
    margin-top: 16px;
    padding: 14px;
    background: #4f46e5;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
  }
</style>`,
    tailwind: `<form class="mx-auto w-full max-w-xs text-center">
  <h2 class="text-lg font-bold">確認コード</h2>
  <p id="otp-hint" class="mt-1 text-sm text-gray-500">
    SMSに届いた6桁のコードを入力してください
  </p>

  <!-- 見た目は6マス、実体は1つの入力（装飾はJSで同期） -->
  <div class="mt-5 flex justify-center gap-2" aria-hidden="true">
    <div class="grid size-11 place-items-center rounded-xl border-2
                border-indigo-600 text-lg font-bold">1</div>
    <div class="grid size-11 place-items-center rounded-xl border
                border-gray-200 text-lg font-bold">2</div>
    <div class="grid size-11 place-items-center rounded-xl border
                border-gray-200 text-lg font-bold">4</div>
    <div class="grid size-11 place-items-center rounded-xl border
                border-gray-200"></div>
    <div class="grid size-11 place-items-center rounded-xl border
                border-gray-200"></div>
    <div class="grid size-11 place-items-center rounded-xl border
                border-gray-200"></div>
  </div>
  <input
    type="text"
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength="6"
    aria-label="確認コード（6桁）"
    aria-describedby="otp-hint"
    class="sr-only"
  />

  <button
    type="submit"
    class="mt-6 w-full rounded-xl bg-indigo-600 py-3.5 text-sm
           font-semibold text-white hover:bg-indigo-700"
  >
    認証する
  </button>
  <button
    type="button"
    disabled
    class="mt-3 text-sm text-gray-400"
  >
    コードを再送（30秒後に可能）
  </button>
</form>`,
    react: `"use client";

import { useEffect, useRef, useState } from "react";

const LENGTH = 6;

export function OtpInput({
  onComplete,
}: {
  onComplete?: (code: string) => void;
}) {
  const [code, setCode] = useState("");
  const [resendIn, setResendIn] = useState(30);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (resendIn <= 0) return;
    const t = setInterval(() => setResendIn((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [resendIn]);

  const handleChange = (raw: string) => {
    // ペースト時のハイフン・空白を除去して数字だけを採用
    const next = raw.replace(/\\D/g, "").slice(0, LENGTH);
    setCode(next);
    if (next.length === LENGTH) onComplete?.(next);
  };

  return (
    <form
      className="mx-auto w-full max-w-xs text-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (code.length === LENGTH) onComplete?.(code);
      }}
    >
      <h2 className="text-lg font-bold">確認コード</h2>
      <p id="otp-hint" className="mt-1 text-sm text-gray-500">
        SMSに届いた6桁のコードを入力してください
      </p>

      {/* 装飾マス: クリックで実inputへフォーカス */}
      <div
        aria-hidden="true"
        onClick={() => inputRef.current?.focus()}
        className="mt-5 flex cursor-text justify-center gap-2"
      >
        {Array.from({ length: LENGTH }).map((_, i) => (
          <div
            key={i}
            className={\`grid size-11 place-items-center rounded-xl border
                        text-lg font-bold tabular-nums
                        \${i === code.length
                          ? "border-2 border-indigo-600"
                          : "border-gray-200"}\`}
          >
            {code[i] ?? ""}
          </div>
        ))}
      </div>

      {/* 実体は単一input: OS自動入力・SR対応が堅牢 */}
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={LENGTH}
        value={code}
        aria-label={\`確認コード（\${LENGTH}桁）\`}
        aria-describedby="otp-hint"
        onChange={(e) => handleChange(e.target.value)}
        className="sr-only"
      />

      <button
        type="submit"
        disabled={code.length !== LENGTH}
        className="mt-6 w-full rounded-xl bg-indigo-600 py-3.5 text-sm
                   font-semibold text-white hover:bg-indigo-700
                   disabled:opacity-40"
      >
        認証する
      </button>
      <button
        type="button"
        disabled={resendIn > 0}
        onClick={() => setResendIn(30)}
        className="mt-3 text-sm text-indigo-600 hover:underline
                   disabled:text-gray-400 disabled:no-underline"
      >
        {resendIn > 0
          ? \`コードを再送（\${resendIn}秒後に可能）\`
          : "コードを再送"}
      </button>
    </form>
  );
}`,
    shadcn: `// npx shadcn@latest add input-otp button
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function VerifyCodeForm() {
  const [code, setCode] = useState("");

  return (
    <form className="mx-auto grid max-w-xs justify-items-center gap-5">
      <div className="text-center">
        <h2 className="text-lg font-bold">確認コード</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          SMSに届いた6桁のコードを入力してください
        </p>
      </div>

      <InputOTP
        maxLength={6}
        value={code}
        onChange={setCode}
        autoComplete="one-time-code"
        aria-label="確認コード（6桁）"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <Button type="submit" disabled={code.length !== 6} className="w-full">
        認証する
      </Button>
    </form>
  );
}`,
  },
  related: ["password-input", "login-form", "text-field", "toast"],
  views: 15400,
  favorites: 720,
  collections: ["finance-ui", "mobile-ui", "saas-ui"],
  gradient: "from-sky-500/15 via-cyan-500/10 to-indigo-500/15",
  difficulty: 2,
  updatedAt: "2026-05-08",
};
