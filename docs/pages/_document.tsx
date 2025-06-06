// import { Analytics } from "@vercel/analytics/react";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          <script async src="https://www.zhcndoc.com/js/common.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <Analytics /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
