import React from 'react';
import ProductCard from './ProductsCart'; // Assuming your component name is ProductCard
import products from '../Data/ProductData';

const ProductCatalog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCatalog;
