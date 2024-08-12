import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import staking from "../../../public/icons/staking.png"
import calculation from "../../../public/icons/calculation.png"
import distribution from "../../../public/icons/distribution.png"

const ToolKit = () => {

    const features = [
        {
            icon: staking,
            title: "Staking",
            desc: "Users deposit native assets (ETH/BTC) into the Liquid Staking Protocol (LSP)."
        },
        {
            icon: calculation,
            title: "Yield Calculation",
            desc: "The AVS computes the user's share of the yield and sends it via the Inter-Blockchain Communication (IBC) protocol to THORChain at regular intervals."
        },
        {
            icon: distribution,
            title: "Yield Distribution",
            desc: "THORChain swaps the yield to native assets and holds it in a yield collector module assigned to the staker’s L1 address."
        },
    ]

    return (
        <SectionWrapper>
            <div id="solution" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl space-y-3 sm:text-center md:text-left text-xl font-medium uppercase mt-10">
                    How does yieldi work?
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4 p-5 rounded-[20px] border border-[#6d645d] flex-col justify-start items-start gap-[30px]">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="text-[64px] font-bold mt-32 text-center">What Problem Does Yieldi Solve?</div>
                <div className="flex justify-between items-center mt-32">
                    <div className="md:mr-20">
                        <span className="text-2xl font-bold">
                            Yieldi addresses critical issues in the AVS ecosystem, enhancing price discovery and liquidity for AVS tokens. <br/>
                        </span>
                        <span className="text-[#514a47] text-2xl font-medium"><br/></span>
                        <span className="text-[#514a47] text-2xl font-normal">
                            By providing real yield in native assets (ETH/BTC), Yieldi incentivizes users to delegate their LSTs to AVS operators.
                            <br/>
                            <br/>
                            Because the yield is lower risk, and in an asset delivered to the user, removing friction, the cost of yield will be much lower. Thus AVS's will naturally prefer yield-streaming because it will require less inflation and they can transition to the fee regime faster, avoiding security gaps.
                        </span>
                    </div>
                    <img src="/diagram.png" alt="diagram" />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit