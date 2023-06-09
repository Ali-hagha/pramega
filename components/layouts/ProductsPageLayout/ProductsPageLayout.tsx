import Head from 'next/head';
import Crumbs from '../../ui/Crumbs/Crumbs';
import { useRouter } from 'next/router';
import ProductFilterSidebar from '@/components/ProductFilterSidebar/ProductFilterSidebar';
import ProductFilterCollapseMenu from '@/components/ProductFilterCollapseMenu/ProductFilterCollapseMenu';

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
          <ProductFilterSidebar />
          <ProductFilterCollapseMenu />
          {children}
        </div>
      </div>
    </>
  );
};

export default ProductsPageLayout;
