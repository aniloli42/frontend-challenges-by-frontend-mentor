// Native Components
import Link from "next/link";

// Custom Components
import AuthWrapper from "components/AuthWrapper";
import NavMenu from "components/NavMenu";

// Images
import MenuOpenIcon from "@images/icon-menu.svg";
import MenuCloseIcon from "@images/icon-close-menu.svg";
import LogoIcon from "@images/logo.svg";
import { CSSProperties, useEffect, useState } from "react";

interface Props {}
const Header = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(true);
      return;
    }
    setMenuOpen(false);
  };

  const openStyle: CSSProperties = {
    visibility: "visible",
    opacity: 1,
    pointerEvents: "all",
  };

  const hiddenStyle: CSSProperties = {
    visibility: "hidden",
    opacity: 0,
    pointerEvents: "none",
  };

  const handleOpenMenu = (): void => setMenuOpen(!menuOpen);

  return (
    <header className="flex gap-14 px-6 py-5 justify-between items-center bg-white md:max-w-[1280px] md:mx-auto">
      {/* brand logo */}
      <Link href="/">
        <a aria-label="main page redirect link">
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
        className="flex absolute inset-0 justify-end bg-black/60 md:bg-transparent md:static md:w-full md:justify-start
        transition delay-200 z-50 invisible pointer-events-none opacity-0 md:visible md:pointer-events-auto md:opacity-100"
        style={menuOpen ? openStyle : hiddenStyle}
      >
        <div
          className="flex flex-col bg-white shadow-2xl shadow-medium-gray/50 w-2/3 max-w-md p-6 md:shadow-none md:p-0 md:flex-row md:justify-between md:w-full md:max-w-none transition md:translate-x-0 duration-300 ease-in-out delay-100"
          style={
            menuOpen
              ? {
                  transform: "translateX(0)",
                }
              : {
                  transform: "translateX(100%)",
                }
          }
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
