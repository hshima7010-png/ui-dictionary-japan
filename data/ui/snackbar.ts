import type { UIItem } from "@/types/ui";

export const snackbar: UIItem = {
  slug: "snackbar",
  name: "Snackbar",
  nameJa: "スナックバー",
  description:
    "画面下部に一時表示される短い通知バー。アンドゥなど1つのアクションを添えられる。",
  category: "toast",
  tags: ["通知", "一時表示", "Material Design", "アンドゥ"],
  aliases: [
    "画面の下にニュッと出てくる通知",
    "削除しましたって下に出るバー",
    "元に戻すボタン付きの通知",
    "数秒で消える黒い帯",
    "Androidでよく見る下の通知",
    "下からスライドしてくるメッセージ",
  ],
  whatIs: [
    "スナックバー（Snackbar）は、操作の結果（「メールをアーカイブしました」など）を画面下部に数秒間だけ表示する、小さな帯状の通知コンポーネントです。名前はGoogleが2014年に発表したMaterial Designに由来します。軽食を出す「スナックバー（軽食堂）」のカウンターから料理がさっと出てくるイメージと、既存の「トースト」（トースターからパンが飛び出す様子に由来）を引き継ぐ命名です。",
    "トーストとの違いは「アクションを1つ持てること」です。Material Designの定義では、スナックバーは本文テキストに加えて「元に戻す」「再試行」といった任意のアクションボタンを1つだけ添えられます。削除操作の直後にアンドゥを提示することで、確認ダイアログを出さずに誤操作から回復できる、モダンUXの要となるパターンです。",
    "表示は一度に1つまで、数秒（一般に4〜10秒）で自動的に消える、ユーザーの操作をブロックしない、という3つの性質が設計の柱です。恒常的に表示し続けたい情報はバナー、複数の通知を蓄積したい場合は通知センターと、ライフサイクルの長さによって使い分けます。",
  ],
  features: [
    "画面下部（モバイルは中央下、デスクトップは左下が多い）にスライドインで表示される",
    "4〜10秒程度で自動的に消える一時的（transient）な通知",
    "「元に戻す」「再試行」など任意のアクションボタンを1つだけ持てる",
    "ユーザーの操作をブロックせず、表示中も画面の他の部分を触れる",
    "同時表示は1つまでで、新しい通知が来ると前のものと入れ替わる",
    "FAB（フローティングアクションボタン）と重ならないよう押し上げるのがMaterial Designの流儀",
  ],
  merits: [
    "操作の成功を即座にフィードバックでき、ユーザーの不安を減らせる",
    "アンドゥを添えることで、確認ダイアログなしでも誤操作から回復できる",
    "画面をブロックしないため、作業の流れを一切中断しない",
    "自動的に消えるので、ユーザーが閉じる操作をする必要がない",
    "実装パターンがMaterial Designで厳密に定義されており、迷いなく設計できる",
  ],
  demerits: [
    "数秒で消えるため、見逃すと情報が失われる（重要な情報の伝達には不向き）",
    "自動で消える通知はWCAGのタイムアウト要件と緊張関係にあり、表示時間の設計が難しい",
    "アクションボタンの押下猶予が短く、高齢者や運動機能に制約のあるユーザーには厳しい",
    "画面下部はモバイルのキーボードやボトムナビゲーションと位置が競合しやすい",
    "連続操作時に通知が次々に入れ替わり、どの操作の結果か分からなくなることがある",
  ],
  bestPractices: [
    "本文は1〜2行の短文にする。「〜を削除しました」のように操作の結果を過去形で伝える",
    "アクションは1つまで。「閉じる」ボタンをアクション枠に使わない（自動で消えるため）",
    "アンドゥ可能な操作は確認ダイアログではなくスナックバー+アンドゥで設計する",
    "重要な情報やエラーの恒常的な通知には使わない。バナーやインラインエラーに切り替える",
    "表示時間はアクション付きなら長め（8〜10秒）にし、ホバー中はタイマーを止める",
    "prefers-reduced-motionが有効な環境ではスライドアニメーションをフェードに置き換える",
  ],
  useCases: [
    "Gmail — メールをアーカイブ／削除した直後の「元に戻す」付きスナックバー",
    "Google フォト — アルバムへの追加完了通知と「表示」アクション",
    "YouTube — 「後で見る」に追加した際の下部通知",
    "Slack（モバイル） — メッセージ送信失敗時の「再試行」付きスナックバー",
    "Google ドキュメント — オフライン復帰時の接続状態通知",
  ],
  accessibility: [
    "コンテナに role=\"status\" と aria-live=\"polite\" を付与し、読み上げの割り込みを防ぐ",
    "エラーを伝える場合のみ role=\"alert\"（aria-live=\"assertive\"）を検討する",
    "自動で消える場合でも、同じ情報や操作に別経路（履歴画面など）でアクセスできるようにする",
    "アクションボタンはTabで到達可能にし、フォーカス中は自動クローズのタイマーを一時停止する",
    "表示時間はWCAG 2.2.1を踏まえ、アクション付きなら最低でも数秒以上の猶予を確保する",
    "色のコントラスト比を確保する（暗い背景に白文字の場合は4.5:1以上）",
  ],
  figma: [
    "Auto Layout（横方向）で本文テキストとアクションボタンを並べ、本文側をFillにする",
    "Component Propertyに「action: boolean」「variant: default / error」を作って出し分ける",
    "プロトタイプはAfter Delay（4000ms）で自動的に消える遷移を組むと実挙動を確認できる",
    "スライドインはSmart Animate + Move In（Bottom, Ease Out, 250ms）が自然",
    "モバイルフレームではボトムナビゲーションやFABとの重なりを実寸で検証しておく",
  ],
  code: {
    html: `<!-- スナックバー（アンドゥ付き） -->
<button id="delete-btn">メールを削除</button>

<div id="snackbar" class="snackbar" role="status" aria-live="polite" hidden>
  <span>メールを削除しました</span>
  <button type="button" id="undo-btn">元に戻す</button>
</div>

<script>
  const snackbar = document.getElementById("snackbar");
  let timer;
  document.getElementById("delete-btn").onclick = () => {
    snackbar.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => (snackbar.hidden = true), 8000);
  };
  document.getElementById("undo-btn").onclick = () => {
    // 復元処理
    snackbar.hidden = true;
  };
</script>

<style>
  .snackbar {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 16px;
    background: #1f2937;
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    animation: slide-up 0.25s ease-out;
  }
  .snackbar button {
    background: none;
    border: none;
    color: #f9a8d4;
    font-weight: 600;
    cursor: pointer;
  }
  @keyframes slide-up {
    from { transform: translate(-50%, 16px); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }
</style>`,
    tailwind: `<div
  role="status"
  aria-live="polite"
  class="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center
         gap-4 rounded-lg bg-gray-900 px-4 py-3 text-sm text-white
         shadow-xl"
>
  <span>メールを削除しました</span>
  <button
    type="button"
    class="font-semibold text-pink-300 hover:text-pink-200"
  >
    元に戻す
  </button>
</div>`,
    react: `"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SnackbarState = {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
} | null;

export function useSnackbar(duration = 8000) {
  const [state, setState] = useState<SnackbarState>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = useCallback(
    (next: NonNullable<SnackbarState>) => {
      clearTimeout(timerRef.current);
      setState(next);
      timerRef.current = setTimeout(() => setState(null), duration);
    },
    [duration]
  );

  useEffect(() => () => clearTimeout(timerRef.current), []);
  return { state, show, dismiss: () => setState(null) };
}

export function Snackbar({
  state,
  onDismiss,
}: {
  state: SnackbarState;
  onDismiss: () => void;
}) {
  return (
    <div role="status" aria-live="polite" className="contents">
      {state && (
        <div
          className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2
                     items-center gap-4 rounded-lg bg-gray-900 px-4 py-3
                     text-sm text-white shadow-xl motion-safe:animate-in
                     motion-safe:slide-in-from-bottom-2"
        >
          <span>{state.message}</span>
          {state.actionLabel && (
            <button
              type="button"
              onClick={() => {
                state.onAction?.();
                onDismiss();
              }}
              className="font-semibold text-pink-300 hover:text-pink-200"
            >
              {state.actionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
}`,
    shadcn: `// shadcn/ui に「Snackbar」という名前のコンポーネントはありませんが、
// 公式推奨のトーストライブラリ Sonner でアクション付きスナックバーを再現できます。
// npx shadcn@latest add sonner
"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// app/layout.tsx に <Toaster position="bottom-center" /> を配置しておく

export function DeleteMailButton() {
  const handleDelete = () => {
    // 削除処理...
    toast("メールを削除しました", {
      duration: 8000,
      action: {
        label: "元に戻す",
        onClick: () => {
          // 復元処理
        },
      },
    });
  };

  return <Button onClick={handleDelete}>メールを削除</Button>;
}`,
  },
  related: ["toast", "banner", "notification-center", "inline-error"],
  views: 21700,
  favorites: 870,
  collections: ["mobile-ui", "saas-ui"],
  gradient: "from-rose-400/15 via-pink-500/10 to-red-500/15",
  difficulty: 2,
  updatedAt: "2026-05-09",
};
