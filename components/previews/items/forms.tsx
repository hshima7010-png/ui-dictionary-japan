import {
  Line,
  MiniButton,
  MiniField,
  Surface,
} from "@/components/previews/frame";
import {
  AlertCircle,
  ArrowUp,
  Check,
  Eye,
  Paperclip,
  Search,
} from "lucide-react";

/** 入力・フォーム系のプレビュー。 */

export function LoginFormPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[168px] space-y-2 p-3">
        <p className="text-center text-[10px] font-bold text-foreground/80">
          ログイン
        </p>
        <div className="space-y-1">
          <span className="block text-[8px] font-medium text-foreground/50">
            メールアドレス
          </span>
          <MiniField>you@example.com</MiniField>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-medium text-foreground/50">
            パスワード
          </span>
          <MiniField state="focus" className="justify-between">
            <span className="tracking-[0.15em] text-foreground/70">••••••••</span>
            <Eye className="size-2.5 text-foreground/40" />
          </MiniField>
        </div>
        <MiniButton
          tone="primary"
          className="w-full py-1.5 transition-opacity duration-300 group-hover:opacity-90"
        >
          ログイン
        </MiniButton>
        <p className="text-center text-[8px] text-primary">
          パスワードをお忘れですか？
        </p>
      </Surface>
    </div>
  );
}

export function FormValidationPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[178px] space-y-2.5 p-3">
        <div className="space-y-1">
          <span className="block text-[8px] font-medium text-foreground/50">
            ユーザー名
          </span>
          <MiniField state="success" className="justify-between">
            <span className="text-foreground/70">ui_dictionary</span>
            <Check className="size-2.5 text-emerald-500" />
          </MiniField>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-medium text-foreground/50">
            メールアドレス
          </span>
          <MiniField state="error">
            <span className="text-foreground/70">example.com</span>
          </MiniField>
          <span className="flex items-center gap-1 text-[8px] font-medium text-red-500">
            <AlertCircle className="size-2.5 shrink-0" />
            メールアドレスの形式が正しくありません
          </span>
        </div>
        <MiniButton tone="soft" className="w-full py-1.5 opacity-60">
          登録する
        </MiniButton>
      </Surface>
    </div>
  );
}

export function ChatInputPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      {/* 直前のやりとり */}
      <div className="w-[196px] space-y-1.5">
        <Surface className="ml-auto w-2/3 space-y-1 rounded-br-sm bg-primary/10 p-2">
          <Line w="w-full" />
          <Line w="w-1/2" />
        </Surface>
      </div>
      {/* 入力欄 */}
      <Surface className="flex w-[212px] items-center gap-1.5 rounded-2xl p-1.5 pl-2.5">
        <Paperclip className="size-3 shrink-0 text-foreground/35" />
        <span className="flex-1 text-[9px] leading-none text-foreground/40">
          メッセージを入力…
          <span className="ml-px inline-block h-2.5 w-px translate-y-[3px] animate-pulse bg-primary" />
        </span>
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
          <ArrowUp className="size-3" />
        </span>
      </Surface>
      <span className="text-[7px] text-foreground/35">
        Shift + Enter で改行
      </span>
    </div>
  );
}

export function SearchBarPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-start pt-4">
      <div className="w-[196px]">
        <Surface className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5">
          <Search className="size-3 shrink-0 text-foreground/40" />
          <span className="flex-1 text-[9px] leading-none text-foreground/70">
            下から出てくるメニュー
          </span>
          <span className="rounded border border-border px-1 py-px text-[7px] text-foreground/40">
            ⌘K
          </span>
        </Surface>
        {/* サジェスト */}
        <Surface className="mt-1.5 overflow-hidden p-1">
          <span className="block px-1.5 pb-1 pt-0.5 text-[7px] font-semibold text-foreground/35">
            候補
          </span>
          {[
            { label: "Bottom Sheet", active: true },
            { label: "Drawer", active: false },
            { label: "Action Sheet", active: false },
          ].map((s) => (
            <span
              key={s.label}
              className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[9px] ${
                s.active
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-foreground/60"
              }`}
            >
              <Search className="size-2.5 shrink-0 opacity-50" />
              {s.label}
            </span>
          ))}
        </Surface>
      </div>
    </div>
  );
}

export function SocialLoginPreview() {
  const providers = [
    { name: "Google", mark: "G", color: "text-[#4285F4]" },
    { name: "Apple", mark: "", color: "text-foreground/80" },
    { name: "GitHub", mark: "", color: "text-foreground/80" },
  ];

  return (
    <div className="flex h-full items-center justify-center">
      <Surface className="w-[172px] space-y-1.5 p-3">
        {providers.map((p, i) => (
          <span
            key={p.name}
            className={`flex items-center justify-center gap-1.5 rounded-md border border-border py-1.5 text-[9px] font-semibold text-foreground/75 transition-colors duration-300 ${
              i === 0 ? "group-hover:bg-foreground/5" : ""
            }`}
          >
            <span className={`text-[10px] font-bold ${p.color}`}>{p.mark}</span>
            {p.name}で続ける
          </span>
        ))}
        <div className="flex items-center gap-2 py-0.5">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[8px] text-foreground/40">または</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <MiniField>メールアドレス</MiniField>
      </Surface>
    </div>
  );
}
