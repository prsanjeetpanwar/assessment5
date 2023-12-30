import React from 'react';
import Image from 'next/image';
import { CiBellOn } from 'react-icons/ci';
import { RiCustomerServiceFill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6
     bg-blue-50">

      <div className="flex items-center space-x-4">
        <Image src="/path-to-your-image" alt="Unilever Logo" width={40} height={40} />
        <div>
          <h1 className="text-xl font-bold">Unilever</h1>
          <h6 className="text-sm font-mono text-gray-600">brand test</h6>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <RiCustomerServiceFill className="rounded-full
         w-9 h-9 bg-white p-2" />
        <CiBellOn className="rounded-full w-9 h-9 bg-white p-2" />
      </div>

    </div>
  );
};

export default Navbar;
