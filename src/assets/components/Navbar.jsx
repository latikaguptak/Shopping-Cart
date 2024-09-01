import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
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
          <span className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
            Cart Items: 0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
