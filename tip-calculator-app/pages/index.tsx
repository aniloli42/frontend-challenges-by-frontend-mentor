import type { NextPage } from "next";
import Head from "next/head";
import MainCard from "../components/MainCard";
import Logo from "../assets/logo.svg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Tip Calculator App</title>
        <meta
          name="description"
          content="App which is useful to calculate the tip from given condition."
        />
      </Head>
      <main className="min-h-full flex flex-col items-center lg:justify-center p-4">
        <h1 className="mt-8 lg:mt-3">
          <Image src={Logo} alt="brand logo" />
        </h1>

        {/* Main Card */}
        <MainCard />
      </main>
    </>
  );
};

export default Home;
