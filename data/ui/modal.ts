import type { UIItem } from "@/types/ui";

export const modal: UIItem = {
  slug: "modal",
  name: "Modal",
  nameJa: "モーダル",
  description:
    "画面中央に重ねて表示するダイアログ。背景を暗くしてユーザーの注意と操作を1点に集める。",
  category: "modal",
  tags: ["ダイアログ", "オーバーレイ", "確認", "ポップアップ"],
  aliases: [
    "画面の真ん中に出てくるウィンドウ",
    "背景が暗くなるポップアップ",
    "確認ダイアログ",
    "閉じないと先に進めない画面",
    "重なって出てくる小窓",
    "ページの上にかぶさる画面",
  ],
  whatIs: [
    "モーダル（Modal）は、元の画面の上にオーバーレイとして重なり、閉じるまで背景の操作をブロックするダイアログUIです。名前は「mode（モード）」に由来し、「アプリが一時的に特別なモードに入り、そのモードを抜けるまで他の操作ができない」という状態を表します。逆に背景を操作できるものは「モードレス（ノンモーダル）」と呼ばれます。",
    "背景を半透明の黒（スクリム）で覆い、画面中央にコンテンツを表示することで、ユーザーの注意を強制的に1つのタスクへ集めます。削除の確認、ログインフォーム、画像の拡大表示、利用規約への同意など、「今すぐ判断・入力してほしいこと」がある場面の定番です。",
    "強力な反面、ユーザーの作業を中断させる侵襲的なUIでもあるため、乱用は嫌われます。近年はHTML標準の <dialog> 要素とshowModal()メソッドが全主要ブラウザで使えるようになり、フォーカストラップやEscキー対応の多くをブラウザに任せられるようになりました。",
  ],
  features: [
    "背景をスクリム（半透明の黒）で覆い、閉じるまで背景の操作をブロックする",
    "画面中央に表示され、視線とフォーカスをダイアログ内に閉じ込める",
    "Escキー・閉じるボタン・オーバーレイクリックなど複数の方法で閉じられる",
    "確認（confirm）・入力フォーム・詳細表示・メディア拡大など用途が幅広い",
    "HTML標準の <dialog> 要素とshowModal()でネイティブ実装できる",
    "開閉時のフェード＋スケールなどのトランジションで文脈の連続性を保てる",
  ],
  merits: [
    "ユーザーの注意を1つのタスクに集中させ、重要な確認の見落としを防げる",
    "ページ遷移なしでサブタスク（ログイン、設定変更など)を完結でき、文脈が失われない",
    "元の画面の状態（スクロール位置や入力途中の内容）を保持したまま割り込める",
    "誤操作を防ぐ最終確認の関門として機能する（削除確認など）",
    "<dialog> 要素の普及でアクセシブルな実装のコストが大きく下がった",
  ],
  demerits: [
    "ユーザーの作業を強制的に中断させるため、乱用すると体験を大きく損なう",
    "モバイルの狭い画面では表示領域が足りず、長いコンテンツと相性が悪い",
    "モーダルの上にモーダルを重ねると、階層が分からなくなり操作が破綻しやすい",
    "フォーカス管理や背景スクロールロックを怠ると重大なアクセシビリティ問題になる",
    "ページ表示直後の広告・メルマガ登録モーダルはユーザーに強く嫌われ、SEO評価にも悪影響がある",
  ],
  bestPractices: [
    "本当にユーザーの作業を中断すべきか自問する。補足情報ならツールチップやインライン表示で足りることが多い",
    "タイトル・本文・アクションボタンの構成を明確にし、1モーダル1タスクに絞る",
    "破壊的アクションの確認では、実行ボタンに「削除する」など具体的な動詞を使い、色でも危険度を伝える",
    "Escキー・閉じるボタン・オーバーレイクリックの3系統で閉じられるようにする（入力フォームでは誤操作防止のためオーバーレイクリックを無効にする判断もある）",
    "開いている間は背景のスクロールをロックし、閉じたら元のフォーカス位置に戻す",
    "モバイルではフルスクリーンやボトムシートへの切り替えを検討する",
  ],
  useCases: [
    "Gmail・Notionなどの削除確認 — 「本当に削除しますか？」の最終確認ダイアログ",
    "ECサイトのログイン／会員登録 — カート遷移を中断させずにモーダルで認証",
    "Instagram（Web版） — フィードの投稿クリックで詳細をモーダル表示",
    "Stripe Checkoutの決済確認や3Dセキュア認証のダイアログ",
    "SaaSのオンボーディング — 初回ログイン時の機能紹介モーダル",
    "画像・動画のライトボックス表示（拡大プレビュー）",
  ],
  accessibility: [
    "role=\"dialog\"（または <dialog> 要素）と aria-modal=\"true\" を設定する",
    "aria-labelledby でタイトルと、必要に応じて aria-describedby で本文と関連付ける",
    "開いたらモーダル内へフォーカスを移し、Tabキーのフォーカスをモーダル内に閉じ込める（フォーカストラップ）",
    "閉じたら、モーダルを開いたトリガー要素へフォーカスを戻す",
    "Escキーで閉じられるようにする。<dialog> のshowModal()なら標準で対応される",
    "背景コンテンツには inert 属性を適用し、スクリーンリーダーからも到達不能にする",
  ],
  figma: [
    "モーダル本体（幅400〜560px）とスクリム（黒40〜60%）を別レイヤーで重ねてフレームを組む",
    "タイトル・本文・ボタン行を縦のAuto Layoutで組み、paddingを24px程度で統一する",
    "プロトタイプはOpen overlay（Manual位置で中央）＋背景クリックで閉じる設定が最短",
    "開閉のトランジションはDissolve（200ms）か、Scale 95%→100%のSmart Animateが自然",
    "danger（削除確認）/ default のVariantを作り、ボタン色とアイコンを切り替えられるようにする",
    "モバイル幅（375px）でのフルスクリーン版・ボトムシート版も併せてデザインしておく",
  ],
  code: {
    html: `<!-- HTML標準のdialog要素: フォーカストラップとEscキーは標準対応 -->
<button id="open-dialog">アカウントを削除</button>

<dialog id="confirm-dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">アカウントを削除しますか？</h2>
  <p>この操作は取り消せません。すべてのデータが完全に削除されます。</p>
  <div class="actions">
    <button id="cancel-btn" class="btn-secondary">キャンセル</button>
    <button id="delete-btn" class="btn-danger">削除する</button>
  </div>
</dialog>

<style>
  dialog {
    width: min(440px, 90vw);
    border: 0;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 25px 50px rgb(0 0 0 / 0.25);
  }
  dialog::backdrop {
    background: rgb(0 0 0 / 0.5);
  }
  dialog h2 { margin: 0 0 8px; font-size: 18px; }
  dialog p { margin: 0 0 20px; color: #6b7280; }
  .actions { display: flex; justify-content: flex-end; gap: 8px; }
  .btn-secondary {
    padding: 10px 16px; border: 1px solid #d1d5db;
    border-radius: 10px; background: #fff; cursor: pointer;
  }
  .btn-danger {
    padding: 10px 16px; border: 0; border-radius: 10px;
    background: #dc2626; color: #fff; cursor: pointer;
  }
</style>

<script>
  const dialog = document.getElementById("confirm-dialog");
  document.getElementById("open-dialog").addEventListener("click", () => {
    dialog.showModal(); // モーダルとして開く
  });
  document.getElementById("cancel-btn").addEventListener("click", () => {
    dialog.close();
  });
  document.getElementById("delete-btn").addEventListener("click", () => {
    // 削除処理...
    dialog.close();
  });
</script>`,
    tailwind: `<!-- スクリム -->
<div class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
     aria-hidden="true"></div>

<!-- モーダル本体 -->
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
  class="fixed left-1/2 top-1/2 z-50 w-[min(440px,90vw)]
         -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6
         shadow-2xl"
>
  <div class="flex items-start justify-between">
    <h2 id="modal-title" class="text-lg font-bold">
      アカウントを削除しますか？
    </h2>
    <button
      aria-label="閉じる"
      class="-mr-2 -mt-2 rounded-full p-2 text-gray-400 hover:bg-gray-100
             hover:text-gray-600"
    >
      <svg class="size-5" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
      </svg>
    </button>
  </div>

  <p id="modal-desc" class="mt-2 text-sm text-gray-600">
    この操作は取り消せません。すべてのデータが完全に削除されます。
  </p>

  <div class="mt-6 flex justify-end gap-2">
    <button
      class="rounded-xl border border-gray-300 px-4 py-2.5 text-sm
             font-semibold hover:bg-gray-50"
    >
      キャンセル
    </button>
    <button
      class="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold
             text-white hover:bg-red-500"
    >
      削除する
    </button>
  </div>
</div>`,
    react: `"use client";

import { useEffect, useId, useRef } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

// HTML標準の<dialog>を使い、フォーカストラップとEscをブラウザに任せる
export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        // オーバーレイ（dialog自身）のクリックで閉じる
        if (e.target === dialogRef.current) onClose();
      }}
      className="w-[min(440px,90vw)] rounded-2xl p-0 shadow-2xl
                 backdrop:bg-black/50 open:animate-in open:fade-in
                 open:zoom-in-95 open:duration-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h2 id={titleId} className="text-lg font-bold">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            className="-mr-2 -mt-2 rounded-full p-2 text-gray-400
                       hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-600">{children}</div>
        {footer && <div className="mt-6 flex justify-end gap-2">{footer}</div>}
      </div>
    </dialog>
  );
}

// 使用例
export function DeleteAccountExample({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="アカウントを削除しますか？"
      footer={
        <>
          <button
            onClick={() => setOpen(false)}
            className="rounded-xl border border-gray-300 px-4 py-2.5
                       text-sm font-semibold hover:bg-gray-50"
          >
            キャンセル
          </button>
          <button
            className="rounded-xl bg-red-600 px-4 py-2.5 text-sm
                       font-semibold text-white hover:bg-red-500"
          >
            削除する
          </button>
        </>
      }
    >
      この操作は取り消せません。すべてのデータが完全に削除されます。
    </Modal>
  );
}`,
    shadcn: `// npx shadcn@latest add dialog
// Radix UIベース。フォーカストラップ・Esc・aria属性は自動で処理される
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DeleteAccountDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">アカウントを削除</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>アカウントを削除しますか？</DialogTitle>
          <DialogDescription>
            この操作は取り消せません。すべてのデータが完全に削除されます。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">キャンセル</Button>
          <Button variant="destructive">削除する</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
  },
  related: ["drawer", "bottom-sheet", "toast", "tooltip"],
  views: 56800,
  favorites: 2410,
  collections: ["saas-ui", "ec-ui", "admin-ui"],
  gradient: "from-indigo-500/15 via-blue-500/10 to-sky-500/15",
  difficulty: 2,
  updatedAt: "2026-07-22",
};
