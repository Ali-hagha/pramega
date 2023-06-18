import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

type Props = {
  baseImage: string;
  secondaryImage: string;
  touchEnabled: boolean;
};

const ProductPreviewImageGallery = ({
  baseImage,
  secondaryImage,
  touchEnabled,
}: Props) => {
  return (
    <CarouselProvider
      naturalSlideWidth={600}
      naturalSlideHeight={600}
      totalSlides={2}
      className="relative"
      touchEnabled={touchEnabled}
    >
      <Slider className="">
        <Slide index={0} innerClassName="flex items-center justify-center">
          <Image src={baseImage} alt={''} width={700} height={700} />
        </Slide>
        <Slide index={1} innerClassName="flex items-center justify-center">
          <Image src={secondaryImage} alt={''} width={700} height={700} />
        </Slide>
      </Slider>
      <div className="absolute top-1/2 z-50 w-full text-3xl text-gray-600 ">
        <ButtonBack
          onClick={e => {
            e?.preventDefault();
            e?.stopPropagation();
            console.log(e);
          }}
          className=" bg-white/40 rounded-r-md  px-1 py-5 absolute left-0 -translate-y-1/2"
        >
          <RiArrowLeftSLine />
        </ButtonBack>
        <ButtonNext
          onClick={e => {
            e?.preventDefault();
            e?.stopPropagation();
          }}
          className=" bg-white/40 rounded-l-md  px-1 py-5 absolute right-0 -translate-y-1/2"
        >
          <RiArrowRightSLine />
        </ButtonNext>
      </div>
      <DotGroup
        className=""
        renderDots={({ currentSlide }) => {
          return (
            <div className="flex items-center justify-center space-x-2 absolute bottom-4 left-0 right-0">
              <Dot
                slide={0}
                className={`rounded-full h-3 w-3 transition-colors    ${
                  currentSlide === 0 ? 'bg-gray-500' : 'bg-gray-300'
                }`}
              />
              <Dot
                slide={1}
                className={`rounded-full h-3 w-3 transition-colors      ${
                  currentSlide === 1 ? 'bg-gray-500' : 'bg-gray-300'
                }`}
              />
            </div>
          );
        }}
      />
    </CarouselProvider>
  );
};

export default ProductPreviewImageGallery;
