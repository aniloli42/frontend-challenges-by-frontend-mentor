import React from "react";

type Props = {
  text?: number;
  active?: boolean;
  func: () => void;
};

const Button = ({ text, active, func }: Props) => {
  return (
    <button
      className={` w-11 md:w-12 md:h-12 pt-1 h-11 rounded-full  text-[15px] font-bold flex items-center justify-center transition-colors duration-200 ease-in-out
    ${
      active
        ? "bg-light-gray text-white"
        : "bg-medium-gray/10 hover:bg-orange focus-within:bg-orange focus-within:text-white hover:text-white text-light-gray"
    }
    `}
      onClick={func}
    >
      {text ?? 1}
    </button>
  );
};

export default Button;
