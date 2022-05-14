import Header from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Intro Section With dropdown</title>
        <meta
          name="description"
          content="Intro Section with dropdown navigation"
        />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
