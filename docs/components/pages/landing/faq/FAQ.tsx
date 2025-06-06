import { SectionIntro } from "@/components/pages/landing/shared/Headings";
import { Section } from "@/components/pages/landing/shared/Section";
import { Link } from "nextra-theme-docs";

const faqs = [
  {
    id: 1,
    question: "使用无头编辑器框架不是更简单吗？",
    answer: `有许多强大的无头文本编辑器框架可供使用。事实上，BlockNote 是基于 Prosemirror 和 TipTap 构建的。然而，即使使用无头库，构建一个功能齐全、用户期望的精美 UI 编辑器也需要几个月的时间，并且需要深厚的专业知识。`,
  },
  {
    id: 2,
    question: "BlockNote 准备好用于生产环境了吗？",
    answer: `BlockNote 被多家公司用于生产。此外，我们并没有重新发明轮子。核心编辑器建立在 Prosemirror 之上，这是一个经过实战检验的框架，支持来自 Atlassian、Gitlab、纽约时报等许多软件。`,
  },
  {
    id: 3,
    question: "我可以向 BlockNote 添加我自己的扩展吗？",
    answer: `BlockNote 开箱即用即具备丰富功能，但我们深知不同应用场景需求各异。您可轻松定制内置的 UI 组件，或创建专属的自定义区块、行内内容和样式。若需更深度扩展，还能通过添加 Prosemirror 或 TipTap 插件来增强核心编辑器功能。`,
  },
  {
    id: 4,
    question: "BlockNote 真的是免费的吗？",
    answer: `BlockNote 的 100% 是开源的。虽然该库是免费的，但我们提供付费咨询和支持服务，以帮助维持 BlockNote。如果您在商业项目中使用 BlockNote，我们鼓励您注册 BlockNote Pro！`,
  },
];

export function FAQ() {
  return (
    <Section className="py-16 sm:py-16">
      <div className="z-20 flex max-w-full flex-col items-center gap-12 px-6 text-center md:max-w-7xl">
        <SectionIntro
          header={"常见问题"}
          subtext={
            <>
              还有更多问题吗？<Link href="/about">联系我们的团队</Link>。
            </>
          }
        />

        {/* <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
          More questions? <Link href="/about">Reach out to our team</Link>.
        </p> */}
        <dl className="space-y-16 text-left sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
