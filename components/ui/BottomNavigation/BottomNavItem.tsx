import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IconType } from 'react-icons/lib';

type Props = {
  title: string;
  location: string;
  DefaultIcon: IconType;
  ActiveIcon: IconType;
};

const BottomNavItem = ({ title, location, DefaultIcon, ActiveIcon }: Props) => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? true : false;
  };

  return (
    <Link href={location} className="flex-1">
      <div
        className={`flex flex-col items-center ${
          isActive(location) ? 'text-neutral-dark' : 'text-neutral-dark/50'
        }`}
      >
        {isActive(location) ? (
          <ActiveIcon className="text-2xl mb-1" />
        ) : (
          <DefaultIcon className="text-2xl mb-1 " />
        )}
        <span
          className={`text-xs capitalize ${
            isActive(location) ? 'font-semibold' : 'font-medium'
          }`}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

export default BottomNavItem;
