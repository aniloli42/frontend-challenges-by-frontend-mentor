import { useActiveSection } from 'context/ActiveSectionContext';
import Image from 'next/image';
import { ActiveSection, ContextValue } from 'schema';

import personImage from '../../assets/images/image-jeremy.png';

interface Props {}
const MainCard = (props: Props) => {
  return (
    <div className="w-full  lg:w-fit lg:min-w-[250px] ">
      {/* part 1 */}
      <div className="bg-blue p-8 rounded-xl flex gap-6 items-center -mb-2 relative z-0 lg:flex-col lg:items-start lg:p-6">
        {/* Author Image */}
        <div className="w-16 flex border-[.2em] rounded-full lg:w-20">
          <Image src={personImage} />
        </div>

        {/* Author Text */}
        <h1 className="text-white font-light flex flex-col">
          <span className="text-paleBlue">Report for</span>
          <span className="text-2xl lg:w-[6ch] lg:text-4xl">Jeremy Robson</span>
        </h1>
      </div>

      {/* part 2 */}
      <div className="text-white bg-darkBlue py-6 px-8 pt-10 rounded-b-xl flex justify-between lg:flex-col lg:items-start lg:gap-4">
        <EventButton title="Daily" />
        <EventButton title="Weekly" />
        <EventButton title="Monthly" />
      </div>
    </div>
  );
};

interface EventButtonProps {
  title: string;
}

const EventButton = ({ title }: EventButtonProps) => {
  const { activeSection, toggleActive } = useActiveSection() as ContextValue;

  return (
    <button
      className={`text-xl hover:text-white focus-visible:text-white outline-none visited:text-deSaturatedBlue ${
        activeSection === title.toLowerCase()
          ? 'text-white'
          : 'text-deSaturatedBlue'
      }`}
      onClick={() => toggleActive(title.toLowerCase() as ActiveSection)}
    >
      {title}
    </button>
  );
};

export default MainCard;
