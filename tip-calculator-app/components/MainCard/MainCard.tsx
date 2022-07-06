import DisplayResult from "../DisplayResult";
import Input from "../Input";
import TipSelector from "../TipSelector";
import DollarSign from "../../assets/icon-dollar.svg";
import PersonSign from "../../assets/icon-person.svg";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";

type Props = {};

interface FormDataType {
  bill: string | number;
  tip: string | number;
  customtip: string | number;
  people: string | number;
}

const FORM_DATA_INITIAL: FormDataType = {
  bill: "",
  tip: "",
  customtip: "",
  people: "",
};

const MainCard = (props: Props) => {
  const [formData, setFormData] = useState<FormDataType>(FORM_DATA_INITIAL);

  const tipAmount = useRef<number | null>();
  const totalAmount = useRef<number | null>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: Number(e.target.value) || "",
    }));
  };

  const handleFormReset = () => {
    setFormData(FORM_DATA_INITIAL);
  };

  return (
    <>
      {/* Calculating Options Sections */}
      <form
        className="bg-white p-7 rounded-3xl w-full max-w-md lg:grid lg:grid-cols-2 lg:max-w-4xl lg:gap-10 my-12"
        onReset={handleFormReset}
      >
        <div>
          {/* bill amount section */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="bill" className="label-text">
              Bill
            </label>
            <span className="absolute bottom-0 -translate-y-1/3 pointer-events-none left-5">
              <Image
                height={20}
                src={DollarSign}
                alt="person icon"
                objectFit="contain"
                width={20}
                layout="fixed"
                className="absolute"
              />
            </span>
            <Input
              type="number"
              name="bill"
              step=".1"
              min={0}
              id="bill"
              value={formData.bill}
              onChange={handleInputChange}
            />
          </div>

          {/* tip % selection section */}
          <div className="flex flex-col gap-2 mt-6">
            <label htmlFor="tip" className="label-text">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 mt-2">
              {[5, 10, 15, 25, 50].map((tipPercentage, index) => (
                <TipSelector
                  key={index}
                  percentage={tipPercentage}
                  handleInputChange={handleInputChange}
                />
              ))}
              <Input
                type="number"
                name="customtip"
                placeholder="Custom"
                min={0}
                max={100}
                value={formData.customtip}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Number of people selection */}
          <div className="grid grid-cols-2 gap-2 mt-6 relative">
            <label htmlFor="people" className="label-text">
              Number of People
            </label>

            <span className="absolute bottom-0 -translate-y-1/3 pointer-events-none left-5">
              <Image
                height={20}
                src={PersonSign}
                alt="person icon"
                objectFit="contain"
                width={20}
                layout="fixed"
                className="absolute"
              />
            </span>
            <Input
              type="number"
              name="people"
              min={1}
              id="people"
              pattern="\s[0-9]{1,}$"
              className="col-span-2 peer"
              value={formData.people}
              onChange={handleInputChange}
            />

            <p
              className="justify-self-end text-sm text-red-400 invisible peer-invalid:visible
          col-[2/3] row-[1/2]
          "
            >
              Can&apos;t be zero
            </p>
          </div>
        </div>

        {/* Calculated Result displaying section */}
        <div className="p-5 lg:p-10 rounded-lg bg-veryDarkCyan mt-6 flex flex-col gap-y-5 lg:mt-0">
          <DisplayResult title="Tip Amount" price={0} />
          <DisplayResult title="Total" price={0} />
          <button
            type="reset"
            className="py-2.5 rounded-md bg-strongCyan text-veryDarkCyan hover:bg-lightGrayishCyan focus-visible:bg-lightGrayishCyan text-lg outline-none mt-auto"
          >
            RESET
          </button>
        </div>
      </form>
    </>
  );
};

export default MainCard;
