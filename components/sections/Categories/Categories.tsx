const Categories = () => {
  return (
    <div className="mb-16 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-5 h-[600px] gap-4 rounded-3xl overflow-hidden">
      <div className="bg-orange-300 col-span-2  md:col-span-2 md:row-span-2 rounded-3xl "></div>
      <div className="bg-orange-300  md:col-span-1 md:row-span-1  rounded-3xl"></div>
      <div className="bg-orange-300  md:col-span-1 md:row-span-1 xl:col-span-2 rounded-3xl"></div>
      <div className="bg-orange-300  md:col-span-1 md:row-span-1 xl:col-span-2 rounded-3xl "></div>
      <div className="bg-orange-300  md:col-span-1 md:row-span-1 rounded-3xl"></div>
    </div>
  );
};

export default Categories;
