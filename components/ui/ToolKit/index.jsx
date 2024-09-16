import SectionWrapper from "@components/SectionWrapper";
import Image from "next/image";
import staking from "@public/icons/staking.svg";
import calculation from "@public/icons/calculation.svg";
import distribution from "@public/icons/distribution.svg";

const ToolKit = () => {
  const features = [
    {
      icon: staking,
      title: "Staking",
      desc: "Users deposit native assets (ETH/BTC) into the Liquid Staking Protocol (LSP).",
    },
    {
      icon: calculation,
      title: "Yield Calculation",
      desc: "The AVS computes the user's share of the yield and sends it via the Inter-Blockchain Communication (IBC) protocol to THORChain at regular intervals.",
    },
    {
      icon: distribution,
      title: "Yield Distribution",
      desc: "THORChain swaps the yield to native assets and holds it in a yield collector module assigned to the staker’s L1 address.",
    },
  ];

  return (
    <SectionWrapper id="solution">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl space-y-3 text-center xl:text-left text-xl font-medium uppercase mt-10">
          How does yieldi work?
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-x-4 p-5 rounded-[20px] border border-[#6d645d] flex-col 
                                justify-center items-center xl:justify-start xl:items-start gap-[30px]"
              >
                <div className="flex-none flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} />
                </div>
                <div className="flex flex-col sm:justify-center sm:items-center xl:justify-start xl:items-start">
                  <h4 className="text-[36px] font-bold text-[#332B29] h-[90px] xl:w-[70px] leading-[40px] xl:text-start text-center">
                    {item.title}
                  </h4>
                  <p className="mt-5 text-xl font-medium text-[#524B48]">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[64px] font-bold xl:mt-32 mt-8 pt-2 text-start xl:leading-[64px] leading-[60px]">
          What Problem Does Yieldi Solve?
        </div>
        <div className="flex xl:flex-row flex-col justify-between items-center xl:mt-[110px] mt-9">
          <div className="xl:mr-20 mr-0">
            <span className="text-2xl font-bold">
              Yieldi addresses critical issues in the AVS ecosystem, enhancing
              price discovery and liquidity for AVS tokens. <br />
            </span>
            <span className="text-[#514a47] text-2xl font-medium">
              <br />
            </span>
            <span className="text-[#514a47] text-2xl font-normal">
              By providing real yield in native assets (ETH/BTC), Yieldi
              incentivizes users to delegate their LSTs to AVS operators.
              <br />
              <br />
              Because the yield is lower risk, and in an asset delivered to the
              user, removing friction, the cost of yield will be much lower.
              Thus AVS's will naturally prefer yield-streaming because it will
              require less inflation and they can transition to the fee regime
              faster, avoiding security gaps.
            </span>
          </div>
          <img src="/diagram.svg" alt="diagram" className="mt-6 xl:mt-0" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
