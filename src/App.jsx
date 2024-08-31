import { Outlet } from "react-router"
import Navbar from './assets/components/Navbar';


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default App