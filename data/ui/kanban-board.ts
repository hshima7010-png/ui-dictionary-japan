import type { UIItem } from "@/types/ui";

export const kanbanBoard: UIItem = {
  slug: "kanban-board",
  name: "Kanban Board",
  nameJa: "カンバンボード",
  description:
    "タスクをカードとして列（レーン）間でドラッグ移動するボードUI。TrelloやNotionの定番ビュー。",
  category: "dashboard",
  tags: ["タスク管理", "ドラッグ&ドロップ", "プロジェクト管理", "ボード"],
  aliases: [
    "Trelloみたいなやつ",
    "カードを横の列に動かすタスク管理画面",
    "付箋を貼って動かすボード",
    "ToDo・進行中・完了で分ける画面",
    "ドラッグでタスクを移動するやつ",
    "プロジェクト管理のボードビュー",
  ],
  whatIs: [
    "カンバンボード（Kanban Board）は、タスクをカードとして表現し、「未着手」「進行中」「完了」といったステータスごとの列（レーン／カラム）に配置して、ドラッグ＆ドロップで移動させながら進捗を管理するUIパターンです。名前はトヨタ生産方式の「かんばん（看板）」に由来します。部品の補充指示を書いた札を工程間で回すことで在庫と流れを可視化する仕組みで、これをソフトウェア開発に応用したのがDavid J. Anderson氏らによるKanban手法です。",
    "「作業の見える化」「仕掛かり数（WIP）の制限」「流れの管理」というカンバンの原則を、そのまま画面上のメタファーとして表現できるのが最大の特徴です。誰が何をしていて、どこで作業が滞留しているかがひと目で分かるため、TrelloやJira、Notion、GitHub Projects、Linearなど、ほぼすべてのプロジェクト管理ツールが標準ビューとして採用しています。",
    "実装面ではドラッグ＆ドロップ、列間のデータ移動、並び順の永続化、リアルタイム同期など考慮事項が多く、フロントエンドUIの中でも難易度が高い部類です。Reactでは dnd-kit や @hello-pangea/dnd（旧react-beautiful-dnd系）といったライブラリを使うのが実務での定石です。",
  ],
  features: [
    "ステータスを表す複数の列（レーン）と、タスクを表すカードで構成される",
    "カードをドラッグ＆ドロップで列間・列内で移動でき、移動がそのままステータス変更になる",
    "各列にカード件数やWIP制限（仕掛かり上限）を表示できる",
    "カードには担当者アバター、期限、ラベル、優先度などのメタ情報を載せられる",
    "列単位の折りたたみ、カードのフィルタリング・検索を備えることが多い",
    "横方向スクロールで多数の列を扱い、モバイルでは1列表示に切り替える",
  ],
  merits: [
    "チーム全体の作業状況と滞留箇所がひと目で可視化される",
    "ドラッグ操作＝ステータス更新という直感的で気持ちの良いインタラクション",
    "WIP制限を設ければ「あれもこれも着手」を防ぎ、フローの効率が上がる",
    "リストやテーブルより「流れ」を表現でき、朝会などの同期ミーティングと相性が良い",
    "列の定義を変えるだけで、採用パイプラインや営業案件管理などタスク以外にも転用できる",
  ],
  demerits: [
    "実装コストが高い（ドラッグ&ドロップ、並び順管理、リアルタイム同期など）",
    "カードが増えすぎると一覧性が急速に悪化し、スクロール地獄になる",
    "期限順・担当者別など「別の軸」での俯瞰はテーブルビューに劣る",
    "モバイルの狭い画面では列をまたぐドラッグ操作が難しい",
    "ドラッグ&ドロップはキーボード・スクリーンリーダー対応が難しく、アクセシビリティ確保に工数がかかる",
    "階層構造（親子タスク）の表現が苦手",
  ],
  bestPractices: [
    "列は3〜5本程度に抑え、ワークフローの実態に合わせて定義する（形骸化した列は削除する）",
    "各列にカード件数を表示し、必要に応じてWIP制限を設けて滞留を防ぐ",
    "ドラッグ中はドロップ可能位置をプレースホルダーで明示し、カードに傾き・影を付けて「掴んでいる感」を出す",
    "ドラッグ&ドロップと等価な代替操作（カードメニューからの「移動」やキーボード操作）を必ず用意する",
    "並び順は楽観的更新（optimistic update）で即座に反映し、API失敗時にロールバックする",
    "モバイルでは列切り替えタブ＋縦リスト表示にするなど、レイアウトを再設計する",
  ],
  useCases: [
    "Trello — カンバンボードUIを世界に広めた代名詞的サービス",
    "Notionのボードビュー — データベースをステータス別カンバンとして表示",
    "GitHub Projects — IssueやPRをカードとして進捗管理",
    "Jira — スクラム／カンバンボードによるスプリント運用",
    "Linear — キーボード操作と高速な体験を重視したボードビュー",
    "採用管理ツール（HRMOSなど） — 応募者を選考ステージ別に管理するパイプライン",
  ],
  accessibility: [
    "ドラッグ&ドロップだけに依存せず、カードのメニューやキーボードで移動できる代替手段を提供する（WCAG 2.2「Dragging Movements」）",
    "列はrole=\"list\"、カードはrole=\"listitem\"などでグループ構造を伝え、列見出しをaria-labelledbyで関連付ける",
    "カードの掴み上げ・移動・ドロップの各操作をaria-liveで実況する（例:「タスクAを進行中の2番目に移動しました」）",
    "dnd-kitなどキーボードセンサー内蔵のライブラリを選定し、Space/Enterで掴んで矢印キーで移動できるようにする",
    "フォーカスリングを明確にし、ドロップ後もフォーカスが移動先のカードに残るようにする",
    "色ラベルには必ずテキストまたはアイコンを併記し、色覚多様性に配慮する",
  ],
  figma: [
    "カードをComponentにして、担当者・ラベル・期限などをComponent Propertiesで出し分けられるようにする",
    "列はAuto Layout（縦方向・gap 8〜12px）、ボード全体はAuto Layout（横方向）で組むとカードの増減に追従できる",
    "ドラッグ中状態のVariant（影を強め、2〜3度回転）とドロップ先のプレースホルダー（破線の枠）を用意する",
    "列ヘッダーに件数バッジを置き、数値はテキストプロパティで差し替えられるようにする",
    "ボードのフレームにHorizontal Scrollを設定し、列が画面幅を超えたときの挙動をプロトタイプで確認する",
    "モバイル用に1列＋タブ切り替えのフレームも別途作成しておく",
  ],
  code: {
    html: `<!-- HTML Drag and Drop APIによる最小構成のカンバン -->
<div class="board">
  <section class="column" data-status="todo">
    <h2>未着手 <span class="count">2</span></h2>
    <ul class="cards">
      <li class="card" draggable="true">要件定義の見直し</li>
      <li class="card" draggable="true">デザインレビュー</li>
    </ul>
  </section>
  <section class="column" data-status="doing">
    <h2>進行中 <span class="count">1</span></h2>
    <ul class="cards">
      <li class="card" draggable="true">API実装</li>
    </ul>
  </section>
  <section class="column" data-status="done">
    <h2>完了 <span class="count">0</span></h2>
    <ul class="cards"></ul>
  </section>
</div>

<style>
  .board { display: flex; gap: 16px; align-items: flex-start; }
  .column {
    flex: 1; min-width: 240px;
    background: #f3f4f6; border-radius: 12px; padding: 12px;
  }
  .column h2 { font-size: 14px; margin: 0 0 8px; display: flex; gap: 6px; }
  .count { color: #6b7280; font-weight: 400; }
  .cards { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; min-height: 40px; }
  .card {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
    padding: 12px; cursor: grab; box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
  }
  .card.dragging { opacity: 0.5; }
  .column.drag-over { outline: 2px dashed #0ea5e9; outline-offset: -2px; }
</style>

<script>
  let dragged = null;
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("dragstart", () => {
      dragged = card;
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
  });
  document.querySelectorAll(".column").forEach((col) => {
    col.addEventListener("dragover", (e) => {
      e.preventDefault(); // ドロップを許可
      col.classList.add("drag-over");
    });
    col.addEventListener("dragleave", () => col.classList.remove("drag-over"));
    col.addEventListener("drop", () => {
      col.classList.remove("drag-over");
      if (dragged) col.querySelector(".cards").appendChild(dragged);
    });
  });
</script>`,
    tailwind: `<div class="flex items-start gap-4 overflow-x-auto pb-4">
  <!-- 列（レーン） -->
  <section class="w-72 shrink-0 rounded-xl bg-gray-100 p-3">
    <h2 class="mb-2 flex items-center justify-between px-1 text-sm font-semibold">
      未着手
      <span class="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600">2</span>
    </h2>
    <ul class="grid gap-2">
      <li class="cursor-grab rounded-lg border border-gray-200 bg-white p-3 shadow-sm
                 hover:shadow active:cursor-grabbing">
        <p class="text-sm font-medium">要件定義の見直し</p>
        <div class="mt-2 flex items-center justify-between">
          <span class="rounded bg-sky-100 px-1.5 py-0.5 text-xs text-sky-700">設計</span>
          <span class="text-xs text-gray-500">4/30まで</span>
        </div>
      </li>
      <li class="cursor-grab rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
        <p class="text-sm font-medium">デザインレビュー</p>
      </li>
    </ul>
  </section>

  <!-- ドラッグ中のドロップ先プレースホルダー例 -->
  <section class="w-72 shrink-0 rounded-xl bg-gray-100 p-3
                  outline-2 outline-dashed outline-sky-400 -outline-offset-2">
    <h2 class="mb-2 px-1 text-sm font-semibold">進行中</h2>
    <ul class="grid gap-2">
      <li class="h-16 rounded-lg border-2 border-dashed border-sky-300 bg-sky-50"></li>
      <li class="rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm">API実装</li>
    </ul>
  </section>

  <section class="w-72 shrink-0 rounded-xl bg-gray-100 p-3">
    <h2 class="mb-2 px-1 text-sm font-semibold">完了</h2>
    <ul class="grid min-h-10 gap-2"></ul>
  </section>
</div>`,
    react: `"use client";

// キーボード対応まで含めた実務実装には dnd-kit の利用を推奨:
// npm i @dnd-kit/core
// ここでは仕組みが分かるHTML5 DnD + 代替ボタン操作の例を示します。

import { useState } from "react";

type Status = "todo" | "doing" | "done";
type Task = { id: string; title: string; status: Status };

const COLUMNS: { key: Status; label: string }[] = [
  { key: "todo", label: "未着手" },
  { key: "doing", label: "進行中" },
  { key: "done", label: "完了" },
];

const initialTasks: Task[] = [
  { id: "t1", title: "要件定義の見直し", status: "todo" },
  { id: "t2", title: "デザインレビュー", status: "todo" },
  { id: "t3", title: "API実装", status: "doing" },
];

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [announcement, setAnnouncement] = useState("");

  const moveTask = (id: string, status: Status) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    const task = tasks.find((t) => t.id === id);
    const label = COLUMNS.find((c) => c.key === status)?.label;
    setAnnouncement(\`「\${task?.title}」を\${label}に移動しました\`);
  };

  return (
    <div
      className="flex items-start gap-4 overflow-x-auto pb-4"
      aria-label="カンバンボード"
    >
      {COLUMNS.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.key);
        return (
          <section
            key={col.key}
            aria-labelledby={\`col-\${col.key}\`}
            className="w-72 shrink-0 rounded-xl bg-gray-100 p-3"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const id = e.dataTransfer.getData("text/plain");
              if (id) moveTask(id, col.key);
            }}
          >
            <h2
              id={\`col-\${col.key}\`}
              className="mb-2 flex items-center justify-between px-1 text-sm font-semibold"
            >
              {col.label}
              <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600">
                {colTasks.length}
              </span>
            </h2>
            <ul role="list" className="grid min-h-10 gap-2">
              {colTasks.map((task) => (
                <li
                  key={task.id}
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", task.id)
                  }
                  className="cursor-grab rounded-lg border border-gray-200
                             bg-white p-3 shadow-sm active:cursor-grabbing"
                >
                  <p className="text-sm font-medium">{task.title}</p>
                  {/* ドラッグできない環境向けの代替操作（WCAG 2.2対応） */}
                  <div className="mt-2 flex gap-1">
                    {COLUMNS.filter((c) => c.key !== task.status).map((c) => (
                      <button
                        key={c.key}
                        type="button"
                        onClick={() => moveTask(task.id, c.key)}
                        className="rounded bg-gray-100 px-1.5 py-0.5 text-xs
                                   text-gray-600 hover:bg-gray-200"
                      >
                        {c.label}へ
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}`,
    shadcn: `// shadcn/uiにカンバン専用コンポーネントはないため、
// Card + Badge + dnd-kit を組み合わせるのが定番構成です。
// npx shadcn@latest add card badge
// npm i @dnd-kit/core

"use client";

import { DndContext, type DragEndEvent, useDroppable, useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Status = "todo" | "doing" | "done";
type Task = { id: string; title: string; status: Status };

const COLUMNS: { key: Status; label: string }[] = [
  { key: "todo", label: "未着手" },
  { key: "doing", label: "進行中" },
  { key: "done", label: "完了" },
];

function DraggableCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab p-0 shadow-sm active:cursor-grabbing"
      style={
        transform
          ? { transform: \`translate(\${transform.x}px, \${transform.y}px)\` }
          : undefined
      }
    >
      <CardContent className="p-3 text-sm font-medium">{task.title}</CardContent>
    </Card>
  );
}

function Column({ column, tasks }: { column: (typeof COLUMNS)[number]; tasks: Task[] }) {
  const { setNodeRef, isOver } = useDroppable({ id: column.key });
  return (
    <section
      ref={setNodeRef}
      aria-label={column.label}
      className={\`w-72 shrink-0 rounded-xl bg-muted p-3 \${
        isOver ? "ring-2 ring-sky-400" : ""
      }\`}
    >
      <h2 className="mb-2 flex items-center justify-between px-1 text-sm font-semibold">
        {column.label}
        <Badge variant="secondary">{tasks.length}</Badge>
      </h2>
      <div className="grid min-h-10 gap-2">
        {tasks.map((task) => (
          <DraggableCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export function KanbanBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === active.id ? { ...t, status: over.id as Status } : t
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex items-start gap-4 overflow-x-auto pb-4">
        {COLUMNS.map((col) => (
          <Column
            key={col.key}
            column={col}
            tasks={tasks.filter((t) => t.status === col.key)}
          />
        ))}
      </div>
    </DndContext>
  );
}`,
  },
  related: ["data-table", "card", "timeline", "drawer"],
  views: 26400,
  favorites: 1190,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-cyan-400/15 via-blue-500/10 to-indigo-500/15",
  difficulty: 3,
  updatedAt: "2026-05-14",
};
