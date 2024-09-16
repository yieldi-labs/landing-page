import NavLink from "@components/ui/NavLink"
import Image from "next/image"
import xIcon from "@public/logos/x.svg"
import telegramIcon from "@public/logos/telegram.svg"
import discordIcon from "@public/logos/discord.svg"

const Hero = () => (
    <section className="text-gray-600 mt-28 flex flex-col h-screen w-full">
        <div className="text-center flex-col flex flex-1 fixed w-full">
            <h1 className="text-primary text-center font-bold text-hero-mobile xl:text-hero leading-none max-w-hero mx-auto font-gt-america-ext">
                The yield layer for shared <span className="relative z-[-1] before:absolute before:content-[''] before:w-full before:h-[68%] before:inset-y-4 before:z-[-2] before:bg-highlight">security.</span>
            </h1>
            <div className="flex mt-20 z-0 w-full flex-1 flex-col md:flex-row md:items-stretch items-center">
                <Image src="/construction.svg" width="470" height="478" alt="construction" />
                <div className="xl:ml-7 flex flex-col xl:mt-10 sm:px-2 flex-1 px-4 xl:px-0 justify-between h-auto">
                    <span />
                    <div className="text-3xl text-primary text-left font-medium font-gt-america-ext max-w-content pl-12 leading-[44px]">
                        Launch liquidity for shared security protocols. <br /> Native yield-streaming for the lowest cost of security.
                    </div>
                    <div className="mt-10 flex flex-col">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center flex-col flex flex-1">
            <div className="w-full bg-dark rounded-3xl xl:rounded-[60px] z-10 relative py-8 mt-14 md:mt-0 xl:py-16 px-12 xl:px-24 text-accent-dark pb-16 xl:pb-32 flex-col xl:flex-row md:top-[768px] top-[780px]">
                <span className="flex text-accent-dark text-xl font-medium uppercase">What is Yieldi?</span>
                <div className="xl:w-[962px] text-accent-dark text-2xl xl:text-5xl font-bold mt-6 xl:mt-12 text-left font-gt-america-ext">
                    Yieldi is a cutting-edge, gas-efficient yield-streaming solution initially deployed on Thorchain, leveraging its native ETH/BTC liquidity.
                </div>
                <div className="xl:w-[626px] text-accent-dark text-lg xl:text-xl font-medium text-left ml-auto mt-10 xl:mt-20">
                    By integrating with Eigenlayer and Babylon, Yieldi allows users to delegate their Liquid Staking Tokens (LSTs) to an Actively Validated Set (AVS). The AVS can then stream yield back to the staker natively using Yieldi.
                </div>
            </div>
        </div>
    </section>
)

const SocialLinks = () => (
    <div className="flex xl:justify-end justify-center right-0 xl:mr-7 xl:mb-[42px] mb-[24px]">
        <SocialLink href="https://x.com/yieldi_xyz" icon={xIcon} alt="x" />
        <SocialLink href="https://t.me/yieldi_labs" icon={telegramIcon} alt="telegram" />
        <SocialLink href="https://discord.gg/8aFPCXPwAd" icon={discordIcon} alt="discord" />
    </div>
)

const SocialLink = ({ href, icon, alt }) => (
    <NavLink href={href} target="_blank" className="duration-150 hover:scale-110">
        <Image src={icon} alt={alt} />
    </NavLink>
)

export default Hero