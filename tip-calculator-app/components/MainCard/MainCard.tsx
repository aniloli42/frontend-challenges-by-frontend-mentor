import DisplayResult from "../DisplayResult";
import TipSelector from "../TipSelector";

type Props = {};

const MainCard = (props: Props) => {
  return (
    <div className="bg-white p-7 rounded-3xl w-full max-w-md mt-8">
      {/* Calculating Options Sections */}
      <form>
        {/* bill amount section */}
        <div className="flex flex-col gap-2">
          <label htmlFor="bill" className="label-text">
            Bill
          </label>
          <input
            className="bg-veryLightGrayishCyan px-5 py-2 rounded-md text-right outline-none text-xl text-veryDarkCyan"
            type="number"
            name="bill"
            step=".1"
            min={0}
            id="bill"
            placeholder="0"
          />
        </div>

        {/* tip % selection section */}
        <div className="flex flex-col gap-2 mt-6">
          <label htmlFor="tip" className="label-text">
            Select Tip %
          </label>
          <div className="grid grid-cols-2 gap-3.5 mt-2">
            <TipSelector percentage={5} />
            <TipSelector percentage={10} />
            <TipSelector percentage={15} />
            <TipSelector percentage={25} />
            <TipSelector percentage={50} />
            <input
              type="number"
              name="tip"
              placeholder="Custom"
              className="text-right text-xl placeholder:text-darkGrayishCyan bg-veryLightGrayishCyan rounded-lg outline-none px-5"
              min={0}
            />
          </div>
        </div>

        {/* Number of people selection */}
        <div className="flex flex-col gap-2 mt-6">
          <label htmlFor="people" className="label-text">
            Number of People
          </label>
          <input
            className="bg-veryLightGrayishCyan px-5 py-2 rounded-md text-right outline-none text-xl text-veryDarkCyan"
            type="number"
            name="people"
            step="1"
            min={1}
            id="people"
          />
        </div>
      </form>

      {/* Calculated Result displaying section */}
      <div className="p-5 rounded-lg bg-veryDarkCyan mt-6 flex flex-col gap-y-5">
        <DisplayResult title="Tip Amount" price={4.27} />
        <DisplayResult title="Total" price={32.79} />
        <button
          type="reset"
          className="py-2.5 rounded-md mt-4 bg-strongCyan text-veryDarkCyan text-lg outline-none"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default MainCard;
