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
  const [error, setError] = useState<string>("");

  const [tipAmount, setTipAmount] = useState<number | null>();
  const [totalAmount, setTotalAmount] = useState<number | null>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "customtip") {
      setFormData((prev) => ({ ...prev, tip: "" }));
    }

    if (e.target.name === "tip") {
      setFormData((prev) => ({ ...prev, customtip: "" }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: Number(e.target.value) || "",
    }));
  };

  useEffect(() => {
    setError("");
    setTipAmount(null);
    setTotalAmount(null);

    if (!Number.isInteger(formData.people)) {
      setError("invalid number");
    }

    if (
      formData.people == "" ||
      (formData.bill == "" && (formData.customtip == "" || formData.tip == ""))
    )
      return;

    if (typeof formData.people === "string" || isNaN(formData.people)) return;
    if (typeof formData.bill === "string" || isNaN(formData.bill)) return;

    let tipCalc;

    if (formData.customtip > 100) return;

    if (formData.customtip != "" && typeof formData.customtip == "number") {
      tipCalc = formData.bill * ((formData.customtip as number) / 100);
    } else if (formData.tip != "" && typeof formData.tip == "number") {
      tipCalc = formData.bill * ((formData.tip as number) / 100);
    } else {
      return;
    }

    setTipAmount(tipCalc / formData.people);
    setTotalAmount((formData.bill + tipCalc) / formData.people);
  }, [formData]);

  const handleFormReset = () => {
    setFormData(FORM_DATA_INITIAL);
    setError("");
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
                  checked={formData.tip}
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

            {error != "" && (
              <p
                className="justify-self-end text-sm text-red-400 invisible peer-invalid:visible
    col-[2/3] row-[1/2]
    "
              >
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Calculated Result displaying section */}
        <div className="p-5 lg:p-10 rounded-lg bg-veryDarkCyan mt-6 flex flex-col gap-y-5 lg:mt-0">
          <DisplayResult title="Tip Amount" price={tipAmount} />
          <DisplayResult title="Total" price={totalAmount} />
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
