import React from 'react';
import { TfiWrite } from 'react-icons/tfi';
import { CiTimer } from 'react-icons/ci';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-lg w-[350px] h-[280px] mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-4 border border-gray-300 mb-6 flex flex-col justify-between relative">
     
      <div className="absolute flex top-2 left-1/2 transform -translate-x-1/2 bg-blue-100 rounded-lg text-black px-2 py-[-4px]">
        <CiTimer />
        Pending
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-1/4 h-full object-cover mb-4 float-left mr-4"
      />

      {/* Product Name */}
      <h2 className="text-lg font-semibold mb-2 mt-2 text-left">{product.name}</h2>
      <h6>Bar Code ID:1</h6>

      {/* Price */}
      <div className="text-left">
        <div className="flex items-center justify-start mb-2">
          <span className="text-sm font-bold text-black">₹{product.price}</span>
          <span className="text-sm text-green-600 ml-1 bg-green-200 px-2 py-1 rounded">
            300 OFF
          </span>
        </div>
      </div>

      {/* Buttons and TfiWrite in the same row */}
      <div className="flex justify-between items-center mt-2">
        <button className="bg-black text-white px-3 py-1 rounded border border-black hover:bg-white hover:text-black mr-2">
          Promotion
        </button>
        <button className="bg-white text-black px-3 py-1 rounded border border-black hover:text-white hover:bg-black mr-2">
          Promote Online
        </button>

        {/* Custom Button (Assuming TfiWrite is your custom button component) */}
        <div className="bg-white p-2 border-[1px] border-black">
          <TfiWrite />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
