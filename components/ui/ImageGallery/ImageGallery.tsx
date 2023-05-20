import React from 'react';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Thumbnails from '@/components/ui/ImageGallery/Thumbnails';
import Navigation from '@/components/ui/ImageGallery/Navigation';

type Props = {
  images: string[];
};

const ImageGallery = ({ images }: Props) => {
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
        <Navigation />
        <Thumbnails images={images} />
      </CarouselProvider>
    </div>
  );
};

export default ImageGallery;
