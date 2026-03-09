import Link from "next/link";
import React from "react";
import { Sponsors } from "./Sponsors";

export const Pricing: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-stone-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-600">
            透明定价
          </p>
          <h2 className="mb-6 font-serif text-4xl text-stone-900 md:text-5xl">
            订阅 BlockNote XL。
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-500">
            BlockNote 100% 开源。下面是许可证与授权的工作方式。
          </p>
        </div>

        {/* Two-part explainer */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Core */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">💚</span>
              <h3 className="text-xl font-semibold text-stone-900">
                核心编辑器
              </h3>
            </div>
            <p className="mb-6 text-stone-600">
              BlockNote 的大部分内容（包括全部区块、实时协作、评论和 UI
              组件）都采用宽松许可证。
            </p>
            <p className="mb-6 text-stone-600">
              无论个人、开源还是商业项目，都可以免费使用。
            </p>
            <p className="text-sm font-medium text-green-600">
              ✓ 所有人免费可用
            </p>
          </div>

          {/* XL */}
          <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <h3 className="text-xl font-semibold text-stone-900">
                XL 扩展包
              </h3>
            </div>
            <p className="mb-4 text-stone-600">
              包含 <strong>AI 集成</strong>、
              <strong>PDF / Word / ODT 导出</strong>和 <strong>多栏布局</strong>{" "}
              等高级功能。
            </p>
            <p className="mb-6 text-stone-600">
              对 GPL-3.0 开源项目免费；闭源项目则需要订阅授权。
            </p>
            <p className="text-sm font-medium text-purple-600">
              ✓ 开源项目免费
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-4 font-medium text-white transition-all hover:bg-purple-700"
          >
            <span>查看定价</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Sponsors */}
        <Sponsors title="感谢所有支持者，帮助我们持续构建可持续发展的开源软件。" />
      </div>
    </section>
  );
};
