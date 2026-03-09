"use client";
import React, { useState } from "react";
import { FeatureSection } from "./FeatureSection";
import { ContentItem, FeatureWindow } from "./ui/FeatureWindow";

export const FeatureDX: React.FC<{
  code: { theming: string; extend: string };
}> = ({ code }) => {
  const [activeTab, setActiveTab] = useState<"types" | "theming" | "extend">(
    "types",
  );

  const content: Record<string, ContentItem> = {
    types: {
      type: "image",
      src: "/img/screenshots/home/code-typescript-support.png",
      alt: "类型安全的 Schema",
    },
    theming: {
      type: "code",
      file: "Editor.tsx",
      code: code.theming,
    },
    extend: {
      type: "code",
      file: "CustomBlock.tsx",
      code: code.extend,
    },
  };

  const tabs = [
    {
      id: "types",
      icon: <span>📐</span>,
      label: "类型安全",
      description: "为自定义 Schema 提供完整自动补全与类型推导。",
    },
    {
      id: "theming",
      icon: <span>🎨</span>,
      label: "接入你的设计系统",
      description: "兼容 Mantine、shadcn/ui，也可以走 Headless 方案。",
    },
    {
      id: "extend",
      icon: <span>🔧</span>,
      label: "全面可扩展",
      description: "可创建自定义区块、行内内容、菜单等更多能力。",
    },
  ];

  return (
    <FeatureSection
      title="为开发者打造的直观 API。"
      description="基于块的架构为工程团队提供强大的 API，同时具备完整 TypeScript 支持与清晰的 React 接口。"
      tabs={tabs}
      activeTabId={activeTab}
      onTabChange={(id) => setActiveTab(id as any)}
      reverse={true}
    >
      <FeatureWindow content={content[activeTab]} theme="dark" />
    </FeatureSection>
  );
};
