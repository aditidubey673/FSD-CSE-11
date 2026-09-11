import React from 'react'
import './styles.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <>
    <div className='navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mycart">My Cart</Link></li>
            <li><Link to="/myorders">My Orders</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
   
    </div>
   </>
  )
}

export default Navbar