import React, { ReactComponentElement } from "react";

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props) => {
  return (
    <div className="bg-dark-blue rounded-3xl overflow-hidden p-8 mx-auto w-[90%] md:w-auto max-w-[27rem]">
      {children}
    </div>
  );
};

export default Card;
