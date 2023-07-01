import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import CurratedPicks from "@/components/CurratedPicks";
import Customer from "@/components/Customer";
import Featured from "@/components/Featured/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Slider</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <Brands />
        <Customer />
        <CurratedPicks />
        <Featured />
        <Banner />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
