import ProductCard from '@/components/ui/ProductCard/ProductCard';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FavPageChangeBtn from './SlideChangeBtn';
import { useScreenSize } from '@/hooks/useScreenSize';

type Props = {
  favoriteProducts: FavoriteProducts;
};

const FavoritesSlider = ({ favoriteProducts }: Props) => {
  const productsArr = favoriteProducts.attributes.products.data;
  const { isMobile, isTablet, isDesktop, isXlDesktop, is2XlDesktop } =
    useScreenSize();

  const getSlideCount = () => {
    if (is2XlDesktop) return 4;
    if (isDesktop || isXlDesktop) return 3;
    if (isTablet) return 2;
    if (isMobile) return 1;
  };

  return (
    <CarouselProvider
      naturalSlideWidth={400}
      naturalSlideHeight={isMobile ? 520 : 580}
      totalSlides={productsArr.length}
      infinite={true}
      visibleSlides={getSlideCount()}
      className="relative"
    >
      <Slider className="">
        {productsArr.map((product, index) => {
          return (
            <Slide key={index} index={index} innerClassName="px-2">
              <ProductCard product={product} />
            </Slide>
          );
        })}
      </Slider>
      <FavPageChangeBtn />
    </CarouselProvider>
  );
};

export default FavoritesSlider;
