import React, { useRef } from 'react';
import FavoritesItem from './FavoritesItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import SlideChangeBtn from './SlideChangeBtn';

const Favorites = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <section className="mb-20 relative bg-primary rounded-3xl p-10">
      <h3 className="uppercase mb-12 text-2xl md:text-3xl font-bold">
        All-Time Favorites
      </h3>
      <div className="sm:px-20">
        <Swiper
          className="mySwiper "
          slidesPerView={1}
          spaceBetween={20}
          onBeforeInit={swiper => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              slidesPerGroup: 3,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
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
      <SlideChangeBtn swiper={swiperRef.current} />
    </section>
  );
};

export default Favorites;
