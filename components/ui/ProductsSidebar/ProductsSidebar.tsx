import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowRightSLine } from 'react-icons/ri';

const ProductsSidebar = () => {
  return (
    <div className="w-64 shrink-0 mr-8 hidden lg:block">
      <h3 className=" text-2xl font-bold mb-3">Categories</h3>
      <ul className="ml-2 pl-2 border-l-gray-200 border-l-2">
        <CategoryListItem category={'all'} href={'/products'} />
        <CategoryListItem category={'chairs'} href={'/products/chairs'} />
        <CategoryListItem category={'storage'} href={'/products/storage'} />
        <CategoryListItem category={'beds'} href={'/products/beds'} />
        <CategoryListItem category={'sofas'} href={'/products/sofas'} />
        <CategoryListItem category={'tables'} href={'/products/tables'} />
      </ul>
    </div>
  );
};

const CategoryListItem = ({
  category,
  href,
}: {
  category: string;
  href: string;
}) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <li className="mb-1">
      <Link
        href={`${href}`}
        className={`flex group items-center justify-between font-medium  hover:text-neutral-dark hover:bg-gray-100 rounded-md  w-full py-2 px-3 transition-colors ${
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

export default ProductsSidebar;
