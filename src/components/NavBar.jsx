import React from 'react'
import '../css/navbar.css'
import logo from '../images/z-logo-default.svg'
// import {NavLink} from 'react-router-dom';
// import { NavLink, Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
        <div className='container'>
            <nav>
                <div className='nav-ul1'>
                    <ul>
                        <li><Link> Buy </Link></li>
                        <li><Link> Rent </Link></li>
                        <li><Link> Sell </Link></li>
                        <li><Link> Home Loans </Link></li>
                        <li><Link> Agent finder </Link></li>
                    </ul>
                </div>
                <div className='nav-img'>
                   <Link to={'/'}> <img src={logo} alt='logo'/></Link>
                </div>
                <div className='nav-ul2'>
                    <ul>
                        <li><Link>Manage Rentals </Link></li>
                        <li><Link>Advertise </Link></li>
                        <li><Link>Help </Link></li>
                        <li><Link>Sign in </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavBar