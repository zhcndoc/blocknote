import { Metadata } from "next";

export const getFullMetadata = (metadata: {
  title: string;
  description?: string;
  path?: string;
  openGraphImages?: Exclude<Metadata["openGraph"], null | undefined>["images"];
}): Metadata => ({
  metadataBase: "https://blocknote.zhcndoc.com",
  title: `BlockNote 中文文档 - ${metadata.title}`,
  description: metadata.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    images: metadata.openGraphImages || "/og/image.png",
    locale: "zh_CN",
    siteName: "BlockNote 中文文档",
    type: "website",
    url: metadata.path || "/",
  },
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@TypeCellOS",
    site: "@TypeCellOS",
  },
});
