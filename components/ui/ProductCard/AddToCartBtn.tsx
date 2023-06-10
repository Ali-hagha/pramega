import { RiShoppingCartFill } from 'react-icons/ri';
import { useContext, MutableRefObject } from 'react';
import CartContext from '@/context/CartContext';
import Spinner from '../Spinner/Spinner';

type Props = {
  onClick: () => void;
  productIdEdit: MutableRefObject<number>;
  productId: number;
};

const AddToCartBtn = ({ onClick, productIdEdit, productId }: Props) => {
  const { loading } = useContext(CartContext) as CartContextValue;
  return (
    <button
      className="group/button rounded-xl text-neutral-dark bg-primary p-4 text-2xl h-14 w-14 hover:bg-primary-dark  active:bg-primary-darker  transition-colors relative overflow-hidden"
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
    >
      {/* show spinner and hide icon only on the product that is getting added to cart  */}
      {loading && productIdEdit.current === productId && <Spinner />}
      {!(loading && productIdEdit.current === productId) && (
        <>
          <RiShoppingCartFill className="group-hover/button:translate-x-12 transition-transform" />
          <RiShoppingCartFill className="absolute -translate-y-full -translate-x-12 group-hover/button:translate-x-0 transition-transform" />
        </>
      )}
    </button>
  );
};

export default AddToCartBtn;
