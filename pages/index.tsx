import Categories from '@/components/sections/Categories/Categories';
import Favorites from '@/components/sections/Favorites/Favorites';
import Hero from '@/components/sections/Hero/Hero';
import Head from 'next/head';

export default function Home() {
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
        <Hero />
        <Categories />
        <Favorites />
      </div>
    </>
  );
}
