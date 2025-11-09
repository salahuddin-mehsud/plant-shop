import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Our Plants</h1>
      
      {/* Category Filter */}
      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === category
                ? 'bg-green-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-green-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;