import type { UIItem } from "@/types/ui";

export const alertDialog: UIItem = {
  slug: "alert-dialog",
  name: "Alert Dialog",
  nameJa: "アラートダイアログ",
  description:
    "破壊的操作の前にユーザーの明示的な確認を求めるダイアログ。誤操作を防ぐ最後の砦。",
  category: "dialogs",
  tags: ["確認", "警告", "破壊的操作", "modal"],
  aliases: [
    "本当に削除しますか？って聞いてくるやつ",
    "削除前の確認画面",
    "はい・いいえを選ばせるポップアップ",
    "警告が出る小さいウィンドウ",
    "キャンセルできない操作の前に出る画面",
    "OKボタンを押させる確認ダイアログ",
  ],
  whatIs: [
    "アラートダイアログ（Alert Dialog）は、削除・退会・送信取り消しといった取り返しのつかない操作の前に、ユーザーへ明示的な確認を求めるダイアログです。名前は「alert（警告）」に由来し、古くはJavaScriptのalert()関数やOSネイティブの警告ダイアログとして親しまれてきました。WAI-ARIAでは通常のダイアログと区別して role=\"alertdialog\" が定義されています。",
    "通常のモーダルとの最大の違いは「割り込みの強さ」です。アラートダイアログは外側クリックやEscキーで安易に閉じられない設計が推奨され、ユーザーは必ず「実行」か「キャンセル」のどちらかを選ばなければなりません。この強制力こそが、うっかりミスによるデータ喪失を防ぐ仕組みの核心です。",
    "一方で、確認ダイアログの乱用は「確認疲れ」を招き、ユーザーが内容を読まずにOKを押す習慣を作ってしまいます。近年は軽微な操作にはアンドゥ（元に戻す）付きのスナックバーを使い、真に不可逆な操作にだけアラートダイアログを使う、という役割分担がベストプラクティスとして定着しています。",
  ],
  features: [
    "role=\"alertdialog\" により支援技術へ「緊急性の高いダイアログ」であることを伝える",
    "「実行」と「キャンセル」の2択を基本とし、必ずどちらかの選択を求める",
    "外側クリックで閉じない（明示的なボタン操作のみで閉じる）実装が推奨される",
    "破壊的操作のボタンは赤系（destructive）のスタイルで危険性を示す",
    "開いた瞬間にフォーカスを安全な側（キャンセル）へ移すのが定石",
    "操作対象の名前（例：「プロジェクト『A』を削除」）を本文に含めて具体性を持たせる",
  ],
  merits: [
    "誤操作による不可逆なデータ喪失を最終段階で防げる",
    "操作の影響範囲（何件消えるか、復元できるか）を伝える場を確保できる",
    "role=\"alertdialog\" の使用でスクリーンリーダーにも緊急性が伝わる",
    "ライブラリ（Radix / shadcn/ui など）のパターンが成熟しており実装コストが低い",
    "法的・金銭的に重要な同意の記録ポイントとしても機能する",
  ],
  demerits: [
    "多用すると確認疲れを起こし、読まれずにOKされる形骸化が進む",
    "操作フローを強制的に中断するため、連続作業のテンポを損なう",
    "文言が曖昧だと（「よろしいですか？」のみ等）かえって不安と誤操作を招く",
    "モバイルでは小さなボタンの誤タップで意図しない選択をするリスクがある",
    "アンドゥで代替できる場面にまで使うと、単なる邪魔なステップになる",
  ],
  bestPractices: [
    "タイトルは「〜を削除しますか？」のように操作を具体的に書く。「警告」だけのタイトルは避ける",
    "実行ボタンのラベルは「OK」ではなく「削除する」など動詞にする。選択の結果を明確にする",
    "破壊的操作ボタンは赤系スタイルにし、初期フォーカスはキャンセル側に置く",
    "本文には影響範囲と復元可否（「この操作は取り消せません」）を必ず明記する",
    "軽微な操作はアンドゥ付きスナックバーで代替し、アラートダイアログは真に不可逆な操作に限定する",
    "特に重大な削除では、対象名の入力（type-to-confirm）を求める段階的な防御も検討する",
  ],
  useCases: [
    "GitHub — リポジトリ削除時にリポジトリ名の入力を求める最終確認ダイアログ",
    "Gmail — 下書きを破棄する際の確認ダイアログ",
    "macOS / iOS — ファイルやアプリ削除時のシステム標準アラート",
    "Figma — ページ削除やチームからのメンバー除外時の確認",
    "ネットバンキング — 振込実行前の最終確認画面としての利用",
  ],
  accessibility: [
    "role=\"alertdialog\" と aria-modal=\"true\" を設定し、aria-labelledby でタイトルと関連付ける",
    "本文は aria-describedby で関連付け、開いた瞬間に文脈が読み上げられるようにする",
    "フォーカスをダイアログ内にトラップし、Tab / Shift+Tab の循環を保証する",
    "閉じた後は、ダイアログを開いたトリガー要素へフォーカスを戻す",
    "Escキーの扱いは「キャンセル」として機能させる（何も実行せず閉じる）",
    "色だけで危険性を伝えない。ボタンラベルの動詞と本文テキストで補完する",
  ],
  figma: [
    "オーバーレイ（黒 40〜50%）とダイアログ本体を分けたコンポーネント構成にする",
    "Component Propertyで「variant: destructive / default」を作り、実行ボタンの色を切り替える",
    "タイトル・本文・ボタン行をAuto Layoutで組み、本文の行数変化に耐えるようにする",
    "プロトタイプは「Open overlay」+「Manual」配置で中央表示にし、背景クリックでは閉じない設定にする",
    "キャンセルと実行ボタンの並び順（右端が主要アクション）をOS慣習に合わせて統一する",
  ],
  code: {
    html: `<!-- HTML標準のdialog要素を使ったアラートダイアログ -->
<button id="open-btn">プロジェクトを削除</button>

<dialog id="confirm-dialog" aria-labelledby="dlg-title">
  <h2 id="dlg-title">プロジェクトを削除しますか？</h2>
  <p>「Design System v2」とその中のファイル24件が削除されます。この操作は取り消せません。</p>
  <div class="actions">
    <button id="cancel-btn" autofocus>キャンセル</button>
    <button id="delete-btn" class="danger">削除する</button>
  </div>
</dialog>

<script>
  const dialog = document.getElementById("confirm-dialog");
  document.getElementById("open-btn").onclick = () => dialog.showModal();
  document.getElementById("cancel-btn").onclick = () => dialog.close();
  document.getElementById("delete-btn").onclick = () => {
    // 削除処理
    dialog.close();
  };
  // 外側クリックでは閉じない（dialog標準の挙動）
</script>

<style>
  dialog {
    border: none;
    border-radius: 16px;
    padding: 24px;
    max-width: 400px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
  }
  .danger {
    background: #dc2626;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
  }
</style>`,
    tailwind: `<dialog
  id="confirm-dialog"
  aria-labelledby="dlg-title"
  class="max-w-sm rounded-2xl p-6 shadow-2xl backdrop:bg-black/50"
>
  <h2 id="dlg-title" class="text-lg font-semibold text-gray-900">
    プロジェクトを削除しますか？
  </h2>
  <p class="mt-2 text-sm text-gray-600">
    「Design System v2」とその中のファイル24件が削除されます。
    この操作は取り消せません。
  </p>
  <div class="mt-5 flex justify-end gap-2">
    <button
      autofocus
      class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium
             hover:bg-gray-50"
      onclick="this.closest('dialog').close()"
    >
      キャンセル
    </button>
    <button
      class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white
             hover:bg-red-700"
    >
      削除する
    </button>
  </div>
</dialog>`,
    react: `"use client";

import { useEffect, useId, useRef } from "react";

type Props = {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function AlertDialog({
  open,
  title,
  description,
  confirmLabel,
  onConfirm,
  onCancel,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      onCancel={(e) => {
        e.preventDefault();
        onCancel(); // Escキーはキャンセル扱い
      }}
      className="max-w-sm rounded-2xl p-6 shadow-2xl backdrop:bg-black/50"
    >
      <h2 id={titleId} className="text-lg font-semibold text-gray-900">
        {title}
      </h2>
      <p id={descId} className="mt-2 text-sm text-gray-600">
        {description}
      </p>
      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          autoFocus
          onClick={onCancel}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm
                     font-medium hover:bg-gray-50"
        >
          キャンセル
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium
                     text-white hover:bg-red-700"
        >
          {confirmLabel}
        </button>
      </div>
    </dialog>
  );
}`,
    shadcn: `// npx shadcn@latest add alert-dialog
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DeleteProjectDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">プロジェクトを削除</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>プロジェクトを削除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            「Design System v2」とその中のファイル24件が削除されます。
            この操作は取り消せません。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600 hover:bg-red-700">
            削除する
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
  },
  related: ["modal", "toast", "popover", "drawer"],
  views: 38400,
  favorites: 1540,
  collections: ["saas-ui", "admin-ui", "finance-ui"],
  gradient: "from-red-500/15 via-rose-500/10 to-orange-500/15",
  difficulty: 2,
  updatedAt: "2026-06-14",
};
