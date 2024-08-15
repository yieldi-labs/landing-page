import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <GradientWrapper>
        <ToolKit />
      </GradientWrapper>
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
