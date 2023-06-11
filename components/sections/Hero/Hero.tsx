import CustomerAvatars from '@/components/ui/CustomerAvatars/CustomerAvatars';
import Link from 'next/link';
import { RiStarFill } from 'react-icons/ri';
import HeroGallery from './HeroGallery';
import Image from 'next/image';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL!;

const Hero = ({ images }: { images: HeroImages }) => {
  const imgUrl = `${strapiUrl}/uploads/hero_image_4_2930f06d1e.jpg`;
  console.log(imgUrl);
  return (
    <div
      className={`mb-20 bg-transparent lg:bg-neutral-light rounded-3xl flex justify-center items-center px-6 md:px-10 lg:px-0 lg:pl-12 xl:pl-20 overflow-hidden  relative`}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-50 w-full h-full lg:hidden">
        <Image
          src={imgUrl}
          width={600}
          height={600}
          alt=""
          className=" object-cover w-full h-full"
        />
        <div className="w-full h-full bg-white/70 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-[2px]"></div>
      </div>
      <div className="py-8 xl:py-12 xl:pr-16 lg:pr-12 flex-1 basis-6/12 flex flex-col ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold mb-6 md:mb-8 uppercase">
          Elevate Your Space
        </h1>
        <p className="mb-12 xl:mb-16 text-base md:text-lg text-neutral-dark/90 leading-relaxed tracking-wide">
          We offer a carefully curated selection of premium furniture pieces
          crafted by top designers around the world. From sleek and minimalist
          to bold and statement-making, we have the perfect pieces to transform
          your home into a stylish sanctuary.
        </p>
        <Link
          href="/products"
          className="self-start block px-10 py-3 mb-12 xl:mb-16 bg-neutral-dark rounded-full text-neutral-light hover:bg-neutral-dark/80 transition-colors"
        >
          Explore Products
        </Link>
        <div className="self-start flex justify-center items-center ">
          <CustomerAvatars />
          <RiStarFill className="ml-4 text-[#f9a825]" />
          <div className="ml-1 text-xs md:text-sm  text-neutral-dark/80">
            4.6 (5.2k reviews)
          </div>
        </div>
      </div>
      <div className="flex-1 basis-6/12 self-stretch hidden lg:block">
        <HeroGallery images={images} />
      </div>
    </div>
  );
};

export default Hero;
