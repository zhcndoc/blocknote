import React from "react";

export const Letter: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] py-32">
      {/* Background Decor - Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="relative">
          <div className="mb-16">
            <h2 className="font-serif text-6xl font-medium tracking-tight text-stone-900 italic md:text-8xl">
              一起构建吧。
            </h2>
          </div>

          <div className="grid gap-16 md:grid-cols-12">
            <div className="col-span-12 md:col-span-7">
              <div className="prose prose-lg prose-stone max-w-none">
                <p className="font-sans text-xl leading-relaxed font-medium text-stone-900">
                  构建富文本编辑器一直是 Web 上最困难的工程挑战之一。过去，
                  这往往意味着数月的专项开发工作。
                </p>
                <p>
                  我们相信，优秀的工具默认就应该保持<strong>自主可控</strong>。
                  你不该被迫在统一体验和掌控基础设施之间二选一。
                </p>
                <p>
                  这正是我们打造 BlockNote 的原因。它是一款
                  <strong>开箱即用</strong> 的编辑器，能让你在几分钟内获得 接近
                  Notion 级别的体验，同时仍然扎根于开放标准，例如{" "}
                  <span className="font-semibold text-stone-900">
                    ProseMirror
                  </span>{" "}
                  and <span className="font-semibold text-stone-900">Yjs</span>.
                </p>
              </div>
              <div className="mt-12 text-lg text-stone-600">
                <p>
                  无论你是初创团队还是公共机构，你都值得拥有经得起时间考验的
                  软件。加入我们，一起{" "}
                  <span className="relative inline-block font-medium text-stone-900">
                    塑造未来
                    <svg
                      className="absolute -bottom-1 left-0 w-full text-stone-300"
                      height="6"
                      viewBox="0 0 100 6"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 3 Q 50 6 100 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </span>{" "}
                  的开放网络。
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5">
              {/* Floating "Card" for Impact - DARK MODE */}
              <div className="relative h-full transform rounded-2xl bg-stone-900 p-8 text-white shadow-2xl shadow-stone-900/20 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="mb-6 font-sans text-3xl font-bold tracking-tight">
                      认识 BlockNote。
                    </h3>
                    <p className="mb-8 font-sans leading-relaxed text-stone-400">
                      忘掉底层细节。使用强类型 API，直接获得现代化 UI 组件。
                    </p>
                  </div>

                  <div>
                    <div className="mb-6 h-px w-full bg-stone-800" />
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 ring-2 ring-stone-900" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                          团队
                        </span>
                        <span className="font-serif text-stone-200 italic">
                          BlockNote 创作者
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
