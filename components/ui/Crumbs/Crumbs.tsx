import { Breadcrumbs } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import Link from 'next/link';

type Props = {
  classes?: string;
  title: string;
  href: string;
};

const Crumbs = ({ title, href, classes }: Props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator=">" className={classes}>
      <Link href={'/'} className="capitalize hover:underline">
        home
      </Link>
      <Link href={'/products'} className="capitalize hover:underline">
        products
      </Link>

      <Link
        key={title}
        href={`/prodcut/${href}`}
        className="capitalize hover:underline"
      >
        {title}
      </Link>
    </Breadcrumbs>
  );
};

export default Crumbs;
