import logo from "../../img/logod.png";
import facebook from "../../img/facebook.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import "../App.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='site-footer section bg-dark text-contrast edge top-left'>
      <div className='container py-3'>
        <div className='row gap-y text-center text-md-left'>
          <div className='col-md-4 mr-auto'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='mt-3'>
              DukanBuddy Your perfect Smart business partner
            </div>
          </div>
          <div className='col-md-2'>
            <nav className='nav flex-column'>
              <a className='nav-item py-2 text-contrast' href='#f&q'>
                {t("FOOTER_CONTACT.F&Q")}
              </a>
              <a className='nav-item py-2 text-contrast' href='/'>
                {t("COMMON.HOME")}
              </a>
              <a className='nav-item py-2 text-contrast' href='/blogs'>
                {t("COMMON.BLOG")}
              </a>
            </nav>
          </div>
          {/* <div className='col-md-2'>
                <nav className='nav flex-column'>
                  <a className='nav-item py-2 text-contrast' href='f&q'>
                    Features
                  </a> */}
          {/* <a className='nav-item py-2 text-contrast' href='#'>
                    API
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Customers
                  </a> */}
          {/* </nav>
              </div> */}
          <div className='col-md-2'>
            <nav className='nav flex-column'>
              <Link className='nav-item py-2 text-contrast' to='/carees-page'>
                {t("FOOTER_CONTACT.CAREERS")}
              </Link>
              <Link className='nav-item py-2 text-contrast' to='/contact-page'>
                {t("COMMON.CONTACT")}
              </Link>
              {/* <a className='nav-item py-2 text-contrast' href='#'>
                    Search
                  </a> */}
            </nav>
          </div>
          <div className='col-md-2'>
            <h6 className='py-2 small'>Follow us</h6>
            <nav className='nav justify-content-around'>
              <a
                href='https://facebook.com/5studios.net'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-circle btn-sm brand-facebook'
              >
                {/* <i className='fab fa-facebook'></i> */}
                <img src={facebook} />
              </a>
              <a
                href='https://www.linkedin.com/company/cogitofs/'
                className='btn btn-circle btn-sm brand-twitter'
                title='linkdin'
              >
                {/* <i className='fab fa-twitter'></i> */}
                <img src={linkedin} />
              </a>
              <a
                href='https://www.instagram.com/dukanbuddy?igsh=MWkybXg1YjM0dWlwZA%3D%3D&utm_source=qr'
                className='btn btn-circle btn-sm '
                title='instagram'
              >
                {/* <i className='fab fa-instagram'></i> */}
                <img src={instagram} />
              </a>
              {/* <li class='list-inline-item'>
                    <a
                      href='https://www.instagram.com/dukanbuddy?igsh=MWkybXg1YjM0dWlwZA%3D%3D&utm_source=qr'
                      target='_blank'
                      title='instagram'
                    >
                      <i class='fa fa-instagram'></i>
                    </a>
                  </li> */}
            </nav>
          </div>
        </div>
        <hr className='mt-5 op-5' />
        <div className='row small'>
          <div className='col-md-4'>
            <p className='mt-2 mb-0 text-center text-md-left'>
              {/* © 2024                          //<a href='https://5studios.net'>5studios</a> */}
              © 2024 Pensare.AI Pvt. Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
