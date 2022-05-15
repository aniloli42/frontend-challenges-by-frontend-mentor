import { useEffect, useState } from "react";
import ArrowUpIcon from "../../assets/images/icon-arrow-up.svg";
import ArrowDownIcon from "../../assets/images/icon-arrow-down.svg";

interface Props {
  title: string;
  children: JSX.Element;
}
const NavDropWrapper = ({ title, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(open);
  }, [open]);

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="md:relative md:flex md:flex-col md:justify-center">
      <button
        className="text-left text-medium-gray focus-visible:text-almost-black hover:text-almost-black outline-none flex items-center gap-4 w-fit"
        onClick={handleOpen}
      >
        <span>{title}</span>
        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
      {open && (
        <div
          className={` pl-6 flex flex-col mt-4 gap-3 md:bg-white md:absolute md:top-8 md:right-0 md:px-4 md:py-4 md:shadow-[0px_1px_5px_rgba(0,0,0,.2)] md:rounded-md animate-slide-in
        `}
        >
          {children}
        </div>
      )}
    </div>
  );
};
export default NavDropWrapper;
