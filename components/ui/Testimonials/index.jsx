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
                <div className="w-full bg-accent rounded-large xl:py-16 py-8 xl:px-24 px-8 flex-1 mx-auto">
                    <h2 className="text-dark xl:text-title text-title-mobile xl:text-start text-center font-bold uppercase flex-1">key components</h2>
                    <ul>
                        {components.map((component, index) => (
                            <li key={`component-${index}`} className={`border-t border-dark p-2.5 text-dark text-xl font-medium ${index === components.length - 1 ? 'border-b' : ''}`}>
                                <strong>{component.subtitle}:</strong> {component.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="xl:w-[1280px] mx-auto text-center text-primary text-[40px] font-bold xl:pt-20 xl:px-24 pt-10 px-5 font-gt-america-ext leading-[48px]">
                    Join the future of yield streaming with Yieldi and experience efficient, secure, and innovative financial growth.
                </div>
            </div>
            <div className="flex max-w-screen-2xl mx-auto xl:px-[55px] px-8 mb-24">
                <div className="flex flex-col items-center flex-1 p-[60px] gap-[45px] rounded-large border border-border">
                    <h1 className="text-primary text-center font-bold text-subtitle leading-[48px] self-stretch font-gt-america-ext">
                        The Yield Venue for Shared <span className="relative z-[0] bg-highlight">Security</span>
                    </h1>
                    <div className="flex justify-center gap-4">
                        <SocialLink href="https://x.com/yieldi_xyz" icon={xIcon} alt="x" />
                        <SocialLink href="https://t.me/yieldi_labs" icon={telegramIcon} alt="telegram" />
                        <SocialLink href="https://discord.gg/8aFPCXPwAd" icon={discordIcon} alt="discord" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

const SocialLink = ({ href, icon, alt }) => (
    <NavLink href={href} target="_blank" className="duration-150 hover:scale-110">
        <Image src={icon} alt={alt} />
    </NavLink>
)

export default Testimonials