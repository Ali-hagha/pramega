import { useScreenSize } from '@/hooks/useScreenSize';
import Image from 'next/image';
import Link from 'next/link';
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';

const HeroGallery = ({ images }: { images: HeroImages }) => {
  const imagesArr = images.attributes.images.data;
  const { isDesktop, isXlDesktop, is2XlDesktop } = useScreenSize();

  return (
    <CarouselProvider
      naturalSlideWidth={isXlDesktop || isDesktop ? 800 : 1100}
      naturalSlideHeight={1024}
      totalSlides={imagesArr.length}
      infinite={true}
      interval={4000}
      isPlaying={true}
      className="relative"
    >
      <Slider className="overflow-hidden">
        {imagesArr.map((image, index) => {
          return (
            <Slide
              key={index}
              index={index}
              innerClassName="flex items-center justify-center"
            >
              <Link href="/products" className="w-full h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                  alt={''}
                  width={900}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </Link>
            </Slide>
          );
        })}
      </Slider>
      <div className="absolute bottom-3 right-1/2 translate-x-1/2">
        <DotGroup
          renderDots={({ currentSlide }) => {
            return imagesArr.map((_, i) => (
              <Dot
                key={i}
                slide={i}
                className={` rounded-full h-3 w-3 mx-2 transition-all bg-gray-50 outline-offset-2 outline outline-primary-dark   ${
                  currentSlide === i ? 'bg-gray-200  outline-4' : 'outline-0'
                }`}
              />
            ));
          }}
        />
      </div>
    </CarouselProvider>
  );
};

export default HeroGallery;
