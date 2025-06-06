import {
  RiMenuAddFill,
  RiPaintBrushFill,
  RiTeamFill,
  RiIndentIncrease,
  RiSettings3Fill,
} from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoMarkdown,
  BiSolidWrench,
} from "react-icons/bi";
import { Section } from "@/components/pages/landing/shared/Section";
import {
  FeatureCard,
  FeatureCardProps,
} from "@/components/pages/landing/features/FeatureCard";
import { FadeIn } from "@/components/pages/landing/shared/FadeIn";
import { SectionIntro } from "@/components/pages/landing/shared/Headings";

import worksOutOfTheBoxLight from "../../../../public/img/features/works_out_of_the_box_light.gif";
import worksOutOfTheBoxDark from "../../../../public/img/features/works_out_of_the_box_dark.gif";
import blockBasedDesignLight from "../../../../public/img/features/block_based_design_light.gif";
import blockBasedDesignDark from "../../../../public/img/features/block_based_design_dark.gif";
import collaborationLight from "../../../../public/img/features/collaboration_light.gif";
import collaborationDark from "../../../../public/img/features/collaboration_dark.gif";

export const featuresCardData: FeatureCardProps[] = [
  {
    title: "开箱即用",
    description:
      "内置组件如菜单和工具栏瞬间提供了熟悉的 Notion 风格用户体验，但也完全可定制。",
    icon: RiSettings3Fill,
    thumbnail: {
      light: worksOutOfTheBoxLight,
      dark: worksOutOfTheBoxDark,
    },
  },
  {
    title: "基于区块的设计",
    description:
      "拖放或嵌套区块。基于模块的设计让用户能够创建精美的文档，并为工程师解锁强大的API接口。",
    icon: RiIndentIncrease,
    thumbnail: {
      light: blockBasedDesignLight,
      dark: blockBasedDesignDark,
    },
  },
  {
    title: "协作",
    description: "通过支持实时协作，打造精彩的多人互动与协作体验。",
    icon: RiTeamFill,
    thumbnail: {
      light: collaborationLight,
      dark: collaborationDark,
    },
  },
  {
    title: "可扩展性",
    description: "想要更进一步吗？通过自定义块、架构和插件扩展编辑器。",
    icon: RiMenuAddFill,
  },
  {
    title: "一流的 TypeScript 支持",
    description:
      "即使在使用自定义块和模式扩展编辑器时，也能获得完整的类型安全和自动补全。",
    icon: BiLogoTypescript,
  },
  {
    title: "主题化",
    description:
      "自定义编辑器外观以匹配您的品牌风格，内置支持浅色与深色主题模式。",
    icon: RiPaintBrushFill,
  },
  {
    title: "Markdown 和 HTML",
    description:
      "将文档从 BlockNote JSON 转换为 Markdown 和 HTML，并从 Markdown 和 HTML 转换为 BlockNote JSON。",
    icon: BiLogoMarkdown,
  },
  {
    title: "基于 Prosemirror",
    description:
      "建立在经过战斗考验的 Prosemirror 之上，但没有陡峭的学习曲线。",
    icon: BiSolidWrench,
  },
  {
    title: "原生 JS",
    description:
      "不使用 React？BlockNote 同样支持原生 JavaScript，可与其他框架配合使用。",
    icon: BiLogoJavascript,
  },
];

export function Features() {
  return (
    <Section className="pb-24 pt-12 xl:pb-32 xl:pt-16">
      <div
        className={
          "z-20 flex max-w-full flex-col items-center gap-12 px-6 md:max-w-screen-md xl:max-w-none"
        }
      >
        <SectionIntro
          header={"为什么选择 BlockNote？"}
          subtext={
            "无论您想要广泛的自定义还是出色的开箱体验，BlockNote 都能满足您的需求："
          }
        />
        <FadeIn className="grid max-w-full grid-cols-1 gap-4 md:max-w-screen-md md:grid-cols-2 xl:max-w-none xl:grid-cols-3 xl:p-0">
          {featuresCardData.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
          {/* <p>...and more: (TODO)</p>
          <ul>
            <li>Helpful Placeholders</li>
            <li>Smooth Animations</li>
            <li>Image Uploads</li>
            <li>Resizable Tables</li>
          </ul> */}
        </FadeIn>
      </div>
    </Section>
  );
}
