import { useCrumbs } from '@/hooks/useCrumbs';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

type Props = {
  classes?: string;
  crumb?: {
    title: string;
    href: string;
  };
};

const Crumbs = ({ crumb, classes }: Props) => {
  const { crumbs, crumbPaths } = useCrumbs();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator=">"
      className={`${classes} font-sans font-medium text-gray-500/80`}
    >
      <Link href={'/'} className="capitalize hover:underline">
        home
      </Link>

      {crumbs.map((crumbItem, i, arr) => {
        if (i == arr.length - 1 && crumb) {
          return (
            <Link
              key={i}
              href={crumbPaths[i - 1] + crumb.href}
              className="capitalize hover:underline"
            >
              {crumb.title}
            </Link>
          );
        }

        return (
          <Link
            key={i}
            href={crumbPaths[i]}
            className="capitalize hover:underline"
          >
            {crumbItem}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Crumbs;
