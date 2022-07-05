import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import MainCard from "../components/MainCard";
import InputBox from "../components/InputBox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tip Calculator App</title>
        <meta
          name="description"
          content="App which is useful to calculate the tip from given condition."
        />
      </Head>
      <main className="w-full h-full flex flex-col items-center p-2 md:p-4">
        <p>Logo placeholder</p>

        {/* Main Card */}
        <MainCard />
      </main>
    </>
  );
};

export default Home;
