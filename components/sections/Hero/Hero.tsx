import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='mb-36 bg-neutral-light rounded-3xl flex justify-center items-center px-6 md:px-10 lg:px-0 lg:pl-16 xl:pl-24 overflow-hidden bg-[url("https://dummyimage.com/1000x1000/e8d8b2/e8d8b2")] bg-cover bg-center lg:bg-none'>
      <div className="py-16 md:py-20 lg:pr-20 flex-1  ">
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
          href="#"
          className="inline-block px-10 py-3 bg-neutral-dark rounded-full text-neutral-light hover:bg-neutral-dark/80 transition-colors"
        >
          Explore Products
        </Link>
      </div>
      <div className="flex-1 self-stretch hidden lg:block">
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
