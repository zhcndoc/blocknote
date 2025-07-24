"use client";

import LogoLight from "@/public/img/logos/banner.svg";
import LogoDark from "@/public/img/logos/banner.dark.svg";
import cn from "classnames";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

import ThemedImage from "@/components/ThemedImage";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-fd-muted-foreground no-underline transition hover:text-fd-foreground";
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
  return <h3 className="text-fd-foreground text-sm">{children}</h3>;
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
          <div className="">
            {/* <FooterHeader>Subscribe to our newsletter</FooterHeader> */}
            <ThemedImage
              src={{ light: LogoLight, dark: LogoDark }}
              alt="BlockNote"
              className="w-40"
            />
            <p className="text-fd-muted-foreground mt-4 text-sm">
              BlockNote 是一个可扩展的 React
              富文本编辑器，支持基于块的编辑、协作，并配备现成可用的可定制 UI
              组件。
            </p>
            {/* <SubmitForm /> */}
          </div>
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:gap-8">
              <div className="mt-12 xl:!mt-0">
                <FooterHeader>学习</FooterHeader>
                <ul className="ml-0 mt-4 list-none space-y-1.5">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 xl:!mt-0">
                <FooterHeader>合作</FooterHeader>
                <ul className="ml-0 mt-4 list-none space-y-1.5">
                  {navigation.collaborate().map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 xl:!mt-0">
                <FooterHeader>社区</FooterHeader>
                <ul className="ml-0 mt-4 list-none space-y-1.5">
                  {navigation.community.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 xl:!mt-0">
                <FooterHeader>法律</FooterHeader>
                <ul className="ml-0 mt-4 list-none space-y-1.5">
                  <li key={"terms-and-conditions"}>
                    <FooterLink href={"/terms-and-conditions"}>
                      使用条款
                    </FooterLink>
                  </li>
                  <li key={"privacy-policy"}>
                    <FooterLink href={"/privacy-policy"}>隐私政策</FooterLink>
                  </li>
                </ul>
              </div>
              <div className="mt-12 xl:!mt-0">
                <FooterHeader>主题</FooterHeader>
                <ul className="ml-0 mt-4 list-none space-y-1.5">
                  <li key={"theme"}>
                    <ThemeToggle mode="light-dark-system" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-fd-muted-foreground mt-4 text-xs">
              <a target="_blank" href="https://www.zhcndoc.com">
                简中文档
              </a>
              ｜
              <a
                rel="nofollow"
                target="_blank"
                href="https://beian.miit.gov.cn"
              >
                沪ICP备2024070610号-3
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="bg-fd-secondary relative z-30 mt-10">
      {/* <div className="pointer-events-none absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black" /> */}
      {/* <div
        className={cn(
          "mx-auto flex max-w-[90rem] gap-2 px-4 py-2",
          menu ? "flex" : "hidden",
        )}>
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" /> */}
      <div
        className={cn(
          "mx-auto flex max-w-[90rem] justify-center py-12 text-black md:justify-center dark:text-white",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]",
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
