import Link from "next/link";

interface Props {
  href?: string;
  title: string;
  children?: JSX.Element;
}
const NavItem = ({ href, title, children }: Props) => {
  return (
    <Link href={href ?? "#"}>
      <a>
        {/* For Left Icons */}
        {children && <span>{children}</span>}

        {/* For Link Title */}
        <span>{title}</span>
      </a>
    </Link>
  );
};
export default NavItem;
