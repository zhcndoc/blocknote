import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";

export const USP = () => {
  return (
    <section className="bg-white/50 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-4xl text-stone-900">
            如果你有时间，这是你会亲手打造的编辑器。
          </h2>
          {/* <p className="text-lg text-stone-500">
            BlockNote combines a premium editing experience with the flexibility
            of open standards. Zero compromise.
          </p> */}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <SpotlightCard className="group p-8 shadow-xl shadow-stone-200/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-100 bg-purple-50 text-2xl text-purple-600 transition-transform duration-500 group-hover:scale-110">
              ✨
            </div>
            <h3 className="mb-3 font-serif text-2xl text-stone-900">
              开箱即用的体验
            </h3>
            <p className="relative z-10 mb-6 text-stone-500">
              不必再从零开始造富文本编辑器。BlockNote 自带成熟、现代的 UI，
              开箱即用。
            </p>
          </SpotlightCard>

          <SpotlightCard className="group p-8 shadow-xl shadow-stone-200/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-2xl text-blue-600 transition-transform duration-500 group-hover:scale-110">
              🛠️
            </div>
            <h3 className="mb-3 font-serif text-2xl text-stone-900">
              为开发者而生
            </h3>
            <p className="relative z-10 mb-6 text-stone-500">
              不必再处理编辑器底层细节。我们屏蔽复杂部分，提供类型安全、
              易于理解的 API。
            </p>
          </SpotlightCard>

          <SpotlightCard className="group p-8 shadow-xl shadow-stone-200/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 text-2xl text-amber-600 transition-transform duration-500 group-hover:scale-110">
              🤝
            </div>
            <h3 className="mb-3 font-serif text-2xl text-stone-900">
              深度合作
            </h3>
            <p className="relative z-10 mb-6 text-stone-500">
              <Link
                className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
                href="/pricing"
              >
                升级
              </Link>{" "}
              即可为商业产品解锁 AI 支持；也可以与我们团队合作，获得高级集成
              与支持服务。
            </p>
            <div className="mt-2 flex w-full flex-col gap-3">
              <a
                href="mailto:team@blocknotejs.org"
                className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-orange-700 hover:shadow-lg"
              >
                联系我们
              </a>
              <div className="text-center text-[10px] font-medium uppercase tracking-widest text-stone-400">
                面向企业客户
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
