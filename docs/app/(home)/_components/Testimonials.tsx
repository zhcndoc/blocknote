"use client";
import Link from "next/link";
import React from "react";

interface Testimonial {
  company: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    company: "Acme Corp",
    quote:
      "有了 BlockNote，我们几天内就上线了一个成熟编辑器，而不是耗费数月。用户非常喜欢它。",
    author: "Sarah Chen",
    role: "工程副总裁",
  },
  {
    company: "Startup Inc",
    quote:
      "我们评估了市面上几乎所有富文本编辑器，只有 BlockNote 真正具备现代感。",
    author: "Marcus Johnson",
    role: "CTO",
  },
  {
    company: "Enterprise Co",
    quote:
      "它对 TypeScript 的支持非常出色，我们的团队从第一天开始就能高效开发。",
    author: "Elena Rodriguez",
    role: "首席开发者",
  },
];

import { SpotlightCard } from "./SpotlightCard";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <SpotlightCard className="flex flex-col rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-md">
    <div className="mb-4 font-semibold text-stone-900">
      {testimonial.company}
    </div>
    <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-500">
      &quot;{testimonial.quote}&quot;
    </p>
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-600">
        {testimonial.author
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div>
        <div className="text-sm font-medium text-stone-900">
          {testimonial.author}
        </div>
        <div className="text-xs text-stone-400">
          {testimonial.role}, {testimonial.company}
        </div>
      </div>
    </div>
  </SpotlightCard>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl text-stone-900">
            被各类团队广泛信赖。
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-500">
            从初创公司到大型企业，团队都在使用 BlockNote 构建自己的文档体验。
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/examples"
            className="group flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-8 py-4 font-medium text-stone-900 shadow-sm transition-all hover:border-purple-300 hover:shadow-md"
          >
            <span>看看谁在使用 BlockNote</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
