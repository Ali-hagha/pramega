import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  href: string;
  price: number;
  imgSrc: string;
  hoverImgSrc: string;
};

const FavoritesItem = ({ title, href, price, imgSrc, hoverImgSrc }: Props) => {
  return (
    <Link href={href} className="group  ">
      <div className="bg-white rounded-2xl overflow-hidden relative ">
        <Image src={imgSrc} width={600} height={600} alt={''} className="" />
        <Image
          src={hoverImgSrc}
          width={600}
          height={600}
          alt={''}
          className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 right-0 left-0 "
        />
        <div className="p-4 sm:p-6">
          <p className="capitalize font-medium mb-2">{title}</p>
          <p className="">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default FavoritesItem;
