import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductsSideBarItem from './ProductsSideBarItem';

const ProductsSidebar = () => {
  const { isReady, query } = useRouter();
  const [category, setCategory] = useState<string | undefined>();
  const [featured, setFeatured] = useState<string | undefined>();

  useEffect(() => {
    if (isReady) {
      if (typeof query.featured === 'string') {
        setFeatured(query.featured);
      }
      if (typeof query.category === 'string') {
        setCategory(query.category);
      }
    }
  }, [isReady, query.category, query.featured]);

  const categoryItemData = [
    {
      title: 'all',
      href: `/products/`,
      active: !category,
    },
    {
      title: 'chairs',
      href: `/products/chairs${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      active: category === 'chairs',
    },
    {
      title: 'storage',
      href: `/products/storage${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      active: category === 'storage',
    },
    {
      title: 'beds',
      href: `/products/beds${!!featured ? '/filter?featured=' + featured : ''}`,
      active: category === 'beds',
    },
    {
      title: 'sofas',
      href: `/products/sofas${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      active: category === 'sofas',
    },
    {
      title: 'tables',
      href: `/products/tables${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      active: category === 'tables',
    },
  ];

  const featureItemData = [
    {
      title: 'all',
      href: `/products/${!!category ? category : ''}`,
      active: !featured,
    },
    {
      title: 'on sale',
      href: `/products${!!category ? '/' + category : ''}/filter?featured=sale`,
      active: featured === 'sale',
    },
    {
      title: 'new arrivals',
      href: `/products${!!category ? '/' + category : ''}/filter?featured=new`,
      active: featured === 'new',
    },
  ];

  return (
    <div className="w-64 shrink-0 mr-8 hidden lg:block self-start sticky top-32 space-y-12">
      <div>
        <h3 className=" text-2xl font-bold mb-3">Categories</h3>
        <ul className="ml-2 pl-2 border-l-gray-200 border-l-2">
          {categoryItemData.map(item => (
            <ProductsSideBarItem
              key={item.title}
              title={item.title}
              href={item.href}
              active={item.active}
            />
          ))}
        </ul>
      </div>
      <div>
        <h3 className=" text-2xl font-bold mb-3">Featured</h3>
        <ul className="ml-2 pl-2 border-l-gray-200 border-l-2">
          {featureItemData.map(item => (
            <ProductsSideBarItem
              key={item.title}
              title={item.title}
              href={item.href}
              active={item.active}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsSidebar;
