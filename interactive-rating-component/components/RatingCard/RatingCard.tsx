import Button from "../Button";
import Card from "../Card";

interface Props {
  chooseRating: number;
  toggleRating: (value: number) => void;
  toggleActiveTab: (value: 0 | 1) => void;
}

const RATINGS: number[] = [1, 2, 3, 4, 5];

const RatingCard = ({ chooseRating, toggleRating, toggleActiveTab }: Props) => {
  return (
    <Card>
      <>
        <div
          aria-hidden="true"
          className="p-3 bg-light-gray/10 shadow rounded-full w-fit"
        >
          <svg
            width="17"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-90"
          >
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <div className="my-8">
          <h1 className="text-white text-2xl font-bold mb-2">How did we do?</h1>
          <p className="text-light-gray text-[15px] leading-6">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="flex justify-between gap-2">
          {RATINGS?.map((rate, index) => (
            <Button
              key={index}
              text={rate}
              func={() => {
                toggleRating(rate);
              }}
              active={chooseRating === rate}
            />
          ))}
        </div>

        <button
          className="py-2 pt-3 w-full bg-orange text-white mt-8 rounded-full tracking-widest font-bold text-[15px] active:text-orange active:bg-white transition-colors duration-200 ease-in-out"
          onClick={() => toggleActiveTab(1)}
        >
          SUBMIT
        </button>
      </>
    </Card>
  );
};

export default RatingCard;
