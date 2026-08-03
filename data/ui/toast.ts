import type { UIItem } from "@/types/ui";

export const toast: UIItem = {
  slug: "toast",
  name: "Toast",
  nameJa: "トースト",
  description:
    "画面の隅に一時的に現れて自動で消える通知。操作結果を作業の邪魔をせずに伝えられる。",
  category: "toast",
  tags: ["通知", "フィードバック", "スナックバー", "一時表示"],
  aliases: [
    "保存しましたって一瞬出るやつ",
    "画面の端にぴょこっと出る通知",
    "勝手に消えるお知らせ",
    "右下に出てくる小さいメッセージ",
    "スナックバー",
    "ポコッと出てすぐ消えるポップアップ",
  ],
  whatIs: [
    "トースト（Toast）は、画面の隅（右下や上部中央など）に一時的に表示され、数秒後に自動で消える小さな通知UIです。トースターからパンが「ポンッ」と飛び出す様子に見立てて名付けられました。Material Designでは画面下部に表示される類似コンポーネントを「スナックバー（Snackbar）」と呼びますが、役割はほぼ同じです。",
    "「保存しました」「コピーしました」「メッセージを送信しました」といった操作結果のフィードバックを、ユーザーの作業を中断させずに伝えるのが役割です。モーダルと違って操作をブロックせず、ユーザーが何もしなくても勝手に消えるため、成功通知のような「知らせたいが確認は不要」な情報に最適です。",
    "近年は「元に戻す（Undo）」ボタンをトーストに載せることで、確認ダイアログを省略して操作を即実行し、間違いだけ取り消させるという設計が主流になりつつあります。複数のトーストを積み重ねるスタック管理や、スワイプで消す操作を含めライブラリ（sonner、react-hot-toastなど）に任せるのが実務では一般的です。",
  ],
  features: [
    "画面の隅にオーバーレイとして現れ、3〜6秒程度で自動的に消える",
    "success / error / warning / info などの種別を色とアイコンで区別できる",
    "「元に戻す」「再試行」などのアクションボタンを1つ載せられる",
    "複数の通知をスタック（積み重ね）して順次表示できる",
    "ユーザーの操作をブロックせず、無視しても問題なく進行できる",
    "スワイプや閉じるボタンで手動でも消せる",
  ],
  merits: [
    "作業の流れを中断せずに操作結果をフィードバックできる",
    "自動で消えるため、ユーザーに「閉じる」操作を強いない",
    "Undoアクションと組み合わせると確認ダイアログを減らせ、操作全体が高速になる",
    "実装済みライブラリが充実しており、導入コストが低い",
    "アプリ全体で通知の見た目と挙動を統一しやすい",
  ],
  demerits: [
    "表示時間が短く、読み終わる前に消えてユーザーが情報を取り逃すことがある",
    "画面の隅に出るため、注視点から遠いと気づかれないことがある",
    "自動で消える性質上、重要なエラーや必須の確認には不適切",
    "連続操作でトーストが大量に積み重なると、かえってノイズになる",
    "スクリーンリーダー対応（ライブリージョン）を怠ると存在自体が伝わらない",
  ],
  bestPractices: [
    "1行で読み切れる簡潔な文言にする。長い説明が必要ならトースト以外の手段を選ぶ",
    "重要度で使い分ける。成功=トースト、続行不能なエラー=ダイアログやインライン表示",
    "表示時間は4〜6秒を基準にし、アクション付きの場合は長めにする（ホバー中は消さない）",
    "破壊的操作は「即実行＋Undoトースト」にすると、確認ダイアログより速く安全な体験になる",
    "同種のトーストは上書きまたはまとめ、スタックは3件程度までに制限する",
    "エラートーストには可能なら「再試行」ボタンを付け、行き止まりにしない",
  ],
  useCases: [
    "Gmail — メール送信直後の「送信しました 取消」トースト（Undoパターンの代表例）",
    "Slack — メッセージ削除やリンクコピー時の下部スナックバー",
    "GitHub — URLコピーやIssue操作成功時の通知",
    "Notion — オフライン復帰や同期完了のステータス通知",
    "ECサイト — 「カートに追加しました」の通知にカートへの導線ボタンを添える",
    "管理画面のCRUD操作 — 保存・更新・削除の成功／失敗フィードバック",
  ],
  accessibility: [
    "コンテナに role=\"status\"（成功・情報）または role=\"alert\"（エラー）を設定し、ライブリージョンとして通知する",
    "aria-live=\"polite\" を基本とし、緊急性の高いエラーのみ assertive を使う",
    "自動で消えるまでの時間は、文字数に応じて十分に確保する（WCAG 2.2.1 タイミング調整可能）",
    "アクションボタン付きトーストはキーボードでフォーカス可能にし、消える前に到達できる手段（F6やショートカット）を用意する",
    "種別を色だけで伝えず、アイコンと文言（「エラー:」など）を併用する",
    "prefers-reduced-motion 有効時はスライドインをフェードに置き換える",
  ],
  figma: [
    "アイコン＋メッセージ＋アクション＋閉じるボタンを横並びAuto Layoutで組む",
    "type（success / error / warning / info）のVariantを作り、色とアイコンを切り替える",
    "プロトタイプではAfter delay（4000ms）トリガーで自動的に消える挙動を再現できる",
    "出現はMove in（Bottom, 200ms, Ease Out）、消滅はDissolveにすると実装に近い印象になる",
    "複数トーストのスタック表示は、8pxギャップの縦Auto Layoutで並べて確認する",
    "ダークテーマ前提の配色（黒背景＋白文字）にすると背景コンテンツの上でも視認性が安定する",
  ],
  code: {
    html: `<button id="save-btn">保存する</button>

<!-- ライブリージョンは空のままDOMに常駐させておく -->
<div id="toast-region" role="status" aria-live="polite" class="toast-region"></div>

<style>
  .toast-region {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 100;
  }
  .toast {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #111827;
    color: #fff;
    padding: 12px 16px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgb(0 0 0 / 0.25);
    animation: toast-in 0.25s ease-out;
  }
  .toast.leaving { animation: toast-out 0.2s ease-in forwards; }
  .toast .icon { color: #34d399; }
  @keyframes toast-in {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes toast-out {
    to { opacity: 0; transform: translateY(8px); }
  }
</style>

<script>
  function showToast(message, duration = 4000) {
    const region = document.getElementById("toast-region");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML =
      '<span class="icon" aria-hidden="true">✓</span>' +
      "<span>" + message + "</span>";
    region.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("leaving");
      toast.addEventListener("animationend", () => toast.remove());
    }, duration);
  }

  document.getElementById("save-btn").addEventListener("click", () => {
    showToast("変更を保存しました");
  });
</script>`,
    tailwind: `<!-- 右下のトーストスタック -->
<div
  role="status"
  aria-live="polite"
  class="fixed bottom-5 right-5 z-50 flex flex-col gap-2"
>
  <!-- 成功トースト -->
  <div
    class="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3
           text-sm text-white shadow-xl
           animate-in slide-in-from-bottom-3 fade-in duration-250"
  >
    <svg class="size-5 shrink-0 text-emerald-400" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="m5 13 4 4L19 7" />
    </svg>
    <span>変更を保存しました</span>
    <button class="ml-2 font-semibold text-emerald-400 hover:text-emerald-300">
      元に戻す
    </button>
    <button aria-label="通知を閉じる"
            class="ml-1 rounded p-1 text-gray-400 hover:text-white">
      ✕
    </button>
  </div>

  <!-- エラートースト -->
  <div
    role="alert"
    class="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3
           text-sm text-white shadow-xl"
  >
    <svg class="size-5 shrink-0 text-red-400" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path stroke-linecap="round" d="M12 8v4m0 4h.01" />
    </svg>
    <span>アップロードに失敗しました</span>
    <button class="ml-2 font-semibold text-red-400 hover:text-red-300">
      再試行
    </button>
  </div>
</div>`,
    react: `"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

type Toast = {
  id: number;
  message: string;
  type: "success" | "error";
};

const ToastContext = createContext<(msg: string, type?: Toast["type"]) => void>(
  () => {}
);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const showToast = useCallback(
    (message: string, type: Toast["type"] = "success") => {
      const id = ++idRef.current;
      setToasts((prev) => [...prev.slice(-2), { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-5 right-5 z-50 flex flex-col gap-2"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role={toast.type === "error" ? "alert" : "status"}
            className="flex items-center gap-3 rounded-xl bg-gray-900
                       px-4 py-3 text-sm text-white shadow-xl"
          >
            {toast.type === "success" ? (
              <CheckCircle2 aria-hidden
                className="size-5 shrink-0 text-emerald-400" />
            ) : (
              <AlertCircle aria-hidden
                className="size-5 shrink-0 text-red-400" />
            )}
            <span>{toast.message}</span>
            <button
              type="button"
              aria-label="通知を閉じる"
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
              className="ml-1 rounded p-1 text-gray-400 hover:text-white"
            >
              <X aria-hidden className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// 使用例
export function SaveButton() {
  const toast = useToast();
  return (
    <button
      type="button"
      onClick={() => toast("変更を保存しました")}
      className="rounded-xl bg-gray-900 px-4 py-2 text-white"
    >
      保存する
    </button>
  );
}`,
    shadcn: `// npx shadcn@latest add sonner
// shadcn/ui推奨のトーストはSonnerベース。スタック・スワイプ・Promiseに対応

// 1. app/layout.tsx にToasterを配置
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}

// 2. 任意のクライアントコンポーネントから呼び出す
// ---------------------------------------------
// "use client";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
//
// export function SaveButton() {
//   return (
//     <Button
//       onClick={() =>
//         toast.success("変更を保存しました", {
//           action: {
//             label: "元に戻す",
//             onClick: () => console.log("undo"),
//           },
//         })
//       }
//     >
//       保存する
//     </Button>
//   );
// }
//
// // 非同期処理との連携
// toast.promise(saveData(), {
//   loading: "保存中...",
//   success: "変更を保存しました",
//   error: "保存に失敗しました",
// });`,
  },
  related: ["modal", "tooltip", "badge", "progress-bar"],
  views: 44100,
  favorites: 1870,
  collections: ["saas-ui", "admin-ui", "mobile-ui"],
  gradient: "from-amber-500/15 via-orange-500/10 to-rose-500/15",
  difficulty: 2,
  updatedAt: "2026-07-14",
};
