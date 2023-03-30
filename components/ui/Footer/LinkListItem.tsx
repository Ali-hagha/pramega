import Link from 'next/link';

const LinkListItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="opacity-80 underline underline-offset-2 decoration-transparent hover:decoration-primary hover:text-primary hover:opacity-100  transition-all "
      >
        {children}
      </Link>
    </li>
  );
};

export default LinkListItem;
