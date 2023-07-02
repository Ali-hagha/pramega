import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsPageLayout from '@/components/ui/ProductsPageLayout/ProductsPageLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const FilterAll: NextPageWithLayout = () => {
  const { isReady, query } = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <ProductsGrid products={products} isLoading={isLoading} />
    </>
  );
};

FilterAll.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsPageLayout>{page}</ProductsPageLayout>;
};

export default FilterAll;
