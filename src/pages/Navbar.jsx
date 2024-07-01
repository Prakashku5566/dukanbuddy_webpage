import logo from "../assets/"; // Adjust the path to your logo image

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
          <div className='sidebar-brand'>
            <a href='index.html'>
              <img src={logo} alt='Laapp Template' className='logo' />
            </a>
          </div>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link scrollto' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scrollto' href='#features'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scrollto' href='#product'>
                Product
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scrollto' href='#pricing'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link scrollto' href='#trial'>
                Trial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
