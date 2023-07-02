import Head from 'next/head';
import CategorySlider from '../CategorySlider/CategorySlider';
import Crumbs from '../Crumbs/Crumbs';
import ProductsPageSidebar from '../ProductsPageSidebar/ProductsPageSidebar';
import { useRouter } from 'next/router';

type Props = { children: React.ReactNode; headTitle?: string };

const ProductsPageLayout = ({ children, headTitle }: Props) => {
  const { query } = useRouter();
  const category = query.category;
  const pageTitle =
    typeof category === 'string' &&
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Head>
        <title>{pageTitle || headTitle || 'Pramega'}</title>
        <meta
          name="description"
          content="Luxury & modern furniture and home decor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="mb-20 md:px-10 pt-6">
        <Crumbs />
        <div className="flex flex-col lg:flex-row mt-6">
          <ProductsPageSidebar />
          <CategorySlider />
          {children}
        </div>
      </div>
    </>
  );
};

export default ProductsPageLayout;
