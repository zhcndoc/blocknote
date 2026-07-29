import { FAQ } from "@/app/pricing/faq";
import { Tier } from "@/app/pricing/tiers";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getFullMetadata } from "@/lib/getFullMetadata";
import Link from "next/link";
import { PricingTiers } from "./PricingTiers";

export const metadata = getFullMetadata({
  title: "定价",
  path: "/pricing",
});

const sponsors = [
  // { name: "Semrush", logo: "/img/sponsors/semrush.light.png" },
  // { name: "NLnet", logo: "/img/sponsors/nlnetLight.svg" },
  { name: "DINUM", logo: "/img/sponsors/dinumLight.svg" },
  { name: "ZenDiS", logo: "/img/sponsors/zendis.svg" },
  { name: "OpenProject", logo: "/img/sponsors/openproject.svg" },
  { name: "Poggio", logo: "/img/sponsors/poggioLight.svg" },
  { name: "Capitol", logo: "/img/sponsors/capitolLight.svg" },
  { name: "Twenty", logo: "/img/sponsors/twentyLight.png" },
  { name: "Deep Origin", logo: "/img/sponsors/deepOrigin.svg" },
  // { name: "Krisp", logo: "/img/sponsors/krisp.svg" },
];

const tiers: Tier[] = [
  {
    id: "free",
    title: "社区版",
    icon: "💚",
    tagline: "开始使用",
    description: (
      <>
        开始使用所需的一切功能。{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              delay={100}
              className="cursor-default font-medium underline decoration-stone-400 decoration-dotted decoration-1 underline-offset-4"
            >
              宽松许可
            </TooltipTrigger>
            <TooltipContent className="max-w-[280px] p-3 leading-normal">
              BlockNote 采用 MPL 许可证。它与 MIT 很接近，可免费用于任意
              用途。关键区别在于“相同方式共享”要求：如果你修改了 BlockNote
              的内部文件，就必须公开这些特定修改。
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        且可免费用于任何项目。
      </>
    ),
    price: "免费",
    features: [
      "全部区块与 UI 组件",
      "拖放式编辑",
      "斜杠菜单与命令",
      "实时协作",
      "评论功能",
      <span key="xl" className="text-stone-500">
        XL 扩展包对 GPL-3.0 开源项目免费
      </span>,
    ],
    cta: "get-started",
    href: "/docs",
  },
  {
    id: "business",
    title: "商业版",
    icon: "⚡",
    tagline: "升级进阶",
    mostPopular: true,
    badge: "Recommended",
    description: (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              delay={100}
              className="cursor-default font-medium underline decoration-stone-400 decoration-dotted decoration-1 underline-offset-4"
            >
              Commercial license
            </TooltipTrigger>
            <TooltipContent className="max-w-[280px] p-3 leading-normal">
              A commercial license is required to use the XL packages in
              closed-source applications. See{" "}
              <Link
                href="/legal/blocknote-xl-commercial-license"
                className="text-purple-600 hover:underline"
              >
                full license terms
              </Link>{" "}
              for details.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        for access to advanced features and technical support.
      </>
    ),
    price: { month: 390, year: 2340 },
    features: [
      <span key="commercial" className="font-semibold text-stone-900">
        XL 扩展包商业许可：
      </span>,
      <span key="ai" className="ml-4 text-stone-500">
        • AI 集成
      </span>,
      <span key="layouts" className="ml-4 text-stone-500">
        • 多栏布局
      </span>,
      <span key="export" className="ml-4 text-stone-500">
        • 导出为 PDF、Docx、ODT、Email
      </span>,
      "官网与代码仓库展示 Logo",
      <span key="sla">
        标准支持（
        <Link
          href="/legal/service-level-agreement"
          className="text-purple-600 hover:underline"
        >
          查看 SLA
        </Link>
        ）
      </span>,
    ],
    cta: "buy",
  },
  {
    id: "enterprise",
    title: "企业版",
    icon: "🏢",
    tagline: "长期合作",
    description: "定制授权、专属支持与联合设计合作。",
    price: "定制报价",
    features: [
      <span key="stack" className="font-semibold text-purple-600">
        包含商业版全部内容，另外还提供：
      </span>,
      "定制开发 BlockNote 功能",
      "与维护者的专属 Slack 频道",
      "上手与集成指导",
      <span key="sla">
        优先支持（
        <Link
          href="/legal/service-level-agreement"
          className="text-purple-600 hover:underline"
        >
          查看 SLA
        </Link>
        ）
      </span>,
    ],
    href: "mailto:team@blocknotejs.org",
    cta: "contact",
  },
];

export default function Pricing() {
  return (
    <div className="bg-gradient-to-b from-white via-stone-50/50 to-white text-stone-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold tracking-widest text-purple-600 uppercase">
            定价
          </p>
          <h1 className="mb-6 font-serif text-5xl text-stone-900 md:text-7xl">
            100% 开源。
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              透明定价。
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-stone-500">
            BlockNote 的大部分功能都采用宽松许可证，可免费用于任何用途。
            双重授权的 XL 功能（例如 AI）对开源项目免费，但闭源应用需要
            商业许可。
          </p>
        </div>

        {/* Pricing Tiers with Toggle */}
        <PricingTiers tiers={tiers} />

        {/* Social proof */}
        <div className="mt-24 w-full border-t border-stone-200 pt-16">
          <p className="mb-8 text-center text-sm font-medium text-stone-500">
            受到构建下一代协作产品团队的信赖
          </p>
          <InfiniteSlider gap={48} speed={30} speedOnHover={15}>
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex h-12 items-center justify-center px-4 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-8 max-w-[120px] object-contain"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>

        {/* Startup Discounts */}
        <div className="mt-24 w-full max-w-4xl rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-8 text-center sm:p-12">
          <h2 className="mb-4 text-2xl font-bold text-stone-900 sm:text-3xl">
            初创团队优惠
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-stone-600">
            正在打造下一件大事？我们很乐意支持早期团队。如果你是种子轮
            初创公司或非营利组织，欢迎联系我们获取商业版特别价格。
          </p>
          <a
            href="mailto:team@blocknotejs.org?subject=Startup%20Discount%20Inquiry"
            className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            申请初创扶持计划
          </a>
        </div>

        {/* FAQ */}
        <FAQ />
      </div>
    </div>
  );
}
