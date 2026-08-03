import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SearchProvider } from "@/components/search/search-dialog";
import { buildMetadata } from "@/lib/seo";
import { websiteJsonLd, jsonLdScript } from "@/lib/seo";
import "@/styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  ...buildMetadata({}),
  metadataBase: new URL("https://ui-dictionary.jp"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Webフォント: Inter（欧文）+ Noto Sans JP（和文）
            next/font/google はビルド時にフォント取得が必要なため、
            オフラインでもビルドできるCSSリンク方式を採用 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..800&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd()) }}
        />
        <ThemeProvider>
          <SearchProvider>
            <div className="flex min-h-dvh flex-col">
              <Navbar />
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
