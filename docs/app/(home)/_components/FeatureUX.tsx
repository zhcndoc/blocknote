"use client";
import React, { useState } from "react";
import { FeatureSection } from "./FeatureSection";
import { ContentItem, FeatureWindow } from "./ui/FeatureWindow";
export const FeatureUX: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"components" | "ai" | "blocks">(
    "components",
  );

  const content: Record<string, ContentItem> = {
    components: {
      type: "video",
      src: "/video/batteries-included.mp4",
    },
    ai: {
      type: "video",
      src: "/video/ai-select.mp4",
      className: "px-4",
    },
    blocks: {
      type: "video",
      src: "/video/dragdrop.mp4",
    },
  };

  const tabs = [
    {
      id: "components",
      icon: <span>🔋</span>,
      label: "开箱即用",
      description: "斜杠菜单、格式工具栏和拖拽手柄立即可用。",
    },
    {
      id: "ai",
      icon: <span>✨</span>,
      label: "AI 辅助",
      description: "借助 AI 写作、改写和润色内容。",
    },
    {
      id: "blocks",
      icon: <span>🧱</span>,
      label: "块编辑",
      description: "支持拖拽、排序和嵌套内容区块。",
    },
  ];

  return (
    <FeatureSection
      title="可直接上线的现代编辑器。"
      description="内置组件提供完整的块编辑体验，开箱即用；需要时也能对每一处进行深度定制。"
      tabs={tabs}
      activeTabId={activeTab}
      onTabChange={(id) => setActiveTab(id as any)}
      reverse={false}
    >
      <FeatureWindow content={content[activeTab]} theme="light" />
    </FeatureSection>
  );
};
