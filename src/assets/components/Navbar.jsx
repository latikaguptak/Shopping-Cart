import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const items = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 fixed w-full z-10 top-0 left-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-2xl font-bold">Motion Store</span>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                isActive
                  ? "bg-white bg-opacity-20"
                  : "hover:bg-white hover:bg-opacity-20"
              }`
            }
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                isActive
                  ? "bg-white bg-opacity-20"
                  : "hover:bg-white hover:bg-opacity-20"
              }`
            }
          >
            Cart
          </NavLink> */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                isActive
                  ? "bg-white bg-opacity-20"
                  : "hover:bg-white hover:bg-opacity-20"
              }`
            }
          >
            <FaShoppingCart title="cart" className="mr-2" />
            <span className="font-semibold">{items.length}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
