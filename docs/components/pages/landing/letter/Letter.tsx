import cn from "classnames";
import CTAButton from "@/components/pages/landing/shared/CTAButton";
import { Section } from "@/components/pages/landing/shared/Section";
import { FadeIn } from "@/components/pages/landing/shared/FadeIn";
import { HeroText } from "@/components/pages/landing/shared/Headings";
import gradients from "@/components/pages/landing/shared/gradients.module.css";

export function Letter() {
  return (
    <Section gradientBackground className="pb-16 pt-12 xl:pb-24 xl:pt-16">
      <div
        className={
          "z-20 flex max-w-xl flex-col items-center gap-12 px-6 xl:gap-16"
        }
      >
        <FadeIn>
          <HeroText>建设历程</HeroText>
        </FadeIn>
        <FadeIn className="flex flex-col gap-3 leading-6 md:text-lg">
          <p>
            当我们开始构建一个开源的 Notion
            替代品时，我们想：“这会有多难呢？”结果发现，非常困难。2024年的文本编辑器？比我们想象的要复杂得多。
          </p>
          <br />
          <p>
            在深入研究许多复杂问题并意外成为 Prosemirror
            的专家（这是像纽约时报、Atlassian、Gitlab
            等巨头使用的行业标准）之后，我们意识到通过在其基础上创建一个现代的、功能齐全的、基于区块的文本编辑器，可以为其他开发者节省很多麻烦。
          </p>
          <br />
          <p>
            我们很高兴与您分享
            BlockNote。无需再处理低级别的位置；使用强类型、基于块的 API
            来处理您的编辑器和文档。无需从头构建所有界面元素；它自带现代 UI
            组件。现在，您只需几行代码，就可以为您的应用添加一个具有精美用户体验的富文本编辑器。
          </p>
          <br />
          <p>
            虽然尚处早期阶段，但这份热情真实可感。我们看到企业、爱好者和社区先锋纷纷加入。作为一个由社区主导的开源项目，我们热切期待您的贡献、反馈或合作！
          </p>
        </FadeIn>
        <FadeIn className="relative h-px w-full" noVertical viewTriggerOffset>
          <span className={cn("absolute h-px w-full", gradients.letterLine)} />
        </FadeIn>
        <FadeIn noVertical>
          <CTAButton href={"/docs"} hoverGlow={true}>
            开始构建
          </CTAButton>
        </FadeIn>
      </div>
    </Section>
  );
}
