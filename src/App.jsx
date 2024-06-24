import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [showBasicModal, setShowBasicModal] = useState(false);
  const [showEnterpriseModal, setShowEnterpriseModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = (modal) => {
    if (modal === "basic") setShowBasicModal(!showBasicModal);
    else if (modal === "enterprise")
      setShowEnterpriseModal(!showEnterpriseModal);
    else if (modal === "business") setShowBusinessModal(!showBusinessModal);
  };
  return (
    <>
      <div>
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
                src={"logo"}
                alt='Laapp'
                className='logo logo-sticky d-block d-md-none'
              />
              <img
                src={"logoLight"}
                alt='Laapp'
                className='logo d-none d-md-block'
              />
            </a>
            <div className='collapse navbar-collapse' id='main-navbar'>
              <div className='sidebar-brand'>
                <a href='index.html'>
                  <img src={"logo"} alt='Laapp Template' className='logo' />
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
        <main className='overflow-hidden position-relative'>
          <header
            className='header alter3-header section gradient gradient-primary-auxiliary text-contrast'
            id='home'
          >
            <div className='shapes-container'>
              <div className='animation-shape shape-ring animation--rotating-diagonal'>
                <div></div>
              </div>
              <div className='animation-shape shape-circle animation--clockwise'>
                <div></div>
              </div>
              <div className='animation-shape shape-triangle animation--anti-clockwise'>
                <div className='animation--rotating'></div>
              </div>
              <div className='animation-shape shape-diamond animation--anti-clockwise'>
                <div className='animation--rotating'></div>
              </div>
              <div className='static-shape shape-ring-1'></div>
              <div className='static-shape shape-ring-2'></div>
              <div className='static-shape shape-circle-1'></div>
              <div className='static-shape pattern-dots-1'></div>
              <div className='static-shape pattern-dots-2'></div>
              <div className='static-shape ghost-shape ghost-shape-1'></div>
            </div>
            <div className='container bring-to-front'>
              <div className='row'>
                <div className='col-md-6'>
                  <h1 className='extra-bold display-md-3 font-md'>
                    A new way
                    <span className='d-block display-md-4 light'>
                      to showcase your app
                    </span>
                  </h1>
                  <p className='lead'>
                    Your amazing product deserves an outstanding way to show it.
                    Dashcore will provide you with a quality template no matter
                    what your idea is about.
                  </p>
                  <nav className='nav mt-5'>
                    <a
                      href='#'
                      className='nav-link mr-3 btn btn-rounded btn-contrast'
                    >
                      <i className='fas fa-tag mr-3'></i> Plans & pricing{" "}
                    </a>
                    <a
                      href='#'
                      className='nav-link btn btn-rounded btn-outline-contrast'
                    >
                      Start now
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <section className='isometric-mockups'>
            <div className='tablet ipad landscape'>
              <div className='screen'>
                <img src='img/screens/tablet/1.png' alt='...' />
              </div>
              <div className='button'></div>
            </div>
            <div className='iphone light phone-big'>
              <div className='screen'>
                <img src='img/screens/app/4.png' alt='...' />
              </div>
              <div className='notch'></div>
            </div>
            <div className='iphone light phone-small'>
              <div className='screen'>
                <img src='img/screens/app/2.png' alt='...' />
              </div>
              <div className='notch'></div>
            </div>
            <div className='tablet ipad portrait'>
              <div className='screen'>
                <img src='img/screens/tablet/2.png' alt='...' />
              </div>
              <div className='button'></div>
            </div>
          </section>
          <section className='section alter3-partners bg-contrast edge top-left'>
            <div className='container bring-to-front pb-md-9'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='section-heading'>
                    <i className='fas fa-handshake fa-3x accent mb-3'></i>
                    <h3 className='text-alternate heading-line'>
                      We have partnered with awesome folks
                    </h3>
                    <p className='lead'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Animi, atque eaque eius esse et harum inventore ipsam
                      laboriosam modi nam necessitatibus nemo pariatur
                      provident.
                    </p>
                  </div>
                  <ul className='nav'>
                    <li className='nav-item mr-3 py-2 op-5'>
                      <img src={"logo1"} className='icon' alt='' />
                    </li>
                    <li className='nav-item mr-3 py-2 op-5'>
                      <img src={"logo2"} className='icon' alt='' />
                    </li>
                    <li className='nav-item mr-3 py-2 op-5'>
                      <img src={"logo3"} className='icon' alt='' />
                    </li>
                    <li className='nav-item mr-3 py-2 op-5'>
                      <img src={"logo4"} className='icon' alt='' />
                    </li>
                    <li className='nav-item mr-3 py-2 op-5'>
                      <img src={"logo5"} className='icon' alt='' />
                    </li>
                    <li className='nav-item mr-3 py-2 op-5'>
                      <img src={"logo6"} className='icon' alt='' />
                    </li>
                  </ul>
                  <a
                    href='#!'
                    className='more-link btn btn-outline-primary bold'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Powerful Features --> */}
          <section className='section alter3-features' id='features'>
            <div className='shapes-container'>
              <div className='shape shape-ring shape-ring-1'>
                <div className='animation animation--rotating'></div>
              </div>
              <div className='shape shape-ring shape-ring-2'>
                <div className='animation animation--rotating'></div>
              </div>
              <div className='shape shape-circle animation--clockwise'>
                <div></div>
              </div>
              <div className='shape background-shape-main'></div>
            </div>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-5 order-lg-last'>
                  <div className='section-heading'>
                    <p className='px-2 text-alternate text-uppercase bold'>
                      Powerful features await for you
                    </p>
                    <h2 className='heading-line'>
                      A complete feature stack ready to help you
                    </h2>
                    <p className='lead text-muted my-4 semi-bold'>
                      Laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      href='#!'
                      className='more-link btn btn-primary text-contrast bold'
                    >
                      Know More
                    </a>
                  </div>
                </div>
                <div className='col-lg-7 pr-lg-6'>
                  <div className='row'>
                    <div className='col-lg-6 rotated-cards'>
                      <div data-aos='fade-down' data-aos-delay='0'>
                        <div className='card border-0 shadow mb-5 tilt'>
                          <div className='card-body py-5 px-4'>
                            <div className='icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3'>
                              <i className='icon m-0 pe pe-7s-paint-bucket pe-3x'></i>
                            </div>
                            <h4 className='bold mb-5'>Customizable</h4>
                            <p className='text-muted lead'>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div data-aos='fade-down' data-aos-delay='500'>
                        <div className='card border-0 shadow mb-5 tilt'>
                          <div className='card-body py-5 px-4'>
                            <div className='icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3'>
                              <i className='icon m-0 pe pe-7s-diamond pe-3x'></i>
                            </div>
                            <h4 className='bold mb-5'>Powerful Design</h4>
                            <p className='text-muted lead'>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 rotated-cards'>
                      <div data-aos='fade-down' data-aos-delay='800'>
                        <div className='card border-0 shadow mb-5 tilt'>
                          <div className='card-body py-5 px-4'>
                            <div className='icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3'>
                              <i className='icon m-0 pe pe-7s-light pe-3x'></i>
                            </div>
                            <h4 className='bold mb-5'>Creative</h4>
                            <p className='text-muted lead'>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div data-aos='fade-down' data-aos-delay='1200'>
                        <div className='card border-0 shadow mb-5 tilt'>
                          <div className='card-body py-5 px-4'>
                            <div className='icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3'>
                              <i className='icon m-0 pe pe-7s-cash pe-3x'></i>
                            </div>
                            <h4 className='bold mb-5'>Affordable</h4>
                            <p className='text-muted lead'>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Powered Design Blocks --> */}
          <section className='section powered-design' id='product'>
            <div className='shapes-container'>
              <div className='shape shape-circle shape-circle-1'>
                <div data-aos='fade-up-left' data-aos-duration='1500'></div>
              </div>
              <div className='shape shape-circle shape-circle-2'>
                <div
                  data-aos='fade-up-left'
                  data-aos-duration='1200'
                  data-aos-delay='500'
                ></div>
              </div>
              <div className='shape shape-ring animation--rotating-diagonal'>
                <div></div>
              </div>
              <div className='shape shape-triangle shape-animated'>
                <div className='animation--rotating'></div>
              </div>
              <div className='shape pattern-dots-1'></div>
            </div>
            <div className='container'>
              <div className='row gap-y align-items-center'>
                <div className='col-md-6'>
                  <div className='section-heading'>
                    <h2 className='heading-line'>
                      Powered with multiple design blocks
                    </h2>
                    <p className='lead text-muted'>
                      Unlock the power of Web Design. Laapp comes with multiple
                      reusable code blocks you can use to build awesome web
                      pages.
                    </p>
                  </div>
                  <a
                    href='#!'
                    className='btn btn-outline-alternate more-link mt-0'
                  >
                    Now is the time
                  </a>
                </div>
                <div className='col-md-6'>
                  <div className='rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast'>
                    <figure>
                      <img src={"piece1"} className='img-responsive' alt='' />
                    </figure>
                  </div>
                  <div className='rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5'>
                    <figure>
                      <img src={"piece2"} className='img-responsive' alt='' />
                    </figure>
                  </div>
                  <div className='rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5'>
                    <figure>
                      <img src={"piece3"} className='img-responsive' alt='' />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Features you can't miss --> */}
          <section className='section features-cant-miss'>
            <div className='shapes-container overflow-clear'>
              <div className='shape shape-circle shape-circle-1'>
                <div data-aos='fade-up-left'></div>
              </div>
              <div className='shape shape-circle shape-circle-2'>
                <div data-aos='fade-up-right' data-aos-delay='200'></div>
              </div>
              <div className='shape shape-circle shape-circle-3'>
                <div data-aos='fade-up-left' data-aos-delay='400'></div>
              </div>
              <div className='shape shape-circle shape-circle-4'>
                <div data-aos='fade-up-left' data-aos-delay='600'></div>
              </div>
              <div className='shape shape-triangle shape-animated'>
                <div className='animation--rotating'></div>
              </div>
            </div>
            <div className='container'>
              <div className='row gap-y'>
                <div className='col-md-6 order-md-last'>
                  <div className='section-heading'>
                    <i className='fas fa-trophy fa-2x text-danger mb-3'></i>
                    <h2 className='heading-line'>Features you canot miss</h2>
                  </div>
                  <ul className='list-unstyled'>
                    <li className='media flex-column flex-md-row text-center text-md-left'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-mail pe-3x'></i>
                      <div className='media-body mt-3 mt-md-0'>
                        <h5 className='bold mt-0 mb-1'>Mail Management</h5>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet aut autem eum laudantium quas recusandae
                          repellendus voluptate.
                        </p>
                      </div>
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-users pe-3x'></i>
                      <div className='media-body mt-3 mt-md-0'>
                        <h5 className='bold mt-0 mb-1'>Customers Tracking</h5>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet aut autem eum laudantium quas recusandae
                          repellendus voluptate.
                        </p>
                      </div>
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <div className='media-body mt-3 mt-md-0'>
                        <h5 className='bold mt-0 mb-1'>Advanced Reporting</h5>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet aut autem eum laudantium quas recusandae
                          repellendus voluptate.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-md-6'>
                  <div className='bubble bubble-left center-x-md'>
                    <figure
                      className='rounded overflow-hidden shadow'
                      data-aos='zoom-in'
                    >
                      <img src={"piece4"} className='img-responsive' alt='' />
                    </figure>
                  </div>
                  <figure className='bubble bubble-right rounded overflow-hidden shadow'>
                    <img
                      src={"piece5"}
                      className='img-responsive'
                      alt=''
                      data-aos='fade-left'
                    />
                  </figure>
                  <div className='iphone light'>
                    <div className='screen shadow-box'>
                      <img src={"piece6"} alt='...' />
                    </div>
                    <div className='notch'></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Pricing --> */}
          <section className='section pricing-plans' id='pricing'>
            <div className='shapes-container overflow-clear'>
              {/* Shapes and icons here */}
              {/* Replace with icons and shapes as needed */}
              {/* Example:
        <div className="shape shape-1"></div>
        <i className="icon pe pe-7s-cash pe-3x" data-aos="fade-down"></i>
        */}
            </div>
            <div className='container'>
              <div className='section-heading text-center'>
                <span className='rounded-pill shadow-box bold py-2 px-4'>
                  <i className='far fa-lightbulb text-primary mr-2'></i>{" "}
                  <span className='text-primary'>Save more</span> with these
                  awesome plans
                </span>
                <h2 className='mt-3 heading-line'>Transparent pricing</h2>
                <p className='lead text-muted'>
                  Our plans have everything you need to take your app to the
                  next level. <span className='highlight'>No hidden fees.</span>
                </p>
                <div
                  id='pricing-basis-options'
                  className='btn-group btn-group-toggle mt-5'
                  data-toggle='buttons'
                >
                  <label className='btn btn-secondary active'>
                    <input
                      type='radio'
                      name='pricing-basis'
                      value='monthly'
                      defaultChecked
                    />{" "}
                    Monthly
                  </label>
                  <label className='btn btn-secondary'>
                    <input type='radio' name='pricing-basis' value='yearly' />{" "}
                    Yearly
                  </label>
                </div>
              </div>
              <div className='row no-gutters align-items-center pricing-plans-options'>
                {/* Pricing plans */}
                <div className='col-lg-4 pricing-plan plan-basic order-md-first'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h4 className='text-alternate bold text-capitalize'>
                        basic
                      </h4>
                      <p>For individuals</p>
                      <div className='pricing-details'>
                        <span className='pricing-value'>
                          <span
                            className='odometer price'
                            data-monthly='0'
                            data-yearly='0'
                          >
                            0
                          </span>
                        </span>
                      </div>
                      <a
                        href='#!'
                        className='more-link btn btn-outline-alternate mb-3'
                        onClick={() => toggleModal("basic")}
                      >
                        I want this
                      </a>
                    </div>
                    <hr className='d-none d-md-block' />
                    <div className='d-none d-md-flex'>
                      <ul className='list-group list-group-flush list-group-no-border'>
                        <li className='list-group-item'>
                          Lorem ipsum dolor sit amet
                        </li>
                        <li className='list-group-item'>Dicta doloremque</li>
                        <li className='list-group-item'>
                          Consectetur fuga inventore
                        </li>
                        <li className='list-group-item'>
                          Alias animi, assumenda atque
                        </li>
                        <li className='list-group-item'>
                          Accusamus adipisci aspernatur
                        </li>
                      </ul>
                    </div>
                    <div className='d-md-none'>
                      <button
                        type='button'
                        className='more-link btn btn-link d-flex align-items-center mx-auto'
                        onClick={() => toggleModal("basic")}
                      >
                        View plan details
                      </button>
                      {/* Basic Plan Modal */}
                      {showBasicModal && (
                        <div
                          className='modal'
                          id='basic-plan-modal-basic'
                          tabIndex='-1'
                          role='dialog'
                          style={{ display: "block", paddingRight: "17px" }}
                        >
                          <div className='modal-dialog' role='document'>
                            <div className='modal-content'>
                              <div className='modal-header'>
                                <h5 className='modal-title bold text-capitalize'>
                                  basic plan
                                </h5>
                                <button
                                  type='button'
                                  className='close'
                                  onClick={() => toggleModal("basic")}
                                >
                                  <span aria-hidden='true'>×</span>
                                </button>
                              </div>
                              <div className='modal-body plan-features'>
                                <ul className='list-group list-group-flush text-center'>
                                  <li className='list-group-item border-top-0'>
                                    Lorem ipsum dolor sit amet
                                  </li>
                                  <li className='list-group-item'>
                                    Dicta doloremque
                                  </li>
                                  <li className='list-group-item'>
                                    Consectetur fuga inventore
                                  </li>
                                  <li className='list-group-item'>
                                    Alias animi, assumenda atque
                                  </li>
                                  <li className='list-group-item'>
                                    Accusamus adipisci aspernatur
                                  </li>
                                  <li className='list-group-item'>
                                    Delectus earum iste nobis
                                  </li>
                                  <li className='list-group-item'>
                                    Accusamus alias amet at
                                  </li>
                                  <li className='list-group-item'>
                                    Accusamus alias aliquid
                                  </li>
                                  <li className='list-group-item'>
                                    Animi blanditiis eveniet
                                  </li>
                                  <li className='list-group-item'>
                                    Ab aliquid amet consequatur
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Repeat similar structure for other plans */}
                {/* Enterprise Plan */}
                {/* Business Plan */}
              </div>
            </div>
            {/* Call to action */}
            <div className='container pt-0 border-bottom'>
              <div className='row align-items-center'>
                <div className='col-md-8'>
                  <div className='text-center text-md-left'>
                    <h4 className='bold accent'>
                      Not sure what is better for you?
                    </h4>
                    <p className='mt-0'>
                      You can start for free, as long as you fell in love with
                      our App you can decide what plan better suites your needs.{" "}
                      <span className='italic dotted'>
                        By picking any of the pay plans you will get 30 days
                        free trial.
                      </span>
                    </p>
                  </div>
                </div>
                <div className='col-md-4 text-center text-md-right'>
                  <a
                    href='#!'
                    className='btn btn-primary btn-lg text-contrast p-4 more-link ml-md-auto'
                  >
                    Try it now !
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Integrations --> */}
          <section className='section integration-bubbles'>
            <div className='container overflow-hidden'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='bubbles-wrapper'>
                    <div className='animations m-0'>
                      {/* Bubble items */}
                      <div className='bubble bg-contrast rounded-circle p-2 shadow icon icon-md'>
                        <img
                          src='img/demo/header/apx.svg'
                          alt=''
                          className='img-responsive'
                        />
                        <span className='badge badge-contrast shadow-box'>
                          Autoprefixer
                        </span>
                      </div>
                      {/* Repeat other bubble items similarly */}
                      {/* Example: */}
                      {/* <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img src="img/demo/header/bs.svg" alt="" className="img-responsive" />
                  <span className="badge badge-contrast shadow-box">Bootstrap</span>
                </div> */}
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='section-heading'>
                    <p className='text-alternate text-uppercase bold'>
                      Extending core
                    </p>
                    <h2 className='heading-line'>
                      Integrations to make it better
                    </h2>
                    <p className='lead text-muted'>
                      Ever wonder about the wonder of Laap: We count on hundreds
                      of friends contributing day by day to make Laapp a
                      wonderful tool
                    </p>
                  </div>
                  <a href='#!' className='more-link'>
                    Explore all integration
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Why Choose Us --> */}
          <section className='section why-choose-us'>
            <div className='shapes-container'>
              <div className='pattern pattern-dots'></div>
            </div>
            <div className='container pb-8 bring-to-front'>
              <div className='section-heading text-center'>
                <h2 className='heading-line'>Why you should choose Laap?</h2>
                <p className='text-muted lead mx-auto'>
                  Laapp is designed to provide you with the latest trends in web
                  design. It willll help you to focus on your product, launch
                  your website faster and reach more customers.
                </p>
              </div>
              <div className='row gap-y'>
                <div className='col-md-6'>
                  <h4 className='bold text-alternate'>
                    It all starts by choosing the right tools
                  </h4>
                  <p className='text-muted lead mb-5'>
                    When you are looking for a template you want it to stand
                    out. Laapp comes with many customizable components.
                  </p>
                  <ul className='list-unstyled why-icon-list'>
                    <li className='list-item'>
                      <div className='media align-items-center'>
                        <div className='icon-shape mr-3'>
                          <div className='shape shape-pipes'></div>
                          <i className='icon text-alternate fas fa-plug fa-3x'></i>
                        </div>
                        <div className='media-body'>
                          <h5 className='bold'>Integrations</h5>
                          <p className='my-0'>
                            Aut debitis deserunt ea explicabo hic id incidunt,
                            minus
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='list-item'>
                      <div className='media align-items-center'>
                        <div className='icon-shape mr-3'>
                          <div className='shape shape-pipes'></div>
                          <i className='icon text-alternate fas fa-heart fa-3x'></i>
                        </div>
                        <div className='media-body'>
                          <h5 className='bold'>Marketing</h5>
                          <p className='my-0'>
                            Aliquam amet assumenda debitis dicta distinctio
                            eaque enim
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='list-item'>
                      <div className='media align-items-center'>
                        <div className='icon-shape mr-3'>
                          <div className='shape shape-pipes'></div>
                          <i className='icon text-alternate fas fa-headphones fa-3x'></i>
                        </div>
                        <div className='media-body'>
                          <h5 className='bold'>Support</h5>
                          <p className='my-0'>
                            Consequatur doloremque illum libero nam. Hic, vitae?
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <hr className='my-5' />
                  <div className='text-center text-md-left'>
                    <a href='#!' className='btn btn-primary text-contrast'>
                      Know More
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='rotated-mockups device-twin'>
                    <div className='browser absolute shadow-lg'>
                      <img src='img/screens/tablet/1.png' alt='...' />
                    </div>
                    <div className='front iphone light'>
                      <div className='screen'>
                        <img src='img/screens/app/1.png' alt='...' />
                      </div>
                      <div className='notch'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- FAQs --> */}
          <section className='section faqs-dd bg-light edge top-left'>
            <div className='shapes-container'>
              <div className='absolute icon' data-aos='fade-down-left'>
                <i className='fas fa-question'></i>
              </div>
            </div>
            <div className='container'>
              <div className='section-heading text-center'>
                <h2 className='heading-line'>Frequently Asked Questions</h2>
                <p className='lead'>Want to know more about our services?</p>
              </div>
              <div className='row'>
                <div className='col-lg-8 mx-lg-auto'>
                  <div data-aos='fade-up'>
                    <div className='card shadow-box shadow-hover mb-3'>
                      <div className='card-header py-3'>
                        <a
                          href='#'
                          className='card-title collapsed'
                          data-toggle='collapse'
                          data-target='#v1-q1'
                        >
                          What does the package include?
                        </a>
                      </div>
                      <div id='v1-q1' className='collapse card-body'>
                        When you buy Dashcore, you get all you see in the demo
                        but the images. We include SASS files for styling,
                        complete JS files with comments, all HTML variations.
                        Besides we include all mobile PSD mockups.
                      </div>
                    </div>
                  </div>
                  <div data-aos='fade-up'>
                    <div className='card shadow-box shadow-hover mb-3'>
                      <div className='card-header py-3'>
                        <a
                          href='#'
                          className='card-title collapsed'
                          data-toggle='collapse'
                          data-target='#v1-q2'
                        >
                          What is the typical response time for a support
                          question?
                        </a>
                      </div>
                      <div id='v1-q2' className='collapse card-body'>
                        Since you report us a support question we try to make
                        our best to find out what is going on, depending on the
                        case it could take more or less time, however a standard
                        time could be minutes or hours.
                      </div>
                    </div>
                  </div>
                  <div data-aos='fade-up'>
                    <div className='card shadow-box shadow-hover mb-3'>
                      <div className='card-header py-3'>
                        <a
                          href='#'
                          className='card-title collapsed'
                          data-toggle='collapse'
                          data-target='#v1-q3'
                        >
                          What do I need to know to customize this template?
                        </a>
                      </div>
                      <div id='v1-q3' className='collapse card-body'>
                        Our documentation gives you all you need to customize
                        your copy. However, you will need some basic web design
                        knowledge (HTML, Javascript, and CSS).
                      </div>
                    </div>
                  </div>
                  <div data-aos='fade-up'>
                    <div className='card shadow-box shadow-hover mb-3'>
                      <div className='card-header py-3'>
                        <a
                          href='#'
                          className='card-title collapsed'
                          data-toggle='collapse'
                          data-target='#v1-q4'
                        >
                          Can I suggest a new feature?
                        </a>
                      </div>
                      <div id='v1-q4' className='collapse card-body'>
                        Definitely <span className='bold'>Yes</span>, you can
                        contact us to let us know your needs. If your suggestion
                        represents any value to both, we can include it as a
                        part of the theme or you can request a custom build for
                        an extra cost. Please note it could take some time for
                        the feature to be implemented.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Start For Free --> */}
          <section className='section start-free' id='trial'>
            <div className='shapes-container'>
              <i className='icon pe pe-7s-hourglass pe-3x'></i>
              <i className='icon pe pe-7s-magic-wand pe-3x'></i>
              <i className='icon pe pe-7s-rocket pe-3x'></i>
              <i className='icon pe pe-7s-plugin pe-3x'></i>
              <i className='icon pe pe-7s-like pe-3x'></i>
              <i className='icon pe pe-7s-clock pe-3x'></i>
              <i className='icon pe pe-7s-smile pe-3x'></i>
              <i className='icon pe pe-7s-piggy pe-3x'></i>
              <i className='icon pe pe-7s-shield pe-3x'></i>
              <i className='icon pe pe-7s-server pe-3x'></i>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 mx-auto'>
                  <div className='section-heading text-center'>
                    <i className='pe pe-7s-unlock fa-3x text-alternate'></i>
                    <h2 className='heading-line bold mt-4'>
                      Start your 15 days free trial now!
                    </h2>
                    <p className='lead text-muted'>
                      By signing up you will get 15 days free trial. You wonot
                      be charged until the trial period ends,{" "}
                      <span className='italic'>
                        donot let this offer pass in front of your eyes
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='nav flex-column flex-md-row align-items-center justify-content-center'>
                <a
                  href='#!'
                  className='btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0'
                >
                  Sign up
                </a>
                <a
                  href='mailto:support@5studios.net'
                  className='btn btn-outline-dark btn-lg py-3 px-4 bold'
                >
                  Contact us
                </a>
              </div>
            </div>
          </section>
          {/* <!-- Contact Channels --> */}
          <section className='section'>
            <div className='container bring-to-front'>
              <div className='row gap-y'>
                <div className='col-md-6'>
                  <div className='rounded media bg-contrast shadow-lg p-4'>
                    <div className='icon-shape mr-4'>
                      <i className='pe pe-7s-cash pe-3x'></i>
                    </div>
                    <div className='media-body'>
                      <h4 className='text-primary'>Contact Sales</h4>
                      <a
                        href='mailto:sales@5studios.net'
                        className='more-link d-flex align-items-center mt-0'
                      >
                        sales@5studios.net
                      </a>
                      <p className='mt-4'>
                        Looking for a custom quote? Need to tell us more about
                        your project? Want a demonstration? Drop us a line.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='rounded media bg-contrast shadow-lg p-4'>
                    <div className='icon-shape mr-4'>
                      <i className='pe pe-7s-help2 pe-3x'></i>
                    </div>
                    <div className='media-body'>
                      <h4 className='text-primary'>Technical Support</h4>
                      <a
                        href='mailto:support@5studios.net'
                        className='more-link d-flex align-items-center mt-0'
                      >
                        support@5studios.net
                      </a>
                      <p className='mt-4'>
                        Any questions about how to integrate your product? Donot
                        fret, our geek team is ready for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* <!-- Footer --> */}
        <footer className='site-footer section bg-dark text-contrast edge top-left'>
          <div className='container py-3'>
            <div className='row gap-y text-center text-md-left'>
              <div className='col-md-4 mr-auto'>
                <img src='img/logo-light.png' alt='Logo' className='logo' />
                <p>
                  Laapp, a carefully crafted and powerful HTML5 template, it is
                  perfect to showcase your App or Startup
                </p>
              </div>
              <div className='col-md-2'>
                <nav className='nav flex-column'>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    About
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Services
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Blog
                  </a>
                </nav>
              </div>
              <div className='col-md-2'>
                <nav className='nav flex-column'>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Features
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    API
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Customers
                  </a>
                </nav>
              </div>
              <div className='col-md-2'>
                <nav className='nav flex-column'>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Careers
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Contact
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#'>
                    Search
                  </a>
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
                    <i className='fab fa-facebook'></i>
                  </a>
                  <a href='#' className='btn btn-circle btn-sm brand-twitter'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#' className='btn btn-circle btn-sm brand-instagram'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </nav>
              </div>
            </div>
            <hr className='mt-5 op-5' />
            <div className='row small'>
              <div className='col-md-4'>
                <p className='mt-2 mb-0 text-center text-md-left'>
                  © 2019 <a href='https://5studios.net'>5studios</a>. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
