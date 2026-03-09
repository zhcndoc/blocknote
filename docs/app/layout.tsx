import { Footer } from "@/components/Footer";
import { Provider } from "@/components/provider";
import { getFullMetadata } from "@/lib/getFullMetadata";
import Script from "next/script";
// import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import "./global.css";
import "./gradients.css";
import "./styles.css";

export const metadata: Metadata = getFullMetadata({
  title: "适用于 React 的基于块的富文本编辑器",
  description:
    "一个开箱即用的现代富文本编辑器。轻松将用户喜爱的编辑体验接入你的应用，并通过自定义区块、AI 能力等方式按需扩展。",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <Script async src="https://www.zhcndoc.com/js/common.js"></Script>
        <Script id="wwads-inject" strategy="afterInteractive">
          {`
            (function () {
              function injectAdsIntoLayout() {
                const tocRoot = document.getElementById("nd-toc");
                if (!tocRoot) return;

                const firstChild = tocRoot.firstElementChild;
                if (!firstChild) return;

                if (tocRoot.querySelector(".wwads-cn.wwads-vertical")) return;

                const verticalAd = document.createElement("div");
                verticalAd.className = "wwads-cn wwads-vertical";
                verticalAd.setAttribute(
                  "style",
                  "max-width: 200px; margin-top: 0; margin-bottom: 1rem; flex-shrink: 0;"
                );
                verticalAd.setAttribute("data-id", "354");
                tocRoot.insertBefore(verticalAd, firstChild);
              }

              function runWhenDomReady(fn) {
                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", fn, { once: true });
                } else {
                  fn();
                }
              }

              runWhenDomReady(() => {
                injectAdsIntoLayout();

                const observer = new MutationObserver(() => {
                  injectAdsIntoLayout();
                });

                observer.observe(document.body, {
                  childList: true,
                  subtree: true,
                });
              });
            })();
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col">
        <Provider>
          {children}
          <Footer />
        </Provider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
