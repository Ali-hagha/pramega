import ProductsGrid from '@/components/ProductsGrid/ProductsGrid';
import ProductsPageLayout from '@/components/layouts/ProductsPageLayout/ProductsPageLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { Product } from '@/types/product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const FilterCategory: NextPageWithLayout = () => {
  const { isReady, query } = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFilteredProducts = async () => {
      const url = `${strapiUrl}/api/products?populate=primaryImage&populate=secondaryImage&filters[category][$eq]=${query.category}&filters[productTag][$eq]=${query.featured}`;

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
  }, [isReady, query.category, query.featured]);

  return <ProductsGrid products={products} isLoading={isLoading} />;
};

FilterCategory.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsPageLayout>{page}</ProductsPageLayout>;
};

export default FilterCategory;
