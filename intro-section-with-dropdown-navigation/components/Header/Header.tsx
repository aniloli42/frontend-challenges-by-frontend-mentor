// Native Components
import Link from "next/link";

// Custom Components
import AuthWrapper from "components/AuthWrapper";
import NavMenu from "components/NavMenu";

// Images
import MenuOpenIcon from "@images/icon-menu.svg";
import MenuCloseIcon from "@images/icon-close-menu.svg";
import LogoIcon from "@images/logo.svg";
import { useEffect, useState } from "react";

interface Props {}
const Header = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  const handleResize = () => {
    if (window.document.body.clientWidth >= 768) {
      setMenuOpen(true);
      return;
    }
    setMenuOpen(false);
  };

  const handleOpenMenu = (): void => setMenuOpen(!menuOpen);

  return (
    <header className="flex gap-14 px-6 py-5 justify-between items-center bg-white md:max-w-[1280px] md:mx-auto">
      {/* brand logo */}
      <Link href="/">
        <a>
          <LogoIcon />
        </a>
      </Link>

      {/* Menu Open Icon Button */}
      <button
        className="md:hidden md:pointer-events-none"
        onClick={handleOpenMenu}
      >
        <MenuOpenIcon />
      </button>

      {/* nav container */}
      <div
        className={`flex absolute inset-0 justify-end bg-black/60 md:bg-transparent md:static md:w-full md:justify-start
        transition-all delay-200 z-50
      ${
        menuOpen
          ? "visible pointer-events-auto opacity-100"
          : "invisible pointer-events-none opacity-0"
      }
      `}
      >
        <div
          className={`flex flex-col bg-white shadow-2xl shadow-medium-gray/50 w-2/3 max-w-md p-6 md:shadow-none md:p-0 md:flex-row md:justify-between md:w-full md:max-w-none transition-transform duration-300 ease-in-out delay-100
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            className="md:pointer-events-none md:hidden w-fit self-end cursor-pointer"
            onClick={handleOpenMenu}
          >
            <MenuCloseIcon />
          </button>
          {/* nav menu */}
          <NavMenu />

          {/* Right Nav Contents {Login & Register} */}
          <AuthWrapper />
        </div>
      </div>
    </header>
  );
};
export default Header;
