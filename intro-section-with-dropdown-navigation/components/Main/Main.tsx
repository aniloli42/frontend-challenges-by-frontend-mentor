import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileIcon from "../../assets/images/image-hero-mobile.png";
import DesktopIcon from "../../assets/images/image-hero-desktop.png";

import DataBizClientIcon from "../../assets/images/client-databiz.svg";
import AudioPhileClientIcon from "../../assets/images/client-audiophile.svg";
import MeetClientIcon from "../../assets/images/client-meet.svg";
import MakerClientIcon from "../../assets/images/client-maker.svg";

interface Props {}
const Main = (props: Props) => {
  const [device, setDevice] = useState<boolean>(true);

  const handleDevice = () => {
    if (window.innerWidth >= 768) {
      setDevice(true);
      return;
    }
    setDevice(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleDevice);
    handleDevice();

    return () => {
      window.removeEventListener("resize", handleDevice);
    };
  }, []);

  return (
    <main className="flex flex-col lg:flex-row-reverse lg:max-w-7xl lg:mx-auto md:my-5 md:min-h-fit md:justify-center md:items-center gap-20 md:px-12">
      {/* main Section Image */}
      <div>
        {device ? (
          <Image
            src={DesktopIcon}
            alt="Section Image"
            width={400}
            height={500}
            layout="fixed"
            priority
          />
        ) : (
          <Image src={MobileIcon} alt="Section Image" priority />
        )}
      </div>

      {/* Main Content */}
      <div className="my-10 px-4 text-center flex flex-col items-center md:items-start md:text-left md:max-w-2xl">
        <h1 className=" flex gap-2 md:flex-col text-4xl font-bold text-almost-black md:text-7xl">
          <span>Make</span>
          <span className="whitespace-nowrap">remote work</span>
        </h1>
        <p className="text-[18px] text-medium-gray my-4 md:my-12 md:max-w-[46ch]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        {/* CTA Button */}
        <Link href="#">
          <a className="flex w-fit mx-auto py-3 px-6 bg-almost-black text-almost-white rounded-2xl hover:bg-almost-white border-2 border-transparent hover:border-almost-black hover:text-almost-black focus-visible:border-almost-black focus-visible:text-almost-black focus-visible:bg-transparent outline-none md:mx-0">
            Learn more
          </a>
        </Link>

        {/* logos */}

        <div className="flex justify-center gap-2 md:gap-6 mt-10 flex-wrap md:mt-20 md:justify-start">
          <DataBizClientIcon className="scale-75 " />
          <AudioPhileClientIcon className="scale-75 " />
          <MeetClientIcon className="scale-75 " />
          <MakerClientIcon className="scale-75 " />
        </div>
      </div>
    </main>
  );
};
export default Main;
