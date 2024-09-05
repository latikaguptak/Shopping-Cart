// import Products from '../../assets/components/Products';

// const Home = () => {
//   return (
//     <div className="home bg-gray-100 min-h-screen pt-16">
//       <header className="bg-gray-800 text-white py-10 text-center">
//         <h2 className="text-4xl font-bold animate-fade-in-up">Welcome to Motion Store</h2>
//         <p className="mt-2 text-lg animate-fade-in-up animation-delay-500">Discover our exclusive collection of products</p>
//       </header>
//       <section className="container mx-auto py-10 px-4">
//         <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">Products</h3>
//         <Products />
//       </section>
//     </div>
//   );
// }

// export default Home;

import Products from "../../assets/components/Products";

const Home = () => {
  return (
    <div className="home bg-gray-50 min-h-screen pt-16">
      <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 text-center shadow-md">
        <h2 className="text-4xl font-bold animate-fade-in-up mb-2">
          Welcome to Motion Store
        </h2>
        <p className="mt-2 text-lg animate-fade-in-up animation-delay-500">
          Discover our exclusive collection of products
        </p>
      </header>
      <section className="container mx-auto py-12 px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          Products
        </h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
