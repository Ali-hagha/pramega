import React from 'react';

const ProductCardLoadingShimmer = () => {
  return (
    <div className=" rounded-3xl  overflow-hidden border-4 border-solid border-gray-100 group/card transition-colors animate-pulse">
      <div className=" aspect-square relative  bg-gray-100">{/* image */}</div>
      <div className="flex flex-col p-5  bg-white">
        <p className="text-xl font-semibold mb-5 w-3/4 h-6 bg-gray-300 rounded-full">
          {/* product name */}
        </p>
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="mb-3 w-12 h-4 bg-gray-300 rounded-full">
              {/* price */}
            </p>
            <p className=" w-16 h-6 bg-gray-300 rounded-full">{/* price */}</p>
          </div>
          <div className="h-14 w-14 bg-gray-300 rounded-xl">{/* button */}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLoadingShimmer;
