import { SubmitForm } from "@/components/dictionary/submit-form";
import { buildMetadata } from "@/lib/seo";
import { BadgeCheck, Image as ImageIcon, ShieldCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "UIを投稿する",
  description:
    "あなたが見つけた優れたUIをUI Dictionary Japanに投稿。審査を通過するとクレジット付きで掲載されます。",
  path: "/submit",
});

const steps = [
  {
    icon: ImageIcon,
    title: "スクリーンショットとURLを送る",
    body: "掲載したいUIのスクリーンショット、参考URL、簡単な説明を入力するだけ。",
  },
  {
    icon: ShieldCheck,
    title: "編集部が審査",
    body: "品質・権利面を確認します。通常3営業日以内にメールでご連絡します。",
  },
  {
    icon: BadgeCheck,
    title: "クレジット付きで公開",
    body: "承認されたUIはギャラリーに掲載され、あなたの名前がクレジットされます。",
  },
];

export default function SubmitPage() {
  return (
    <div className="container py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">UIを投稿する</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            「このUI、みんなに知ってほしい」——そんな発見をぜひ共有してください。あなたの投稿が、誰かのデザインの引き出しになります。
          </p>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary dark:bg-primary-900/30">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold">
                    <span className="mr-2 text-sm text-primary">STEP {i + 1}</span>
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <SubmitForm />
      </div>
    </div>
  );
}
