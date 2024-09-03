import SectionWrapper from "@components/SectionWrapper";

const Testimonials = () => {
  const components = [
    {
      subtitle: "AVS",
      text: "Supports yield streaming via an Axelar-like General Message Parsing Gateway Contract.",
    },
    {
      subtitle: "IBC Channel",
      text: "Maintains connectivity to THORChain.",
    },
    {
      subtitle: "Liquidity Auction",
      text: "Conducts auctions with incentives to correctly price and build liquidity.",
    },
    {
      subtitle: "Yieldi Pools",
      text: "Deploys AVS pools and processes inbound yield swaps to native ETH.",
    },
    {
      subtitle: "THORChain",
      text: "Supports Yield Accounts, allowing users to query balances, claim, and set auto-stream.",
    },
  ];

  return (
    <SectionWrapper className="pb-0 xl:pb-0" id="components">
      <div className="flex flex-col justify-center">
        <div
          className="w-full bg-[#72BACA] xl:rounded-[60px] rounded-3xl z-10
                    xl:py-16 py-8 xl:px-24 px-8 max-w-screen-2xl flex-1 mx-auto"
        >
          <div className="text-[#003944] xl:text-[64px] text-[42px] xl:text-start text-center font-bold uppercase flex-1">
            key components
          </div>
          <ul>
            {components.map((component, index) => (
              <li
                key={`component-${index}`}
                className={`border-t border-[#003944] p-2.5 text-[#003944] text-xl font-medium ${index == components.length - 1 ? "border-b" : ""}`}
              >
                <strong>{component.subtitle}:</strong> {component.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:w-[1042px] mx-auto text-center text-[#332b29] text-[40px] font-bold xl:pt-20 xl:px-24 pt-10 px-5 leading-10">
          Join the future of yield streaming with Yieldi and experience
          efficient, secure, and innovative financial growth.
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
