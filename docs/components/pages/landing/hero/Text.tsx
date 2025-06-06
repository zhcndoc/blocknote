import {
  HeroText,
  SectionSubtext,
} from "@/components/pages/landing/shared/Headings";
import CTAButton from "@/components/pages/landing/shared/CTAButton";

export function Text() {
  return (
    <div className="relative flex h-fit flex-col items-center justify-center gap-6 text-center xl:w-[584px] xl:items-start xl:text-left">
      <div className="hero-glow text-glow absolute block h-full w-full sm:hidden" />
      <HeroText h1 className={"z-10 leading-tight"}>
        开源的
        {/* <br /> */}
        <strong>区块</strong>
        <br />
        富文本编辑器
      </HeroText>
      <SectionSubtext className={"z-10"}>
        一款美观实用的文本编辑器，轻松为应用添加用户喜爱的编辑功能。支持自定义扩展，如定制内容区块或集成AI工具，按需打造专属编辑器。
      </SectionSubtext>
      <CTAButton href={"/docs"} hoverGlow={true}>
        开始使用
      </CTAButton>
    </div>
  );
}
