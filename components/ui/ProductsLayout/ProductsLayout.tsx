import Crumbs from '../Crumbs/Crumbs';

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-20 md:px-10 pt-6">
      <Crumbs />
      <div className="flex mt-6">{children}</div>
    </div>
  );
};

export default ProductsLayout;
