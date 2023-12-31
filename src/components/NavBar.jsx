import React, { useState } from 'react'
import '../css/navbar.css'
import logo from '../images/z-logo-default.svg'
// import {NavLink} from 'react-router-dom';
// import { NavLink, Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaHamburger, FaAlignRight, FaCross} from "react-icons/fa";

function NavBar() {

    const [isOpen, setIsOpen] = useState(true)

    const [buyisOpen, setBuyIsOpen] = useState(false)
    const [rentisOpen, setRentIsOpen] = useState(false)
    const [sellisOpen, setSellIsOpen] = useState(false)
    const [homeLoanisOpen, setHomeLoanIsOpen] = useState(false)
    const [agentFinderisOpen, setAgentFinderIsOpen] = useState(false)
    const [manageRentalisOpen, setManageRentalIsOpen] = useState(false)

    const navDropdown = (elementId)=>{
        let getId = document.getElementById(elementId);
        getId.style.display = getId.style.display === 'block' ? 'none' : 'block';
    }

    const closeNavDropDown = (elementId)=>{
        let getId = document.getElementById(elementId);
        getId.style.display = 'none';
        getId.classList = 'nav-Fadeout'
    }

    
    function handleOpenMenu(params) {
        setIsOpen(isOpen)
    }

  return (
    <div>
        <div className='container'>
            <nav>
                <div className='nav-ul1'>
                {
                (isOpen && <ul>
                    {/* <div onMouseOver={()=>{setIsOpen(true)}} onMouseOut={()=>{setIsOpen(false)}}>
                        <li><Link>Home</Link></li>
                        <div className={`${isOpen ? 'home-nav-open': 'home-nav-close'}`}>
                            <ul>
                                <li><Link>Check</Link></li>
                                <li><Link>Check</Link></li>
                                <li><Link>Check</Link></li>
                                <li><Link>Check</Link></li>
                            </ul>
                        </div>
                    </div> */}

                    <div onMouseOver={()=>{setBuyIsOpen(true)}} onMouseOut={()=>{setBuyIsOpen(false)}}>
                        <li>
                            <Link> Buy 
                                <div className={`${buyisOpen ? 'buy-nav-open' : 'buy-nav-close'}`}>
                                    <div className='DropDown-container'>
                                        <div className='DropDown1' style={{borderRight:'1px solid black'}}>
                                            <span>Home for sale</span>
                                        <div className='DropDown-container--1'>
                                                <ul>
                                                    <li><Link>Home for sale</Link></li>
                                                    <li><Link>Foreclosures</Link></li>
                                                    <li><Link>For sale by owner</Link></li>
                                                    <li><Link>Open houses</Link></li>
                                                </ul>
                                                <ul style={{marginLeft:'-50px', marginRight:'30px'}}>
                                                    <li><Link>New construction</Link></li>
                                                    <li><Link>Coming soon </Link></li>
                                                    <li><Link>Recent homes</Link></li>
                                                    <li><Link>All homes</Link></li>
                                                </ul>
                                        </div>
                                        </div>

                                        <div className='DropDown-container--2' style={{marginLeft:'-20px'}}>
                                            <span>Resources</span>
                                            <ul>
                                                <li><Link>Home for sale</Link></li>
                                                <li><Link>Foreclosures</Link></li>
                                                <li><Link>For sale by owner</Link></li>
                                                <li><Link>Open houses</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </div>

                    <div onMouseOver={()=>{setRentIsOpen(true)}} onMouseOut={()=>{setRentIsOpen(false)}}>
                        <li>
                            <Link> Rent 
                                <div className={`${rentisOpen ? 'rent-nav-open':'rent-nav-close'}`}>
                                    <div className='DropDown2-container'>
                                        <div style={{borderRight:'1px solid black'}}>
                                            <span>Search for rentals</span>
                                            <ul>
                                                <li><Link>Rental buildings</Link></li>
                                                <li><Link>Apartments for rent</Link></li>
                                                <li><Link>Houses for rent</Link></li>
                                                <li><Link>All rental listings</Link></li>
                                                <li><Link>All rental buildings</Link></li>
                                            </ul>
                                        </div>
                                        <div style={{borderRight:'1px solid black', marginLeft:'-25px'}}>
                                            <span>Rental Hub</span>
                                            <ul>
                                                <li><Link>Contacted rentals</Link></li>
                                                <li><Link>Your rental</Link></li>
                                                <li><Link>Messages</Link></li>
                                            </ul>
                                        </div>
                                        <div style={{marginLeft:'-25px'}}>
                                            <span>Resources</span>
                                            <ul>
                                                <li><Link>Affordability calculator</Link></li>
                                                <li><Link>Renters guide</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Link>
                        </li>
                    </div>

                    <div onMouseOver={()=>{setSellIsOpen(true)}} onMouseOut={()=>setSellIsOpen(false)}>
                        <li>
                            <Link>Sell
                                <div className={`${sellisOpen ? 'sell-nav-open': 'sell-nav-close'}`}>
                                    <div className='DropDown3-container'>
                                        <div style={{borderRight:'1px solid black'}}>
                                            <span>Resources</span>
                                            <ul>
                                                <li><Link>Explore your options</Link></li>
                                                <li><Link>See your home's Zestimate</Link></li>
                                                <li><Link>Home values</Link></li>
                                                <li><Link>Sellers guide</Link></li>
                                            </ul>
                                        </div>
                                        <div style={{marginLeft:'-30px'}}>
                                            <span>Selling options</span>
                                            <ul>
                                                <li><Link>Find a seller's agent</Link></li>
                                                <li><Link>Post For Sale by Owner</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </div>

                    <div onMouseOver={()=>{setHomeLoanIsOpen(true)}} onMouseOut={()=>{setHomeLoanIsOpen(false)}}>
                        <li>
                            <Link>Home Loans 
                                <div className={`${homeLoanisOpen ? 'home-loan-open': 'home-loan-close'}`}>
                                    <div className='DropDown2-container'>
                                        <div style={{borderRight:'1px solid black'}}>
                                            <span>Shop mortgages</span>
                                            <ul>
                                                <li><Link>Mortgage lenders</Link></li>
                                                <li><Link>HELOC lenders</Link></li>
                                                <li><Link>Mortgage rates</Link></li>
                                                <li><Link>Refinance rates</Link></li>
                                                <li><Link>All mortgage rates</Link></li>
                                            </ul>
                                        </div>
                                        <div style={{borderRight:'1px solid black', marginLeft:'-25px'}}>
                                            <span>Calculators</span>
                                            <ul>
                                                <li><Link>Mortgage Calculator</Link></li>
                                                <li><Link>Refinance calculator</Link></li>
                                                <li><Link>Affordability calculator</Link></li>
                                                <li><Link>Amortization calculator</Link></li>
                                                <li><Link>Debt-to-Income calculator</Link></li>
                                            </ul>
                                        </div>
                                        <div style={{marginLeft:'-25px'}}>
                                            <span>Resources</span>
                                            <ul>
                                                <li><Link>Lenders reviews</Link></li>
                                                <li><Link>Mortgage learning center</Link></li>
                                                <li><Link>Mortgages app</Link></li>
                                                <li><Link>Lender resource center</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Link>
                        </li>
                    </div>

                    <div onMouseOver={()=>{setAgentFinderIsOpen(true)}} onMouseOut={()=>{setAgentFinderIsOpen(false)}}>     
                        <li>
                            <Link>Agent finder 
                                <div className={`${agentFinderisOpen ? 'agent-finder-nav-open': 'agent-finder-nav-close'}`}>
                                    <div className='DropDown-container'>
                                        <div className='DropDown1' style={{borderRight:'1px solid black'}}>
                                            <span>Looking for pros?</span>
                                        <div className='DropDown-container--1'>
                                                <ul>
                                                    <li><Link>Real estate agents</Link></li>
                                                    <li><Link>Property managers</Link></li>
                                                    <li><Link>Home inspectiors</Link></li>
                                                    <li><Link>Other pros</Link></li>
                                                </ul>
                                                <ul style={{marginLeft:'-50px', marginRight:'30px'}}>
                                                    <li><Link>Home improvement pros</Link></li>
                                                    <li><Link>Home builders</Link></li>
                                                    <li><Link>Real estate photographers</Link></li>
                                                </ul>
                                        </div>
                                        </div>
                                        <div className='DropDown1' style={{marginLeft:'-25px'}}>
                                            <span>I'm a pro</span>
                                            <div className='DropDown-container--1'>
                                                <ul>
                                                    <li><Link>Agent advertsing</Link></li>
                                                    <li><Link>Agent resource center</Link></li>
                                                    <li><Link>Create a free agent account</Link></li>
                                                </ul>
                                                <ul style={{marginLeft:'-50px'}}>
                                                    <li><Link>Real estate business plan</Link></li>
                                                    <li><Link>Real estate agents</Link></li>
                                                    <li><Link>Listing flyers templates</Link></li>
                                                </ul>
                                        </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </div>

                </ul>)
                }
                    
                </div>

                {/* menu icon */}
                <div onMouseOver={handleOpenMenu} className='menu-icon'>
                    <FaAlignRight/>
                </div>
                
                <div className='nav-img'>
                   <Link to={'/'}> <img src={logo} alt='logo'/></Link>
                </div>
                <div className='nav-ul2'>
                    <ul>
                        <div onMouseOver={()=>{setManageRentalIsOpen(true)}} onMouseOut={()=>{setManageRentalIsOpen(false)}}>
                            <li>
                                <Link>Manage Rentals
                                    <div className={`${manageRentalisOpen ? 'manage-rental-nav-open':'manage-rental-nav-close'}`}>
                                        <div className='Manage-Rentals--DropDown3'>
                                                <div style={{borderBottom:'1px solid rgba(141, 140, 140, 0.678)'}}>
                                                    <span>Resources</span>
                                                    <ul>
                                                        <li><Link>Explore your options</Link></li>
                                                        <li><Link>See your home's Zestimate</Link></li>
                                                        <li><Link>Home values</Link></li>
                                                        <li><Link>Sellers guide</Link></li>
                                                        <li><Link>Explore your options</Link></li>
                                                        <li><Link>See your home's Zestimate</Link></li>
                                                        <li><Link>Home values</Link></li>
                                                        <li><Link>Sellers guide</Link></li>
                                                    </ul>
                                                </div>
                                                <div style={{marginTop:'20px'}}>
                                                    <span>Selling options</span>
                                                    <ul>
                                                        <li><Link>Find a seller's agent</Link></li>
                                                        <li><Link>Post For Sale by Owner</Link></li>
                                                        <li><Link>Post For Sale by Owner</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                            </li>
                        </div>
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