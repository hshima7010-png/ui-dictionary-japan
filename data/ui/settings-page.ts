import type { UIItem } from "@/types/ui";

export const settingsPage: UIItem = {
  slug: "settings-page",
  name: "Settings Page",
  nameJa: "設定画面",
  description:
    "アカウントや通知などの設定項目をカテゴリ分けして管理する、アプリの管制室となる画面。",
  category: "settings",
  tags: ["設定", "フォーム", "アカウント管理", "サイドバー"],
  aliases: [
    "歯車マークから開く画面",
    "アカウント情報を変えるところ",
    "通知のオンオフを切り替える画面",
    "環境設定のページ",
    "パスワードを変更する画面",
    "各種設定がまとまっているところ",
  ],
  whatIs: [
    "設定画面（Settings Page）は、アカウント情報・通知・外観・セキュリティ・請求など、アプリケーションのあらゆる設定項目をカテゴリごとに整理して提供する画面です。英語の「Settings（設定）」がそのまま名前になっており、歯車アイコンが世界共通のシンボルとして定着しています。利用頻度は高くないものの、ユーザーがプロダクトを「自分のもの」にするための管制室として、すべてのアプリに欠かせない画面です。",
    "定番のレイアウトは、左にカテゴリのナビゲーション（サイドバーまたは縦タブ）、右に設定フォームを置く2カラム構成です。Slackの環境設定はモーダル内にこの2カラムを展開し、Notionも設定モーダルでアカウント・ワークスペース設定を左のナビで切り替えます。Linearの設定画面は専用ページとして開き、キーボード操作と検索性を重視した構成が特徴です。iOSの「設定」アプリのような、リスト を掘り進むドリルダウン型もモバイルの定番です。",
    "設定画面の設計で最も重要な論点は「変更の保存方式」です。トグル操作を即座に反映する自動保存型と、「保存」ボタンで明示的に確定させる型のどちらを選ぶか、そしてアカウント削除のような危険な操作をどう隔離するか。地味に見えて、情報設計とフォーム設計の総合力が問われる画面です。",
  ],
  features: [
    "アカウント・通知・外観・セキュリティなど、設定をカテゴリ単位でグループ化する",
    "サイドバー＋コンテンツの2カラム、またはモバイル向けのドリルダウン型で構成される",
    "トグルスイッチ・セレクト・テキスト入力など多様なフォームコントロールを内包する",
    "変更の反映方式として「即時保存」と「保存ボタン」の2方式がある",
    "アカウント削除などの危険な操作を「Danger Zone」として分離して配置できる",
    "設定項目が多い場合は設定内検索を備えることがある（Slack・VS Codeなど）",
  ],
  merits: [
    "設定を1か所に集約することで、ユーザーが「困ったら設定を見る」と迷わず行動できる",
    "カテゴリ分けにより、項目数が増えても破綻しにくい拡張性がある",
    "ユーザーが挙動を自分好みに調整でき、プロダクトへの定着・愛着につながる",
    "通知やプライバシーの制御をユーザー自身に委ねることで、信頼性を高められる",
    "2カラム構成は多くのSaaSで共通しており、ユーザーが操作方法を学習済み",
  ],
  demerits: [
    "項目が増えるほどカテゴリ設計が難しくなり、目的の設定が見つからない問題が起きやすい",
    "即時保存か保存ボタンかの方針が画面内で混在すると、保存されたか不安を生む",
    "滅多に開かれない画面のため、デザインやコピーの品質改善が後回しにされがち",
    "設定項目の説明が不足すると、変更の影響が分からず操作をためらわせる",
    "多階層のドリルダウン型は、現在地を見失いやすい",
  ],
  bestPractices: [
    "カテゴリは「アカウント」「通知」「外観」など、ユーザーの言葉で7個前後に整理する",
    "各設定項目には「何が起きるか」が分かる1行の補足説明を添える",
    "トグルは即時保存、複数フィールドのフォームは保存ボタンと、方式を項目の性質で統一する",
    "保存や変更の成功はトーストなどで必ずフィードバックする",
    "アカウント削除などの破壊的操作はページ最下部の「Danger Zone」に隔離し、確認ダイアログを挟む",
    "未保存の変更がある状態での離脱時には、破棄確認を表示する",
  ],
  useCases: [
    "Slack — モーダル内の2カラムで環境設定・通知・テーマを切り替え",
    "Notion — 設定モーダルでアカウントとワークスペースの設定を左ナビで整理",
    "Linear — 専用ページ型の設定画面。キーボードナビゲーションと検索性を重視",
    "GitHub — Settingsページの縦ナビと「Danger Zone」による危険操作の隔離",
    "iOSの設定アプリ — リストを掘り進むドリルダウン型のモバイル標準パターン",
  ],
  accessibility: [
    "各設定セクションを見出し（h2/h3）とfieldset/legendで構造化し、支援技術で節の区切りを伝える",
    "すべてのフォームコントロールに <label> を関連付け、補足説明は aria-describedby で紐付ける",
    "トグルスイッチは role=\"switch\" と aria-checked で状態を伝える",
    "サイドバーのナビゲーションは <nav> でマークアップし、現在のカテゴリに aria-current=\"page\" を付ける",
    "保存成功・失敗のフィードバックは aria-live リージョンで読み上げ可能にする",
    "キーボードだけですべての設定変更が完了できることを確認する",
  ],
  figma: [
    "サイドバー＋コンテンツの2カラムをAuto Layoutで組み、コンテンツ側の最大幅（640〜720px）を決めておく",
    "「ラベル＋説明＋コントロール」の設定行をコンポーネント化し、コントロール部分をSwap Propertyにする",
    "トグルのオン／オフ、入力のエラー状態などをVariantsで管理し、フォームの全状態を網羅する",
    "モバイル用にドリルダウン型（カテゴリ一覧→詳細）のフレームも用意し、遷移をプロトタイプで確認する",
    "Danger Zoneセクションは赤系の枠線で区別し、通常設定と混ざらないスタイルを定義する",
  ],
  code: {
    html: `<div class="settings">
  <nav aria-label="設定カテゴリ">
    <a href="#account" aria-current="page">アカウント</a>
    <a href="#notifications">通知</a>
    <a href="#appearance">外観</a>
  </nav>

  <main>
    <section aria-labelledby="account-heading">
      <h2 id="account-heading">アカウント</h2>

      <div class="row">
        <div>
          <label for="display-name">表示名</label>
          <p id="display-name-desc" class="desc">他のメンバーに表示される名前です。</p>
        </div>
        <input id="display-name" type="text" value="山田 太郎"
               aria-describedby="display-name-desc" />
      </div>

      <div class="row">
        <div>
          <span id="email-notify-label">メール通知</span>
          <p id="email-notify-desc" class="desc">重要な更新をメールで受け取ります。</p>
        </div>
        <button type="button" role="switch" aria-checked="true"
                aria-labelledby="email-notify-label"
                aria-describedby="email-notify-desc" class="switch">
          <span class="thumb"></span>
        </button>
      </div>

      <button type="submit" class="save">変更を保存</button>
    </section>
  </main>
</div>

<style>
  .settings { display: grid; grid-template-columns: 200px 1fr; gap: 40px;
              max-width: 960px; margin: 0 auto; padding: 40px 24px; }
  nav { display: flex; flex-direction: column; gap: 4px; }
  nav a { padding: 8px 12px; border-radius: 8px; color: #374151;
          text-decoration: none; font-size: 14px; }
  nav a[aria-current="page"] { background: #f3e8ff; color: #7c3aed; font-weight: 600; }
  h2 { font-size: 20px; margin-bottom: 24px; }
  .row { display: flex; justify-content: space-between; align-items: center;
         gap: 24px; padding: 16px 0; border-bottom: 1px solid #f3f4f6; }
  label, #email-notify-label { font-weight: 600; font-size: 14px; }
  .desc { color: #6b7280; font-size: 13px; margin-top: 2px; }
  input { border: 1px solid #d1d5db; border-radius: 8px; padding: 8px 12px; }
  .switch { width: 44px; height: 24px; border-radius: 9999px; border: none;
            background: #7c3aed; position: relative; cursor: pointer; }
  .switch[aria-checked="false"] { background: #d1d5db; }
  .thumb { position: absolute; top: 2px; left: 22px; width: 20px; height: 20px;
           border-radius: 50%; background: #fff; transition: left 0.2s; }
  .switch[aria-checked="false"] .thumb { left: 2px; }
  .save { margin-top: 24px; padding: 10px 20px; border: none; border-radius: 8px;
          background: #7c3aed; color: #fff; font-weight: 600; cursor: pointer; }
</style>`,
    tailwind: `<div class="mx-auto grid max-w-5xl grid-cols-[200px_1fr] gap-10 px-6 py-10">
  <nav aria-label="設定カテゴリ" class="flex flex-col gap-1">
    <a href="#account" aria-current="page"
       class="rounded-lg bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-700">
      アカウント
    </a>
    <a href="#notifications"
       class="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
      通知
    </a>
    <a href="#appearance"
       class="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
      外観
    </a>
  </nav>

  <main class="max-w-2xl">
    <section aria-labelledby="account-heading">
      <h2 id="account-heading" class="text-xl font-bold">アカウント</h2>

      <div class="mt-6 flex items-center justify-between gap-6 border-b
                  border-gray-100 py-4">
        <div>
          <label for="display-name" class="text-sm font-semibold">表示名</label>
          <p id="display-name-desc" class="mt-0.5 text-xs text-gray-500">
            他のメンバーに表示される名前です。
          </p>
        </div>
        <input id="display-name" type="text" value="山田 太郎"
               aria-describedby="display-name-desc"
               class="rounded-lg border border-gray-300 px-3 py-2 text-sm
                      focus:border-violet-500 focus:outline-none
                      focus:ring-2 focus:ring-violet-200" />
      </div>

      <div class="flex items-center justify-between gap-6 border-b
                  border-gray-100 py-4">
        <div>
          <span id="email-notify-label" class="text-sm font-semibold">メール通知</span>
          <p class="mt-0.5 text-xs text-gray-500">重要な更新をメールで受け取ります。</p>
        </div>
        <button type="button" role="switch" aria-checked="true"
                aria-labelledby="email-notify-label"
                class="relative h-6 w-11 rounded-full bg-violet-600
                       transition-colors aria-[checked=false]:bg-gray-300">
          <span class="absolute left-[22px] top-0.5 size-5 rounded-full
                       bg-white shadow transition-all"></span>
        </button>
      </div>

      <button type="submit"
              class="mt-6 rounded-lg bg-violet-600 px-5 py-2.5 text-sm
                     font-semibold text-white hover:bg-violet-700">
        変更を保存
      </button>
    </section>
  </main>
</div>`,
    react: `"use client";

import { useState } from "react";

const categories = [
  { id: "account", label: "アカウント" },
  { id: "notifications", label: "通知" },
  { id: "appearance", label: "外観" },
] as const;

export function SettingsPage() {
  const [active, setActive] = useState<string>("account");
  const [emailNotify, setEmailNotify] = useState(true);
  const [savedMessage, setSavedMessage] = useState("");

  const handleSave = () => {
    // ここでAPIに保存
    setSavedMessage("設定を保存しました");
    setTimeout(() => setSavedMessage(""), 3000);
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-[200px_1fr]">
      <nav aria-label="設定カテゴリ" className="flex flex-col gap-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            aria-current={active === cat.id ? "page" : undefined}
            onClick={() => setActive(cat.id)}
            className={\`rounded-lg px-3 py-2 text-left text-sm transition
                        \${active === cat.id
                          ? "bg-violet-50 font-semibold text-violet-700"
                          : "text-gray-700 hover:bg-gray-50"}\`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <main className="max-w-2xl">
        <section aria-labelledby="settings-heading">
          <h2 id="settings-heading" className="text-xl font-bold">
            {categories.find((c) => c.id === active)?.label}
          </h2>

          <div className="mt-6 flex items-center justify-between gap-6 border-b border-gray-100 py-4">
            <div>
              <label htmlFor="display-name" className="text-sm font-semibold">
                表示名
              </label>
              <p id="display-name-desc" className="mt-0.5 text-xs text-gray-500">
                他のメンバーに表示される名前です。
              </p>
            </div>
            <input
              id="display-name"
              type="text"
              defaultValue="山田 太郎"
              aria-describedby="display-name-desc"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm
                         focus:border-violet-500 focus:outline-none
                         focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <div className="flex items-center justify-between gap-6 border-b border-gray-100 py-4">
            <div>
              <span id="email-notify-label" className="text-sm font-semibold">
                メール通知
              </span>
              <p className="mt-0.5 text-xs text-gray-500">
                重要な更新をメールで受け取ります。
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={emailNotify}
              aria-labelledby="email-notify-label"
              onClick={() => setEmailNotify((v) => !v)}
              className={\`relative h-6 w-11 rounded-full transition-colors
                          \${emailNotify ? "bg-violet-600" : "bg-gray-300"}\`}
            >
              <span
                className={\`absolute top-0.5 size-5 rounded-full bg-white shadow
                            transition-all \${emailNotify ? "left-[22px]" : "left-0.5"}\`}
              />
            </button>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="mt-6 rounded-lg bg-violet-600 px-5 py-2.5 text-sm
                       font-semibold text-white hover:bg-violet-700"
          >
            変更を保存
          </button>
          <p role="status" aria-live="polite" className="mt-3 text-sm text-green-600">
            {savedMessage}
          </p>
        </section>
      </main>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add tabs card input label switch button separator
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SettingsPage() {
  return (
    <Tabs defaultValue="account" className="mx-auto max-w-3xl px-6 py-10">
      <TabsList>
        <TabsTrigger value="account">アカウント</TabsTrigger>
        <TabsTrigger value="notifications">通知</TabsTrigger>
        <TabsTrigger value="appearance">外観</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>アカウント</CardTitle>
            <CardDescription>プロフィールと基本情報を管理します。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="display-name">表示名</Label>
              <Input id="display-name" defaultValue="山田 太郎" />
              <p className="text-xs text-muted-foreground">
                他のメンバーに表示される名前です。
              </p>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notify">メール通知</Label>
                <p className="text-xs text-muted-foreground">
                  重要な更新をメールで受け取ります。
                </p>
              </div>
              <Switch id="email-notify" defaultChecked />
            </div>

            <Button>変更を保存</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`,
  },
  related: ["toggle-switch", "tabs", "sidebar", "form-validation"],
  views: 45300,
  favorites: 1990,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-violet-500/15 via-indigo-500/10 to-purple-500/15",
  difficulty: 3,
  updatedAt: "2026-07-02",
};
