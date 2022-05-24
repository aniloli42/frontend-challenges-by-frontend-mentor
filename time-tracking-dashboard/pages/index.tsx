import { NextPage } from 'next';
import SectionCard from 'components/SectionCard';

// SVG ICONS
import WorkIcon from '../assets/images/icon-work.svg';
import PlayIcon from '../assets/images/icon-play.svg';
import StudyIcon from '../assets/images/icon-study.svg';
import ExerciseIcon from '../assets/images/icon-exercise.svg';
import SocialIcon from '../assets/images/icon-social.svg';
import SelfCareIcon from '../assets/images/icon-self-care.svg';

import sectionData from 'data.json';
import MainCard from 'components/MainCard';
import ActiveSectionProvider from 'context/ActiveSectionContext';
import Head from 'next/head';

const sectionThemeList = [
  {
    color: 'hsl(15, 100%, 70%)',
    Icon: WorkIcon,
  },
  {
    color: 'hsl(195, 74%, 62%)',
    Icon: PlayIcon,
  },
  {
    color: 'hsl(348, 100%, 68%)',
    Icon: StudyIcon,
  },
  {
    color: 'hsl(145, 58%, 55%)',
    Icon: ExerciseIcon,
  },
  {
    color: 'hsl(264, 64%, 52%)',
    Icon: SocialIcon,
  },
  {
    color: 'hsl(43, 84%, 65%)',
    Icon: SelfCareIcon,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Time Tracking Dashboard</title>
      </Head>
      <ActiveSectionProvider>
        <main className="flex min-h-screen items-center justify-center py-24 px-8 relative overflow-hidden lg:px-16 flex-col lg:flex-row gap-8">
          <MainCard />

          <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectionData?.map((data, index) => (
              <SectionCard
                key={index}
                data={data}
                sectionTheme={sectionThemeList[index]}
              />
            ))}
          </div>
        </main>
      </ActiveSectionProvider>
    </>
  );
};

export default Home;
