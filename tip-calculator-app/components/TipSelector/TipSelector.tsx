import { FC, useId } from "react";

interface Props {
  percentage: number;
}
const TipSelector: FC<Props> = ({ percentage }) => {
  const id = useId();

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor={id}
        className="cursor-pointer py-2 px-10 rounded-md flex bg-veryDarkCyan text-white text-xl w-full justify-center"
      >
        {percentage ?? 0}%
      </label>
      <input type="radio" id={id} name="tip" className="hidden" />
    </div>
  );
};
export default TipSelector;
