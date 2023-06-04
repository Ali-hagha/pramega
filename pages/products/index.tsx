import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import React from 'react';
import { NextPageWithLayout } from '../_app';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import { GetStaticProps } from 'next';

type PageProps = {
  products: Product[];
};

const Products: NextPageWithLayout<PageProps> = ({ products }: PageProps) => {
  return (
    <>
      <ProductsSidebar />
      <ProductsGrid products={products} />
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
