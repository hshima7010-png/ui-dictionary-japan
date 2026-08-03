import type { UIItem } from "@/types/ui";

export const multiStepForm: UIItem = {
  slug: "multi-step-form",
  name: "Multi-step Form",
  nameJa: "マルチステップフォーム",
  description:
    "長いフォームを複数の画面に分割し、段階的に入力させるUI。会員登録や購入手続きに。",
  category: "forms",
  tags: ["フォーム", "ウィザード", "ステップ", "コンバージョン"],
  aliases: [
    "何画面かに分かれている入力フォーム",
    "次へ次へと進んでいくフォーム",
    "ステップに分かれた登録画面",
    "ウィザード形式のフォーム",
    "上に進捗が出る長い申し込みフォーム",
    "1問ずつ答えていくフォーム",
  ],
  whatIs: [
    "マルチステップフォーム（Multi-step Form）は、入力項目の多い長大なフォームを複数の画面（ステップ）に分割し、「次へ」ボタンで段階的に進めさせるUIパターンです。「ウィザード（Wizard）」という別名でも知られますが、これは魔法使いが道案内をするように、システムがユーザーを一歩ずつ導くことに由来する1990年代からの呼び名です。",
    "1画面あたりの入力項目が減ることで認知負荷が下がり、「あと少しで終わる」という進捗感がモチベーションを維持させます。ECの購入手続き（配送先→支払い→確認）、会員登録、保険や住宅ローンの見積もりなど、入力項目が7個を超えるようなフォームで離脱率の改善が期待できます。",
    "一方で、全体像が見えにくくなる、戻って修正する手間が増えるといった弱点もあり、ステッパー（進捗表示）や入力内容の確認画面、途中保存とのセット設計が事実上の必須要件です。フォーム分割は手段であって目的ではなく、「そもそも項目を減らせないか」を先に検討することが最重要です。",
  ],
  features: [
    "フォーム全体を意味のまとまり（配送先・支払いなど）ごとにステップ分割する",
    "現在位置と全体数を示すステッパーやプログレスバーを伴う",
    "「次へ」「戻る」ボタンでステップ間を移動できる",
    "ステップごとにバリデーションを行い、エラーを早期に提示する",
    "最終ステップの前に入力内容の確認画面を挟むことが多い",
    "入力途中のデータを保持し、戻っても値が消えない",
  ],
  merits: [
    "1画面あたりの項目数が減り、心理的なハードルと認知負荷が下がる",
    "進捗が見えることで完了へのモチベーションが維持される",
    "ステップ単位のバリデーションにより、エラーの発見と修正が早い",
    "ステップごとの離脱率を計測でき、フォーム改善のボトルネックを特定しやすい",
    "条件分岐（法人／個人で項目が変わるなど）を自然に組み込める",
    "モバイルの小さい画面でも1ステップ分なら快適に入力できる",
  ],
  demerits: [
    "全体像（あと何をどれだけ入力するのか）が最初に見えない",
    "前のステップの修正に「戻る」操作が必要で、一覧修正より手間がかかる",
    "ステップ数が多すぎると逆に離脱を招く（進捗が進まない感覚）",
    "状態管理・途中保存・ブラウザバック対応など実装コストが高い",
    "項目が少ないフォームに適用すると、無意味にクリック数だけが増える",
  ],
  bestPractices: [
    "ステップは3〜5個に収め、各ステップに「配送先」「支払い方法」など意味のある名前を付ける",
    "ステッパーで現在位置・完了済み・残りを常に可視化する",
    "「次へ」を押した時点でそのステップをバリデーションし、最後にまとめてエラーを出さない",
    "戻る操作やブラウザバックで入力値が消えないよう状態を保持する（可能ならサーバー側にも途中保存）",
    "最初のステップは最も簡単な項目（メールアドレスなど）から始め、着手のハードルを下げる",
    "最終確認画面には各項目への「編集」リンクを付け、該当ステップへ直接戻れるようにする",
  ],
  useCases: [
    "Amazon / 楽天の購入手続き — 配送先→支払い→注文確認の3ステップ",
    "Stripe Checkout — 連絡先→カード情報→確認の段階入力",
    "マネーフォワード クラウドの開業手続き — 質問に答えて進む書類作成ウィザード",
    "保険の見積もりサイト — 年齢・条件を1問ずつ答える診断型フォーム",
    "Typeform — 1画面1質問のカンバセーショナルなアンケート",
  ],
  accessibility: [
    "ステップ切り替え時に見出し（h2など）へフォーカスを移動し、画面が変わったことを伝える",
    "ステッパーは「ステップ2/4: 支払い方法」のようにテキストでも現在位置を提供する（aria-current=\"step\"）",
    "各ステップは form 要素と fieldset で構造化し、見出しと入力群の関係を明確にする",
    "エラー発生時は aria-live で通知し、最初のエラーフィールドへフォーカスを移す",
    "「次へ」「戻る」ボタンの配置と順序を全ステップで一貫させる",
    "キーボードのみでステップ移動・入力・修正が完結することを確認する",
  ],
  figma: [
    "ステップごとにフレームを分け、共通のステッパー・ボタン行はコンポーネント化して全画面で共有する",
    "ステッパーは「完了／現在／未完了」の3状態を持つステップ単体コンポーネントの組み合わせで作る",
    "プロトタイプで「次へ」→次ステップ、「戻る」→前ステップの遷移をつなぎ、一連の流れを再現する",
    "エラー状態のステップ画面も用意し、バリデーション時の見た目を開発者に伝える",
    "条件分岐がある場合はフローチャートをFigJamで併設し、分岐条件を明文化する",
  ],
  code: {
    html: `<form id="multiStepForm">
  <ol class="steps" aria-label="入力ステップ">
    <li class="step done">1. お客様情報</li>
    <li class="step current" aria-current="step">2. 配送先</li>
    <li class="step">3. 確認</li>
  </ol>

  <section aria-labelledby="step-title">
    <h2 id="step-title">配送先の入力</h2>
    <label for="address">住所</label>
    <input id="address" name="address" type="text" required />
  </section>

  <div class="actions">
    <button type="button" class="back">戻る</button>
    <button type="button" class="next">次へ</button>
  </div>
</form>

<style>
  .steps {
    display: flex;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin-bottom: 24px;
    font-size: 13px;
    color: #9ca3af;
  }
  .step.done { color: #059669; }
  .step.current { color: #4f46e5; font-weight: 700; }
  label { display: block; font-weight: 600; margin: 12px 0 6px; }
  input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
  .next {
    background: #4f46e5;
    color: #fff;
    border: none;
    padding: 12px 32px;
    border-radius: 12px;
    cursor: pointer;
  }
  .back {
    background: none;
    border: 1px solid #e5e7eb;
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
  }
</style>`,
    tailwind: `<form class="mx-auto max-w-md">
  <!-- ステッパー -->
  <ol class="mb-6 flex items-center gap-2 text-xs" aria-label="入力ステップ">
    <li class="flex items-center gap-1.5 font-medium text-emerald-600">
      <span class="grid size-6 place-items-center rounded-full
                   bg-emerald-600 text-white">✓</span>
      お客様情報
    </li>
    <li class="h-px flex-1 bg-gray-200"></li>
    <li
      aria-current="step"
      class="flex items-center gap-1.5 font-bold text-indigo-600"
    >
      <span class="grid size-6 place-items-center rounded-full
                   bg-indigo-600 text-white">2</span>
      配送先
    </li>
    <li class="h-px flex-1 bg-gray-200"></li>
    <li class="flex items-center gap-1.5 text-gray-400">
      <span class="grid size-6 place-items-center rounded-full
                   border border-gray-300">3</span>
      確認
    </li>
  </ol>

  <h2 class="mb-4 text-lg font-bold">配送先の入力</h2>
  <label for="address" class="mb-1.5 block text-sm font-semibold">住所</label>
  <input
    id="address"
    type="text"
    required
    class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm
           focus:outline-none focus:ring-2 focus:ring-indigo-600"
  />

  <div class="mt-6 flex justify-between">
    <button
      type="button"
      class="rounded-xl border border-gray-200 px-6 py-3 text-sm
             font-medium hover:bg-gray-50"
    >
      戻る
    </button>
    <button
      type="button"
      class="rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold
             text-white hover:bg-indigo-700"
    >
      次へ
    </button>
  </div>
</form>`,
    react: `"use client";

import { useRef, useState } from "react";

const steps = ["お客様情報", "配送先", "確認"] as const;

export function MultiStepForm() {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({ name: "", address: "" });
  const headingRef = useRef<HTMLHeadingElement>(null);

  const goTo = (index: number) => {
    setCurrent(index);
    // ステップ切り替えを支援技術へ伝えるため見出しへフォーカス
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  return (
    <form
      className="mx-auto max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("送信:", data);
      }}
    >
      <ol className="mb-6 flex gap-4 text-xs" aria-label="入力ステップ">
        {steps.map((label, i) => (
          <li
            key={label}
            aria-current={i === current ? "step" : undefined}
            className={\`flex items-center gap-1.5
              \${i < current ? "text-emerald-600" : ""}
              \${i === current ? "font-bold text-indigo-600" : ""}
              \${i > current ? "text-gray-400" : ""}\`}
          >
            <span
              className={\`grid size-6 place-items-center rounded-full text-xs
                \${i < current ? "bg-emerald-600 text-white" : ""}
                \${i === current ? "bg-indigo-600 text-white" : ""}
                \${i > current ? "border border-gray-300" : ""}\`}
            >
              {i < current ? "✓" : i + 1}
            </span>
            {label}
          </li>
        ))}
      </ol>

      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mb-4 text-lg font-bold outline-none"
      >
        ステップ{current + 1}: {steps[current]}
      </h2>

      {current === 0 && (
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold">お名前</span>
          <input
            type="text"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </label>
      )}
      {current === 1 && (
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold">住所</span>
          <input
            type="text"
            required
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </label>
      )}
      {current === 2 && (
        <dl className="rounded-xl bg-gray-50 p-4 text-sm">
          <dt className="font-semibold">お名前</dt>
          <dd className="mb-2">{data.name || "未入力"}</dd>
          <dt className="font-semibold">住所</dt>
          <dd>{data.address || "未入力"}</dd>
        </dl>
      )}

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="rounded-xl border border-gray-200 px-6 py-3 text-sm
                     font-medium hover:bg-gray-50 disabled:opacity-40"
        >
          戻る
        </button>
        {current < steps.length - 1 ? (
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="rounded-xl bg-indigo-600 px-8 py-3 text-sm
                       font-semibold text-white hover:bg-indigo-700"
          >
            次へ
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-xl bg-emerald-600 px-8 py-3 text-sm
                       font-semibold text-white hover:bg-emerald-700"
          >
            注文を確定する
          </button>
        )}
      </div>
    </form>
  );
}`,
    shadcn: `// shadcn/uiにMulti-step Form専用コンポーネントはないため、
// Card / Input / Button / Progress を組み合わせて構築する
// npx shadcn@latest add card input button label progress
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const steps = ["お客様情報", "配送先", "確認"];

export function CheckoutWizard() {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / steps.length) * 100;

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <Progress value={progress} aria-label="入力の進捗" />
        <CardTitle className="pt-2">
          ステップ{current + 1}: {steps[current]}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {current === 0 && (
          <div className="grid gap-1.5">
            <Label htmlFor="name">お名前</Label>
            <Input id="name" required />
          </div>
        )}
        {current === 1 && (
          <div className="grid gap-1.5">
            <Label htmlFor="address">住所</Label>
            <Input id="address" required />
          </div>
        )}
        {current === 2 && (
          <p className="text-sm text-muted-foreground">
            入力内容をご確認のうえ、注文を確定してください。
          </p>
        )}
      </CardContent>
      <CardFooter className="justify-between">
        <Button
          variant="outline"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          戻る
        </Button>
        <Button
          onClick={() =>
            setCurrent(Math.min(current + 1, steps.length - 1))
          }
        >
          {current === steps.length - 1 ? "確定する" : "次へ"}
        </Button>
      </CardFooter>
    </Card>
  );
}`,
  },
  related: ["stepper", "form-validation", "progress-bar", "checkout-form"],
  views: 26300,
  favorites: 1120,
  collections: ["ec-ui", "finance-ui", "saas-ui"],
  gradient: "from-blue-500/15 via-indigo-500/10 to-emerald-500/15",
  difficulty: 3,
  updatedAt: "2026-06-09",
};
