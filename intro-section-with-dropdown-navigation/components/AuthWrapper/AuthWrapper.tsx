import Link from "next/link";

interface Props {}
const AuthWrapper = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full items-center mt-8 md:mt-0 md:w-fit md:ml-auto">
      <Link href={"#"}>
        <a className="text-medium-gray hover:text-almost-black focus-visible:text-almost-black outline-none">
          Login
        </a>
      </Link>
      <Link href={"#"}>
        <a className="text-medium-gray border-2 border-medium-gray w-full text-center p-2 rounded-xl hover:text-almost-black focus-visible:text-almost-black hover:border-almost-black focus-visible:border-almost-black md:w-fit outline-none">
          Register
        </a>
      </Link>
    </div>
  );
};
export default AuthWrapper;
