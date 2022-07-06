import { ChangeEvent, FC, useId } from "react";

interface Props {
  percentage: number;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const TipSelector: FC<Props> = ({ percentage, handleInputChange }) => {
  const id = useId();

  return (
    <div className="flex items-center justify-center">
      <input
        type="radio"
        id={id}
        name="tip"
        className="peer hidden"
        value={percentage}
        onChange={handleInputChange}
      />
      <label
        htmlFor={id}
        className="cursor-pointer py-2 px-10 rounded-md flex  bg-veryDarkCyan text-white text-xl w-full justify-center hover:bg-strongCyan  focus-within:bg-strongCyan peer-checked:bg-strongCyan"
      >
        {percentage ?? 0}%
      </label>
    </div>
  );
};
export default TipSelector;
