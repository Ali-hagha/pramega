import CategorySlider from '@/components/ui/CategorySlider/CategorySlider';
import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const FilterAll: NextPageWithLayout = () => {
  const { isReady, query } = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const title = 'Products';

  useEffect(() => {
    const getFilteredProducts = async () => {
      const url = `${strapiUrl}/api/products?populate=primaryImage&populate=secondaryImage&filters[productTag][$eq]=${query.featured}`;

      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const json = await response.json();
        const products = json.data;

        setProducts(products);
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (isReady) {
      getFilteredProducts();
    }
  }, [isReady, query.featured]);

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
      <div className="flex flex-col lg:flex-row w-full relative">
        <ProductsSidebar />
        <CategorySlider />
        <ProductsGrid products={products} isLoading={isLoading} />
      </div>
    </>
  );
};

FilterAll.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
};

export default FilterAll;
