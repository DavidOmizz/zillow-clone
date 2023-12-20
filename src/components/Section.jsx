import React from "react";
import getRecommendation from "../images/GatedCarousel_Desktop (1).webp";
import "../css/section.css";
import Buyahome from "../images/Buy_a_home.webp";
import Sellahome from "../images/Sell_a_home.webp";
import AppleBtn from "../images/app-store-badge.svg";
import PlaystoreBtn from "../images/google-play-badge.svg";
import FooterArt from "../images/footer-art.svg";
import logo from "../images/z-logo-default.svg";

import Rentahome from "../images/Rent_a_home.webp";
import { BiLogoTwitter, BiSolidChevronDown } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";
function Section() {
  // function toggleDropdown(dropdownId) {
  //     var dropdown = document.getElementById(dropdownId);
  //     dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  // }

  function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }

  return (
    <div>
      <div className="get-recommendation">
        <div className="get-recommendation--text">
          <h5>Get home recommendations</h5>
          <span>Sign in for a more personalized experience.</span>
          <button>Sign in</button>
        </div>
        <div className="get-recommendation--img">
          <img src={getRecommendation} alt="get" />
        </div>
      </div>

      <div className="services-cards">
        {/* <div className='services-card'>rgeifvlcbjh</div>
            <div className='services-card'>rgeifvlcbjh</div>
            <div className='services-card'>rgeifvlcbjh</div> */}
        <a className="services-card">
          <div className="">
            <img src={Buyahome} alt="" width={300} />
            <h4>Buy Home</h4>
            <p>
              Find your place with an immersive photo experience and the most
              listsings, including things you won't find anywhere else.
            </p>
            <button>Browse homes</button>
          </div>
        </a>
        <a className="services-card">
          <div className="">
            <img src={Sellahome} alt="" width={300} />
            <h4>Sell a home</h4>
            <p>
              No matter what path you take to sell your home, we can help you
              nevigate a successful sale.
            </p>
            <button>Se your options</button>
          </div>
        </a>
        <a className="services-card">
          <div className="">
            <img src={Buyahome} alt="" width={300} />
            <h4>Rent a home</h4>
            <p>
              We're creating a seamless online experience - from shopping on the
              largest rental network, to applying, to paying rent.
            </p>
            <button>Find rentals</button>
          </div>
        </a>
      </div>

      <div className="list-services">
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <li className="select-home--btn">
            <div>
              <button onClick={() => toggleDropdown("dropdown1")}>
                <span>Real Estate</span>
                <BiSolidChevronDown
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    color: "blue",
                  }}
                />
              </button>
              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <a href="">Browse all homes</a>
                </li>
                <li>
                  <a href="/browse/homes/">Browse all homes</a>
                </li>
                <li>
                  <a href="/albuquerque-nm/">Albuquerque real estate</a>
                </li>
                <li>
                  <a href="/atlanta-ga/">Atlanta real estate</a>
                </li>
                <li>
                  <a href="/austin-tx/">Austin real estate</a>
                </li>
                <li>
                  <a href="/baltimore-md/">Baltimore real estate</a>
                </li>
                <li>
                  <a href="/boston-ma/">Boston real estate</a>
                </li>
                <li>
                  <a href="/calgary-ab/">Calgary real estate</a>
                </li>
                <li>
                  <a href="/charlotte-nc/">Charlotte real estate</a>
                </li>
                <li>
                  <a href="/chicago-il/">Chicago real estate</a>
                </li>
                <li>
                  <a href="/cleveland-oh/">Cleveland real estate</a>
                </li>
                <li>
                  <a href="/colorado-springs-co/">
                    Colorado Springs real estate
                  </a>
                </li>
                <li>
                  <a href="/columbus-oh/">Columbus real estate</a>
                </li>
                <li>
                  <a href="/dallas-tx/">Dallas real estate</a>
                </li>
                <li>
                  <a href="/denver-co/">Denver real estate</a>
                </li>
                <li>
                  <a href="/detroit-mi/">Detroit real estate</a>
                </li>
                <li>
                  <a href="/edmonton-ab/">Edmonton real estate</a>
                </li>
                <li>
                  <a href="/el-paso-tx/">El Paso real estate</a>
                </li>
                <li>
                  <a href="/fort-worth-tx/">Fort Worth real estate</a>
                </li>
                <li>
                  <a href="/fresno-ca/">Fresno real estate</a>
                </li>
                <li>
                  <a href="/houston-tx/">Houston real estate</a>
                </li>
                <li>
                  <a href="/indianapolis-in/">Indianapolis real estate</a>
                </li>
                <li>
                  <a href="/jacksonville-fl/">Jacksonville real estate</a>
                </li>
                <li>
                  <a href="/kansas-city-mo/">Kansas City real estate</a>
                </li>
                <li>
                  <a href="/las-vegas-nv/">Las Vegas real estate</a>
                </li>
                <li>
                  <a href="/long-beach-ca/">Long Beach real estate</a>
                </li>
                <li>
                  <a href="/los-angeles-ca/">Los Angeles real estate</a>
                </li>
                <li>
                  <a href="/louisville-ky/">Louisville real estate</a>
                </li>
                <li>
                  <a href="/memphis-tn/">Memphis real estate</a>
                </li>
                <li>
                  <a href="/mesa-az/">Mesa real estate</a>
                </li>
                <li>
                  <a href="/miami-fl/">Miami real estate</a>
                </li>
                <li>
                  <a href="/milwaukee-wi/">Milwaukee real estate</a>
                </li>
                <li>
                  <a href="/minneapolis-mn/">Minneapolis real estate</a>
                </li>
                <li>
                  <a href="/nashville-tn/">Nashville real estate</a>
                </li>
                <li>
                  <a href="/new-orleans-la/">New Orleans real estate</a>
                </li>
                <li>
                  <a href="/new-york-ny/">New York real estate</a>
                </li>
                <li>
                  <a href="/oakland-ca/">Oakland real estate</a>
                </li>
                <li>
                  <a href="/oklahoma-city-ok/">Oklahoma real estate</a>
                </li>
                <li>
                  <a href="/omaha-ne/">Omaha real estate</a>
                </li>
                <li>
                  <a href="/ottawa-on/">Ottawa real estate</a>
                </li>
                <li>
                  <a href="/philadelphia-pa/">Philadelphia real estate</a>
                </li>
                <li>
                  <a href="/phoenix-az/">Phoenix real estate</a>
                </li>
                <li>
                  <a href="/portland-or/">Portland real estate</a>
                </li>
                <li>
                  <a href="/raleigh-nc/">Raleigh real estate</a>
                </li>
                <li>
                  <a href="/sacramento-ca/">Sacramento real estate</a>
                </li>
                <li>
                  <a href="/san-antonio-tx/">San Antonio real estate</a>
                </li>
                <li>
                  <a href="/san-diego-ca/">San Diego real estate</a>
                </li>
                <li>
                  <a href="/san-francisco-ca/">San Francisco real estate</a>
                </li>
                <li>
                  <a href="/san-jose-ca/">San Jose real estate</a>
                </li>
                <li>
                  <a href="/seattle-wa/">Seattle real estate</a>
                </li>
                <li>
                  <a href="/toronto-on/">Toronto real estate</a>
                </li>
                <li>
                  <a href="/tucson-az/">Tucson real estate</a>
                </li>
                <li>
                  <a href="/tulsa-ok/">Tulsa real estate</a>
                </li>
                <li>
                  <a href="/vancouver-bc/">Vancouver real estate</a>
                </li>
                <li>
                  <a href="/virginia-beach-va/">Virginia Beach real estate</a>
                </li>
                <li>
                  <a href="/washington-dc/">Washington DC real estate</a>
                </li>
                <li>
                  <a href="/wichita-ks/">Wichita real estate</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="select-home--btn">
            <div>
              <button onClick={() => toggleDropdown("dropdown2")}>
                <span>Rentals</span>
                <BiSolidChevronDown
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    color: "blue",
                  }}
                />
              </button>
              <ul id="dropdown2" class="dropdown-content">
                <li>
                  <a href="/browse/b/">Rental Buildings</a>
                </li>
                <li>
                  <a href="/atlanta-ga/apartments/">
                    Atlanta apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/austin-tx/apartments/">
                    Austin apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/baltimore-md/apartments/">
                    Baltimore apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/boston-ma/apartments/">
                    Boston apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/bronx-new-york-city-ny/apartments/">
                    Bronx NYC apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/brooklyn-new-york-city-ny/apartments/">
                    Brooklyn NYC apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/charlotte-nc/apartments/">
                    Charlotte apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/chicago-il/apartments/">
                    Chicago apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/dallas-tx/apartments/">
                    Dallas apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/denver-co/apartments/">
                    Denver apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/houston-tx/apartments/">
                    Houston apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/jersey-city-nj/apartments/">
                    Jersey City apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/long-beach-ca/apartments/">
                    Long Beach apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/manhattan-new-york-city-ny/apartments/">
                    Manhattan NYC apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/miami-fl/apartments/">Miami apartments for rent</a>
                </li>
                <li>
                  <a href="/minneapolis-mn/apartments/">
                    Minneapolis apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/new-york-city-ny/apartments/">
                    New York City apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/oakland-ca/apartments/">
                    Oakland apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/oklahoma-city-ok/apartments/">
                    Oklahoma City apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/philadelphia-pa/apartments/">
                    Philadelphia apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/queens-new-york-city-ny/apartments/">
                    Queens NYC apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/sacramento-ca/apartments/">
                    Sacramento apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/san-francisco-ca/apartments/">
                    San Francisco apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/seattle-wa/apartments/">
                    Seattle apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/washington-dc/apartments/">
                    Washington DC apartments for rent
                  </a>
                </li>
                <li>
                  <a href="/atlanta-ga/rent-houses/">Atlanta houses for rent</a>
                </li>
                <li>
                  <a href="/austin-tx/rent-houses/">Austin houses for rent</a>
                </li>
                <li>
                  <a href="/boston-ma/rent-houses/">Boston houses for rent</a>
                </li>
                <li>
                  <a href="/charlotte-nc/rent-houses/">
                    Charlotte houses for rent
                  </a>
                </li>
                <li>
                  <a href="/columbus-oh/rent-houses/">
                    Columbus houses for rent
                  </a>
                </li>
                <li>
                  <a href="/fort-worth-tx/rent-houses/">
                    Fort Worth houses for rent
                  </a>
                </li>
                <li>
                  <a href="/fresno-ca/rent-houses/">Fresno houses for rent</a>
                </li>
                <li>
                  <a href="/houston-tx/rent-houses/">Houston houses for rent</a>
                </li>
                <li>
                  <a href="/indianapolis-in/rent-houses/">
                    Indianapolis houses for rent
                  </a>
                </li>
                <li>
                  <a href="/jacksonville-fl/rent-houses/">
                    Jacksonville houses for rent
                  </a>
                </li>
                <li>
                  <a href="/las-vegas-nv/rent-houses/">
                    Las Vegas houses for rent
                  </a>
                </li>
                <li>
                  <a href="/memphis-tn/rent-houses/">Memphis houses for rent</a>
                </li>
                <li>
                  <a href="/milwaukee-wi/rent-houses/">
                    Milwaukee houses for rent
                  </a>
                </li>
                <li>
                  <a href="/nashville-tn/rent-houses/">
                    Nashville houses for rent
                  </a>
                </li>
                <li>
                  <a href="/oakland-ca/rent-houses/">Oakland houses for rent</a>
                </li>
                <li>
                  <a href="/oklahoma-city-ok/rent-houses/">
                    Oklahoma City houses for rent
                  </a>
                </li>
                <li>
                  <a href="/philadelphia-pa/rent-houses/">
                    Philadelphia houses for rent
                  </a>
                </li>
                <li>
                  <a href="/phoenix-az/rent-houses/">Phoenix houses for rent</a>
                </li>
                <li>
                  <a href="/portland-or/rent-houses/">
                    Portland houses for rent
                  </a>
                </li>
                <li>
                  <a href="/san-antonio-tx/rent-houses/">
                    San Antonio houses for rent
                  </a>
                </li>
                <li>
                  <a href="/san-francisco-ca/rent-houses/">
                    San Francisco houses for rent
                  </a>
                </li>
                <li>
                  <a href="/san-jose-ca/rent-houses/">
                    San Jose houses for rent
                  </a>
                </li>
                <li>
                  <a href="/tampa-fl/rent-houses/">Tampa houses for rent</a>
                </li>
                <li>
                  <a href="/tucson-az/rent-houses/">Tucson houses for rent</a>
                </li>
                <li>
                  <a href="/washington-dc/rent-houses/">
                    Washington DC houses for rent
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="select-home--btn">
            <div>
              <button onClick={() => toggleDropdown("dropdown3")}>
                <span>Mortgage Rates</span>
                <BiSolidChevronDown
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    color: "blue",
                  }}
                />
              </button>
              <ul id="dropdown3" class="dropdown-content">
                <li>
                  <a href="/mortgage-rates/">Current mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ak/">Alaska mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/al/">Alabama mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ar/">Arkansas mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/az/">Arizona mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ca/">California mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/co/">Colorado mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ct/">Connecticut mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/de/">Delaware mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/fl/">Florida mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ga/">Georgia mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/hi/">Hawaii mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ia/">Iowa mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/id/">Idaho mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/il/">Illinois mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/in/">Indiana mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ks/">Kansas mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ky/">Kentucky mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/la/">Louisiana mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ma/">Massachusetts mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/md/">Maryland mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/me/">Maine mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/mi/">Michigan mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/mn/">Minnesota mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/mo/">Missouri mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ms/">Mississippi mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/mt/">Montana mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/nc/">
                    North Carolina mortgage rates
                  </a>
                </li>
                <li>
                  <a href="/mortgage-rates/nd/">North Dakota mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ne/">Nebraska mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/nh/">New Hampshire mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/nj/">New Jersey mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/nm/">New Mexico mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/nv/">Nevada mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ny/">New York mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/oh/">Ohio mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ok/">Oklahoma mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/or/">Oregon mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/pa/">Pennsylvania mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ri/">Rhode Island mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/sc/">
                    South Carolina mortgage rates
                  </a>
                </li>
                <li>
                  <a href="/mortgage-rates/sd/">South Dakota mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/tn/">Tennessee mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/tx/">Texas mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/ut/">Utah mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/va/">Virginia mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/vt/">Vermont mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/wa/">Washington mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/wi/">Wisconsin mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/wv/">West Virginia mortgage rates</a>
                </li>
                <li>
                  <a href="/mortgage-rates/wy/">Wyoming mortgage rates</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="select-home--btn">
            <div>
              <button onClick={() => toggleDropdown("dropdown4")}>
                <span>Browse Homes</span>
                <BiSolidChevronDown
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    color: "blue",
                  }}
                />
              </button>
              <ul id="dropdown4" class="dropdown-content">
                <li>
                  <a href="/browse/homes/ca/">California</a>
                </li>
                <li>
                  <a href="/browse/homes/tx/">Texas</a>
                </li>
                <li>
                  <a href="/browse/homes/ny/">New York</a>
                </li>
                <li>
                  <a href="/browse/homes/fl/">Florida</a>
                </li>
                <li>
                  <a href="/browse/homes/il/">Illinois</a>
                </li>
                <li>
                  <a href="/browse/homes/pa/">Pennsylvania</a>
                </li>
                <li>
                  <a href="/browse/homes/oh/">Ohio</a>
                </li>
                <li>
                  <a href="/browse/homes/mi/">Michigan</a>
                </li>
                <li>
                  <a href="/browse/homes/ga/">Georgia</a>
                </li>
                <li>
                  <a href="/browse/homes/nc/">North Carolina</a>
                </li>
                <li>
                  <a href="/browse/homes/nj/">New Jersey</a>
                </li>
                <li>
                  <a href="/browse/homes/va/">Virginia</a>
                </li>
                <li>
                  <a href="/browse/homes/wa/">Washington</a>
                </li>
                <li>
                  <a href="/browse/homes/ma/">Massachusetts</a>
                </li>
                <li>
                  <a href="/browse/homes/in/">Indiana</a>
                </li>
                <li>
                  <a href="/browse/homes/az/">Arizona</a>
                </li>
                <li>
                  <a href="/browse/homes/tn/">Tennessee</a>
                </li>
                <li>
                  <a href="/browse/homes/mo/">Missouri</a>
                </li>
                <li>
                  <a href="/browse/homes/md/">Maryland</a>
                </li>
                <li>
                  <a href="/browse/homes/wi/">Wisconsin</a>
                </li>
                <li>
                  <a href="/browse/homes/mn/">Minnesota</a>
                </li>
                <li>
                  <a href="/browse/homes/co/">Colorado</a>
                </li>
                <li>
                  <a href="/browse/homes/al/">Alabama</a>
                </li>
                <li>
                  <a href="/browse/homes/sc/">South Carolina</a>
                </li>
                <li>
                  <a href="/browse/homes/la/">Louisiana</a>
                </li>
                <li>
                  <a href="/browse/homes/ky/">Kentucky</a>
                </li>
                <li>
                  <a href="/browse/homes/or/">Oregon</a>
                </li>
                <li>
                  <a href="/browse/homes/ok/">Oklahoma</a>
                </li>
                <li>
                  <a href="/browse/homes/ct/">Connecticut</a>
                </li>
                <li>
                  <a href="/browse/homes/ia/">Iowa</a>
                </li>
                <li>
                  <a href="/browse/homes/ms/">Mississippi</a>
                </li>
                <li>
                  <a href="/browse/homes/ar/">Arkansas</a>
                </li>
                <li>
                  <a href="/browse/homes/ks/">Kansas</a>
                </li>
                <li>
                  <a href="/browse/homes/ut/">Utah</a>
                </li>
                <li>
                  <a href="/browse/homes/nv/">Nevada</a>
                </li>
                <li>
                  <a href="/browse/homes/nm/">New Mexico</a>
                </li>
                <li>
                  <a href="/browse/homes/wv/">West Virginia</a>
                </li>
                <li>
                  <a href="/browse/homes/ne/">Nebraska</a>
                </li>
                <li>
                  <a href="/browse/homes/id/">Idaho</a>
                </li>
                <li>
                  <a href="/browse/homes/hi/">Hawaii</a>
                </li>
                <li>
                  <a href="/browse/homes/me/">Maine</a>
                </li>
                <li>
                  <a href="/browse/homes/nh/">New Hampshire</a>
                </li>
                <li>
                  <a href="/browse/homes/ri/">Rhode Island</a>
                </li>
                <li>
                  <a href="/browse/homes/mt/">Montana</a>
                </li>
                <li>
                  <a href="/browse/homes/de/">Delaware</a>
                </li>
                <li>
                  <a href="/browse/homes/sd/">South Dakota</a>
                </li>
                <li>
                  <a href="/browse/homes/ak/">Alaska</a>
                </li>
                <li>
                  <a href="/browse/homes/nd/">North Dakota</a>
                </li>
                <li>
                  <a href="/browse/homes/vt/">Vermont</a>
                </li>
                <li>
                  <a href="/browse/homes/dc/district-of-columbia-county/">
                    Washington, DC
                  </a>
                </li>
                <li>
                  <a href="/browse/homes/wy/">Wyoming</a>
                </li>
                <li>
                  <a href="/browse/homes/pr/">Puerto Rico</a>
                </li>
                <li>
                  <a href="/browse/homes/vi/">Virgin Islands</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="select-home">
        <div className="select-home--btn">
          <button onClick={() => toggleDropdown("dropdown1")}>
            <a>Real Estate</a>
            <BiSolidChevronDown
              style={{ marginLeft: "15px", fontSize: "20px", color: "blue" }}
            />
          </button>
          <div id="dropdown1" class="dropdown-content">
            <ul>
              <li>
                <a href="">Option 1</a>
              </li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>
        <div className="select-home--btn border-line">
          <button onClick={() => toggleDropdown("dropdown2")}>
            <a>Rentals</a>
            <BiSolidChevronDown
              style={{ marginLeft: "15px", fontSize: "20px", color: "blue" }}
            />
          </button>
          <div id="dropdown2" class="dropdown-content">
            <ul>
              <li>
                <a href="">Option 1</a>
              </li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>
        <div className="select-home--btn border-line">
          <button onClick={() => toggleDropdown("dropdown3")}>
            <a>Mortgage Rates</a>
            <BiSolidChevronDown
              style={{ marginLeft: "15px", fontSize: "20px", color: "blue" }}
            />
          </button>
          <div id="dropdown3" class="dropdown-content">
            <ul>
              <li>
                <a href="">Option 1</a>
              </li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>
        <div className="select-home--btn border-line">
          <button onClick={() => toggleDropdown("dropdown4")}>
            <a>Browse Homes</a>
            <BiSolidChevronDown
              style={{ marginLeft: "15px", fontSize: "20px", color: "blue" }}
            />
          </button>
          <div id="dropdown4" class="dropdown-content">
            <ul>
              <li>
                <a href="">Option 1</a>
              </li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>
      </div> */}

      <span className="divider"></span>

      <div className="estate-links">
        <a href="">About</a>

        <a href="">Zestimates</a>

        <a href="">Research</a>

        <a href="">Careers</a>

        <a href="">Help</a>

        <a href="">Advertise</a>

        <a href="">Fair Housing Guide</a>

        <a href="">Terms of use</a>

        <a href="">Privacy Portal</a>

        <a href="">Cookie Preferences</a>

        <a href="">Blog</a>

        <a href="">AI</a>

        <a href="">Mobile Apps</a>

        <a href="">Trulia</a>

        <a href="">StreetEasy HotPads</a>

        <a href="">OutEast</a>

        <a href="">ShowingTime++</a>
      </div>

      <span style={{ textAlign: "center", display: "block" }}>
        <a href="">Do Not Sell or Share My Personal Information→</a>
      </span>

      <span className="divider"></span>

      <div className="contact">
        <p style={{ width: "85%", margin: "25px auto" }}>
          Zillow Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please <a href="">let us know</a>.
        </p>

        <p>
          Zillow, Inc. holds real estate brokerage licenses in multiple states.
          Zillow (Canada), Inc. holds real estate brokerage licenses in multiple
          provinces.
          <br /> § 442-H New York Standard Operating Procedures
          <br />§ New York Fair Housing Notice
        </p>
        <p style={{ margin: "-10px" }}>
          TREC: Information about brokerage services, Consumer protection notice
          <br /> California DRE #1522444
        </p>

        <p style={{ fontSize: "16px", marginTop: "20px" }}>
          <a href="">Contact Zillow, Inc, Brokerage</a>
        </p>

        <p>
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by The Canadian Real Estate Association
          (CREA) and identify real estate professionals who are members of CREA.
          The trademarks MLS®, Multiple Listing Service® and the associated
          logos are owned by CREA and identify the quality of services provided
          by real estate professionals who are members of CREA. Used under
          license.
        </p>
      </div>

      <div className="download-btn">
        <img src={AppleBtn} />
        <img src={PlaystoreBtn} />
      </div>

      <div className="socials-container">
        <img src={logo} alt="" style={{ height: "35px", width: "200px" }} />
        <span style={{ fontSize: "13px" }}>Follow us:</span>
        <a href="">
          <FaFacebook
            style={{ color: "#1877F2", fontSize: "30px", margin: "0 6px" }}
          />
        </a>
        <a href="">
          <BiLogoTwitter
            style={{ color: "#55ACEE", fontSize: "30px", margin: "0 6px" }}
          />
        </a>
        <a href="">
          <FaInstagram
            style={{ color: "blue", fontSize: "30px", margin: "0 6px" }}
          />
        </a>
        <a href="">
          <FaTiktok
            style={{ color: "#006AFF", fontSize: "30px", margin: "0 6px" }}
          />
        </a>
        {/* <FaFacebook style={{color:'#1877F2',fontSize:'30px', margin:'0 6px'}}/> */}
        {/* <BiLogoTwitter style={{color:'#55ACEE',fontSize:'30px', margin:'0 6px'}}/> */}
        {/* <FaInstagram style={{color:'blue',fontSize:'30px', margin:'0 6px'}}/> */}
        {/* <FaTiktok style={{color:'#006AFF',fontSize:'30px', margin:'0 6px'}}/> */}
        <span style={{ fontSize: "13px" }}>© 2006-2023 Zillow</span>
        <img />
        <img />
      </div>

      {/* <div style={{ display: "flex" }}>
        <div style={{ width: "200px" }}>
          <button onClick={() => toggleDropdown("dropdown1")}>Button 1</button>
          <div id="dropdown1" class="dropdown-content">
            <ul>
              <li>
                <a href="">Option 1</a>
              </li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>

        <div>
          <button onClick={() => toggleDropdown("dropdown2")}>Button 2</button>
          <div id="dropdown2" class="dropdown-content">
            <ul>
              <li>Option A</li>
              <li>Option B</li>
              <li>Option C</li>
            </ul>
          </div>
        </div>
      </div> */}

      <footer style={{ textAlign: "center" }}>
        <img src={FooterArt} style={{ width: "95%" }} />
      </footer>
    </div>
  );
}

export default Section;
