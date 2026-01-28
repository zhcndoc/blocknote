import { FadeIn } from "@/components/FadeIn";
import { SectionSubHeader } from "@/components/Headings";
import Image from "next/image";
import Link from "next/link";
import { RiDiscordFill, RiGithubFill } from "react-icons/ri";
import { JoinButton } from "./JoinButton";

// TODO: Use GitHub API
function fetchContributors(): { username: string; avatarUrl: string }[] {
  return [
    {
      username: "YousefED",
      avatarUrl: "https://markhub.top/github?id=368857",
    },
    {
      username: "17Amir17",
      avatarUrl: "https://markhub.top/github?id=36531255",
    },
    {
      username: "matthewlipski",
      avatarUrl: "https://markhub.top/github?id=50169049",
    },
    {
      username: "GuySerfaty",
      avatarUrl: "https://markhub.top/github?id=17720782",
    },
    {
      username: "tomeryp",
      avatarUrl: "https://markhub.top/github?id=4117403",
    },
    {
      username: "horacioh",
      avatarUrl: "https://markhub.top/github?id=725120",
    },
    {
      username: "i-am-chitti",
      avatarUrl: "https://markhub.top/github?id=60139930",
    },
    {
      username: "DAlperin",
      avatarUrl: "https://markhub.top/github?id=16063713",
    },
    {
      username: "tensor-tian",
      avatarUrl: "https://markhub.top/github?id=101185214",
    },
    {
      username: "sudarshanshenoy",
      avatarUrl: "https://markhub.top/github?id=13462896",
    },
    {
      username: "cuire",
      avatarUrl: "https://markhub.top/github?id=81014305",
    },
    {
      username: "fogle",
      avatarUrl: "https://markhub.top/github?id=39360",
    },
    {
      username: "richmengsix",
      avatarUrl: "https://markhub.top/github?id=2321921",
    },
    {
      username: "PhilipWillms",
      avatarUrl: "https://markhub.top/github?id=44462043",
    },
    {
      username: "niclas-j",
      avatarUrl: "https://markhub.top/github?id=35239311",
    },
    {
      username: "danlgz",
      avatarUrl: "https://markhub.top/github?id=26347085",
    },
    {
      username: "CTNicholas",
      avatarUrl: "https://markhub.top/github?id=33033422",
    },
    {
      username: "charlesfrisbee",
      avatarUrl: "https://markhub.top/github?id=32081962",
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
        icon={<RiGithubFill size={32} />}
        linkTitle={"查看我们的仓库"}
        linkUrl={"https://github.com/TypeCellOS/BlockNote"}
      />
      <JoinButton
        text={"加入 Discord 社区"}
        subtext={
          "在 Discord 上向其他 BlockNote 用户提问、讨论功能并分享您的作品。"
        }
        icon={<RiDiscordFill size={32} />}
        linkTitle={"加入我们的服务器"}
        linkUrl={"https://discord.gg/Qc2QTTH5dF"}
      />
    </FadeIn>
  </div>
);
