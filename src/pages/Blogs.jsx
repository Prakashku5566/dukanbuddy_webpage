import { Link } from "react-router-dom";

import gst from "../../img/1.png";
import digital from "../../img/2.png";
import kiranaStore from "../../img/3.png";
import retailLandscape from "../../img/4.png";
import embaricingChange from "../../img/5.png";
import StrategiesForMSMEsPage from "../../img/6.png";
export const Blogs = () => {
  return (
    <section className='section blogs'>
      <div className='shapes-container'>
        <div className='pattern pattern-dots'></div>
      </div>
      <div className='container pb-8 bring-to-front'>
        <div className='section-heading text-center'>
          <h2 className='heading-line'>Blogs</h2>
          <p className='text-muted lead mx-auto'>
            At DukanBuddy, our blog is dedicated to supporting micro, small, and
            medium businesses with expert advice and practical tips. Discover
            success stories, industry trends, and innovative strategies to help
            your business thrive. Stay updated on the latest features and
            enhancements in our platform, and learn how to optimize your
            operations and engage customers effectively. Join us to gain
            valuable insights tailored to your unique business needs.
          </p>
        </div>
        <div id='blogCarousel' className='carousel slide' data-ride='carousel'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='card fancy-card shadow-lg border-0 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-12'>
                        <img
                          src={gst}
                          className='img-fluid rounded'
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt='GST Benefits'
                        />
                        <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                          <Link
                            to='/gst-benifit-page'
                            className='btn btn-primary'
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card fancy-card shadow-lg border-0 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-12'>
                        <img
                          src={digital}
                          className='img-fluid rounded'
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt='Digital Revolution'
                        />
                        <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                          <Link
                            to='/digital-revolution-page'
                            className='btn btn-primary'
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second carousel item */}
            <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='card fancy-card shadow-lg border-0 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-12'>
                        <img
                          src={kiranaStore}
                          className='img-fluid rounded'
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt='Mighty Kirana'
                        />
                        <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                          <Link
                            to='/TheMightyKiranaPage'
                            className='btn btn-primary'
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card fancy-card shadow-lg border-0 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-12'>
                        <img
                          src={retailLandscape}
                          className='img-fluid rounded'
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt='Revolutionizing Kirana Stores'
                        />
                        <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                          <Link
                            to='/RevolutionizingKiranaStoresPage'
                            className='btn btn-primary'
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third carousel item */}
            <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='card fancy-card shadow-lg border-0 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-12'>
                        <img
                          src={embaricingChange}
                          className='img-fluid rounded'
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt='Embracing Change'
                        />
                        <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                          <Link to='/blog-page' className='btn btn-primary'>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card fancy-card shadow-lg border-0 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-12'>
                        <img
                          src={StrategiesForMSMEsPage}
                          className='img-fluid rounded'
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt='Supply Chain'
                        />
                        <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                          <Link
                            to='/StrategiesForMSMEsPage'
                            className='btn btn-primary'
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='card fancy-card shadow-lg border-0 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-12'>
                        <img
                          src={gst}
                          className='img-fluid rounded'
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt='GST Food Services'
                        />
                        <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                          <Link to='/blog-page' className='btn btn-primary'>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'></div>
              </div>
            </div> */}
          </div>

          <a
            className='carousel-control-prev custom-carousel-prev'
            href='#blogCarousel'
            role='button'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon custom-carousel-prev-icon'></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next custom-carousel-next'
            href='#blogCarousel'
            role='button'
            data-slide='next'
          >
            <span className='carousel-control-next-icon custom-carousel-next-icon'></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
        <div className='text-center mt-4'>
          <Link to='/blogs' className='btn btn-primary'>
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};
