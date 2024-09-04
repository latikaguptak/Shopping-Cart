import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const items = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-2xl font-bold">Motion Store</span>
        <div className="flex space-x-4">
          <NavLink
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            to="/"
            activeClassName="text-white bg-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            to="/cart"
            activeClassName="text-white bg-gray-700"
          >
            Cart
          </NavLink>
          <NavLink
            className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            to="/cart"
            activeClassName="text-white bg-gray-700"
          >
            <FaShoppingCart className="mr-2" />
            <span>{items.length}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
