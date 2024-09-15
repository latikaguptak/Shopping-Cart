import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  remove,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/cartSlice";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const price = useSelector((state) => state.cart.cartTotalPrice);
  const dispatch = useDispatch();
  
  // useEffect(()=>{},[])
  const removeFromCart = (product) => {
    dispatch(remove(product));

  };

  const clear_Cart = () => {
    dispatch(clearCart());
    toast.success("Cart has been cleared.");
  };

  const increase_Quantity = (product) => {
    if (product.quantity < product.rating.count) {
      dispatch(increaseQuantity(product));
    } else {
      toast.error("Cannot add more than available stock.");
    }
  };

  const decrease_Quantity = (product) => {
    if (product.quantity > 0) {
      dispatch(decreaseQuantity(product));
    }
  };

  return (
    <div className="cart bg-white min-h-screen pt-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4  mt-5 flex items-center justify-center md:justify-start">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-gray-600" />
        Cart
      </h2>

      {products.length === 0 ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <button
              className="text-sm bg-transparent border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition duration-200"
              onClick={clear_Cart}
            >
              Clear Cart
            </button>
            <h3 className="text-lg font-medium text-gray-800 mt-4 md:mt-0">
              Total: <span className="text-green-500">${price.toFixed(2)}</span>
            </h3>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-md font-medium text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 mt-1">
                      Price: ${product.price}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-1">
                      <button
                        className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-200 transition duration-200"
                        onClick={() => increase_Quantity(product)}
                        disabled={product.quantity >= product.rating.count}
                      >
                        +
                      </button>
                      <span className="px-4 py-1 text-gray-700">
                        {product.quantity}
                      </span>
                      <button
                        className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-200 transition duration-200"
                        onClick={product.quantity===0?removeFromCart(product):() => decrease_Quantity(product)}
                        disabled={product.quantity <= 0}
                      >
                        -
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(product)}
                      className="text-gray-400 hover:text-red-500 transition duration-200"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <ToastContainer stacked/>
    </div>
  );
};

export default Cart;
