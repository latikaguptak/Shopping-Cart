// import { Outlet } from "react-router";
// import Navbar from './assets/components/Navbar';
// import{Provider} from 'react-redux';
// import store from './store/store';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const App = () => {
//   return (
//     <div className='App flex flex-col min-h-screen'>
//       <Provider store={store}>

//         <Navbar />
//           <main className='flex-grow'>
//             <Outlet />
//             <ToastContainer />
//           </main>
//         <footer  className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center justify-center space-x-2">
//           &copy; 2024 My Shopping Website
//         </footer>
//       </Provider>
//     </div>
//   );
// }

// export default App;

import { Outlet } from "react-router";
import Navbar from "./assets/components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App flex flex-col min-h-screen bg-gray-50">
      <Provider store={store}>
        <Navbar />
        <main className="flex-grow container mx-auto ">
          <Outlet />
        </main>
        <footer className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm py-4 text-center mt-auto shadow-inner">
          &copy; 2024 Motion Store. All rights reserved.
        </footer>
        <ToastContainer />
      </Provider>
    </div>
  );
};

export default App;
