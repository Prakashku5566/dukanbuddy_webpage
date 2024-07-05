import accountIcon from "../../src/assets/business_13582738.png";
import aiIcon from "../../src/assets/ai.png";
import customer from "../../src/assets/people.png";
import inventory from "../../src/assets/distribution.png";
import "../App.css";
// import CommonPage from "./CommonPage";
// import somwthing from '../../'
export const Features = () => {
  return (
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
                  <strong>Customer Management:</strong> Keep track of customers
                  and their last shopping dates.
                </li>
                <li>
                  <strong>Automated Reminders:</strong> Send timely shopping
                  reminders to customers.
                </li>
                <li>
                  <strong>Employee Management:</strong> Easily manage employee
                  details, wages, and salaries.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Navigate
                  effortlessly with our intuitive design.
                </li>
              </ul>
              {/* <a
                      href='#!'
                      className='more-link btn btn-primary text-contrast bold'
                    >
                      Know More
                    </a> */}
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
                            Send marketing Emails/SMS to attract new customers.
                          </li>
                          <li>
                            Understand customer’s buying trends and preferences.
                          </li>
                          <li>
                            Build meaningful relationships with your customers.
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
                      <h4 className='bold mb-5'>AI driven Market Insights</h4>
                      <p className='text-muted lead'>
                        <ul>
                          <li>
                            Know changing demands with changing seasons,
                            festivals, and occasions.
                          </li>
                          <li>
                            Receive competitive product suggestions to increase
                            your margin.
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
  );
};

export const FeaturesWith = () => {
  return (
    <main className='overflow-hidden position-relative'>
      <header className='header alter3-header section gradient card-header text-contrast'>
        <Features />/
      </header>
    </main>
  );
};
