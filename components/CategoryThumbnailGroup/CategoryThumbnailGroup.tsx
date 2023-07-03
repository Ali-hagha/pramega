import CategoryThumbnail from './CategoryThumbnail';
import Link from 'next/link';

const CategoryThumbnailGroup = () => {
  return (
    <div className="mb-20">
      <h3 className="uppercase mb-8 text-2xl md:text-3xl font-bold">
        top categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-5 lg:max-h-[600px]  gap-4 rounded-3xl ">
        <CategoryThumbnail
          imgSrc={'/categories/chair_tp.png'}
          title={'chairs'}
          href={'/products/chairs'}
          classes="col-span-2 row-span-1 md:col-span-2 md:row-span-2"
        />
        <CategoryThumbnail
          imgSrc={'/categories/storage_tp.png'}
          title={'storage'}
          href={'/products/storage'}
          classes="md:col-span-1 md:row-span-1"
        />
        <CategoryThumbnail
          imgSrc={'/categories/bed_tp.png'}
          title={'beds'}
          href={'/products/beds'}
          classes="md:col-span-1 md:row-span-1 xl:col-span-2"
        />
        <CategoryThumbnail
          imgSrc={'/categories/sofa_tp.png'}
          title={'sofas'}
          href={'/products/sofas'}
          classes="md:col-span-1 md:row-span-1 xl:col-span-2"
        />
        <CategoryThumbnail
          imgSrc={'/categories/table_tp.png'}
          title={'tables'}
          href={'/products/tables'}
          classes="md:col-span-1 md:row-span-1"
        />
      </div>
    </div>
  );
};

export default CategoryThumbnailGroup;
