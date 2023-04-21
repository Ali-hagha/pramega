import React, { useCallback, useRef } from 'react';
import FavoritesItem from './FavoritesItem';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import SlideChangeBtn from './SlideChangeBtn';

const Favorites = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="mb-20 relative bg-primary rounded-3xl p-6 pt-10 sm:p-10">
      <h3 className="uppercase mb-12 text-2xl md:text-3xl font-bold">
        All-Time Favorites
      </h3>
      <div className="sm:px-20">
        <Swiper
          ref={swiperRef}
          className="mySwiper "
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          <SwiperSlide>
            <FavoritesItem
              title="gustave table lamp"
              href="#"
              price={498}
              imgSrc={'/categories/lamp.jpg'}
              hoverImgSrc={'/categories/lamp2.webp'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FavoritesItem
              title="gustave table lamp"
              href="#"
              price={498}
              imgSrc={'/categories/lamp.jpg'}
              hoverImgSrc={'/categories/lamp2.webp'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FavoritesItem
              title="gustave table lamp"
              href="#"
              price={498}
              imgSrc={'/categories/lamp.jpg'}
              hoverImgSrc={'/categories/lamp2.webp'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FavoritesItem
              title="gustave table lamp"
              href="#"
              price={498}
              imgSrc={'/categories/lamp.jpg'}
              hoverImgSrc={'/categories/lamp2.webp'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FavoritesItem
              title="gustave table lamp"
              href="#"
              price={498}
              imgSrc={'/categories/lamp.jpg'}
              hoverImgSrc={'/categories/lamp2.webp'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FavoritesItem
              title="gustave table lamp"
              href="#"
              price={498}
              imgSrc={'/categories/lamp.jpg'}
              hoverImgSrc={'/categories/lamp2.webp'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <SlideChangeBtn handleNext={handleNext} handlePrev={handlePrev} />
    </section>
  );
};

export default Favorites;
