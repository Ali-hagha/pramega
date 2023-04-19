import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import React from 'react';
import SwiperCore from 'swiper';

const SlideChangeBtn = ({ swiper }: { swiper: SwiperCore | undefined }) => {
  return (
    <div className="text-4xl hidden sm:block">
      <button
        className="group p-1 absolute top-1/2 right-10 rounded-full bg-neutral-dark text-primary overflow-hidden"
        onClick={() => swiper?.slideNext()}
      >
        <RiArrowRightSLine className=" group-hover:translate-x-8 transition-transform" />
        <RiArrowRightSLine className="absolute -translate-x-8 -translate-y-full group-hover:translate-x-0 transition-transform" />
      </button>
      <button
        className="group p-1  absolute top-1/2  left-10 rounded-full bg-neutral-dark text-primary overflow-hidden"
        onClick={() => swiper?.slidePrev()}
      >
        <RiArrowLeftSLine className="group-hover:-translate-x-8 transition-transform" />
        <RiArrowLeftSLine className="absolute translate-x-8 -translate-y-full group-hover:translate-x-0 transition-transform" />
      </button>
    </div>
  );
};
SlideChangeBtn.displayName = 'SlideChangeBtn';

export default SlideChangeBtn;
