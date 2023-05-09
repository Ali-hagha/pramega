import { Breadcrumbs } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  classes?: string;
  title?: string;
  href?: string;
};

const Crumbs = ({ title, href, classes }: Props) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator=">"
      className={`${classes} font-sans font-medium text-gray-500/80`}
    >
      <Link href={'/'} className="capitalize hover:underline">
        home
      </Link>
      <Link href={'/products'} className="capitalize hover:underline">
        products
      </Link>
      {title && (
        <Link
          key={title}
          href={`/prodcuts/${href}`}
          className="capitalize hover:underline"
        >
          {title}
        </Link>
      )}
    </Breadcrumbs>
  );
};

export default Crumbs;
