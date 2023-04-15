import Image from 'next/image';
import { RiArrowRightUpLine } from 'react-icons/ri';

type Props = {
  imgSrc: string;
  title: string;
};

const CategoryItem = ({ imgSrc, title }: Props) => {
  return (
    <>
      <Image
        src={imgSrc}
        alt={''}
        width={600}
        height={600}
        className="object-contain w-full h-full select-none group-hover:scale-105 group-hover:drop-shadow-[0_35px_35px_rgba(30,31,26,0.45)] transition-all"
      />
      <div className="flex justify-between w-full items-center ">
        <p className="text-lg sm:text-2xl font-medium sm:font-semibold select-none capitalize ">
          {title}
        </p>
        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-neutral-dark rounded-full flex items-center justify-center ">
          <RiArrowRightUpLine className="text-primary text-2xl sm:text-3xl " />
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
