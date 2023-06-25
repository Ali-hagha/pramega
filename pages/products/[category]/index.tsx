import ProdcutsCategories from '@/components/ui/ProdcutsCategories/ProdcutsCategories';
import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import { NextPageWithLayout } from '@/pages/_app';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type PageProps = {
  products: Product[];
};

const ProductCategories: NextPageWithLayout<PageProps> = ({
  products,
}: PageProps) => {
  const router = useRouter();
  const category = router.query.category;
  const title =
    typeof category === 'string' &&
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Head>
        <title>{title || 'Pramega'}</title>
        <meta
          name="description"
          content="Luxury & modern furniture and home decor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col lg:flex-row w-full">
        <ProductsSidebar />
        <ProdcutsCategories />
        <ProductsGrid products={products} />
      </div>
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
          category: 'storage',
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
