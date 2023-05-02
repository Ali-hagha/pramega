import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const ProductCounter = ({ count, setCount }: Props) => {
  const handleIncrement = () => {
    setCount(prevCount => {
      if (prevCount < 6) return prevCount + 1;
      return prevCount;
    });
  };

  const handleDecrement = () => {
    setCount(prevCount => {
      if (prevCount <= 1) return prevCount;
      return prevCount - 1;
    });
  };

  return (
    <div className="flex items-center space-x-4 mb-8">
      <button
        onClick={handleDecrement}
        className="text-xl p-1 rounded-lg border-neutral-dark border-[1.5px] h-8 w-8 flex items-center justify-center"
      >
        <RiSubtractFill />
      </button>
      <div className="font-medium text-lg basis-6 text-center">{count}</div>
      <button
        onClick={handleIncrement}
        className="text-xl p-1 rounded-lg bg-neutral-dark text-neutral-light  border-neutral-dark h-8 w-8 flex items-center justify-center"
      >
        <RiAddFill />
      </button>
    </div>
  );
};

export default ProductCounter;
