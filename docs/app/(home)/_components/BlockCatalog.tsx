"use client";
import {
  AudioWaveform,
  ChevronRight,
  Code2,
  FileText,
  Heading,
  Image,
  List,
  ListOrdered,
  ListTodo,
  Minus,
  Pilcrow,
  Puzzle,
  Quote,
  Table,
  Video,
} from "lucide-react";
import React from "react";

const BlockCatalogItem: React.FC<{ name: string; icon: React.ReactNode }> = ({
  name,
  icon,
}) => (
  <div className="group relative flex cursor-default flex-col items-center justify-center overflow-hidden rounded-xl border border-stone-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-stone-50 text-stone-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-100 group-hover:text-purple-600">
      {icon}
    </div>
    <span className="relative text-xs font-medium text-stone-500 transition-colors group-hover:text-stone-900">
      {name}
    </span>
  </div>
);

export const BlockCatalog: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-purple-50/30 py-32">
      {/* Subtle decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-50/50 to-blue-50/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-100 bg-white/50 text-3xl shadow-sm backdrop-blur-sm">
            🧩
          </div>
          <h2 className="mb-6 font-serif text-4xl text-stone-900 md:text-6xl">
            逐块构建，创造一切。
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-stone-600">
            每一份 BlockNote 文档都是由区块组成的集合，包括标题、列表、
            图片等。你可以使用内置区块、按需定制它们，或者干脆创建全新的区块。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          <BlockCatalogItem
            name="段落"
            icon={<Pilcrow className="h-4 w-4" />}
          />
          <BlockCatalogItem
            name="标题"
            icon={<Heading className="h-4 w-4" />}
          />
          <BlockCatalogItem name="列表" icon={<List className="h-4 w-4" />} />
          <BlockCatalogItem
            name="有序列表"
            icon={<ListOrdered className="h-4 w-4" />}
          />
          <BlockCatalogItem
            name="清单"
            icon={<ListTodo className="h-4 w-4" />}
          />
          <BlockCatalogItem
            name="折叠列表"
            icon={<ChevronRight className="h-4 w-4" />}
          />
          <BlockCatalogItem name="代码" icon={<Code2 className="h-4 w-4" />} />
          <BlockCatalogItem name="引用" icon={<Quote className="h-4 w-4" />} />
          <BlockCatalogItem
            name="分隔线"
            icon={<Minus className="h-4 w-4" />}
          />
          <BlockCatalogItem name="表格" icon={<Table className="h-4 w-4" />} />
          <BlockCatalogItem name="图片" icon={<Image className="h-4 w-4" />} />
          <BlockCatalogItem name="视频" icon={<Video className="h-4 w-4" />} />
          <BlockCatalogItem
            name="音频"
            icon={<AudioWaveform className="h-4 w-4" />}
          />
          <BlockCatalogItem
            name="文件"
            icon={<FileText className="h-4 w-4" />}
          />
          <BlockCatalogItem
            name="自定义区块"
            icon={<Puzzle className="h-4 w-4" />}
          />
        </div>
      </div>
    </section>
  );
};
