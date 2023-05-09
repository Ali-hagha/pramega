import CustomerAvatars from '@/components/ui/CustomerAvatars/CustomerAvatars';
import Image from 'next/image';
import Link from 'next/link';
import { RiStarFill } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className='mb-20 bg-neutral-light rounded-3xl flex justify-center items-center px-6 md:px-10 lg:px-0 lg:pl-16 xl:pl-24 overflow-hidden bg-[url("https://dummyimage.com/1000x1000/e8d8b2/e8d8b2")] bg-cover bg-center lg:bg-none'>
      <div className="py-12 md:py-16 lg:pr-16 flex-1 basis-6/12 flex flex-col ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold mb-6 md:mb-8 uppercase">
          Elevate Your Space
        </h1>
        <p className="mb-12 md:mb-16 text-base md:text-lg text-neutral-dark/90 leading-relaxed tracking-wide">
          We offer a carefully curated selection of premium furniture pieces
          crafted by top designers around the world. From sleek and minimalist
          to bold and statement-making, we have the perfect pieces to transform
          your home into a stylish sanctuary.
        </p>
        <Link
          href="/products"
          className="self-start block px-10 py-3 mb-12 md:mb-16 bg-neutral-dark rounded-full text-neutral-light hover:bg-neutral-dark/80 transition-colors"
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
      <div className="flex-1 basis-5/12 self-stretch hidden lg:block">
        <Image
          width={1000}
          height={1000}
          src="https://dummyimage.com/1000x1000/1e1f1a/ebfc4b"
          alt="Dummy Image"
          className="object-cover h-full w-full "
        />
      </div>
    </div>
  );
};

export default Hero;
