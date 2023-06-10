import Image from 'next/image';
import { Dot, DotGroup } from 'pure-react-carousel';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

type Props = {
  images: [{ attributes: { url: string } }];
};

const Thumbnails = ({ images }: Props) => {
  return (
    <DotGroup
      className="overflow-hidden px-4 py-4  bg-neutral-light rounded-3xl"
      renderDots={({ currentSlide }) => {
        return (
          <ScrollContainer className="flex px-2 py-2 flex-row xl:flex-col">
            {images.map((image, i) => {
              return (
                <Dot
                  slide={i}
                  key={i}
                  className={`rounded-xl overflow-hidden xl:mb-6 xl:mr-0 xl:last:mb-0 mr-4 last:mr-0 h-20 w-20 xl:h-auto xl:w-auto bg-white flex-shrink-0 flex-grow-0  outline outline-offset-4 outline-primary-dark ${
                    currentSlide === i ? 'outline-4' : 'outline-0'
                  }`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                    alt={''}
                    width={96}
                    height={96}
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
