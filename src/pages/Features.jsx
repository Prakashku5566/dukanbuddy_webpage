import accountIcon from "../../src/assets/business_13582738.png";
import aiIcon from "../../src/assets/ai.png";
import customer from "../../src/assets/people.png";
import inventory from "../../src/assets/distribution.png";
import "../App.css";
import { useTranslation } from "react-i18next";
// import CommonPage from "./CommonPage";
// import somwthing from '../../'
export const Features = () => {
  const { t } = useTranslation();
  return (
    <section
      className='section alter3-features'
      id='features'
      style={{ backgroundColor: "#9aa2e2" }}
    >
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
                {t("FEATURES.POWERFUL_FEATURES")}
              </p>
              {/* <h2 className='heading-line'>
                      A complete feature stack ready to help you
                    </h2> */}
              <p className='lead text-muted my-4 semi-bold'>
                {t("FEATURES.WE_ALSO_PROVIDE")}
              </p>
              <ul>
                <li>
                  <strong> {t("FEATURES.CUSTOMER_MANAGEMENT")}</strong>{" "}
                  {t("FEATURES.TRACK_CUSTOMER")}
                </li>
                <li>
                  <strong> {t("FEATURES.AUTOMATED_REMINDERS")}</strong>{" "}
                  {t("FEATURES.TIMELY_SHOPPING")}
                </li>
                <li>
                  <strong> {t("FEATURES.EMPLOYEE_MANAGEMENT")}</strong>{" "}
                  {t("FEATURES.MANAGE_SALARY")}
                </li>
                <li>
                  <strong> {t("FEATURES.USER_FRIENDLY")}</strong>{" "}
                  {t("FEATURES.NAVIGATE_EFFORTLESSLY")}
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
                      <h4 className='bold mb-5'>
                        {" "}
                        {t("FEATURES_CARD.ACCOUNTING")}
                      </h4>
                      <p className='text-muted lead'>
                        {t("FEATURES_CARD.INCREASE_CASH")}
                        <ul>
                          <li>
                            {" "}
                            {t("FEATURES_CARD.SENDING_PAYMENT_REMINDERS")}
                          </li>
                          <li> {t("FEATURES_CARD.HANDLING_GST")}</li>
                          <li> {t("FEATURES_CARD.TRACKING_SALES")}</li>
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
                      <h4 className='bold mb-5'>
                        {t("FEATURES_CARD.CUSTOMER_VIEW")}
                      </h4>
                      <p className='text-muted lead'>
                        <ul>
                          <li>{t("FEATURES_CARD.SEND_EMAILS")}</li>
                          <li>{t("FEATURES_CARD.UNDERSTAND_TRENDS")}</li>
                          <li>{t("FEATURES_CARD.BUILD_RELATIONSHIP")}</li>
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
                      <h4 className='bold mb-5'>
                        {" "}
                        {t("FEATURES_CARD.INVENTORY_MANAGEMENT")}
                      </h4>
                      <p className='text-muted lead'>
                        <ul>
                          <li> {t("FEATURES_CARD.ONE_CLICK_STOCK")}</li>
                          <li> {t("FEATURES_CARD.REAL_TIME_ORDER")}</li>
                          <li>{t("FEATURES_CARD.EASY_HANDLING")}</li>
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
                        {" "}
                        {t("FEATURES_CARD.AI_DRIVEN")}
                      </h4>
                      <p className='text-muted lead'>
                        <ul>
                          <li>{t("FEATURES_CARD.CHANGING_DEMANDS")}</li>
                          <li>{t("FEATURES_CARD.RECEIVE_COMPETITIVE")}</li>
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
