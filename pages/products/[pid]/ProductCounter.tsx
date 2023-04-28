import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const ProductCounter = ({ count, setCount }: Props) => {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <button
        onClick={() => setCount(prevCount => prevCount - 1)}
        className="text-xl p-1 rounded-lg border-neutral-dark border-[1.5px] h-8 w-8 flex items-center justify-center"
      >
        <RiSubtractFill />
      </button>
      <div className="font-medium text-lg basis-6 text-center">{count}</div>
      <button
        onClick={() => setCount(prevCount => prevCount + 1)}
        className="text-xl p-1 rounded-lg bg-neutral-dark text-neutral-light  border-neutral-dark h-8 w-8 flex items-center justify-center"
      >
        <RiAddFill />
      </button>
    </div>
  );
};

export default ProductCounter;
