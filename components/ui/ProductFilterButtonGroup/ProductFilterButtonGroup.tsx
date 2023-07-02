import React from 'react';
import ProductFilterButton from './ProductFilterButton';

type Props = {
  filterItems: {
    title: string;
    href: string;
    isActive: boolean;
  }[];
  title: string;
};

const ProductFilterButtonGroup = ({ filterItems, title }: Props) => {
  return (
    <div>
      <p className="text-xl font-semibold mb-2 text-gray-500">{title}:</p>
      <div className="mb-4 flex overflow-x-auto pb-3">
        {filterItems.map(item => (
          <ProductFilterButton
            key={item.title}
            title={item.title}
            href={item.href}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFilterButtonGroup;
