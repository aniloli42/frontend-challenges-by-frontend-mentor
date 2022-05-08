import { NextPage } from "next";
import Head from "next/head"
import { useState } from "react";
import RatingCard from "../components/RatingCard";
import ThanksCard from "../components/ThanksCard";

interface Props {}
type TAB = 0 | 1;

const Home: NextPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState<TAB>(0);
  const [chooseRating, setChooseRating] = useState<number>(0);

  const toggleRating = (value: number): void => {
    setChooseRating(value);
  };

  const toggleActiveTab = (value: TAB): void => {
    if (chooseRating === 0) return;
    setActiveTab(value);
  };

  return (
    <>
    <Head>
    <title>Interactive Rating Components</title>
        <meta
          name="description"
          content="Interactive Rating Component helps to rate the services."
        />
    </Head>
      <main className="w-screen h-screen grid place-content-center">
        {activeTab === 0 ? (
          <RatingCard
            chooseRating={chooseRating}
            toggleRating={toggleRating}
            toggleActiveTab={toggleActiveTab}
          />
        ) : (
          <ThanksCard chooseRating={chooseRating} />
        )}
      </main>
    </>
  );
};

export default Home;
