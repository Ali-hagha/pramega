import Image from 'next/image';
import CategoryItem from './CategoryItem';
import Link from 'next/link';

const Categories = () => {
  return (
    <div className="mb-20">
      <h3 className="uppercase mb-8 text-2xl md:text-3xl font-bold">
        top categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-5 lg:max-h-[600px]  gap-4 rounded-3xl ">
        <Link
          href={'#'}
          className="bg-neutral-light col-span-2 row-span-1  md:col-span-2 md:row-span-2 rounded-3xl flex  flex-col items-center justify-center p-4 sm:p-6 group"
        >
          <CategoryItem imgSrc={'/categories/chair_tp.png'} title={'chairs'} />
        </Link>
        <Link
          href={'#'}
          className="group bg-neutral-light  md:col-span-1 md:row-span-1  rounded-3xl flex  flex-col items-center justify-center p-4 sm:p-6"
        >
          <CategoryItem imgSrc={'/categories/lamp_tp.png'} title={'lamps'} />
        </Link>
        <Link
          href={'#'}
          className="group bg-neutral-light  md:col-span-1 md:row-span-1 xl:col-span-2 rounded-3xl  flex  flex-col items-center justify-center p-4 sm:p-6"
        >
          <CategoryItem imgSrc={'/categories/bed_tp.png'} title={'beds'} />
        </Link>
        <Link
          href={'#'}
          className="group bg-neutral-light  md:col-span-1 md:row-span-1 xl:col-span-2 rounded-3xl flex  flex-col items-center justify-center p-4 sm:p-6"
        >
          <CategoryItem imgSrc={'/categories/sofa_tp.png'} title={'sofas'} />
        </Link>
        <Link
          href={'#'}
          className="group bg-neutral-light  md:col-span-1 md:row-span-1 rounded-3xl flex  flex-col items-center justify-center p-4 sm:p-6"
        >
          <CategoryItem imgSrc={'/categories/table_tp.png'} title={'sofas'} />
        </Link>
      </div>
    </div>
  );
};

export default Categories;
