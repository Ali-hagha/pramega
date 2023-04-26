import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const router = useRouter();
  return <div>{router.query.pid}</div>;
};

export default ProductDetails;
