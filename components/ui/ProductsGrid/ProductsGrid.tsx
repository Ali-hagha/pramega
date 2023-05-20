import ProductCard from '../ProductCard/ProductCard';

type Props = {
  products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 flex-1">
      {products.map(product => (
        <ProductCard product={product} key={product.name} />
      ))}
    </div>
  );
};

export default ProductsGrid;
