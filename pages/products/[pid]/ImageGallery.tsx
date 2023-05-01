import React, { CSSProperties, useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
  CarouselStoreInterface,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

const images = [
  '/categories/chair_tp.png',
  '/categories/lamp_tp.png',
  '/categories/bed_tp.png',
  '/categories/chair_tp.png',
  '/categories/lamp_tp.png',
  '/categories/bed_tp.png',
  '/categories/chair_tp.png',
  '/categories/lamp_tp.png',
  '/categories/bed_tp.png',
];

const ImageGallery = () => {
  return (
    <div className="bg-neutral-light rounded-3xl mb-8">
      <CarouselProvider
        naturalSlideWidth={600}
        naturalSlideHeight={600}
        totalSlides={images.length}
        infinite={true}
        className="relative"
      >
        <Slider className="">
          {images.map((image, index) => {
            return (
              <Slide
                key={index}
                index={index}
                innerClassName="flex items-center justify-center"
              >
                <Image src={image} alt={''} width={600} height={600} />
              </Slide>
            );
          })}
        </Slider>
        <div className="hidden md:block text-4xl text-gray-500 ">
          <ButtonBack className="absolute top-1/2 left-3 p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
            <RiArrowLeftSLine />
          </ButtonBack>
          <ButtonNext className="absolute top-1/2 right-3 p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
            <RiArrowRightSLine />
          </ButtonNext>
        </div>
        <DotGroup
          className="overflow-hidden px-4 py-4 "
          renderDots={({ currentSlide }) => {
            return (
              <ScrollContainer className="flex px-2 py-2">
                {images.map((image, i) => {
                  return (
                    <Dot
                      slide={i}
                      key={i}
                      className={`rounded-xl mr-4 last:mr-0 bg-white flex-shrink-0 flex-grow-0 basis-20 outline outline-offset-4 outline-primary ${
                        currentSlide === i ? 'outline-4' : 'outline-0'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={''}
                        width={80}
                        height={80}
                        className="pointer-events-none"
                      />
                    </Dot>
                  );
                })}
              </ScrollContainer>
            );
          }}
        />
      </CarouselProvider>
    </div>
  );
};

export default ImageGallery;
