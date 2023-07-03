import { RiHeart3Fill } from 'react-icons/ri';

type Props = {
  onClick: () => void;
  isFavorite: boolean;
};

const AddToWishlistBtn = ({ onClick, isFavorite }: Props) => {
  return (
    <button
      className="absolute right-6 top-6 text-2xl z-20 p-2"
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
    >
      <RiHeart3Fill
        className={` transition-transform ${
          isFavorite
            ? 'fill-red-600 group-hover/card:scale-125'
            : 'fill-gray-400 group-hover/card:scale-125 group-hover/card:fill-white'
        }`}
      />
    </button>
  );
};

export default AddToWishlistBtn;
