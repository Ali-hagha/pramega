import Image from 'next/image';
import Link from 'next/link';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useScreenSize } from '@/hooks/useScreenSize';
import ProductPreviewImageGallery from './ProductPreviewImageGallery';
import AddToWishlistBtn from './AddToWishlistBtn';
import AddToCartBtn from './AddToCartBtn';
import ProductTag from './ProductTag';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { currencyFormatter } from '@/helpers';

type Props = {
  product: Product;
  touchEnabled?: boolean;
};

const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductCard = ({ product, touchEnabled = true }: Props) => {
  const { addToCart } = useContext(CartContext) as CartContextValue;

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  return (
    <Link
      href={`/products/${product.attributes.category}/${product.attributes.productId}`}
    >
      <div className=" rounded-3xl  overflow-hidden border-4 border-solid border-gray-100 hover:border-gray-300 active:border-gray-300 group/card transition-colors">
        <div className=" aspect-square relative  bg-gray-100">
          {product.attributes.productTag && (
            <ProductTag productTag={product.attributes.productTag} />
          )}
          <Images
            baseImage={
              backendUrl + product.attributes.primaryImage.data.attributes.url
            }
            secondaryImage={
              backendUrl + product.attributes.secondaryImage.data.attributes.url
            }
            touchEnabled={touchEnabled}
          />
        </div>
        <div className="flex flex-col p-5  bg-white">
          <p className="text-xl font-semibold  mb-4">
            {product.attributes.name}
          </p>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-sm mb-1 text-neutral-dark/70">Price:</p>
              <p className="text-xl font-semibold text-neutral-dark/90">
                {currencyFormatter.format(product.attributes.price)}
              </p>
            </div>
            <AddToCartBtn
              onClick={() => handleAddToCart(product)}
              productId={product.id}
            />
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
  touchEnabled,
}: {
  baseImage: string;
  secondaryImage: string;
  touchEnabled: boolean;
}) => {
  const { isDesktop, isXlDesktop, is2XlDesktop } = useScreenSize();
  return (
    <>
      {isDesktop || isXlDesktop || is2XlDesktop ? (
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
          touchEnabled={touchEnabled}
        />
      )}
    </>
  );
};

export default ProductCard;
