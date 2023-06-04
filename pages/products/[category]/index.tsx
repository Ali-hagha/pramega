import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import { NextPageWithLayout } from '@/pages/_app';
import { GetStaticProps } from 'next';

type PageProps = {
  products: Product[];
};

const ProductCategories: NextPageWithLayout<PageProps> = ({
  products,
}: PageProps) => {
  return (
    <>
      <ProductsSidebar />
      <ProductsGrid products={products} />
    </>
  );
};

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

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async ({ params }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

  const res = await fetch(
    `${strapiUrl}/api/products?populate=primaryImage&populate=secondaryImage&filters[category][$eq]=${
      params!.category
    }`
  );

  const jsonRes = await res.json();
  const products = jsonRes.data;
  return { props: { products } };
};

ProductCategories.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
};

export default ProductCategories;
