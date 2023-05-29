import Image from 'next/image';
import Link from 'next/link';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useScreenSize } from '@/hooks/useScreenSize';
import ProductPreviewImageGallery from './ProductPreviewImageGallery';
import WishlistBtn from './WishlistBtn';
import AddToCartBtn from './AddToCartBtn';

type Props = {
  product: Product;
};

const ProductCard = ({
  product: { imageUrlPrimary, imageUrlSecondary, name, price, productTag },
}: Props) => {
  return (
    <Link href={'#'}>
      <div className=" rounded-3xl  overflow-hidden border hover:border-gray-300 group/card transition-colors">
        <div className=" aspect-square relative border-b bg-gray-100">
          <div className="absolute z-20 top-6 left-6 capitalize py-2 px-4 bg-primary-light rounded-md text-neutral-dark/80 text-sm font-semibold ">
            {productTag}
          </div>

          <WishlistBtn
            isFavorite={false}
            onClick={() => console.log('add to wishlist')}
          />
          <Images
            baseImage={imageUrlPrimary}
            secondaryImage={imageUrlSecondary}
          />
        </div>
        <div className="flex flex-col p-5 ">
          <p className="text-xl font-semibold  mb-4">{name}</p>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-sm mb-1 text-neutral-dark/70">Price:</p>
              <p className="text-xl font-semibold text-neutral-dark/90">
                ${price}
              </p>
            </div>
            <AddToCartBtn onClick={() => console.log('add to cart')} />
          </div>
        </div>
      </div>
    </Link>
  );
};

// desktop size: show two images over eachother and reveal the bottom one on hover
// tablet and phone size: show an image carousell with two images
const Images = ({
  baseImage,
  secondaryImage,
}: {
  baseImage: string;
  secondaryImage: string;
}) => {
  const { isDesktop } = useScreenSize();
  return (
    <>
      {isDesktop ? (
        <>
          <Image
            src={baseImage}
            width={600}
            height={600}
            alt={''}
            className="object-contain h-full w-full"
          />
          <Image
            src={secondaryImage}
            width={600}
            height={600}
            alt={''}
            className="opacity-0 group-hover/card:opacity-100 transition-opacity absolute top-0 left-0  object-contain h-full w-full"
          />
        </>
      ) : (
        <ProductPreviewImageGallery
          baseImage={baseImage}
          secondaryImage={secondaryImage}
        />
      )}
    </>
  );
};

export default ProductCard;
