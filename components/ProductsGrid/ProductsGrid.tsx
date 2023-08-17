import { Product } from '@/types/product';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardLoadingShimmer from '../ui/ProductCardLoadingShimmer/ProductCardLoadingShimmer';

type Props = {
  products: Product[];
  isLoading?: boolean;
};

const ProductsGrid = ({ products, isLoading }: Props) => {
  if (isLoading) {
    let shimmeringCards = [];
    for (let i = 0; i < 3; i++) {
      shimmeringCards.push(<ProductCardLoadingShimmer key={i} />);
    }

    return (
      <div className={`flex w-full justify-center`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 flex-1 2xl:max-w-[1200px]">
          {shimmeringCards}
        </div>
      </div>
    );
  }

  if (products.length < 1 && !isLoading) {
    return (
      <div className="flex items-center justify-center flex-1">
        <h1 className="text-3xl">No products found. Please try again later.</h1>
      </div>
    );
  }

  return (
    <div className={`flex w-full justify-center`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 flex-1 2xl:max-w-[1200px]">
        {products.map(product => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
