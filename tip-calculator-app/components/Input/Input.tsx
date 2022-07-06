import { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  return (
    <input
      type="text"
      className={`w-full bg-veryLightGrayishCyan px-5 py-2 rounded-md text-right outline-none text-xl text-veryDarkCyan border-2 border-transparent valid:focus-within:border-strongCyan valid:hover:border-strongCyan invalid:border-red-400 ${
        className ?? ""
      }`}
      {...rest}
    />
  );
};
export default Input;
