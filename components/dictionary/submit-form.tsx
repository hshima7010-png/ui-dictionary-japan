"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import { CheckCircle2, CloudUpload, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "done" | "error";

export function SubmitForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(form.entries())),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-12 text-center shadow-card">
        <CheckCircle2 className="size-12 text-emerald-500" aria-hidden />
        <h2 className="mt-5 text-xl font-bold">投稿ありがとうございます！</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          審査結果は3営業日以内にメールでお知らせします。承認され次第、ギャラリーに掲載されます。
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
          続けて投稿する
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-8 shadow-card"
      aria-label="UI投稿フォーム"
    >
      <div className="space-y-6">
        <Field label="タイトル" htmlFor="title" required>
          <input
            id="title"
            name="title"
            required
            maxLength={80}
            placeholder="例：Stripeの料金スライダー"
            className={inputCls}
          />
        </Field>

        <Field label="参考URL" htmlFor="url" required>
          <input
            id="url"
            name="url"
            type="url"
            required
            placeholder="https://example.com"
            className={inputCls}
          />
        </Field>

        <Field label="スクリーンショット" htmlFor="screenshot">
          <label
            htmlFor="screenshot"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border py-10 text-center transition-colors hover:border-primary/50 hover:bg-muted/50"
          >
            <CloudUpload className="size-6 text-muted-foreground" aria-hidden />
            <span className="text-sm font-medium">
              {fileName ?? "クリックして画像を選択"}
            </span>
            <span className="text-xs text-muted-foreground">PNG / JPG、5MBまで</span>
            <input
              id="screenshot"
              name="screenshot"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
        </Field>

        <Field label="カテゴリー" htmlFor="category" required>
          <select id="category" name="category" required className={inputCls} defaultValue="">
            <option value="" disabled>
              選択してください
            </option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nameJa}（{c.name}）
              </option>
            ))}
          </select>
        </Field>

        <Field label="タグ" htmlFor="tags" hint="カンマ区切りで最大5個">
          <input id="tags" name="tags" placeholder="アニメーション, ダークモード" className={inputCls} />
        </Field>

        <Field label="説明" htmlFor="description" required>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            maxLength={500}
            placeholder="どこが優れているのか、どんな場面で参考になるのかを教えてください"
            className={cn(inputCls, "h-auto py-3 leading-relaxed")}
          />
        </Field>

        <Field label="メールアドレス" htmlFor="email" required hint="審査結果の連絡にのみ使用します">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputCls}
          />
        </Field>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-600 dark:bg-rose-950/40 dark:text-rose-300">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <Button type="submit" size="lg" className="mt-8 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            送信中...
          </>
        ) : (
          "審査に出す"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        投稿により<a href="/about#terms" className="underline hover:text-foreground">利用規約</a>に同意したものとみなされます
      </p>
    </form>
  );
}

const inputCls =
  "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/50 focus:shadow-glow";

function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 flex items-baseline gap-2 text-sm font-semibold">
        {label}
        {required && (
          <span className="rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-medium text-rose-500 dark:bg-rose-950/40">
            必須
          </span>
        )}
        {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
