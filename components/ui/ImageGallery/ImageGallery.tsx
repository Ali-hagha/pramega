import React from 'react';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ThumbnailGroup from '@/components/ui/ImageGallery/ThumbnailGroup';
import Navigation from '@/components/ui/ImageGallery/Navigation';

type Props = {
  images: [{ attributes: { url: string } }];
};

const ImageGallery = ({ images }: Props) => {
  return (
    <div className="  mb-8">
      <CarouselProvider
        naturalSlideWidth={600}
        naturalSlideHeight={600}
        totalSlides={images.length}
        infinite={true}
        className="relative"
      >
        <div className="flex flex-col-reverse xl:flex-row xl:items-start relative">
          <ThumbnailGroup images={images} />
          <Slider className="flex-1 rounded-3xl overflow-hidden mb-4 xl:ml-4 xl:mb-0">
            {images.map((image, index) => {
              return (
                <Slide
                  key={index}
                  index={index}
                  innerClassName="flex items-center justify-center bg-neutral-light"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                    alt={''}
                    width={900}
                    height={900}
                  />
                </Slide>
              );
            })}
          </Slider>
          <Navigation />
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ImageGallery;
