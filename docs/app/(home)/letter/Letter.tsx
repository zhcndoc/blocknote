import CTAButton from "@/components/CTAButton";
import { FadeIn } from "@/components/FadeIn";
import { HeroText } from "@/components/Headings";
import { Section } from "@/components/Section";
import gradients from "@/components/gradients.module.css";
import cn from "classnames";

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
            构建一个现代化的协作文本编辑器是一个复杂的工程挑战，以前需要数月的工作、深厚的技术专长和大量的耐心——只有大型公司才能做到。
          </p>
          <p>
            利用我们的专业知识，我们着手创建一个现代化的、开箱即用的、基于区块的文本编辑器，旨在为开发者节省数月的工程工作，这一切都建立在行业标准之上，例如
            Prosemirror 和 Yjs（被纽约时报、Atlassian、Wordpress、Gitlab
            等众多公司使用）。
          </p>
          <p>进入 BlockNote。</p>
          <p>
            BlockNote
            消除了处理文本位置和文档结构的低级细节的需要。相反，使用强类型的基于块的
            API 来处理您的编辑器和文档。您还可以获得一整套现代 UI
            组件，开箱即用：无需从头构建所有界面元素。只需几行代码，您就可以将一个精致的协作文本编辑器集成到您的应用中。
          </p>
          <p>
            在一个活跃且不断壮大的公司和开发者社区的支持下，我们邀请您参与、提供反馈，并与我们合作，共同塑造富文本编辑和协作软件的未来！
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
