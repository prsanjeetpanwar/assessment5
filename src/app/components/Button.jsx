import React from 'react';

const Button = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 mt-[-9px]'>
      <button className='px-5 bg-yellow-300 py-2 rounded-md mb-2 md:mb-0'>New Product</button>
      <button className='px-5 bg-yellow-300 py-2 rounded-md mb-2 md:mb-0'>New Product</button>
      <button className='px-5 bg-yellow-300 py-2 rounded-md mb-2 md:mb-0'>New Product</button>
    </div>
  );
};

export default Button;
