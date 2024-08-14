import SectionWrapper from "../../SectionWrapper"

const Testimonials = () => {

    const components = [
        {
            text: "AVS: Supports yield streaming via an Axelar-like General Message Parsing Gateway Contract."
        },
        {
            text: "IBC Channel: Maintains connectivity to THORChain."
        },
        {
            text: "Liquidity Auction: Conducts auctions with incentives to correctly price and build liquidity."
        },
        {
            text: "Yieldi Pools: Deploys AVS pools and processes inbound yield swaps to native ETH."
        },
        {
            text: "THORChain: Supports Yield Accounts, allowing users to query balances, claim, and set auto-stream."
        },
    ]

    return (
        <SectionWrapper className="pb-0">
            <div className="flex flex-col justify-center">
                <div id="components" className="w-full bg-[#72BACA] rounded-[60px] z-10
                    py-16 px-24 max-w-screen-2xl flex-1 mx-auto">
                <div className="text-[#003944] text-[64px] font-bold uppercase flex-1">key components</div>
                    <ul>
                        {
                            components.map((component, index) => 
                                <li key={`component-${index}`} className={`border-t border-[#003944] p-2.5 text-[#003944] text-xl font-medium ${index == components.length - 1 ? 'border-b' : ''}`}>
                                    {component.text}
                                </li>)
                        }
                    </ul>
                </div>
                <div className="w-[1042px] mx-auto text-center text-[#332b29] text-[40px] font-bold py-20 px-24 leading-10">Join the future of yield streaming with Yieldi and experience efficient, secure, and innovative financial growth.</div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials