import React from 'react';
import Products from '../../assets/components/Products';

const Home = () => {
  return (
    <div className="home bg-gray-100 min-h-screen pt-16">
    
      <header className="bg-gray-800 text-white py-10 text-center">
        <h2 className="text-4xl font-bold">Welcome to Motion Store</h2>
        <p className="mt-2 text-lg">Discover our exclusive collection of products</p>
      </header>
      <section className="container mx-auto py-10 px-4">
        <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
