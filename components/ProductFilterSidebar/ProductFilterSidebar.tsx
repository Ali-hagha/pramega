import useProductFilterOptions from '@/hooks/useProductFilterOptions';
import ProductFilterSidebarItem from './ProductFilterSidebarItem';

const ProductFilterSidebar = () => {
  const { filterByCategoryItems, filterByFeatureItems } =
    useProductFilterOptions();

  return (
    <aside className="w-64 shrink-0 mr-8 hidden lg:block self-start sticky top-20 space-y-12">
      <div>
        <h3 className="text-2xl font-bold mb-3">Categories</h3>
        <ul className="ml-2 pl-2 border-l-gray-200 border-l-2">
          {filterByCategoryItems.map(item => (
            <ProductFilterSidebarItem
              key={item.title}
              title={item.title}
              href={item.href}
              active={item.isActive}
            />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">Featured</h3>
        <ul className="ml-2 pl-2 border-l-gray-200 border-l-2">
          {filterByFeatureItems.map(item => (
            <ProductFilterSidebarItem
              key={item.title}
              title={item.title}
              href={item.href}
              active={item.isActive}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ProductFilterSidebar;
