import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import Image from "next/image"
import xIcon from "../../../public/logos/x.svg"
import telegramIcon from "../../../public/logos/telegram.svg"
import discordIcon from "../../../public/logos/discord.svg"



const FooterCTA = () => (
    <SectionWrapper className="bg-[#F5F1EB]">
        <div class="flex max-w-screen-2xl mx-auto p-[60px] flex-col items-center gap-[45px] rounded-[60px] border border-[#524B48]">
            <h1 class="text-[#332B29] text-center font-bold text-[48px] leading-normal self-stretch">
                The Yield Venue for Shared <span className="bg-[#A1FD59] p-3">Security</span>
            </h1>
            <div class="flex h-[127px] p-[10px] justify-center items-center gap-[10px] self-stretch rounded-[100px] border border-[#6D655D] bg-[#F5F1EB]">
                <h2 class="text-[#332B29] font-medium text-[20px] leading-none uppercase">
                    restake now
                </h2>
            </div>
            <div className="flex justify-center gap-6">
                <Image src={xIcon} alt="x" />
                <Image src={telegramIcon} alt="telegram" />
                <Image src={discordIcon} alt="discord" />
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA