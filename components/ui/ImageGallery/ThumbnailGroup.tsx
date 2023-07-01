import { DotGroup } from 'pure-react-carousel';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import ThumbnailItem from './ThumbnailItem';

type Props = {
  images: [{ attributes: { url: string } }];
};

const ThumbnailGroup = ({ images }: Props) => {
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
                    <ThumbnailItem
                      key={i}
                      currentSlide={currentSlide}
                      index={i}
                      imgUrl={image.attributes.url}
                    />
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

export default ThumbnailGroup;
