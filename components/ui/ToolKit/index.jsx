import SectionWrapper from "@components/SectionWrapper"
import Image from "next/image"
import staking from "@public/icons/staking.svg"
import calculation from "@public/icons/calculation.svg"
import distribution from "@public/icons/distribution.svg"

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
            desc: "THORChain swaps the yield to native assets and holds it in a yield collector module assigned to the staker's L1 address."
        },
    ]

    return (
        <SectionWrapper id="solution">
            <div className="mx-auto max-w-screen-xl md:sticky md:top-0">
                <h2 className="text-xl font-medium uppercase md:mt-20 mt-4 text-center xl:text-left">
                    How does yieldi work?
                </h2>
                <div className="mt-12 flex flex-col">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <FeatureCard key={idx} {...item} />
                        ))}
                    </ul>
                    <h3 className="text-title xl:text-title-desktop font-bold xl:mt-32 mt-8 pt-2 text-start font-gt-america-ext">
                        What Problem Does Yieldi Solve?
                    </h3>
                    <div className="flex xl:flex-row flex-col justify-between items-center xl:mt-28 mt-9 pb-12">
                        <div className="xl:mr-20 mr-0 max-w-2xl">
                            <p className="text-2xl font-bold font-gt-america-ext mb-6">
                                Yieldi addresses critical issues in the AVS ecosystem, enhancing price discovery and liquidity for AVS tokens.
                            </p>
                            <p className="text-primary-light text-2xl font-normal">
                                By providing real yield in native assets (ETH/BTC), Yieldi incentivizes users to delegate their LSTs to AVS operators.
                                <br /><br />
                                Because the yield is lower risk, and in an asset delivered to the user, removing friction, the cost of yield will be much lower. Thus AVS's will naturally prefer yield-streaming because it will require less inflation and they can transition to the fee regime faster, avoiding security gaps.
                            </p>
                        </div>
                        <Image width={0} height={0} src="/diagram.svg" alt="diagram" className="mt-6 xl:mt-0 w-auto"/>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

const FeatureCard = ({ icon, title, desc }) => (
    <li className="flex flex-col gap-[30px] p-5 rounded-large border border-border-light items-center xl:items-start">
        <div className="flex-none flex items-center justify-center">
            <Image src={icon} alt={title} />
        </div>
        <div className="flex flex-col sm:items-center xl:items-start">
            <h4 className="text-[36px] font-bold text-primary h-[90px] xl:w-[70px] leading-[40px] xl:text-start text-center font-gt-america-ext">
                {title}
            </h4>
            <p className="mt-5 text-xl font-medium text-border">
                {desc}
            </p>
        </div>
    </li>
)

export default ToolKit