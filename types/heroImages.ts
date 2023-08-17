import { StrapiImage } from './types';

export interface HeroImages {
  id: number;
  attributes: {
    images: { data: StrapiImage[] };
  };
}
