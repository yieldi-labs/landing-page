import Head from "next/head";
import GradientWrapper from "@components/GradientWrapper"
import Hero from "@components/ui/Hero";
import Testimonials from "@components/ui/Testimonials";
import ToolKit from "@components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <GradientWrapper className="md:sticky md:-top-96">
        <ToolKit />
      </GradientWrapper>
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
    </>
  );
}
