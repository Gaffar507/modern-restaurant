import React, { useState } from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const NavLinks = () => (
<>  
  <li className='p__opensans'><a href="#home">Home</a></li>
  <li className='p__opensans'><a href="#about">About</a></li>
  <li className='p__opensans'><a href="#menu">Menu</a></li>
  <li className='p__opensans'><a href="#awards">Awards</a></li>
  <li className='p__opensans'><a href="#contact">Contact</a></li>
</>
)

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        {NavLinks()}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div/>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>

      {/* navbar for small screen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} className='menu__bar' onClick={()=>setToggle(!toggle)}/>
        {toggle && 
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggle(!toggle)}/>
              <ul className="app__navbar-smallscreen-links">
                {NavLinks()}
              </ul>

              <div className="app__navbar-smallscreen-login">
                  <a href="#login" className='p__opensans'>Log In / Register</a>
                  <div/>
                  <a href="/" className='p__opensans'>Book Table</a>
            </div>
          </div>
        }
      </div>
    </div>
  );
} 

export default Navbar;
