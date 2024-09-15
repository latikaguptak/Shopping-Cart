// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "../../store/cartSlice";
// import { fetchProducts } from "../../store/productSlice";
// import { STATUSES } from "../../store/productSlice";

// const Products = () => {

//   const dispatch = useDispatch();
//   const { data: products, status } = useSelector((state) => state.product);
//   console.log(products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const addToCart = (product) => {
//     dispatch(add(product));
//   };

//   if (status === STATUSES.LOADING) {
//     return <p className="text-center text-gray-500 mt-10">Loading...</p>;
//   }

//   if (status === STATUSES.ERROR) {
//     return <p className="text-center text-red-500 mt-10">Error fetching products.</p>;
//   }

//   return (
// <div className="productsWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
//       {Array.isArray(products) &&
//         products.map((product) => (
// <div
//             className="card border border-gray-200 rounded-lg shadow-lg p-6 bg-gradient-to-b from-white to-gray-50 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
//             key={product.id}
// >
// <img
//               src={product.image}
//               alt={product.title}
//               className="w-40 h-40 object-cover mx-auto rounded-lg"
//             />
// <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">
//               {product.title}
// </h3>
// <div className="flex justify-between items-center mt-4">
// <h5 className="text-gray-800 text-xl font-bold">${product.price}</h5>
//               {product.rating && (
// <h6 className="text-gray-500 text-sm">{product.rating.rate} ★</h6>
//               )}
// </div>
// <div className="flex justify-between items-center mt-6">
// <button
//                 onClick={() => addToCart(product)}
//                 className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 transition duration-300 flex items-center justify-center space-x-2"
// >
// <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5"
// >
// <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 0L7 13m0 0l-2 9m2-9h10m-5 9a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
//                   />
// </svg>
// <span className="text-xs">Add to Cart</span>
// </button>
// </div>
// </div>
//         ))}
// </div>
//   );
// };

// export default Products;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import { fetchProducts } from "../../store/productSlice";
import { STATUSES } from "../../store/productSlice";
import { ToastContainer } from "react-toastify";
import { json } from "react-router";

const Products = () => {
  // const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
    // localStorage.setItem('product', product); 
  };

  if (status === STATUSES.LOADING) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  if (status === STATUSES.ERROR) {
    return (
      <p className="text-center text-red-500 mt-10">Error fetching products.</p>
    );
  }

  return (
    <div className="productsWrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {Array.isArray(products) &&
        products.map((product) => (
          <div
            className="card border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition duration-300 flex flex-col justify-between h-full"
            key={product.id}
          >
            <div className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {product.title}
              </h3>
              <div className="flex justify-between items-center mt-4 w-full">
                <h5 className="text-gray-900 text-xl font-bold">
                  ${product.price}
                </h5>
                {product.rating && (
                  <h6 className="text-gray-600 text-sm">
                    {product.rating.rate} ★
                  </h6>
                )}
              </div>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center justify-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 0L7 13m0 0l-2 9m2-9h10m-5 9a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
       <ToastContainer stacked/>
        
    </div>
  );
};

export default Products;
