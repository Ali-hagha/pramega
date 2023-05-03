import Image from 'next/image';
import Link from 'next/link';
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri';

type Props = {
  product: {
    baseImage: string;
    secondaryImage: string;
    productName: string;
    price: number;
    productTag: string;
  };
};

const ProductCard = ({
  product: { baseImage, secondaryImage, productName, price, productTag },
}: Props) => {
  return (
    <Link href={'#'}>
      <div className=" rounded-3xl  overflow-hidden border hover:border-gray-300 group/card transition-colors">
        <div className="aspect-square relative border-b">
          <div className="absolute z-20 top-6 left-6 capitalize py-2 px-4 bg-primary-light rounded-md text-neutral-dark/80 text-sm font-semibold ">
            {productTag}
          </div>
          <Image
            src={'/products/chairs/Joshua-1.jpg'}
            width={600}
            height={600}
            alt={''}
            className="object-contain h-full w-full"
          />
          <Image
            src={'/products/chairs/Joshua-2.jpg'}
            width={600}
            height={600}
            alt={''}
            className="opacity-0 group-hover/card:opacity-100 transition-opacity absolute top-0 left-0  object-contain h-full w-full"
          />
        </div>
        <div className="flex items-center justify-between p-5 ">
          <div>
            <p className="text-lg font-medium text-neutral-dark/80 mb-2">
              {productName}
            </p>
            <p className="text-xl font-semibold text-neutral-dark/80">
              ${price}
            </p>
          </div>
          <button
            className="group/button rounded-xl text-neutral-dark bg-primary p-4 text-2xl hover:bg-primary-dark transition-colors relative overflow-hidden"
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              console.log('hello');
            }}
          >
            <RiShoppingCartFill className="group-hover/button:translate-x-12 transition-transform" />
            <RiShoppingCartFill className="absolute -translate-y-full -translate-x-12 group-hover/button:translate-x-0 transition-transform" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
