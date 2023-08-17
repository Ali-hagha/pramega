import { Product } from './product';

export interface FavoriteProductsType {
  attributes: {
    products: {
      data: Product[];
    };
  };
}
