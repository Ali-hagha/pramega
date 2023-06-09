import Crumbs from '@/components/ui/Crumbs/Crumbs';
import React, { useState } from 'react';
import ImageGallery from '../../../../components/ui/ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo';
import { GetStaticProps } from 'next';

type PageProps = {
  product: Product;
};

const ProductDetails = ({ product }: PageProps) => {
  const [productCount, setProductCount] = useState(1);

  return (
    <div className="md:px-10 mb-20 pt-6">
      <Crumbs
        crumb={{
          title: product.attributes.name,
          href: product.attributes.productId,
        }}
      />
      <div className="flex flex-col lg:flex-row items-start justify-center pt-6">
        <div className="flex-1 w-full lg:w-1/2  ">
          <ImageGallery images={product.attributes.imageGallery.data} />
        </div>
        <div className="flex-1  lg:w-1/2">
          <ProductInfo
            count={productCount}
            setCount={setProductCount}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

  const res = await fetch(`${strapiUrl}/api/products`);

  const jsonRes = await res.json();
  const products: Product[] = jsonRes.data;

  const paths = products.map(p => {
    return {
      params: {
        pid: p.attributes.productId,
        category: p.attributes.category,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

  const res = await fetch(
    `${strapiUrl}/api/products?populate=imageGallery&filters[productId][$eq]=${
      params!.pid
    }`
  );

  const jsonRes = await res.json();
  const product = jsonRes.data[0];
  return { props: { product } };
};

export default ProductDetails;
