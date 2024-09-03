import NavLink from "@components/ui/NavLink";
import Image from "next/image";
import xIcon from "@public/logos/x.svg";
import telegramIcon from "@public/logos/telegram.svg";
import discordIcon from "@public/logos/discord.svg";

const Hero = () => (
  <section>
    <div className="text-gray-600 mt-28 flex flex-col max-w-screen-2xl mx-auto">
      <div className="text-center flex-col flex flex-1">
        <div className="text-[#332B29] text-center font-bold text-[76px] xl:text-[96px] leading-none max-w-[990px] mx-auto">
          The yield layer for shared{" "}
          <span className="relative z-[-1] before:absolute before:content-[''] before:w-[100%] before:h-[68%] before:inset-y-[16px] before:z-[-2] before:bg-[#A1FD59]">
            security.
          </span>
        </div>
        <div className="flex mt-20 z-0 w-full flex-1 flex-col md:flex-row md:items-stretch items-center">
          <Image
            src="/construction.svg"
            width="470"
            height="478"
            alt="construction"
          />
          <div className="xl:ml-7 flex flex-col xl:mt-10 sm:px-2 flex-1 px-4 xl:px-0 justify-between h-auto">
            <div className="text__color--main text-[24px] text-left font-normal">
              Launch liquidity for shared security protocols. <br /> Native
              yield-streaming for the lowest cost of security.
            </div>
            <div className="mt-10 flex flex-col">
              <NavLink
                href="https://discord.gg/8aFPCXPwAd"
                target="_blank"
                className="flex w-[241px] h-[58px] 
                                p-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-full bg-[#332B29] text-[#FFF] 
                                text-[16px] font-medium uppercase hover:text-[#F5F1EB] hover:bg-[#332b29c9] hidden"
              >
                join discord
              </NavLink>
              <div className="flex xl:justify-end justify-center right-0 xl:mr-7 xl:mb-[42px] mb-[24px]">
                <NavLink
                  href="https://x.com/yieldi_xyz"
                  target="_blank "
                  className="duration-150 hover:scale-110"
                >
                  <Image src={xIcon} alt="x" />
                </NavLink>
                <NavLink
                  href="https://t.me/yieldi_labs"
                  target="_blank"
                  className="duration-150 hover:scale-110"
                >
                  <Image src={telegramIcon} alt="telegram" />
                </NavLink>
                <NavLink
                  href="https://discord.gg/8aFPCXPwAd"
                  target="_blank"
                  className="duration-150 hover:scale-110"
                >
                  <Image src={discordIcon} alt="discord" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#003944] xl:rounded-[60px] rounded-3xl z-10 relative py-8 xl:py-16 px-12 xl:px-24 text-[#71bac9] pb-16 xl:pb-32 flex-col xl:flex-row">
          <span className="flex text-[#71bac9] text-xl font-medium uppercase">
            What is Yieldi?
          </span>
          <div className="xl:w-[962px] text-[#71bac9] text-2xl xl:text-5xl font-bold mt-6 xl:mt-12 text-left">
            Yieldi is a cutting-edge, gas-efficient yield-streaming solution
            initially deployed on Thorchain, leveraging its native ETH/BTC
            liquidity.{" "}
          </div>
          <div className="xl:w-[626px] text-[#71bac9] text-lg xl:text-xl font-medium text-left ml-auto mt-10 xl:mt-20">
            By integrating with Eigenlayer and Babylon, Yieldi allows users to
            delegate their Liquid Staking Tokens (LSTs) to an Actively Validated
            Set (AVS). The AVS can then stream yield back to the staker natively
            using Yieldi.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
