import Link from 'next/link';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const ProductsSideBarItem = ({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active: boolean;
}) => {
  return (
    <li className="mb-1">
      <Link
        href={`${href}`}
        className={`flex group items-center justify-between font-medium  hover:text-neutral-dark hover:bg-gray-100 rounded-md  w-full py-2 px-3 transition-colors ${
          active
            ? 'bg-gray-100 text-neutral-dark'
            : 'bg-transparent text-neutral-dark/70'
        }`}
      >
        <p className="capitalize">{title}</p>
        <RiArrowRightSLine
          className={`text-xl relative  group-hover:opacity-100 transition-all  group-hover:right-0 ${
            active ? 'opacity-100 right-0' : 'opacity-0 right-2'
          }`}
        />
      </Link>
    </li>
  );
};
export default ProductsSideBarItem;
