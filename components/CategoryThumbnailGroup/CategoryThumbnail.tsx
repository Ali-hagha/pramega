import Image from 'next/image';
import { RiArrowRightUpLine } from 'react-icons/ri';

type Props = {
  imgSrc: string;
  title: string;
};

const CategoryThumbnail = ({ imgSrc, title }: Props) => {
  return (
    <>
      <Image
        src={imgSrc}
        alt={''}
        width={600}
        height={600}
        className="object-contain w-full h-full select-none group-hover:scale-105 group-hover:drop-shadow-[0_35px_35px_rgba(30,31,26,0.45)] group-active:scale-105 group-active:drop-shadow-[0_35px_35px_rgba(30,31,26,0.45)] transition-all"
      />
      <div className="flex justify-between w-full items-center ">
        <p className="text-lg sm:text-2xl font-medium sm:font-semibold select-none capitalize ">
          {title}
        </p>
        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-neutral-dark rounded-full flex items-center justify-center overflow-hidden relative">
          <RiArrowRightUpLine className="text-primary text-2xl sm:text-3xl group-hover:-translate-y-8 group-hover:translate-x-8 transition-transform group-active:-translate-y-8 group-active:translate-x-8" />
          <RiArrowRightUpLine className="text-primary text-2xl sm:text-3xl absolute translate-y-8 -translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform group-active:translate-y-0 group-active:translate-x-0" />
        </div>
      </div>
    </>
  );
};

export default CategoryThumbnail;
