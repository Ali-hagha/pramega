import Image from 'next/image';
import { Dot, DotGroup } from 'pure-react-carousel';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

type Props = {
  images: string[];
};

const Thumbnails = ({ images }: Props) => {
  return (
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
  );
};

export default Thumbnails;
