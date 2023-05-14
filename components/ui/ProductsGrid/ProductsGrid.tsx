import ProductCard from '../ProductCard/ProductCard';

type Props = {
  products: Product[];
};

type Product = {
  productName: string;
  price: number;
  baseImage: string;
  secondaryImage: string;
  productTag: string;
  isFavorite: boolean;
};

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 flex-1">
      {products.map(product => (
        <ProductCard product={product} key={product.productName} />
      ))}
    </div>
  );
};

export default ProductsGrid;
