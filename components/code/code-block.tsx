"use client";

import { CODE_LANGUAGE_LABELS, type CodeLanguage, type CodeSnippets } from "@/types/ui";
import { cn } from "@/lib/utils";
import { Check, Copy, TerminalSquare } from "lucide-react";
import { useMemo, useState } from "react";

/**
 * 言語切り替えタブ + コピー機能付きコードブロック。
 * シンタックスハイライトは軽量な自前トークナイザ（依存ゼロ）。
 */
export function CodeBlock({ code }: { code: CodeSnippets }) {
  const languages = useMemo(
    () =>
      (Object.keys(CODE_LANGUAGE_LABELS) as CodeLanguage[]).filter(
        (l) => code[l],
      ),
    [code],
  );
  const [active, setActive] = useState<CodeLanguage>(languages[0] ?? "html");
  const [copied, setCopied] = useState(false);

  const source = code[active] ?? "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-card">
      {/* header */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-2 py-2">
        <div
          role="tablist"
          aria-label="実装言語を選択"
          className="flex items-center gap-1 overflow-x-auto"
        >
          <TerminalSquare className="ml-2 mr-1 size-4 shrink-0 text-slate-500" aria-hidden />
          {languages.map((lang) => (
            <button
              key={lang}
              role="tab"
              aria-selected={active === lang}
              onClick={() => setActive(lang)}
              className={cn(
                "shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                active === lang
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200",
              )}
            >
              {CODE_LANGUAGE_LABELS[lang]}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label="コードをコピー"
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
            copied
              ? "bg-emerald-500/15 text-emerald-400"
              : "text-slate-400 hover:bg-slate-800 hover:text-white",
          )}
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "コピーしました" : "コピー"}
        </button>
      </div>

      {/* code */}
      <div role="tabpanel" className="max-h-[520px] overflow-auto">
        <pre className="p-5 text-[13px] leading-relaxed text-slate-200">
          <code>
            {source.split("\n").map((line, i) => (
              <span key={i} className="block">
                <Highlighted line={line} />
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

/** 依存ゼロの軽量ハイライト（コメント / 文字列 / キーワード / タグ） */
function Highlighted({ line }: { line: string }) {
  const tokens = tokenize(line);
  return (
    <>
      {tokens.map((t, i) => (
        <span key={i} className={tokenClass(t.type)}>
          {t.value}
        </span>
      ))}
    </>
  );
}

type Token = { type: "comment" | "string" | "keyword" | "tag" | "plain"; value: string };

const KEYWORDS =
  /\b(import|export|from|const|let|var|function|return|if|else|type|interface|extends|default|async|await|new|class|use client|useState|useEffect)\b/;

function tokenize(line: string): Token[] {
  // コメント行
  const commentIdx = findComment(line);
  if (commentIdx === 0) return [{ type: "comment", value: line }];

  const tokens: Token[] = [];
  let rest = line;
  if (commentIdx > 0) {
    rest = line.slice(0, commentIdx);
  }

  // 文字列・キーワード・タグをざっくり分割
  const pattern = /("[^"]*"|'[^']*'|`[^`]*`|<\/?[a-zA-Z][\w.-]*|\{|\})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(rest)) !== null) {
    if (m.index > last) pushPlain(tokens, rest.slice(last, m.index));
    const v = m[0];
    if (v.startsWith('"') || v.startsWith("'") || v.startsWith("`")) {
      tokens.push({ type: "string", value: v });
    } else if (v.startsWith("<")) {
      tokens.push({ type: "tag", value: v });
    } else {
      tokens.push({ type: "plain", value: v });
    }
    last = m.index + v.length;
  }
  if (last < rest.length) pushPlain(tokens, rest.slice(last));
  if (commentIdx > 0) tokens.push({ type: "comment", value: line.slice(commentIdx) });
  return tokens;
}

function findComment(line: string): number {
  const t = line.trimStart();
  if (t.startsWith("//") || t.startsWith("/*") || t.startsWith("*") || t.startsWith("<!--"))
    return line.length - t.length === 0 ? 0 : 0;
  const idx = line.indexOf("//");
  // URL内の//を除外
  if (idx > 0 && line[idx - 1] !== ":") return idx;
  return -1;
}

function pushPlain(tokens: Token[], text: string) {
  let last = 0;
  const re = new RegExp(KEYWORDS, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) tokens.push({ type: "plain", value: text.slice(last, m.index) });
    tokens.push({ type: "keyword", value: m[0] });
    last = m.index + m[0].length;
  }
  if (last < text.length) tokens.push({ type: "plain", value: text.slice(last) });
}

function tokenClass(type: Token["type"]): string {
  switch (type) {
    case "comment":
      return "text-slate-500 italic";
    case "string":
      return "text-emerald-400";
    case "keyword":
      return "text-sky-400";
    case "tag":
      return "text-violet-400";
    default:
      return "";
  }
}
