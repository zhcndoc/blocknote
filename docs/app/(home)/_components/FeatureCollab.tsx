"use client";
import React, { useState } from "react";
import { FeatureSection } from "./FeatureSection";
import { ContentItem, FeatureWindow } from "./ui/FeatureWindow";

export const FeatureCollab: React.FC<{
  code: { realtime: string };
}> = ({ code }) => {
  const [activeTab, setActiveTab] = useState<
    "realtime" | "comments" | "suggestions"
  >("realtime");

  const content: Record<string, ContentItem> = {
    realtime: {
      type: "code",
      file: "CollaborativeEditor.tsx",
      code: code.realtime,
    },
    comments: {
      type: "image",
      src: "/img/screenshots/home/comments.png",
      alt: "评论",
    },
    suggestions: {
      type: "image",
      src: "/img/screenshots/home/versioning.png",
      alt: "版本记录",
    },
  };

  const tabs = [
    {
      id: "realtime",
      icon: <span>👯</span>,
      label: "实时同步",
      description: "基于 Yjs，并自动处理冲突。",
    },
    {
      id: "comments",
      icon: <span>💬</span>,
      label: "评论",
      description: "行内讨论串和提及功能让协作始终贴合上下文。",
    },
    {
      id: "suggestions",
      icon: <span>📝</span>,
      label: "建议模式与版本记录（即将推出）",
      description: "跟踪改动，接受或拒绝编辑，并保留完整文档历史。",
    },
  ];

  return (
    <FeatureSection
      title="本地优先的协作体验。"
      description="一流的 Yjs 集成带来实时协作能力。可离线工作、无缝同步，并可部署在任何地方。"
      tabs={tabs}
      activeTabId={activeTab}
      onTabChange={(id) => setActiveTab(id as any)}
      reverse={false}
    >
      <FeatureWindow content={content[activeTab]} theme="dark" />
    </FeatureSection>
  );
};
