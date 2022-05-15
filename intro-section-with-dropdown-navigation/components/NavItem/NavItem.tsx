import Link from "next/link";

interface Props {
  href?: string;
  title: string;
  children?: JSX.Element;
}
const NavItem = ({ href, title, children }: Props) => {
  return (
    <Link href={href ?? "#"}>
      <a className="text-medium-gray focus-visible:text-almost-black hover:text-almost-black outline-none flex items-center">
        {/* For Left Icons */}
        {children && <span className="w-8">{children}</span>}

        {/* For Link Title */}
        <span className="whitespace-nowrap">{title}</span>
      </a>
    </Link>
  );
};
export default NavItem;
