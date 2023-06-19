import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons/lib';

type Props = {
  DefaultIcon: IconType;
  HoverIcon: IconType;
};

const SocialLink = ({ DefaultIcon, HoverIcon }: Props) => {
  return (
    <Link href={'#'} className={'text-2xl'}>
      <div className="grid grid-cols-1 group">
        <HoverIcon
          className={`text-primary col-start-1 col-end-1 group-hover:opacity-100 opacity-0`}
        />
        <DefaultIcon
          className={`absolute col-start-1 col-end-1 group-hover:opacity-0 opacity-100 `}
        />
      </div>
    </Link>
  );
};

export default SocialLink;
