import { useEffect } from "react";
import "./App.css";
import logo from "../img/logod.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import Feature from "./pages/CoreFeatures";
import FreQuestion from "./pages/FreQuestion";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Shapes from "./pages/Shapes";
import { WhyYouChoose } from "./pages/CommonPage";
import { Features } from "./pages/Features";
import { Blogs } from "./pages/Blogs";
// import rocket from "../img/rocket.png";
// import inventory from "../img/inventory.png";
// import customerManagement from "../img/management.png";
// import
function App() {
  const { t } = useTranslation();
  // const [showBasicModal, setShowBasicModal] = useState(false);
  // const [showEnterpriseModal, setShowEnterpriseModal] = useState(false);
  // const [showBusinessModal, setShowBusinessModal] = useState(false);
  // Function to toggle modal visibility
  // const toggleModal = (modal) => {
  //   if (modal === "basic") setShowBasicModal(!showBasicModal);
  //   else if (modal === "enterprise")
  //     setShowEnterpriseModal(!showEnterpriseModal);
  //   else if (modal === "business") setShowBusinessModal(!showBusinessModal);
  // };
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/661936d4a0c6737bd12b14fa/1hr97sc8l";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);
  useEffect(() => {
    const savedLanguage = localStorage.getItem("lng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <>
      <div>
        <main className='overflow-hidden position-relative'>
          <header
            className='header alter3-header section gradient gradient-primary-auxiliary text-contrast'
            id='home'
          >
            <Shapes />
            <div className='container bring-to-front'>
              <div className='row'>
                <div className='col-md-6'>
                  <h1 className='font-semibold display-md-5 font-md mt-6'>
                    {t("COMMON.SMALL_BUSINESS")}
                    <span className='d-block display-md-4 light'>
                      {t("COMMON.SMART_BUSINESS")}
                    </span>
                  </h1>
                  <p className='lead mb-3'>{t("COMMON.SMART_BUSINESS_DATA")}</p>
                  <nav className='nav mt-5'>
                    {/* <a
                      href='#'
                      className='nav-link mr-3 btn btn-rounded btn-contrast'
                    >
                      <i className='fas fa-tag mr-3'></i> Plans & pricing{" "}
                    </a> */}
                    <a>
                      Inventory Management | Billing | Accounting | customer
                      management. much more ..
                    </a>
                    <div>
                      <a
                        href='https://app.dukanbuddy.com/'
                        target='_blank'
                        className='nav-link btn btn-rounded btn-outline-contrast mt-3'
                      >
                        {t("COMMON.START_NOW")}
                      </a>
                    </div>
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
                <img src='img/screens/app/2.png' alt='madhu' />
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
                    href='https://app.dukanbuddy.com/'
                    className='more-link btn btn-outline-primary bold'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Powerful Features --> */}
          <Features />
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
          </section>

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
                      <img
                        src={"inventory"}
                        className='img-responsive'
                        alt=''
                      />
                    </figure>
                  </div>
                  <figure className='bubble bubble-right rounded overflow-hidden shadow'>
                    <img
                      src={"rocket"}
                      className='img-responsive'
                      alt='rocket'
                      data-aos='fade-left'
                    />
                  </figure>
                  <div className='iphone light'>
                    <div className='screen shadow-box'>
                      <img src={"customerManagement"} alt='...' />
                    </div>
                    <div className='notch'></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className='section pricing-plans' id='pricing'>
            <div className='shapes-container overflow-clear'></div>
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
              </div>
            </div>
            {/* Call to action */}
          {/* <div className='container pt-0 border-bottom'>
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
          </section> */}
          {/* <!-- Integrations --> */}
          {/* <!-- Why Choose Us --> */}
          <section className='section why-choose-us'>
            <div className='shapes-container'>
              <div className='pattern pattern-dots'></div>
            </div>
            <div className='container pb-8 bring-to-front'>
              <WhyYouChoose />
              <div className='row gap-y'>
                <div className='col-md-6'>
                  <h4 className='bold text-alternate'>
                    It all starts by choosing the right tools
                  </h4>
                  <p className='text-muted lead mb-5'>
                    At DukanBuddy, selecting the right tools is the first step
                    to success. Our solutions seamlessly integrate, boost your
                    marketing, and offer top-notch support.
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
                            *Easy Connectivity: Smooth integration with existing
                            systems.
                            <br />
                            *Unified Platform: Manage everything in one place.
                            <br />
                            *Scalable Solutions: Grow with your business.
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
                            *Targeted Reach: Data-driven strategies to hit your
                            audience.
                            <br />
                            *Brand Building: Strengthen your business presence.
                            <br />
                            *Performance Insights: Refine strategies with
                            detailed analytics.
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
                            *24/7 Help: Round-the-clock assistance.
                            <br />
                            *Training: Access to extensive training materials.
                            <br />
                            *Customer Success: Ongoing support for business
                            growth.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <hr className='my-5' />
                  <div className='text-center text-md-left'>
                    <a
                      href='/contact-page'
                      className='btn btn-primary text-contrast'
                    >
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
          <section id='f&q' className='f&q'></section>
          <section className='section faqs-dd bg-light edge top-left'>
            <div className='shapes-container'>
              <div className='absolute icon' data-aos='fade-down-left'>
                <i className='fas fa-question'></i>
              </div>
            </div>
            <div className='container'>
              <div className='section-heading text-center'>
                <h2 className='heading-line'>
                  {t("ASKED.FREQUENTLY_ASKED_QUESTION")}
                </h2>
                <p className='lead'> {t("ASKED.KNOW_MORE_ABOUT_FEATURES")}</p>
              </div>
              <div className='row'>
                <div className='col-lg-8 mx-lg-auto'>
                  <FreQuestion
                    question={t("ASKED.WHAT_ARE_THE_MAJOR_PROBLEMS")}
                    answer={
                      <div>
                        <p>
                          <strong>{t("ASKED.LACK_OF_CREDIT")}</strong>
                          {t("ASKED.LACK_OF_CREDIT_POINT")}
                        </p>
                        <p>
                          <strong>
                            {t("ASKED.INADEQUATE_INFRASTRUCTURE")}
                          </strong>{" "}
                          {t("ASKED.INADEQUATE_INFRASTRUCTURE_POINT")}
                        </p>
                        <p>
                          <strong> {t("ASKED.ADOPTION_TO_TECHNOLOGY")}</strong>{" "}
                          {t("ASKED.ADOPTION_TO_TECHNOLOGY_PONT")}
                        </p>
                        <p>
                          <strong>{t("ASKED.MARKETING")}</strong>
                          {t("ASKED.MARKETING_POINT")}
                        </p>
                      </div>
                    }
                    targetId='q-1'
                  />
                  <FreQuestion
                    question={t("ASKED.FUTURE_KIRANA_STORE")}
                    answer={<p>{t("ASKED.FUTURE_KIRANA_STORE_ANSWER")}</p>}
                    targetId='q-2'
                  />
                  <FreQuestion
                    question={t("ASKED.HOW_MANY_STORE")}
                    answer={<p>{t("ASKED.HOW_MANY_STORE_ANSWER")}</p>}
                    targetId='q-3'
                  />
                  <FreQuestion
                    question={t("ASKED.INDIAS_ECONOMY")}
                    answer={<p>{t("ASKED.INDIAS_ECONOMY_ANSWER")}</p>}
                    targetId='q-4'
                  />
                  <FreQuestion
                    question={t("ASKED.GST_FOR_MSME")}
                    answer={<p>{t("ASKED.GST_FOR_MSME_ANSWER")}</p>}
                    targetId='q-5'
                  />
                  <FreQuestion
                    question={t("ASKED.BENIFITS_AND_GOVT")}
                    answer={
                      <div>
                        <p>{t("ASKED.BENIFITS_AND_GOVT_POINT_ONE")}</p>
                        <p>{t("ASKED.BENIFITS_AND_GOVT_POINT_TWO")}</p>
                        <p>{t("ASKED.BENIFITS_AND_GOVT_POINT_THREE")}</p>
                        <p>{t("ASKED.BENIFITS_AND_GOVT_POINT_FOUR")}</p>
                        <p>{t("ASKED.BENIFITS_AND_GOVT_POINT_FIVE")}</p>
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
                    question={t("ASKED.MOST_PROFITABLE")}
                    answer={
                      <div>
                        <p>
                          <strong>{t("ASKED.KIRANA_STORE")}</strong>
                          {t("ASKED.KIRANA_STORE_POINT")}
                        </p>
                        <p>
                          <strong> {t("ASKED.MEDICAL_STORE")}</strong>
                          {t("ASKED.MEDICAL_STORE_POINT")}
                        </p>
                        <p>
                          <strong> {t("ASKED.MOBILE_STORE")}</strong>
                          {t("ASKED.MOBILE_STORE_POINT")}
                        </p>
                        <p>
                          <strong> {t("ASKED.RESTAURANTS")}</strong>
                          {t("ASKED.RESTAURANTS_POINT")}
                        </p>
                        <p>
                          <strong>{t("ASKED.CLOTHING_STORE")}</strong>
                          {t("ASKED.CLOTHING_STORE_POINT")}
                        </p>
                        <p>
                          <strong> {t("ASKED.COSMATICS")}</strong>
                          {t("ASKED.COSMATICS_POINT")}
                        </p>
                      </div>
                    }
                    targetId='q-7'
                  />
                  <FreQuestion
                    question={t("ASKED.GOODS_AND_SERVICES")}
                    answer={
                      <p>
                        {t("ASKED.GOODS_AND_SERVICES_ANSWER")}
                        <a href='https://www.gst.gov.in/'>GST Portal</a>
                        {t("ASKED.GOODS_AND_SERVICES_ANSWER_TWO")}
                      </p>
                    }
                    targetId='q-8'
                  />
                  <FreQuestion
                    question={t("ASKED.SMALL_KIRANA_BUSINESS")}
                    answer={
                      <div>
                        <p>{t("ASKED.SMALL_KIRANA_BUSINESS_POINT")}</p>
                        <p>
                          <strong>{t("ASKED.SALE_SYSTEM")}</strong>{" "}
                          {t("ASKED.SALE_SYSTEM_POINT")}
                        </p>
                        <p>
                          <strong>{t("ASKED.BARCODE_SCANNERS")}</strong>
                          {t("ASKED.BARCODE_SCANNERS_POINT")}
                        </p>
                        <p>
                          <strong> {t("ASKED.DIGITAL_PAYMENTS")}</strong>
                          {t("ASKED.DIGITAL_PAYMENTS_POINT")}
                        </p>
                        <p>
                          <strong> {t("ASKED.DELIVERY_APPS")}</strong>
                          {t("ASKED.DELIVERY_APPS_POINT")}
                        </p>
                        <p>
                          <strong>{t("ASKED.RELATIONSHIP_MANAGEMENT")}</strong>
                          {t("ASKED.RELATIONSHIP_MANAGEMENT_POINT")}
                        </p>
                      </div>
                    }
                    targetId='q-9'
                  />
                  <FreQuestion
                    question={t("ASKED.WHAT_IS_DUKANBUDDY")}
                    answer={<p>{t("ASKED.WHAT_IS_DUKANBUDDY_ANSWER")}</p>}
                    targetId='q-10'
                  />
                  <FreQuestion
                    question={t("ASKED.BENEFITS_OF_STORE")}
                    answer={<p>{t("ASKED.BENEFITS_OF_STORE_POINT")}</p>}
                    targetId='q-11'
                  />
                  <FreQuestion
                    question={t("ASKED.EASY_TO_USE")}
                    answer={<p>{t("ASKED.EASY_TO_USE_ANSWER")}</p>}
                    targetId='q-13'
                  />
                  <FreQuestion
                    question={t("ASKED.HELP_WITH_ONLINE_SALES")}
                    answer={<p>{t("ASKED.HELP_WITH_ONLINE_SALES_ANSWER")}</p>}
                    targetId='q-14'
                  />
                  <FreQuestion
                    question={t("ASKED.STRAT_WITH_DUKANBUDDY")}
                    answer={<p>{t("ASKED.STRAT_WITH_DUKANBUDDY_ANSWER")}</p>}
                    targetId='q-15'
                  />
                  <FreQuestion
                    question={t("ASKED.COSTOMIZED_SUITS_MY_STORE")}
                    answer={
                      <p>{t("ASKED.COSTOMIZED_SUITS_MY_STORE_ANSWER")}</p>
                    }
                    targetId='q-16'
                  />
                  <FreQuestion
                    question={t("ASKED.DUKANBUDDY_COST")}
                    answer={<p>{t("ASKED.DUKANBUDDY_COST_ANSWER")}</p>}
                    targetId='q-17'
                  />
                  <FreQuestion
                    question={t("ASKED.MINIMUM_CONTRACT")}
                    answer={<p>{t("ASKED.MINIMUM_CONTRACT_ANSWER")}</p>}
                    targetId='q-18'
                  />
                  <FreQuestion
                    question={t("ASKED.MARKETING_MY_STORE")}
                    answer={<p>{t("ASKED.MARKETING_MY_STORE_ANSWER")}</p>}
                    targetId='q-19'
                  />
                  <FreQuestion
                    question={t("ASKED.TYPES_SMALL_BUSINESS")}
                    answer={<p>{t("ASKED.TYPES_SMALL_BUSINESS_ANSWER")}</p>}
                    targetId='q-20'
                  />
                  <FreQuestion
                    question={t("ASKED.BENIFITS_OF_DUKANBUDDY")}
                    answer={<p>{t("ASKED.BENIFITS_OF_DUKANBUDDY_ANSWER")}</p>}
                    targetId='q-21'
                  />
                </div>
              </div>
            </div>
          </section>
          {/* blogs */}
          <section id='blogs' className='blogs'></section>
          <Blogs />

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
                  href='https://app.dukanbuddy.com/'
                  className='btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0'
                >
                  Sign up
                </a>
                <a
                  href='mailto:contact@dukanbuddy.com'
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
                      <h4 className='text-primary'>Contact Customer Care</h4>
                      <a
                        href='mailto:contact@dukanbuddy.com'
                        className='more-link d-flex align-items-center mt-0'
                      >
                        Contact@dukanbuddy.com
                      </a>
                      <p className='mt-4'>
                        Looking for a custom quote? Need to tell us more about
                        your business? Want a demonstration? Drop us a line.
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
                {/* <p>
                  Laapp, a carefully crafted and powerful HTML5 template, it is
                  perfect to showcase your App or Startup
                </p> */}
              </div>
              <div className='col-md-2'>
                <nav className='nav flex-column'>
                  <a className='nav-item py-2 text-contrast' href='#f&q'>
                    F&Q
                  </a>
                  <a className='nav-item py-2 text-contrast' href='/'>
                    Home
                  </a>
                  <a className='nav-item py-2 text-contrast' href='#blogs'>
                    Blog
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
                  <a
                    className='nav-item py-2 text-contrast'
                    href='/carees-page'
                  >
                    Careers
                  </a>
                  <a
                    className='nav-item py-2 text-contrast'
                    href='/contact-page'
                  >
                    Contact
                  </a>
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
                    <i className='fab fa-facebook'></i>
                  </a>
                  <a
                    href='https://www.linkedin.com/company/cogitofs/'
                    className='btn btn-circle btn-sm brand-twitter'
                    title='linkdin'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a
                    href='https://www.instagram.com/dukanbuddy?igsh=MWkybXg1YjM0dWlwZA%3D%3D&utm_source=qr'
                    className='btn btn-circle btn-sm brand-instagram'
                    title='instagram'
                  >
                    <i className='fab fa-instagram'></i>
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
      </div>
    </>
  );
}

export default App;
