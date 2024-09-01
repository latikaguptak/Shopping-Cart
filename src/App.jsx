import { Outlet } from "react-router";
import Navbar from './assets/components/Navbar';
import{Provider} from 'react-redux';
import store from './store/store';
const App = () => {
  return (
    <div className='App flex flex-col min-h-screen'>
      <Provider store={store}>
        
        <Navbar />
          <main className='flex-grow'>
            <Outlet />
          </main>
        <footer className='bg-gray-800 text-white text-center py-4'>
          &copy; 2024 My Shopping Website
        </footer>
      </Provider>
    </div>
  );
}

export default App;
