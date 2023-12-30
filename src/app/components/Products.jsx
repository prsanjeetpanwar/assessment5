import React from 'react';

const Products = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-5 pl-4'>
      <button className='bg-purple-500 rounded-3xl h-9 md:pl-9 md:pr-9 lg:pl-12 lg:pr-12'>
        Products-4
      </button>
      <button className='bg-purple-200 rounded-3xl h-9 md:pl-7 md:pr-7 lg:pl-9 lg:pr-9'>
        Promotions-4
      </button>
      <button className='bg-purple-200 rounded-3xl h-9 md:pl-7 md:pr-7 lg:pl-9 lg:pr-9'>
        Online Promotions-4
      </button>
    </div>
  );
};

export default Products;
