import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="mb-36 bg-neutral-light rounded-3xl flex justify-center items-center pl-6 sm:pl-10 md:pl-16 lg:pl-32 overflow-hidden max-h-[600px]">
      <div className="py-20 pr-20 flex-1">
        <h1 className="text-7xl leading-tight font-semibold mb-8">
          DECORATE YOUR DREAMS
        </h1>
        <p className="mb-16 text-lg text-neutral-dark/90 leading-relaxed tracking-wide">
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
      <div className="flex-1">
        <Image
          width={1000}
          height={1000}
          src="https://dummyimage.com/1000x1000/1e1f1a/ebfc4b"
          alt="Dummy Image"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
