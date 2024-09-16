import SectionWrapper from "@components/SectionWrapper";
import NavLink from "@components/ui/NavLink";
import Image from "next/image";

import xIcon from "@public/logos/x.svg";
import telegramIcon from "@public/logos/telegram.svg";
import discordIcon from "@public/logos/discord.svg";

const FooterCTA = () => (
  <SectionWrapper className="bg-[#F5F1EB] py-10">
    <div className="flex max-w-screen-2xl mx-auto xl:px-[55px] px-8">
      <div className="flex flex-col items-center flex-1 p-[60px] gap-[45px] rounded-[60px] border border-[#524B48]">
        <h1 className="text-[#332B29] text-center font-bold text-[48px] leading-[48px] self-stretch">
          The Yield Venue for Shared{" "}
          <span className="relative z-0 before:absolute before:content-[''] before:w-[100%] before:h-[92%] before:inset-y-6px before:z-[-1] before:bg-[#A1FD59]">
            Security
          </span>
        </h1>
        <NavLink
          href="https://discord.gg/8aFPCXPwAd"
          target="_blank"
          className="flex h-[127px] p-[10px] justify-center items-center gap-[10px] self-stretch xl:rounded-[100px] 
                    rounded-[40px]font-medium text-[20px] leading-none uppercase border border-[#6D655D] bg-[#F5F1EB] 
                    mx-[55px] text-[#332B29] duration-150 hover:text-[#F5F1EB] hover:bg-[#332b29c9] hidden"
        >
          join discord
        </NavLink>
        <div className="flex justify-center">
          <NavLink
            href="https://x.com/yieldi_xyz"
            target="_blank"
            className="duration-150 hover:scale-110"
          >
            <Image src={xIcon} alt="x" />
          </NavLink>
          <NavLink
            href="https://t.me/yieldi_labs"
            target="_blank "
            className="duration-150 hover:scale-110"
          >
            <Image src={telegramIcon} alt="telegram" />
          </NavLink>
          <NavLink
            href="https://discord.gg/8aFPCXPwAd"
            target="_blank "
            className="duration-150 hover:scale-110"
          >
            <Image src={discordIcon} alt="discord" />
          </NavLink>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
