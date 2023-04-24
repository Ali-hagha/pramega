import Link from 'next/link';

type Item = {
  title: string;
  location: string;
};
type Items = Item[];

const NavGroup = ({ items }: { items: Items }) => {
  return (
    <div className="lg:flex items-center hidden ">
      <ul className="flex my-auto space-x-10 font-medium text-lg">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href={item.location}
              className={
                'p-2 hover:text-primary hover:bg-neutral-dark/90 rounded transition-colors capitalize'
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavGroup;
