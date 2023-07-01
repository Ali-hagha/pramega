import { MenuDrawerContext } from '@/context/MenuDrawerContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const MenuSideDrawerItem = ({
  category,
  href,
}: {
  category: string;
  href: string;
}) => {
  const router = useRouter();
  const path = router.asPath;
  const { toggleMenu } = useContext(MenuDrawerContext);

  return (
    <li className="mb-1">
      <Link
        href={`${href}`}
        onClick={toggleMenu}
        className={`flex md:text-lg group items-center justify-between font-medium  hover:text-neutral-dark hover:bg-gray-100 rounded-md  w-full py-3 px-6 transition-colors ${
          href === path
            ? 'bg-gray-100 text-neutral-dark'
            : 'bg-transparent text-neutral-dark/70'
        }`}
      >
        <p className="capitalize">{category}</p>
        <RiArrowRightSLine
          className={`text-xl relative  group-hover:opacity-100 transition-all  group-hover:right-0 ${
            href === path ? 'opacity-100 right-0' : 'opacity-0 right-2'
          }`}
        />
      </Link>
    </li>
  );
};

export default MenuSideDrawerItem;
