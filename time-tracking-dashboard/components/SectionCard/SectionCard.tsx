import { useActiveSection } from 'context/ActiveSectionContext';
import { FC, SVGProps } from 'react';
import { ContextValue, sectionData } from 'schema';
import Dots from '../../assets/images/icon-ellipsis.svg';
import CountUp from 'react-countup';
interface Props {
  data: sectionData;
  sectionTheme: {
    color: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
  };
}

enum sectionName {
  'daily' = 'day',
  'weekly' = 'week',
  'monthly' = 'month',
}

const SectionCard = ({ data, sectionTheme }: Props) => {
  const { activeSection } = useActiveSection() as ContextValue;

  const { title, timeframes } = data;
  const { current, previous } = timeframes[activeSection! ?? 'daily'];
  const { color, Icon } = sectionTheme;

  const customStyle = {
    backgroundColor: color,
  };

  return (
    <div>
      <div
        className={`  w-full h-14 rounded-xl flex justify-end px-4 overflow-hidden  `}
        style={customStyle}
      >
        <Icon className="-mt-3" />
      </div>
      <div className="bg-darkBlue rounded-xl -mt-5 p-7 z-10 relative flex flex-col items-center justify-between gap-1 lg:gap-3 hover:bg-darkBlueHovered cursor-pointer">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="font-medium text-[18px] text-white">{title}</h2>
          <Dots />
        </div>

        <div className="flex justify-between items-center w-full gap-1 lg:flex-col lg:items-start">
          <p className="text-4xl text-white font-light">
            <CountUp start={0} end={current} duration={0.5} />
            hrs
          </p>
          <p className="text-paleBlue">
            Last {sectionName[activeSection! ?? 'day']} -{' '}
            <CountUp start={0} end={previous} duration={0.5} /> hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
