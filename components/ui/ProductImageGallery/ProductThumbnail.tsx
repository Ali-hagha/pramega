import Image from 'next/image';
import { Dot } from 'pure-react-carousel';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  currentSlide: number | undefined;
  index: number;
  imgUrl: string;
};

const ProductThumbnail = ({ currentSlide, index, imgUrl }: Props) => {
  const thumbRef = useRef<HTMLImageElement>(null);
  const [isThumbActive, setIsThumbActive] = useState(false);

  // scroll active thumbnail into view
  useEffect(() => {
    setIsThumbActive(currentSlide === index);
  }, [currentSlide, index]);

  useEffect(() => {
    if (isThumbActive) {
      thumbRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'center',
      });
    }
  }, [isThumbActive]);

  return (
    <Dot
      slide={index}
      key={index}
      className={`rounded-xl overflow-hidden xl:mb-6 xl:mr-0  mr-4 last:mr-0 h-20 w-20 xl:h-24 xl:w-24  flex-shrink-0 flex-grow-0  outline outline-offset-4 outline-primary-dark bg-neutral-light ${
        isThumbActive ? 'outline-4' : 'outline-0'
      }`}
    >
      <Image
        ref={thumbRef}
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgUrl}`}
        alt={''}
        width={160}
        height={160}
        className="pointer-events-none aspect-square object-cover"
      />
    </Dot>
  );
};

export default ProductThumbnail;
