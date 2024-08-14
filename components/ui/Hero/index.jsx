import NavLink from "../NavLink"
import Image from "next/image"
import styles from "../../../styles/home.module.css"

const Hero = () => (
    <section>
        <div className="text-gray-600 mt-28 flex flex-col">
            <div className="text-center">
                <div className={styles.title + ' mx-auto'}>
                    The yield layer for shared <span>security.</span>
                </div>
                <div className="flex mt-20 z-0">
                    <Image src="/Construction.svg" width={500} height={665} alt="construction" className="ml-[-158px]" />
                    <div className="ml-7 flex flex-col mt-10">
                        <div className="text__color--main text-[24px] text-left font-normal">
                            Launch liquidity for shared security <br /> protocols. <br /> Native yield-streaming for the lowest cost <br /> of security.
                        </div>
                        <div className="mt-10 flex">
                            <NavLink
                                href="/get-started"
                                className="font-medium text-sm text-white hover:bg-gray-600 active:bg-gray-900 
                                md:inline w-[180px] h-10 px-0 py-auto bg-[#332b29] rounded-[40px] gap-2.5 inline-flex "
                            >
                                RESTAKE NOW
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#003944] rounded-[60px] mt-[-150px] z-10 relative py-16 px-24 text-[#71bac9]">
                    <span className="flex text-[#71bac9] text-xl font-medium uppercase">What is Yieldi?</span>
                    <div className="w-[1081px] text-[#71bac9] text-5xl font-bold mt-12 text-left">Yieldi is a cutting-edge, gas-efficient yield-streaming solution initially deployed on Thorchain, leveraging its native ETH/BTC liquidity. </div>
                    <div className="w-[626px] text-[#71bac9] text-xl font-medium text-left ml-auto mt-20">
                        By integrating with Eigenlayer and Babylon, Yieldi allows users to delegate their Liquid Staking Tokens (LSTs) to an Actively Validated Set (AVS). The AVS can then stream yield back to the staker natively using Yieldi.
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero