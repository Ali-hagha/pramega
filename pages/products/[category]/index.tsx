import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import { NextPageWithLayout } from '@/pages/_app';

const products: Product[] = [
  {
    id: '12345abcd',
    name: 'Joshua Chair',
    category: 'chairs',
    price: 249,
    rating: 4.5,
    ratingCount: 629,
    dimensions: {
      width: 50,
      depth: 53,
      height: 80,
    },
    description:
      'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
    imageUrlPrimary: '/products/chairs/joshua/primary.jpg',
    imageUrlSecondary: '/products/chairs/joshua/secondary.jpg',
    productTag: 'new',
    imageGalleryUrl: [''],
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
