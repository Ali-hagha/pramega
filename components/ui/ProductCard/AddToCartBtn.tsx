import { RiShoppingCartFill } from 'react-icons/ri';

type Props = {
  onClick: () => void;
};

const AddToCartBtn = ({ onClick }: Props) => {
  return (
    <button
      className="group/button rounded-xl text-neutral-dark bg-primary p-4 text-2xl hover:bg-primary-dark active:bg-primary-darker  transition-colors relative overflow-hidden"
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
    >
      <RiShoppingCartFill className="group-hover/button:translate-x-12 transition-transform" />
      <RiShoppingCartFill className="absolute -translate-y-full -translate-x-12 group-hover/button:translate-x-0 transition-transform" />
    </button>
  );
};

export default AddToCartBtn;
