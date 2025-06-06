import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "BlockNote Pro 是与 BlockNote 不同的库吗？",
    answer: `BlockNote Pro 不是一个额外的库，而是围绕开源 BlockNote 库构建的订阅服务。通过您的订阅，您确保了 BlockNote 的可持续维护和开发，并确保它在开源许可证下保持最新。您还将获得优先支持、功能请求和访问 Pro 示例的权限。`,
  },
  {
    question: "您接受哪些支付方式？",
    answer: `BlockNote Pro 与 GitHub 赞助商完全整合，这意味着发票和支付由 GitHub 处理。如果您需要其他支付方式，请联系我们。`,
  },
  {
    question:
      "BlockNote 使用什么许可证？我可以将其用于商业项目吗？",
    answer: `BlockNote 是一款开源软件，采用 MPL 2.0 许可证，这允许您在商业（和闭源）应用中使用 BlockNote - 即使没有订阅。如果您对 BlockNote 源文件进行了更改，您需要发布这些更改，以便更广泛的社区也能受益。XL 包是双重许可的，提供 AGPL-3.0 许可证，或者 - 对于闭源项目 - 作为 BlockNote 商业订阅或更高级别的一部分提供商业许可证。`,
  },
  // More questions...
];

export function FAQ() {
  return (
    <div className="w-full max-w-screen-lg px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        <h2 className="text-2xl font-bold leading-10 tracking-tight">
          常见问题
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-200 dark:divide-gray-800">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="pt-6">
              <dt>
                <Disclosure.Button className="group flex w-full items-start justify-between text-left">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusIcon
                      aria-hidden="true"
                      className="h-6 w-6 group-data-[open]:hidden"
                    />
                    <MinusIcon
                      aria-hidden="true"
                      className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-[#00000080] dark:text-[#FFFFFFB2]">
                  {faq.answer}
                </p>
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
