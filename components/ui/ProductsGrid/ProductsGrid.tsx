import ProductCard from '../ProductCard/ProductCard';

type Props = {
  products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
  if (products.length < 1) {
    return (
      <div className="flex items-center justify-center flex-1">
        <h1 className="text-3xl">
          No products found in this category. Please try again later.
        </h1>
      </div>
    );
  }
  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 flex-1 2xl:max-w-[1200px]">
        {products.map(product => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
