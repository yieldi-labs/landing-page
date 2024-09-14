import SectionWrapper from "@components/SectionWrapper"
import NavLink from "@components/ui/NavLink"
import Image from "next/image"

import xIcon from "@public/logos/x.svg"
import telegramIcon from "@public/logos/telegram.svg"
import discordIcon from "@public/logos/discord.svg"

const Testimonials = () => {

    const components = [
        {
            subtitle: "AVS",
            text: "Supports yield streaming via an Axelar-like General Message Parsing Gateway Contract."
        },
        {
            subtitle: "IBC Channel",
            text: "Maintains connectivity to THORChain."
        },
        {
            subtitle: "Liquidity Auction",
            text: "Conducts auctions with incentives to correctly price and build liquidity."
        },
        {
            subtitle: "Yieldi Pools",
            text: "Deploys AVS pools and processes inbound yield swaps to native ETH."
        },
        {
            subtitle: "THORChain",
            text: "Supports Yield Accounts, allowing users to query balances, claim, and set auto-stream."
        },
    ]

    return (
        <SectionWrapper className="z-10 py-0 md:py-0" id="components">
            <div className="flex flex-col justify-center">
                <div className="w-full bg-[#72BACA] xl:rounded-[60px] rounded-3xl z-10
                    xl:py-16 py-8 xl:px-24 px-8 flex-1 mx-auto">
                <div className="text-[#003944] xl:text-[64px] text-[42px] xl:text-start text-center font-bold uppercase flex-1">key components</div>
                    <ul>
                        {components.map((component, index) => 
                            <li key={`component-${index}`} className={`border-t border-[#003944] p-2.5 text-[#003944] text-xl font-medium ${index == components.length - 1 ? 'border-b' : ''}`}>
                                <strong>{component.subtitle}:</strong> {component.text}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="xl:w-[1280px] mx-auto text-center text-[#332b29] text-[40px] font-bold xl:pt-20 xl:px-24 pt-10 px-5 font-gt-america-ext leading-[48px]">Join the future of yield streaming with Yieldi and experience efficient, secure, and innovative financial growth.</div>
            </div>
            <div className="flex max-w-screen-2xl mx-auto xl:px-[55px] px-8 mb-24">
                <div className="flex flex-col items-center flex-1 p-[60px] gap-[45px] rounded-[60px] border border-[#524B48]">
                    <h1 className="text-[#332B29] text-center font-bold text-[48px] leading-[48px] self-stretch font-gt-america-ext">
                        The Yield Venue for Shared <span className="relative z-0 before:absolute before:content-[''] before:w-[100%] before:h-[92%] before:inset-y-6px before:z-[-1] before:bg-[#A1FD59]">Security</span>
                    </h1>
                    <NavLink href="https://discord.gg/8aFPCXPwAd" target="_blank"
                        className="flex h-[127px] p-[10px] justify-center items-center gap-[10px] self-stretch xl:rounded-[100px] 
                        rounded-[40px]font-medium text-[20px] leading-none uppercase border border-[#6D655D] bg-[#F5F1EB] 
                        mx-[55px] text-[#332B29] duration-150 hover:text-[#F5F1EB] hover:bg-[#332b29c9] hidden">
                            join discord
                    </NavLink>
                    <div className="flex justify-center">
                        <NavLink href="https://x.com/yieldi_xyz" target="_blank" className="duration-150 hover:scale-110">
                            <Image src={xIcon} alt="x"/>
                        </NavLink>
                        <NavLink href="https://t.me/yieldi_labs" target="_blank "className="duration-150 hover:scale-110">
                            <Image src={telegramIcon} alt="telegram"/>
                        </NavLink>
                        <NavLink href="https://discord.gg/8aFPCXPwAd" target="_blank "className="duration-150 hover:scale-110">
                            <Image src={discordIcon} alt="discord"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials