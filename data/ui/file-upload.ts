import type { UIItem } from "@/types/ui";

export const fileUpload: UIItem = {
  slug: "file-upload",
  name: "File Upload",
  nameJa: "ファイルアップロード",
  description:
    "ファイル選択やドラッグ＆ドロップでファイルを送信するUI。進捗表示とプレビューが体験の鍵。",
  category: "forms",
  tags: ["アップロード", "ドラッグ＆ドロップ", "ファイル", "dropzone"],
  aliases: [
    "ドラッグして画像を置くやつ",
    "ファイルをここにドロップしてくださいの枠",
    "写真を添付するボタン",
    "点線の四角にファイルを入れるところ",
    "画像をアップする場所",
    "添付ファイルを選ぶUI",
  ],
  whatIs: [
    "ファイルアップロード（File Upload）は、ユーザーのデバイスにあるファイルを選択し、サーバーへ送信するためのUIコンポーネントです。「Upload」は「上へ（up）荷物を積み込む（load）」が語源で、手元の端末からネットワークの「上流」にあるサーバーへデータを送る様子を表しています。ドロップ領域を指す「ドロップゾーン（Dropzone）」という呼び名も広く使われています。",
    "HTML標準の <input type=\"file\"> が基本形ですが、見た目のカスタマイズが難しいため、実際のプロダクトでは input を視覚的に隠し、点線ボーダーのドロップ領域＋「ファイルを選択」ボタンという構成でスタイリングするのが定番です。ドラッグ＆ドロップ、複数選択、ペースト対応などの拡張が加わります。",
    "アップロードは失敗し得る非同期処理であるため、選択後のプレビュー、進捗バー、キャンセル、リトライ、エラー表示までを含めた一連のフローとして設計する必要があります。単なる入力部品ではなく「小さなアプリケーション」として捉えるべきコンポーネントです。",
  ],
  features: [
    "クリックでのファイル選択ダイアログと、ドラッグ＆ドロップの両方に対応できる",
    "accept属性で拡張子・MIMEタイプを制限し、multiple属性で複数ファイルを受け付けられる",
    "選択後にサムネイルプレビューやファイル名・サイズの一覧を表示できる",
    "アップロード中は進捗バー（プログレスバー）で状況を可視化する",
    "ドラッグオーバー時に領域の色を変え、「ここに置ける」ことをフィードバックする",
    "モバイルではカメラ起動（capture属性）やフォトライブラリと連携できる",
  ],
  merits: [
    "ドラッグ＆ドロップによりデスクトップでの複数ファイル操作が圧倒的に速くなる",
    "プレビュー表示により、誤ったファイルの送信をアップロード前に防げる",
    "進捗表示があることで、大容量ファイルでもユーザーが安心して待てる",
    "accept属性とクライアント検証で、サーバー到達前に形式エラーを弾ける",
    "点線ボーダーのドロップゾーンは慣習として定着しており、説明なしで意図が伝わる",
  ],
  demerits: [
    "ドラッグ＆ドロップはタッチデバイスでは機能せず、代替導線が必須になる",
    "進捗・キャンセル・リトライ・並列制御など、実装コストが入力部品の中で最も高い部類",
    "ファイルサイズ・形式・枚数の制限をユーザーに正しく伝えないとエラーが頻発する",
    "セキュリティ面の考慮（MIME偽装、巨大ファイル、ウイルススキャン）がサーバー側で必要",
    "ネットワーク不安定時の失敗体験がプロダクト全体の印象を損ないやすい",
  ],
  bestPractices: [
    "ドロップゾーン全体をクリック可能にし、「ファイルを選択」ボタンも必ず併設する",
    "対応形式・最大サイズ・最大枚数を、エラーが出る前にドロップゾーン内へ明記する",
    "選択直後にプレビューと削除ボタンを表示し、送信前の確認・修正を可能にする",
    "アップロードは選択と同時にバックグラウンドで開始し、フォーム送信を待たせない",
    "失敗時は原因（サイズ超過・形式不一致・通信エラー）を特定できる文言でリトライ導線を出す",
    "ドラッグオーバー中はボーダー色と背景を変化させ、ドロップ可能であることを明示する",
  ],
  useCases: [
    "Googleドライブ — 画面全体がドロップゾーンになる大胆なドラッグ＆ドロップ対応",
    "Notion — 画像ブロックへのドロップとペーストによる直感的なアップロード",
    "メルカリの出品フォーム — スマホカメラ連携による商品写真の複数アップロード",
    "Slackのメッセージ入力 — ファイル添付とドラッグ＆ドロップ、クリップボード貼り付け",
    "採用サイトの応募フォーム — 履歴書・職務経歴書のPDFアップロード",
  ],
  accessibility: [
    "本体は <input type=\"file\"> を使い、視覚的に隠してもフォーカス可能な状態を維持する",
    "ドラッグ＆ドロップのみに依存せず、キーボードで開けるファイル選択ボタンを必ず用意する",
    "アップロードの進捗・完了・失敗は aria-live 領域でスクリーンリーダーに通知する",
    "進捗バーには role=\"progressbar\" と aria-valuenow / aria-valuemin / aria-valuemax を設定する",
    "削除ボタンには「〇〇（ファイル名）を削除」のようにaria-labelで対象を明示する",
  ],
  figma: [
    "点線ボーダーはStrokeのDash設定（例: 6, 6）で作り、角丸16px前後と組み合わせる",
    "Variantsで default / dragover / uploading / success / error の5状態を作る",
    "uploading状態には進捗バーとパーセント表示を含め、Smart Animateで遷移を確認する",
    "アップロード済みファイルの行（サムネイル＋ファイル名＋サイズ＋削除）は別コンポーネント化する",
    "空状態のイラストやアイコン（クラウド＋上矢印が定番）はコンポーネント内で差し替え可能にする",
  ],
  code: {
    html: `<div class="dropzone" id="dropzone">
  <input type="file" id="file" accept="image/*" multiple hidden />
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
       stroke="#10b981" stroke-width="1.5" aria-hidden="true">
    <path d="M12 16V4m0 0-4 4m4-4 4 4" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke-linecap="round"/>
  </svg>
  <p><strong>クリックして選択</strong> またはドラッグ＆ドロップ</p>
  <p class="hint">PNG / JPG、5MBまで、最大10枚</p>
</div>

<script>
  const zone = document.getElementById("dropzone");
  const input = document.getElementById("file");

  zone.addEventListener("click", () => input.click());
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("dragover");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("dragover"));
  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("dragover");
    console.log(e.dataTransfer.files);
  });
</script>

<style>
  .dropzone {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 40px 24px;
    border: 2px dashed #d1d5db;
    border-radius: 16px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
  }
  .dropzone.dragover {
    border-color: #10b981;
    background: #ecfdf5;
  }
  .dropzone .hint {
    font-size: 12px;
    color: #6b7280;
  }
</style>`,
    tailwind: `<label
  for="file"
  class="group flex cursor-pointer flex-col items-center gap-2
         rounded-2xl border-2 border-dashed border-gray-300 px-6 py-10
         text-center transition
         hover:border-emerald-500 hover:bg-emerald-50
         has-[input:focus-visible]:ring-4
         has-[input:focus-visible]:ring-emerald-500/20"
>
  <input type="file" id="file" accept="image/*" multiple class="sr-only" />
  <svg class="size-10 text-emerald-500" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 16V4m0 0-4 4m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
  <p class="text-sm font-semibold text-gray-700">
    クリックして選択
    <span class="font-normal text-gray-500">またはドラッグ＆ドロップ</span>
  </p>
  <p class="text-xs text-gray-500">PNG / JPG、5MBまで、最大10枚</p>
</label>`,
    react: `"use client";

import { useCallback, useRef, useState } from "react";
import { UploadCloud, X } from "lucide-react";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export function FileUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [message, setMessage] = useState("");

  const addFiles = useCallback((list: FileList | null) => {
    if (!list) return;
    const accepted = Array.from(list).filter((f) => f.size <= MAX_SIZE);
    const rejected = list.length - accepted.length;
    setFiles((prev) => [...prev, ...accepted]);
    setMessage(
      rejected > 0
        ? \`\${rejected}件は5MBを超えているため追加できませんでした\`
        : \`\${accepted.length}件のファイルを追加しました\`
    );
  }, []);

  return (
    <div className="max-w-lg">
      <div
        role="button"
        tabIndex={0}
        aria-label="ファイルをアップロード。クリックで選択、またはドラッグ＆ドロップ"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        className={\`flex cursor-pointer flex-col items-center gap-2
                    rounded-2xl border-2 border-dashed px-6 py-10 text-center
                    transition focus-visible:outline-none focus-visible:ring-4
                    focus-visible:ring-emerald-500/30
                    \${
                      isDragging
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-300 hover:border-emerald-400"
                    }\`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={(e) => addFiles(e.target.files)}
        />
        <UploadCloud aria-hidden className="size-10 text-emerald-500" />
        <p className="text-sm font-semibold text-gray-700">
          クリックして選択{" "}
          <span className="font-normal text-gray-500">
            またはドラッグ＆ドロップ
          </span>
        </p>
        <p className="text-xs text-gray-500">PNG / JPG、5MBまで、最大10枚</p>
      </div>

      <p aria-live="polite" className="mt-2 text-xs text-gray-600">
        {message}
      </p>

      <ul className="mt-2 space-y-2">
        {files.map((file, i) => (
          <li
            key={\`\${file.name}-\${i}\`}
            className="flex items-center justify-between rounded-xl
                       border border-gray-200 px-4 py-2.5 text-sm"
          >
            <span className="truncate">{file.name}</span>
            <button
              type="button"
              aria-label={\`\${file.name} を削除\`}
              onClick={() =>
                setFiles((prev) => prev.filter((_, idx) => idx !== i))
              }
              className="rounded-md p-1 text-gray-400 hover:bg-gray-100
                         hover:text-gray-700"
            >
              <X aria-hidden className="size-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    shadcn: `// shadcn/uiに公式のFile Uploadコンポーネントはないため、
// Button + Card を土台にTailwindでドロップゾーンを組むのが定番です。
// npx shadcn@latest add button card
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FileUploadCard() {
  return (
    <Card className="border-2 border-dashed shadow-none">
      <label
        htmlFor="file"
        className="flex cursor-pointer flex-col items-center gap-3 px-6 py-10"
      >
        <input id="file" type="file" accept="image/*" multiple className="sr-only" />
        <UploadCloud aria-hidden className="size-10 text-muted-foreground" />
        <div className="text-center">
          <p className="text-sm font-medium">
            ファイルをドラッグ＆ドロップ
          </p>
          <p className="text-xs text-muted-foreground">
            PNG / JPG、5MBまで、最大10枚
          </p>
        </div>
        <Button type="button" variant="outline" size="sm" asChild>
          <span>ファイルを選択</span>
        </Button>
      </label>
    </Card>
  );
}`,
  },
  related: ["form-validation", "progress-bar", "image-gallery", "empty-state"],
  views: 24300,
  favorites: 970,
  collections: ["saas-ui", "admin-ui"],
  gradient: "from-green-500/15 via-emerald-500/10 to-teal-500/15",
  difficulty: 3,
  updatedAt: "2026-05-30",
};
