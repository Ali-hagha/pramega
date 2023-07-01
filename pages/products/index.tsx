import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import React from 'react';
import { NextPageWithLayout } from '../_app';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import CategorySlider from '@/components/ui/CategorySlider/CategorySlider';

type PageProps = {
  products: Product[];
};

const Products: NextPageWithLayout<PageProps> = ({ products }: PageProps) => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta
          name="description"
          content="Luxury & modern furniture and home decor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col lg:flex-row w-full">
        <ProductsSidebar />
        <CategorySlider />
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

  const res = await fetch(
    `${strapiUrl}/api/products?populate=primaryImage&populate=secondaryImage`
  );

  const jsonRes = await res.json();
  const products = jsonRes.data;
  return { props: { products } };
};

Products.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
};

export default Products;
