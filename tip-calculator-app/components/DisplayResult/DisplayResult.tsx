import { FC } from "react";

interface Props {
  title: string;
  price: number | undefined | null;
}
const DisplayResult: FC<Props> = ({ title, price }) => {
  return (
    <div className="grid grid-cols-2 gap-x-8">
      <h3 className="self-start text-white text-sm">{title ?? "Your Title"}</h3>
      <p className="row-[2/3] col-[1/2] text-xs text-grayishCyan">/ person</p>
      <p className="col-[2/3] row-[1/3] self-center justify-self-end text-grayishCyan text-3xl">
        ${price?.toFixed(2) ?? "0"}
      </p>
    </div>
  );
};
export default DisplayResult;
