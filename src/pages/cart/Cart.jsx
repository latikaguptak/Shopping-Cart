import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { remove, clearCart, increaseQuantity, decreaseQuantity } from '../../store/cartSlice';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const products = useSelector(state => state.cart.cartItems);
  const price = useSelector(state => state.cart.cartTotalPrice);

  const dispatch = useDispatch();

  const removeFromCart = (productId) => {
    dispatch(remove(productId));
    toast.success("Item removed from cart!");
  };

  const clear_Cart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared!");
  };

  const increase_Quantity = (product) => {
    if (product.quantity < product.rating.count) {
      toast.success("quantity increased")
      dispatch(increaseQuantity(product));
    } else {
      toast.error("Cannot add more than available stock.");
    }
  };

  const decrease_Quantity = (product) => {
    if (product.quantity > 0) {
      if (product.quantity > 1) {
        toast.success("quantity decrease")
      }
      dispatch(decreaseQuantity(product));
    } 
    
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
          <>
            <button 
              className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 mb-4'
              onClick={clear_Cart}
            >
              Clear Cart
            </button>

            {products.map(product => (
              <div key={product.id} className='flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-4'>
                <img src={product.image} alt={product.name} className='w-20 h-20 object-cover rounded-md mr-4' />
                <div className='flex-grow'>
                  <h3 className='text-lg font-semibold text-gray-800'>{product.title}</h3>
                  <p className='text-gray-600 mt-1'>Price: ${product.price}</p>
                </div>
                <div className='flex items-center'>
                  <button
                    className='px-3 py-2'
                    disabled={product.quantity >= product.rating.count}
                    onClick={() => increase_Quantity(product)}
                  >
                    +
                  </button>
                  <span className='mx-4'>{product.quantity}</span>
                  <button
                    className='px-3 py-2 mr-7'
                    disabled={product.quantity <= 0}
                    onClick={product.quantity ===0 ? removeFromCart(product) : () => decrease_Quantity(product)}
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product)}
                  className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300'
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            ))}

          <>
          <div className='flex justify-end mt-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Total: ${price.toFixed(2) }</h3>
          </div>
          </>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Cart;
