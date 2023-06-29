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
    <>
      {/* filler element to push image slider to right and open space for thumbnails */}
      <div className="hidden xl:block w-36"></div>
      <div className="xl:hidden block h-28 md:h-32"></div>
      {/* position absolute to scroll over flow */}
      <div className="absolute right-0 xl:right-auto xl:top-0 bottom-0 left-0 overflow-auto rounded-3xl bg-neutral-light px-2 py-2 md:px-4 md:py-4">
        <DotGroup
          className="  h-full"
          renderDots={({ currentSlide }) => {
            return (
              <ScrollContainer className="flex px-2 py-2 flex-row xl:flex-col">
                {images.map((image, i) => {
                  return (
                    <Dot
                      slide={i}
                      key={i}
                      className={`rounded-xl overflow-hidden xl:mb-6 xl:mr-0  mr-4 last:mr-0 h-20 w-20 xl:h-24 xl:w-24  flex-shrink-0 flex-grow-0  outline outline-offset-4 outline-primary-dark bg-neutral-light ${
                        currentSlide === i ? 'outline-4' : 'outline-0'
                      }`}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                        alt={''}
                        width={160}
                        height={160}
                        className="pointer-events-none aspect-square object-cover"
                      />
                    </Dot>
                  );
                })}
              </ScrollContainer>
            );
          }}
        />
      </div>
    </>
  );
};

export default Thumbnails;
