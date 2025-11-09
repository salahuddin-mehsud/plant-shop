import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl mx-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Plant Paradise</h1>
        
        <p className="text-xl mb-8 leading-relaxed">
          Welcome to Plant Paradise, your premier destination for beautiful, healthy houseplants. 
          We specialize in bringing nature indoors with our carefully curated selection of indoor plants 
          that purify your air and enhance your living space. Our expert team ensures every plant is 
          nurtured with care and ready to thrive in your home.
        </p>
        
        <Link 
          to="/products"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;