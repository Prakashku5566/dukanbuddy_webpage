import { useState } from "react";
import "./App.css";
import logo from "../img/logod.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import accountIcon from "../src/assets/business_13582738.png";
import aiIcon from "../src/assets/ai.png";
import customer from "../src/assets/people.png";
import inventory from "../src/assets/distribution.png";
import Feature from "./pages/CoreFeatures";
import FreQuestion from "./pages/FreQuestion";
function App() {
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
                src={logo}
                alt='Dukanbuddy'
                className='logo logo-sticky d-block d-md-none'
              />
              <img
                src={logo}
                alt='Dukanbuddy'
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
                    Small Business
                    <span className='d-block display-md-4 light'>
                      to Smart Business
                    </span>
                  </h1>
                  <p className='lead'>
                    SMALL Business se SMART Business ki Journey dukanBuddy ke
                    Saath
                  </p>
                  <nav className='nav mt-5'>
                    {/* <a
                      href='#'
                      className='nav-link mr-3 btn btn-rounded btn-contrast'
                    >
                      <i className='fas fa-tag mr-3'></i> Plans & pricing{" "}
                    </a> */}
                    <a
                      href='https://app.dukanbuddy.com/'
                      target='_blank'
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
                    {/* <i className='fas fa-handshake fa-3x accent mb-3'></i> */}
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className='fa-3x accent mb-3'
                    />
                    <h3 className='text-alternate heading-line'>Our Mission</h3>
                    <p className='lead'>
                      At CogitoFS, we envision a future where every MSME in
                      India prospers without financial constraints. Our mission
                      is to:
                      <ul>
                        <li>
                          Revolutionize the MSME landscape with innovative
                          lending products
                        </li>
                        <li>Provide cutting-edge CRM solutions</li>
                        <li>Offer comprehensive financial education</li>
                      </ul>
                      Our commitment includes:
                      <ul>
                        <li>Relentless product and solution innovation</li>
                        <li>Unwavering dedication to improving MSME lives</li>
                      </ul>
                      We enable MSMEs to focus on their businesses while we
                      handle the rest.
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
                    {/* <h2 className='heading-line'>
                      A complete feature stack ready to help you
                    </h2> */}
                    <p className='lead text-muted my-4 semi-bold'>
                      We also Provide Customer Managment Employee Management
                    </p>
                    <ul>
                      <li>
                        <strong>Customer Management:</strong> Keep track of
                        customers and their last shopping dates.
                      </li>
                      <li>
                        <strong>Automated Reminders:</strong> Send timely
                        shopping reminders to customers.
                      </li>
                      <li>
                        <strong>Employee Management:</strong> Easily manage
                        employee details, wages, and salaries.
                      </li>
                      <li>
                        <strong>User-Friendly Interface:</strong> Navigate
                        effortlessly with our intuitive design.
                      </li>
                    </ul>
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
                              <img
                                src={accountIcon}
                                className='icon m-0 pe pe-7s-paint-bucket pe-3x'
                              />
                            </div>
                            <h4 className='bold mb-5'>Accounting</h4>
                            <p className='text-muted lead'>
                              Increase cash flow by:
                              <ul>
                                <li>Sending payment reminders</li>
                                <li>Handling GST and Non-GST bills</li>
                                <li>Tracking sales and profit</li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div data-aos='fade-down' data-aos-delay='500'>
                        <div className='card border-0 shadow mb-5 tilt'>
                          <div className='card-body py-5 px-4'>
                            <div className='icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3'>
                              <img src={customer} className='h-w-54' />
                            </div>
                            <h4 className='bold mb-5'>360° Customer View</h4>
                            <p className='text-muted lead'>
                              <ul>
                                <li>
                                  Send marketing Emails/SMS to attract new
                                  customers.
                                </li>
                                <li>
                                  Understand customer’s buying trends and
                                  preferences.
                                </li>
                                <li>
                                  Build meaningful relationships with your
                                  customers.
                                </li>
                              </ul>
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
                              <img src={inventory} className='h-w-54' />
                            </div>
                            <h4 className='bold mb-5'>Inventory Management</h4>
                            <p className='text-muted lead'>
                              <ul>
                                <li>One click stock order placement.</li>
                                <li>Real time order tracking.</li>
                                <li>Easy handling of Returns.</li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div data-aos='fade-down' data-aos-delay='1200'>
                        <div className='card border-0 shadow mb-5 tilt'>
                          <div className='card-body py-5 px-4'>
                            <div className='icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3'>
                              <img src={aiIcon} className='h-w-54' />
                            </div>
                            <h4 className='bold mb-5'>
                              AI driven Market Insights
                            </h4>
                            <p className='text-muted lead'>
                              <ul>
                                <li>
                                  Know changing demands with changing seasons,
                                  festivals, and occasions.
                                </li>
                                <li>
                                  Receive competitive product suggestions to
                                  increase your margin.
                                </li>
                              </ul>
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
            {/* <div className='container'>
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
            </div> */}
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
                        <h5 className='bold mt-0 mb-1'>Inventory Management</h5>
                        <p className='m-0'>
                          Easily track your stock levels, set reorder points,
                          and manage vendors. Stay updated with real-time
                          inventory data to avoid stockouts and overstocking.
                        </p>
                      </div>
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-users pe-3x'></i>
                      <div className='media-body mt-3 mt-md-0'>
                        <h5 className='bold mt-0 mb-1'>Sales & Billing</h5>
                        <p className='m-0'>
                          Simplify your sales process with quick billing,
                          invoicing, and sales tracking. Generate professional
                          invoices and keep accurate sales records effortlessly.
                        </p>
                      </div>
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Customer Management'
                        paragraph='Keep detailed records of your customers, manage loyalty programs, and track customer interactions to provide personalized services, send payment reminders and many more awesome features'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Supplier Management'
                        paragraph='Streamline your supplier relationships by keeping track of orders, payments, and communication in one place.'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Payroll Management'
                        paragraph='Manage employee( full time and Part time) salaries with ease. Track attendance, calculate wages based on hours worked or shifts, and ensure timely and accurate payroll processing.'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Subscription Management'
                        paragraph='Offer subscription plans to your customers. Automate renewals, manage billing cycles, and keep track of subscription statuses to provide a seamless experience.'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Cashbook'
                        paragraph='Maintain a digital cashbook to record daily transactions. Monitor cash inflows and outflows, reconcile accounts, and get a clear picture of your business finances.'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Multi-Store Management [Coming soon*]'
                        paragraph='If you own multiple stores, manage them all from a single dashboard. Monitor performance, transfer stock, and streamline operations across locations.'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Expense Management'
                        paragraph='Keep track of all business expenses, categorize them, and manage budgets effectively to control costs and improve profitability.
'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Procurement'
                        paragraph='Streamline your procurement process by managing purchase orders, supplier contracts, and inventory replenishment efficiently.'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Security & Permissions'
                        paragraph='Ensure data security with role-based access control. Assign specific permissions to employees based on their roles to maintain data integrity.'
                      />
                    </li>
                    <li className='media flex-column flex-md-row text-center text-md-left mt-4'>
                      <i className='mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x'></i>
                      <Feature
                        heading='Mobile App (Coming soon *)'
                        paragraph='Access all the features of DukanBuddy on the go with our mobile app. Manage your business anytime, anywhere with ease.'
                      />
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

          {/* <!-- Why Choose Us --> */}
          <section className='section why-choose-us'>
            <div className='shapes-container'>
              <div className='pattern pattern-dots'></div>
            </div>
            <div className='container pb-8 bring-to-front'>
              <div className='section-heading text-center'>
                <h2 className='heading-line'>
                  Why you should choose Dukanbuddy?
                </h2>
                <p className='text-muted lead mx-auto'>
                  DukanBuddy can benefit various types of small businesses,
                  including mom & pop stores, grocery stores, medicine stores,
                  manufacturing companies, restaurants, cloud kitchens, book
                  stores, gift shops, hardware stores, salons, and more.
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
                <p className='lead'>Want to know more about our features ?</p>
              </div>
              <div className='row'>
                <div className='col-lg-8 mx-lg-auto'>
                  <FreQuestion
                    question='What are the major problems faced by MSMEs in India ?'
                    answer={
                      <div>
                        <p>
                          <strong>Lack of Credit -</strong> The most common
                          problem that all small-scale businesses have faced,
                          and are still facing, is of credit. Micro, Small and
                          medium enterprises (MSMEs) struggle to obtain
                          financial assistance due to several factors like
                          absence of collateral, lengthy paperwork, and lack of
                          trust in loan repayment capabilities.
                        </p>
                        <p>
                          <strong>Inadequate Infrastructure -</strong> Poor
                          roads, limited access to electricity, and unreliable
                          internet connectivity hinder their operations.
                          Investment in infrastructure development is necessary
                          to support the growth of SMEs across the nation.
                        </p>
                        <p>
                          <strong>Adoption to Technology -</strong> Many MSMEs
                          find it challenging to adopt modern technologies in
                          their operations. Such reluctance can contribute to
                          inefficiency and restrict competitiveness.
                        </p>
                        <p>
                          <strong>Marketing -</strong> Increasing marketability
                          of the products and services is a difficult task not
                          just for MSMEs, but for large-scale businesses as
                          well. When it comes to small-scale businesses, the
                          lack of resources – time, money, and skilled employees
                          – make it impossible to increase visibility and get
                          new customers.
                        </p>
                      </div>
                    }
                    targetId='q-1'
                  />
                  <FreQuestion
                    question='What is the future of Kirana stores and other small businesses (MSMEs) in India ?'
                    answer={
                      <p>
                        They are evolving from traditional brick-and-mortar
                        establishments into advanced retail hubs capable of
                        satisfying the needs of today consumers while preserving
                        their inherent charm. As they adopt new technologies and
                        platforms, Kirana stores are set to prosper, continuing
                        their role as the dynamo of Indian retail.
                      </p>
                    }
                    targetId='q-2'
                  />
                  <FreQuestion
                    question="How many Kirana's are there in India?"
                    answer={
                      <p>
                        Going by numbers, there are 13 million kirana stores in
                        India, contributing to 90% of the food and grocery
                        retail.
                      </p>
                    }
                    targetId='q-3'
                  />
                  <FreQuestion
                    question="What is the impact of MSME sector and how do they contribute in India's economy?"
                    answer={
                      <p>
                        Today, MSMEs contribute up to 33% of the country&apos;s
                        GDP. They play a vital role in the industrialization of
                        the rural sector in cost-efficient ways. MSMEs not only
                        fulfill the daily needs of people in the most accessible
                        way, but they also provide employment opportunities in
                        local communities and are often a significant source of
                        jobs in rural or underserved areas. 110 million people
                        are employed by MSMEs in India, which helps stimulate
                        the country&apos;s economic growth.
                      </p>
                    }
                    targetId='q-4'
                  />
                  <FreQuestion
                    question='What is the importance of GST for MSMEs in india?'
                    answer={
                      <p>
                        Registration under GST entitles MSMEs to various
                        benefits, such as seamless input tax credit, simplified
                        taxation structure, and increased market access across
                        India.However, many small businesses need help with
                        compliance requirements under the GST system.
                      </p>
                    }
                    targetId='q-5'
                  />
                  <FreQuestion
                    question='What are the benefits and govt. actions for adoption of GST by MSMEs in India?'
                    answer={
                      <div>
                        <p>
                          1. Various actions are taken for MSME growth by the
                          government as it is conscious of the immense
                          contribution of the sector. For instance, the initial
                          exemption level for commodities, which was Rs. 20
                          lakhs, has been increased to Rs. 40 lakhs.
                        </p>
                        <p>
                          2. The number of indirect taxes would get reduced.
                        </p>
                        <p>
                          3. The purpose is to draw more companies under the GST
                          ambit. Goods and services consumption would be
                          motivated.
                        </p>
                        <p>
                          4. It is simpler to find out the tax avoidance under
                          GST registration.
                        </p>
                        <p>
                          5. Once a GSTIN is allotted then the same could be
                          used for all the GST aspects.
                        </p>
                        <p>
                          6. The whole process of{" "}
                          <a href='https://blog.saginfotech.com/gst-registration-online'>
                            GST Registration
                          </a>{" "}
                          could be performed online.
                        </p>
                      </div>
                    }
                    targetId='q-6'
                  />
                  <FreQuestion
                    question='Which shop or business is most profitable in India?'
                    answer={
                      <div>
                        <p>
                          <strong>Kirana Stores:</strong> One needs to be lying
                          to say that life could go on without kirana stores!
                        </p>
                        <p>
                          <strong>Pharmacies and Medical Store:</strong> An
                          essential service that gained high prominence during
                          the pandemic, medical stores across India have turned
                          out to be highly profitable even during difficult
                          times.
                        </p>
                        <p>
                          <strong>Electronics and Mobile Phone Shops:</strong>{" "}
                          With phones becoming the necessity of the hour, one
                          could hardly avoid having one in the world of today.
                          From young adults to senior citizens, gadgets and
                          tools are a must for everyone! As long as you provide
                          additional repair and accessory services, you&apos;re
                          bound to have high customer retention!
                        </p>
                        <p>
                          <strong>Restaurants:</strong> India&apos;s population
                          of over 1.3 billion people presents a vast and diverse
                          market for the restaurant industry.With a rich
                          culinary heritage and diverse regional cuisines, there
                          is immense opportunity to cater to varied tastes and
                          preferences.
                        </p>
                        <p>
                          <strong>
                            Fashion Boutiques and Clothing Stores:
                          </strong>{" "}
                          Fashion boutiques and clothing stores offering trendy
                          apparel, accessories, footwear, and ethnic wear can be
                          profitable, especially in urban areas with a
                          fashion-conscious consumer base.
                        </p>
                        <p>
                          <strong>Cosmetics and Beauty Stores:</strong>{" "}
                          Cosmetics and beauty stores selling skincare products,
                          makeup, hair care products, and beauty accessories can
                          be profitable, catering to India&apos;s growing beauty
                          and grooming market.
                        </p>
                      </div>
                    }
                    targetId='q-7'
                  />
                  <FreQuestion
                    question='How to register for Goods and Services Tax (GST)?'
                    answer={
                      <p>
                        f your shop&apos;s annual turnover exceeds the threshold
                        limit set by the GST authorities (which varies by
                        state), you must register for GST. Visit the{" "}
                        <a href='https://www.gst.gov.in/'>GST Portal</a> to
                        apply for GST registration online. You will need to
                        provide various documents and details about your
                        business.
                      </p>
                    }
                    targetId='q-8'
                  />
                  <FreQuestion
                    question='How kirana stores and other small businesses (MSMEs) are leveraging technology?'
                    answer={
                      <div>
                        <p>
                          MSMEs in India are increasingly leveraging technology
                          to streamline operations, improve efficiency, and
                          enhance customer experience. Here are some common ways
                          MSMEs including kirana stores are using technology-
                        </p>
                        <p>
                          <strong>Point of Sale (POS) Systems:</strong> Many
                          kirana stores are adopting POS systems to manage sales
                          transactions, inventory, and customer data digitally.
                          POS systems help in tracking sales, managing inventory
                          levels, and generating reports for better
                          decision-making.
                        </p>
                        <p>
                          <strong>
                            Barcode Scanners and Inventory Management Software:
                          </strong>{" "}
                          Kirana stores are using barcode scanners and inventory
                          management software to automate inventory tracking and
                          stock management. This helps in reducing manual
                          errors, optimizing stock levels, and improving overall
                          efficiency.
                        </p>
                        <p>
                          <strong>Digital Payments and Mobile Wallets:</strong>{" "}
                          With the increasing adoption of digital payments in
                          India, kirana stores are accepting payments through
                          digital wallets, UPI (Unified Payments Interface), and
                          mobile banking apps. This offers convenience to
                          customers and reduces the dependence on cash
                          transactions.
                        </p>
                        <p>
                          <strong>Online Ordering and Delivery Apps:</strong>{" "}
                          Some kirana stores have partnered with online ordering
                          and delivery platforms to reach a wider customer base
                          and offer home delivery services. Customers can place
                          orders through mobile apps or websites, and the kirana
                          store fulfills the orders accordingly.
                        </p>
                        <p>
                          <strong>
                            Customer Relationship Management (CRM) Software:
                          </strong>{" "}
                          Kirana stores are using CRM software to manage
                          customer data, preferences, and purchase history. This
                          enables personalized marketing, loyalty programs,and
                          targeted promotions to retain existing customers and
                          attract new ones.
                        </p>
                      </div>
                    }
                    targetId='q-9'
                  />
                  <FreQuestion
                    question='>What is DukanBuddy?'
                    answer={
                      <p>
                        DukanBuddy is a tech solution designed to help small
                        businesses in India and in other countries, such as mom
                        & pop stores, grocery stores, medicine stores,
                        manufacturing companies, restaurants, cloud kitchens,
                        book stores, gift shops, hardware stores, and salons, to
                        manage their operations more efficiently, increase
                        sales, manage customers efficiently, and market their
                        goods.
                      </p>
                    }
                    targetId='q-10'
                  />
                  <FreQuestion
                    question='How can DukanBuddy benefit my kirana store?'
                    answer={
                      <p>
                        DukanBuddy can help you manage inventory, orders,
                        deliveries, and customer information, allowing you to
                        streamline your operations and improve customer service.
                      </p>
                    }
                    targetId='q-11'
                  />
                  <FreQuestion
                    question='Is DukanBuddy easy to use?'
                    answer={
                      <p>
                        Yes, DukanBuddy is designed to be user-friendly, with
                        intuitive interfaces and easy-to-understand features.
                      </p>
                    }
                    targetId='q-13'
                  />
                  <FreQuestion
                    question='Can DukanBuddy help me with online sales?'
                    answer={
                      <p>
                        Yes,DukanBuddy can help you manage online sales through
                        features like order management and inventory tracking.
                      </p>
                    }
                    targetId='q-14'
                  />
                  <FreQuestion
                    question='How can I get started with DukanBuddy?'
                    answer={
                      <p>
                        You can get started with DukanBuddy by signing up on our
                        website and following the onboarding process.
                      </p>
                    }
                    targetId='q-15'
                  />
                  <FreQuestion
                    question="Is DukanBuddy customizable to suit my store's needs?"
                    answer={
                      <p>
                        Yes, DukanBuddy is customizable, allowing you to tailor
                        the platform to meet your store&apos;s specific
                        requirements. Please contact us if you need any specific
                        customization, we will help you out.
                      </p>
                    }
                    targetId='q-16'
                  />
                  <FreQuestion
                    question='How much does DukanBuddy cost?'
                    answer={
                      <p>
                        The cost of DukanBuddy depends on the features and
                        services you choose. Currently, a beta version has been
                        released and it&apos;s free to use for pilot users. If
                        you want to be part of our pilot member to use it, then
                        please contact our sales team for pricing information.
                      </p>
                    }
                    targetId='q-17'
                  />
                  <FreQuestion
                    question='Is there a minimum contract period for DukanBuddy?'
                    answer={
                      <p>
                        Currently, a beta version has been released and its free
                        to use for pilot users. If you want to be part of our
                        pilot team to use it, then please contact our sales team
                        for pricing information.
                      </p>
                    }
                    targetId='q-18'
                  />
                  <FreQuestion
                    question='Can DukanBuddy help me with marketing my store?'
                    answer={
                      <p>
                        Yes, DukanBuddy can help you with marketing by providing
                        customer insights and personalized marketing campaigns.
                      </p>
                    }
                    targetId='q-19'
                  />
                  <FreQuestion
                    question='Is DukanBuddy suitable for all types of small businesses?'
                    answer={
                      <p>
                        DukanBuddy is primarily designed for small businesses
                        and it can very well be used for all small businesses.
                        Founders of DukanBuddy are very passionate about
                        democratizing the solutions offered to small businesses
                        to help them grow, just like a good buddy.
                      </p>
                    }
                    targetId='q-20'
                  />
                  <FreQuestion
                    question='What types of businesses can benefit from using DukanBuddy?'
                    answer={
                      <p>
                        DukanBuddy can benefit various types of small
                        businesses, including mom & pop stores, grocery stores,
                        medicine stores, manufacturing companies, restaurants,
                        cloud kitchens, book stores, gift shops, hardware
                        stores, salons, and more.
                      </p>
                    }
                    targetId='q-21'
                  />
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
                <img src={logo} alt='Logo' className='logo' />
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
