import Categories from '@/components/sections/Categories/Categories';
import Favorites from '@/components/sections/Favorites/Favorites';
import Hero from '@/components/sections/Hero/Hero';
import { GetStaticProps } from 'next';
import Head from 'next/head';

type PageProps = {
  images: HeroImages;
};

export default function Home({ images }: PageProps) {
  return (
    <>
      <Head>
        <title>Pramega</title>
        <meta
          name="description"
          content="Luxury & modern furniture and home decor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero images={images} />
        <Categories />
        <Favorites />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  images: HeroImages;
}> = async () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

  const res = await fetch(`${strapiUrl}/api/hero-image?populate=images`);

  const jsonRes = await res.json();
  const images = jsonRes.data;
  return { props: { images } };
};
