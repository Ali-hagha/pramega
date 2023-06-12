import React from 'react';
import FavoritesSlider from './FavoritesSlider';

type Props = {
  favoriteProducts: FavoriteProducts;
};

const Favorites = ({ favoriteProducts }: Props) => {
  return (
    <section className="mb-20 relative bg-primary/80 rounded-3xl p-6 pb-2 pt-10 ">
      <h3 className="uppercase mb-12 text-2xl md:text-3xl font-bold">
        All-Time Favorites
      </h3>
      <div className="md:px-8 md:pb-4">
        <FavoritesSlider favoriteProducts={favoriteProducts} />
      </div>
    </section>
  );
};

export default Favorites;
