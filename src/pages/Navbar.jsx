// import React from "react";
import { Link } from "react-router-dom";
// import LanguageChanger from "../languagechanger";
import { useTranslation } from "react-i18next";
import logo from "../../img/logod.png";
import "../App.css";
// C:\Users\Prakash kumar singh\Desktop\Dukanbuddy\dukanbuddy_landingPage\dukanbuddy\img\logod.png
// import logo from "../../img/logod.png"; // Adjust the path to your logo image
// // import App from "../App";
const Navbar = () => {
  const { t } = useTranslation();

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
        <Link to='/' className='navbar-brand'>
          <img
            src={logo}
            alt='Dukanbuddy'
            className='logo logo-sticky d-block d-md-none'
          />
          <img src={logo} alt='Dukanbuddy' className='logo d-none d-md-block' />
        </Link>
        <div className='collapse navbar-collapse' id='main-navbar'>
          <div className='sidebar-brand'>
            <Link to='/'>
              <img src={"logo"} alt='Laapp Template' className='logo' />
            </Link>
          </div>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                {t("COMMON.HOME")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/features'>
                {t("COMMON.FEATURES")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                {t("COMMON.ABOUT")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blogs'>
                {t("COMMON.BLOG")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact-page'>
                {t("COMMON.CONTACT")}
              </Link>
            </li>
            {/* <li className='nav-item'>
              <LanguageChanger displayType='dropdown' />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
