import type { UIItem } from "@/types/ui";

export const cartDrawer: UIItem = {
  slug: "cart-drawer",
  name: "Cart Drawer",
  nameJa: "カートドロワー",
  description:
    "カート追加時に画面横からスライド表示されるミニカート。ページ遷移なしで購入へ導く。",
  category: "e-commerce",
  tags: ["EC", "カート", "ドロワー", "スライドイン", "ミニカート"],
  aliases: [
    "カートに入れると横から出てくるやつ",
    "画面の右からスライドしてくる買い物かご",
    "ページ移動しないで見られるカート",
    "サイドから出てくるミニカート",
    "スライド式のショッピングカート",
    "商品を追加した瞬間に開くカートパネル",
  ],
  whatIs: [
    "カートドロワー（Cart Drawer）は、ECサイトで「カートに入れる」を押した瞬間に、画面の右端（まれに左端）からスライドインして表示されるカートパネルです。引き出し（drawer）のように横からスッと出てくる動きに由来する名前で、ミニカート、スライドカートとも呼ばれます。汎用のドロワーUIをカート専用に特化させたコンポーネントです。",
    "最大の目的は「買い物の流れを分断しないこと」です。従来のカート専用ページへの遷移では、ユーザーは商品一覧から引き離され、買い物を続ける動機が途切れがちでした。カートドロワーなら現在のページに留まったまま追加内容を確認でき、「買い物を続ける」と「レジへ進む」の分岐を最小コストで提示できます。Shopifyでは Dawn をはじめ多くの公式テーマが標準搭載しており、事実上のグローバルスタンダードです。",
    "一方、Amazonはカート追加後に確認ページ（または右カラムのサイドバー）を表示し、楽天市場はカートページへ直接遷移する伝統的な設計を採用しているなど、大手でも戦略は分かれています。単品購入が多いストアではカートページ直行が、ついで買いを促したいD2Cストアではカートドロワーが有利とされ、A/Bテストで検証する価値の高いUIです。",
  ],
  features: [
    "カート追加をトリガーに画面横からスライドインして表示される",
    "商品サムネイル・数量ステッパー・削除ボタン・小計をコンパクトに表示する",
    "「レジへ進む」と「買い物を続ける」の2導線を明確に提示する",
    "背景にオーバーレイを敷き、外側クリックやEscキーで閉じられる",
    "「あと¥3,000で送料無料」などのプロモーションバーを組み込める",
    "関連商品のレコメンドを載せてついで買い（クロスセル）を促せる",
  ],
  merits: [
    "ページ遷移なしでカート内容を確認でき、買い物の流れが途切れない",
    "追加した商品が視覚的に確認できるため「入ったかどうか」の不安を解消できる",
    "「買い物を続ける」導線が自然に用意され、複数商品の購入（AOV向上）を促せる",
    "送料無料バーやレコメンドで客単価を上げる施策を組み込みやすい",
    "モバイルでも全画面を奪わず、文脈を保ったまま操作できる",
  ],
  demerits: [
    "表示領域が狭く、商品数が多い場合の一覧性はカートページに劣る",
    "クーポン適用や配送オプションなど複雑な操作を詰め込むと破綻する",
    "実装にはフォーカストラップやスクロールロックなど考慮事項が多い",
    "自動で開く挙動を煩わしく感じるユーザーも一定数いる",
    "数量変更のたびに小計を再計算・再取得する必要があり、状態管理が複雑になる",
  ],
  bestPractices: [
    "カート追加時に自動で開き、追加された商品を先頭で強調表示する",
    "「レジへ進む」をプライマリボタンにし、小計をボタンの近くに常時表示する",
    "数量変更・削除はドロワー内で完結させ、ページリロードを発生させない",
    "送料無料までの残額バーを置くと客単価向上に効果的（Shopifyストアの定番施策）",
    "空の状態には「カートは空です」＋人気商品への導線を用意する",
    "スライドインは250〜300ms程度にし、prefers-reduced-motionでは即時表示にする",
  ],
  useCases: [
    "Shopifyストア全般 — Dawnテーマ標準のカートドロワー（D2Cサイトの標準形）",
    "Apple Store — バッグ追加時のドロップダウン／パネル型ミニカート",
    "ユニクロ・ZARAなどアパレルEC — 追加後のスライドインカート",
    "BASE / STORESで構築された国内D2Cサイトのミニカート",
    "海外D2C（Allbirds、Gymsharkなど）— レコメンド付きカートドロワー",
  ],
  accessibility: [
    "ドロワーに role=\"dialog\" と aria-modal=\"true\"、aria-labelledby で「カート」という名前を与える",
    "開いたらフォーカスをドロワー内へ移動し、フォーカストラップで内部に留める",
    "Escキーと閉じるボタンの両方で閉じられるようにし、閉じたら元のトリガーへフォーカスを戻す",
    "商品追加時は aria-live で「商品をカートに追加しました」を通知する",
    "数量ステッパーの＋/−ボタンに「数量を増やす/減らす」のaria-labelを付ける",
    "背景コンテンツには inert（または aria-hidden）を適用し、背後への操作を防ぐ",
  ],
  figma: [
    "デスクトップは幅400〜480pxの右固定パネル、モバイルは全幅の2フレームを用意する",
    "商品行（サムネ・商品名・数量・価格）をComponent化し、リスト全体をAuto Layoutで組む",
    "ヘッダー固定・商品リストのみスクロール・フッター（小計＋CTA）固定の3層構造にする",
    "Overlayは黒40%程度のFillを敷き、Open/ClosedのVariantで管理する",
    "プロトタイプはMove In（右から、300ms、Ease Out）を設定すると実挙動に近くなる",
    "商品0件・1件・多数・送料無料達成の4状態を作ると実装時の考慮漏れを防げる",
  ],
  code: {
    html: `<!-- オーバーレイ＋右からスライドするカートドロワー -->
<button id="open-cart">カートを開く</button>

<div id="cart-overlay" class="overlay" hidden></div>
<aside
  id="cart-drawer"
  class="cart-drawer"
  role="dialog"
  aria-modal="true"
  aria-labelledby="cart-title"
  hidden
>
  <header class="cart-header">
    <h2 id="cart-title">カート（2点）</h2>
    <button id="close-cart" aria-label="カートを閉じる">&times;</button>
  </header>
  <div class="cart-items">
    <!-- 商品行 -->
  </div>
  <footer class="cart-footer">
    <p class="subtotal"><span>小計</span><strong>¥12,800</strong></p>
    <a class="checkout-btn" href="/checkout">レジへ進む</a>
  </footer>
</aside>

<style>
  .overlay {
    position: fixed; inset: 0;
    background: rgb(0 0 0 / 0.4);
  }
  .cart-drawer {
    position: fixed; top: 0; right: 0; bottom: 0;
    width: min(420px, 100vw);
    background: #fff;
    display: flex; flex-direction: column;
    box-shadow: -8px 0 24px rgb(0 0 0 / 0.12);
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
  }
  .cart-drawer.open { transform: translateX(0); }
  .cart-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 20px; border-bottom: 1px solid #e5e7eb;
  }
  .cart-items { flex: 1; overflow-y: auto; padding: 16px 20px; }
  .cart-footer { padding: 16px 20px; border-top: 1px solid #e5e7eb; }
  .subtotal { display: flex; justify-content: space-between; }
  .checkout-btn {
    display: block; text-align: center;
    background: #db2777; color: #fff;
    padding: 14px; border-radius: 12px; font-weight: 700;
    text-decoration: none;
  }
</style>

<script>
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  const openBtn = document.getElementById("open-cart");

  function toggleCart(open) {
    drawer.hidden = overlay.hidden = !open;
    requestAnimationFrame(() => drawer.classList.toggle("open", open));
    if (open) drawer.querySelector("button").focus();
    else openBtn.focus();
  }
  openBtn.addEventListener("click", () => toggleCart(true));
  document.getElementById("close-cart").addEventListener("click", () => toggleCart(false));
  overlay.addEventListener("click", () => toggleCart(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !drawer.hidden) toggleCart(false);
  });
</script>`,
    tailwind: `<!-- 開いた状態のカートドロワー -->
<div class="fixed inset-0 z-40 bg-black/40" aria-hidden="true"></div>

<aside
  class="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
  role="dialog"
  aria-modal="true"
  aria-labelledby="cart-title"
>
  <!-- ヘッダー -->
  <header class="flex items-center justify-between border-b border-gray-200 px-5 py-4">
    <h2 id="cart-title" class="text-lg font-bold">カート（2点）</h2>
    <button
      type="button"
      aria-label="カートを閉じる"
      class="rounded-full p-2 text-gray-500 hover:bg-gray-100"
    >
      <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </header>

  <!-- 送料無料バー -->
  <div class="bg-pink-50 px-5 py-2.5 text-sm text-pink-700">
    あと<strong>¥2,200</strong>で送料無料！
  </div>

  <!-- 商品リスト（スクロール領域） -->
  <ul class="flex-1 divide-y divide-gray-100 overflow-y-auto px-5">
    <li class="flex gap-4 py-4">
      <img src="/img/tote.jpg" alt="" class="size-20 rounded-xl object-cover" />
      <div class="flex flex-1 flex-col">
        <p class="font-medium">キャンバストートバッグ</p>
        <p class="text-sm text-gray-500">ナチュラル / M</p>
        <div class="mt-auto flex items-center justify-between">
          <div class="flex items-center rounded-lg border border-gray-200">
            <button class="px-2.5 py-1" aria-label="数量を減らす">−</button>
            <span class="min-w-8 text-center text-sm tabular-nums">1</span>
            <button class="px-2.5 py-1" aria-label="数量を増やす">＋</button>
          </div>
          <p class="font-semibold tabular-nums">¥5,800</p>
        </div>
      </div>
    </li>
  </ul>

  <!-- フッター -->
  <footer class="space-y-3 border-t border-gray-200 px-5 py-4">
    <div class="flex justify-between text-sm">
      <span class="text-gray-500">小計（税込・送料別）</span>
      <span class="text-lg font-bold tabular-nums">¥12,800</span>
    </div>
    <a
      href="/checkout"
      class="block rounded-xl bg-pink-600 py-3.5 text-center font-bold text-white
             hover:bg-pink-700"
    >
      レジへ進む
    </a>
    <button type="button" class="w-full text-center text-sm text-gray-500 underline">
      買い物を続ける
    </button>
  </footer>
</aside>`,
    react: `"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
};

export function CartDrawer({
  open,
  onClose,
  items,
  onChangeQuantity,
}: {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onChangeQuantity: (id: string, quantity: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // 開いたらフォーカス移動＋Escで閉じる＋背景スクロールロック
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40"
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={\`カート（\${items.length}点）\`}
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col
                   bg-white shadow-2xl"
      >
        <header className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-bold">カート（{items.length}点）</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="カートを閉じる"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
          >
            <X aria-hidden className="size-5" />
          </button>
        </header>

        <ul className="flex-1 divide-y divide-gray-100 overflow-y-auto px-5">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-4">
              <img
                src={item.image}
                alt=""
                className="size-20 rounded-xl object-cover"
              />
              <div className="flex flex-1 flex-col">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.variant}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-lg border">
                    <button
                      type="button"
                      aria-label={\`\${item.name}の数量を減らす\`}
                      onClick={() =>
                        onChangeQuantity(item.id, Math.max(0, item.quantity - 1))
                      }
                      className="px-2.5 py-1"
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label={\`\${item.name}の数量を増やす\`}
                      onClick={() => onChangeQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1"
                    >
                      ＋
                    </button>
                  </div>
                  <p className="font-semibold tabular-nums">
                    ¥{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <footer className="space-y-3 border-t px-5 py-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">小計（税込・送料別）</span>
            <span className="text-lg font-bold tabular-nums">
              ¥{subtotal.toLocaleString()}
            </span>
          </div>
          <a
            href="/checkout"
            className="block rounded-xl bg-pink-600 py-3.5 text-center font-bold
                       text-white hover:bg-pink-700"
          >
            レジへ進む
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full text-sm text-gray-500 underline"
          >
            買い物を続ける
          </button>
        </footer>
      </aside>
    </>
  );
}`,
    shadcn: `// npx shadcn@latest add sheet button separator
// Sheet（side="right"）をカートドロワーとして使う
"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function CartDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="カートを開く">
          <ShoppingBag aria-hidden className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>カート（2点）</SheetTitle>
        </SheetHeader>

        <ul className="flex-1 space-y-4 overflow-y-auto py-2">
          <li className="flex gap-4">
            <img
              src="/img/tote.jpg"
              alt=""
              className="size-20 rounded-xl object-cover"
            />
            <div className="flex flex-1 flex-col">
              <p className="font-medium">キャンバストートバッグ</p>
              <p className="text-sm text-muted-foreground">ナチュラル / M</p>
              <p className="mt-auto font-semibold tabular-nums">¥5,800</p>
            </div>
          </li>
        </ul>

        <SheetFooter className="mt-auto block space-y-3">
          <Separator />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">小計</span>
            <span className="text-lg font-bold tabular-nums">¥12,800</span>
          </div>
          <Button className="w-full" size="lg">
            レジへ進む
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`,
  },
  related: ["drawer", "product-card", "checkout-form", "bottom-sheet"],
  views: 18700,
  favorites: 820,
  collections: ["ec-ui", "shopify-ui", "mobile-ui"],
  gradient: "from-fuchsia-500/15 via-rose-500/10 to-orange-500/15",
  difficulty: 2,
  updatedAt: "2026-07-02",
};
