import ProductsGrid from '@/components/ui/ProductsGrid/ProductsGrid';
import ProductsSidebar from '@/components/ui/ProductsSidebar/ProductsSidebar';
import React from 'react';
import { NextPageWithLayout } from '../_app';
import ProductsLayout from '@/components/ui/ProductsLayout/ProductsLayout';
import { GetStaticProps } from 'next';

type PageProps = {
  products: Product[];
};

// const products: Product[] = [
//   {
//     id: '12345abcd',
//     name: 'Joshua Chair',
//     category: 'chairs',
//     price: 249,
//     rating: 4.5,
//     ratingCount: 629,
//     dimensions: {
//       width: 50,
//       depth: 53,
//       height: 80,
//     },
//     description:
//       'The popular Joshua is a mid-century inspired collection with a curved seat and back, designed for maximal comfort.',
//     imageUrlPrimary: '/products/chairs/Joshua-3.png',
//     imageUrlSecondary: '/products/chairs/Joshua-2.jpg',
//     productTag: 'new',
//     imageGalleryUrl: [''],
//   },
// ];

const Products: NextPageWithLayout<PageProps> = ({ products }: PageProps) => {
  console.log(process.env.STRAPI_URL);
  return (
    <>
      <ProductsSidebar />
      <ProductsGrid products={products} />
    </>
  );
};

Products.getLayout = function getLayout(page: React.ReactElement) {
  return <ProductsLayout>{page}</ProductsLayout>;
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

export default Products;
