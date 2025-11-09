import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const location = useLocation();

  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Plant Paradise</Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            to="/products" 
            className={`hover:text-green-200 transition ${
              location.pathname === '/products' ? 'text-green-200 font-semibold' : ''
            }`}
          >
            Products
          </Link>
          
          <Link 
            to="/cart" 
            className="flex items-center hover:text-green-200 transition"
          >
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 13m-7.5 5.5h9" />
            </svg>
            Cart ({totalQuantity})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;