import Image from 'next/image';
import {
  CarouselProvider,
  Dot,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel';

type Props = {
  baseImage: string;
  secondaryImage: string;
};

const ProductPreviewImageGallery = ({ baseImage, secondaryImage }: Props) => {
  return (
    <CarouselProvider
      naturalSlideWidth={600}
      naturalSlideHeight={600}
      totalSlides={2}
      className="relative"
    >
      <Slider className="">
        <Slide index={0} innerClassName="flex items-center justify-center">
          <Image src={baseImage} alt={''} width={700} height={700} />
        </Slide>
        <Slide index={1} innerClassName="flex items-center justify-center">
          <Image src={secondaryImage} alt={''} width={700} height={700} />
        </Slide>
      </Slider>
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
