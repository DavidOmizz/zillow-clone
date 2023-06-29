import React from 'react'
import getRecommendation from '../images/GatedCarousel_Desktop (1).webp'
import '../css/section.css'
import Buyahome from '../images/Buy_a_home.webp'
import Sellahome from '../images/Sell_a_home.webp'
import AppleBtn from '../images/app-store-badge.svg';
import PlaystoreBtn from '../images/google-play-badge.svg';
import FooterArt from '../images/footer-art.svg'
import logo from '../images/z-logo-default.svg'

import Rentahome from '../images/Rent_a_home.webp'
import { BiLogoTwitter, BiSolidChevronDown } from 'react-icons/bi'
import { FaFacebook,FaInstagram,FaTiktok,FaTwitterSquare } from 'react-icons/fa'
function Section() {
  return (
    <div>
        <div className='get-recommendation'>
            <div className='get-recommendation--text'>
                <h5>Get home recommendations</h5>
                <span>Sign in for a more personalized experience.</span>
                <button>Sign in</button>
            </div>
            <div className='get-recommendation--img'>
                <img src={getRecommendation} alt='get'/>
            </div>
        </div>

        <div className='services-cards'>
            {/* <div className='services-card'>rgeifvlcbjh</div>
            <div className='services-card'>rgeifvlcbjh</div>
            <div className='services-card'>rgeifvlcbjh</div> */}
            <a className='services-card'>
                <div className=''>
                    <img src={Buyahome} alt='' width={300}/>
                    <h4>Buy Homw</h4>
                    <p>Find your place with an immersive photo experience and the most listsings, including things you won't find anywhere else.</p>
                    <button>Browse homes</button>
                </div>
            </a>
            <a className='services-card'>
                <div className=''>
                <img src={Sellahome} alt='' width={300}/>
                    <h4>Sell a home</h4>
                    <p>No matter what path you take to sell your home, we can help you nevigate a successful sale.</p>
                    <button>Se your options</button>
                </div>
            </a>
            <a className='services-card'>
                <div className=''>
                <img src={Buyahome} alt='' width={300}/>
                    <h4>Rent a home</h4>
                    <p>We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.</p>
                    <button>Find rentals</button>
                </div>            
            </a>
        </div>

        <div className='select-home'>
            <div className='select-home--btn'>
                <button>
                    <a href=''>Real Estate</a>
                    <BiSolidChevronDown style={{marginLeft:'15px', fontSize:'20px',color:'blue'}}/>
                </button>
            </div>
            <div className='select-home--btn border-line'>
                <button>
                    <a href=''>Rentals</a>
                    <BiSolidChevronDown style={{marginLeft:'15px', fontSize:'20px',color:'blue'}}/>
                </button>
            </div>
            <div className='select-home--btn border-line'>
                <button>
                    <a href=''>Mortgage Rates</a>
                    <BiSolidChevronDown style={{marginLeft:'15px', fontSize:'20px',color:'blue'}}/>
                </button>
            </div>
            <div className='select-home--btn border-line'>
                <button>
                    <a href=''>Browse Homes</a>
                    <BiSolidChevronDown style={{marginLeft:'15px', fontSize:'20px',color:'blue'}}/>
                </button>
            </div>
        </div>

        <span className='divider'></span>

        <div className='estate-links'>
            <a href=''>About</a>

            <a href=''>Zestimates</a>

            <a href=''>Research</a>

            <a href=''>Careers</a>

            <a href=''>Help</a>

            <a href=''>Advertise</a>

            <a href=''>Fair Housing Guide</a>

            <a href=''>Terms of use</a>

            <a href=''>Privacy Portal</a>

            <a href=''>Cookie Preferences</a> 

            <a href=''>Blog</a>

            <a href=''>AI</a>

            <a href=''>Mobile Apps</a>

            <a href=''>Trulia</a>

            <a href=''>StreetEasy HotPads</a>

            <a href=''>OutEast</a>

            <a href=''>ShowingTime++</a>
        </div>

        <span style={{textAlign:'center', display:'block', }}><a href=''>Do Not Sell or Share My Personal Information→</a></span>
        
        <span className='divider'></span>
        

       <div className='contact'>

            <p style={{width:'85%', margin:'25px auto'}}>Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please <a href=''>let us know</a>.</p>

            <p>Zillow, Inc. holds real estate brokerage licenses in multiple states. Zillow (Canada), Inc. holds real estate brokerage licenses in multiple provinces.
               <br /> § 442-H New York Standard Operating Procedures
                <br />§ New York Fair Housing Notice
            </p>
            <p style={{margin:'-10px'}}>TREC: Information about brokerage services, Consumer protection notice
               <br /> California DRE #1522444
            </p>

            <p style={{fontSize:'16px', marginTop:'20px'}}><a href=''>Contact Zillow, Inc, Brokerage</a></p>
            
            <p>For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
       </div>

       <div className='download-btn'>
        <img src={AppleBtn}/>
        <img src={PlaystoreBtn}/>
       </div>



       <div className='socials-container'>
            <img src={logo} alt='' style={{height:'35px', width:'200px'}}/>
            <span style={{fontSize:'13px',}}>Follow us:</span>
            <a href=''><FaFacebook style={{color:'#1877F2',fontSize:'30px', margin:'0 6px'}}/></a>
            <a href=''><BiLogoTwitter style={{color:'#55ACEE',fontSize:'30px', margin:'0 6px'}}/></a>
            <a href=''><FaInstagram style={{color:'blue',fontSize:'30px', margin:'0 6px'}}/></a>
            <a href=''><FaTiktok style={{color:'#006AFF',fontSize:'30px', margin:'0 6px'}}/></a>
            {/* <FaFacebook style={{color:'#1877F2',fontSize:'30px', margin:'0 6px'}}/> */}
            {/* <BiLogoTwitter style={{color:'#55ACEE',fontSize:'30px', margin:'0 6px'}}/> */}
            {/* <FaInstagram style={{color:'blue',fontSize:'30px', margin:'0 6px'}}/> */}
            {/* <FaTiktok style={{color:'#006AFF',fontSize:'30px', margin:'0 6px'}}/> */}
            <span style={{fontSize:'13px',}}>© 2006-2023 Zillow</span>
            <img/>
            <img/>
       </div>

       <footer style={{textAlign:'center'}}>
        <img src={FooterArt} style={{width:'95%'}}/>
       </footer>
    </div>
  )
}

export default Section