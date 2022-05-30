import type { NextPage } from "next";
import Head from "next/head";

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
      <header>
        <h1 className="text-xl">HI</h1>
      </header>
    </>
  );
};

export default Home;
