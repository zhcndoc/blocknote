import { FC } from "react";
import { Contributors } from "@/app/(home)/community/Contributors";
import { Section } from "@/components/Section";
import { Sponsors } from "@/app/(home)/community/Sponsors";
import { SectionIntro } from "@/components/Headings";

export const Community: FC = () => (
  <Section gradientBackground className="pb-24 pt-12 xl:pb-32 xl:pt-16">
    <div className="z-20 flex flex-col items-center justify-center gap-8 px-6 text-center md:max-w-screen-md md:gap-12">
      <SectionIntro
        header={"开源社区"}
        subtext={
          "加入开放源代码贡献者社区，通过与 BlockNote 社区互动并为项目贡献力量。"
        }
      />
      <Contributors />
      <Sponsors />
    </div>
  </Section>
);
