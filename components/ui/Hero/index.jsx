import NavLink from "../NavLink"
import Image from "next/image"
import xIcon from "../../../public/logos/x.svg"
import telegramIcon from "../../../public/logos/telegram.svg"
import discordIcon from "../../../public/logos/discord.svg"


const Hero = () => (
    <section>
        <div className="text-gray-600 mt-28 flex flex-col max-w-screen-2xl mx-auto">
            <div className="text-center flex-col flex flex-1">
                <div className="text-[#332B29] text-center font-bold text-[96px] leading-none max-w-[990px] mx-auto">
                    The yield layer for shared <span className="bg-[#A1FD59]">security.</span>
                </div>
                <div className="flex mt-20 z-0 w-full flex-1">
                    <Image src="/construction.png" width="470" height="478" alt="construction" />
                    <div className="ml-7 flex flex-col mt-10 flex-1">
                        <div className="text__color--main text-[24px] text-left font-normal">
                            Launch liquidity for shared security <br /> protocols. <br /> Native yield-streaming for the lowest cost <br /> of security.
                        </div>
                        <div className="mt-10 flex flex-col">
                            <NavLink href="/get-started" className="flex w-[241px] h-[58px] p-[10px] justify-center 
                                items-center gap-[10px] flex-shrink-0 rounded-full bg-[#332B29] text-[#FFF] 
                                text-[16px] font-medium uppercase">
                                RESTAKE NOW
                            </NavLink>
                            <div className="flex justify-end gap-6 right-0 p-6 mr-7 pt-[72px]">
                                <Image src={xIcon} alt="x" />
                                <Image src={telegramIcon} alt="telegram" />
                                <Image src={discordIcon} alt="discord" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div className="w-full bg-[#003944] rounded-[60px] z-10 relative py-16 px-24 text-[#71bac9] pb-32">
                    <span className="flex text-[#71bac9] text-xl font-medium uppercase">What is Yieldi?</span>
                    <div className="w-[962px] text-[#71bac9] text-5xl font-bold mt-12 text-left">Yieldi is a cutting-edge, gas-efficient yield-streaming solution initially deployed on Thorchain, leveraging its native ETH/BTC liquidity. </div>
                    <div className="w-[626px] text-[#71bac9] text-xl font-medium text-left ml-auto mt-20">
                        By integrating with Eigenlayer and Babylon, Yieldi allows users to delegate their Liquid Staking Tokens (LSTs) to an Actively Validated Set (AVS). The AVS can then stream yield back to the staker natively using Yieldi.
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero