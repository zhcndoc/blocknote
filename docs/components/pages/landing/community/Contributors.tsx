import { Link } from "nextra-theme-docs";
import Image from "next/image";
import { DiscordIcon, GitHubIcon } from "nextra/icons";
import { SectionSubHeader } from "@/components/pages/landing/shared/Headings";
import { JoinButton } from "@/components/pages/landing/community/JoinButton";
import { FadeIn } from "@/components/pages/landing/shared/FadeIn";

// TODO: Use GitHub API
function fetchContributors(): { username: string; avatarUrl: string }[] {
  return [
    {
      username: "YousefED",
      avatarUrl: "https://avatar.ikxin.com/github?id=368857",
    },
    {
      username: "17Amir17",
      avatarUrl: "https://avatar.ikxin.com/github?id=36531255",
    },
    {
      username: "matthewlipski",
      avatarUrl: "https://avatar.ikxin.com/github?id=50169049",
    },
    {
      username: "GuySerfaty",
      avatarUrl: "https://avatar.ikxin.com/github?id=17720782",
    },
    {
      username: "tomeryp",
      avatarUrl: "https://avatar.ikxin.com/github?id=4117403",
    },
    {
      username: "horacioh",
      avatarUrl: "https://avatar.ikxin.com/github?id=725120",
    },
    {
      username: "i-am-chitti",
      avatarUrl: "https://avatar.ikxin.com/github?id=60139930",
    },
    {
      username: "DAlperin",
      avatarUrl: "https://avatar.ikxin.com/github?id=16063713",
    },
    {
      username: "tensor-tian",
      avatarUrl: "https://avatar.ikxin.com/github?id=101185214",
    },
    {
      username: "sudarshanshenoy",
      avatarUrl: "https://avatar.ikxin.com/github?id=13462896",
    },
    {
      username: "cuire",
      avatarUrl: "https://avatar.ikxin.com/github?id=81014305",
    },
    {
      username: "fogle",
      avatarUrl: "https://avatar.ikxin.com/github?id=39360",
    },
    {
      username: "richmengsix",
      avatarUrl: "https://avatar.ikxin.com/github?id=2321921",
    },
    {
      username: "PhilipWillms",
      avatarUrl: "https://avatar.ikxin.com/github?id=44462043",
    },
    {
      username: "niclas-j",
      avatarUrl: "https://avatar.ikxin.com/github?id=35239311",
    },
    {
      username: "danlgz",
      avatarUrl: "https://avatar.ikxin.com/github?id=26347085",
    },
    {
      username: "CTNicholas",
      avatarUrl: "https://avatar.ikxin.com/github?id=33033422",
    },
    {
      username: "charlesfrisbee",
      avatarUrl: "https://avatar.ikxin.com/github?id=32081962",
    },
  ];
}

export const Contributors = () => (
  <div className="flex max-w-screen-md flex-col gap-4 lg:max-w-screen-lg">
    <FadeIn>
      <SectionSubHeader>贡献者</SectionSubHeader>
    </FadeIn>
    <FadeIn className="flex flex-wrap items-center justify-center gap-3">
      {fetchContributors().map((contributor) => (
        // <Tooltip key={contributor.id} content={contributor.login}>
        <Link
          key={contributor.username}
          href={`https://github.com/${contributor.username}`}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          <Image
            src={contributor.avatarUrl}
            alt={`${contributor.username} avatar`}
            className="size-12 rounded-full md:size-14"
            width={64}
            height={64}
          />
        </Link>
        // </Tooltip>
      ))}
    </FadeIn>
    <FadeIn className={"flex flex-col gap-2 py-4"}>
      <JoinButton
        text={"成为 GitHub 贡献者"}
        subtext={"通过贡献代码和支持项目，加入 BlockNote 开发者社区。"}
        icon={GitHubIcon}
        linkTitle={"查看我们的仓库"}
        linkUrl={"https://github.com/TypeCellOS/BlockNote"}
      />
      <JoinButton
        text={"加入 Discord 社区"}
        subtext={
          "在 Discord 上向其他 BlockNote 用户提问、讨论功能并分享您的作品。"
        }
        icon={DiscordIcon}
        linkTitle={"加入我们的服务器"}
        linkUrl={"https://discord.gg/Qc2QTTH5dF"}
      />
    </FadeIn>
  </div>
);
