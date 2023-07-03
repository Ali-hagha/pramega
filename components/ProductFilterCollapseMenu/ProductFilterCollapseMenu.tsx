import useProductFilterOptions from '@/hooks/useProductFilterOptions';
import ProductFilterButtonGroup from '../ui/ProductFilterButtonGroup/ProductFilterButtonGroup';
import { RiArrowDownSLine } from 'react-icons/ri';
import React, { useState } from 'react';
import { Collapse } from '@mui/material';

const ProductFilterCollapseMenu = () => {
  const { filterByCategoryItems, filterByFeatureItems } =
    useProductFilterOptions();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilteringOptions = () => {
    setIsFiltersOpen(prevState => !prevState);
  };

  return (
    <div className="lg:hidden">
      <button
        className="text-lg font-semibold flex items-center justify-center px-4 pl-0 py-2 mb-4"
        onClick={toggleFilteringOptions}
      >
        <span>Filters </span>
        <RiArrowDownSLine
          className={`text-2xl transition-transform ${
            !isFiltersOpen && '-rotate-90'
          }`}
        />
      </button>
      <Collapse in={isFiltersOpen}>
        <ProductFilterButtonGroup
          filterItems={filterByCategoryItems}
          title="categories"
        />
        <ProductFilterButtonGroup
          filterItems={filterByFeatureItems}
          title="featured"
        />
      </Collapse>
    </div>
  );
};

export default ProductFilterCollapseMenu;
