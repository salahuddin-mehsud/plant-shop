import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <span className="text-sm text-green-600 font-semibold">{product.category}</span>
        <h3 className="text-xl font-bold text-gray-800 mt-2">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-green-800">${product.price}</span>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              isAdded
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isAdded ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;