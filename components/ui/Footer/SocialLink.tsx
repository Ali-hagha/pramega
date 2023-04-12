import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons/lib';

type Props = {
  DefaultIcon: IconType;
  HoverIcon: IconType;
};

const SocialLink = ({ DefaultIcon, HoverIcon }: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <Link href={'#'} className={'text-2xl '}>
        {isMouseOver ? <HoverIcon className="text-primary" /> : <DefaultIcon />}
      </Link>
    </div>
  );
};

export default SocialLink;
