import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useProductFilterOptions = () => {
  const { isReady, query } = useRouter();
  const [category, setCategory] = useState<string | undefined>();
  const [featured, setFeatured] = useState<string | undefined>();

  useEffect(() => {
    if (isReady) {
      if (typeof query.featured === 'string') {
        setFeatured(query.featured);
      } else {
        setFeatured(undefined);
      }
      if (typeof query.category === 'string') {
        setCategory(query.category);
      } else {
        setCategory(undefined);
      }
    }
  }, [isReady, query.category, query.featured]);

  // set href based on current path. eg. if the path is products/chairs the href of featured items changes to only show chairs that are featured.
  // set isActive state based on current path
  const filterByCategoryItems = [
    {
      title: 'all',
      href: `/products/`,
      isActive: !category,
    },
    {
      title: 'chairs',
      href: `/products/chairs${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      isActive: category === 'chairs',
    },
    {
      title: 'storage',
      href: `/products/storage${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      isActive: category === 'storage',
    },
    {
      title: 'beds',
      href: `/products/beds${!!featured ? '/filter?featured=' + featured : ''}`,
      isActive: category === 'beds',
    },
    {
      title: 'sofas',
      href: `/products/sofas${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      isActive: category === 'sofas',
    },
    {
      title: 'tables',
      href: `/products/tables${
        !!featured ? '/filter?featured=' + featured : ''
      }`,
      isActive: category === 'tables',
    },
  ];

  const filterByFeatureItems = [
    {
      title: 'all',
      href: `/products/${!!category ? category : ''}`,
      isActive: !featured,
    },
    {
      title: 'on sale',
      href: `/products${!!category ? '/' + category : ''}/filter?featured=sale`,
      isActive: featured === 'sale',
    },
    {
      title: 'new arrivals',
      href: `/products${!!category ? '/' + category : ''}/filter?featured=new`,
      isActive: featured === 'new',
    },
  ];
  return { filterByCategoryItems, filterByFeatureItems };
};

export default useProductFilterOptions;
