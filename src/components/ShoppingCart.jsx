import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../redux/slices/cartSlice';

const ShoppingCart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available in our next update.');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Add some beautiful plants to your cart!</p>
        <Link 
          to="/products"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-green-600 font-bold">${item.price}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  
                  <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                  
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition"
                  >
                    +
                  </button>
                  
                  <button
                    onClick={() => dispatch(deleteFromCart(item.id))}
                    className="ml-4 text-red-600 hover:text-red-800 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cart Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Total Items:</span>
              <span className="font-semibold">{totalQuantity}</span>
            </div>
            <div className="flex justify-between text-xl">
              <span className="font-bold">Total Price:</span>
              <span className="font-bold text-green-800">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              Checkout
            </button>
            
            <Link 
              to="/products"
              className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;