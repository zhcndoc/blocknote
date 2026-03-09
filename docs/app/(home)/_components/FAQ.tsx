import React from "react";

const faqs = [
  {
    question: "直接使用 Headless 编辑器框架不是更简单吗？",
    answer:
      "现在确实有不少很强大的 Headless 文本编辑器框架。事实上，BlockNote 就构建在 ProseMirror 和 TipTap 之上。但即便使用 Headless 库，要做出一个功能完整、界面精致、符合用户预期的编辑器，往往仍然需要数月时间和很深的专业经验。",
  },
  {
    question: "BlockNote 可以直接用于生产环境吗？",
    answer:
      "BlockNote 已被数十家公司用于生产环境，覆盖从初创团队到大型企业和公共机构。并且我们没有重复造轮子，核心编辑器建立在久经考验的 ProseMirror 之上，Atlassian、GitLab、纽约时报等许多产品都在使用它。",
  },
  {
    question: "我可以为 BlockNote 添加自己的扩展吗？",
    answer:
      "BlockNote 开箱即带来大量功能，但我们也清楚每个场景都不同。你可以轻松定制内置 UI 组件，或者创建自己的自定义区块、行内内容和样式。如果还想走得更远，也可以继续基于 ProseMirror 或 TipTap 插件扩展核心编辑器。",
  },
  {
    question: "BlockNote 真的免费吗？",
    answer:
      "BlockNote 100% 开源。我们通过咨询服务、支持服务，以及特定 XL 扩展包的商业许可来维持项目发展。更多细节可以查看定价页面。",
  },
];

export const FAQ: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-t border-stone-100 bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <h2 className="font-serif text-5xl font-medium tracking-tight text-stone-900 md:text-6xl">
            常见问题
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="font-sans text-xl font-bold leading-tight text-stone-900">
                {faq.question}
              </h3>
              <p className="font-sans text-base leading-relaxed text-stone-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
