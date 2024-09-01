import { Outlet } from "react-router";
import Navbar from './assets/components/Navbar';

const App = () => {
  return (
    <div className='App flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <footer className='bg-gray-800 text-white text-center py-4'>
        &copy; 2024 My Shopping Website
      </footer>
    </div>
  );
}

export default App;
