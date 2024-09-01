import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
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

    const addToCart = (product) => {
        dispatch(add(product));
    }

    return (
        <div className='productsWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
            {Array.isArray(products) && products.map(product => (
                <div className='card border rounded-lg shadow-lg p-6 bg-white' key={product.id}>
                    <img src={product.image} alt={product.title} className='w-32 h-32 object-cover mx-auto' />
                    <h3 className='text-lg font-semibold mt-4 text-center'>{product.title}</h3>
                    <div className='flex justify-between items-center mt-4'>
                        <h5 className='text-gray-700 text-xl font-bold'>${product.price}</h5>
                        <button
                            onClick={() => addToCart(product)}
                            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center space-x-2'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 0L7 13m0 0l-2 9m2-9h10m-5 9a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
                            </svg>
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
