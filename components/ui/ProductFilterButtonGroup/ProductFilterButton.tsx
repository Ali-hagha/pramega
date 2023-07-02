import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const ProductFilterButton = ({
  title,
  href,
  isActive,
}: {
  title: string;
  href: string;
  isActive: boolean;
}) => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  // scroll active btn into view
  useEffect(() => {
    if (isActive) {
      btnRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [isActive]);

  return (
    <Link
      href={href}
      ref={btnRef}
      className={`capitalize py-2 px-4 mr-4 last:mr-0 transition-all  rounded-lg border-solid border-2  border-gray-100  active:border-gray-700 active:bg-slate-200  text-gray-500 font-semibold active:text-gray-700  
      ${isActive && 'bg-gray-400 text-white border-gray-400'}
      `}
    >
      {title}
    </Link>
  );
};

export default ProductFilterButton;
