import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

const ProductsSidebar = () => {
  return (
    <div className="w-64 shrink-0 mr-8 hidden lg:block">
      <h3 className=" text-2xl font-bold mb-3">Categories</h3>
      <ul className="ml-2 pl-2 border-l-gray-200 border-l-2">
        <CategoryListItem category={'chairs'} path={'/chairs'} />
        <CategoryListItem category={'lamps'} path={'/lamps'} />
        <CategoryListItem category={'beds'} path={'/beds'} />
        <CategoryListItem category={'sofas'} path={'/sofas'} />
        <CategoryListItem category={'table'} path={'/table'} />
      </ul>
    </div>
  );
};

const CategoryListItem = ({
  category,
  path,
}: {
  category: string;
  path: string;
}) => {
  return (
    <li className="mb-1">
      <Link
        href={`products${path}`}
        className="flex group items-center justify-between font-medium text-neutral-dark/70 hover:text-neutral-dark hover:bg-gray-100 rounded-md  w-full py-2 px-3 transition-colors"
      >
        <p className="capitalize">{category}</p>
        <RiArrowRightSLine className="text-xl relative opacity-0 group-hover:opacity-100 transition-all right-2 group-hover:right-0 " />
      </Link>
    </li>
  );
};

export default ProductsSidebar;
