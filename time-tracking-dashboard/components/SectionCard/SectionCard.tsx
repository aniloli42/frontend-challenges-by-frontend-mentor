import { FC, SVGProps } from "react";
import { sectionData } from "schema";
import Dots from "../../assets/images/icon-ellipsis.svg";
interface Props {
  data: sectionData;
  sectionTheme: {
    color: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
  };
}

const SectionCard = ({ data, sectionTheme }: Props) => {
  const { title, timeframes } = data;
  const { daily, weekly, monthly } = timeframes;

  const { current, previous } = daily;
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
          <p className="text-4xl text-white font-light">{current}hrs</p>
          <p className="text-paleBlue">Last Week - {previous} hrs</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
