import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const CategorySlider = () => {
  return (
    <div className=" lg:hidden mb-6 flex overflow-x-auto pb-3">
      <CategoryButton title="all" href="/products" />
      <CategoryButton title="chairs" href="/products/chairs" />
      <CategoryButton title="storage" href="/products/storage" />
      <CategoryButton title="beds" href="/products/beds" />
      <CategoryButton title="sofas" href="/products/sofas" />
      <CategoryButton title="tables" href="/products/tables" />
    </div>
  );
};

const CategoryButton = ({ title, href }: { title: string; href: string }) => {
  const { isReady, asPath } = useRouter();
  const [isBtnActive, setIsBtnActive] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isReady) {
      setIsBtnActive(asPath === href);
    }
  }, [asPath, href, isReady]);

  // scroll active btn into view
  useEffect(() => {
    if (isBtnActive) {
      btnRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [isBtnActive]);

  return (
    <Link
      href={href}
      ref={btnRef}
      className={`capitalize py-2 px-4 mr-4 last:mr-0 transition-all  rounded-lg border-solid border-2  border-gray-100  active:border-gray-700 active:bg-slate-200  text-gray-500 font-semibold active:text-gray-700  
      ${isBtnActive && 'bg-gray-400 text-white border-gray-400'}
      `}
    >
      {title}
    </Link>
  );
};

export default CategorySlider;
