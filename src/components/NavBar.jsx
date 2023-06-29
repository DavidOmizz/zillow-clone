import React from 'react'
import '../css/navbar.css'
import logo from '../images/z-logo-default.svg'
// import {NavLink} from 'react-router-dom';
function NavBar() {
  return (
    <div>
        <div className='container'>
            <nav>
                <div className='nav-ul1'>
                    <ul>
                        <li>Buy</li>
                        <li>Rent</li>
                        <li>Sell</li>
                        <li>Home Loans</li>
                        <li>Agent finder</li>
                    </ul>
                </div>
                <div className='nav-img'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='nav-ul2'>
                    <ul>
                        <li>Manage Rentals</li>
                        <li>Advertise</li>
                        <li>Help</li>
                        <li>Sign in</li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavBar