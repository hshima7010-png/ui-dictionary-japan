import type { UIItem } from "@/types/ui";

export const onboardingChecklist: UIItem = {
  slug: "onboarding-checklist",
  name: "Onboarding Checklist",
  nameJa: "オンボーディングチェックリスト",
  description:
    "初期設定タスクを進捗バー付きのリストで示し、新規ユーザーの定着を促すUI。",
  category: "onboarding",
  tags: ["オンボーディング", "チェックリスト", "進捗", "アクティベーション"],
  aliases: [
    "最初にやることリスト",
    "セットアップの進み具合が出るやつ",
    "登録直後に出てくるタスク一覧",
    "はじめかたガイド",
    "残りのステップを教えてくれるリスト",
  ],
  whatIs: [
    "オンボーディングチェックリスト（Onboarding Checklist）は、新規登録直後のユーザーに「プロフィールを設定する」「最初のプロジェクトを作る」「メンバーを招待する」といった初期タスクをリスト化して提示し、完了状況を進捗バーとチェックマークで可視化するUIです。新入者の受け入れを意味する「Onboarding（オンボーディング＝船や飛行機に乗り込むこと）」と、確認リストを意味する「Checklist」を組み合わせた名前です。",
    "画面右下のフローティングパネルやダッシュボード上部のカードとして表示されるのが定番で、Notionの「はじめに」タスクや、Slackのワークスペース作成直後のセットアップガイド、Linearの初期セットアップ項目など、多くのSaaSが採用しています。ツェイガルニク効果（未完了のタスクが気になる心理）とエンダウド・プログレス効果（最初から進捗があると完走率が上がる現象）という行動心理学の知見を応用した、アクティベーション改善の定番施策です。",
    "重要なのは、チェックリストが「機能を紹介するリスト」ではなく「ユーザーがプロダクトの価値を体験するまでの最短経路」であるべきという点です。項目を達成するたびにユーザーが便利さを実感できる構成にできるかどうかが、継続率を左右します。",
  ],
  features: [
    "初期設定タスクをチェックマーク付きのリストで一覧表示する",
    "進捗バーや「3/5 完了」のような達成率表示を伴う",
    "各項目をクリックすると該当機能へ直接遷移、またはガイドが起動する",
    "完了済み項目には取り消し線やチェックが付き、達成感を演出する",
    "「アカウント登録」など最初から完了済みの項目を含め、進捗ゼロを避ける設計が多い",
    "折りたたみ・後で見る・非表示など、ユーザーが制御できる導線を持つ",
  ],
  merits: [
    "次にやるべきことが明確になり、初期離脱を減らせる",
    "進捗の可視化がゲーミフィケーションとして働き、完走モチベーションを高める",
    "プロダクトの主要価値（Ahaモーメント）まで最短距離で誘導できる",
    "セットアップ完了率などのアクティベーション指標を計測・改善しやすい",
    "チュートリアル動画やツアーと違い、ユーザーが自分のペースで進められる",
  ],
  demerits: [
    "項目が多すぎたり作業的すぎたりすると、逆に負担を感じさせ離脱を招く",
    "閉じ方が分かりにくいと、タスクを終えたユーザーには邪魔な存在になる",
    "「メンバー招待」などサービス側の都合が透ける項目は不信感につながる",
    "進捗の永続化や状態同期など、見た目以上に実装コストがかかる",
    "一度非表示にしたユーザーへの再訪導線を用意しないと、途中放棄が固定化する",
  ],
  bestPractices: [
    "項目は3〜5個に絞り、それぞれがユーザー価値の体験に直結するタスクにする",
    "「アカウント作成」を完了済みの1項目として含め、最初から進捗を見せる（エンダウド・プログレス効果）",
    "各項目に所要時間の目安（「約1分」）を添えて、心理的ハードルを下げる",
    "項目クリックで該当画面へ直接遷移させ、「探させない」導線にする",
    "いつでも折りたたみ・非表示にでき、ヘルプメニューなどから再表示できるようにする",
    "全項目完了時には祝福のアニメーションやメッセージで達成感を締めくくる",
  ],
  useCases: [
    "Notion — 新規ワークスペースの「はじめに」タスクリストでテンプレート作成へ誘導",
    "Slack — ワークスペース作成後のセットアップガイドでチャンネル作成・招待を促進",
    "Linear — 初期セットアップ項目でチーム設定と最初のIssue作成を案内",
    "Canva・Figmaなどデザインツール — 初回ログイン時のスタータータスク",
    "国内SaaSの管理画面 — 導入初期設定（会社情報・メンバー登録・連携）の進捗表示",
  ],
  accessibility: [
    "進捗バーには role=\"progressbar\" と aria-valuenow / aria-valuemin / aria-valuemax を設定する",
    "リストは <ul> / <li> でマークアップし、完了状態を視覚（チェック）とテキストの両方で伝える",
    "完了を色だけで表現せず、チェックアイコンや「完了」のテキストを併用する",
    "項目完了時の変化は aria-live=\"polite\" で通知し、スクリーンリーダーにも進捗を伝える",
    "フローティング表示でもキーボードでフォーカス可能にし、Escや閉じるボタンで消せるようにする",
    "祝福アニメーションは prefers-reduced-motion を尊重する",
  ],
  figma: [
    "チェックリスト項目を「未完了／完了」のVariantsを持つコンポーネントとして作成する",
    "進捗バーはfillの幅をVariantsまたはプロトタイプ変数で管理し、0%〜100%の状態を用意する",
    "パネル全体の「展開／折りたたみ／完了」の3状態をVariantsで定義する",
    "完了時の取り消し線・カラー変化・チェックのSmart Animateをプロトタイプで再現する",
    "右下フローティング配置時に他UI（FABやトースト）と干渉しないかレイアウトを確認する",
  ],
  code: {
    html: `<section class="checklist" aria-labelledby="checklist-heading">
  <h2 id="checklist-heading">はじめる準備をしましょう</h2>

  <div class="progress" role="progressbar" aria-valuenow="2"
       aria-valuemin="0" aria-valuemax="4" aria-label="セットアップの進捗">
    <div class="bar" style="width: 50%"></div>
  </div>
  <p class="count">2 / 4 完了</p>

  <ul>
    <li class="done">
      <span class="check" aria-hidden="true">✓</span>
      アカウントを作成する <span class="sr-only">（完了）</span>
    </li>
    <li class="done">
      <span class="check" aria-hidden="true">✓</span>
      プロフィールを設定する <span class="sr-only">（完了）</span>
    </li>
    <li>
      <a href="/projects/new">最初のプロジェクトを作成する <small>約1分</small></a>
    </li>
    <li>
      <a href="/members/invite">メンバーを招待する <small>約2分</small></a>
    </li>
  </ul>
</section>

<style>
  .checklist { max-width: 360px; border: 1px solid #e5e7eb; border-radius: 16px;
               padding: 24px; box-shadow: 0 8px 24px rgba(0,0,0,.06); }
  h2 { font-size: 16px; margin-bottom: 16px; }
  .progress { height: 8px; border-radius: 9999px; background: #f3f4f6;
              overflow: hidden; }
  .bar { height: 100%; background: linear-gradient(90deg, #8b5cf6, #a855f7);
         transition: width 0.4s; }
  .count { font-size: 12px; color: #6b7280; margin: 8px 0 16px; }
  ul { list-style: none; padding: 0; display: grid; gap: 8px; }
  li { font-size: 14px; display: flex; align-items: center; gap: 8px; }
  li.done { color: #9ca3af; text-decoration: line-through; }
  .check { color: #7c3aed; font-weight: 700; }
  li a { color: #111827; text-decoration: none; }
  li a:hover { color: #7c3aed; }
  small { color: #9ca3af; margin-left: 4px; }
  .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden;
             clip: rect(0 0 0 0); white-space: nowrap; }
</style>`,
    tailwind: `<section
  aria-labelledby="checklist-heading"
  class="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
>
  <h2 id="checklist-heading" class="font-bold">はじめる準備をしましょう</h2>

  <div
    role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="4"
    aria-label="セットアップの進捗"
    class="mt-4 h-2 overflow-hidden rounded-full bg-gray-100"
  >
    <div class="h-full w-1/2 rounded-full bg-gradient-to-r
                from-violet-500 to-purple-500 transition-all"></div>
  </div>
  <p class="mt-2 text-xs text-gray-500">2 / 4 完了</p>

  <ul class="mt-4 space-y-2 text-sm">
    <li class="flex items-center gap-2 text-gray-400 line-through">
      <svg class="size-4 text-violet-500" aria-hidden="true" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
      </svg>
      アカウントを作成する<span class="sr-only">（完了）</span>
    </li>
    <li class="flex items-center gap-2">
      <span class="size-4 rounded-full border-2 border-gray-300" aria-hidden="true"></span>
      <a href="/projects/new" class="hover:text-violet-600">
        最初のプロジェクトを作成する
        <span class="ml-1 text-xs text-gray-400">約1分</span>
      </a>
    </li>
    <li class="flex items-center gap-2">
      <span class="size-4 rounded-full border-2 border-gray-300" aria-hidden="true"></span>
      <a href="/members/invite" class="hover:text-violet-600">
        メンバーを招待する
        <span class="ml-1 text-xs text-gray-400">約2分</span>
      </a>
    </li>
  </ul>
</section>`,
    react: `"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type Task = {
  id: string;
  label: string;
  estimate?: string;
  done: boolean;
};

const initialTasks: Task[] = [
  { id: "signup", label: "アカウントを作成する", done: true },
  { id: "profile", label: "プロフィールを設定する", estimate: "約1分", done: false },
  { id: "project", label: "最初のプロジェクトを作成する", estimate: "約1分", done: false },
  { id: "invite", label: "メンバーを招待する", estimate: "約2分", done: false },
];

export function OnboardingChecklist() {
  const [tasks, setTasks] = useState(initialTasks);
  const doneCount = tasks.filter((t) => t.done).length;
  const percent = Math.round((doneCount / tasks.length) * 100);

  const toggle = (id: string) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  return (
    <section
      aria-labelledby="checklist-heading"
      className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
    >
      <h2 id="checklist-heading" className="font-bold">
        はじめる準備をしましょう
      </h2>

      <div
        role="progressbar"
        aria-valuenow={doneCount}
        aria-valuemin={0}
        aria-valuemax={tasks.length}
        aria-label="セットアップの進捗"
        className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500
                     to-purple-500 transition-all duration-500"
          style={{ width: \`\${percent}%\` }}
        />
      </div>
      <p aria-live="polite" className="mt-2 text-xs text-gray-500">
        {doneCount} / {tasks.length} 完了
      </p>

      <ul className="mt-4 space-y-1 text-sm">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              onClick={() => toggle(task.id)}
              aria-pressed={task.done}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5
                         text-left hover:bg-gray-50"
            >
              {task.done ? (
                <Check aria-hidden className="size-4 shrink-0 text-violet-500" />
              ) : (
                <span
                  aria-hidden
                  className="size-4 shrink-0 rounded-full border-2 border-gray-300"
                />
              )}
              <span className={task.done ? "text-gray-400 line-through" : ""}>
                {task.label}
                {task.done && <span className="sr-only">（完了）</span>}
              </span>
              {task.estimate && !task.done && (
                <span className="ml-auto text-xs text-gray-400">
                  {task.estimate}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}`,
    shadcn: `// npx shadcn@latest add card progress checkbox
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const tasks = [
  { id: "signup", label: "アカウントを作成する", done: true },
  { id: "profile", label: "プロフィールを設定する", done: true },
  { id: "project", label: "最初のプロジェクトを作成する", done: false },
  { id: "invite", label: "メンバーを招待する", done: false },
];

export function OnboardingChecklist() {
  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="text-base">はじめる準備をしましょう</CardTitle>
        <Progress
          value={(doneCount / tasks.length) * 100}
          aria-label="セットアップの進捗"
        />
        <p className="text-xs text-muted-foreground">
          {doneCount} / {tasks.length} 完了
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <Checkbox defaultChecked={task.done} />
            <span className={task.done ? "text-muted-foreground line-through" : ""}>
              {task.label}
            </span>
          </label>
        ))}
      </CardContent>
    </Card>
  );
}`,
  },
  related: ["progress-bar", "stepper", "product-tour", "checkbox"],
  views: 12700,
  favorites: 520,
  collections: ["saas-ui"],
  gradient: "from-purple-500/15 via-fuchsia-500/10 to-pink-500/15",
  difficulty: 2,
  updatedAt: "2026-04-30",
};
