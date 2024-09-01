import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { remove } from '../../store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch=useDispatch();

  const removeFromCart = (products) => {
    dispatch(remove(products))
  };

  return (
    <div className='cart bg-gray-100 min-h-screen pt-24 px-4'>
      <h2 className='text-4xl font-bold text-gray-500 mb-8 flex items-center'>
        <FontAwesomeIcon icon={faShoppingCart} className='mr-3' />
        Cart
      </h2>
      <div className='cartItem space-y-6'>
        {products.length === 0 ? (
          <p className='text-center text-gray-600 text-xl'>Your cart is empty</p>
        ) : (
          products.map(product => (
            <div key={product.id} className='flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-4'>
              <img src={product.image} alt={product.name} className='w-20 h-20 object-cover rounded-md mr-4'/>
              <div className='flex-grow'>
                <h3 className='text-lg font-semibold text-gray-800'>{product.title}</h3>
                <p className='text-gray-600 mt-1'>Price: ${product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300'
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
