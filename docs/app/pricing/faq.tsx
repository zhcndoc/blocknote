"use client";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Heading } from "fumadocs-ui/components/heading";

const faqs = [
  {
    question: "BlockNote 采用什么许可证？使用 BlockNote 需要订阅吗？",
    answer: (
      <>
        我们自豪地宣布，BlockNote 是 100% 开源软件。核心库的许可证是{" "}
        <a href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0 许可证</a>，
        允许您在商业和闭源应用程序中使用 BlockNote - 即使没有订阅。如果您对
        BlockNote
        源文件进行了更改，您需要发布这些更改，以便更广泛的社区也能受益。
        <br />
        XL 套件（如 AI 集成、多列布局和导出器）是双重许可的，提供{" "}
        <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</a>，或者 -
        对于闭源项目 - 作为 BlockNote
        商业订阅或更高版本的一部分提供商业许可证。有关详细信息，请参阅{" "}
        <a href="/legal/blocknote-xl-commercial-license">商业许可证条款</a>{" "}
        的确切细节。
      </>
    ),
  },
  {
    question: "何时需要商业许可证？",
    answer: (
      <>
        仅当您使用任何 XL 套件（如 AI 集成、多列布局和导出器）并且无法遵守
        GPL-3.0 许可证时，您才需要{" "}
        <a href="/legal/blocknote-xl-commercial-license">商业许可证</a>。
        这很可能发生在您构建闭源应用程序时。BlockNote
        商业订阅及更高版本包括商业许可证。
      </>
    ),
  },
  {
    question: "为什么选择对 XL 套件进行双重许可？",
    answer: (
      <>
        我们从一开始就将 BlockNote 构建为开源，并始终致力于将核心库保持在 MPL
        2.0 许可证下。这意味着它是免费的 - 甚至在商业和闭源项目中也是如此。
        <br />
        为了可持续地支持持续开发，我们提供了一小套高级功能（XL
        套件），采用双重许可模式：
        <ul>
          <li>GPL-3.0 适用于开源项目</li>
          <li>
            商业许可证（包含在 BlockNote 商业订阅及更高版本中）适用于闭源使用
          </li>
        </ul>
        这种方法使我们能够为全职团队提供资金，同时保持我们构建的 100%
        代码开源。这是我们在社区可及性与长期可持续性之间取得平衡的一种方式。
      </>
    ),
  },
  {
    question: "许可证中包含什么样的支持？",
    answer: (
      <>
        我们为您提供支持！所有 BlockNote
        订阅都附带优先支持。有关详细信息，请参阅{" "}
        <a href="/legal/service-level-agreement">服务级别协议</a>。
      </>
    ),
  },
  {
    question: "是否对我可以拥有的文档或用户数量有限制？",
    answer: `使用 BlockNote，您可以拥有的文档或用户数量没有限制。
    您可以自由地在自己的基础设施上运行软件，并且您的数据不会经过我们的服务器 - 您的文档和用户完全是您的业务。`,
  },
  {
    question: "如果我有多个 SaaS 或 Web 应用程序怎么办？",
    answer: (
      <>
        BlockNote 商业许可证（包含在商业套餐及更高版本中）针对 XL
        套件每个许可证仅涵盖一个应用程序。有关详细信息，请参阅{" "}
        <a href="/legal/blocknote-xl-commercial-license">商业许可证条款</a>{" "}
        的确切细节。
        <br />
        如果您希望在多个应用程序中使用 XL 套件，请通过 team@blocknotejs.org
        联系我们；我们很乐意与您合作定制许可证。
      </>
    ),
  },
  {
    question: "您是否为初创公司提供任何折扣？",
    answer: (
      <>
        是的！我们为员工少于 5 名的初创公司提供折扣。有关详细信息，请参阅{" "}
        <a href="/legal/blocknote-xl-commercial-license">商业许可条款</a>{" "}
        的确切细节。
      </>
    ),
  },
  {
    question: "您接受什么付款方式？",
    answer: `我们接受所有主要信用卡。如果您需要其他付款方式，请与我们联系。`,
  },
];

export function FAQ() {
  return (
    <div className="w-full max-w-screen-lg px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="prose">
        <Heading as="h2">常见问题</Heading>
        <Accordions type="multiple">
          {faqs.map((faq) => (
            <Accordion key={faq.question} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))}
        </Accordions>
      </div>
    </div>
  );
}
