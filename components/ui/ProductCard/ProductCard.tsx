import Image from 'next/image';
import Link from 'next/link';
import {
  RiHeart3Fill,
  RiHeart3Line,
  RiShoppingCartFill,
  RiShoppingCartLine,
} from 'react-icons/ri';

type Props = {
  product: {
    baseImage: string;
    secondaryImage: string;
    productName: string;
    price: number;
    productTag: string;
    isFavorite: boolean;
  };
};

const ProductCard = ({
  product: {
    baseImage,
    secondaryImage,
    productName,
    price,
    productTag,
    isFavorite,
  },
}: Props) => {
  return (
    <Link href={'#'}>
      <div className=" rounded-3xl  overflow-hidden border hover:border-gray-300 group/card transition-colors">
        <div className="aspect-square relative border-b bg-gray-100">
          <div className="absolute z-20 top-6 left-6 capitalize py-2 px-4 bg-primary-light rounded-md text-neutral-dark/80 text-sm font-semibold ">
            {productTag}
          </div>
          <button
            className="absolute right-6 top-6 text-2xl z-20 p-2"
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              console.log('add to favorites');
            }}
          >
            <RiHeart3Fill
              className={`   transition-transform ${
                isFavorite
                  ? 'fill-red-600 group-hover/card:scale-125'
                  : 'fill-gray-400 group-hover/card:scale-125 group-hover/card:fill-white'
              }`}
            />
          </button>
          <Image
            src={baseImage}
            width={600}
            height={600}
            alt={''}
            className="object-contain h-full w-full scale-110"
          />
          <Image
            src={secondaryImage}
            width={600}
            height={600}
            alt={''}
            className="opacity-0 group-hover/card:opacity-100 transition-opacity absolute top-0 left-0  object-contain h-full w-full"
          />
        </div>
        <div className="flex flex-col p-5 ">
          <p className="text-xl font-semibold  mb-4">{productName}</p>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-sm mb-1 text-neutral-dark/70">Price:</p>
              <p className="text-xl font-semibold text-neutral-dark/90">
                ${price}
              </p>
            </div>
            <button
              className="group/button rounded-xl text-neutral-dark bg-primary p-4 text-2xl hover:bg-primary-dark transition-colors relative overflow-hidden"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                console.log('add to cart');
              }}
            >
              <RiShoppingCartFill className="group-hover/button:translate-x-12 transition-transform" />
              <RiShoppingCartFill className="absolute -translate-y-full -translate-x-12 group-hover/button:translate-x-0 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
