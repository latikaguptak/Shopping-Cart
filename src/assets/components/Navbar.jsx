import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <span className="logo"> Motion Store</span>
        <div>
        <NavLink className='navlink' to='/'> <span>Home</span></NavLink>
        <NavLink className='navlink' to='/cart'><span>Cart</span></NavLink>
        <span className=''>
            cart Items: 0
        </span>
        </div>
    </div>
  )
}

export default Navbar