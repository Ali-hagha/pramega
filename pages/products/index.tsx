import ProductsGrid from '@/components/ProductsGrid/ProductsGrid';
import React from 'react';
import { NextPageWithLayout } from '../_app';
import ProductsPageLayout from '@/components/layouts/ProductsPageLayout/ProductsPageLayout';
import { GetStaticProps } from 'next';
import { Product } from '@/types/product';

type PageProps = {
  products: Product[];
};

const Products: NextPageWithLayout<PageProps> = ({ products }: PageProps) => {
  return <ProductsGrid products={products} />;
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
  return <ProductsPageLayout>{page}</ProductsPageLayout>;
};

export default Products;
