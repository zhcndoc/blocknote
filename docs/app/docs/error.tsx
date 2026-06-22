"use client"; // Error boundaries must be Client Components

import * as Sentry from "@sentry/nextjs";
import { DocsBody } from "fumadocs-ui/layouts/docs/page";
import { useEffect } from "react";

export default function Error({
  error,
  reset: _reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error, {
      tags: { type: "react-render", source: "docs" },
    });
  }, [error]);

  return (
    <div className="pt-8">
      <DocsBody>
        <h1>哎呀，区块出错了！</h1>
        <div>
          展示此页面时发生了错误。如果问题持续出现，请前往 GitHub 提交 issue：{" "}
          <a href="https://github.com/TypeCellOS/BlockNote/issues">
            https://github.com/TypeCellOS/BlockNote/issues
          </a>
        </div>
      </DocsBody>
    </div>
  );
}
