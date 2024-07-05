// import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logod.png"; // Adjust the path to your logo image
import App from "../App";
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md main-nav navigation fixed-top sidebar-left'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#main-navbar'
        >
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <a href='#main' className='navbar-brand'>
          <img
            src={logo}
            alt='Dukanbuddy'
            className='logo logo-sticky d-block d-md-none'
          />
          <img src={logo} alt='Dukanbuddy' className='logo d-none d-md-block' />
        </a>
        <div className='collapse navbar-collapse' id='main-navbar'>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blogs' className='nav-link'>
                Blog
              </Link>
            </li>
            {/* Add more navigation links as needed */}
            <li className='nav-item'>
              <Link to='/pricing' className='nav-link'>
                Pricing
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
