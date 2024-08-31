import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './pages/cart/Cart.jsx'
import Home from './pages/home/home.jsx'

const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children:([
        { 
          path: '/',
          element: <Home/>
          

        },
        {
          path: '/cart',
          element: <Cart/>

        },
        {
          path: '*',
          element: <h1>Not Found</h1>
        }
      ])
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
