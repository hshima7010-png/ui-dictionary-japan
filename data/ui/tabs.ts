import type { UIItem } from "@/types/ui";

export const tabs: UIItem = {
  slug: "tabs",
  name: "Tabs",
  nameJa: "タブ",
  description:
    "同じ領域で複数のコンテンツを切り替えるUI。関連情報を1画面に整理する最も基本的な手段。",
  category: "tabs",
  tags: ["切り替え", "ナビゲーション", "整理", "パネル"],
  aliases: [
    "上のラベルで切り替えるやつ",
    "ページ内でコンテンツが切り替わるメニュー",
    "見出しをクリックすると中身が変わるUI",
    "ブラウザのタブみたいな切り替え",
    "横に並んだ切り替えボタン",
    "下線が動く切り替えメニュー",
  ],
  whatIs: [
    "タブ（Tabs）は、複数のコンテンツパネルを同じ領域に重ねて配置し、上部（または横）に並んだラベルのクリックで表示を切り替えるUIコンポーネントです。紙のファイルフォルダーの見出しに付ける「つまみ（tab）」に由来し、書類棚のフォルダーをめくるメタファーがそのままデジタルに持ち込まれました。ブラウザのタブも同じ発想です。",
    "「商品説明／レビュー／Q&A」のように、同じ対象に関する並列な情報グループを1画面に収めたいときの第一選択です。ページ遷移を伴わないため、切り替えが高速で文脈も保たれます。選択中のタブは下線・背景色・太字などで明示され、どの情報を見ているかが常に分かります。",
    "WAI-ARIAで tablist / tab / tabpanel のロールと矢印キーによる操作が標準パターンとして定義されており、アクセシビリティの作法が最も確立されたコンポーネントの1つです。近年はURLと同期させてタブ状態を共有可能にする実装や、モバイルでスワイプと連動させる実装も一般的になっています。",
  ],
  features: [
    "複数のパネルを同一領域に重ね、ラベルのクリックで瞬時に切り替えられる",
    "選択中のタブを下線・塗り・太字などのアクティブインジケーターで明示する",
    "水平タブが基本だが、設定画面などでは垂直タブも使われる",
    "タブ数が多い場合は横スクロール（スクロールタブ）に拡張できる",
    "WAI-ARIAのTabsパターンとして矢印キー操作が標準化されている",
    "URLクエリやハッシュと同期させ、特定タブへの直リンクを可能にできる",
  ],
  merits: [
    "関連する情報グループを1画面に整理でき、ページ数を増やさずに済む",
    "ページ遷移なしで切り替わるため高速で、ユーザーの文脈が維持される",
    "並列な選択肢が常に見えているので、全体像と現在地を把握しやすい",
    "ユーザーがブラウザのタブ等で慣れ親しんだ、学習コストゼロのパターン",
    "スクロールを短縮でき、長大な1ページに全部詰め込むより見通しが良い",
  ],
  demerits: [
    "非選択タブの内容は見えないため、重要な情報が見落とされる可能性がある",
    "タブ間の比較がしにくい（2つのタブを同時に見られない）",
    "タブ数が多い・ラベルが長いと折り返しやスクロールが発生し、破綻しやすい",
    "ページ内検索（Ctrl+F）で非表示パネルのテキストがヒットしない実装が多い",
    "階層をタブの中にさらにタブと重ねると、ナビゲーション構造が分かりにくくなる",
  ],
  bestPractices: [
    "タブは2〜6個程度に抑え、ラベルは1〜2語の簡潔な名詞にする",
    "並列でない内容（手順の流れなど）はタブでなくステッパーを使う",
    "選択中のタブはコントラストの高いインジケーターで明確に示す",
    "初期表示タブには最も重要・最も利用頻度の高いコンテンツを置く",
    "タブ状態をURLに反映し、リロードや共有で同じタブが開くようにする",
    "モバイルでタブが収まらない場合は横スクロール化し、端をフェードさせて続きがあることを示す",
  ],
  useCases: [
    "Amazon・楽天の商品ページ — 「商品説明／レビュー／Q&A」の切り替え",
    "GitHubのリポジトリ — Code / Issues / Pull requests / Actions のタブナビゲーション",
    "X（旧Twitter） — 「おすすめ／フォロー中」のフィード切り替え",
    "銀行・証券アプリ — 「残高／入出金明細／振込」などの機能タブ",
    "管理画面の設定ページ — 「一般／メンバー／請求／API」のセクション分け",
    "スマホアプリのプロフィール画面 — 「投稿／メディア／いいね」の切り替え",
  ],
  accessibility: [
    "タブ列に role=\"tablist\"、各タブに role=\"tab\"、パネルに role=\"tabpanel\" を設定する",
    "選択中のタブに aria-selected=\"true\" を、タブとパネルは aria-controls / aria-labelledby で相互に関連付ける",
    "矢印キー（←→）でタブ間を移動できるようにし、非選択タブは tabindex=\"-1\" にする（ロービングタブインデックス）",
    "タブ選択と同時にパネルを切り替える「自動activation」か、Enterで確定する「手動activation」かを一貫させる",
    "アクティブ状態を色だけで表現せず、下線や太字を併用する",
    "tabpanel に tabindex=\"0\" を付け、パネル内に到達しやすくする",
  ],
  figma: [
    "タブ1個をstate（active / inactive / hover）のVariantを持つコンポーネントにする",
    "タブ列は横方向のAuto Layout（gap: 4〜8）で組み、下線インジケーターはactive Variantに含める",
    "下線が横に滑るアニメーションは、タブごとのフレームをSmart Animateで繋ぐと再現できる",
    "パネル領域はコンポーネントのInstance Swapで中身を差し替えられるようにしておく",
    "タブが収まらないモバイル幅では、横スクロール＋右端フェードのマスクを掛けた版を用意する",
  ],
  code: {
    html: `<div class="tabs">
  <div role="tablist" aria-label="商品情報" class="tablist">
    <button role="tab" id="tab-1" aria-selected="true" aria-controls="panel-1">
      商品説明
    </button>
    <button role="tab" id="tab-2" aria-selected="false" aria-controls="panel-2"
            tabindex="-1">
      レビュー
    </button>
    <button role="tab" id="tab-3" aria-selected="false" aria-controls="panel-3"
            tabindex="-1">
      Q&amp;A
    </button>
  </div>
  <div role="tabpanel" id="panel-1" aria-labelledby="tab-1" tabindex="0">
    <p>オーガニックコットン100%の定番Tシャツです。</p>
  </div>
  <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" tabindex="0" hidden>
    <p>★4.6（128件のレビュー）</p>
  </div>
  <div role="tabpanel" id="panel-3" aria-labelledby="tab-3" tabindex="0" hidden>
    <p>Q. 洗濯で縮みますか？ A. 縮みにくい加工を施しています。</p>
  </div>
</div>

<style>
  .tablist {
    display: flex; gap: 4px;
    border-bottom: 1px solid #e5e7eb;
  }
  [role="tab"] {
    padding: 12px 16px;
    border: 0; background: none; cursor: pointer;
    font-size: 14px; color: #6b7280;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
  }
  [role="tab"][aria-selected="true"] {
    color: #111827; font-weight: 600;
    border-bottom-color: #4f46e5;
  }
  [role="tabpanel"] { padding: 16px 4px; }
</style>

<script>
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];

  function activate(tab) {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((p) => {
      p.hidden = p.id !== tab.getAttribute("aria-controls");
    });
    tab.focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") activate(tabs[(i + 1) % tabs.length]);
      if (e.key === "ArrowLeft")
        activate(tabs[(i - 1 + tabs.length) % tabs.length]);
    });
  });
</script>`,
    tailwind: `<div class="max-w-xl">
  <!-- タブリスト（下線スタイル） -->
  <div role="tablist" aria-label="商品情報"
       class="flex gap-1 border-b border-gray-200">
    <button
      role="tab"
      aria-selected="true"
      class="-mb-px border-b-2 border-indigo-600 px-4 py-3 text-sm
             font-semibold text-gray-900"
    >
      商品説明
    </button>
    <button
      role="tab"
      aria-selected="false"
      tabindex="-1"
      class="-mb-px border-b-2 border-transparent px-4 py-3 text-sm
             text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      レビュー
    </button>
    <button
      role="tab"
      aria-selected="false"
      tabindex="-1"
      class="-mb-px border-b-2 border-transparent px-4 py-3 text-sm
             text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      Q&amp;A
    </button>
  </div>

  <!-- パネル -->
  <div role="tabpanel" tabindex="0" class="py-4 text-sm text-gray-700">
    オーガニックコットン100%の定番Tシャツです。
  </div>
</div>

<!-- ピル型（セグメント風）のバリエーション -->
<div role="tablist" aria-label="期間"
     class="inline-flex gap-1 rounded-xl bg-gray-100 p-1">
  <button role="tab" aria-selected="true"
          class="rounded-lg bg-white px-4 py-1.5 text-sm font-semibold
                 shadow-sm">
    週間
  </button>
  <button role="tab" aria-selected="false" tabindex="-1"
          class="rounded-lg px-4 py-1.5 text-sm text-gray-500
                 hover:text-gray-700">
    月間
  </button>
  <button role="tab" aria-selected="false" tabindex="-1"
          class="rounded-lg px-4 py-1.5 text-sm text-gray-500
                 hover:text-gray-700">
    年間
  </button>
</div>`,
    react: `"use client";

import { useId, useRef, useState } from "react";

type Tab = { label: string; content: React.ReactNode };

export function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activate = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="max-w-xl">
      <div role="tablist" aria-label={label}
           className="flex gap-1 border-b border-gray-200">
        {tabs.map((tab, i) => {
          const selected = i === activeIndex;
          return (
            <button
              key={i}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={\`\${baseId}-tab-\${i}\`}
              aria-selected={selected}
              aria-controls={\`\${baseId}-panel-\${i}\`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") activate(i + 1);
                if (e.key === "ArrowLeft") activate(i - 1);
                if (e.key === "Home") activate(0);
                if (e.key === "End") activate(tabs.length - 1);
              }}
              className={\`-mb-px border-b-2 px-4 py-3 text-sm transition-colors
                          \${selected
                            ? "border-indigo-600 font-semibold text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}\`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={i}
          role="tabpanel"
          id={\`\${baseId}-panel-\${i}\`}
          aria-labelledby={\`\${baseId}-tab-\${i}\`}
          tabIndex={0}
          hidden={i !== activeIndex}
          className="py-4 text-sm text-gray-700"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

// 使用例
export function ProductTabs() {
  return (
    <Tabs
      label="商品情報"
      tabs={[
        { label: "商品説明", content: "オーガニックコットン100%の定番Tシャツです。" },
        { label: "レビュー", content: "★4.6（128件のレビュー）" },
        { label: "Q&A", content: "Q. 洗濯で縮みますか？ A. 縮みにくい加工です。" },
      ]}
    />
  );
}`,
    shadcn: `// npx shadcn@latest add tabs
// Radix UIベース。矢印キー操作とaria属性は自動で処理される
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function ProductTabs() {
  return (
    <Tabs defaultValue="description" className="max-w-xl">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">商品説明</TabsTrigger>
        <TabsTrigger value="reviews">レビュー</TabsTrigger>
        <TabsTrigger value="qa">Q&amp;A</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="py-4 text-sm">
        オーガニックコットン100%の定番Tシャツです。
      </TabsContent>
      <TabsContent value="reviews" className="py-4 text-sm">
        ★4.6（128件のレビュー）
      </TabsContent>
      <TabsContent value="qa" className="py-4 text-sm">
        Q. 洗濯で縮みますか？ A. 縮みにくい加工を施しています。
      </TabsContent>
    </Tabs>
  );
}`,
  },
  related: ["segmented-control", "accordion", "navbar", "breadcrumb"],
  views: 51200,
  favorites: 2060,
  collections: ["saas-ui", "apple-ui", "admin-ui"],
  gradient: "from-fuchsia-500/15 via-pink-500/10 to-rose-500/15",
  difficulty: 1,
  updatedAt: "2026-07-10",
};
