import React from 'react';

const ProductTag = ({ productTag }: { productTag: string }) => {
  return (
    <div className="absolute z-20 top-6 left-6 capitalize py-2 px-4 bg-primary-light rounded-md text-neutral-dark/80 text-sm font-semibold ">
      {productTag}
    </div>
  );
};

export default ProductTag;
