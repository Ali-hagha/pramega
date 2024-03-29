import CategoryThumbnailGroup from '@/components/CategoryThumbnailGroup/CategoryThumbnailGroup';
import FavoriteProducts from '@/components/FavoriteProducts/FavoriteProducts';
import Hero from '@/components/Hero/Hero';
import { FavoriteProductsType } from '@/types/favoriteProducts';
import { HeroImages } from '@/types/heroImages';
import { GetStaticProps } from 'next';
import Head from 'next/head';

type PageProps = {
  images: HeroImages;
  favoriteProducts: FavoriteProductsType;
};

export default function Home({ images, favoriteProducts }: PageProps) {
  return (
    <>
      <Head>
        <title>Pramega</title>
        <meta
          name="description"
          content="Luxury & modern furniture and home decor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Hero images={images} />
        <CategoryThumbnailGroup />
        <FavoriteProducts favoriteProducts={favoriteProducts} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  images: HeroImages;
}> = async () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

  const [imageRes, favRes] = await Promise.all([
    fetch(`${strapiUrl}/api/hero-image?populate=images`),
    fetch(
      `${strapiUrl}/api/favorite?populate=products.primaryImage&populate=products.secondaryImage`
    ),
  ]);

  const [imageJson, favJson] = await Promise.all([
    imageRes.json(),
    favRes.json(),
  ]);

  const images = imageJson.data;
  const favoriteProducts = favJson.data;

  return { props: { images, favoriteProducts } };
};
