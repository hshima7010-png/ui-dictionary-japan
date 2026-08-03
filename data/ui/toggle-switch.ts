import type { UIItem } from "@/types/ui";

export const toggleSwitch: UIItem = {
  slug: "toggle-switch",
  name: "Toggle Switch",
  nameJa: "トグルスイッチ",
  description:
    "オン／オフを即座に切り替えるスイッチ型UI。設定画面の定番で、変更が即反映されるのが特徴。",
  category: "inputs",
  tags: ["オンオフ", "設定", "スイッチ", "即時反映"],
  aliases: [
    "オンオフを切り替えるやつ",
    "設定画面のスイッチ",
    "横にスライドするボタン",
    "緑になったらオンのやつ",
    "通知をオンにするあれ",
    "丸が左右に動くスイッチ",
  ],
  whatIs: [
    "トグルスイッチ（Toggle Switch）は、オン／オフの2状態を切り替えるためのUIコンポーネントです。「toggle」は「切り替える」という意味の英語で、物理世界の電灯スイッチ（特に欧米で一般的なロッカースイッチやスライドスイッチ）の見た目と操作感をそのまま画面上に再現したことに名前が由来します。",
    "iPhoneの設定アプリで広く普及したパターンで、丸いつまみ（thumb）が左右にスライドし、トラックの色がグレーから緑や青に変わることで状態を伝えます。最大の特徴は「切り替えた瞬間に設定が反映される」ことで、保存ボタンを必要とするチェックボックスとの本質的な違いはここにあります。",
    "そのため「機内モード」「通知を受け取る」「ダークモード」のような、即時に効果が現れるシステム設定に適しています。逆にフォーム送信を伴う同意確認などにトグルスイッチを使うと「もう反映されたのか」が曖昧になるため、チェックボックスとの使い分けがUI設計の重要な判断ポイントになります。",
  ],
  features: [
    "オン／オフの2状態のみを持ち、つまみのスライドで切り替える",
    "状態変化が色（グレー→緑・青）と位置の両方で表現される",
    "切り替えと同時に設定が即反映される（保存ボタン不要）のが原則",
    "内部的にはrole=\"switch\"＋aria-checked、またはchecked状態のcheckbox型inputで実装される",
    "ラベルは「通知を受け取る」のようにオン時の状態を表す文言にする",
    "スライドアニメーション（150〜200ms）で切り替えの気持ちよさを演出できる",
  ],
  merits: [
    "オン／オフという状態がひと目で分かり、誤解の余地が小さい",
    "1タップで完結し、保存操作が不要なため操作コストが最小",
    "モバイルでの親指操作と相性が良く、タップ領域も確保しやすい",
    "設定画面に並べたときの視認性・整列性が高い",
    "物理スイッチのメタファーにより直感的に理解される",
  ],
  demerits: [
    "「即時反映」の期待を裏切る実装（保存ボタン併用）は強い混乱を招く",
    "色だけで状態を伝えると、色覚多様性のあるユーザーには判別しづらい",
    "どちらがオンか分かりにくいデザイン（中間色・曖昧な位置）が生まれやすい",
    "3つ以上の選択肢には対応できず、セグメンテッドコントロール等が必要になる",
    "否定形のラベル（「通知を無効にする」）と組み合わせると意味が反転して混乱する",
  ],
  bestPractices: [
    "切り替えたら即座に反映させる。反映に保存ボタンが必要ならチェックボックスを使う",
    "ラベルは肯定形・状態表現（「メール通知」など）にし、否定形を避ける",
    "オン状態の色はブランドカラーまたは緑系にし、コントラストを確保する",
    "色だけに頼らず、つまみの位置とオン時のチェックアイコン等で状態を二重に伝える",
    "反映に時間がかかる場合はローディング状態を用意し、楽観的更新＋失敗時ロールバックを検討する",
    "ラベルのクリック／タップでも切り替えられるよう、labelと関連付ける",
  ],
  useCases: [
    "iOSの設定アプリ — 機内モード・Wi-Fi・Bluetoothなどのオンオフ",
    "Slackの通知設定 — チャンネルごとの通知オンオフ",
    "GitHubのリポジトリ設定 — Issues / Wiki などの機能の有効化",
    "各種SaaSのダークモード切り替え — テーマの即時変更",
    "ECサイトの会員設定 — メールマガジンの受信設定",
  ],
  accessibility: [
    "role=\"switch\"とaria-checkedで、スイッチであることと状態を伝える",
    "<button role=\"switch\">またはinput[type=\"checkbox\"] + switchロールで実装し、Space（buttonならEnterも）で切り替え可能にする",
    "ラベルはaria-labelledbyまたは<label>で関連付け、ラベルクリックでも操作できるようにする",
    "オン／オフを色だけで表現せず、位置・アイコンなど複数の手がかりを用意する",
    "prefers-reduced-motionが有効な環境ではスライドアニメーションを無効化する",
    "フォーカスリングをつまみではなくスイッチ全体に表示し、視認性を確保する",
  ],
  figma: [
    "トラック（44×24px程度）とつまみ（20px円）をAuto Layoutで組み、paddingで位置を制御する",
    "「checked: boolean」のVariantを作り、Smart Animate（Ease Out, 150ms）でスライドを再現する",
    "オン／オフそれぞれのトラック色をVariables化し、ダークモードにも対応させる",
    "disabled状態のVariantも用意し、opacityではなく専用の色トークンで表現する",
    "ラベルと説明文を含む「設定行」コンポーネントとしてまとめると実用性が高い",
  ],
  code: {
    html: `<label class="switch-row">
  <span class="switch-label">メール通知</span>
  <input type="checkbox" role="switch" class="switch-input" checked />
  <span class="switch-track" aria-hidden="true">
    <span class="switch-thumb"></span>
  </span>
</label>

<style>
  .switch-row {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }
  .switch-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .switch-track {
    width: 44px;
    height: 24px;
    border-radius: 9999px;
    background: #d1d5db;
    padding: 2px;
    transition: background-color 0.15s;
  }
  .switch-thumb {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: transform 0.15s;
  }
  .switch-input:checked + .switch-track {
    background: #2563eb;
  }
  .switch-input:checked + .switch-track .switch-thumb {
    transform: translateX(20px);
  }
  .switch-input:focus-visible + .switch-track {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
</style>`,
    tailwind: `<label class="inline-flex cursor-pointer items-center gap-3">
  <span class="text-sm font-medium">メール通知</span>
  <input type="checkbox" role="switch" class="peer sr-only" checked />
  <span
    aria-hidden="true"
    class="relative h-6 w-11 rounded-full bg-gray-300 transition
           after:absolute after:left-0.5 after:top-0.5 after:size-5
           after:rounded-full after:bg-white after:shadow after:transition
           peer-checked:bg-blue-600 peer-checked:after:translate-x-5
           peer-focus-visible:outline peer-focus-visible:outline-2
           peer-focus-visible:outline-offset-2
           peer-focus-visible:outline-blue-600"
  ></span>
</label>`,
    react: `"use client";

import { useId, useState } from "react";

export function ToggleSwitch({
  label,
  defaultChecked = false,
  onChange,
}: {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const [checked, setChecked] = useState(defaultChecked);
  const labelId = useId();

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <div className="flex items-center gap-3">
      <span id={labelId} className="text-sm font-medium">
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        onClick={toggle}
        className={\`relative h-6 w-11 rounded-full transition
                    focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-blue-600
                    \${checked ? "bg-blue-600" : "bg-gray-300"}\`}
      >
        <span
          aria-hidden
          className={\`absolute left-0.5 top-0.5 size-5 rounded-full bg-white
                      shadow transition-transform
                      \${checked ? "translate-x-5" : ""}\`}
        />
      </button>
    </div>
  );
}`,
    shadcn: `// npx shadcn@latest add switch label
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function NotificationSwitch() {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">
      <div className="space-y-0.5">
        <Label htmlFor="email-notify">メール通知</Label>
        <p className="text-sm text-muted-foreground">
          新着コメントをメールでお知らせします。
        </p>
      </div>
      <Switch id="email-notify" defaultChecked />
    </div>
  );
}`,
  },
  related: ["checkbox", "segmented-control", "settings-page", "radio-button"],
  views: 33400,
  favorites: 1420,
  collections: ["apple-ui", "saas-ui", "mobile-ui"],
  gradient: "from-blue-600/15 via-sky-500/10 to-indigo-400/15",
  difficulty: 2,
  updatedAt: "2026-07-05",
};
