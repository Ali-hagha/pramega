import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import { NextPageWithLayout } from '@/pages/_app';

const products = [
  {
    productName: 'joshua chair',
    price: 239,
    baseImage: '/products/chairs/Joshua-3.png',
    secondaryImage: '/products/chairs/Joshua-2.jpg',
    productTag: 'new',
    isFavorite: false,
  },
];

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          category: 'chairs',
        },
      },
      {
        params: {
          category: 'lamps',
        },
      },
      {
        params: {
          category: 'sofas',
        },
      },
      {
        params: {
          category: 'beds',
        },
      },
      {
        params: {
          category: 'tables',
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = () => {
  return {
    props: { products },
  };
};

const Tables: NextPageWithLayout = () => {
  return (
    <>
      <ProductsSidebar />
      <ProductsGrid products={products} />
    </>
  );
};

Tables.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
};

export default Tables;
