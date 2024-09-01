import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <div className='productsWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
            {Array.isArray(products) && products.map(product => (
                <div className='card border rounded-lg shadow-md p-4 bg-white' key={product.id}>
                    <img src={product.image} alt={product.title} className='w-10 h-10 object-cover rounded-md' />
                    <h3 className='text-lg font-semibold mt-4'>{product.title}</h3>
                    <h5 className='text-gray-700 mt-2 text-xl font-bold'>${product.price}</h5>
                    <button 
                        onClick={() => addToCart(product)} 
                        className='btn mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;
