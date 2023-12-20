import React from 'react'
import '../css/hero.css'
import {BiSearch} from 'react-icons/bi'


function Hero() {
  return (
    <div className='hero-container'>
        <h1>wertAgents. Tours. Loans. Homes.</h1>
        <div class="search-container">
            <input type="text" id="search-input" placeholder="Enter an address, neighborhood, city, or ZIP code"/>
            <span class="search-icon"><BiSearch/></span>
        </div>
    </div>
  )
}

export default Hero