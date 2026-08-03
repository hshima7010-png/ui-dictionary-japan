import type { UIItem } from "@/types/ui";

export const richMenu: UIItem = {
  slug: "rich-menu",
  name: "Rich Menu",
  nameJa: "リッチメニュー",
  description:
    "LINE公式アカウントのトーク画面下部に固定表示する画像メニュー。主要導線をタップ1回に集約。",
  category: "line-ui",
  tags: ["LINE", "公式アカウント", "Messaging API", "トーク画面", "メニュー"],
  aliases: [
    "LINEのトーク画面の下に出る大きいメニュー",
    "公式アカウントの下のボタンがいっぱいある画像",
    "LINEのキーボードの代わりに出るメニュー",
    "トークルームの下半分のメニュー画像",
    "LINE公式のタップできるメニュー",
  ],
  whatIs: [
    "リッチメニュー（Rich Menu）は、LINE公式アカウントのトーク画面下部に固定表示される、タップ可能な画像メニューです。テキスト中心のトーク画面に対して「リッチ（豊かな表現）」なビジュアルメニューであることが名前の由来で、LINE Messaging APIの公式機能として提供されています。",
    "1枚の画像に対して複数のタップ領域（エリア）を定義し、各エリアにURLを開く・メッセージを送る・ポストバックを送るといったアクションを割り当てます。テンプレートは大（2500×1686px、最大6分割）と小（2500×843px、最大3分割）が基本で、LINE公式アカウント管理画面（Official Account Manager）からノーコードでも、Messaging API経由でプログラムからも設定できます。",
    "トークを開くたびに必ず目に入る「常設のホーム画面」として機能するため、予約・会員証・クーポン・問い合わせといった主要導線の集約先として、飲食・美容・小売など日本のLINE活用ビジネスでは事実上の必須UIになっています。APIを使えばユーザーごとに異なるメニューを出し分けたり、タブ切り替え風の体験を作ることも可能です。",
  ],
  features: [
    "トーク画面下部に固定表示され、キーボード領域の代わりに常時視認される",
    "1枚の画像に最大20個のタップ領域（bounds）を矩形で定義できる（テンプレートは6分割・3分割が定番）",
    "各領域にURI・メッセージ送信・ポストバック・日時選択などのアクションを割り当てられる",
    "Messaging APIでユーザー単位の出し分け（richmenu link）ができ、会員ランク別メニューなどを実現できる",
    "ポストバック＋メニュー切替APIで、タブ切り替えのような多層メニューを構成できる",
    "画像サイズは2500×1686px（大）または2500×843px（小）、1MB以下のJPEG/PNGが要件",
  ],
  merits: [
    "トークを開くたびに必ず表示されるため、主要導線への到達がタップ1回で完結する",
    "予約・クーポン・会員証などの利用率が上がり、ブロック率の低下にも寄与しやすい",
    "テキストのやり取りが苦手なユーザーでも、見て押すだけで目的を果たせる",
    "管理画面からノーコードで設定でき、期間指定で切り替え予約もできる",
    "API連携でユーザー属性別の出し分けができ、パーソナライズ施策の土台になる",
  ],
  demerits: [
    "トーク画面の下半分近くを占有し、会話メッセージの表示領域が狭くなる",
    "画像1枚で表現するため、テキスト変更ひとつでも画像の作り直しが必要",
    "タップ領域は矩形のみで、画像のデザインと領域定義がずれると誤タップが多発する",
    "画像内の文字は機械可読でなく、視覚障害のあるユーザーへの情報保障が難しい",
    "6分割を超える情報を詰め込むと1つ1つのタップ領域が小さくなり、押しにくくなる",
  ],
  bestPractices: [
    "掲載するのは「ユーザーが繰り返し使う導線」に絞る。予約・クーポン・会員証・問い合わせが鉄板構成",
    "最重要のアクションは左上（視線の起点）に置き、面積も最大にする",
    "画像内の文言は短く大きく。スマホの実表示幅では2500px画像がおよそ1/3に縮小されることを想定する",
    "タップ領域（bounds）はデザイン上のボタン矩形より少し広めに取り、境界の誤タップを減らす",
    "ポストバックを使う場合はdisplayTextを設定し、タップ結果がトークに残るようにして操作の見通しを良くする",
    "キャンペーン時は期間指定で切り替えを予約し、終了後に古いメニューが残らないようにする",
  ],
  useCases: [
    "マクドナルド公式LINE — クーポン・モバイルオーダーへの導線を大型リッチメニューに集約",
    "美容室・サロンの予約 — 「予約する」「メニュー・料金」「アクセス」の3分割構成",
    "ユニクロなど小売 — 会員証バーコード・チラシ・オンラインストアへの導線",
    "自治体の公式アカウント — ごみ分別検索・防災情報・手続き案内をタブ切替式で提供",
    "ECブランド — 会員ランク別にリッチメニューを出し分け、限定クーポンを訴求",
  ],
  accessibility: [
    "画像内の情報はメニュー名やaltText、テキストメッセージなど機械可読な代替経路でも提供する",
    "タップ領域は最小でも実表示で44×44pt相当を確保する（分割しすぎない）",
    "画像内テキストは背景とのコントラスト比4.5:1以上を確保し、小さすぎる文字を避ける",
    "ポストバックのdisplayTextで「クーポンを開きました」など操作結果を可視化する",
    "リッチメニューだけに依存せず、テキスト入力（例：「予約」と送信）でも同じ機能に到達できるようにする",
  ],
  figma: [
    "2500×1686px（大）・2500×843px（小）のFrameをテンプレートとして用意し、6分割・3分割のグリッドを引く",
    "タップ領域ごとにAuto Layoutのセルを組み、アイコン＋ラベルをComponent化して統一感を出す",
    "実機プレビュー相当（幅375px程度に縮小）で文字の可読性を必ず確認する",
    "書き出しはJPEG/PNGで1MB以下に収める。写真を使う場合は圧縮率も検証する",
    "boundsの座標指定（x, y, width, height）に使えるよう、各セルの座標をデザイン仕様としてメモしておく",
  ],
  code: {
    html: `// LINE Messaging API — リッチメニュー作成のJSON設定例
// POST https://api.line.me/v2/bot/richmenu
{
  "size": { "width": 2500, "height": 1686 },
  "selected": true,
  "name": "main-menu-2026-07",
  "chatBarText": "メニューを開く",
  "areas": [
    {
      "bounds": { "x": 0, "y": 0, "width": 1250, "height": 843 },
      "action": {
        "type": "uri",
        "label": "予約する",
        "uri": "https://example.com/reserve"
      }
    },
    {
      "bounds": { "x": 1250, "y": 0, "width": 1250, "height": 843 },
      "action": {
        "type": "message",
        "label": "クーポン",
        "text": "クーポンを見る"
      }
    },
    {
      "bounds": { "x": 0, "y": 843, "width": 833, "height": 843 },
      "action": {
        "type": "postback",
        "label": "会員証",
        "data": "action=member_card",
        "displayText": "会員証を開く"
      }
    },
    {
      "bounds": { "x": 833, "y": 843, "width": 834, "height": 843 },
      "action": {
        "type": "uri",
        "label": "アクセス",
        "uri": "https://example.com/access"
      }
    },
    {
      "bounds": { "x": 1667, "y": 843, "width": 833, "height": 843 },
      "action": {
        "type": "postback",
        "label": "メニュー切替",
        "data": "action=switch_menu&to=sub",
        "displayText": "サブメニューへ"
      }
    }
  ]
}

// 作成後の流れ:
// 1. 画像アップロード: POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content
// 2. デフォルト設定:   POST https://api.line.me/v2/bot/user/all/richmenu/{richMenuId}
// 3. ユーザー個別適用: POST https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId}`,
    tailwind: `<!-- リッチメニューの見た目をWeb上で再現するプレビューモック -->
<div class="mx-auto w-full max-w-sm overflow-hidden rounded-t-2xl
            border border-gray-200 shadow-lg">
  <!-- トーク画面（省略表示） -->
  <div class="flex h-40 items-end bg-[#8cabd8] p-3">
    <div class="rounded-2xl bg-white px-4 py-2 text-sm">
      ご予約はメニューからどうぞ
    </div>
  </div>
  <!-- リッチメニュー本体（2500×1686の縦横比 = aspect-[1250/843]） -->
  <div class="grid aspect-[1250/843] grid-cols-6 grid-rows-2 gap-px
              bg-gray-200 text-white">
    <button class="col-span-3 flex flex-col items-center justify-center
                   gap-1 bg-amber-600 hover:bg-amber-700">
      <span class="text-2xl" aria-hidden="true">📅</span>
      <span class="text-sm font-bold">予約する</span>
    </button>
    <button class="col-span-3 flex flex-col items-center justify-center
                   gap-1 bg-orange-600 hover:bg-orange-700">
      <span class="text-2xl" aria-hidden="true">🎟️</span>
      <span class="text-sm font-bold">クーポン</span>
    </button>
    <button class="col-span-2 flex flex-col items-center justify-center
                   gap-1 bg-amber-700 hover:bg-amber-800">
      <span class="text-xl" aria-hidden="true">💳</span>
      <span class="text-xs font-bold">会員証</span>
    </button>
    <button class="col-span-2 flex flex-col items-center justify-center
                   gap-1 bg-orange-700 hover:bg-orange-800">
      <span class="text-xl" aria-hidden="true">📍</span>
      <span class="text-xs font-bold">アクセス</span>
    </button>
    <button class="col-span-2 flex flex-col items-center justify-center
                   gap-1 bg-amber-800 hover:bg-amber-900">
      <span class="text-xl" aria-hidden="true">💬</span>
      <span class="text-xs font-bold">問い合わせ</span>
    </button>
  </div>
</div>`,
    react: `"use client";

// LINE公式アカウント運用ツールの「リッチメニュー管理画面」実装例。
// タップ領域の選択・アクション編集を行い、Messaging API用JSONを生成します。
import { useMemo, useState } from "react";

type Area = {
  id: string;
  label: string;
  bounds: { x: number; y: number; width: number; height: number };
  action:
    | { type: "uri"; uri: string }
    | { type: "message"; text: string }
    | { type: "postback"; data: string; displayText: string };
};

const TEMPLATE_LARGE = { width: 2500, height: 1686 };

export function RichMenuEditor({ initialAreas }: { initialAreas: Area[] }) {
  const [areas, setAreas] = useState<Area[]>(initialAreas);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const apiPayload = useMemo(
    () => ({
      size: TEMPLATE_LARGE,
      selected: true,
      name: \`menu-\${new Date().toISOString().slice(0, 10)}\`,
      chatBarText: "メニューを開く",
      areas: areas.map(({ bounds, action }) => ({ bounds, action })),
    }),
    [areas]
  );

  const selected = areas.find((a) => a.id === selectedId);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      {/* プレビュー：タップ領域を可視化 */}
      <div
        role="group"
        aria-label="リッチメニュープレビュー"
        className="relative grid aspect-[2500/1686] grid-cols-6 grid-rows-2
                   gap-px overflow-hidden rounded-xl bg-gray-200"
      >
        {areas.map((area) => (
          <button
            key={area.id}
            type="button"
            aria-pressed={selectedId === area.id}
            aria-label={\`タップ領域: \${area.label}\`}
            onClick={() => setSelectedId(area.id)}
            style={{
              gridColumn: \`span \${Math.round(
                (area.bounds.width / TEMPLATE_LARGE.width) * 6
              )}\`,
            }}
            className={\`flex items-center justify-center text-sm font-semibold
                        \${
                          selectedId === area.id
                            ? "bg-amber-500 text-white ring-2 ring-amber-700"
                            : "bg-amber-100 text-amber-900 hover:bg-amber-200"
                        }\`}
          >
            {area.label}
          </button>
        ))}
      </div>

      {/* 選択領域の編集とJSON出力 */}
      <div className="space-y-4">
        {selected ? (
          <label className="block text-sm font-medium">
            領域ラベル
            <input
              value={selected.label}
              onChange={(e) =>
                setAreas((prev) =>
                  prev.map((a) =>
                    a.id === selected.id ? { ...a, label: e.target.value } : a
                  )
                )
              }
              className="mt-1 w-full rounded-lg border border-gray-300
                         px-3 py-2"
            />
          </label>
        ) : (
          <p className="text-sm text-gray-500">
            プレビューのタップ領域を選択してください。
          </p>
        )}
        <div>
          <h3 className="mb-2 text-sm font-semibold">Messaging API payload</h3>
          <pre
            aria-label="生成されたJSON"
            className="max-h-72 overflow-auto rounded-xl bg-gray-900 p-4
                       text-xs text-amber-200"
          >
            {JSON.stringify(apiPayload, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}`,
    shadcn: `// shadcn/uiに専用のRich Menuコンポーネントはありません（LINE固有のUIです）。
// 管理画面でのテンプレート選択UIをTabs / Cardで組む例です。
// npx shadcn@latest add tabs card
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RichMenuTemplatePicker() {
  return (
    <Tabs defaultValue="large">
      <TabsList>
        <TabsTrigger value="large">大（2500×1686）</TabsTrigger>
        <TabsTrigger value="compact">小（2500×843）</TabsTrigger>
      </TabsList>
      <TabsContent value="large">
        <Card>
          <CardHeader>
            <CardTitle>6分割テンプレート</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              role="img"
              aria-label="6分割リッチメニューのプレビュー"
              className="grid aspect-[2500/1686] grid-cols-3 grid-rows-2
                         gap-1 rounded-lg bg-muted p-1"
            >
              {["予約", "クーポン", "会員証", "アクセス", "商品一覧", "問い合わせ"].map(
                (label) => (
                  <div
                    key={label}
                    className="flex items-center justify-center rounded-md
                               bg-background text-sm font-medium"
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="compact">
        <Card>
          <CardHeader>
            <CardTitle>3分割テンプレート</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              role="img"
              aria-label="3分割リッチメニューのプレビュー"
              className="grid aspect-[2500/843] grid-cols-3 gap-1 rounded-lg
                         bg-muted p-1"
            >
              {["予約", "クーポン", "アクセス"].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-center rounded-md
                             bg-background text-sm font-medium"
                >
                  {label}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`,
  },
  related: ["bottom-navigation", "chat-input", "message-bubble", "hamburger-menu"],
  views: 6400,
  favorites: 290,
  collections: ["ec-ui", "mobile-ui"],
  gradient: "from-amber-500/15 via-orange-500/10 to-green-500/15",
  difficulty: 3,
  updatedAt: "2026-07-11",
};
