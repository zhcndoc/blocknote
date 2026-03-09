"use client";
import React, { useState } from "react";
import { FeatureSection } from "./FeatureSection";
import { ContentItem, FeatureWindow } from "./ui/FeatureWindow";

export const FeatureAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"toolbar" | "models" | "human">(
    "toolbar",
  );

  const content: Record<string, ContentItem> = {
    toolbar: {
      type: "video",
      src: "/video/ai-select.mp4",
      className: "px-4",
    },
    models: {
      type: "image",
      src: "/img/screenshots/home/any_model.png",
      alt: "接入任意模型",
    },
    human: {
      type: "image",
      src: "/img/screenshots/home/human_in_the_loop.png",
      alt: "人类参与决策",
    },
  };

  const tabs = [
    {
      id: "toolbar",
      icon: <span>✨</span>,
      label: "编辑器内 AI",
      description: "可基于上下文直接在文档中补全与编辑。",
    },
    {
      id: "models",
      icon: <span>🔌</span>,
      label: "接入任意模型",
      description: "可连接 OpenAI、Anthropic，或你自己的模型接口。",
    },
    {
      id: "human",
      icon: <span>🤝</span>,
      label: "人类参与决策",
      description: "用户可以接受、拒绝或继续润色 AI 建议。",
    },
  ];

  return (
    <FeatureSection
      title="为下一代编辑体验而构建。"
      description="构建未来的文档编辑产品，让用户与 AI 共同创作。可接入任意模型，并集成 RAG、工具和 Agent，由 AI SDK 提供支持。"
      tabs={tabs}
      activeTabId={activeTab}
      onTabChange={(id) => setActiveTab(id as any)}
      reverse={true}
    >
      <FeatureWindow content={content[activeTab]} theme="light" />
    </FeatureSection>
  );
};
