import { cn } from "@/lib/fumadocs/cn";
import LogoDark from "@/public/img/logos/banner.dark.svg";
import LogoLight from "@/public/img/logos/banner.svg";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

import ThemedImage from "@/components/ThemedImage";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-stone-500 no-underline transition-colors hover:text-purple-600 block py-1";
  if (href.startsWith("http")) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 font-serif text-base text-stone-900">{children}</h3>
  );
}

const navigation = {
  general: [
    { name: "文档", href: "/docs" },
    { name: "示例", href: "/examples" },
    {
      name: "发布版本",
      href: "https://github.com/TypeCellOS/BlockNote/releases",
    },
  ],

  community: [
    {
      name: "GitHub",
      href: "https://github.com/TypeCellOS/BlockNote",
    },
    {
      name: "Discord",
      href: "https://discord.com/invite/Qc2QTTH5dF",
    },
  ],
  collaborate: () => [
    { name: "与我们合作", href: `/about#partner-with-us` },
    {
      name: "赞助",
      href: `/about#sponsorships`,
    },
    {
      name: "贡献",
      href: `/about#contribute`,
    },
  ],
};

export function FooterContent() {
  return (
    <div aria-labelledby="footer-heading" className="w-full">
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>
      <div className="mx-auto w-full">
        <div className="xl:grid xl:grid-cols-3 xl:gap-16">
          <div className="mb-12 xl:mb-0">
            <ThemedImage
              src={{ light: LogoLight, dark: LogoDark }}
              alt="BlockNote"
              className="mb-6 w-40"
            />
            <p className="max-w-sm text-sm leading-relaxed text-stone-500">
              BlockNote 是一个可扩展的 React
              富文本编辑器，支持基于块的编辑、实时协作，并配备可定制的现成 UI
              组件。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
            <div>
              <FooterHeader>学习</FooterHeader>
              <ul className="space-y-1">
                {navigation.general.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterHeader>合作</FooterHeader>
              <ul className="space-y-1">
                {navigation.collaborate().map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterHeader>社区</FooterHeader>
              <ul className="space-y-1">
                {navigation.community.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterHeader>法律 & 主题</FooterHeader>
              <ul className="space-y-1">
                <li>
                  <FooterLink href={"/legal/terms-and-conditions"}>
                    服务条款
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href={"/legal/privacy-policy"}>
                    隐私政策
                  </FooterLink>
                </li>
                {/* <li className="pt-2">
                  <ThemeToggle mode="light-dark-system" />
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-stone-200 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-stone-400">
            <a target="_blank" href="https://www.zhcndoc.com">
              简中文档
            </a>
            <span>｜</span>
            <a rel="nofollow" target="_blank" href="https://beian.miit.gov.cn">
              沪ICP备2024070610号-3
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="relative z-30 border-t border-stone-200 bg-stone-50">
      <div
        className={cn(
          "mx-auto flex max-w-[90rem] justify-center py-16 text-stone-900 md:justify-center",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]",
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
